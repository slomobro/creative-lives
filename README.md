# Alternative Lives

A free, comprehensive **menu of alternative lives and lifestyles** — the cheap, unconventional, often little-known ways people actually live instead of the standard script. Almost none require much money; the real entry fee is sincere interest. It's a lay of the land and a starting point for researching deeper.

It covers 13 categories:

- 🌱 **Work Exchange & Volunteering** — Workaway, WWOOF, HelpX, Worldpackers
- 🏡 **House & Pet Sitting** — TrustedHousesitters, MindMyHouse, Nomador, and more
- 🛋️ **Hospitality & Couch Surfing** — Couchsurfing, BeWelcome, Servas
- 🕯️ **Contemplative Communities** — San Francisco Zen Center, Plum Village, monasteries & ashrams
- 🧺 **Au Pair & Family Stays** — AuPairWorld, Cultural Care, and agency programs
- ⛵ **Sailing & Boat Crew** · 🏔️ **Seasonal & Adventure Jobs** · 🎪 **Festival & Event Volunteering** · 🚲 **Slow Travel & Rideshare** · 🌍 **Teach English Abroad** · 🦜 **Conservation & Wildlife Volunteering** · 🛖 **Eco-Villages & Intentional Communities** · 🚐 **Caretaking & Workamping**

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
