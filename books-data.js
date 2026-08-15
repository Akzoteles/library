/* ============================================================
   ROOM SETUP — you probably don't need to touch this part.
   It controls the page title, the labels on buttons, and the
   words used for the Fiction/Nonfiction toggle and the status
   badges. Change it only if you want to rename things.
   ============================================================ */
window.ROOM_CONFIG = {
  itemNoun: "book",
  ctaLabel: "Check it out",
  emptyText: "The shelf is empty. Add some books in books-data.js.",

  // The two options on the bottom toggle, plus "Both" (added
  // automatically). The "key" must be lowercase with no spaces —
  // it's what you'll type into each book's "category" line below.
  categories: [
    { key: "fiction", label: "Fiction" },
    { key: "nonfiction", label: "Nonfiction" }
  ],

  // The four reading-status badges, in order. Each "aliases" list
  // is just other ways you might type the same status — typing
  // any of them in a book's "status" line below works the same.
  statuses: [
    { key: "unread", label: "Unread", icon: "circle",
      aliases: ["unread", "to read", "want to read"] },
    { key: "reading", label: "Reading", icon: "bookmark",
      aliases: ["reading", "currently reading", "in progress"] },
    { key: "read", label: "Read", icon: "check",
      aliases: ["read", "finished", "done"] },
    { key: "gave-up", label: "Gave up", icon: "x",
      aliases: ["gave up", "gave-up", "dnf", "did not finish", "abandoned"] }
  ]
};

/* ============================================================
   YOUR BOOKS GO HERE

   This is the part you'll actually edit. No coding knowledge
   required — just copy, paste, and fill in the blanks.

   Each book is one block that looks like this:

   {
     title: "The Book's Title",
     by: "The Author's Name",
     cover: "https://example.com/cover-image.jpg",
     category: "fiction",
     status: "reading",
     note: "What you thought of it — a sentence or a few paragraphs.",
     link: "https://example.com/where-to-find-it"
   },

   RULES THAT MATTER (easy to miss):
   - Every book block needs a comma "," after its closing "}"
     — except the very last book in the list, which doesn't.
   - Keep the quote marks "" around text.
   - "cover", "category", "status" and "link" are all optional.
     Delete the whole line (including the comma at the end of it)
     for anything you don't have.
     - No cover? The book will show as a colored block with its
       title and author instead — still looks intentional.
     - No link? The "Check it out" button just won't show up.
     - No category? The book always shows, in every filter.
     - No status? It's treated as "unread."

   - Where do I get a cover image URL? Right-click any book cover
     image online (e.g. on a publisher's page, Open Library,
     archive.org, or a Google Books listing) and choose
     "Copy image address" / "Copy image link".

   To add a new book, copy one whole block below (from the "{"
   to the "}," ) and paste it in, then edit the text.
   To remove a book, delete its whole block.
   ============================================================ */

window.ITEMS = [
  {
    title: "Braiding Sweetgrass",
    by: "Robin Wall Kimmerer",
    cover: "https://covers.openlibrary.org/b/isbn/9781571313560-L.jpg",
    category: "nonfiction",
    status: "read",
    note: "The kind of book I keep pressing into other people's hands. Slow down for this one — it rewards it.",
    link: "https://openlibrary.org/works/OL17385117W/Braiding_Sweetgrass"
  },
  {
    title: "Piranesi",
    by: "Susanna Clarke",
    cover: "https://covers.openlibrary.org/b/isbn/9781635575637-L.jpg",
    category: "fiction",
    status: "read",
    note: "Read it in two sittings. Strange and gentle at once — I still think about the House.",
    link: "https://openlibrary.org/works/OL19952542W/Piranesi"
  },
  {
    title: "The Overstory",
    by: "Richard Powers",
    cover: "https://covers.openlibrary.org/b/isbn/9780393635522-L.jpg",
    category: "fiction",
    status: "reading",
    note: "Long, ambitious, occasionally sprawling — but it's already changed how I look at trees.",
    link: "https://openlibrary.org/works/OL19073059W/The_Overstory"
  },
  {
    title: "A Book With No Cover Image",
    by: "Example Author",
    status: "unread",
    note: "This entry has no 'cover' line at all, so you can see what the fallback look is. Delete this example whenever.",
    link: "https://example.com"
  },
  {
    title: "Consider the Lobster",
    by: "David Foster Wallace",
    cover: "https://covers.openlibrary.org/b/isbn/9780316013321-L.jpg",
    category: "nonfiction",
    status: "gave up",
    note: "Uneven as a collection. Put it down after three essays — might pick it back up someday.",
    link: "https://openlibrary.org/works/OL5731906W/Consider_the_Lobster"
  }
];
