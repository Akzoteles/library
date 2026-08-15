/* ============================================================
   ROOM SETUP — you probably don't need to touch this part.
   It controls the page title, the labels on buttons, and the
   words used for the TV Shows/Lectures toggle and the status
   badges. Change it only if you want to rename things.
   ============================================================ */
window.ROOM_CONFIG = {
  itemNoun: "title",
  ctaLabel: "Watch it",
  emptyText: "The screen is empty. Add some in shows-data.js.",

  // The two options on the bottom toggle, plus "Both" (added
  // automatically). The "key" must be lowercase with no spaces —
  // it's what you'll type into each entry's "category" line below.
  categories: [
    { key: "tv-show", label: "TV Shows" },
    { key: "lecture", label: "Lectures" }
  ],

  // The four watch-status badges, in order. Each "aliases" list is
  // just other ways you might type the same status — typing any of
  // them in an entry's "status" line below works the same.
  statuses: [
    { key: "want-to-watch", label: "Want to watch", icon: "circle",
      aliases: ["want to watch", "to watch", "unwatched"] },
    { key: "watching", label: "Watching", icon: "play",
      aliases: ["watching", "in progress", "currently watching"] },
    { key: "watched", label: "Watched", icon: "check",
      aliases: ["watched", "finished", "done"] },
    { key: "dropped", label: "Dropped", icon: "x",
      aliases: ["dropped", "gave up", "dnf", "did not finish", "abandoned"] }
  ]
};

/* ============================================================
   YOUR SHOWS & LECTURES GO HERE

   This is the part you'll actually edit. No coding knowledge
   required — just copy, paste, and fill in the blanks.

   Each entry is one block that looks like this:

   {
     title: "The Show or Lecture's Title",
     by: "Who made it — a creator, channel, or instructor",
     cover: "https://example.com/thumbnail.jpg",
     category: "tv-show",
     status: "watching",
     note: "What you thought of it — a sentence or a few paragraphs.",
     link: "https://example.com/where-to-watch-it"
   },

   RULES THAT MATTER (easy to miss):
   - Every block needs a comma "," after its closing "}"
     — except the very last entry in the list, which doesn't.
   - Keep the quote marks "" around text.
   - "cover", "category", "status" and "link" are all optional.
     Delete the whole line (including the comma at the end of it)
     for anything you don't have.
     - No cover? The entry will show as a colored block with its
       title and creator instead — still looks intentional.
     - No link? The "Watch it" button just won't show up.
     - No category? The entry always shows, in every filter.
     - No status? It's treated as "want to watch."

   - Where do I get a cover image URL? Right-click a show's poster
     or a video's thumbnail (e.g. on the creator's site, YouTube,
     or a streaming platform's page) and choose "Copy image
     address" / "Copy image link". For a YouTube video, you can
     also use: https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg
     (swap in the video's ID from its URL).

   To add a new entry, copy one whole block below (from the "{"
   to the "}," ) and paste it in, then edit the text.
   To remove one, delete its whole block.
   ============================================================ */

window.ITEMS = [
  {
    title: "A show you found on a small YouTube channel",
    by: "Example Creator",
    category: "tv-show",
    status: "watching",
    note: "Swap this out for something real — this is just here to show the layout. Notice it has no cover image, so it falls back to a colored block.",
    link: "https://example.com"
  },
  {
    title: "An online lecture series you're working through",
    by: "Example Instructor",
    category: "lecture",
    status: "want-to-watch",
    note: "Same idea, but tagged as a lecture instead of a TV show — that's what the category line controls.",
    link: "https://example.com"
  },
  {
    title: "Something you finished and loved",
    by: "Example Creator",
    category: "tv-show",
    status: "watched",
    note: "This one's marked 'watched,' so it gets the checkmark badge instead.",
    link: "https://example.com"
  },
  {
    title: "Something you tried and didn't finish",
    by: "Example Creator",
    category: "tv-show",
    status: "dropped",
    note: "And this one's 'dropped' — the badge shows an X. Delete all four of these examples once you've added your own.",
    link: "https://example.com"
  }
];
