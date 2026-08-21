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
    { key: "skimming", label: "Skimming Through", icon: "skim",
      aliases: ["skimming", "skimming through", "skim"] },
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
    cover: "https://m.media-amazon.com/images/I/71OF35MLUEL._UF1000,1000_QL80_AIweblab1381794,T1_.jpg",
    category: "fiction",
    status: "gave up",
    note: "An interesting book, but perhaps not for me. It single handedly destroyed my reading habits. I really bounced off on the style of prose. One day I'll try lisening to the fan-made audiobook version. Maybe then I'll make it all the way though.",
    link: "https://openlibrary.org/books/OL10236414M/The_Hobbit"
  },
  {
    title: "Hamlet",
    by: "William Shakespeare",
    cover: "https://i.pinimg.com/1200x/7b/1b/f3/7b1bf3b8a1b933b750f16fa461140660.jpg",
    category: "fiction",
    status: "read",
    note: "Despite the noteful lines of 'To be or not to be.' and 'To thine own self be true' I don't remember much. The rest wasn't particularly memorable.",
    link: "https://openlibrary.org/books/OL35630367M/Hamlet"
  },
  {
    title: "The Anti-Capitalistic Mentality",
    by: "Ludwig von Mises",
    cover: "https://m.media-amazon.com/images/I/61NmAMh2TKL._SL1360_.jpg",
    category: "nonfiction",
    status: "read",
    note: "One of the few nonfictions I've read. I haven't kept any notes while reading it so I have litteraly forgotten everything.",
    link: "https://openlibrary.org/works/OL21785579W/Anti-Capitalistic_Mentality?edition=key%3A/books/OL35666643M"
  },
  {
    title: "The Fountainhead",
    by: "Ayn Rand",
    cover: "https://m.media-amazon.com/images/I/91ipexzozLL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "My favourite novel. The whole story structure, it's theme and every character converge into a single inevitable end. All is there for a story, the single premise novel presents wonderfully. A single story equally for both an inventor, an artist and a philosopher,",
    link: "https://openlibrary.org/books/OL20701851M/The_fountainhead"
  },
  {
    title: "Cheese",
    by: "Willem Elsschot",
    cover: "https://m.media-amazon.com/images/I/914XjRkAfVL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "A very light story. It's has events realistic enough to be tragic, and unfortunate enough in their sequence to be absurd. It's a great example of a tragicomedy. It's a story of a fish out of it's water testing whether it's wise to learn to swim in others.",
    link: "https://openlibrary.org/works/OL1232213W/Cheese?edition=key%3A/books/OL3461588M"
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    by: "Douglas Adams",
    cover: "https://m.media-amazon.com/images/I/71QPIPzuojL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "The first half of the book was great. The second, not so much. In some parts it points to the wonderful scale only a sci-fi can offer, in others it completely undermines it all with economic illiteracy baked into the plot. It's a surface level sci-fi comedy that (perhaps due to it's wacky ideas and plot) became baked into the cultural geist ie. associated with light sci-fi and space comedy. The book had a few interesting one-off lines, but that was the peak of it.",
    link: "https://openlibrary.org/books/OL46566468M/Hitchhiker's_Guide_to_the_Galaxy"
  },
  {
    title: "All Quiet on The Western Front",
    by: "Erich Maria Remarque",
    cover: "https://m.media-amazon.com/images/I/91tPRxlC3sL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "No book I've read describes war in a more deserving way. The senseless slaughter, without end, goal or purpose. I can see why the National Socialists banned this book. Evil cannot deal with the honesty of reality. However the prose can only carry the story so much before the story starts giving in. The plot structure is too loose as it would befit a novel. In a way, it reads more like a collection of notes expanded into chapters than like a story with a sequentially constructed plot. Which fits well with the theme of the book but is still, in it's nature, deeply symbolic.",
    link: "https://openlibrary.org/works/OL1209288W/Im_Westen_nichts_Neues?edition=key%3A/books/OL39806596M"
  },
  {
    title: "The King in Yellow",
    by: "Robert W. Chambers",
    cover: "https://m.media-amazon.com/images/I/811bS57q+1S._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "This book is such a 'malevolent/arbitrary universe' that it (perhaps to it's own detriment) loops back on itself and establishes (in it's own cosmology) an 'non-arbitrary universe'. Perhaps it's the result of being the most consistent 'malevolent/arbitrary universe' story? I don't know. What I know is that it's an evil story that at best shows the cognitive weakness to understand the world of some and at worse attempts to establish a cosmology where knowledge is inherently cancerous. This story is the furthest I'll go into the genre of 'Lovecraftian Horror'.",
    link: "https://openlibrary.org/works/OL8127201W/The_King_in_Yellow"
  },
  {
    title: "Starship Troopers",
    by: "Robert A. Heinlein",
    cover: "https://m.media-amazon.com/images/I/91HlXM9jitL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "It's a coming of age story in a sci-fi future society. It's an interesting story. It has a few philosophical remarks neatly baked into the context of the story itself, the most notable are those on 'Objective Economic Value' and 'Democracy'. All in all, it's not a structurally bad story.",
    link: "https://openlibrary.org/books/OL27241981M/Starship_Troopers"
  },
  {
    title: "Atlas Shrugged",
    by: "Ayn Rand",
    cover: "https://m.media-amazon.com/images/I/81-vR1RHJ3L._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "This was an interesting book. The style of the prose was deeply beautiful. Though, I wouldn't call it the author 'Magnum Opus', I think The Fountainhead still takes that place. Despite the beautiful style and prose, the structure of story is overall symbolic. There are structural flaws that the story suffers from, such as the lack of buildup to some later plot points. However if we treat this novel as being symbolic of the author's wider philosophy, then I'd say it roughly succeeds in giving a rough introduction to the Philosophy of Objectivism.",
    link: "https://openlibrary.org/books/OL38090972M/Atlas_Shrugged"
  },
  {
    title: "Treasure Island",
    by: "Robert L. Stevenson",
    cover: "https://m.media-amazon.com/images/I/71lDKRk1FXL._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "A nice little story. It's a shame I didn't encounter it sooner. It's a well written adventure story.",
    link: "https://openlibrary.org/books/OL37044554M/Treasure_Island"
  },
  {
    title: "The Intelligent Investor",
    by: "Benjamin Graham",
    cover: "https://m.media-amazon.com/images/I/616ckeLelfL._SL1360_.jpg",
    category: "nonfiction",
    status: "read",
    note: "I was recommended this book by a friend who was very much into these things. I did write down a lot of notes on this one. Looking now at those notes, they really come of as more of a psychological preparation rather than being rough advice of 'Just do X, Y and Z'. Perhaps it's akin to 'Art of war' but for investors? I don't know. I wonder if I'll ever use those notes.",
    link: "https://openlibrary.org/books/OL9233249M/The_Intelligent_Investor"
  },
  {
    title: "The Collected Poems of William Wordsworth",
    by: "William Wordsworth",
    cover: "https://m.media-amazon.com/images/I/714Ig4ox-mL._SL1360_.jpg",
    category: "fiction",
    status: "skimming",
    note: "Sometimes it's stylistically wonderful, but more often than that's undermined by it's content. There are noteful exceptions. Here are few I've encountered: 'To a Butterfly'.",
    link: "https://openlibrary.org/works/OL20193498W/The_Collected_Poems_of_William_Wordsworth?edition=key%3A/books/OL27380078M"
  },
  {
    title: "The Moon Is a Harsh Mistress",
    by: "Robert A. Heinlein",
    cover: "https://m.media-amazon.com/images/I/81ArbIIT09L._SL1500_.jpg",
    category: "fiction",
    status: "read",
    note: "The grammar initially put me off, I was not a fan of that. In general, it's a interesting story. Roughly around the lines of 'American Revolution in Space!'. I wasn't really satisfied with how the author dealt with one of main characters at the end, but it was an interesting book overall. Logistics and 'How to' of everything done is always interesting to read about when it's presented properly.",
    link: "https://openlibrary.org/books/OL26870042M/The_Moon_Is_a_Harsh_Mistress"
  },
  {
    title: "The Early Ayn Rand",
    by: "Ayn Rand",
    cover: "https://m.media-amazon.com/images/I/71edFOaSv2L._SL1500_.jpg",
    category: "fiction",
    status: "reading",
    note: "Currently Reading.",
    link: "https://openlibrary.org/books/OL7574649M/The_Early_Ayn_Rand_Revised_Edition"
  },
  {
    title: "Fellowship of the ring",
    by: "J.R.R. Tolkien",
    cover: "https://m.media-amazon.com/images/I/813UBZ-O8sL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/books/OL51097690M/Fellowship_of_the_Ring_Collector's_Edition"
  },
  {
    title: "The Two Towers",
    by: "J.R.R. Tolkien",
    cover: "https://m.media-amazon.com/images/I/81HfbQ8F2UL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/books/OL51123649M/Two_Towers_Collector's_Edition"
  },
  {
    title: "The Return of the King",
    by: "J.R.R. Tolkien",
    cover: "https://m.media-amazon.com/images/I/91YPlS-HzxL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/works/OL27455W/The_Return_of_the_King"
  },
  {
    title: "A Game of Thrones",
    by: "G.R.R. Martin",
    cover: "https://m.media-amazon.com/images/I/81FWVQqXf-L._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/works/OL257943W/A_Game_of_Thrones?edition=bwb_KU-426-196"
  },
  {
    title: "A Clash of Kings",
    by: "G.R.R. Martin",
    cover: "https://m.media-amazon.com/images/I/91SdD9W2dbL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/works/OL257939W/A_Clash_of_Kings?edition=key%3A/books/OL58635088M"
  },
  {
    title: "A Storm of Swords",
    by: "G.R.R. Martin",
    cover: "https://m.media-amazon.com/images/I/81uTAITryrL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/works/OL257914W?edition=trochivngquyen3b0000mart"
  },
  {
    title: "A Feast for Crows",
    by: "G.R.R. Martin",
    cover: "https://m.media-amazon.com/images/I/81Bvv13fIhL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/works/OL257948W/A_Feast_for_Crows?edition=key%3A/books/OL60291429M"
  },
  {
    title: "A Dance with Dragons",
    by: "G.R.R. Martin",
    cover: "https://m.media-amazon.com/images/I/81D0548kQbL._SL1500_.jpg",
    category: "fiction",
    status: "unread",
    note: "Waiting to be read.",
    link: "https://openlibrary.org/books/OL60288751M/A_Dance_With_Dragons"
  }
];
