 const PROJECTS = [
    {
        id: "automay",
        title: "Maya Auto Texturer",
        subtitle: "AI Texturing Plug-in for Maya",
        year: "2026",
        tags: ["Python", "Maya API", "PySide6", "FastAPI", "SDXL", "PyTorch"],
        desc: "Automated diffusion texturing pipeline inside Maya. Captures multi-angle tetrahedral mesh renders, processes them via a local FastAPI server running SDXL ControlNet, and auto-wires Arnold/MaterialX PBR shading networks.",
        outcome: "Fully offline texturing pipeline running on a single consumer GPU, with no cloud dependency. Acquired working knowledge of CUDA optimization, model quantization, and efficient VRAM management.",
        fullDesc: `<p>Integrated via Maya Plugin an automated diffusion texturing pipeline. The tool captures multi-angle tetrahedral mesh renders (depth/normals), packs them into 2x2 collages, and processes them via a local FastAPI server running SDXL ControlNet.</p><p>Orchestrated via a PySide6 GUI, it isolates the heavy deep-learning runtime in a dedicated Python venv to prevent conflicts with Maya's interpreter, automatically handles UV planar re-projection, and dynamically generates and wires Arnold/MaterialX PBR shading networks directly onto the viewport geometry.</p>`,
        github: "https://github.com/danicasjau/automaytex",
        media: [
            { type: "video", src: "assets/projectsdata/automay/media_01.mov" },
            { type: "image", src: "assets/projectsdata/automay/image_01.png" },
            { type: "image", src: "assets/projectsdata/automay/image_02.png" },
            { type: "image", src: "assets/projectsdata/automay/image_03.png" },
            { type: "image", src: "assets/projectsdata/automay/image_04.png" },
            { type: "image", src: "assets/projectsdata/automay/diffuse.png" },
            { type: "image", src: "assets/projectsdata/automay/fastMultipleExample.png" },
            { type: "image", src: "assets/projectsdata/automay/piplinePlan.png", format: "large" },
            { type: "video", src: "assets/projectsdata/automay/media_02.mov" },
            { type: "video", src: "assets/projectsdata/automay/media_03.mov" }
        ],
        color: "#edeff3"
    },
    {
        id: "usd-pipeline-lead",
        title: "USD Pipeline Lead",
        subtitle: "ENCORE Shortfilm Production - Prism Integration",
        year: "2025",
        tags: ["Python", "Pixar USD", "Prism Pipeline", "Houdini", "Maya"],
        desc: "Developed a custom Python integration to seamlessly embed Pixar USD asset variants and references into the Prism Pipeline architecture for a student film production.",
        outcome: "Successfully deployed as the core pipeline framework for the ENCORE shortfilm, connecting Houdini and Maya workflows across all production departments for a team of 16 students.",
        fullDesc: `<p>Spearheaded the pipeline engineering for the ENCORE shortfilm production by writing custom Python integrations. The primary technical objective was embedding Pixar USD (Universal Scene Description) asset variants and referencing workflows directly into the Prism Pipeline base code.</p><p>This architecture unified the studio environment, allowing seamless, non-destructive asset handoffs between SideFX Houdini and Autodesk Maya. It successfully eliminated technical friction across all creative departments, supporting a collaborative team of 16 artists.</p>`,
        github: "https://github.com/danicasjau/tloudPipeline",
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
        id: "project-minivita",
        title: "Project Minivita",
        subtitle: "Interactive AI Character Framework",
        year: "2025",
        tags: ["Python", "SMPL-X", "LLM", "Motion Diffusion", "Asyncio"],
        desc: "Real-time human motion generation framework implementing an asynchronous 96-frame chunk execution path for low-latency digital human interactions.",
        outcome: "Achieved fluid, autonomous digital character interactions by successfully bridging generative motion models, long-term character memory, and LLM reasoning steps.",
        fullDesc: `<p>Engineered an interactive digital human framework centered around real-time motion generation using the SMPL-X parametric human body model. The technical backbone relies on an asynchronous 96-frame chunk execution architecture, drastically minimizing latency gaps between generation and playback.</p><p>The framework merges three complex layers: motion diffusion pipelines for realistic body language, an LLM processing core for conversational intelligence, and a persistent memory database to give the character context awareness during live interactions.</p>`,
        github: "https://github.com/danicasjau/project-minivita",
        media: [
            { type: "image", src: "assets/projectsdata/minivita/back.png" },
            { type: "video", src: "assets/projectsdata/minivita/videoProcessMinivita.mp4" },
            { type: "video", src: "assets/projectsdata/minivita/main02.mp4" }
        ],
        color: "#fee2e2"
    },
    {
        id: "procedural-nature-hda",
        title: "Houdini Procedural Organic Nature HDA",
        subtitle: "Procedural Asset Generator",
        year: "2026",
        tags: ["Houdini", "VEX", "HDA", "Procedural Modeling"],
        desc: "A custom SideFX Houdini Digital Asset designed for generating complex, organic nature elements using fully procedural rule-based algorithms.",
        outcome: "Streamlined environmental asset generation with an intuitive HDA interface with integrated visual feedback captures.",
        fullDesc: `<p>Developed a custom Houdini Digital Asset (HDA) focused on the generation of organic natural elements. Utilizing VEX and procedural node networks, the system creates highly customizable botanical structures with visual preview mechanics built right into the project files.</p>`,
        github: "https://github.com/danicasjau/website",
        media: [
            { type: "video", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_video.mp4" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_001.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_002.png" },
            { type: "image", src: "assets/projectsdata/had/ModII_daniel.casadevall_EX02_viewport_003.png" }
        ],
        color: "#f1f5f9"
    },
    {
        id: "cels-evolution-simulation",
        title: "Natural Selection Cels Evolution Simulation",
        subtitle: "Biological System Simulator",
        year: "2026",
        tags: ["Simulation", "Evolutionary Algorithms", "Biological Systems"],
        desc: "An evolution simulation modeling cellular growth, mutations, and natural selection behaviors over successive generations.",
        outcome: "Visualized behavioral patterns and generational survival rules inside a custom environment loop.",
        fullDesc: `<p>An algorithmic project centered on simulating cellular evolution and natural selection mechanics. Tracks cellular entities as they interact, pass down traits, mutate, and adapt to competitive environments over runtime cycles.</p>`,
        youtube: "https://youtu.be/w0fMNQVMHpk?is=vOSOCQAfdMBBuXpZ",
        media: [
            { type: "video", src: "assets/projectsdata/cels/secuencia_01_vimeo.mp4_v3 (720p).mp4" }
        ],
        color: "#f8fafc"
    }
];
