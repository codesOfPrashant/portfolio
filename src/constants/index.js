const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact Me",
    link: "#contactme",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Golang Developer",
    modelPath: "/models/gopher.glb",
    scale: 0.7,
    rotation: [0,-Math.PI / 2, 0],
    position: [0, -2, 0],
  },
  {
    name: "Nodejs Developer",
    modelPath:"/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Solutions Architect",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Prashant displayed exemplary performance and strong leadership skills throughout the Resilient project. He actively contributed to user story refinement and effectively delegated tasks, ensuring smooth collaboration and steady progress within the team.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/searce.png",
    title: "Lead Software Engineer",
    date: "July 2025 - Present",
    responsibilities: [
      "Led the development of FastAPI backend with 3 layer architecture for the folder structure",
      "Led the Complete Revamp of the existing codebase and data model",
      "Reduced number of tables in the database from 45 to 15",
      "Reduced the number of APIs from 115 to 30 supporting the same amount of features"
    ],
  },
  {
    review: "I would like to take a moment to appreciate Parshant’s outstanding contributions and leadership in the Dodrio project. His technical expertise, problem-solving skills, and dedication have been instrumental in the project's success, and his ability to effectively lead the project and manage client communication has ensured smooth collaboration and execution. - Ankit Bhatnagar",
    imgPath: "/images/exp2.png",
    logoPath: "/images/searce.png",
    title: "Senior Software Engineer",
    date: "April 2021 - June 2025",
    responsibilities: [
      "Dodrio: Implemented Event-Driven & Asynchronous Architecture using Pub/Sub",
      "Created Queuing mechanism for upstream pace-matching and downstream retry logic.",
      "ETL – Migrated data from PostgreSQL to a MongoDB-based schema while ensuring integrity.",
      "Picnic: Led the Development of 2 backend microservices. Worked with Golang, GraphQL, gRPC, Spanner extensively.",
    ],
  },
  {
    review: "We would like to express our appreciation for all the position and commitment you have exhibited in your existing role as a Software Engineer. In recognition of your contribution, it is our pleasure to inform you that you have been promoted to “Senior Software Engineer” at our organization,",
    imgPath: "/images/exp3.png",
    logoPath: "/images/searce.png",
    title: "Software Engineer",
    date: "April 2021 - March 2022",
    responsibilities: [
      "Led development of Jmeter, Python and Bash framework for testing new Google Cloud service AlloyDB.",
      "Bugs identification while carrying out workload for load and stress testing the Alloy DB service.",
      "Developed a portal (Harbour Bridge) to migrate MySQL and PostgreSQL to Google Cloud Spanner.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url : "https://www.instagram.com/prashant__kmr__/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100012747402798"
  },
  {
    name: "lin kedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/prashant-kumar-9192b6162/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
