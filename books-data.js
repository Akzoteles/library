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
    title: "The Hobbit",
    by: "J.R.R. Tolkien",
    cover: "https://covers.openlibrary.org/b/id/9261045-L.jpg",
    category: "fiction",
    status: "gave up",
    note: "An interesting book, but perhaps not for me. It single handedly destroyed my reading habits. I really bounced off on the style of prose. One day I'll try lisening to the fan-made audiobook version. Maybe then I'll make it all the way though.",
    link: "https://openlibrary.org/books/OL10236414M/The_Hobbit"
  },
  {
    title: "Hamlet",
    by: "William Shakespeare",
    cover: "https://covers.openlibrary.org/b/id/12337338-L.jpg",
    category: "fiction",
    status: "read",
    note: "Despite the noteful lines of 'To be or not to be.' and 'To thine own self be true' I don't remember much. The reast wasn't particularly memorable.",
    link: "https://openlibrary.org/books/OL35630367M/Hamlet"
  },
  {
    title: "The Anti-Capitalistic Mentality",
    by: "Ludwig von Mises",
    cover: "https://covers.openlibrary.org/b/id/12371439-L.jpg",
    category: "nonfiction",
    status: "read",
    note: "One of the few nonfictions I've read. I haven't kept any notes while reading it so I have litteraly forgotten everything.",
    link: "https://openlibrary.org/works/OL21785579W/Anti-Capitalistic_Mentality?edition=key%3A/books/OL35666643M"
  },
  {
    title: "The Fountainhead",
    by: "Ayn Rand",
    cover: "https://covers.openlibrary.org/b/id/14813176-L.jpg",
    category: "fiction",
    status: "read",
    note: "My favourite novel. The whole story structure, it's theme and every character converge into a single inevitable end. All is there for a story, the single premise novel presents wonderfully. A single story equally for both an inventor, an artist and a philosopher,",
    link: "https://openlibrary.org/books/OL20701851M/The_fountainhead"
  },
  {
    title: "Cheese",
    by: "Willem Elsschot",
    cover: "https://covers.openlibrary.org/b/id/8260701-L.jpg",
    category: "fiction",
    status: "read",
    note: "A very light story. It's has events realistic enough to be tragic, and unfortunate enough in their sequence to be absurd. It's a great example of a tragicomedy. It's a story of a fish out of it's water testing whether it's wise to learn to swim in other waters.",
    link: "https://openlibrary.org/works/OL1232213W/Cheese?edition=key%3A/books/OL3461588M"
  },
  {
    title: "Template",
    by: "Dr Placeholder McDoctorate",
    cover: "https://covers.openlibrary.org/b/id/810139-L.jpg",
    category: "nonfiction",
    status: "unread",
    note: "Blank.",
    link: "https://libraryofbabel.info/"
  }
];
