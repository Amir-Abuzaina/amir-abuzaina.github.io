// ============================================================
//  EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs touching.
//  Media goes in assets/media/  (use .mp4 for loops, .jpg for posters)
// ============================================================

window.SITE = {
  name: "Amir Abuzaina",
  tagline: "technical artist // rendering + tools",
  links: {
    linkedin: "https://www.linkedin.com/in/REPLACE",
    artstation: "https://www.artstation.com/amirabuzaina",
  },
};

// Order here = order on the portfolio page.
// category: used by the filter buttons (any word you like).
// video/poster: paths like "assets/media/plugin.mp4". Leave "" for a placeholder.
window.PROJECTS = [
  {
    id: "procedural-pom",
    title: "Performant Procedural Parallax Occlusion Interior Mapping",
    summary: "Atlas-driven POM interiors across thousands of instances in a single draw call.",
    tags: ["UE5", "Shaders", "Tech Art"],
    category: "tech art",
    year: "2025",
    video: "",
    poster: "https://cdnb.artstation.com/p/assets/images/images/099/542/893/large/amir-abuzaina-highresscreenshot00003.webp",
    highlights: [
      "Remapped ParallaxOcclusionMapping to sample regions of a texture atlas",
      "Per-instance variation via Custom Primitive Data, similar to City Sample",
      "Utility Widget packs parameters into bitfields, unpacked in the shader",
      "Works with HISM/ISM without breaking the draw call batch",
    ],
    breakdown: [
      { heading: "Approach", body: "I developed a high-performance POM system designed to handle large environmental variety within a single draw call. By remapping the standard ParallaxOcclusionMapping within the w_Parallax function to sample specific regions of an atlas, I'm able to drive unique surface detail across thousands of instances." },
      { heading: "Scalability", body: "To keep the system scalable, I used Custom Primitive Data (CPD) to handle variations, similar to City Sample. I created a custom Utility Widget to pack multiple parameters into single bitfields, which are then unpacked in the shader based on specific bit indices and counts. This allows for variation using HISM/ISM without breaking the draw call batch." },
      { heading: "Limitations", body: "The approach could be improved by using texture arrays for the atlases. It also requires high atlas sizes, around 60 MB for 1k resolution with 8 packed textures." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/oJEyYm" }],
  },
  {
    id: "workflow-tools-ue5",
    title: "Workflow Tools in UE5",
    summary: "Native C++ editor plugin for cinematics and archviz pipelines, released on Fab.",
    tags: ["UE5", "C++", "Editor Tools"],
    category: "tools",
    year: "2025",
    video: "",
    poster: "https://cdna.artstation.com/p/assets/images/images/099/934/274/large/amir-abuzaina-mainthumbnail.webp",
    highlights: [
      "Started as a Utility Widget Blueprint, ported to a native C++ plugin",
      "Material Whiteboard: bulk-edit parameters across many materials",
      "Scene forensics and budget auditing, PBL lighting reference panel",
      "Cinematic toolkit with render presets and composition guides",
    ],
    breakdown: [
      { heading: "Origin", body: "I originally built this tool as a Utility Widget Blueprint to streamline repetitive 3D art tasks: auto UV projection, LOD generation and batch mesh operations." },
      { heading: "C++ plugin", body: "I then ported and extended it into a native C++ Unreal Engine plugin, expanding it into a full workflow panel. The base covers core mesh operations and a material Whiteboard that lets artists bulk edit parameters across multiple materials without opening individual material windows." },
      { heading: "Extended toolset", body: "The extended version adds scene forensics and budget auditing, a PBL lighting reference panel, a cinematic toolkit with rendering presets and composition guides, and a texture and material pipeline toolset. Many tools are tailored for cinematics/archviz workflows and simplify optimization readings." },
    ],
    links: [
      { label: "Fab", url: "https://fab.com/s/377c898ceeb2" },
      { label: "ArtStation", url: "https://www.artstation.com/artwork/0lKXXV" },
    ],
  },
  {
    id: "fairuz",
    title: "Fairuz",
    summary: "Custom stylised post-process shader with Substrate materials and a '90s CRT screen.",
    tags: ["UE5", "Post Process", "Substrate", "Substance Designer"],
    category: "tech art",
    year: "2025",
    video: "",
    poster: "https://cdnb.artstation.com/p/assets/video_clips/images/089/518/895/medium/amir-abuzaina-thumb.jpg",
    highlights: [
      "Custom post-process: light/shadow quantization, HSV handling, edge detection",
      "Wall and ceiling materials built in Substance Designer",
      "Custom Substrate materials, incl. a vintage CRT TV screen",
      "Lumen for real-time GI",
    ],
    breakdown: [
      { heading: "Post-process shader", body: "This project began with a custom post-process shader inspired by Visual Tech Art aesthetics, with personalized adjustments to light/shadow quantization, HSV handling and edge detection." },
      { heading: "Materials", body: "Materials for walls and ceiling were developed in Substance Designer for a grounded, deliberately textured look. Custom Substrate materials were created, including a TV screen mimicking vintage '90s CRT displays." },
      { heading: "Scene", body: "I modeled the main house layout; additional props are from FAB and Quixel. The scene uses Lumen for real-time global illumination." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/EzmW80" }],
  },
  {
    id: "dead-walking",
    title: "Dead Walking",
    summary: "One-week challenge: procedural animation, physics hit reactions and PBL lighting.",
    tags: ["UE5", "Procedural Animation", "Lighting"],
    category: "gameplay",
    year: "2025",
    video: "",
    poster: "https://cdnb.artstation.com/p/assets/covers/images/085/541/193/large/amir-abuzaina-cover.jpg",
    highlights: [
      "Custom animation system that procedurally matches poses",
      "Physically simulated hit reactions instead of baked animations",
      "Procedural gun recoil",
      "Physically based lighting, red accents to guide the player's eye",
    ],
    breakdown: [
      { heading: "Animation", body: "I created my own animation system that procedurally matches poses, aiming for grounded character movement similar to Dead Space and The Evil Within. Hit reactions are physically simulated rather than baked, and procedural animation also drives the gun's recoil." },
      { heading: "Lighting & layout", body: "Physically based lighting scene, mixing soft bland lights with bright red to guide the player's eye. I built a different level layout from the original scene to create an illusion of freedom. 3D models are from the Unreal Marketplace." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/BkO6P9" }],
  },
  {
    id: "gloria",
    title: "Gloria",
    summary: "Short cinematic on physical cameras and physically based lighting, with MetaHuman mocap.",
    tags: ["UE5", "Path Tracing", "Lumen", "MetaHuman"],
    category: "lighting",
    year: "2025",
    video: "",
    poster: "https://cdnb.artstation.com/p/assets/images/images/090/105/231/large/amir-abuzaina-ls-maintest-0919.jpg",
    highlights: [
      "Physical cameras and physically based lighting",
      "MetaHuman with built-in motion capture",
      "Half path traced, half Lumen",
    ],
    breakdown: [
      { heading: "Overview", body: "Part of a short cinematic focused on physical cameras and physically based lighting. I also experimented with the new MetaHuman and built-in motion capture features. Half path traced, half Lumen. Assets are from FAB." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/rlLQ4O" }],
  },
  {
    id: "crows-of-surrender",
    title: "Crows of Surrender",
    summary: "Lumen lighting render with physical cameras and correct PBR ranges.",
    tags: ["UE5", "Lumen", "Lighting"],
    category: "lighting",
    year: "2026",
    video: "assets/media/crows-of-surrender.mp4",
    poster: "assets/media/crows-of-surrender.jpg",
    fit: "contain", // vertical video: show whole frame instead of cropping to 16:9
    highlights: ["Physically based lighting values", "Physical cameras", "Correct PBR ranges"],
    breakdown: [
      { heading: "Overview", body: "Lumen lighting render in Unreal Engine 5, using physically based lighting values with physical cameras and correct PBR ranges." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/La55D0" }],
  },
  {
    id: "lighting-doodles",
    title: "Lighting Doodles",
    summary: "Collection of real-time Lumen lighting studies.",
    tags: ["UE5", "Lumen", "Lighting"],
    category: "lighting",
    year: "2026",
    video: "",
    poster: "https://cdnb.artstation.com/p/assets/images/images/100/011/109/large/amir-abuzaina-asset.webp",
    highlights: ["Real-time rendering with Lumen", "REPLACE", "REPLACE"],
    breakdown: [{ heading: "Overview", body: "Lumen real-time rendering collection of works in Unreal Engine 5." }],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/dLJOyW" }],
  },
  {
    id: "cottage",
    title: "Cottage",
    summary: "Light study: volumetric god rays and left/right contrast, kept photoreal.",
    tags: ["UE5", "Lighting", "Megascans"],
    category: "lighting",
    year: "2024",
    video: "",
    poster: "https://cdna.artstation.com/p/assets/images/images/082/319/558/large/amir-abuzaina-ls-foster2-000222.jpg",
    highlights: [
      "Spot and point lights to shape god rays through volumetric fog",
      "Contrast between left and right sides of the scene",
      "Edited Megascan material instances, customised model",
    ],
    breakdown: [
      { heading: "Overview", body: "Light study and environment set up in Unreal Engine 5. I used Megascan materials with edits on the material instances and customised the model to fit the look. Spot and point lights highlight the god rays through the volumetric fog, creating contrast between the left and right of the scene: a niche lighting scenario, dramatized slightly while keeping photorealism." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/dyQmdA" }],
  },
  {
    id: "polaric-solitude",
    title: "Polaric Solitude",
    summary: "Cinematic light study and environment in UE5 with tuned water scattering.",
    tags: ["UE5", "Lighting", "Environment"],
    category: "lighting",
    year: "2024",
    video: "",
    poster: "https://cdna.artstation.com/p/assets/videos/images/079/616/258/large/amir-abuzaina-hqdefault.jpg",
    highlights: ["Cinematic light study", "Tweaked light scattering on the water simulation"],
    breakdown: [
      { heading: "Overview", body: "A cinematic showcasing a light study and environment in Unreal Engine 5. The water simulation workflow is by DeathreyCG; I tweaked the light scattering and other attributes." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/mAzzQ1" }],
  },
  {
    id: "sirens",
    title: "Sirens",
    summary: "Solo game prototype inspired by Little Nightmares, with a Gerstner-wave ocean shader.",
    tags: ["UE", "Blueprints", "Shaders", "University"],
    category: "gameplay",
    year: "2022",
    video: "",
    poster: "https://cdna.artstation.com/p/assets/covers/images/051/037/648/large/arkadukex-arkadukex-highresscreenshot00004.jpg",
    highlights: [
      "Inventory, interaction and puzzle systems in Blueprints",
      "Ocean shader based on the Gerstner wave model",
      "Solo university project",
    ],
    breakdown: [
      { heading: "Overview", body: "A solo game prototype inspired by Little Nightmares. Mechanics (inventory, interactions, puzzles) were built with Unreal's visual scripting, and I developed an ocean shader based on the Gerstner wave model in the shader graph." },
    ],
    links: [{ label: "ArtStation", url: "https://www.artstation.com/artwork/OmZRKg" }],
  },
];

window.EXPERIENCE = [
  {
    role: "Technical Artist",
    company: "REPLACE (archviz studio)",
    location: "London",
    period: "20XX – present",
    points: ["REPLACE", "REPLACE", "REPLACE"],
  },
  {
    role: "REPLACE",
    company: "REPLACE (game studio)",
    location: "REPLACE",
    period: "20XX – 20XX",
    points: ["REPLACE", "REPLACE"],
  },
];
