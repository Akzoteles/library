# Books, Watch & Play

Three small personal shelf sites in one: books, TV shows &amp; online
lectures, and video games. Click any cover to see your notes on it,
plus a link to find it for yourself. Filter each room by category, and
mark each item's status with a small badge. Switch rooms with the
toggle in the top-left corner. Add things by editing plain text files —
no coding required.

## What's in this folder

- `index.html` — the Books room ("The Reading Room").
- `watch.html` — the Watch room ("The Screening Room") for TV shows and
  online lectures.
- `play.html` — the Play room ("The Game Room") for video games.
- `style.css` — shared colors, fonts, and layout for all three rooms.
  Safe to ignore unless you want to change how things look.
- `app.js` — the shared logic that builds every room's shelf, filter
  toggle, and pop-up. You shouldn't need to touch this.
- `books-data.js`, `shows-data.js`, `games-data.js` — **these are the
  files you'll actually edit.** One per room, each holding that room's
  list plus a small setup block.
- `README.md` — this file.

## Adding your books / shows / games

Each room has its own data file — open the matching one (any text
editor works, including GitHub's own editor in your browser — see
below):

| Room  | Edit this file    |
|-------|--------------------|
| Books | `books-data.js`    |
| Watch | `shows-data.js`    |
| Play  | `games-data.js`    |

Each file has two parts:

1. **Room setup**, near the top — the page's button labels and the
   words used for the category toggle and status badges. You
   generally won't need to touch this, except in `games-data.js`,
   where I've defaulted the category toggle to Single-player /
   Multiplayer since there's no obvious fiction/nonfiction-style split
   for games. Change the labels there if you'd rather split your games
   some other way (Indie / AAA, PC / Console, by genre — whatever fits
   your backlog).

2. **The list itself**, below that — copy one entry "block," paste it
   in, and fill in the title, who made it, a short note, and
   optionally a cover image link and a link to find it. Full
   instructions are written in the comments at the top of that
   section in each file.

Two fields tie into each room's features — the same idea in every
file, just with different wording:

- **`category`** — controls which side of the bottom toggle an entry
  appears under (e.g. Fiction/Nonfiction for books, TV Shows/Lectures
  for Watch). Leave it out and the entry always shows, in every
  filter.
- **`status`** — controls the small badge in the corner of the cover
  (e.g. reading/watching/playing). Leave it out and it's treated as
  the "not started" status. Each file's setup block lists the exact
  words to use.

If you make a typo in one of these files (like forgetting a comma),
that room's shelf may stop showing anything. If that happens, undo
your last change and compare carefully against the example entries
already in the file — they're valid and can be used as a template.

## Putting it on GitHub Pages (no coding, all in the browser)

1. **Create a repository.** Go to [github.com](https://github.com), sign
   in, and click the **+** in the top right → **New repository**. Give
   it a name (e.g. `my-shelves`), leave it Public, and click
   **Create repository**.

2. **Upload these files.** On your new repository's page, click
   **Add file → Upload files**, then drag in every file from this
   folder. Scroll down and click **Commit changes**.

3. **Turn on GitHub Pages.** In your repository, click **Settings** →
   **Pages** (in the left sidebar). Under "Build and deployment," set
   **Source** to **Deploy from a branch**, set **Branch** to `main` and
   the folder to `/ (root)`, then click **Save**.

4. **Wait about a minute**, then refresh that Settings → Pages screen.
   GitHub will show you the live URL — something like
   `https://your-username.github.io/my-shelves/`. That opens the Books
   room; the top-left toggle gets you to Watch and Play from there.

## Updating things later

Go back to your repository on github.com, open the relevant data file,
click the pencil (✏️) icon to edit it in the browser, make your
changes, and click **Commit changes** at the bottom. GitHub Pages will
update automatically within a minute or two — no re-uploading needed.

## Notes on cover images

Hotlinking images from other sites can occasionally break if that site
changes its links. If a cover image ever stops loading, the site
automatically falls back to a colored card with the title and creator,
so nothing looks broken — you can swap in a new image link whenever
you notice. Each data file's comments suggest where to find cover
images for that room.

## Adding a fourth room later

The three rooms all share one engine, so this is more involved than
editing a data file, but still doable:

1. Copy `index.html` to a new file (e.g. `listen.html`) and update its
   title, header text, `data-room` attribute, and the `<script>` tag
   at the bottom to point at a new data file.
2. Copy `books-data.js` to that new data file and edit the setup block
   and list for the new room.
3. Open `app.js` and add a line to the `ROOMS_NAV` list near the
   bottom (it's commented, so it's easy to find) so the new room shows
   up in the top-left toggle on every page — including the existing
   three, so add the same line to keep them all in sync.
4. Optionally, give the new room its own accent color in `style.css`
   by adding a `body[data-room="..."] { --color-accent: ...; }` block
   next to the ones already there for `watch` and `play`.
