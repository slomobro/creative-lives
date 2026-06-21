# Deep Travel

A small, free web resource illuminating the many ways to **travel and live cheaply** — the options that exist outside the traditional corporate world.

It covers five paths:

- 🌱 **Work Exchange & Volunteering** — Workaway, WWOOF, HelpX, Worldpackers
- 🏡 **House & Pet Sitting** — TrustedHousesitters, MindMyHouse, Nomador, and more
- 🛋️ **Hospitality & Couch Surfing** — Couchsurfing, BeWelcome, Servas, and your own network
- 🕯️ **Contemplative Communities** — San Francisco Zen Center, Plum Village, monasteries & ashrams
- 🧺 **Au Pair & Family Stays** — AuPairWorld, Cultural Care, and agency programs

## Running it

It's a plain static site — no build step. Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing the content

All the categories and platforms live in [`data.js`](data.js). Add a new card by
adding an object to a category's `platforms` array, or add a whole new category to
the `CATEGORIES` array — the page builds itself from that data.

## Files

- `index.html` — page shell and hero
- `styles.css` — styling
- `data.js` — all the content (edit this to add/change entries)
- `app.js` — renders the categories and cards
