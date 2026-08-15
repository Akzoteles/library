/* ============================================================
   ROOM SETUP — you probably don't need to touch this part.
   It controls the page title, the labels on buttons, and the
   words used for the category toggle and the status badges.
   Change it only if you want to rename things.

   NOTE ON CATEGORIES: there's no single obvious "fiction vs
   nonfiction" equivalent for games, so this defaults to
   Single-player / Multiplayer. If you'd rather split games some
   other way (Indie / AAA, PC / Console, a genre split — whatever
   fits your backlog), just change the two labels and keys below,
   then use those same keys in each game's "category" line.
   ============================================================ */
window.ROOM_CONFIG = {
  itemNoun: "game",
  ctaLabel: "Play it",
  emptyText: "The shelf is empty. Add some games in games-data.js.",

  categories: [
    { key: "singleplayer", label: "Single-player" },
    { key: "multiplayer", label: "Multiplayer" }
  ],

  // The four play-status badges, in order. Each "aliases" list is
  // just other ways you might type the same status — typing any of
  // them in a game's "status" line below works the same.
  statuses: [
    { key: "backlog", label: "Backlog", icon: "circle",
      aliases: ["backlog", "unplayed", "to play", "want to play"] },
    { key: "playing", label: "Playing", icon: "play",
      aliases: ["playing", "in progress", "currently playing"] },
    { key: "played", label: "Played", icon: "check",
      aliases: ["played", "finished", "done", "completed", "beaten"] },
    { key: "dropped", label: "Dropped", icon: "x",
      aliases: ["dropped", "gave up", "dnf", "abandoned"] }
  ]
};

/* ============================================================
   YOUR GAMES GO HERE

   This is the part you'll actually edit. No coding knowledge
   required — just copy, paste, and fill in the blanks.

   Each game is one block that looks like this:

   {
     title: "The Game's Title",
     by: "The developer or studio",
     cover: "https://example.com/cover-art.jpg",
     category: "singleplayer",
     status: "playing",
     note: "What you thought of it — a sentence or a few paragraphs.",
     link: "https://example.com/where-to-get-it"
   },

   RULES THAT MATTER (easy to miss):
   - Every block needs a comma "," after its closing "}"
     — except the very last game in the list, which doesn't.
   - Keep the quote marks "" around text.
   - "cover", "category", "status" and "link" are all optional.
     Delete the whole line (including the comma at the end of it)
     for anything you don't have.
     - No cover? The game will show as a colored block with its
       title and developer instead — still looks intentional.
     - No link? The "Play it" button just won't show up.
     - No category? The game always shows, in every filter.
     - No status? It's treated as "backlog."

   - Where do I get a cover image URL? Right-click the game's
     cover art on its Steam, itch.io, or GOG store page (or a
     press kit) and choose "Copy image address" / "Copy image
     link".

   To add a new game, copy one whole block below (from the "{"
   to the "}," ) and paste it in, then edit the text.
   To remove one, delete its whole block.
   ============================================================ */

window.ITEMS = [
  {
    title: "A game you're currently playing",
    by: "Example Studio",
    category: "singleplayer",
    status: "playing",
    note: "Swap this out for something real — this is just here to show the layout. Notice it has no cover image, so it falls back to a colored block.",
    link: "https://example.com"
  },
  {
    title: "Something in your backlog",
    by: "Example Studio",
    category: "multiplayer",
    status: "backlog",
    note: "This one's untouched so far — tagged multiplayer instead of single-player, which is what the category line controls.",
    link: "https://example.com"
  },
  {
    title: "Something you finished",
    by: "Example Studio",
    category: "singleplayer",
    status: "played",
    note: "Marked 'played,' so it gets the checkmark badge.",
    link: "https://example.com"
  },
  {
    title: "Something you bounced off of",
    by: "Example Studio",
    category: "multiplayer",
    status: "dropped",
    note: "And this one's 'dropped' — the badge shows an X. Delete all four of these examples once you've added your own.",
    link: "https://example.com"
  }
];
