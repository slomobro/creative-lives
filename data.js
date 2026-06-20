// Creative Lives — the data behind the site.
// Each category groups a handful of platforms/paths. Add, edit, or reorder freely.

const CATEGORIES = [
  {
    id: "work-exchange",
    emoji: "🌱",
    title: "Work Exchange & Volunteering",
    tagline: "Trade a few hours of help for a bed, meals, and a way in.",
    blurb:
      "The classic deal: you give a host some hours of work each week — gardening, building, cooking, teaching, helping run a hostel — and in return you get a place to sleep and usually food. No money changes hands. It's the backbone of slow, cheap travel and the fastest way to actually live somewhere instead of just passing through.",
    platforms: [
      {
        name: "Workaway",
        url: "https://www.workaway.info",
        cost: "~$49/yr",
        summary:
          "The biggest and most varied work-exchange network. Tens of thousands of hosts in nearly every country — farms, hostels, families, NGOs, sailboats, eco-projects.",
        details:
          "Usually 4–5 hours a day, five days a week, in exchange for room and board. Profiles have reviews from past travelers, so you can read between the lines before committing. Great for a first-timer because the sheer range means you can find something that matches whatever you're into — language exchange with a family, animal care, helping at a surf hostel.",
      },
      {
        name: "WWOOF",
        url: "https://wwoof.net",
        cost: "~$20–70/yr per country",
        summary:
          "Worldwide network of organic farms. You learn to grow food and live the rhythm of the land; they get an extra pair of hands.",
        details:
          "WWOOF = World Wide Opportunities on Organic Farms. Each country runs its own chapter with its own small membership fee. This is the one to choose if you actually want to get your hands in the dirt — composting, harvesting, tending animals, making cheese or wine. Hosts tend to be deeply committed to the work, so expect real days, real skills, and big shared meals.",
      },
      {
        name: "HelpX",
        url: "https://www.helpx.net",
        cost: "~€20/2yr",
        summary:
          "The scrappy, no-frills original. Farms, hostels, B&Bs, sailing boats, and ranches — strong in Australia, NZ, and Europe.",
        details:
          "Older and plainer than Workaway, but loyal users swear by it for finding hosts the bigger platforms miss. Cheap two-year membership. Especially good if you're heading to Australia or New Zealand on a working-holiday vibe and want longer, settle-in placements.",
      },
      {
        name: "Worldpackers",
        url: "https://www.worldpackers.com",
        cost: "~$49/yr",
        summary:
          "Polished, community-driven, hostel-heavy. Strong in Latin America and aimed at younger travelers.",
        details:
          "Think Workaway with a slicker app and a big focus on hostels, eco-villages, and social-impact projects. Includes a verification system, traveler insurance perks, and an active community for advice. The 'this is your first big trip' platform of the bunch.",
      },
    ],
  },
  {
    id: "house-sitting",
    emoji: "🏡",
    title: "House & Pet Sitting",
    tagline: "Mind someone's home (and dog) and stay there for free.",
    blurb:
      "Homeowners go away and need someone to water the plants, feed the cat, and keep the place lived-in. You get a whole house to yourself — often somewhere gorgeous — at zero rent. The catch is usually a pet or two that becomes the best part of the deal. Sits range from a long weekend to several months.",
    platforms: [
      {
        name: "TrustedHousesitters",
        url: "https://www.trustedhousesitters.com",
        cost: "~$129–259/yr",
        summary:
          "The market leader. Thousands of sits worldwide, from London flats to villas in Tuscany, almost always with adorable animals.",
        details:
          "Annual membership, no per-sit fees, and a strong review/verification system that builds trust on both sides. The competition for dreamy sits is real, so a complete profile, references, and a quick application matter. Pet lovers, this is your home base.",
      },
      {
        name: "MindMyHouse",
        url: "https://www.mindmyhouse.com",
        cost: "~$29/yr",
        summary:
          "Bare-bones and dirt cheap. Smaller pool of listings, but the lowest barrier to entry.",
        details:
          "One of the most affordable memberships out there. The site looks dated and there are fewer listings, but if you're patient and flexible it pays for itself with a single sit. A good 'dip your toe in' option before committing to a pricier platform.",
      },
      {
        name: "Nomador",
        url: "https://www.nomador.com",
        cost: "Free tier + paid",
        summary:
          "Europe-focused (especially France) with a generous free tier so you can test the waters.",
        details:
          "You can browse and send a limited number of applications for free, then upgrade if it's working for you. Strong presence in France and continental Europe, with a 'stopover' feature for short stays. Friendly to people who want to try house sitting before paying.",
      },
      {
        name: "House Sitters worldwide",
        url: "https://www.housesittersworld.com",
        cost: "~$50/yr",
        summary:
          "Genuinely global coverage with a simple, no-nonsense interface and fair pricing.",
        details:
          "Sits across six continents and a clean, easy site. A solid middle-ground option between the premium price of TrustedHousesitters and the sparser listings of the budget platforms. Set up alerts for your target regions and pounce when something good lands.",
      },
    ],
  },
  {
    id: "hospitality",
    emoji: "🛋️",
    title: "Hospitality & Couch Surfing",
    tagline: "Stay with locals for free — and make a friend, not a transaction.",
    blurb:
      "These are gift-economy networks: people open their homes to travelers expecting nothing but good company and the same generosity passed on. It's the opposite of a hotel. You're a guest in someone's actual life — sharing meals, getting the local's map of the city, sometimes finding a friend you'll visit for years. And don't forget the oldest network of all: your own.",
    platforms: [
      {
        name: "Couchsurfing",
        url: "https://www.couchsurfing.com",
        cost: "Small fee (~$2.39/mo)",
        summary:
          "The name that started it all. Crash on a local's couch, join meetups, find a host almost anywhere.",
        details:
          "Once entirely free, now a small subscription. Still the largest hospitality community, with verification, references, and 'hangouts' for meeting travelers even when you're not staying over. Read references carefully and always trust your gut — the reference system is the whole safety mechanism.",
      },
      {
        name: "BeWelcome",
        url: "https://www.bewelcome.org",
        cost: "Free",
        summary:
          "Nonprofit, volunteer-run, and completely free — the idealist's couch-surfing network.",
        details:
          "Born from frustration when Couchsurfing went commercial. Smaller community but fiercely committed to the original ethos: no profit motive, open-source, member-governed. Fewer hosts, but the ones there tend to really believe in it.",
      },
      {
        name: "Servas International",
        url: "https://servas.org",
        cost: "Donation/small fee",
        summary:
          "A peace-through-travel network running since 1949 — hosting with a mission.",
        details:
          "Predates the internet entirely. Founded to build international understanding after WWII, it involves a short interview to join, which keeps the community thoughtful and intentional. Stays are typically a couple of nights with real cultural exchange at the heart of it.",
      },
      {
        name: "Friends, friends-of-friends & acquaintances",
        url: "",
        cost: "Free (just ask)",
        summary:
          "The most underrated option: tell people where you're going. You know more couches than you think.",
        details:
          "Post your route on social media, message that old coworker who moved to Lisbon, ask your aunt if she knows anyone in town. A surprising number of people are delighted to host a traveler they have any connection to — and offering to cook a meal, bring a gift, or return the favor turns a favor into a friendship. Two degrees of separation covers most of the map.",
      },
    ],
  },
  {
    id: "contemplative",
    emoji: "🕯️",
    title: "Contemplative Communities",
    tagline: "Live, work, and practice inside a monastery, ashram, or Zen center.",
    blurb:
      "Many spiritual and contemplative communities offer residencies, work-practice programs, or guest stays where you live on-site — often for free or a modest cost — in exchange for joining the daily rhythm of work, meditation, and shared life. You don't have to be a believer; you have to be willing to show up, follow the schedule, and pitch in. It's some of the deepest, cheapest living you can find.",
    platforms: [
      {
        name: "San Francisco Zen Center",
        url: "https://www.sfzc.org",
        cost: "Low cost / work-practice",
        summary:
          "Zen practice across three locations, including the legendary Tassajara and Green Gulch Farm.",
        details:
          "SFZC runs work-practice and guest-student programs where you live in community, sit zazen, and work in the kitchen or gardens. Tassajara (a remote mountain monastery) hires a summer work crew; Green Gulch is an organic farm by the ocean. A real way to live somewhere extraordinary while practicing, for very little money.",
      },
      {
        name: "Plum Village",
        url: "https://plumvillage.org",
        cost: "Sliding scale / work-retreat",
        summary:
          "Thich Nhat Hanh's mindfulness community in France, with sister centers worldwide.",
        details:
          "Open retreats and longer stays centered on mindful living. There are sliding-scale fees and opportunities for longer-term lay practitioners. Walking meditation, communal meals in silence, and a famously gentle, joyful atmosphere. Centers also exist in the US, Germany, Thailand, and beyond.",
      },
      {
        name: "Monasteries & ashrams (worldwide)",
        url: "https://www.monasteries.com",
        cost: "Often free / donation",
        summary:
          "Christian monasteries, Hindu ashrams, and Buddhist monasteries across the world welcome guests.",
        details:
          "From Benedictine abbeys in Europe that offer rooms in exchange for quiet and a small donation, to ashrams in India where karma yoga (selfless work) earns your keep, to forest monasteries in Thailand. Each has its own rules and rhythm — research the specific place, write ahead, and arrive ready to participate, not just observe.",
      },
      {
        name: "Findhorn & intentional communities",
        url: "https://www.findhorn.org",
        cost: "Program fees / work exchange",
        summary:
          "Eco-spiritual and intentional communities offering residential programs and work exchanges.",
        details:
          "Findhorn in Scotland is the famous example, but there's a whole world of eco-villages and intentional communities (browse the Foundation for Intentional Community directory at ic.org). Many run experience weeks, long-term volunteer roles, or work exchanges where you live communally and contribute to the garden, kitchen, or building projects.",
      },
    ],
  },
  {
    id: "au-pair",
    emoji: "🧺",
    title: "Au Pair & Family Stays",
    tagline: "Become part of a family abroad — childcare for room, board, and a stipend.",
    blurb:
      "An au pair lives with a host family, helps care for their kids and with light housework, and in return gets their own room, meals, a weekly stipend, and often language classes. It's a longer commitment (usually 6–12 months) and the most structured option here — frequently with a real visa pathway — but it's an immersive, genuinely affordable way to live in another country and come out speaking the language.",
    platforms: [
      {
        name: "AuPairWorld",
        url: "https://www.aupairworld.com",
        cost: "Free for au pairs",
        summary:
          "The largest au pair matching site, connecting families and au pairs across 50+ countries.",
        details:
          "You build a profile, message families directly, and arrange the match yourselves. Free for au pairs. Because it's self-arranged, you have lots of control — but you handle your own visa research and contract. Great for Europe especially.",
      },
      {
        name: "Cultural Care Au Pair",
        url: "https://www.culturalcare.com",
        cost: "Agency-managed (stipend paid to you)",
        summary:
          "Full-service agency for the US au pair program — visa, training, and a local coordinator.",
        details:
          "If you want the structure and support of an agency, this is the model: they handle the J-1 visa, place you with a vetted family, run an orientation, and give you a local coordinator and a community of other au pairs. Less freedom than self-arranging, but far less to figure out alone.",
      },
      {
        name: "Au Pair in America",
        url: "https://www.aupairinamerica.com",
        cost: "Agency-managed (stipend + study allowance)",
        summary:
          "Long-running, well-regarded US program with a study allowance and strong support network.",
        details:
          "One of the oldest official US au pair sponsors. Includes a weekly stipend, an education allowance for college courses, two weeks paid vacation, and a coordinator near your host family. A safe, structured first step for living in the States.",
      },
      {
        name: "Go Au Pair / regional agencies",
        url: "https://goaupair.com",
        cost: "Agency-managed",
        summary:
          "One of several solid agencies — always compare a few and read au pair reviews first.",
        details:
          "Beyond the big names there are many reputable regional agencies for Australia, the UK, and Europe. The key advice for any of them: talk to former au pairs, get the working hours and stipend in writing, and make sure the family's expectations match yours before you fly. The right match makes the year; the wrong one makes it long.",
      },
    ],
  },
];
