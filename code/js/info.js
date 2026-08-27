const PROJECTS = [
    {
        id: "project-minivita",
        title: "MINI-HUMAN MODEL",
        subtitle: "Living Interactive LLM Character Framework",
        year: "2025 - University Project",
        tags: ["Python", "SMPL-X", "LLM", "Motion Diffusion", "Asyncio"],
        desc: "Real-time <bl> multymodal human representation </bl> system integrating an interactive <bl> SMPL-X motion diffusion </bl> framework with an embeded vector database for dynamic character memory and centralized <bl> LLM </bl> execution. Optimized to run efficiently within consumer GPU limits. Rendered via<bl> PySide OpenGL </bl> viewport and <bl> USD-based </bl> geometry pipeline. ",
        outcome: "Achieved fluid, autonomous digital character interactions by successfully bridging generative motion models, long-term character memory, and LLM reasoning steps.",
        fullDesc: `<p>Engineered an interactive digital human framework centered around real-time motion generation using the SMPL-X parametric human body model. The technical backbone relies on an asynchronous <bl> 96-frame </bl> chunk execution architecture, drastically minimizing latency gaps between generation and playback.</p><p>The framework merges three complex layers: motion diffusion pipelines for realistic body language, an LLM processing core for conversational intelligence, and a persistent memory database to give the character context awareness during live interactions.</p>`,
        github: "https://github.com/danicasjau/minivita",
        media: [
            { type: "image", src: "assets/projectsdata/minivita/back.png" },
            { type: "image", src: "assets/projectsdata/minivita/0001.png" },
            { type: "video", src: "assets/projectsdata/minivita/videoProcessMinivita.mp4" },
            { type: "video", src: "assets/projectsdata/minivita/mian02.mp4" }
        ],
        color: "#fee2e2"
    },
    {
        id: "automay",
        title: "Maya Auto Texturer",
        subtitle: "AI Texturing Plug-in for Maya",
        year: "2026 - University Project",
        tags: ["Python", "Maya API", "PySide6", "FastAPI", "SDXL", "PyTorch"],
        desc: "<bl> Automated </bl> diffusion texturing pipeline using <bl> Maya API </bl> running on a consumer GPU. Capturing multi-angle tetrahedral renders, and processing them via a local <bl> FastAPI </bl> server running <bl> SDXL ControlNet</bl> . Orchestrated via a <bl>PySide6</bl> GUI, it isolates the heavy runtime in a dedicated Python venv.",
        outcome: "Fully offline texturing pipeline running on a single consumer GPU, with no cloud dependency. Acquired working knowledge of CUDA optimization, model quantization, and efficient VRAM management.",
        fullDesc: `<p>Integrated via Maya Plugin an automated diffusion texturing pipeline. The tool captures multi-angle tetrahedral mesh renders (depth/normals), packs them into 2x2 collages, and processes them via a local FastAPI server running SDXL ControlNet.</p><p>Orchestrated via a PySide6 GUI, it isolates the heavy deep-learning runtime in a dedicated Python venv to prevent conflicts with Maya's interpreter, automatically handles UV planar re-projection, and dynamically generates and wires Arnold/MaterialX PBR shading networks directly onto the viewport geometry.</p>`,
        github: "https://github.com/danicasjau/automaytex",
        media: [
            { type: "video", src: "assets/projectsdata/automay/media_01.mov" },
            { type: "video", src: "assets/projectsdata/automay/example02.mov" },
            { type: "image", src: "assets/projectsdata/automay/image_02.png" },
            { type: "image", src: "assets/projectsdata/automay/fastMultipleExample.png" },
            { type: "image", src: "assets/projectsdata/automay/piplinePlan.png", format: "large" }
        ],
        color: "#edeff3"
    },
    {
        id: "usd-pipeline-lead",
        title: "Animation USD Pipeline",
        subtitle: "ENCORE Shortfilm Production - Prism Integration",
        year: "2025 - TFG Project",
        tags: ["Python", "Pixar USD", "Prism Pipeline", "Houdini", "Maya"],
        desc: "Developed custom <bl>Python</bl> integration to embed <bl>Pixar USD</bl> asset variants and references seamlessly into the <bl>Prism Pipeline</bl> architecture. Deployed as the core pipeline for ENCORE (shortfilm, in production), connecting Houdini and Maya using Prism base code across all departments for a team of ~16 students.",
        outcome: "Successfully deployed as the core pipeline framework for the ENCORE shortfilm, connecting Houdini and Maya workflows across all production departments for a team of 16 students.",
        fullDesc: `<p>Spearheaded the pipeline engineering for the ENCORE shortfilm production by writing custom Python integrations. The primary technical objective was embedding Pixar USD (Universal Scene Description) asset variants and referencing workflows directly into the Prism Pipeline base code.</p><p>This architecture unified the studio environment, allowing seamless, non-destructive asset handoffs between SideFX Houdini and Autodesk Maya. It successfully eliminated technical friction across all creative departments, supporting a collaborative team of 16 artists.</p>`,
        github: "https://github.com/danicasjau/tloudPipelinePrism",
        media: [
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(5).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(9).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(14).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(15).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(16).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(22).png" },
            { type: "image", src: "assets/projectsdata/loudpipline/iamge(23).png" },
            { type: "video", src: "assets/projectsdata/loudpipline/rec05.mp4" },
            { type: "video", src: "assets/projectsdata/loudpipline/rec06.mp4" }
        ],
        color: "#cbd5e1"
    },
    {
        id: "project-tlmanager",
        title: "STUDIO TASK MANAGER",
        subtitle: "Task Manager Application for production team",
        year: "2026 - TFG Project",
        tags: ["Python", "Google Sheets API", "HTML5", "CSS3", "JavaScript"],
        desc: "Custom production <bl>task tracking suite</bl> connecting Google Sheets backend with Web UI.",
        outcome: "Streamlined multi-department task management and submission tracking for the ENCORE shortfilm production team.",
        learnings: "Designed lightweight <bl>real-time production tracking</bl> tools using Google Sheets API & Python back-end for seamless task assignment across artist teams.",
        fullDesc: `<p>Engineered a dedicated studio management tool designed to coordinate shot assignments, asset status, and review deadlines across production departments.</p><p>Features automated <bl>Google Sheets API synchronization</bl>, real-time status dashboards, and lightweight web interfaces to keep technical directors and artists aligned on milestone deliverables.</p>`,
        github: "https://github.com/danicasjau/tlmanager",
        media: [
            { type: "video", src: "assets/projectsdata/tlmanager/tlmanager.mp4" },
            { type: "image", src: "assets/projectsdata/tlmanager/capture01.png" },
            { type: "image", src: "assets/projectsdata/tlmanager/capture02.png" },
            { type: "image", src: "assets/projectsdata/tlmanager/capture03.png" }
        ],
        color: "#fee2e2"
    },
    {
        id: "procedural-nature-hda",
        title: "Procedural Organic Nature HDA",
        subtitle: "Procedural Asset Generator",
        year: "2026 - University Project",
        tags: ["Houdini", "VEX", "HDA", "Procedural Modeling"],
        desc: "Custom Houdini Digital Assets (HDAs) for <bl>procedural</bl> generation of urban architecture and complex <bl>plant geometry</bl>. Focused on building scalable team-node networks and exposed parameters tailored for layout artist integration.",
        outcome: "Streamlined environmental asset generation with an intuitive HDA interface with integrated visual feedback captures.",
        fullDesc: `<p>Developed a custom Houdini Digital Asset (HDA) focused on the generation of organic natural elements. Utilizing VEX and procedural node networks, the system creates highly customizable botanical structures with visual preview mechanics built right into the project files.</p>`,
        media: [
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_001.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_002.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_003.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_network_004.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_network_005.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX04_screenshot_003.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX04_screenshot_006.png" }
        ],
        color: "#f1f5f9"
    },
    {
        id: "cels-evolution-simulation",
        title: "Simulating Evolution",
        subtitle: "Natural Selection Cels Evolution Simulation",
        year: "2021 - High School TR Project",
        tags: ["Simulation", "Evolutionary Algorithms", "Biological Systems"],
        desc: "2D biological simulation framework in Python to calculate <bl>multi-agent</bl> cell adaptation and behavioral inheritance across thousands of generations. Designed a <bl>genetic pipeline</bl> that compiled serialized<bl> 28-bit binary genomes</bl> directly into modular sensory- input and motor - output execution loops. Coded entirely using the <bl>Python</bl> standard library.",
        outcome: "Visualized behavioral patterns and generational survival rules inside a custom environment loop.",
        fullDesc: `<p>An algorithmic project centered on simulating cellular evolution and natural selection mechanics. Tracks cellular entities as they interact, pass down traits, mutate, and adapt to competitive environments over runtime cycles.</p>`,
        github: "https://youtu.be/w0fMNQVMHpk?is=vOSOCQAfdMBBuXpZ",
        youtube: "https://youtu.be/w0fMNQVMHpk?is=vOSOCQAfdMBBuXpZ",
        media: [
            { type: "video", src: "assets/projectsdata/cels/sequencia01.mp4" },
            { type: "image", src: "assets/projectsdata/cels/(1).png" },
            { type: "image", src: "assets/projectsdata/cels/(2).png" },
            { type: "image", src: "assets/projectsdata/cels/(3).png" },
            { type: "image", src: "assets/projectsdata/cels/(4).png" },
            { type: "image", src: "assets/projectsdata/cels/(5).png" },
            { type: "image", src: "assets/projectsdata/cels/(6).png" },
            { type: "image", src: "assets/projectsdata/cels/(7).png" },
            { type: "image", src: "assets/projectsdata/cels/(8).png" }
        ],
        color: "#f8fafc"
    }
];
