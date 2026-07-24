"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useRecruiterMode } from "@/components/providers/RecruiterModeProvider";

const projects = [
  {
    title: "Islamabad Chamber of Commerce Portal",
    description: "Re-engineered the official web portal frontend into a modular ReactJS application, resolving cross-device breakpoint scaling issues, fixing layout bugs, and optimizing Core Web Vital metrics.",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript", "HTML5"],
    metrics: "Enhanced Web Vitals • Fully Responsive",
    images: [
      "/project-imgs/icci-1.png",
      "/project-imgs/icci-2.png",
      "/project-imgs/icci-3.png",
      "/project-imgs/icci-4.png"
    ],
    live: "https://project-icci.vercel.app/",
    github: "https://github.com/mabbasdev/project-icci",
  },
  {
    title: "Enterprise React Admin Dashboard",
    description: "Built an enterprise-grade, fully functional admin dashboard featuring customizable data tables, interactive analytical charts, calendar scheduling, dark/light mode toggling, and schema-validated forms.",
    tech: ["ReactJS", "Material UI", "Nivo Charts", "JavaScript"],
    metrics: "Data Visualization • Full Theme Customization",
    images: [
      "/project-imgs/admin-dash-mui-1.png",
      "/project-imgs/admin-dash-mui-2.png",
      "/project-imgs/admin-dash-mui-3.png",
      "/project-imgs/admin-dash-mui-4.png",
      "/project-imgs/admin-dash-mui-5.png",
      "/project-imgs/admin-dash-mui-6.png",
      "/project-imgs/admin-dash-mui-7.png"
    ],
    live: "https://react-admin-dashboard-material-ui-n.vercel.app/",
    github: "https://github.com/mabbasdev/react-admin-dashboard-material-ui-nivo-chart",
  },
  {
    title: "Employee Management System",
    description: "Currently engineering an enterprise portal combining PHP/Laravel & MySQL with MERN stack options. Designed to handle full corporate workflows including bulk/individual messaging, email dispatch, and automated attendance tracking.",
    tech: ["PHP/Laravel", "MySQL", "ReactJS", "Node.js", "Express"],
    metrics: "In Active Development • All-In-One Corporate Suite",
    images: [
      "/project-imgs/ems-1.png",
      "/project-imgs/ems-2.png",
      "/project-imgs/ems-3.png",
      "/project-imgs/ems-4.png",
      "/project-imgs/ems-5.png",
      "/project-imgs/ems-6.png",
      "/project-imgs/ems-7.png",
      "/project-imgs/ems-8.png",
      "/project-imgs/ems-9.png"
    ],
    live: "null",
    github: "null",
  },
  {
    title: "Boiler Techniques Website",
    description: "Designed and developed a clean, responsive industrial corporate website built to showcase engineering services, technical specifications, and client solution portfolios.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    metrics: "Industrial Client Solution • Optimized Layouts",
    images: [
      "/project-imgs/boiler-tech-1.png",
      "/project-imgs/boiler-tech-2.png",
      "/project-imgs/boiler-tech-3.png",
      "/project-imgs/boiler-tech-4.png",
      "/project-imgs/boiler-tech-5.png"
    ],
    live: "https://mabbasdev.github.io/boiler-tech/",
    github: "https://github.com/mabbasdev/boiler-tech",
  },
  {
    title: "Full-Stack E-Commerce Market",
    description: "Developed a feature-rich online shopping platform with custom product catalogs, user authentication, inventory management, and multi-gateway payment API integrations.",
    tech: ["PHP", "MySQL", "JavaScript", "Payment APIs"],
    metrics: "Multi-Payment Gateway • Dynamic Catalog",
    images: [
      "/project-imgs/ecom-php-1.png",
      "/project-imgs/ecom-php-2.png",
      "/project-imgs/ecom-php-3.png",
      "/project-imgs/ecom-php-4.png",
      "/project-imgs/ecom-php-5.png"
    ],
    live: "https://mabbasdev.github.io/ecom-market-html",
    github: "https://github.com/mabbasdev/ecom-market-html",
  },
  {
    title: "Animated Neon Personal Portfolio",
    description: "Crafted an interactive, dark-mode personal portfolio featuring custom neon visual themes, smooth entrance animations, and responsive layout scaling.",
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "JavaScript"],
    metrics: "Custom UI FX • High Frame Rate Animations",
    images: [
      "/project-imgs/portfolio.png"
    ],
    live: "https://react-tailwind-personal-neon-animat.vercel.app/",
    github: "https://github.com/mabbasdev/react-tailwind-personal-neon-animated-portfolio",
  },
];

export default function Projects() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <Section id="projects">
      <AnimatedElement className="w-full mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          {isRecruiterMode ? "Featured Solutions & Builds" : "Full-Stack & Systems Showcase"}
        </h2>
        <p className="text-muted max-w-2xl text-lg">
          {isRecruiterMode
            ? "A showcase of web applications, responsive frontend solutions, and custom system tools built with modern frameworks and clean architecture."
            : "A showcase of production systems I have built and maintained, focusing on backend scale, data management, and absolute system reliability."}
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <AnimatedElement
            key={index}
            delay={index * 0.1}
            className="flex w-full"
          >
            <ProjectCard project={project} />
          </AnimatedElement>
        ))}
      </div>
    </Section>
  );
}
