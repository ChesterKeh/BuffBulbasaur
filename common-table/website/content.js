/* =====================================================================
   COMMON TABLE: SITE CONTENT
   ---------------------------------------------------------------------
   Every word and image on the website lives in this file.

   Two ways to edit:
   1. Easiest: open the site with ?edit at the end of the address
      (e.g. index.html?edit). Click any text to retype it and click any
      image to swap it. Then press "Download content.js" and replace
      this file with the downloaded one.
   2. Or edit this file directly in any text editor. Keep the quotes
      and commas as they are.

   Images: put your photos in the "images" folder and write the file
   name, e.g. "images/my-photo.jpg". A full https:// link also works.
   ===================================================================== */

window.CONTENT = {
  brand: {
    name: "Common Table",
    accent: "#E8572A",            // the one highlight colour (buttons, links, highlights)
    email: "your@email.com",      // EDIT ME: where enquiries go
    instagram: "#",               // EDIT ME: e.g. https://instagram.com/yourhandle
    linkedin: "#",                // EDIT ME
    formEndpoint: ""              // optional: a Formspree URL so the form emails you directly
  },

  nav: { what: "What we do", work: "Collabs", how: "How it works", suppers: "Suppers", cta: "Get in touch" },

  hero: {
    kicker: "Partnerships, made warmly · Singapore",
    title: "Common Table",
    image: "images/hero.svg",     // swap for a big landscape photo (2000px wide is ideal)
    scrollHint: "Scroll to explore"
  },

  about: {
    label: "Who we are",
    image: "images/about.svg",    // swap for a photo of you
    text: "We bring the right people to the same table. Common Table matches homegrown brands, cafés and startups, then builds the collab together: the drop, the pop-up, the menu, the launch. For businesses that believe they're better together."
  },

  solutions: {
    label: "What we do",
    title: "We bring it together.",
    intro: "Matchmaking, ideas and the work of making a collab happen, as one service.",
    items: [
      { tab: "Brand × Brand", title: "Collabs, made personal.", beats: "Find your match. Share an audience. Sell out together.",
        image: "images/work-2.svg", button: "Explore brand collabs",
        details: ["Partner scouting among homegrown labels", "Co-branded drops, capsules and gift sets", "Terms and revenue split agreed up front", "Launch plan, content and PR"],
        price: "From S$3.5k per Collab Sprint" },
      { tab: "Cafés & venues", title: "Spaces, filled.", beats: "New faces. Quiet days busy. Regulars made.",
        image: "images/work-1.svg", button: "Explore venue partnerships",
        details: ["Brand pop-ups and takeovers", "Menu and chef collabs", "Community events and workshops", "Ongoing partner calendar"],
        price: "From S$800 for a Warm Intro" },
      { tab: "Startups & B2B", title: "Doors, opened.", beats: "Right people. Warm intros. Deals moving.",
        image: "images/work-3.svg", button: "Explore B2B intros",
        details: ["Distributors and channel partners", "Suppliers and manufacturers", "Corporate pilots", "Success-based pricing"],
        price: "S$500 + 8% success fee" },
      { tab: "Community", title: "Tables, shared.", beats: "Good food. Good people. Next collab.",
        image: "images/supper.svg", button: "Explore our suppers",
        details: ["Monthly founder suppers", "Hosted at partner venues", "Curated guest list of 12–20", "No pitching, ever"],
        price: "About S$60 per seat" }
    ]
  },

  capabilities: {
    label: "Everything a collab needs",
    items: ["Partner scouting", "Collab concepts", "Deals & terms", "Pop-ups", "Co-branded products", "Launch events", "Content & PR", "Founder suppers"]
  },

  work: {
    label: "Selected collabs",
    more: "Start yours",
    items: [
      { title: "Slow Sunday Brunch", tags: "Café × Skincare", image: "images/work-1.svg",
        story: "A neighbourhood brunch spot and a homegrown skincare label shared the same Sunday-morning crowd. We built a brunch set with take-home minis.",
        result: "Add the result here, e.g. sold out two weekends." },
      { title: "The Snack Sock Drop", tags: "Apparel × Heritage snack", image: "images/work-2.svg",
        story: "A playful apparel label and a nostalgic snack brand teamed up on a limited National Day capsule.",
        result: "Add the result here." },
      { title: "Reset January", tags: "Studio × Healthy café", image: "images/work-3.svg",
        story: "A yoga studio and the salad bar downstairs ran a four-week challenge with shared rewards for members and diners.",
        result: "Add the result here." },
      { title: "Founders’ Long Table", tags: "Supper series", image: "images/work-4.svg",
        story: "Twenty founders around one table turned a quiet weeknight into a full house for our host venue.",
        result: "Add the result here." }
    ]
  },

  stats: [
    { number: "3",  suffix: "",  label: "Founding spots open." },
    { number: "48", suffix: "h", label: "Reply time." },
    { number: "20", suffix: "",  label: "Seats at every supper." }
  ],

  marquee: ["Cafés", "Homegrown labels", "Studios", "Startups", "Bakeries", "Bars", "Boutique hotels", "Makers"],

  match: {
    label: "Find your match",
    hint: "Tap shuffle for a collab idea",
    button: "Shuffle",
    ideas: [
      { a: "a café", b: "a skincare label", idea: "A slow-brunch set with take-home minis. Their followers find your space; your regulars find them." },
      { a: "a run club", b: "a gelato shop", idea: "Saturday runs end with gelato, plus a run-club flavour of the month." },
      { a: "a bakery", b: "a local illustrator", idea: "A limited cake series with illustrated boxes and a live-drawing launch day." },
      { a: "a bookshop", b: "a coffee roaster", idea: "A seasonal blend named after a local novel, launched with a reading night." },
      { a: "a candle maker", b: "a boutique hotel", idea: "A signature room scent, sold at reception and in the candle maker's shop." },
      { a: "a startup", b: "a distributor", idea: "Three vetted distributors who already sell to your buyers, introduced over coffee." }
    ]
  },

  how: {
    label: "How it works",
    steps: [
      { title: "Coffee chat", text: "30 minutes, free. We learn your story and what a great outcome looks like." },
      { title: "The match", text: "We shortlist partners whose audience, values and timing fit yours." },
      { title: "Warm intro", text: "A personal introduction, never a cold email. Then we shape the idea together." },
      { title: "Launch", text: "Terms, timeline, content and launch-day coordination, then we celebrate." }
    ]
  },

  services: {
    label: "Ways to work together",
    items: [
      { name: "Coffee chat", price: "Free", detail: "30 minutes to understand your business and spot two or three collab ideas." },
      { name: "The Warm Intro", price: "S$800", detail: "Three vetted partner matches, a one-page brief on each, and personal introductions." },
      { name: "Collab Sprint", price: "S$3.5k–6k", detail: "One full collaboration from idea to launch in 4–8 weeks: concept, partner, terms, timeline and launch day." },
      { name: "Partnerships Retainer", price: "S$2,500 / month", detail: "An ongoing partner pipeline: 2–4 qualified intros a month and one collab managed every quarter. 3-month minimum." },
      { name: "B2B Intro", price: "S$500 + 8%", detail: "Introductions to distributors, channel partners and corporate pilots. 8% of first-year contract value, capped." }
    ],
    note: "Founding offer: our first three collab partners get 30% off a Collab Sprint."
  },

  suppers: {
    image: "images/supper.svg",   // swap for a photo of a dinner table
    label: "Common Table Suppers",
    title: "Once a month, we pull up chairs.",
    text: "12–20 founders, makers and brand owners around one long table. No pitching, no name tags. Plenty of collabs start over dessert.",
    button: "Save me a seat"
  },

  cta: { title: "Got an idea? Let's make it happen.", button: "Let's chat" },

  newsletter: {
    title: "Collab ideas in your inbox?",
    text: "One email a month: new collabs, supper dates and ideas worth stealing.",
    button: "Sign me up"
  },

  footer: { contactsLabel: "Contacts", copyright: "All rights reserved" }
};
