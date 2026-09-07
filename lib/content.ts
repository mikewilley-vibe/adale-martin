export const site = {
  name: "Dr. Adale Martin",
  office: "Norfolk School Board, Ward 1",
  tagline: "Kids First for a Better Norfolk",
  phone: "757-629-4575",
  email: "adale.martin4NPS@gmail.com",
  committee: "Friends of Adale Martin",
  disclaimer: "Authorized and Paid for by Friends of Adale Martin",
  donateUrl: "https://secure.actblue.com/donate/adalemartin",
  /** Optional alternate processor URL — overrides donateUrl when set. */
  donorboxUrl: "",
  /** Flip to false to hide donate CTAs sitewide. */
  donateEnabled: true,
  earlyVoting: "Early voting is September 18 – October 31",
  earlyVotingStart: "September 18",
  earlyVotingEnd: "October 31",
  electionDay: "November 3",
  /** Local election day — countdown target (America/New_York). */
  electionDayIso: "2026-11-03T07:00:00-05:00",
  social: {
    instagram: "http://www.instagram.com/adale_martin4NPS",
    facebook: "https://www.facebook.com/AdaleMartin4NPS/",
    twitter: "http://www.twitter.com/adalemartin4NPS",
  },
} as const;

export const nav = [
  {
    label: "My Goals for Our Kids",
    href: "/goals/academic-outcomes",
    children: [
      { label: "Improving Academic Outcomes", href: "/goals/academic-outcomes" },
      { label: "Safe and Secure Schools", href: "/goals/safe-schools" },
      { label: "Workforce Retention", href: "/goals/workforce" },
    ],
  },
  { label: "About Adale", href: "/about" },
  { label: "Why Adale?", href: "/compare" },
  { label: "What Parents Are Saying", href: "/parents" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Vote", href: "/vote" },
] as const;

export const donateAmounts = [25, 50, 100, 250] as const;

export const donateImpacts = [
  {
    amount: "$25",
    label: "Literature for a block",
  },
  {
    amount: "$50",
    label: "Yard signs for neighbors",
  },
  {
    amount: "$100",
    label: "Canvass supplies for a weekend",
  },
  {
    amount: "$250",
    label: "Digital ads reaching Ward 1 parents",
  },
] as const;

export const recordStats = [
  {
    value: "2018",
    label: "Elected to NPS Board",
  },
  {
    value: "3×",
    label: "Terms as Board Chair",
  },
  {
    value: "95%",
    label: "Graduation rate goal",
  },
  {
    value: "91%+",
    label: "Teacher retention under her watch",
  },
] as const;

export const vision =
  "I am committed to ensuring at least a 95% Graduation Rate for Norfolk Public School seniors so that they can have opportunities upon graduation, which means that they are prepared to be Enrolled, Employed, or Enlisted.";

export const aboutFeatured =
  "Focused on a 95% graduation rate — enrolled, employed, or enlisted.";

export const aboutParagraphs = [
  "Dr. Adale Martin was elected to the Norfolk Public School Board in 2018. Dr. Martin was the NPS Board Chair during COVID for three terms. She has a proven record of focusing on improving student academic outcomes, expanding security resources in schools, and supporting our amazing teachers and staff.",
  "As a proud mother of two students with accommodations, Adale works with families to understand their rights when navigating the Individual Educational Plan (IEP) & 504 processes. She works to improve equitable access to available resources and services.",
  "Adale is passionate about education. She is a product of public education from Pre-K – Ph.D.! Adale earned her Doctoral degree from Old Dominion University’s School of Public Service in public policy with a specialization in collaboration and international security policy, a Master of Public Administration degree from Louisiana State University, and a bachelor’s degree from The Ohio State University in International and French Studies. Adale is also an alumnus of the University of Virginia’s Sorensen’s Political Leaders Program and currently serves as a class representative on the Sorensen’s Alumni Council.",
  "Dr. Martin’s professional career has been focused on adult education and training, curriculum development, and program management. She managed clinical and scientific oncologic programs at the American Society of Clinical Oncology and counter-terrorism training for first responders and SWAT Teams at the National Center for Biomedical Research and Training at Louisiana State University.",
];

export const aboutCommunityIntro =
  "Adale is passionate about serving our community, which is evident in the work that she does every day.";

export const aboutCommunityRoles = [
  "Principal of AM&Co. Strategies, LLC",
  "Formerly Executive Director of the Slover Library Foundation, overseeing operations, development, events, community engagement and impact, marketing, and communications",
  "Served as a liaison to the Norfolk Public Library Board of Trustees",
  "Advocate and fundraiser in support of CHKD as a member of the Magnolia Circle of the King’s Daughters",
  "Member of the Garden Club of Norfolk",
];

export const aboutClosing =
  "Most of all, Dr. Adale Martin is an experienced advocate for NPS students.";

export const serviceRecord = [
  "Norfolk Public School Board 2018 – Present",
  "Past Norfolk Public Schools Board Chair (2020 – 2022)",
  "Norfolk Public Schools, Policy Committee, 2018 – 2020 & 2023 – Present",
  "Graduate, University of Virginia, Sorensen’s Political Leaders Institute, Class of 2021",
  "Class of 2021 Representative, Alumni Council, Sorensen’s Political Leaders Institute (2021–Present)",
  "Access College Foundation, Board of Directors, Norfolk Public Schools Representative (2024–Present)",
  "Norfolk Commission of Life-long Learning (2019–2022)",
  "WHRO HRETA Committee 2018–2020",
  "Virginia School Boards Association (VSBA) Federal Legislative Committee (2024–Present)",
  "Tidewater Representative Selection Committee (2025–Present)",
  "Norfolk’s Poverty Reduction Committee (2013–14), Education and Workforce Development Committee",
  "Norfolk Jury Commission (2010–11)",
  "Magnolia Circle of the Kings Daughters, Past President & Chair of the Dragon Boat Race Fundraiser (2014–Present); CHKD Membership, Advocacy, and Communications Committees",
  "Naval Station Norfolk Centennial Commission (2015–16)",
  "Slover Foundation liaison to the Norfolk Public Library Board of Trustees (2015–2025)",
  "Lambert’s Point Open Space, Board of Directors (2025–Present)",
] as const;

export const goals = {
  academic: {
    title: "Improving Academic Outcomes",
    body: [
      "As a school board member and mother of two NPS students, I know firsthand the challenges families face when learning is disrupted. In challenging times, I believe an important lesson to teach our students is resilience.",
      "NPS has focused on remediating lost learning by providing direct lines of support to the classrooms. This comprehensive approach includes designing academically robust summer school programs, implementing school-level data review meetings, investing in extra instructional supports and services for educators, and increasing early literacy program supports in pre-K–3rd grades. NPS is already experiencing increases in English (83%) and Math (48%) performance rates.",
      "…but there’s still work to do, which is why I remain focused on improving the graduation rate so that NPS seniors will have opportunities upon graduation and are prepared to be ENROLLED in higher education, EMPLOYED toward a career path, or ENLISTED in military services.",
    ],
  },
  safety: {
    title: "Safety & Security Resources in Our Schools",
    body: [
      "I am a steadfast advocate for safety and security at NPS schools — against threats old and new, from school violence and mental health crises to bullying and online safety risks. I was Chair of the NPS Board for three terms, leading during one of the most demanding stretches in public education, and worked to expand resources addressing the social, emotional, and behavioral needs of our students. NPS also launched the Vector Alert Tip Reporting app that provides students, parents/guardians, and staff a safe way to report bullying, threats, and safety concerns anytime, anywhere, and on any device. I will continue to advocate for expanding security resource officers to all NPS schools, including elementary schools, and for strengthening mental health support and digital safety protections that address the risks students face today.",
      "Providing safe and secure learning environments at NPS schools is fundamental and requires an integrated effort by our city, state, and community partners to recognize, understand, and address risks — physical and digital — before they impact our schools. Overall, security begins with a culture of civility, trust, and dialogue with the broader community and city partners, of which we can each do our part.",
    ],
  },
  workforce: {
    title: "Workforce Retention",
    body: [
      "Norfolk Public Schools remains one of the largest employers in the City of Norfolk — the largest employer within city government itself — with more than 5,600 employees dedicated to serving our students. Despite a national workforce shortage, our teacher retention rate has climbed to 91%, already surpassing the district’s own goal set for 2026–2027 and exceeding the national average.",
      "An organization’s budget is a direct reflection of its priorities. The NPS Board approved funding in the FY2026 Budget to provide a 4.5% salary increase, a $3,000 retention bonus for returning staff, and new hiring incentives to recruit and keep great teachers. Our bus drivers remain among the highest paid in the region. We are also expanding support positions in our schools — adding mental health social workers, behavioral specialists, and an occupational therapist, while continuing funding for the school psychologists and social workers who serve students with disabilities.",
      "Additionally, NPS is renowned for providing comprehensive professional development opportunities that prepare teachers so that they can be confident in the classroom. Importantly, the NPS Board listens and supports our employees — most recently surveying more than 2,400 teachers and families on proposed changes to the 2027–2028 school calendar to address concerns about burnout and protect planning time.",
      "As a parent and school board member, I am grateful for our NPS employees and the important work they do every day for our students! I will continue to work with our teachers, administrators, and support staff to ensure that they have the resources they need to be the best versions of themselves because we are truly in this together for Norfolk’s kids!",
    ],
  },
} as const;

export const parentsIntro = {
  title: "A message from Adale to parents",
  paragraphs: [
    "Many families feel pressured to choose one school over another when trying to find the best fit for their child. I know first-hand how frustrating this can be because I experienced this with each of my boys. At the same time, we are fortunate to live in a community that has several educational opportunities for our kids. I believe that parents should choose a school that is the best fit for their child’s needs. That’s why I work to help families navigate often tough decisions when selecting a school.",
    "Still, many parents say, “I didn’t want to bother you.” I respond, “Please bother me!” The truth is that I am on the NPS Board so that I can help you and importantly, so that together we can get your child on the right path. Below are comments from some of the families that I have helped over the years. It takes a village to raise our kids, and I am honored to have the opportunity to help you and your student along the way. For this reason, I don’t seek political endorsements as other politicians do. I seek the endorsement of those I serve.",
  ],
};

export const testimonials = [
  {
    quote:
      "When we were dealing with the schools, we felt powerless. The first person that I thought to call was Adale; not just because we were friends, but because I knew she would help our family.",
    name: "Steve Housh",
    role: "Parent of 5 NPS students",
  },
  {
    quote:
      "Norfolk Public Schools needs leadership with the experience, education, and passion to make the best decisions for our schools. As a parent, she is the best choice. I voted for Adale Martin before and I will do it again on November 3rd.",
    name: "Jennifer Henderson",
    role: "Norfolk Parent",
  },
  {
    quote:
      "Throughout my 20 yr. Naval career (enlisted & officer) and the many careers I have had since, including United Methodist Pastor, I have witnessed very few people who are who they say they are, who listen, who act, and put others ahead of themselves. Dr. Adale Martin, whom I have personally known for over 10 years is one of those people. She is always willing to do what it takes to help and attentively listens to anyone who wishes to talk. I am confident she will bring the same demeanor to the School Board. This is evident by the fact that she is the only one I’ve seen knocking on doors.",
    name: "(Master) Jack Meservey",
    role: "Ward 1 Resident",
  },
  {
    quote:
      "I endorse Adale Martin for re-election to the Norfolk School Board. As a parent of two children who graduated from Norfolk Public Schools recently and 5 years ago! Adale’s a committed mom and community oriented person that makes her a great fit for representing values that we need for today’s young children and youth!",
    name: "Sonal Rastogi",
    role: "Parent of 2 NPS graduates",
  },
  {
    quote:
      "Adale cares about Norfolk’s students. That is why she is the most suited person to represent us on the Norfolk School Board. I cannot think of anyone I would trust more to advocate for my child. I voted for Adale.",
    name: "Jen Amick",
    role: "Norfolk Mom",
  },
  {
    quote:
      "I was struck particularly by the professionalism and poise exhibited by Dr. Martin, Colonel Paulson, legal counsel, and Dr. Byrdsong. They each remained composed, informed, and focused despite the chaos that was ensuing around them on what could have had catastrophic consequences. Their professionalism is commendable and should be the standard for all individuals entrusted with advocating for our children.",
    name: "Deborah Austin",
    role: "Community Member",
  },
] as const;

/** Why Adale — credentials and record (no opponent references). */
export const comparison = {
  intro:
    "Adale has already led Norfolk Public Schools through the hardest years in a generation — and delivered results for students, families, and educators.",
  addition:
    "As fluctuating enrollment patterns and shifting birth rates create new financial realities for Norfolk Public Schools, Ward 1 School Board Representative Dr. Adale Martin is leading the call for a transparent, community-centered response. Recognizing that school transitions can cause anxiety for families, Dr. Martin is actively advocating for enhanced multilingual communication and institutional clarity. To ease the uncertainty associated with shifting district structures, her re-election campaign is prioritizing unity throughout the community to support our students through this transition. She aims to eliminate the apprehension of changing schools by welcoming students and families into a cohesive and supportive new educational community.",
  recordHeading: "Adale’s Record for Norfolk’s Schools",
  rows: [
    {
      category: "School Board Experience",
      body: "Elected to the Norfolk Public School Board in 2018. Served as Board Chair for three terms — leading the district through demanding years and keeping students, families, and educators at the center of every decision.",
    },
    {
      category: "Proven Record on NPS",
      body: "Focused board leadership on academic outcomes, expanded school security resources, and educator support. Advanced summer remediation, early literacy supports, and workforce investments — with English and Math performance rising.",
    },
    {
      category: "Parent Perspective",
      body: "Mother of two public school students. Helps families navigate IEP and 504 processes and fights for equitable access to services — the daily reality of public-school parenting at its hardest.",
    },
    {
      category: "Education & Training for Governance",
      body: "Product of public education Pre-K through Ph.D. Doctorate in public policy (ODU School of Public Service); MPA (LSU); BA (Ohio State). Alumna of UVA’s Sorensen Political Leaders Program; class representative on the Sorensen Alumni Council.",
    },
    {
      category: "Professional Leadership",
      body: "Career in adult education, curriculum development, and program management — including clinical/scientific programs at the American Society of Clinical Oncology and first-responder training at LSU’s National Center for Biomedical Research and Training. Formerly Executive Director of the Slover Library Foundation. Principal, AM&Co. Strategies, LLC.",
    },
    {
      category: "Norfolk Community Service",
      body: "Served as liaison to the Norfolk Public Library Board of Trustees; CHKD advocate via Magnolia Circle of the King’s Daughters; Garden Club of Norfolk. Deep, day-to-day civic work in the city she serves.",
    },
  ],
  closingPoints: [
    {
      title: "She’s already done the job",
      body: "School board isn’t an entry-level role. Adale was Board Chair for three terms, made hard votes, and stayed focused on kids — not campaign slogans.",
    },
    {
      title: "Policy training meets classroom reality",
      body: "A public-policy doctorate, an MPA, and special-education parenting give Adale the toolkit to govern a complex district with clarity and care.",
    },
    {
      title: "Parents trust her because she shows up",
      body: "Families don’t ask for political endorsements — they ask for help. Adale’s record is written in IEP meetings, school choices, and parent testimonials across Ward 1.",
    },
  ],
} as const;
