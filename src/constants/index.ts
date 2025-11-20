import LogosScreenshot from "public/images/237logos.webp";
import DataCheckIllustration from "public/images/assets/data-check-double-0.svg";
import DropDownIllustration from "public/images/assets/dropdown-1.svg";
import JumpToElementIllustration from "public/images/assets/jump-to-element-2.svg";
import StoreIllustration from "public/images/assets/store-3.svg";
import WebIllustration from "public/images/assets/web.svg";
import BataziaScreenshot from "public/images/batazia.webp";
import lomoScreenshot from "public/images/lomo.webp";
import UpworkScreenshot from "public/images/upworkScraper.webp";

export const links = {
  internal: {},
  external: {
    upworkProfile:
      "https://www.upwork.com/freelancers/~01ce6f5158288fda46?mp_source=share",
  },
};

export const services = [
  {
    name: "UI Implementaion",
    description:
      "I specialize in translating design mockups into responsive ,accessible, and pixel- perfect web components using modern technologies",
    illustration: WebIllustration,
  },
  {
    name: "API intergration",
    description:
      "Seamlessly connect your frontend to any backend or third-party service, ensuring robust and secure data flow.",
    illustration: JumpToElementIllustration,
  },
  {
    name: "Browser Extention development",
    description:
      "Build custom browser extensions to enhance productivity, automate tasks, or add new features to your favorite browsers.",
    illustration: DropDownIllustration,
  },
  {
    name: "Maintenance & Bug Fixes",
    description:
      "Keep your web applications running smoothly with ongoing maintenance, quick bug fixes, and performance optimizations.",
    illustration: DataCheckIllustration,
  },
  {
    name: "Shofify Store Development",
    description:
      "Get a custom, high-converting Shopify store tailored to your brand. I handle everything from setup and theme customization to app integration and optimization, ensuring a seamless shopping experience for your customers.",
    illustration: StoreIllustration,
  },
];

export const projects = [
  {
    name: "Batazia Website",
    description:
      "This website serves as the main entry point to the Batazia Ecosystem, showcases the various Batazia products, and directs users to its various services.",
    image: BataziaScreenshot,
    link: "https://batazia.com",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    status: "Completed",
  },
  {
    name: "237-logos",
    description:
      "A collections of high quality, optimised logos for Cameroon companies, organisations and Startups in PNG and SVG formats",
    image: LogosScreenshot,
    link: "https://237-logos.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    status: "Completed",
  },
  {
    name: "Upwork Scraper",
    description:
      "Easily get updated upwork job alerts via telegram based on specific search terms. Built with Node, Express, Typesrcript, Puppeteer, Mongodb and Telegram chat bot api",
    image: UpworkScreenshot,
    link: "https://github.com/teyim/Upwork-job-scraper",
    techStack: ["Docker-compose", "Node.js", "TypeScript", "Puppeteer"],
    status: "Completed",
  },
  {
    name: "Lomo",
    description:
      "Lomo is a full-stack mono repo application that allows bloggers to easily generate blog post thumbnails from carefully selected elements such as Backgrounds, Text, and image layout.",
    image: lomoScreenshot,
    link: "https://github.com/teyim/Lomo",
    techStack: [
      "Docker-compose",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Prisma",
    ],
    status: "in progress",
  },
];

export const navbarLinks = [
  {
    name: "BLOG",
    href: "/blog",
    icon: "BookOpen",
  },
  {
    name: "CV",
    href: "/",
    icon: "FileText",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn best practices for structuring large-scale React applications with TypeScript, including type safety patterns and performance optimization techniques.",
    author: "Teyim Asobo",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "building-scalable-react-applications",
    published: true,
  },
  {
    id: "2",
    title: "Modern CSS Techniques: Grid and Flexbox Mastery",
    excerpt:
      "Deep dive into CSS Grid and Flexbox layouts, exploring practical examples and use cases for creating responsive, modern web designs.",
    author: "Teyim Asobo",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    slug: "modern-css-techniques-grid-flexbox",
    published: true,
  },
  {
    id: "3",
    title: "Next.js 14: Server Components and App Router",
    excerpt:
      "Explore the new features in Next.js 14, including React Server Components, the App Router, and how to migrate your existing applications.",
    author: "Teyim Asobo",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Server Components"],
    slug: "nextjs-14-server-components",
    published: true,
  },
  {
    id: "4",
    title: "Mastering Tailwind CSS: Advanced Patterns",
    excerpt:
      "Discover advanced Tailwind CSS patterns, custom configurations, and how to build a scalable design system for your projects.",
    author: "Teyim Asobo",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["Tailwind CSS", "CSS", "Design Systems"],
    slug: "mastering-tailwind-css-advanced-patterns",
    published: true,
  },
  {
    id: "5",
    title: "Web Performance Optimization: A Complete Guide",
    excerpt:
      "Comprehensive guide to optimizing web performance, covering Core Web Vitals, lazy loading, code splitting, and caching strategies.",
    author: "Teyim Asobo",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    slug: "web-performance-optimization-guide",
    published: true,
  },
  {
    id: "6",
    title: "Building Chrome Extensions with React",
    excerpt:
      "Step-by-step guide to building powerful Chrome extensions using React, including manifest v3 updates and best practices.",
    author: "Teyim Asobo",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Chrome Extensions", "React", "JavaScript"],
    slug: "building-chrome-extensions-react",
    published: true,
  },
];