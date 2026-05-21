const PROJECTS = [
    {
        id: "usd",
        title: "USD Production Pipeline",
        subtitle: "Prism Integration",
        year: "2025–2026",
        tags: ["Python", "Pixar USD", "Prism", "Git"],
        desc: "Custom Python integration hooks to embed Pixar USD asset variants and references seamlessly into the Prism Pipeline architecture. Automated data translation and layer assembly across multiple DCC environments.",
        outcome: "Deployed as the core pipeline for ENCORE (shortfilm, in production), connecting Houdini and Maya across all departments for a team of ~16 students. Resolved recurring asset handoff failures and cross-DCC communication breakdowns.",
        fullDesc: `<p>Developed custom Python integration hooks to embed Pixar USD asset variants and references seamlessly into the Prism Pipeline architecture. Automated data translation and layer assembly across multiple DCC environments, minimizing asset composition errors and streamlining studio data flow.</p><p>Deployed as the core pipeline for ENCORE (shortfilm, in production), connecting Houdini and Maya across all departments for a team of ~16 students. Resolved recurring asset handoff failures and cross-DCC communication breakdowns that were blocking production progress.</p>`,
        github: "https://github.com/danicasjau",
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3"
    },
    {
        id: "automay",
        title: "AutoMayTex",
        subtitle: "AI Texturing Plug-in for Maya",
        year: "2026",
        tags: ["Python", "Maya API", "PySide6", "FastAPI", "SDXL", "PyTorch"],
        desc: "Automated diffusion texturing pipeline inside Maya. Captures multi-angle tetrahedral mesh renders, processes them via a local FastAPI server running SDXL ControlNet, and auto-wires Arnold/MaterialX PBR shading networks.",
        outcome: "Fully offline texturing pipeline running on a single consumer GPU, with no cloud dependency. Acquired working knowledge of CUDA optimization, model quantization, and efficient VRAM management.",
        fullDesc: `<p>Engineered an automated diffusion texturing pipeline within Maya. The tool captures multi-angle tetrahedral mesh renders (depth/normals), packs them into 2x2 collages, and processes them via a local FastAPI server running SDXL ControlNet.</p><p>Orchestrated via a PySide6 GUI, it isolates the heavy deep-learning runtime in a dedicated Python venv to prevent conflicts with Maya's interpreter, automatically handles UV planar re-projection, and dynamically generates and wires Arnold/MaterialX PBR shading networks directly onto the viewport geometry.</p>`,
        github: "https://github.com/danicasjau",
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3"
    },
    {
        id: "minivita",
        title: "Project Minivita",
        subtitle: "Interactive AI Character Framework",
        year: "2025",
        tags: ["Python", "SMPL-X", "CUDA", "Real-time"],
        desc: "Real-time human motion generation system using the SMPL-X framework. Implemented an asynchronous 96-frame chunking execution path for low-latency autonomous digital character interactions.",
        outcome: "Multi-model local inference stack combining motion diffusion, character memory, and LLM processing — optimized end-to-end to run in real-time on consumer GPUs.",
        fullDesc: `<p>Developed a real-time human motion generation system utilizing the SMPL-X framework. Optimized GPU performance and pipeline efficiency by implementing an asynchronous 96-frame chunking execution path, enabling low-latency, autonomous digital character interactions.</p><p>Architected a multi-model local inference stack combining motion diffusion, character memory, and LLM processing — optimized end-to-end to run in real-time on consumer GPUs.</p>`,
        github: "https://github.com/danicasjau",
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3"
    },
    {
        id: "hda",
        title: "Procedural Generation Engine",
        subtitle: "Houdini Digital Assets",
        year: "2025",
        tags: ["VEX", "Python", "Houdini"],
        desc: "Custom Houdini Digital Assets for procedural generation of urban architecture and complex plant geometry. Scalable team-node networks with exposed parameters for layout artist integration.",
        outcome: "Reusable HDA library deployable across multiple productions, with artist-friendly parameters reducing technical overhead for the layout department.",
        fullDesc: `<p>Designed and implemented custom Houdini Digital Assets (HDAs) for procedural generation of urban architecture and complex plant geometry. Focused on building scalable team-node networks and exposed parameters tailored for layout artist integration.</p>`,
        github: "https://github.com/danicasjau",
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3"
    },
    {
        id: "2loud",
        title: "2LOUD Studio Manager",
        subtitle: "Production Management Web App",
        year: "2026",
        tags: ["Python", "SQL", "JavaScript", "Async"],
        desc: "Web-based asset and task management platform for team production workflows. Asynchronous backend with shot tracking, dynamic task assignments, and multi-user progress monitoring.",
        outcome: "Built for a 16-person production team on ENCORE, integrating Discord, Prism, and Google Sheets alongside the custom platform.",
        fullDesc: `<p>Built a web-based asset and task management platform for team production workflows. Developed an asynchronous backend using Python and a robust SQL-driven backend to handle shot tracking, dynamic task assignments, and multi-user progress monitoring.</p><p>Built for a 16-person production team on ENCORE, integrating Discord, Prism, and Google Sheets alongside the custom platform.</p>`,
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3",
        links: [
            { label: "Live Demo", url: "https://2loud.example.com" },
            { label: "Documentation", url: "https://docs.2loud.example.com"},
            {github: "https://github.com/danicasjau"},
        ]
    },
    {
        id: "cells",
        title: "Evolutive Cells",
        subtitle: "Neural Behavior Simulation",
        year: "2022",
        tags: ["Python", "Neural Nets", "Simulation"],
        desc: "Standalone Python simulation exploring neural behavior and adaptive systems. Autonomous cells of 32 digital neurons capable of environment traversal and survival optimization through evolutionary algorithms.",
        outcome: "A ground-up implementation of neural models and evolutionary algorithms — built to understand the fundamentals of AI systems from first principles.",
        fullDesc: `<p>Programmed a standalone Python simulation exploring neural behavior and adaptive systems. Created autonomous cells of 32 digital neurons with connections that are capable of environment traversal and survival optimization through custom evolutionary algorithms, showcasing strong fundamentals in complex mathematical logic.</p>`,
        github: "https://github.com/danicasjau",
        media: [
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" },
            { type: "image", src: "" },
            { type: "image", src: "" },
            { type: "video", src: "" }
        ],
        color: "#edeff3"
    }
];
