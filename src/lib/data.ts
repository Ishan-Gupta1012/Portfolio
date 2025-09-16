import { Code, Component, Cpu, Database, GitBranch, Lightbulb, Milestone, Rocket, Users, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  keywords: string[];
  image: string; // placeholder id
  liveUrl?: string;
  repoUrl?: string;
  comingSoon?: boolean;
};

export const projectsData: Project[] = [
  {
    title: "Nexora",
    description: "Nexora is a cutting-edge AI virtual assistant designed to streamline your daily tasks through a conversational interface. It understands and responds to voice commands in real-time, allowing you to manage your schedule, get quick information, and control smart devices with just your voice. Its intuitive interface and natural language processing capabilities provide a seamless, hands-free interactive experience.",
    keywords: ["AI", "Virtual Assistant", "Speech Recognition", "Web App"],
    image: "project1",
    liveUrl: "https://nexoraai1.netlify.app",
  },
  {
    title: "NexaGen",
    description: "A personalised AI career advisor.",
    keywords: ["AI", "Career Advisor", "Personalized"],
    image: "project2",
    comingSoon: true,
  },
  {
    title: "CodeCollab",
    description: "A real-time collaborative code editor with shared workspace and syntax highlighting for multiple languages.",
    keywords: ["Collaboration", "Code Editor", "Real-time", "WebRTC"],
    image: "project3",
    comingSoon: true,
  },
  {
    title: "FitTrack",
    description: "A fitness tracking application to monitor workouts, set goals, and visualize progress with charts.",
    keywords: ["Fitness", "Health", "Data Visualization", "Mobile-First"],
    image: "project4",
    comingSoon: true,
  },
  {
    title: "GourmetGo",
    description: "A recipe discovery platform with AI-powered suggestions based on available ingredients.",
    keywords: ["AI", "Food", "Recipe", "Web App"],
    image: "project5",
    comingSoon: true,
  },
  {
    title: "BudgetWise",
    description: "A personal finance manager to track expenses, create budgets, and gain insights into spending habits.",
    keywords: ["Finance", "Budgeting", "Fintech", "Analytics"],
    image: "project6",
    comingSoon: true,
  },
];


export type Skill = {
  name: string;
  Icon: LucideIcon;
};

export const technicalSkills: Skill[] = [
  { name: "JavaScript/TS", Icon: Cpu },
  { name: "React", Icon: Component },
  { name: "Node.js & Express", Icon: GitBranch },
  { name: "MongoDB", Icon: Database },
  { name: "Tailwind CSS", Icon: Wind },
  { name: "HTML", Icon: Code },
  { name: "C++", Icon: Code },
  { name: "C", Icon: Code },
  { name: "Python", Icon: Code },
];

export const softSkills: Skill[] = [
    { name: "Communication", Icon: Users },
    { name: "Problem Solving", Icon: Lightbulb },
    { name: "Project Management", Icon: Milestone },
];

export const about = {
    name: "Ishan Gupta",
    profession: "Frontend Developer",
    introduction: "I'm a passionate developer with a knack for building beautiful, functional, and scalable web applications. I transform ideas into reality.",
    bio: [
        "My passion for coding and problem-solving drives my work as a frontend developer. I specialize in building captivating web experiences from my base in Delhi, constantly seeking new challenges and opportunities to innovate.",
        "Offscreen, I'm a hands-on learner, exploring cutting-edge AI tools and mastering the art of the Rubik's Cube.",
    ],
}
