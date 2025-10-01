// CHANGE Default title
export const SITE_TITLE =
  "Solid Ground Aviation | FAA Compliant Simulator Training in Fort Meade, MD";

// CHANGE default meta description
export const SITE_DESCRIPTION =
  "Solid Ground Aviation provides FAA Compliant, simulator-based pilot training at Tipton Airport (KFME) in Fort Meade, Maryland. Founded by a professional pilot with airline and military experience, we deliver affordable, high-quality ground school, simulator instruction, and proficiency programs for new and licensed pilots. Whether you're starting your aviation journey, maintaining instrument currency, or preparing for advanced ratings, our custom-built SG-1 simulator ensures professional training with no weather or maintenance delays. We proudly serve the greater Maryland area, including Annapolis, Baltimore, Columbia, Laurel, Frederick, and Washington, D.C.";

// SEO tip -> keyword + city 1
export const KEYWORDS = [
  "Solid Ground Aviation",
  "Maryland flight training",
  "Fort Meade pilot training",
  "how to become a pilot in Maryland",
  "best flight school near Baltimore",
  "private pilot ground school Maryland",
  "discovery flight Fort Meade",
  "instrument rating Maryland",
  "commercial pilot training Maryland",
  "certified flight instructor Maryland",
  "aviation simulator training Maryland",
  "FAA Compliant BATD simulator",
  "affordable flight training Maryland",
  "flight training Annapolis",
  "aviation school near Washington DC",
  "pilot training Frederick",
  "IFR training simulator Maryland",
  "instrument proficiency check Fort Meade",
  "CFI and CFII programs Maryland",
  "jet transition training Maryland",
  "fear of flying course Maryland",
  "recurrent pilot training Baltimore",
  "aviation school Maryland",
  "FAA WINGS credit flight training",
  "Avemco safety rewards program training",
  "best simulator training near DC",
  "solid ground aviation SG-1 BATD",
  "pilot training Columbia MD",
].join(", ");

// Primary keywords by search intent
export const PRIMARY_KEYWORDS = {
  informational:
    "how to become a pilot in Maryland, FAA simulator training, private pilot ground school cost, instrument rating requirements, pilot training with simulators, aviation training Fort Meade",
  navigational:
    "Solid Ground Aviation Fort Meade, Tipton Airport KFME flight training, Solid Ground pilot training Maryland, SG-1 simulator aviation training",
  commercial:
    "best simulator flight training Maryland, affordable aviation training Baltimore, pilot training near DC, flight training comparison Maryland",
  transactional:
    "book simulator session Fort Meade, enroll in pilot training Maryland, schedule simulator training Tipton Airport, join summer aviation camp Maryland",
};

// Secondary keywords by program type
export const PROGRAM_KEYWORDS = {
  privatePilot:
    "private pilot ground school Maryland, PPL simulator training Fort Meade, beginner pilot training Baltimore, recreational pilot certification Maryland",
  instrument:
    "instrument rating Maryland, IFR simulator training Fort Meade, fly in all weather conditions Maryland, instrument proficiency check KFME",
  commercial:
    "commercial pilot training Maryland, professional pilot career Fort Meade, advanced pilot certifications Maryland, jet transition simulator training",
  multiEngine:
    "complex aircraft simulator Maryland, advanced simulator training Baltimore, MEL preparation simulator Fort Meade",
  flightInstructor:
    "CFI training Maryland, CFII simulator training, become a flight instructor Fort Meade, aviation instructor programs Maryland",
};

// Location-focused keywords
export const LOCATION_KEYWORDS = {
  primary:
    "Fort Meade MD flight training, Tipton Airport simulator training, KFME pilot training Maryland",
  secondary:
    "Baltimore flight lessons, Annapolis aviation school, Columbia pilot training, Laurel flight instruction, Frederick flying lessons, Washington DC metro flight school",
};

export const OG_IMAGE = "/solid-ground-aviation-og-image.png";

export const FAVICON = "/solid-ground-aviation-logo.webp";

export const LOGO = "/solid-ground-aviation-logo.webp";

export const LOGO_ASSETS = "/src/assets/solid-ground-aviation-logo.webp";

// CHANGE client business info
export const COMPANY_NAME = "Solid Ground Aviation";
export const COMPANY_NAME_CAPS = "SOLID GROUND AVIATION";
export const COMPANY_NICKNAME = "Solid Ground";
export const LOGO_PRIMARY = "/solid-ground-aviation-logo.png";
export const LOGO_SECONDARY = "/solid-ground-aviation-logo.png";
export const PHONE_NUMBER = "(240) 244-3593";
export const ADDRESS_LINE_1 = "7515 General Aviation Dr";
export const ADDRESS_LINE_2 = "Fort Meade, MD 20755";
export const AIRPORT = "Tipton Airport";
export const AIRPORT_CODE = "KFME";
export const ADDRESS = "7515 General Aviation Dr, Fort Meade, MD 20755";
export const ADDRESS_CITY = "Fort Meade";
export const ADDRESS_STATE = "Maryland";
export const ADDRESS_ZIP = "20755";
export const GMAPS = "https://maps.app.goo.gl/flysolidgroundKFME";
export const EMAIL_ADDRESS = "todd@flysolidground.com";
export const FACEBOOK_URL = "";
export const INSTAGRAM_URL = "";
export const LINKEDIN_URL = "";
export const X_URL = "";
export const YOUTUBE_URL = "";
export const YELP_URL = "";
export const GITHUB_URL = "";

export const LOCATIONS = [
  {
    title: `Tipton Airport<br><small class="text-xs -mt-3">KFME</small>`,
    address: "7515 General Aviation Dr",
    city: "Fort Meade",
    state: "MD",
    zip: "20755",
    gMaps: "https://maps.app.goo.gl/flysolidgroundKFME",
    phone: "(240) 244-3593",
    forwardPhone: "(240) 244-3593",
  },
];

export const COURSES = [
  {
    1: {
      title: "Private Pilot Ground School",
      path: "private-pilot-ground-school",
    },
    2: {
      title: "Instrument Rating (Simulator-Based)",
      path: "instrument-rating",
    },
    3: {
      title: "CFI & CFII Programs",
      path: "cfi-cfii-training",
    },
    4: {
      title: "Jet Transition",
      path: "jet-transition",
    },
    5: {
      title: "Fear of Flying Program",
      path: "fear-of-flying",
    },
    6: {
      title: "Instrument Currency",
      path: "instrument-currency",
    },
  },
];

export const FLEET = [
  {
    1: {
      title: "SG-1 Simulator (FAA Compliant BATD)",
      path: "sg1-simulator",
    },
    2: {
      title: "SG-2 Simulator (Coming Soon, AATD)",
      path: "sg2-simulator",
    },
  },
];
