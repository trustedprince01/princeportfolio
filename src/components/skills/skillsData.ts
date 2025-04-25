
type Skill = {
  name: string;
  level: number;
};

type SkillsData = {
  frontend: Skill[];
  backend: Skill[];
  other: Skill[];
};

export const skillsData: SkillsData = {
  frontend: [
    { name: "React",   level: 70 },
    { name: "TypeScript", level: 65 },
    { name: "JavaScript", level: 60 },
    { name: "HTML/CSS", level: 80 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Bootstrap", level: 75 },
    
  ],
  backend: [
    // { name: "Node.js", level: 70 },
    { name: "Python (Django)", level: 55 },
    { name: "PostgreSQL", level: 60 },
    { name: "Firebase", level: 75 },
    { name: "RESTful APIs", level: 75 },
  ],
  other: [
    { name: "Git/GitHub", level: 70 },
    { name: "Figma", level: 75 },
    { name: "Flutter", level: 70 },
    { name: "Netlify", level: 70 },
    { name: "Cloudinary", level: 75 },
    { name: "Render/ Railway", level: 75 },
    { name: "Postman", level: 55 },
  
  ],
};
