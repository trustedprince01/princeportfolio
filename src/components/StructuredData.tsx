import { FC } from 'react';

const StructuredData: FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "chibuzor prince soulhacker trusted prince",
    "url": "https://chibuzorprince.netlify.app/",
    "jobTitle": "Web Developer & Software Developer & Full Stack Developer & App Developer",
    "image": "https://yourportfolio.com/profile.jpg",
    "description": "Full-stack web developer specializing in React, TypeScript, and modern web technologies",
    "sameAs": [
      "https://github.com/trustedprince01",
      "https://www.linkedin.com/in/chibuzor-prince-68976b35b/",
      "https://twitter.com/jokerelon"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "Full Stack Development",
      "Software Development",
      "Python"
    ]
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;