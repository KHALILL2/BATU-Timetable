/**
 * BATU IT Department - Course Details Database
 * Complete course information including credits, hours, and descriptions
 */

const coursesDatabase = {
    // ==================== YEAR 1 - SEMESTER 1 ====================
    // Total: 16 Credits, 23 Weekly Hours
    
    "Intro. to Cyber Security": {
        code: "1",
        title: "Intro. to Cyber Security",
        credits: 1,
        hours: {
            lecture: 1,
            tutorial: 0,
            lab: 0,
            total: 1
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Introduction to fundamental concepts of cybersecurity, including threats, vulnerabilities, and basic protection mechanisms.",
        topics: [
            "Cybersecurity fundamentals",
            "Common threats and attacks",
            "Security principles",
            "Basic protection strategies"
        ]
    },
    
    "IT Essentials": {
        code: "2",
        title: "IT Essentials",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Comprehensive introduction to computer hardware, software, networking, and troubleshooting. Hands-on experience with PC assembly, configuration, and maintenance.",
        topics: [
            "Computer hardware components",
            "Operating systems basics",
            "Networking fundamentals",
            "Troubleshooting techniques",
            "PC assembly and maintenance"
        ]
    },
    
    "Technical English 1": {
        code: "3",
        title: "Technical English 1",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 0,
            total: 4
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Development of technical communication skills in English, focusing on reading, writing, and presenting technical information effectively.",
        topics: [
            "Technical vocabulary",
            "Academic writing",
            "Technical report writing",
            "Presentation skills",
            "Reading comprehension"
        ]
    },
    
    "Mathematics 1": {
        code: "4",
        title: "Mathematics 1",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 0,
            total: 4
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Fundamental mathematical concepts essential for computer science and IT, including calculus, algebra, and discrete mathematics.",
        topics: [
            "Differential calculus",
            "Integral calculus",
            "Linear algebra",
            "Set theory",
            "Mathematical logic"
        ]
    },
    
    "Physics": {
        code: "5",
        title: "Physics",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 0,
            total: 4
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Basic physics principles with applications to electronics and computing, covering mechanics, electricity, magnetism, and waves.",
        topics: [
            "Mechanics and motion",
            "Electricity and circuits",
            "Magnetism",
            "Wave phenomena",
            "Modern physics basics"
        ]
    },
    
    "Programming Essentials in python": {
        code: "6",
        title: "Programming Essentials in Python",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "First Year",
        track: "Common (All Students)",
        description: "Introduction to programming concepts using Python. Covers syntax, data structures, control flow, functions, and basic algorithms.",
        topics: [
            "Python syntax and basics",
            "Data types and structures",
            "Control flow statements",
            "Functions and modules",
            "File handling",
            "Object-oriented programming basics"
        ]
    },

    // ==================== YEAR 2 COURSES ====================
    // Total: 16 Credits, 26 Weekly Hours
    // Common (All Students)
    
    "Linux Essentials": {
        code: "1",
        title: "Linux Essentials",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 1,
            lab: 2,
            total: 5
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Linux operating system fundamentals, command-line interface, system administration, and shell scripting.",
        topics: [
            "Linux architecture",
            "Command-line basics",
            "File system navigation",
            "User management",
            "Shell scripting",
            "System administration"
        ]
    },

    "Programming Essentials in C++": {
        code: "2",
        title: "Programming Essentials in C++",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Object-oriented programming using C++, covering classes, inheritance, polymorphism, and data structures.",
        topics: [
            "C++ syntax and basics",
            "Object-oriented concepts",
            "Classes and objects",
            "Inheritance and polymorphism",
            "Templates and STL",
            "Memory management"
        ]
    },

    "Web Programming I": {
        code: "3",
        title: "Web Programming I",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 3,
            total: 7
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Introduction to web development covering HTML, CSS, JavaScript, and responsive design principles.",
        topics: [
            "HTML5 fundamentals",
            "CSS3 styling and layouts",
            "JavaScript basics",
            "DOM manipulation",
            "Responsive design",
            "Web accessibility"
        ]
    },

    "Introduction to DB": {
        code: "4",
        title: "Introduction to DB",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Database concepts, relational database design, SQL, normalization, and database management systems.",
        topics: [
            "Database fundamentals",
            "Relational model",
            "SQL queries (SELECT, INSERT, UPDATE, DELETE)",
            "Database normalization",
            "DBMS concepts",
            "Entity-Relationship diagrams"
        ]
    },

    "Digital Engineering": {
        code: "5",
        title: "Digital Engineering",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 1,
            lab: 2,
            total: 5
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Fundamentals of digital logic design, Boolean algebra, combinational and sequential circuits.",
        topics: [
            "Boolean algebra",
            "Logic gates and circuits",
            "Combinational circuits",
            "Sequential circuits",
            "Flip-flops and registers",
            "Digital design principles"
        ]
    },

    "Operating System": {
        code: "6",
        title: "Operating System",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Second Year",
        track: "Common (All Students)",
        description: "Study of operating system concepts including process management, memory management, file systems, and security.",
        topics: [
            "OS architecture",
            "Process scheduling",
            "Memory management",
            "File systems",
            "I/O management",
            "Security and protection"
        ]
    },

    // ==================== YEAR 3 COURSES ====================
    
    // SOFTWARE DEVELOPMENT TRACK
    // Total: 16 Credits, 26 Weekly Hours
    
    "Advanced Programming in C++": {
        code: "1",
        title: "Advanced Programming in C++",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Software Development",
        description: "Advanced C++ programming concepts including templates, STL, design patterns, and modern C++ features.",
        topics: [
            "Advanced templates",
            "STL containers and algorithms",
            "Smart pointers",
            "Move semantics",
            "Modern C++ (C++11/14/17)",
            "Design patterns in C++"
        ]
    },

    "Data Communication": {
        code: "2",
        title: "Data Communication",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Common (Software & Network)",
        description: "Fundamentals of data communication, transmission media, protocols, and network architectures.",
        topics: [
            "Data transmission fundamentals",
            "Transmission media",
            "Signal encoding",
            "Error detection and correction",
            "Network protocols",
            "OSI model"
        ]
    },

    "Java Programming II": {
        code: "3",
        title: "Java Programming II",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 3,
            total: 7
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Common (Software & Network)",
        description: "Advanced Java programming including GUI development, multithreading, networking, and enterprise frameworks.",
        topics: [
            "Advanced OOP in Java",
            "GUI development (Swing/JavaFX)",
            "Multithreading and concurrency",
            "Network programming",
            "Database connectivity (JDBC)",
            "Java frameworks"
        ]
    },

    "Computer Architecture": {
        code: "4",
        title: "Computer Architecture",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Common (Software & Network)",
        description: "Computer architecture, CPU organization, memory hierarchy, I/O systems, and instruction set architectures.",
        topics: [
            "CPU architecture and design",
            "Instruction set architecture",
            "Memory hierarchy",
            "Cache memory",
            "I/O organization",
            "Performance analysis"
        ]
    },

    "Microprocessor": {
        code: "5",
        title: "Microprocessor",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 1,
            lab: 2,
            total: 5
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Software Development",
        description: "Microprocessor architecture, assembly language programming, and interfacing techniques.",
        topics: [
            "Microprocessor architecture",
            "Assembly language programming",
            "Addressing modes",
            "Interrupts and I/O",
            "Memory interfacing",
            "Peripheral interfacing"
        ]
    },

    "Computer Graphics": {
        code: "6",
        title: "Computer Graphics",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Software Development",
        description: "Fundamentals of computer graphics, 2D/3D transformations, rendering, and graphics programming.",
        topics: [
            "Graphics primitives",
            "2D transformations",
            "3D transformations",
            "Viewing and projection",
            "Rendering algorithms",
            "Graphics APIs (OpenGL/DirectX)"
        ]
    },

    // NETWORK TRACK
    // Total: 16 Credits, 28 Weekly Hours
    
    "CCNA R&S II": {
        code: "1",
        title: "CCNA R&S II",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Network",
        description: "Advanced Cisco CCNA Routing & Switching covering routing protocols, VLANs, and network troubleshooting.",
        topics: [
            "Routing protocols (OSPF, EIGRP)",
            "VLANs and inter-VLAN routing",
            "Spanning Tree Protocol",
            "Network redundancy",
            "WAN technologies",
            "Network troubleshooting"
        ]
    },

    "Network Administration": {
        code: "4",
        title: "Network Administration",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 1,
            lab: 3,
            total: 6
        },
        semester: "1st Semester",
        year: "Third Year",
        track: "Network",
        description: "Network administration, server management, network services, and system monitoring.",
        topics: [
            "Network infrastructure management",
            "DNS and DHCP services",
            "Active Directory",
            "Network monitoring tools",
            "Backup and recovery",
            "Network security basics"
        ]
    },

    // ==================== YEAR 4 COURSES ====================
    
    // SOFTWARE DEVELOPMENT TRACK
    // Total: 16 Credits, 28 Weekly Hours
    
    "CCNA R&S II": {
        code: "1",
        title: "CCNA R&S II",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Software Development",
        description: "Cisco CCNA Routing & Switching certification covering advanced routing, switching, and network design.",
        topics: [
            "Advanced routing protocols",
            "VLANs and trunking",
            "Network design principles",
            "WAN technologies",
            "Network security basics",
            "Troubleshooting methodologies"
        ]
    },

    "Mobile Programming II": {
        code: "2",
        title: "Mobile Programming II",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 3,
            total: 7
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Software Development",
        description: "Advanced mobile application development for iOS and Android, including native and cross-platform frameworks.",
        topics: [
            "Advanced Android development",
            "iOS development with Swift",
            "Cross-platform frameworks (React Native, Flutter)",
            "Mobile app architecture",
            "Mobile UI/UX design",
            "App deployment and monetization"
        ]
    },

    "IoT Architecture & Protocols/IoT Programming": {
        code: "3",
        title: "IoT Architecture & Protocols/IoT Programming",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Common (Software & Network)",
        description: "Internet of Things architecture, protocols, programming, and cloud integration for IoT applications.",
        topics: [
            "IoT architecture and layers",
            "IoT protocols (MQTT, CoAP, HTTP)",
            "Sensor and actuator programming",
            "Cloud platforms for IoT",
            "IoT security",
            "Real-world IoT projects"
        ]
    },

    "Artificial Intelligence": {
        code: "4",
        title: "Artificial Intelligence",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Common (Software & Network)",
        description: "Introduction to artificial intelligence, machine learning, neural networks, and AI applications.",
        topics: [
            "AI fundamentals",
            "Search algorithms",
            "Machine learning basics",
            "Neural networks",
            "Natural language processing",
            "AI applications and ethics"
        ]
    },

    "Windows Programming I": {
        code: "5",
        title: "Windows Programming I",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 2,
            lab: 3,
            total: 7
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Software Development",
        description: "Windows application development using .NET framework, C#, and WPF/WinForms.",
        topics: [
            "C# programming fundamentals",
            ".NET Framework architecture",
            "WPF and WinForms",
            "Event-driven programming",
            "Database integration",
            "Windows desktop applications"
        ]
    },

    "Signal Processing": {
        code: "6",
        title: "Signal Processing",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Software Development",
        description: "Digital signal processing fundamentals, transforms, filtering, and signal analysis.",
        topics: [
            "Signal representation",
            "Fourier transforms",
            "Digital filters",
            "Signal sampling",
            "Frequency analysis",
            "DSP applications"
        ]
    },

    // NETWORK TRACK
    // Total: 16 Credits, 25 Weekly Hours
    
    "CCNA R&S IV": {
        code: "1",
        title: "CCNA R&S IV",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Network",
        description: "Advanced CCNA Routing & Switching covering enterprise networks, automation, and network programmability.",
        topics: [
            "Enterprise network design",
            "Network automation",
            "SDN fundamentals",
            "Network programmability",
            "Advanced troubleshooting",
            "Network optimization"
        ]
    },

    "CCNA Cybersecurity Operations": {
        code: "4",
        title: "CCNA Cybersecurity Operations",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 3,
            total: 5
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Network",
        description: "Cybersecurity operations, threat detection, incident response, and security monitoring.",
        topics: [
            "Cybersecurity fundamentals",
            "Threat intelligence",
            "Security monitoring",
            "Incident response",
            "Network security operations",
            "Security tools and technologies"
        ]
    },

    "Server Administration": {
        code: "5",
        title: "Server Administration",
        credits: 3,
        hours: {
            lecture: 2,
            tutorial: 1,
            lab: 3,
            total: 6
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Network",
        description: "Windows and Linux server administration, virtualization, and enterprise infrastructure management.",
        topics: [
            "Windows Server administration",
            "Linux server management",
            "Active Directory",
            "Virtualization (VMware, Hyper-V)",
            "Server security",
            "Backup and disaster recovery"
        ]
    },

    "Encryption Algorithm": {
        code: "6",
        title: "Encryption Algorithm",
        credits: 2,
        hours: {
            lecture: 2,
            tutorial: 0,
            lab: 0,
            total: 2
        },
        semester: "1st Semester",
        year: "Fourth Year",
        track: "Network",
        description: "Cryptographic algorithms, encryption techniques, digital signatures, and cryptographic protocols.",
        topics: [
            "Symmetric encryption (AES, DES)",
            "Asymmetric encryption (RSA, ECC)",
            "Hash functions",
            "Digital signatures",
            "Public Key Infrastructure (PKI)",
            "Cryptographic protocols"
        ]
    },

    // ==================== ALTERNATIVE COURSE NAMES ====================
    // Year 1 alternatives
    "English": {
        redirect: "Technical English 1"
    },
    
    "Math": {
        redirect: "Mathematics 1"
    },
    
    "Python": {
        redirect: "Programming Essentials in python"
    },
    
    "Cyber Security": {
        redirect: "Intro. to Cyber Security"
    },

    // Year 2 alternatives
    "C++": {
        redirect: "Programming Essentials in C++"
    },
    
    "Web": {
        redirect: "Web Programming I"
    },
    
    "Linux": {
        redirect: "Linux Essentials"
    },
    
    "Database": {
        redirect: "Introduction to DB"
    },
    
    "OS": {
        redirect: "Operating System"
    },

    // Year 3 alternatives
    "Java": {
        redirect: "Java Programming II"
    },
    
    "CCNA": {
        redirect: "CCNA R&S II"
    },
    
    "Graphics": {
        redirect: "Computer Graphics"
    },
    
    "Microprocessors": {
        redirect: "Microprocessor"
    },

    // Year 4 alternatives
    "Mobile Apps": {
        redirect: "Mobile Programming II"
    },
    
    "IoT": {
        redirect: "IoT Architecture & Protocols/IoT Programming"
    },
    
    "AI": {
        redirect: "Artificial Intelligence"
    },
    
    "Windows Programming": {
        redirect: "Windows Programming I"
    },
    
    "Server Admin": {
        redirect: "Server Administration"
    },
    
    "Encryption": {
        redirect: "Encryption Algorithm"
    }
};

/**
 * Get course details by title or code
 * @param {string} courseName - Course title or code
 * @returns {object|null} Course details or null if not found
 */
function getCourseDetails(courseName) {
    if (!courseName) return null;
    
    // Check if course exists directly
    if (coursesDatabase[courseName]) {
        const course = coursesDatabase[courseName];
        
        // Check if it's a redirect
        if (course.redirect) {
            return getCourseDetails(course.redirect);
        }
        
        return course;
    }
    
    // Try case-insensitive search
    const lowerCourseName = courseName.toLowerCase();
    for (const key in coursesDatabase) {
        if (key.toLowerCase() === lowerCourseName) {
            const course = coursesDatabase[key];
            if (course.redirect) {
                return getCourseDetails(course.redirect);
            }
            return course;
        }
    }
    
    // Try partial match (for section names like "IT Section")
    for (const key in coursesDatabase) {
        if (courseName.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(courseName.toLowerCase())) {
            const course = coursesDatabase[key];
            if (course.redirect) {
                return getCourseDetails(course.redirect);
            }
            return course;
        }
    }
    
    return null;
}

/**
 * Format course hours for display
 * @param {object} hours - Hours object with lecture, tutorial, lab
 * @returns {string} Formatted hours string
 */
function formatCourseHours(hours) {
    if (!hours) return 'N/A';
    
    const parts = [];
    if (hours.lecture > 0) parts.push(`${hours.lecture}h Lecture`);
    if (hours.tutorial > 0) parts.push(`${hours.tutorial}h Tutorial`);
    if (hours.lab > 0) parts.push(`${hours.lab}h Lab`);
    
    return parts.join(' + ') || 'N/A';
}
