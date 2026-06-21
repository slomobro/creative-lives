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
  {
    id: "sailing",
    emoji: "⛵",
    title: "Sailing & Boat Crew",
    tagline: "Cross oceans for free as crew — no experience required to start.",
    blurb:
      "Boat owners constantly need extra hands to help sail their yachts across seas and between marinas. Plenty want willing, reliable crew more than seasoned sailors — they'll teach you the ropes. In exchange for standing watch, cooking, and helping out, you get your bunk, your food, and a passage you could never afford to buy. It's the closest thing to magic on this whole list: waking up mid-Atlantic, no land in sight, having paid nothing.",
    platforms: [
      {
        name: "Crewbay",
        url: "https://www.crewbay.com",
        cost: "Free + paid tiers",
        summary:
          "A big, friendly marketplace connecting boat owners with crew of every experience level.",
        details:
          "Browse boats looking for crew right now, filter by region and whether it's a paid, expenses-shared, or free-passage trip. Lots of 'no experience needed, willing to teach' listings, which makes it the natural first stop for landlubbers dreaming of an ocean crossing.",
      },
      {
        name: "Find a Crew",
        url: "https://www.findacrew.net",
        cost: "Free + paid tiers",
        summary:
          "The largest global crewing network — huge database of boats and opportunities worldwide.",
        details:
          "Enormous reach, from weekend coastal hops to round-the-world expeditions and delivery passages. The free tier lets you create a profile and get found; paid tiers unlock direct messaging. Set your profile to 'willing to learn' and be honest about what you can offer (cooking, fitness, good attitude all count).",
      },
      {
        name: "CrewSeekers",
        url: "https://www.crewseekers.net",
        cost: "~£70/yr",
        summary:
          "Long-established and well-respected, with a more serious, blue-water sailing crowd.",
        details:
          "Running since 1990, this is where you find genuine ocean passages and yacht deliveries. The community skews a little more experienced, but there are mile-building berths perfect for someone wanting to learn fast. Quality over quantity.",
      },
      {
        name: "Ocean Crew Link",
        url: "https://www.oceancrewlink.com",
        cost: "~$32/yr",
        summary:
          "Focused specifically on offshore and ocean passages — for the real adventure.",
        details:
          "Built for blue-water sailing rather than day trips. If your dream is specifically an ocean crossing — Atlantic milk run, Pacific puddle jump — this is the targeted place to find a skipper who needs crew for exactly that. Affordable annual membership.",
      },
    ],
  },
  {
    id: "seasonal",
    emoji: "🏔️",
    title: "Seasonal & Adventure Jobs",
    tagline: "Get paid to spend a season somewhere beautiful.",
    blurb:
      "A step up from pure work exchange: real jobs that come with housing (or cheap staff digs) in places people pay good money to visit. Ski resorts, national parks, summer camps, dive shops, farms at harvest time. You earn a wage, your living costs are tiny, and you're embedded in an extraordinary place with a built-in crew of fellow seasonal workers. Working-holiday visas make a lot of this possible for under-30s.",
    platforms: [
      {
        name: "CoolWorks",
        url: "https://www.coolworks.com",
        cost: "Free",
        summary:
          "The legendary US board for 'jobs in great places' — national parks, ranches, ski resorts.",
        details:
          "Yellowstone lodges, Alaskan fishing, dude ranches, ski mountains, summer camps — almost all with housing included. The tagline says it all: jobs in great places. A rite of passage for Americans (and visa-holders) who want a season in the wild instead of a cubicle.",
      },
      {
        name: "Seasonworkers",
        url: "https://www.seasonworkers.com",
        cost: "Free",
        summary:
          "UK and Europe's go-to for ski-season, summer-camp, and outdoor activity jobs.",
        details:
          "Strong on the Alps ski season (chalet host, resort rep, instructor) and summer outdoor work. Many roles include accommodation, ski pass, and meals. The classic way for Brits and Europeans to spend a winter in the mountains and break even or better.",
      },
      {
        name: "Backpacker Job Board",
        url: "https://www.backpackerjobboard.com.au",
        cost: "Free",
        summary:
          "The hub for working-holiday jobs in Australia and New Zealand — farm work, hospitality, more.",
        details:
          "If you're on (or eyeing) an Australian or Kiwi working-holiday visa, this is the noticeboard. Fruit picking, hostel work, station hands, hospitality — including the regional farm work that can extend your visa a second or third year. Pairs perfectly with HelpX for the off weeks.",
      },
      {
        name: "BUNAC",
        url: "https://www.bunac.org",
        cost: "Program fees",
        summary:
          "Long-running work-abroad organization that sorts the visa and logistics for you.",
        details:
          "BUNAC packages up working-holiday and summer-work programs (Camp USA, work in Canada/Australia/NZ) with visa support, insurance, and arrival help. More expensive than DIY, but it removes the scariest barrier — the paperwork — for a first big trip abroad.",
      },
    ],
  },
  {
    id: "festivals",
    emoji: "🎪",
    title: "Festival & Event Volunteering",
    tagline: "Work a few shifts, get in free, camp for nothing.",
    blurb:
      "Festivals run on volunteers. Give them a handful of stewarding or bar shifts and you get a free ticket (often £200+ saved), free camping, and the rest of the weekend to enjoy the music. Many programs take a refundable deposit instead of payment, so it costs you essentially nothing. It's the cheapest way into events you'd otherwise never splurge on — and a brilliant way to meet people.",
    platforms: [
      {
        name: "Oxfam Festivals",
        url: "https://www.oxfam.org.uk/oxfam-in-action/oxfam-festivals/",
        cost: "Refundable deposit",
        summary:
          "Steward at Glastonbury and the UK's biggest festivals — your shifts fund a good cause.",
        details:
          "Oxfam is the volunteer steward at many marquee UK festivals including Glastonbury. You work three shifts across the event in exchange for a free ticket, a dedicated volunteer campsite with hot showers, and meal vouchers. You pay a deposit that's refunded after your shifts. Famously well organized and friendly.",
      },
      {
        name: "Festaff",
        url: "https://www.festaff.co.uk",
        cost: "Refundable deposit",
        summary:
          "Volunteer staffing across dozens of UK festivals — flexible, easy, well-run.",
        details:
          "Sign up, pick your festivals, work a set number of hours (litter-picking, wristband checks, campsite stewarding) and get free entry plus camping. A deposit holds your place and comes back once you've done your shifts. A great option beyond just the Oxfam-staffed events.",
      },
      {
        name: "Festival Volunteer",
        url: "https://www.festivalvolunteer.co.uk",
        cost: "Refundable deposit",
        summary:
          "Another solid UK network listing volunteer roles across the festival calendar.",
        details:
          "Lists steward and crew roles at a wide range of music and arts festivals. Same model: a few shifts buys you the ticket, camping, and the weekend. Worth registering with two or three of these networks to maximize your pick of events.",
      },
    ],
  },
  {
    id: "slow-travel",
    emoji: "🚲",
    title: "Slow Travel & Rideshare",
    tagline: "Move between places for almost nothing — and meet people doing it.",
    blurb:
      "Getting around is often the biggest cost of a trip. These networks and routes turn the journey itself into the cheap, social, memorable part: share a stranger's car, get hosted as a touring cyclist, walk an ancient pilgrim path sleeping in €10 hostels, or stick out a thumb. Slower than flying, far richer — and your wallet barely notices.",
    platforms: [
      {
        name: "Warmshowers",
        url: "https://www.warmshowers.org",
        cost: "Small one-time fee",
        summary:
          "Couch surfing built specifically for touring cyclists — free stays with fellow riders.",
        details:
          "A global hospitality network where bike tourers host other bike tourers: a bed, a shower, a meal, and usually invaluable local route advice. The shared experience of long-distance cycling makes for an unusually warm, trusting community. Essential if you're touring on two wheels.",
      },
      {
        name: "BlaBlaCar",
        url: "https://www.blablacar.com",
        cost: "Cost of the ride share",
        summary:
          "Long-distance carpooling — split fuel costs with a driver already making your trip.",
        details:
          "Hugely popular across Europe and beyond. Drivers list spare seats on trips they're already taking; you pay a small share of the costs, far less than a train or bus. Profiles, ratings, and reviews keep it safe, and the conversations are half the fun. The 'Bla Bla' rating even lets you choose chatty or quiet co-riders.",
      },
      {
        name: "Camino de Santiago",
        url: "https://www.santiago-compostela.net",
        cost: "~€5–15/night hostels",
        summary:
          "Walk an ancient pilgrim route across Spain, sleeping in cheap pilgrim hostels (albergues).",
        details:
          "Not a platform but a path — actually several. With a pilgrim passport (credencial) you sleep in albergues for a few euros a night (some donation-only), eat cheap pilgrim menus, and walk through northern Spain for weeks on a tiny budget. A whole sub-culture of slow, cheap, contemplative travel — and you're never short of company on the trail.",
      },
      {
        name: "Hitchwiki",
        url: "https://hitchwiki.org",
        cost: "Free",
        summary:
          "The collaborative guide to hitchhiking the world — the truly free way to travel.",
        details:
          "A community-built wiki with country-by-country advice, the best spots to catch rides, legality, and safety tips. Hitchhiking isn't for everyone and demands good judgment, but in many parts of the world it's safe, common, and the most adventurous, sociable, zero-cost way to cover ground.",
      },
    ],
  },
  {
    id: "teach-english",
    emoji: "🌍",
    title: "Teach English Abroad",
    tagline: "A real salary plus housing — the path that funds the travel.",
    blurb:
      "Most options here help you spend less; teaching English helps you earn while living abroad. With a TEFL/TESOL certificate (a few weeks online) you can get a paid teaching job in dozens of countries — often with free or subsidized housing, flights, and contract bonuses on top. It's the most stable, longest-horizon way to actually live somewhere new for a year or more and come home with savings instead of debt.",
    platforms: [
      {
        name: "Dave's ESL Cafe",
        url: "https://www.eslcafe.com",
        cost: "Free job board",
        summary:
          "The grizzled, much-loved original job board and forum for teaching English abroad.",
        details:
          "Around forever and still indispensable. Big job boards for Korea, China, and the wider international market, plus forums where you can research schools, salaries, and scams before signing anything. Start here to learn the lay of the land.",
      },
      {
        name: "Teach Away",
        url: "https://www.teachaway.com",
        cost: "Free for teachers",
        summary:
          "A polished agency matching teachers with vetted schools and government programs worldwide.",
        details:
          "Curated postings (including well-paid government and Middle East roles), application support, and an in-house TEFL certification if you need one. A more guided, modern alternative to the wild-west job boards, good if you'd like a hand navigating contracts and visas.",
      },
      {
        name: "JET Programme",
        url: "https://jetprogramme.org",
        cost: "Free (you're paid well)",
        summary:
          "Japan's prestigious government program placing assistant English teachers nationwide.",
        details:
          "Run by the Japanese government, JET is one of the best-regarded teaching gigs in the world: a strong salary, flights, support, and placement anywhere from big cities to rural towns. Competitive and a real commitment (usually a year, often renewed), but a genuinely life-changing way to live in Japan.",
      },
      {
        name: "TEFL.org",
        url: "https://www.tefl.org",
        cost: "Course fees",
        summary:
          "Get the certificate that unlocks the whole field — accredited TEFL/TESOL training.",
        details:
          "Before most of the jobs above, you'll want a recognized TEFL certificate (120 hours is the common standard). This is one of the well-regarded accredited providers, with online courses and a jobs centre. Think of it as the key that opens every other door in this category.",
      },
    ],
  },
  {
    id: "conservation",
    emoji: "🦜",
    title: "Conservation & Wildlife Volunteering",
    tagline: "Trade your hands for a bunk on the front line of the wild.",
    blurb:
      "Conservation projects worldwide take volunteers to monitor sea turtles, restore habitats, track wildlife, and run field stations. Some are free work exchanges; many charge a fee that covers food, lodging, and the project's costs (so read the fine print and choose reputable, locally-rooted ones). Either way, you live somewhere remote and beautiful, learn real ecological skills, and your sweat goes toward something that matters.",
    platforms: [
      {
        name: "Earthwatch",
        url: "https://earthwatch.org",
        cost: "Expedition fees",
        summary:
          "Join real scientists on field research expeditions — citizen science with teeth.",
        details:
          "A respected nonprofit pairing volunteers with working scientists on biodiversity and climate research around the world. You pay to take part (it funds the science), but you're doing genuine data collection alongside researchers, not token tasks. The gold-standard option if you want substance.",
      },
      {
        name: "Sea Turtle Conservancy",
        url: "https://conserveturtles.org",
        cost: "Program fees",
        summary:
          "Patrol nesting beaches and protect sea turtles in Costa Rica and Florida.",
        details:
          "The world's oldest sea turtle research and conservation group. Volunteer programs put you on the beach at night tagging nesting turtles and protecting hatchlings. Iconic, hands-on, and deeply moving work in stunning coastal settings.",
      },
      {
        name: "GVI",
        url: "https://www.gvi.co.uk",
        cost: "Program fees",
        summary:
          "Structured conservation and community programs with strong support and safety.",
        details:
          "Runs organized projects — marine conservation, wildlife monitoring, reforestation — with training, accommodation, and on-site staff included. Pricier 'voluntourism,' but well-suited to first-timers or anyone who wants logistics, safety, and a ready-made group handled for them.",
      },
      {
        name: "The Conservation Volunteers",
        url: "https://www.tcv.org.uk",
        cost: "Free / low cost",
        summary:
          "Hands-on environmental volunteering across the UK — much of it free to join.",
        details:
          "For UK-based, low-cost conservation: practical 'Green Gym' work parties, habitat restoration, tree planting, and longer residential 'conservation holidays' for a modest fee. A great, affordable way to get experience close to home before committing to an overseas project.",
      },
    ],
  },
  {
    id: "intentional-communities",
    emoji: "🛖",
    title: "Eco-Villages & Intentional Communities",
    tagline: "Live communally, share the work, rethink how life can be arranged.",
    blurb:
      "Across the world, groups of people have chosen to live together with shared values — ecological, social, spiritual, or simply cooperative. Many welcome visitors, volunteers, and longer-term residents through work exchanges or low rent. It's a chance to step entirely outside the rent-and-commute treadmill, learn permaculture and communal living, and experience a genuinely different model of everyday life.",
    platforms: [
      {
        name: "Foundation for Intentional Community",
        url: "https://www.ic.org",
        cost: "Free directory",
        summary:
          "The master directory of intentional communities, eco-villages, and co-ops worldwide.",
        details:
          "The single best starting point: a searchable database of thousands of communities — eco-villages, cohousing, communes, spiritual communities — with details on whether they accept visitors, volunteers, or new members. Filter by location, values, and how to get involved.",
      },
      {
        name: "Global Ecovillage Network",
        url: "https://ecovillage.org",
        cost: "Free directory + programs",
        summary:
          "A worldwide network of ecovillages, with maps, education, and volunteer pathways.",
        details:
          "Connects hundreds of intentional sustainable communities across every continent. Beyond the directory, GEN runs training (like the Ecovillage Design Education course) and points you toward places that take working visitors. Ideal if sustainability and regenerative living are your draw.",
      },
      {
        name: "NuMundo",
        url: "https://numundo.org",
        cost: "Varies by center",
        summary:
          "A platform for 'impact centers' — eco-farms, retreat centers, and regenerative communities.",
        details:
          "A modern, traveler-friendly way to find permaculture farms, healing centers, and conscious communities offering stays, work exchanges, and immersions. Strong in Latin America. Think Airbnb-meets-purpose, surfacing places where you can live, learn, and contribute.",
      },
      {
        name: "Diggers & Dreamers",
        url: "https://www.diggersanddreamers.org.uk",
        cost: "Free directory",
        summary:
          "The long-running guide to communal living in Britain.",
        details:
          "A frank, well-loved resource on UK communes, cohousing, and intentional communities — including honest essays on what communal life is actually like, plus listings of communities looking for members and visitors. Refreshingly unromantic and practical.",
      },
    ],
  },
  {
    id: "caretaking",
    emoji: "🚐",
    title: "Caretaking & Workamping",
    tagline: "Mind a property or campground and live there rent-free.",
    blurb:
      "A cousin of house sitting, but longer-term and often more rugged: looking after estates, remote lodges, ranches, or campgrounds in exchange for free accommodation (and sometimes a wage). 'Workamping' is the RV version — host a campground for a season and park your rig for free. These are the deals that let people live for years on almost nothing, often in wild and gorgeous corners most travelers never reach.",
    platforms: [
      {
        name: "The Caretaker Gazette",
        url: "https://www.caretaker.org",
        cost: "~$30/yr subscription",
        summary:
          "The cult-classic newsletter of property caretaking gigs around the world.",
        details:
          "For decades, the place to find people who'll give you free lodging (and often pay) to look after their property — remote cabins, islands, estates, ranches, lighthouses. A modest subscription gets you the listings. Niche, charming, and full of genuinely unusual ways to live somewhere extraordinary for free.",
      },
      {
        name: "Workamper News",
        url: "https://www.workamper.com",
        cost: "Membership fee",
        summary:
          "The hub of the North American 'workamping' world — work-for-campsite and RV jobs.",
        details:
          "If you've got an RV (or want one), workamping lets you live on the road nearly free: hosts at campgrounds, national parks, and resorts trade a free site (and often pay) for part-time work. Workamper News is the original and biggest job board for it, with listings, advice, and a whole community.",
      },
      {
        name: "Recreation.gov — Camp Host & Volunteer",
        url: "https://www.recreation.gov",
        cost: "Free (volunteer roles)",
        summary:
          "Volunteer as a campground host on US public lands — free site in spectacular places.",
        details:
          "US federal and state parks need volunteer campground hosts every season, usually in exchange for a free campsite and utilities in some of the most beautiful land in the country. Search public-lands volunteering here and at volunteer.gov. Low cash, high scenery — a classic way to spend a summer.",
      },
    ],
  },
];

// Quiz — each answer adds points to category ids. Top scorers become the recommendations.
const QUIZ = [
  {
    question: "What pulls you most?",
    options: [
      {
        label: "Working with my hands, close to nature",
        scores: { "work-exchange": 3, conservation: 2, "intentional-communities": 1 },
      },
      {
        label: "Adventure and the outdoors",
        scores: { seasonal: 3, sailing: 2, "slow-travel": 2 },
      },
      {
        label: "Peace, meaning, reflection",
        scores: { contemplative: 3, "intentional-communities": 2 },
      },
      {
        label: "People — families, kids, community",
        scores: { "au-pair": 3, hospitality: 2, festivals: 1 },
      },
      {
        label: "I want to earn money while I'm abroad",
        scores: { "teach-english": 3, seasonal: 2, caretaking: 1 },
      },
    ],
  },
  {
    question: "How long do you want to be away?",
    options: [
      {
        label: "A few days to a couple of weeks",
        scores: { hospitality: 3, "slow-travel": 2, festivals: 2, "house-sitting": 1 },
      },
      {
        label: "A month or two",
        scores: { "work-exchange": 3, "house-sitting": 2, conservation: 2, seasonal: 1 },
      },
      {
        label: "Half a year or more",
        scores: { "au-pair": 3, "teach-english": 2, contemplative: 2, caretaking: 1, "intentional-communities": 1 },
      },
    ],
  },
  {
    question: "What's your budget like?",
    options: [
      {
        label: "Basically zero — I need it free",
        scores: { hospitality: 3, "work-exchange": 2, sailing: 2, "slow-travel": 1, festivals: 1, caretaking: 1 },
      },
      {
        label: "A little to invest up front",
        scores: { "house-sitting": 3, conservation: 2, "intentional-communities": 1, contemplative: 1 },
      },
      {
        label: "I actually want to come home with savings",
        scores: { "teach-english": 3, seasonal: 2, "au-pair": 2, caretaking: 1 },
      },
    ],
  },
  {
    question: "Your ideal setting?",
    options: [
      {
        label: "Remote nature — farm, wilderness, the sea",
        scores: { "work-exchange": 2, conservation: 2, caretaking: 2, sailing: 2 },
      },
      {
        label: "A city or town to settle into",
        scores: { hospitality: 2, "house-sitting": 2, "teach-english": 2, "au-pair": 2 },
      },
      {
        label: "Among a community of people",
        scores: { "intentional-communities": 3, contemplative: 2, festivals: 1 },
      },
    ],
  },
];
