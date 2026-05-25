const PROJECTS = [
    {
        id: "automay",
        title: "AutoMayTex",
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
            { type: "video", src: "assets/projectsdata/automay/media_02.mov" },
            { type: "video", src: "assets/projectsdata/automay/media_03.mov" }
        ],
        color: "#edeff3"
    }
];
