export const personalInfo = {
    name: "Jeel Kathiria",
    tagline: "Full Stack Developer | B.Tech IT @ KJSCE | MERN & DevOps Specialist",
    heroIntro: "I build scalable full-stack applications using React, Node.js, Express.js, PostgreSQL, MongoDB, and modern DevOps practices. Experienced in OCR & AI pipelines, RESTful APIs, and CI/CD automation.",
    bio: [
        "I am a B.Tech Information Technology student at K.J. Somaiya College of Engineering, Mumbai (CGPA: 9.24). I am deeply passionate about full-stack web development, cloud architecture, and building scalable systems that solve real-world challenges.",
        "My work includes building an Accounts Payable AI automation platform (InvoiceFlow) with hybrid Tesseract OCR + Gemini Vision AI fallback, co-developing CampusFix-AI (3rd Rank winner at KJSCE GDG Hackathon), and engineering containerized e-commerce systems with PostgreSQL and Docker.",
        "With 100+ DSA problems solved on LeetCode and experience building production-ready applications, I thrive in collaborative technical environments and enjoy tackling complex engineering problems."
    ],
    email: "jeelkathiriya10f@gmail.com",
    phone: "+91 7045090716",
    location: "Mumbai, Maharashtra, India",
    github: "https://github.com/Jeelkathiria",
    linkedin: "https://www.linkedin.com/in/jeel-kathiria-56786628a/",
    resumeLink: "/Jeel_Kathiria_2026.pdf"
};

export const skills = [
    { category: "Languages", items: ["C++", "JavaScript", "Java", "HTML5", "CSS3"] },
    { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"] },
    { category: "Databases & Cloud", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Cloudinary"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Vercel", "Postman"] },
    { category: "Core Computer Science", items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Cloud Computing"] }
];

export const achievements = [
    {
        title: "3rd Rank - KJSCE GDG Hackathon",
        description: "Secured 3rd rank for developing CampusFix-AI, a smart campus complaint management system with AI categorization and heatmap visualization.",
        badge: "Hackathon Winner"
    },
    {
        title: "100+ LeetCode Solved",
        description: "Solved over 100 Data Structures & Algorithms problems demonstrating strong logic building and problem-solving skills.",
        badge: "DSA & Problem Solving"
    }
];

export const projects = [
    {
        id: 1,
        title: "InvoiceFlow",
        category: "Full-Stack / AI Automation",
        description: "A full-stack Accounts Payable automation platform featuring an OCR-first extraction pipeline, Gemini Vision AI fallbacks, duplicate detection, and role-based workflows.",
        image: "/InvoiceFlow.png",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tesseract OCR", "Cloudinary"],
        github: "https://github.com/Jeelkathiria/invoiceflow.git",
        live: "https://invoiceflow-lilac-three.vercel.app/",
        features: [
            "Engineered an OCR-first extraction pipeline using Tesseract OCR with Gemini Vision AI fallback for low-confidence documents.",
            "Developed rule-based duplicate detection algorithms matching normalized vendor names, invoice numbers, and totals.",
            "Implemented role-based Finance and Manager workflows with JWT authentication, status transitions, and audit trails.",
            "Integrated Cloudinary cloud document storage and optimized MongoDB Atlas schemas for billing data."
        ]
    },
    {
        id: 2,
        title: "CampusFix-AI",
        category: "Full-Stack / AI Hackathon",
        description: "A smart campus complaint management system automating complaint reporting, real-time tracking, AI categorization, and resolution workflows (3rd Rank at KJSCE GDG Hackathon).",
        image: "/CampusFix.png",
        techStack: ["React", "JavaScript", "Tailwind CSS", "Gemini AI", "REST APIs"],
        github: "https://github.com/omar-h-Hashmi-rgb/campusfix",
        live: "https://campusfix-ten.vercel.app/",
        features: [
            "Co-developed a team hackathon web app to automate campus complaint reporting and real-time issue tracking.",
            "Built an interactive Admin Dashboard featuring real-time heatmap visualizations and a live activity timeline.",
            "Integrated Google Gemini AI to automate complaint categorization, priority tagging, and insight generation.",
            "Designed a karma-based reputation system to reward verified user reports with robust RESTful APIs."
        ]
    },
    {
        id: 3,
        title: "Saturn Imports E-Commerce",
        category: "Full-Stack / Enterprise Client Project",
        description: "Full-stack e-commerce web platform developed for client Saturn Imports to manage product catalogs, cart management, and order processing.",
        image: "/Ecommerce.png",
        techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "GitHub Actions"],
        github: "https://github.com/Jeelkathiria",
        live: "#",
        features: [
            "Developed full-stack e-commerce platform managing product catalogs, shopping carts, and order processing.",
            "Engineered RESTful API endpoints and optimized PostgreSQL schemas for fast query performance and reliable transactions.",
            "Containerized application services using Docker and established automated CI/CD build pipelines with GitHub Actions."
        ]
    }
];

export const education = [
    {
        institution: "K.J. Somaiya College of Engineering, Mumbai",
        degree: "B.Tech in Information Technology (IT)",
        duration: "Jul 2023 – Present",
        score: "CGPA: 9.24",
        details: "Focus on Software Engineering, Web Technologies, Database Management, and Data Structures."
    }
];

export const experience = [
    {
        role: "Full Stack Developer Intern",
        company: "K.J. Somaiya College of Engineering",
        location: "Mumbai, India",
        duration: "Dec 2025 – Apr 2026",
        points: [
            "Developed a full-stack e-commerce web platform (Client: Saturn Imports) using React, Node.js, Express.js, and PostgreSQL to manage product catalogs, cart management, and order processing.",
            "Engineered RESTful API endpoints and optimized database schemas in PostgreSQL to ensure fast query performance and reliable transaction handling.",
            "Containerized application services using Docker and established automated CI/CD build pipelines with GitHub Actions for consistent multi-environment deployments."
        ]
    }
];
