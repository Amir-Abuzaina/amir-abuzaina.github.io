// ============================================================
//  EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs touching.
//  Media goes in assets/media/  (use .mp4 for loops, .jpg for posters)
// ============================================================

window.SITE = {
  name: "Amir Abuzaina",
  tagline: "Technical artist //Asprining Graphics Programmer",
  links: {
    linkedin: "https://www.linkedin.com/in/amir-abuzaina-53a51a21a/",
    artstation: "https://www.artstation.com/amirabuzaina",
  },
};

// Order here = order on the portfolio page.
// category: used by the filter buttons (any word you like).
// video/poster: paths like "assets/media/plugin.mp4". Leave "" for a placeholder.
window.PROJECTS = [
  {
    id: "workflow-tools-ue5",
    title: "Workflow Tools in UE5",
    summary: "Native C++ editor plugin for cinematics and archviz pipelines, released on Fab.",
    tags: ["UE5", "C++", "Editor Tools"],
    category: "tools",
    year: "2026",
    video: "",
    poster: "",
    highlights: [
      "Started as a Utility Widget Blueprint, rebuilt as a native C++ plugin",
      "Scene forensics: budget auditing for meshes, materials and lights",
      "Mesh/material batch tools and a lighting reference panel",
      "Cinematic toolkit for shot setup",
    ],
    breakdown: [
      { heading: "Problem", body: "REPLACE: what was slow or painful in the workflow." },
      { heading: "Approach", body: "REPLACE: architecture, why C++ over Blueprint, key editor APIs used." },
      { heading: "Result", body: "REPLACE: time saved, numbers, what users do with it." },
    ],
    links: [{ label: "Fab page", url: "" }],
  },
  {
    id: "project-two",
    title: "Project Two",
    summary: "REPLACE: one line on what it is.",
    tags: ["Houdini", "Unreal"],
    category: "3d",
    year: "2025",
    video: "",
    poster: "",
    highlights: ["REPLACE", "REPLACE", "REPLACE"],
    breakdown: [
      { heading: "Problem", body: "REPLACE" },
      { heading: "Approach", body: "REPLACE" },
      { heading: "Result", body: "REPLACE" },
    ],
    links: [],
  },
  {
    id: "project-three",
    title: "Project Three",
    summary: "REPLACE: one line on what it is.",
    tags: ["Archviz", "Lighting"],
    category: "3d",
    year: "2024",
    video: "",
    poster: "",
    highlights: ["REPLACE", "REPLACE", "REPLACE"],
    breakdown: [
      { heading: "Problem", body: "REPLACE" },
      { heading: "Approach", body: "REPLACE" },
      { heading: "Result", body: "REPLACE" },
    ],
    links: [],
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
