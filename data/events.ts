export interface EventData {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  themes?: string[];
  quizAreas?: string[];
  participation: string;
  teamSize?: string;
  performanceDuration?: string;
  fee: string;
  date: string;
  time?: string;
  dateDetails?: { label: string; date: string }[];
  venue: string;
  format?: string;
  importantNote?: string;
  specialHighlight?: string;
  rules: string[];
  judgingCriteria?: string[];
  registrationUrl: string;
  sceneType: "poster" | "quiz" | "essay" | "dance";
}

export const events: EventData[] = [
  {
    slug: "poster-making",
    number: "01",
    title: "Poster Making",
    tagline: "From Blank Space to Bold Ideas.",
    description:
      "Unleash your creativity and turn your ideas into a powerful visual message. Create an impactful poster based on social awareness and community-oriented themes.",
    themes: ["Not Me, But You", "Community Service & Impact", "Social Responsibility", "Youth Action for Change"],
    participation: "Individual",
    fee: "₹99",
    date: "22 September 2026",
    time: "10:00 AM onwards",
    venue: "Main Auditorium Block, CMRCET",
    format: "On-the-Spot Poster Making",
    importantNote:
      "Participants must bring all necessary stationery and art materials required for the competition.",
    rules: [
      "On-the-spot competition.",
      "Participants must bring their own stationery, drawing sheets, and art materials.",
      "Posters must strictly follow one of the assigned themes.",
      "Digital aids or pre-drawn templates are strictly prohibited.",
      "Time duration will be 2 hours from commencement.",
    ],
    judgingCriteria: ["Creativity & Originality", "Theme Relevance", "Visual Impact", "Overall Execution"],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSeKOY_n7LG1MdWxCzK2P203Z35Sd7pZwTh4-OpIDoVd-RLoJA/viewform",
    sceneType: "poster",
  },
  {
    slug: "quiz",
    number: "02",
    title: "Quiz",
    tagline: "Think Beyond the Obvious.",
    description:
      "Put your knowledge and awareness to the test through an engaging quiz covering NSS history, social welfare initiatives, general awareness, and current affairs.",
    quizAreas: [
      "NSS History & Social Welfare",
      "General Knowledge & Science",
      "Current Affairs & Governance",
      "Environmental & Youth Policy",
    ],
    participation: "Individual / Team",
    fee: "₹99",
    date: "22 September 2026",
    time: "11:30 AM onwards",
    venue: "Seminar Hall 2, CMRCET",
    rules: [
      "Questions cover NSS, social service, community awareness, GK, and current events.",
      "Participation may be individual or team-based as per registration.",
      "Use of mobile phones or electronic gadgets during rounds results in instant disqualification.",
      "Buzzer and rapid-fire rules will be briefed prior to final rounds.",
    ],
    judgingCriteria: ["Speed & Accuracy", "Subject Depth", "Teamwork (if team)", "Strategic Bidding/Buzzer"],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdN01_Is4dT5xnWkoU57DsMqipuDuVmMxy-5H4yICPQFbvrog/viewform",
    sceneType: "quiz",
  },
  {
    slug: "essay-writing",
    number: "03",
    title: "Essay Writing",
    tagline: "Write. Think. Create. Make an Impact.",
    description:
      "Express your thoughts, ideas and perspectives through meaningful writing. Showcase your creativity, awareness and critical understanding of issues shaping society.",
    themes: [
      "Community Service & Civic Duty",
      "Role of Youth in Nation Building",
      "Social Innovation & Ethics",
    ],
    participation: "Individual",
    fee: "₹49",
    date: "22 September 2026",
    time: "02:00 PM onwards",
    venue: "Block 1 Conference Room",
    format: "On-the-Spot Essay Writing",
    rules: [
      "On-the-spot writing event.",
      "Topic will be communicated at the start of the competition.",
      "Maximum word limit: 1000 words.",
      "Plagiarism or copied content will lead to immediate disqualification.",
      "Duration: 60 minutes.",
    ],
    judgingCriteria: ["Clarity of Thought", "Argument Structure", "Vocabulary & Expression", "Constructive Vision"],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfnKg3BlOOJfOIe1GkEu6S4nAwKKZmr-Lrq3AHPTrpoi8iXhQ/viewform",
    sceneType: "essay",
  },
  {
    slug: "dance",
    number: "04",
    title: "Dance",
    tagline: "Move. Express. Unite.",
    description:
      "Bring your energy, rhythm and expression to the stage. Showcase your performance, choreography and ability to captivate the audience with social storytelling.",
    participation: "Team",
    teamSize: "6–10 Members",
    performanceDuration: "5–8 Minutes",
    fee: "₹499 per Team",
    date: "23–24 September 2026",
    time: "09:30 AM onwards",
    dateDetails: [
      { label: "Prelims", date: "23 September 2026" },
      { label: "Finals", date: "24 September 2026" },
    ],
    venue: "Open Air Theatre (OAT), CMRCET",
    specialHighlight: "Top 3 Teams Advance to Finals",
    rules: [
      "Team participation (6–10 members).",
      "Performance duration: 5–8 minutes.",
      "Audio tracks must be submitted in MP3 format to coordinators 1 hour prior to performance.",
      "Costumes and choreography must strictly uphold decency and college standards.",
      "Top 3 teams advance to the final showcase.",
    ],
    judgingCriteria: ["Choreography & Synchronization", "Stage Presence & Energy", "Theme Integration", "Costume & Expressions"],
    registrationUrl: "https://forms.gle/MXRD1vssPAv14p9PA",
    sceneType: "dance",
  },
];

export const eventsList = events;

export const eventsMap: Record<string, EventData> = events.reduce((acc, event) => {
  acc[event.slug] = event;
  return acc;
}, {} as Record<string, EventData>);

export const siteConfig = {
  name: "VAJRA",
  tagline: "Unleash. Express. Impact.",
  description:
    "VAJRA is a flagship student-focused competition initiative organized by the Social Welfare Board under NSS Unit, CMR College of Engineering & Technology.",
  dates: "22–24 September 2026",
  venue: "CMR College of Engineering & Technology",
  collegeName: "CMR College of Engineering & Technology (CMRCET), Kandlakoya, Hyderabad",
  organizer: "Social Welfare Board",
  unit: "Under NSS Unit",
  competitionCount: 4,
  coordinatorPhone: "+91 6309145746",
  locationMapUrl: "https://maps.app.goo.gl/xPyUkDY9AnFzuDYd9",
  coordinator: {
    role: "Event Coordinator",
    phone: "+91 6309145746",
  },
  mapsUrl: "https://maps.app.goo.gl/xPyUkDY9AnFzuDYd9",
};

export const generalRules: string[] = [
  "All participants must carry a valid College Student ID Card during the event.",
  "Participants must report at the designated venue 30 minutes prior to the scheduled start time.",
  "Decisions made by the judges and event organizers will be final and binding.",
  "Any form of misconduct, indiscipline, or plagiarism will lead to immediate disqualification.",
  "Participation e-certificates will be provided to all registered participants who complete their event.",
  "Registration fees are non-refundable under any circumstances.",
];

export function getEventBySlug(slug: string): EventData | undefined {
  return eventsMap[slug];
}
