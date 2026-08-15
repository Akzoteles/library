/* ============================================================
   SHARED SITE LOGIC — used by all three rooms
   You shouldn't need to edit this file. Add your books, shows,
   or games in that room's own data file instead (books-data.js,
   shows-data.js, games-data.js).
   ============================================================ */
(function () {
  "use strict";

  var config = window.ROOM_CONFIG;
  var ALL_ITEMS = Array.isArray(window.ITEMS) ? window.ITEMS : [];

  if (!config) {
    console.error("ROOM_CONFIG is missing — make sure this page loads its *-data.js file before app.js.");
    return;
  }

  var BATCH_SIZE = 10;
  var shelvesEl = document.getElementById("shelves");
  var sentinel = document.getElementById("sentinel");
  var endMessage = document.getElementById("end-message");
  var emptyMessage = document.getElementById("empty-message");

  // The items currently on screen, after the category filter has
  // been applied. Recomputed whenever the filter changes.
  var activeItems = ALL_ITEMS;
  var nextIndex = 0;

  // A small, muted palette for items with no cover image, so an
  // un-covered item still looks intentional rather than broken.
  var FALLBACK_COLORS = [
    "#7a3b3b", "#3b5a7a", "#4b6b4f", "#7a5a3b",
    "#5a3b6b", "#3b6b66", "#8a4a2f", "#38506b"
  ];

  // Deterministic hash so the same item always gets the same
  // width/tilt/color, but different items look varied.
  function hashString(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) >>> 0;
    }
    return h;
  }

  // ---------------- Icons ----------------
  var ICONS = {
    circle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="7.5"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,13 9,18 20,6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'
  };

  // Positional status colors: 1st status in a room's config is
  // always "not started," 2nd is "active" (tinted to the room's
  // accent color), 3rd is "done," 4th is "dropped."
  //
  // The 2nd slot references --color-accent directly (not through
  // an intermediate --color-status-active variable) because CSS
  // custom properties don't "re-derive" across a body[data-room]
  // override when accessed through another variable defined at
  // :root — the direct reference is what makes each room's badge
  // actually pick up that room's accent color.
  var STATUS_SLOT_COLORS = [
    "var(--color-status-notstarted)",
    "var(--color-accent)",
    "var(--color-status-done)",
    "var(--color-status-dropped)"
  ];
  var STATUS_SLOT_ICON_COLORS = [
    "var(--color-cream)",
    "var(--color-ink)",
    "var(--color-cream)",
    "var(--color-cream)"
  ];

  // ---------------- Reading/watching/playing status ----------------
  function normalizeStatus(raw) {
    var key = (raw || "").toString().trim().toLowerCase();
    if (!key) return 0;
    for (var i = 0; i < config.statuses.length; i++) {
      var s = config.statuses[i];
      if (s.key === key) return i;
      if (s.aliases && s.aliases.indexOf(key) !== -1) return i;
    }
    return 0; // unrecognized status falls back to "not started"
  }

  function statusInfo(slotIndex) {
    var cfg = config.statuses[slotIndex];
    return {
      label: cfg.label,
      color: STATUS_SLOT_COLORS[slotIndex],
      iconColor: STATUS_SLOT_ICON_COLORS[slotIndex],
      icon: ICONS[cfg.icon] || ICONS.circle
    };
  }

  function makeStatusBadge(slotIndex) {
    var info = statusInfo(slotIndex);
    var span = document.createElement("span");
    span.className = "book-status";
    span.style.background = info.color;
    span.style.color = info.iconColor;
    span.title = info.label;
    span.innerHTML = info.icon;
    return span;
  }

  // ---------------- Category filter ----------------
  // An item with no category (or an unrecognized one) always shows,
  // in every filter — an unlabeled item should never just vanish.
  function normalizeCategory(raw) {
    var key = (raw || "").toString().trim().toLowerCase();
    for (var i = 0; i < config.categories.length; i++) {
      if (config.categories[i].key === key) return key;
    }
    return null;
  }

  function getFilteredItems(filter) {
    if (filter === "both") return ALL_ITEMS;
    return ALL_ITEMS.filter(function (item) {
      var cat = normalizeCategory(item.category);
      return cat === null || cat === filter;
    });
  }

  // ---------------- Shelf rendering ----------------
  function makeItemElement(item) {
    var hash = hashString((item.title || "") + "|" + (item.by || ""));
    var width = 108 + (hash % 34); // 108–142px
    var tilt = (hash % 9 === 0) ? (((hash % 5) - 2) * 1.4) : 0; // occasional gentle lean
    var statusSlot = normalizeStatus(item.status);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "book";
    btn.style.width = width + "px";
    btn.style.setProperty("--book-tilt", tilt + "deg");
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-label",
      "Open notes for " + (item.title || "this " + config.itemNoun) +
      " — " + statusInfo(statusSlot).label);

    if (item.cover) {
      var img = document.createElement("img");
      img.src = item.cover;
      img.alt = (item.title || "cover image");
      img.loading = "lazy";
      img.onerror = function () {
        img.remove();
        btn.appendChild(makeFallback(item, hash));
      };
      btn.appendChild(img);
    } else {
      btn.appendChild(makeFallback(item, hash));
    }

    btn.appendChild(makeStatusBadge(statusSlot));

    btn.addEventListener("click", function () {
      openModal(item, hash, statusSlot);
    });

    return btn;
  }

  function makeFallback(item, hash) {
    var wrap = document.createElement("span");
    wrap.className = "book-fallback";
    wrap.style.setProperty("--book-color", FALLBACK_COLORS[hash % FALLBACK_COLORS.length]);

    var title = document.createElement("span");
    title.className = "fb-title";
    title.textContent = item.title || "Untitled";

    var by = document.createElement("span");
    by.className = "fb-author";
    by.textContent = item.by || "";

    wrap.appendChild(title);
    wrap.appendChild(by);
    return wrap;
  }

  function renderNextBatch() {
    if (nextIndex >= activeItems.length) return;

    var shelf = document.createElement("section");
    shelf.className = "shelf";
    shelf.setAttribute("aria-label", "Shelf");

    var end = Math.min(nextIndex + BATCH_SIZE, activeItems.length);
    for (var i = nextIndex; i < end; i++) {
      shelf.appendChild(makeItemElement(activeItems[i]));
    }
    shelvesEl.appendChild(shelf);
    nextIndex = end;
    endMessage.hidden = nextIndex < activeItems.length;
  }

  // Older browsers without IntersectionObserver just get the whole
  // shelf rendered at once, rather than no shelf at all.
  var supportsObserver = "IntersectionObserver" in window;
  var observer = supportsObserver
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) renderNextBatch();
        });
      }, { rootMargin: "600px 0px" })
    : null;

  // ---------------- Filter bar ----------------
  var filterBar = document.getElementById("filter-bar");

  function buildFilterBar() {
    if (!filterBar) return;
    filterBar.innerHTML = "";

    config.categories.forEach(function (cat) {
      filterBar.appendChild(makeFilterButton(cat.key, cat.label));
    });
    filterBar.appendChild(makeFilterButton("both", "Both"));

    filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
  }

  function makeFilterButton(key, label) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn" + (key === "both" ? " is-active" : "");
    btn.setAttribute("data-filter", key);
    btn.setAttribute("aria-pressed", key === "both" ? "true" : "false");
    btn.textContent = label;
    return btn;
  }

  function applyFilter(filter) {
    activeItems = getFilteredItems(filter);

    shelvesEl.innerHTML = "";
    nextIndex = 0;
    endMessage.hidden = true;

    if (activeItems.length === 0) {
      emptyMessage.textContent = "Nothing matches this filter yet.";
      emptyMessage.hidden = false;
    } else {
      emptyMessage.hidden = true;
      if (supportsObserver) {
        renderNextBatch();
      } else {
        while (nextIndex < activeItems.length) renderNextBatch();
      }
    }

    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
        var isActive = btn.getAttribute("data-filter") === filter;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }
  }

  // ---------------- Room switcher (top-left nav) ----------------
  // Add a row here if you ever add a fourth room.
  var ROOMS_NAV = [
    { href: "index.html", label: "Books" },
    { href: "watch.html", label: "Watch" },
    { href: "play.html", label: "Play" }
  ];

  function buildRoomNav() {
    var nav = document.getElementById("room-nav");
    if (!nav) return;

    var here = location.pathname.split("/").pop() || "index.html";
    ROOMS_NAV.forEach(function (room) {
      var isCurrent = room.href === here;
      var el = document.createElement(isCurrent ? "span" : "a");
      el.className = "room-nav-link" + (isCurrent ? " is-current" : "");
      el.textContent = room.label;
      if (!isCurrent) {
        el.href = room.href;
      } else {
        el.setAttribute("aria-current", "page");
      }
      nav.appendChild(el);
    });
  }

  // ---------------- Modal ----------------
  var overlay = document.getElementById("modal-overlay");
  var coverWrap = document.querySelector(".modal-cover-wrap");
  var coverImg = document.getElementById("modal-cover");
  var titleEl = document.getElementById("modal-title");
  var byEl = document.getElementById("modal-author");
  var statusPillEl = document.getElementById("modal-status");
  var noteEl = document.getElementById("modal-note-text");
  var linkEl = document.getElementById("modal-link");
  var closeBtn = document.getElementById("modal-close");
  var lastFocused = null;

  function openModal(item, hash, statusSlot) {
    lastFocused = document.activeElement;

    titleEl.textContent = item.title || "Untitled";
    byEl.textContent = item.by || "";
    noteEl.textContent = item.note || "No notes on this one yet.";

    var info = statusInfo(statusSlot);
    statusPillEl.textContent = info.label;
    statusPillEl.style.background = info.color;
    statusPillEl.style.color = info.iconColor;

    // cover image, or a matching colored fallback block
    var existingFallback = coverWrap.querySelector(".book-fallback");
    if (existingFallback) existingFallback.remove();

    if (item.cover) {
      coverImg.src = item.cover;
      coverImg.alt = item.title || "";
      coverImg.hidden = false;
      coverImg.onerror = function () {
        coverImg.hidden = true;
        coverWrap.appendChild(makeFallback(item, hash));
      };
    } else {
      coverImg.hidden = true;
      coverWrap.appendChild(makeFallback(item, hash));
    }

    if (item.link) {
      linkEl.href = item.link;
      linkEl.innerHTML = (config.ctaLabel || "Check it out") + ' <span aria-hidden="true">&rarr;</span>';
      linkEl.style.display = "";
    } else {
      linkEl.style.display = "none";
    }

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });

  // ---------------- Boot ----------------
  buildRoomNav();

  if (ALL_ITEMS.length === 0) {
    emptyMessage.textContent = config.emptyText || "This room is empty.";
    emptyMessage.hidden = false;
    buildFilterBar();
  } else {
    buildFilterBar();
    if (supportsObserver) observer.observe(sentinel);
    applyFilter("both");
  }
})();
