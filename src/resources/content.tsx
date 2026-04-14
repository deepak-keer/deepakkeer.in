import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// ─────────────────────────────────────────────
//  PERSON
// ─────────────────────────────────────────────
const person: Person = {
  firstName: "Deepak",
  lastName: "Keer",
  name: `Deepak Keer`,
  // 2026 best practice: role as a value proposition, not a job title.
  // Leads with what you *deliver*, not what you *are*.
  role: "Full Stack Developer — turning complex problems into clean, fast, production-ready systems",
  avatar: "/images/avatar.jpg",
  email: "deepakkeer.dev@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

// ─────────────────────────────────────────────
//  NEWSLETTER
// ─────────────────────────────────────────────
const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>Behind-the-scenes on systems, debugging and real-world builds</>
  ),
};

// ─────────────────────────────────────────────
//  SOCIAL
// ─────────────────────────────────────────────
const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Deepu-Builds",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deepak-keer-1276a4361/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

// ─────────────────────────────────────────────
//  HOME
// ─────────────────────────────────────────────
const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name} — Full Stack Developer`,
  description: `Full Stack Developer building fast, reliable, production-grade systems. View projects and work by ${person.name}.`,

  // 2026 best practice: headline is a specific claim, not a vibe.
  // "Building real-world systems" is generic — every dev says this.
  // This version names the outcome AND the method.
  headline: (
    <>
      I ship production-grade systems that are fast, reliable and built to last
    </>
  ),

  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">PagePulse</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/pagepulse",
  },


  subline: (
    <>
      Full Stack Developer with hands-on production experience building systems
      that reduced load times by{" "}
      <Text as="span" size="xl" weight="strong">
        30%
      </Text>{" "}
      and shipped inside Agile sprints. Latest build:{" "}
      <Text as="span" size="xl" weight="strong">
        PagePulse
      </Text>{" "}
      — a browser-based dev tool for real-time debugging, DOM inspection and
      performance analysis.
    </>
  ),
};

// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name} — Full Stack Developer building production-grade web systems with React, Next.js, Node.js and AI-augmented workflows.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/deepakkeer",
  },
  intro: {
    display: true,
    title: "Introduction",
    // 2026 best practice: intro is a value proposition paragraph, not a self-description.
    // It answers "why should I care?" and "what makes this person different?" immediately.
    description: (
      <>
        I'm a Full Stack Developer who builds production systems that actually
        ship — not demos, not tutorials. I've spent the last year inside a real
        product team optimising renders, wiring REST APIs to live dashboards and
        cutting initial load time by ~30% through lazy loading and memoization.
        I use AI tools every day to write better code faster, debug harder
        problems and think through architecture at a level that would have taken
        far longer without them. My edge is treating AI as a force-multiplier,
        not a crutch — I understand why the code works, not just that it does.
      </>
    ),
  },

  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Karmyug Techzone",
        timeframe: "Aug 2025 – Oct 2025",
        role: "Full Stack Developer Intern",
        // 2026 best practice: every achievement follows the X-Y-Z formula.
        // "Accomplished [X] as measured by [Y], by doing [Z]."
        // Generic duties are invisible to both humans and AI-powered ATS.
        achievements: [
          <>
            Reduced initial page load time by ~30% by implementing lazy loading
            and React.memo across three core dashboard views, improving
            perceived performance for daily active users.
          </>,
          <>
            Integrated four REST API endpoints that powered real-time inventory
            and analytics dashboards, eliminating a manual refresh workflow used
            by the operations team.
          </>,
          <>
            Built and shipped eight responsive UI components within an Agile
            sprint cycle, maintaining consistent cross-device experience from
            360px mobile to 1440px desktop.
          </>,
          <>
            Accelerated feature delivery by collaborating directly with two
            backend engineers and the lead designer, reducing review-to-merge
            time through early API contract alignment.
          </>,
        ],
        images: [],
      },
      {
        company: "Karmyug Techzone",
        timeframe: "Nov 2025 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Architected and shipped full-stack features end-to-end — from
            database schema to deployed UI — cutting manual internal workflow
            steps by consolidating three separate tools into one system.
          </>,
          <>
            Built JWT-based authentication and role-based API access control,
            improving data security posture and reducing unauthorised request
            errors to zero in post-launch monitoring.
          </>,
          <>
            Designed a component-driven frontend architecture with clear
            separation of concerns, enabling the team to add new features
            without refactoring existing pages.
          </>,
          <>
            Maintained Lighthouse performance scores above 90 across all pages
            by applying code-splitting, image optimisation and server-side
            rendering strategies.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Learning",
    institutions: [
      {
        name: "Data Structures & Algorithms",
        description: (
          <>
            Consistent LeetCode practice focused on arrays, trees, graphs and
            dynamic programming — building the algorithmic thinking that
            employers now rank among the fastest-rising must-have skills.
          </>
        ),
      },
      {
        name: "System Design",
        description: (
          <>
            Studying scalable architecture patterns: load balancing, caching
            layers, message queues and database sharding — applied directly to
            decisions made in production at Karmyug Techzone.
          </>
        ),
      },
      {
        name: "AI-Augmented Development",
        description: (
          <>
            Daily practice using LLMs for code review, debugging, architecture
            planning and prompt engineering — the skill set that recruiters
            flagged as the fastest-growing priority in 2026 hiring.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      // 2026 best practice: lead with AI skills — they went from "bonus" to
      // "must-have" in job postings (5% → 9% requirement growth, 2024–2025).
      // Deepak's early AI fluency is his biggest differentiator vs peers.
      {
        title: "AI-Augmented Development",
        description: (
          <>
            Using AI as a daily development multiplier — cutting debugging time,
            stress-testing architecture decisions before writing a line of code,
            and shipping higher-quality work faster than a traditional workflow
            allows.
          </>
        ),
        tags: [
          { name: "Claude", icon: "brain" },
          { name: "ChatGPT", icon: "brain" },
          { name: "GitHub Copilot", icon: "copilot" },
          { name: "Cursor IDE", icon: "code" },
          { name: "Prompt Engineering", icon: "brain" },
          { name: "AI-Assisted Debugging", icon: "bug" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Building fast, accessible, responsive interfaces with modern React
            patterns — component architecture, performance optimisation and
            clean design systems.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
        ],
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>
            Designing and shipping production REST APIs with auth, rate limiting
            and clean error handling — not tutorial-grade CRUD, but systems that
            handle real traffic.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "REST APIs", icon: "api" },
          { name: "JWT Auth", icon: "settings" },
          { name: "Postman", icon: "postman" },
        ],
        images: [],
      },
      {
        title: "Database & Cloud Storage",
        description: (
          <>
            Selecting and integrating the right storage layer for the job — from
            document stores to cloud CDN and object storage.
          </>
        ),
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "Firebase", icon: "firebase" },
          { name: "Cloudinary", icon: "cloudinary" },
          { name: "AWS S3", icon: "aws" },
        ],
        images: [],
      },
      {
        title: "DevOps & Toolchain",
        description: (
          <>
            From commit to deployed — CI/CD pipelines, preview deployments and
            the Git workflows that keep production stable.
          </>
        ),
        tags: [
          { name: "Git", icon: "github" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Vercel", icon: "vercel" },
          { name: "CI/CD", icon: "refresh" },
          { name: "Webpack", icon: "webpack" },
          { name: "Chrome DevTools", icon: "chrome" },
        ],
        images: [],
      },
      {
        title: "Testing",
        description: (
          <>
            Writing tests that catch real bugs — unit, integration and
            component-level coverage with modern tooling.
          </>
        ),
        tags: [
          { name: "Jest", icon: "jest" },
          { name: "React Testing Library", icon: "check" },
        ],
        images: [],
      },
      {
        title: "Core Competencies",
        description: (
          <>
            The non-negotiable fundamentals that make every feature I ship
            maintainable, scalable and easy for the next developer to work with.
          </>
        ),
        tags: [
          { name: "Full Stack Development", icon: "code" },
          { name: "System Design", icon: "cpu" },
          { name: "Algorithmic Thinking", icon: "brain" },
          { name: "API Design", icon: "settings" },
          { name: "Performance Optimisation", icon: "refresh" },
          { name: "Agile / Sprints", icon: "check" },
        ],
        images: [],
      },
      {
        title: "Video Production",
        description: (
          <>
            Motion graphics and post-production for digital content — a creative
            skill that overlaps with UI animation thinking.
          </>
        ),
        tags: [
          { name: "Adobe After Effects", icon: "aftereffects" },
          { name: "Adobe Premiere Pro", icon: "premierepro" },
          { name: "Content Creation", icon: "camera" },
        ],
        images: [],
      },
    ],
  },
};

// ─────────────────────────────────────────────
//  BLOG
// ─────────────────────────────────────────────
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  // 2026 best practice: blog title promises specific, useful content.
  title: "In-depth notes on systems, performance and AI-assisted development",
  description: `Technical writing and build logs by ${person.name}`,
};

// ─────────────────────────────────────────────
//  WORK
// ─────────────────────────────────────────────
const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects — ${person.name}`,
  // 2026 best practice: description is indexed by search engines and ATS tools.
  // Include key skills so it surfaces in semantic matching.
  description: `Full-stack projects and developer tools built by ${person.name} using React, Next.js, Node.js and AI-augmented workflows.`,
};

// ─────────────────────────────────────────────
//  GALLERY
// ─────────────────────────────────────────────
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery — ${person.name}`,
  description: `Visual work and motion graphics by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Gallery image 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Gallery image 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Gallery image 3",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Gallery image 4",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Gallery image 5",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Gallery image 6",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Gallery image 7",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Gallery image 8",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
