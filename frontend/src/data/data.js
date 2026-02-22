export const personalInfo = {
    name: "Jeel Kathiria",
    tagline: "Full-Stack Developer | MERN Specialist | DSA Enthusiast",
    heroIntro: "I build scalable full-stack applications using the MERN stack and modern DevOps practices. Passionate about solving real-world problems with clean architecture and impactful user experiences.",
    bio: [
        "I am a 3rd-year B.Tech Information Technology student at K.J. Somaiya College of Engineering, Mumbai (CGPA: 9.11). I am deeply passionate about full-stack development and building scalable web applications that solve real-world problems efficiently.",
        "Over the past few years, I have worked on multiple full-stack systems including AI-powered platforms, hospital management systems, and inventory management solutions. My expertise lies in the MERN stack, RESTful API development, authentication systems, and database design. I also have hands-on experience with Docker, CI/CD workflows, and AWS EC2 deployment.",
        "Currently, I am strengthening my foundation in Data Structures & Algorithms while continuing to build production-ready applications. I enjoy participating in hackathons and working in team-based environments where I can contribute to impactful technical solutions."
    ],
    email: "jeelkathiriya10f@gmail.com",
    phone: "+91 7045090716",
    github: "https://github.com/Jeelkathiria",
    linkedin: "https://www.linkedin.com/in/jeel-kathiria-56786628a/",
    resumeLink: "/Jeel_Kathiria_2026.pdf"
};

export const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "Supabase Auth"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "DevOps", items: ["Docker", "CI/CD", "AWS EC2", "Vercel", "Linux"] },
    { category: "Languages", items: ["C++", "JavaScript", "Python", "PHP"] }
];

export const projects = [
    {
        id: 1,
        title: "CampusFix-AI",
        description: "An AI-powered complaint management system built during a hackathon to automate issue tracking and improve institutional transparency.",
        image: "/CampusFix.png",
        techStack: ["Next.js", "TypeScript", "MongoDB", "AI Integration"],
        github: "https://github.com/omar-h-Hashmi-rgb/campusfix",
        live: "https://campusfix-ten.vercel.app/",
        features: ["AI-powered analysis", "Admin dashboard", "Karma-based reputation"]
    },
    {
        id: 2,
        title: "HIS-Core",
        description: "A centralized healthcare management system integrating OPD, IPD, billing, pharmacy, and diagnostics into a unified digital workflow.",
        image: "/HIS.png",
        techStack: ["Next.js", "Supabase", "PostgreSQL", "RBAC"],
        github: null,
        live: "https://his-core.vercel.app/",
        features: ["Role-Based Access Control", "Real-time updates", "Secure deployment"]
    },
    {
        id: 3,
        title: "Smart Billing & Inventory",
        description: "A real-time billing and inventory management solution designed for small-to-medium businesses to manage stock, billing, and sales analytics.",
        image: "/BillMitra.png",
        techStack: ["PHP", "MySQL", "JavaScript"],
        github: "https://github.com/Jeelkathiria/smart-billing-inventory",
        live: "https://billmitra.infinityfreeapp.com/auth/index.php",
        features: ["Invoice generation", "Stock updates", "Analytics dashboard"]
    }
];

export const education = [
    {
        institution: "K.J. Somaiya College of Engineering, Mumbai",
        degree: "B.Tech in Information Technology",
        duration: "Jul 2023 – Present",
        score: "CGPA: 9.11"
    }
];

export const experience = [
    {
        role: "Full Stack Developer Intern",
        company: "K.J. Somaiya College of Engineering",
        duration: "Dec 2025 – Feb 2026",
        points: [
            "Built and containerized a full-stack e-commerce platform",
            "Used React, TypeScript, Node.js, Express, PostgreSQL",
            "Deployed Dockerized app on AWS EC2",
            "Configured CI/CD workflows"
        ]
    }
];
