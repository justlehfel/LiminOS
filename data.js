// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
// ==========================================

const GlobalMetrics = [
    {
        category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400",
        data: {
            "Frontrooms Time Dilation": "1:1.0 (Baseline)",
            "Local Time Flow Rate": "Standard Linear",
            "Temporal Loop Probability": "0.00%",
            "Entropy Gradient": "Normal"
        }
    },
    {
        category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400",
        data: {
            "Hume Level (Reality)": "100.0 H",
            "Euclidean Consistency": "99.9%",
            "Spatial Dilation Factor": "1:1",
            "Non-linear Corridors": "0%"
        }
    },
    {
        category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400",
        data: {
            "Ambient Temp (Core)": "20.0 °C",
            "Relative Humidity": "40-60%",
            "Air Comp: O2": "20.9%",
            "Breathability Index": "100%"
        }
    },
    {
        category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400",
        data: {
            "Base Threat Level": "0",
            "Sanity Drain Rate": "0%",
            "Rescue Probability": "High"
        }
    }
];

const GlobalEntityMetrics = [
    {
        category: "Biological & Anatomical Makeup", icon: "ph-dna", color: "text-green-400",
        data: { "Cellular Structure": "Unknown", "Estimated Lifespan": "Infinite" }
    },
    {
        category: "Behavioral & Aggression Matrix", icon: "ph-brain", color: "text-red-400",
        data: { "Hostility Baseline": "Docile", "Cognitohazard Output": "0%" }
    }
];

const LiminOSClassifications = {
    general: [
        { class: "Class 0", name: "Habitable", color: "bg-green-500", desc: "Safe, secure, devoid of entities." },
        { class: "Class 1", name: "Safe", color: "bg-green-400", desc: "Safe, secure, minimal entity count." },
        { class: "Class 2", name: "Unsafe", color: "bg-yellow-400", desc: "Unsafe, unsecure, low entity count." },
        { class: "Class 3", name: "Hazardous", color: "bg-orange-500", desc: "Unsafe, moderate entity count." },
        { class: "Class 4", name: "Dangerous", color: "bg-red-500", desc: "Unsafe, high entity count. Immediate danger." },
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Entity infestation. Survival is nearly impossible." }
    ],
    special: [], tags: []
};

// ==========================================
// DATA STRUCTURE: LEVELS & ENTITIES
// ==========================================
const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level",
            id: "level0",
            title: "Level 0",
            name: "The Lobby",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015,
                pois: [
                    { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" },
                    { name: "Fragile Wall (To Level 1)", color: "#ef4444", icon: "🔨" },
                    { name: "Topological Loop", color: "#a8a29e", icon: "♾" }
                ]
            },
            specificMetrics: {
                "Level 0 Specific (Proprietary)": { "Psychological Pressure": "High", "Euclidean Consistency": "14.2%" }
            },
            lore: `<h3>Description</h3><p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0.</p>`,
            survivalGuide: `<p>Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless.</p>`,
            history: `<p>Initial Archival Image Captured MAY 12, 2019.</p>`,
            resonanceScan: `<button id="btn-run-scan">RUN SCAN</button><div id="scan-terminal"></div>`
        },
        "level1": {
            type: "level",
            id: "level1",
            title: "Level 1",
            name: "Habitable Zone",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "M.E.G. SECURED", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTAgMEwxMCAxME0xMCAwTDAgMTAiIHN0cm9rZT0iIzU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            
            mapConfig: {
                seed: 129481, wallDensity: 0.30, gridSize: 10, poiChance: 0.05,
                surfaceAreas: [
                    { x: -50, y: -50, w: 100, h: 100, color: "rgba(34, 197, 94, 0.05)", tag: "M.E.G. Alpha Base", textColor: "#22c55e", z: 0 },
                    { x: 200, y: 150, w: 80, h: 60, color: "rgba(239, 68, 68, 0.1)", tag: "Entity Migration Zone", textColor: "#ef4444", z: 0 }
                ],
                pois: [
                    { name: "Supply Crate", color: "#8b5cf6", icon: "📦" },
                    { name: "Flickering Light Node", color: "#fef08a", icon: "💡" },
                    { name: "Concrete Stairwell (To Lvl 2)", color: "#9ca3af", icon: "⬇" }
                ]
            },
            specificMetrics: {
                "Level 1 Specific (Proprietary)": {
                    "Concrete Density": "3000 kg/m³",
                    "Light Fluctuation Cycle": "Irregular (Darkness events)",
                    "Resource Respawn": "Active (Supply Crates)",
                    "M.E.G. Presence": "High"
                }
            },
            lore: `
                <h3>Description</h3>
                <p>Level 1 is a massive, sprawling warehouse that features concrete floors and walls, exposed rebar, and low-hanging fog hovering close to the floor. Unlike Level 0, this level possesses a consistent supply of water and electricity, allowing for human habitation and the establishment of M.E.G. Base Alpha.</p>
                <p>Crates containing supplies randomly appear and disappear within Level 1. The light fixtures here are prone to failing, plunging sections of the level into total darkness. It is during these periods that entities such as Hounds and Adult Deathmoths spawn.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500">
                    <h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-shield-check"></i> Seek M.E.G. Outposts</h4>
                    <p class="mb-2">Level 1 is highly documented. If you spawn here, follow the painted arrows on the floor. They reliably point toward M.E.G. Base Alpha where you can resupply.</p>
                </div>
            `,
            history: `<p>M.E.G. Base Alpha was established shortly after the group's formation in 2012.</p>`
        },
        "level2": {
            type: "level",
            id: "level2",
            title: "Level 2",
            name: "Pipe Dreams",
            tags: [
                { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "UNSAFE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMWExYTFhIi8+PHBhdGggZD0iTTAgMTBIMjAiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
            
            mapConfig: {
                seed: 99482, wallDensity: 0.85, gridSize: 4, poiChance: 0.02,
                pois: [
                    { name: "Scalding Steam Vent", color: "#ef4444", icon: "♨️" },
                    { name: "Smiler Nest", color: "#fef08a", icon: "☻" },
                    { name: "Unlocked Office Door (To Lvl 4)", color: "#3b82f6", icon: "🚪" }
                ]
            },
            specificMetrics: {
                "Level 2 Specific (Proprietary)": {
                    "Ambient Temp": "43.0 °C (Lethal in areas)",
                    "Pipe Pressure": "Exceeds 40,000 PSI",
                    "Corridor Width": "0.8m - 2.0m",
                    "Entity Density": "Moderate (Smilers, Hounds)"
                }
            },
            lore: `
                <h3>Description</h3>
                <p>Level 2 consists mainly of dark, grey, concrete maintenance tunnels, stretching on for millions of miles. The walls are lined with pipes and occasionally ventilation ducts, which often contain thick black viscous liquid. The temperature in Level 2 is extremely high, often reaching up to 43°C (110°F), capable of boiling wanderers alive if they enter a high-pressure vent zone.</p>
            `
        },
        "level9": {
            type: "level",
            id: "level9",
            title: "Level 9",
            name: "The Suburbs",
            tags: [
                { label: "CLASS 5", class: "bg-red-700/10 text-red-500 border-red-700/30" },
                { label: "LETHAL", class: "bg-red-700/10 text-red-500 border-red-700/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+PHJlY3Qgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBmaWxsPSIjMDUwNTA1Ii8+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiIGZpbGw9IiM1NTUiLz48L3N2Zz4=",
            
            mapConfig: {
                seed: 33211, wallDensity: 0.05, gridSize: 20, poiChance: 0.05,
                minZ: 0, maxZ: 0, // Z-Locked Level!
                surfaceAreas: [
                    { x: -500, y: -20, w: 1000, h: 40, color: "rgba(255, 255, 255, 0.05)", tag: "Asphalt Roadway", z: 0 },
                    { x: -100, y: -100, w: 40, h: 40, color: "rgba(59, 130, 246, 0.1)", tag: "Abandoned House", z: 0 },
                    { x: 100, y: -100, w: 40, h: 40, color: "rgba(59, 130, 246, 0.1)", tag: "Abandoned House", z: 0 }
                ],
                pois: [
                    { name: "Neighborhood Watch Walker", color: "#ef4444", icon: "👁" },
                    { name: "Streetlight (Flickering)", color: "#fef08a", icon: "💡" }
                ]
            },
            specificMetrics: {
                "Level 9 Specific (Proprietary)": {
                    "Z-Axis Depth": "Single Layer (Surface)",
                    "Skybox State": "Eternal Midnight",
                    "Neighborhood Watch Presence": "Lethal",
                    "Topological Structure": "Euclidean (Infinite Neighborhood)"
                }
            },
            lore: `
                <h3>Description</h3>
                <p>Level 9 is an infinite suburban neighborhood at midnight. It is heavily shrouded in fog, restricting vision to just a few feet. The houses are completely empty, though lights sometimes turn on inside them. The streets are patrolled by the Neighborhood Watch, making this level highly lethal.</p>
            `
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "1", title: "Entity 1", name: "The Cameraman",
            traceable: false, // Disables the radar visual
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            lore: `<p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms.</p>`
        },
        "entity3": {
            type: "entity", id: "3", title: "Entity 3", name: "Smilers",
            traceable: true, // Enables the radar visual
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "PHOTOPHOBIC", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgNkM1IDkgOCA2IDggNiIgc3Ryb2tlPSIjZmFjYzE1IiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiIGZpbGw9IiNmYWNjMTUiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMyIgcj0iMSIgZmlsbD0iI2ZhY2MxNSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Light Attraction": "Extreme",
                    "Biological Light Emission": "70 Lumens (Face only)",
                    "Physical Body Density": "Unknown (Blends with dark)",
                    "Speed": "Rapid in darkness"
                }
            },
            lore: `
                <h3>Description</h3>
                <p>Smilers are generally hostile entities recognized by their signature reflective glowing eyes and a massive grin with jagged teeth. They reside in dark areas of Levels 2, 3, and beyond. Smilers are attracted to light sources and sudden movement.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                    <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-flashlight"></i> Distraction Protocol</h4>
                    <p class="mb-2">If you encounter a Smiler, maintain eye contact and walk away slowly. DO NOT RUN. If it begins to approach, throw your flashlight down a hallway to distract it, as it will chase the light source.</p>
                </div>
            `
        },
        "entity8": {
            type: "entity", id: "8", title: "Entity 8", name: "Hounds",
            traceable: true,
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwxMCAxME0xMCAwLTAgMTAiIHN0cm9rZT0iIzU1NSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Bite Toxicity": "Lethal (Hound Virus)",
                    "Aggression": "High upon eye contact break",
                    "Anatomy": "Humanoid, Quadrupedal"
                }
            },
            lore: `
                <h3>Description</h3>
                <p>Hounds are humanoids that crawl on all fours. They have disheveled hair, elongated limbs, and sharp teeth. They become extremely aggressive if you flee or break eye contact.</p>
            `
        }
    }
};