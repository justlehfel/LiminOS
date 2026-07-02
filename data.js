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
            "Entropy Gradient": "Normal",
            "Atomic Clock Drift": "±0.0s/24h",
            "Subjective Time Variance": "Low",
            "Causality Integrity": "99.9%",
            "Temporal Echoes": "None detected"
        }
    },
    {
        category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400",
        data: {
            "Hume Level (Reality)": "100.0 H",
            "Kant Counter Reading": "1.00",
            "Euclidean Consistency": "99.9%",
            "Noclipping Threshold": "Impossible",
            "Spatial Dilation Factor": "1:1",
            "Gravity Variance": "9.81 m/s²",
            "Z-Axis Deviation": "0.00%"
        }
    },
    {
        category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400",
        data: {
            "Ambient Temp (Core)": "20.0 °C",
            "Relative Humidity": "40-60%",
            "Atmospheric Pressure": "101.3 kPa",
            "Airborne Spatial Anomalies": "0 parts/Billion",
            "Chemical Odor Profile": "Sterile/Neutral"
        }
    },
    {
        category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400",
        data: {
            "Ambient Hum": "None",
            "Acoustic Reverberation": "Standard",
            "Light Source Type": "Variable",
            "Luminosity Level": "Variable Lux",
            "Total Darkness Zones": "Possible",
            "Audio Hallucination Risk": "0%"
        }
    },
    {
        category: "Material & Biological", icon: "ph-flask", color: "text-green-400",
        data: {
            "Toxicity Levels": "Safe",
            "Pathogen Level": "Standard Earth",
            "Structural Integrity": "Variable",
            "Entity Density": "0.00",
            "Organic Decay Rate": "Standard"
        }
    },
    {
        category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400",
        data: {
            "Base Threat Level": "0",
            "Sanity Drain Rate": "0%",
            "Isolation Factor": "Variable",
            "Navigation Difficulty": "Low"
        }
    }
];

const GlobalEntityMetrics = [
    {
        category: "Biological & Anatomical Makeup", icon: "ph-dna", color: "text-green-400",
        data: {
            "Cellular Structure": "Unknown",
            "Carbon Based": "Unverified",
            "Estimated Lifespan": "Infinite/Undefined",
            "Regeneration Factor": "N/A"
        }
    },
    {
        category: "Behavioral & Aggression Matrix", icon: "ph-brain", color: "text-red-400",
        data: {
            "Hostility Baseline": "Docile",
            "Sentience Level": "Unknown",
            "Pack Mentality": "Solitary",
            "Cognitohazard Output": "0%"
        }
    },
    {
        category: "Dimensional Interactions", icon: "ph-intersect", color: "text-purple-400",
        data: {
            "Noclip Capability": "Enabled",
            "Level Boundary Traversing": "Yes",
            "Gravity Resistance": "100%"
        }
    }
];

// ==========================================
// DATA STRUCTURE: CLASSIFICATIONS
// ==========================================
const LiminOSClassifications = {
    general: [
        { class: "Class 0", name: "Habitable", color: "bg-green-500", desc: "Safe, secure, devoid of entities. Environment is stable and can support long-term outposts." },
        { class: "Class 1", name: "Safe", color: "bg-green-400", desc: "Safe, secure, minimal entity count. Environmental hazards are low." },
        { class: "Class 2", name: "Unsafe", color: "bg-yellow-400", desc: "Unsafe, unsecure, low entity count. Environmental hazards require attention." },
        { class: "Class 3", name: "Hazardous", color: "bg-orange-500", desc: "Unsafe, unsecure, moderate entity count. Survival requires preparation and caution." },
        { class: "Class 4", name: "Dangerous", color: "bg-red-500", desc: "Unsafe, unsecure, high entity count. Immediate danger to human life. Highly aggressive environment." },
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Unsafe, unsecure, entity infestation. Survival is nearly impossible. Instantaneous hazards present." }
    ],
    special: [
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Physical entities may be absent, but the level itself is the threat." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life." }
    ]
};

// SVG Patterns for Hero Backgrounds
const PATTERNS = {
    carpet: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
    concrete: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjNzc3Ii8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzU1NSIvPjwvc3ZnPg==",
    pipes: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjNTIyIiBzdHJva2Utd2lkdGg9IjYiLz48L3N2Zz4=",
    wires: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
    office: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZGRkIi8+PHBhdGggZD0iTTAgMEwzMCAwTDMwIDMwTDAgMzBaIiBzdHJva2U9IiNhYWEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=",
    hotel: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNDAwIi8+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjYmI2IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
    void: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PC9zdmc+",
    water: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDEyIi8+PHBhdGggZD0iTTAgMTBRNSAxNSAAMTAgMTBRMTUgNSAAMjAgMTAiIHN0cm9rZT0iIzAyNCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",
    cave: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjIyIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMxMTEiLz48L3N2Zz4=",
    suburb: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTIyIi8+PHBhdGggZD0iTTAgNDBMMjAgMjBMNDAgNDBaIiBmaWxsPSIjMDExIi8+PC9zdmc+",
    wheat: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZGJhIi8+PHBhdGggZD0iTTEwIDIwTDEwIDAiIHN0cm9rZT0iI2I5NSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
    entity: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4="
};


// ==========================================
// DATA STRUCTURE: LEVELS & ENTITIES
// ==========================================
const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: PATTERNS.carpet,
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015,
                wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.03)', backgroundColor: '#030303',
                pois: [
                    { name: "Gateway to Level 1", color: "#9ca3af", icon: "⬇" },
                    { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" },
                    { name: "Auditory Hallucination Epicenter", color: "#f97316", icon: "🔊" }
                ]
            },
            specificMetrics: {
                "Level 0 Specific (Proprietary)": {
                    "Carpet Saturation Depth": "1.2cm (Avg)",
                    "Visual Hallucination Rate": "12% of agents/hr",
                    "Ambient Hum Frequency": "59.8 Hz - 60.2 Hz"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p>
                </div>
                <h3>Description</h3>
                <p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. All rooms in Level 0 share the same superficial features, with worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are the same.</p>
                <p>The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. The buzz tends to induce throbbing migraines in most individuals.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-brain"></i> 1. Psychological Anchoring</h4>
                        <p class="mb-2">The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia.</p>
                        <p class="bg-purple-900/20 p-3 rounded text-purple-200 border border-purple-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Carry a mechanical watch. The ticking overrides the hum-buzz and grounds you to linear Frontrooms time.</p>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
                        <div class="text-[10px] text-liminal-muted mb-1 font-mono">MAY 12, 2019</div>
                        <h4 class="text-white font-bold text-lg mb-2">Initial Archival Image Captured</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">An anonymous 4chan user uploads the first verified visual telemetry of Level 0.</p>
                    </div>
                </div>
            `
        },
        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }
            ],
            heroImage: PATTERNS.concrete,
            mapConfig: {
                seed: 88421, wallDensity: 0.3, gridSize: 8, poiChance: 0.05,
                wallColor: '#6b7280', gridColor: 'rgba(255,255,255,0.05)', backgroundColor: '#111827',
                zones: [
                    { min: 0.8, max: 1.0, color: 'rgba(0, 0, 0, 0.4)' } // Dark zones (lights out)
                ],
                pois: [
                    { name: "Supply Crate", color: "#8b5cf6", icon: "📦" },
                    { name: "M.E.G. Alpha Base", color: "#22c55e", icon: "⛺" },
                    { name: "Puddle of Water", color: "#3b82f6", icon: "💧" }
                ]
            },
            specificMetrics: {
                "Level 1 Specific": {
                    "Concrete Density": "Standard Industrial",
                    "Supply Crate Respawn": "Unpredictable",
                    "Fog Density": "Variable / Low Vis"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and low-hanging fog creeping over the ground.</p>
                </div>
                <h3>Description</h3>
                <p>Unlike Level 0, this level possesses a consistent supply of water and electricity, making it vastly more habitable. Crates of supplies appear and disappear sporadically. The lights occasionally flicker and can turn off completely, plunging sections into total darkness. Entities rarely appear, but lurk in the unlit zones.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                    <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">Light Management</h4>
                    <p>When the lights go out, freeze and listen. Do not approach sounds in the dark. Carry your own illumination but use it sparingly.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">M.E.G. (Major Explorer Group) established their first major settlement, 'Base Alpha', within this level, cementing it as the primary hub for human organization.</div>
            `
        },
        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            tags: [
                { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "ENVIRONMENTAL HAZARD", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }
            ],
            heroImage: PATTERNS.pipes,
            mapConfig: {
                seed: 111999, wallDensity: 0.8, gridSize: 4, poiChance: 0.02,
                wallColor: '#ef4444', gridColor: 'rgba(255,0,0,0.05)', backgroundColor: '#2a0a0a',
                pois: [
                    { name: "Boiling Pipe Leak", color: "#f97316", icon: "♨" },
                    { name: "Locked Maintenance Door", color: "#9ca3af", icon: "🚪" }
                ]
            },
            specificMetrics: {
                "Level 2 Specific": {
                    "Ambient Temp": "43 °C (Lethal in zones)",
                    "Pipe Pressure": "Exceeding 500 PSI",
                    "Hallway Width": "Narrow (1-2m)"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 2 consists of long, claustrophobic concrete maintenance tunnels lined with pipes.</p>
                </div>
                <h3>Description</h3>
                <p>The heat here is immense, sometimes reaching temperatures that can cause fatal heatstroke. The pipes carry thick, black viscous fluid. The layout is mostly linear, acting as a transition zone. Entities like Smilers and Hounds begin to appear here frequently.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500">
                    <h4 class="text-red-500 font-bold uppercase mb-3 text-lg">Thermal Avoidance</h4>
                    <p>Do not touch the pipes. Seek areas where the ambient hum is quieter, as these are usually cooler.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Originally classified as Level 1.5 due to topological overlap, until thermal mapping definitively separated its unique anomalous signature.</div>
            `
        },
        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            tags: [
                { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "ENTITY INFESTATION", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.wires,
            mapConfig: {
                seed: 666333, wallDensity: 0.5, gridSize: 6, poiChance: 0.08,
                wallColor: '#1f2937', gridColor: 'rgba(255,255,255,0.02)', backgroundColor: '#000000',
                zones: [
                    { min: 0.5, max: 1.0, color: 'rgba(20, 20, 20, 0.8)' } // Dark zones
                ],
                pois: [
                    { name: "Live Electrical Wire", color: "#fbbf24", icon: "⚡" },
                    { name: "Hound Pack", color: "#dc2626", icon: "🐺" },
                    { name: "Elevator to Level 4", color: "#10b981", icon: "🛗" }
                ]
            },
            specificMetrics: {
                "Level 3 Specific": {
                    "Entity Count": "Severe",
                    "Voltage Spikes": "Random / Lethal",
                    "Acoustic Noise": "110 dB (Machinery)"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 3 is a series of dark, twisting corridors filled with loud machinery and exposed wiring.</p>
                </div>
                <h3>Description</h3>
                <p>This is one of the most dangerous early levels. It is infested with Hounds, Facelings, and Skin-Stealers. The deafening sound of machinery masks the approach of entities. However, it is also rich in supplies like Almond Water and weapons left behind by others.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-600">
                    <h4 class="text-red-600 font-bold uppercase mb-3 text-lg">Constant Movement</h4>
                    <p>Never stay in one place. The machinery noise attracts entities. Find the elevators to Level 4 immediately.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Site of the first major M.E.G. defensive skirmish against a coordinated entity pack.</div>
            `
        },
        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            tags: [
                { label: "CLASS 0", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }
            ],
            heroImage: PATTERNS.office,
            mapConfig: {
                seed: 90210, wallDensity: 0.1, gridSize: 10, poiChance: 0.03,
                wallColor: '#d1d5db', gridColor: 'rgba(255,255,255,0.1)', backgroundColor: '#f3f4f6',
                pois: [
                    { name: "Water Cooler (Almond Water)", color: "#3b82f6", icon: "🥛" },
                    { name: "Vending Machine", color: "#f59e0b", icon: "🍫" },
                    { name: "Window (Do not look out)", color: "#000000", icon: "🪟" }
                ]
            },
            specificMetrics: {
                "Level 4 Specific": {
                    "Entity Density": "Near Zero",
                    "Almond Water Yield": "Abundant",
                    "Euclidean Consistency": "High"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 4 resembles an empty, modern office building, almost entirely devoid of furniture.</p>
                </div>
                <h3>Description</h3>
                <p>Considered a sanctuary. Water coolers containing Almond Water are scattered everywhere. There are no hostile entities natively found here. Many groups set up permanent outposts here. Windows exist, but they look out into an empty, grey void. Looking into them for too long induces paranoia.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-400">
                    <h4 class="text-blue-400 font-bold uppercase mb-3 text-lg">Resupply Protocol</h4>
                    <p>Stockpile as much Almond Water as you can carry. Rest fully. This is the last truly safe stop before deeper descents.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Headquarters of multiple trading factions due to its stability.</div>
            `
        },
        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            tags: [
                { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: PATTERNS.hotel,
            mapConfig: {
                seed: 19301930, wallDensity: 0.4, gridSize: 6, poiChance: 0.04,
                wallColor: '#78350f', gridColor: 'rgba(255,215,0,0.05)', backgroundColor: '#451a03',
                zones: [
                    { min: 0.0, max: 0.2, color: 'rgba(153, 27, 27, 0.3)' } // Boiler Room heat zones
                ],
                pois: [
                    { name: "Elevator Bank", color: "#d97706", icon: "🛗" },
                    { name: "Beverly Room", color: "#c084fc", icon: "🗝" },
                    { name: "Deathmoth Hive", color: "#dc2626", icon: "🦋" }
                ]
            },
            specificMetrics: {
                "Level 5 Specific": {
                    "Acoustic Audio": "Muffled 1920s Jazz",
                    "Sanity Drain": "Moderate (Paranoia)",
                    "Deathmoth Presence": "Extreme"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 5 is an infinite hotel complex decorated in the style of the early 20th century.</p>
                </div>
                <h3>Description</h3>
                <p>The level is split into three main areas: The Main Hall, The Beverly Room, and The Boiler Room. The environment is heavily ornate but decaying. Soft jazz music plays from an unknown source. It is the central hive for Deathmoths, making light sources extremely dangerous to carry openly.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500">
                    <h4 class="text-orange-500 font-bold uppercase mb-3 text-lg">Light Discipline</h4>
                    <p>Turn off all flashlights. Deathmoths are attracted to light and will swarm. Navigate by the dim ambient light of the hotel sconces.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Explorers often report feeling as if they are being constantly watched by unseen patrons.</div>
            `
        },
        "level6": {
            type: "level", id: "level6", title: "Level 6", name: "Lights Out",
            tags: [
                { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "PSYCHOLOGICAL", class: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30" }
            ],
            heroImage: PATTERNS.void,
            mapConfig: {
                seed: 666000, wallDensity: 0.0, gridSize: 10, poiChance: 0.005,
                wallColor: '#000000', gridColor: 'rgba(255,255,255,0.01)', backgroundColor: '#000000',
                pois: [
                    { name: "Puddle to Level 7", color: "#3b82f6", icon: "🕳" }
                ]
            },
            specificMetrics: {
                "Level 6 Specific": {
                    "Luminosity": "Absolute Zero",
                    "Sanity Drain": "Extreme",
                    "Audio Hallucinations": "100% Incidence"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 6 is a space of total, impenetrable darkness. No light source can pierce it for more than a few inches.</p>
                </div>
                <h3>Description</h3>
                <p>There are no known entities native to this level, but it is considered one of the most dangerous. The sheer isolation and unnatural darkness cause rapid mental breakdown. Wanderers often hear voices of loved ones or unseen monsters, driving them to run blindly into walls or trip over unseen hazards.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500">
                    <h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg">Blind Navigation</h4>
                    <p>Keep one hand firmly on a wall. Do not trust your ears. Walk slowly until you trip over a wire or fall into a puddle, which transitions to Level 7.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">LiminOS mapping probes frequently crash here due to zero optical feedback.</div>
            `
        },
        "level7": {
            type: "level", id: "level7", title: "Level 7", name: "Thalassophobia",
            tags: [
                { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "ENVIRONMENTAL HAZARD", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }
            ],
            heroImage: PATTERNS.water,
            mapConfig: {
                seed: 777777, wallDensity: 0.05, gridSize: 10, poiChance: 0.01,
                wallColor: '#3b82f6', gridColor: 'rgba(255,255,255,0.05)', backgroundColor: '#020617',
                zones: [
                    { min: 0.0, max: 1.0, color: 'rgba(3, 105, 161, 0.3)' } // Water zone everywhere
                ],
                pois: [
                    { name: "Submerged Cave Entrance", color: "#000000", icon: "🕳" },
                    { name: "The Thing on Level 7", color: "#ef4444", icon: "👁" }
                ]
            },
            specificMetrics: {
                "Level 7 Specific": {
                    "Water Depth": "Unfathomable",
                    "Water Temperature": "4 °C",
                    "Gravity (Underwater)": "Anomalous (Heavy)"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 7 is a seemingly endless, pitch-black ocean spanning out from a single, fully furnished room.</p>
                </div>
                <h3>Description</h3>
                <p>Wanderers drop into a small house filled with a few inches of water. Opening the front door reveals a massive, freezing ocean. The sky is a ceiling of solid rock. Deep below the water lies a cave system (the entrance to Level 8). The ocean is ruled by 'The Thing on Level 7', a massive leviathan entity.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500">
                    <h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg">Submersion Protocol</h4>
                    <p>Do not swim aimlessly. You must hold your breath and dive straight down to find the cave to Level 8. If the water vibrates, The Thing has found you.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Only 12% of explorers who enter the water are recorded making it to Level 8.</div>
            `
        },
        "level8": {
            type: "level", id: "level8", title: "Level 8", name: "Cave System",
            tags: [
                { label: "CLASS 5", class: "bg-red-700/10 text-red-500 border-red-700/30" },
                { label: "ENTITY INFESTATION", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.cave,
            mapConfig: {
                seed: 88888, wallDensity: 0.7, gridSize: 6, poiChance: 0.05,
                wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', backgroundColor: '#18181b',
                pois: [
                    { name: "Arachnid Nest", color: "#dc2626", icon: "🕷" },
                    { name: "Almond Water Spring", color: "#3b82f6", icon: "💧" },
                    { name: "Pitfall", color: "#000000", icon: "🕳" }
                ]
            },
            specificMetrics: {
                "Level 8 Specific": {
                    "Arachnid Density": "Extreme",
                    "Rock Composition": "Unknown Metamorphic",
                    "Toxicity": "Trace Venom Spores"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 8 is an expansive, incredibly dangerous cave system filled with giant spiders and hostile entities.</p>
                </div>
                <h3>Description</h3>
                <p>The walls are damp and covered in thick webbing. Light is completely absent. It is highly advised to avoid this level entirely if possible. The entities here are apex predators adapted to the dark, and the terrain is treacherous with hidden pitfalls.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-700">
                    <h4 class="text-red-500 font-bold uppercase mb-3 text-lg">Stealth and Speed</h4>
                    <p>Do not attempt to fight the arachnids. Cut through webs quietly and follow the natural downward slope of the caves to reach Level 9.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Considered the primary filter for wanderers attempting deep-level exploration.</div>
            `
        },
        "level9": {
            type: "level", id: "level9", title: "Level 9", name: "Darkened Suburbs",
            tags: [
                { label: "CLASS 5", class: "bg-red-700/10 text-red-500 border-red-700/30" }
            ],
            heroImage: PATTERNS.suburb,
            mapConfig: {
                seed: 9999, wallDensity: 0.15, gridSize: 12, poiChance: 0.02,
                wallColor: '#374151', gridColor: 'rgba(255,255,255,0.03)', backgroundColor: '#0f172a',
                zones: [
                    { min: 0.0, max: 0.3, color: 'rgba(34, 197, 94, 0.1)' }, // Grass
                    { min: 0.3, max: 0.6, color: 'rgba(51, 65, 85, 0.3)' }  // Asphalt
                ],
                pois: [
                    { name: "Neighborhood Watcher", color: "#dc2626", icon: "👁" },
                    { name: "Unlocked House", color: "#10b981", icon: "🏠" },
                    { name: "Streetlamp", color: "#fef08a", icon: "💡" }
                ]
            },
            specificMetrics: {
                "Level 9 Specific": {
                    "Sky": "Eternal Midnight",
                    "Fog Density": "Thick",
                    "House Interior Similarity": "99%"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 9 resembles an infinite suburban neighborhood in the dead of night.</p>
                </div>
                <h3>Description</h3>
                <p>The streets are lined with identical houses, mostly locked. The air is thick with cold fog. The level is patrolled by extremely hostile entities, most notably the 'Neighborhood Watch'. Do not attempt to stay outside for long.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-500">
                    <h4 class="text-gray-400 font-bold uppercase mb-3 text-lg">House Hopping</h4>
                    <p>Break into houses to hide. Do not look out the windows. Keep moving from house to house until you find a path leading to a wheat field (Level 10).</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Many wanderers form small, terrified communities locked inside these houses, too afraid to step back out.</div>
            `
        },
        "level10": {
            type: "level", id: "level10", title: "Level 10", name: "Field of Wheat",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }
            ],
            heroImage: PATTERNS.wheat,
            mapConfig: {
                seed: 101010, wallDensity: 0.0, gridSize: 15, poiChance: 0.01,
                wallColor: '#d97706', gridColor: 'rgba(255,255,255,0.01)', backgroundColor: '#fef3c7',
                zones: [
                    { min: 0.0, max: 1.0, color: 'rgba(217, 119, 6, 0.4)' } // Wheat
                ],
                pois: [
                    { name: "Tractor", color: "#dc2626", icon: "🚜" },
                    { name: "Barn", color: "#78350f", icon: "🏚" }
                ]
            },
            specificMetrics: {
                "Level 10 Specific": {
                    "Sky": "Perpetual Overcast Day",
                    "Wind Speed": "5 mph",
                    "Entity Count": "Rare"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 10 is a seemingly infinite field of wheat stretching in all directions.</p>
                </div>
                <h3>Description</h3>
                <p>After the horrors of Level 9, Level 10 acts as a breather. The sky is cloudy but bright. The wheat is safe to eat in small amounts. Occasional barns and tractors dot the landscape. It is relatively safe to establish outposts here.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500">
                    <h4 class="text-green-500 font-bold uppercase mb-3 text-lg">Rest and Regroup</h4>
                    <p>Use this area to recover sanity and stamina. Avoid the tree lines, as they lead to more dangerous unmapped sub-levels.</p>
                </div>
            `,
            history: `
                <div class="pl-6 border-l border-liminal-border text-sm text-liminal-muted">Known as the 'Bountiful Harvest' zone among trader factions.</div>
            `
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "1", title: "Entity 1", name: "The Cameraman",
            tags: [
                { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" },
                { label: "THEORETICAL", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "NO REAL-TIME VISUAL AVAILABLE",
            visualColorHex: "#c084fc",
            icon: "ph-ghost",
            isTraceable: false,
            specificMetrics: {
                "Entity Specific": {
                    "Origin Level": "Unknown (Omnipresent)",
                    "Photographic Resolution Avg": "4K+ Equivalent",
                    "Interference Rating": "Zero"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5 border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r">
                    <p class="text-sm text-yellow-200 font-mono"><strong>NOTICE:</strong> This document is pending revision following a recent alteration in the expected behavior of this phenomenon.</p>
                </div>
                <h3>Description</h3>
                <p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms. The physical characteristics of the entity remain mysterious, as it is believed to either avoid being seen or does not have a physical form altogether.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500">
                    <h4 class="text-blue-400 font-bold uppercase mb-3 text-lg">Non-Intervention Protocol</h4>
                    <p>If you locate a camera or tripod that you did not bring with you, do not touch it.</p>
                </div>
            `
        },
        "entity2": {
            type: "entity", id: "2", title: "Entity 2", name: "Smilers",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "BIOLUMINESCENT TRACE DETECTED",
            visualColorHex: "#facc15",
            icon: "ph-smiley",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Habitat": "Dark Zones",
                    "Light Attraction": "High",
                    "Speed": "Variable (Fast when provoked)"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Smilers are hostile entities identifiable by their reflective, glowing eyes and teeth.</p>
                </div>
                <h3>Description</h3>
                <p>They reside in dark areas of levels like Level 2 and Level 3. Their bodies are completely invisible, obscured by the darkness, leaving only their terrifying grin visible. They are drawn to light sources.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                    <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">Evasion</h4>
                    <p>Maintain eye contact and back away slowly. Turn off all light sources immediately. Do not run unless it attacks first.</p>
                </div>
            `
        },
        "entity3": {
            type: "entity", id: "3", title: "Entity 3", name: "Hounds",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "BIOLOGICAL", class: "bg-green-500/10 text-green-400 border-green-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "PHYSICAL MASS TRACKED",
            visualColorHex: "#ef4444",
            icon: "ph-paw-print",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Locomotion": "Quadrupedal",
                    "Bite Force": "1200 PSI",
                    "Aggression": "High"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Hounds are humanoid entities with wild hair that run on all fours like dogs.</p>
                </div>
                <h3>Description</h3>
                <p>Extremely aggressive and fast. They are often found in tight corridors like Level 3. They become enraged when they see a wanderer and will charge.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500">
                    <h4 class="text-red-500 font-bold uppercase mb-3 text-lg">Intimidation</h4>
                    <p>Maintain eye contact. Hounds can be intimidated if you appear larger and fearless. If it charges, use brute force to defend yourself.</p>
                </div>
            `
        },
        "entity4": {
            type: "entity", id: "4", title: "Entity 4", name: "Skin-Stealers",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "MIMETIC", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "BLOOD SIGNATURE DETECTED",
            visualColorHex: "#991b1b",
            icon: "ph-user-focus",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Blood Color": "Translucent",
                    "Mimicry Level": "High",
                    "Intelligence": "Feral"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Skin-Stealers are tall, pale, flesh-eating humanoids.</p>
                </div>
                <h3>Description</h3>
                <p>They typically wear the skin of their victims to blend in. They can mimic human speech, often crying for help to lure wanderers.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                    <h4 class="text-purple-500 font-bold uppercase mb-3 text-lg">Identification</h4>
                    <p>Their blood is clear. If you suspect a fellow wanderer is a Skin-Stealer, ask for a minor blood test. Do not trust voices crying for help in the dark.</p>
                </div>
            `
        },
        "entity5": {
            type: "entity", id: "5", title: "Entity 5", name: "Facelings",
            tags: [
                { label: "VARIABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "HUMANOID SIGNATURE TRACKED",
            visualColorHex: "#d97706",
            icon: "ph-user-minus",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Variant 1": "Adult (Docile)",
                    "Variant 2": "Child (Hostile)",
                    "Facial Features": "None"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Facelings are exactly what they sound like: humans without faces.</p>
                </div>
                <h3>Description</h3>
                <p>Adult Facelings are generally docile and will wander aimlessly, acting like normal humans. Child Facelings, however, are highly mischievous and often hostile, attempting to prank or harm wanderers.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-400">
                    <h4 class="text-gray-400 font-bold uppercase mb-3 text-lg">Avoid the Children</h4>
                    <p>Ignore Adult Facelings, they will ignore you. Run away immediately from groups of Child Facelings.</p>
                </div>
            `
        },
        "entity6": {
            type: "entity", id: "6", title: "Entity 6", name: "Wretches",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "MUTATED BIOMASS DETECTED",
            visualColorHex: "#65a30d",
            icon: "ph-skull",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Origin": "Former Wanderers",
                    "Mutation Stage": "Irreversible",
                    "Diet": "Flesh"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Wretches are horrific mutations of wanderers who lost their sanity.</p>
                </div>
                <h3>Description</h3>
                <p>The "Wretch Cycle" occurs when a human starves or loses their mind completely in the Backrooms. They mutate into cannibalistic monsters. They retain vague memories but act purely on feral instinct.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-600">
                    <h4 class="text-green-600 font-bold uppercase mb-3 text-lg">Sanity Maintenance</h4>
                    <p>The best defense against a Wretch is not becoming one. Drink Almond Water. To fight them, treat them as you would a feral, infected human.</p>
                </div>
            `
        },
        "entity7": {
            type: "entity", id: "7", title: "Entity 7", name: "Clumps",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "HEAVY MASS TRACKED",
            visualColorHex: "#b91c1c",
            icon: "ph-alien",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Composition": "Severed Limbs",
                    "Speed": "Slow but Relentless",
                    "Habitat": "Levels 2, 3, 8"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Clumps are massive amalgamations of human limbs moving like a gruesome wheel.</p>
                </div>
                <h3>Description</h3>
                <p>They consist entirely of arms and legs tangled together. They are slow but incredibly strong, capable of tearing a wanderer apart and absorbing their limbs into the mass.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-800">
                    <h4 class="text-red-800 font-bold uppercase mb-3 text-lg">Outrun</h4>
                    <p>They are slow. Simply run away. Do not let them corner you in tight spaces.</p>
                </div>
            `
        },
        "entity8": {
            type: "entity", id: "8", title: "Entity 8", name: "Deathmoths",
            tags: [
                { label: "VARIABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "AIRBORNE SIGNATURE DETECTED",
            visualColorHex: "#f87171",
            icon: "ph-butterfly",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Size": "2ft - 6ft Wingspan",
                    "Attraction": "Light sources",
                    "Venomous": "Mildly"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Deathmoths are giant moths native to the Backrooms, most notably Level 5.</p>
                </div>
                <h3>Description</h3>
                <p>Male Deathmoths are smaller and mostly harmless. Female Deathmoths are massive and highly aggressive. They are fatally attracted to light and will attack anyone holding a flashlight.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-400">
                    <h4 class="text-orange-400 font-bold uppercase mb-3 text-lg">Lights Off</h4>
                    <p>If you hear massive wings fluttering, kill your flashlight immediately. Hide in the dark.</p>
                </div>
            `
        },
        "entity9": {
            type: "entity", id: "9", title: "Entity 9", name: "Partygoers",
            tags: [
                { label: "LETHAL", class: "bg-red-700/10 text-red-500 border-red-700/30" },
                { label: "COGNITOHAZARD", class: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "COGNITOHAZARD SCRAMBLE (=)",
            visualColorHex: "#ef4444",
            icon: "ph-balloon",
            isTraceable: false,
            specificMetrics: {
                "Entity Specific": {
                    "Intelligence": "Highly Intelligent",
                    "Hostility": "Absolute",
                    "Signature Mark": "=\"=)"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Partygoers are tall, bipedal creatures with leathery yellow skin and carved smiles.</p>
                </div>
                <h3>Description</h3>
                <p>They are highly intelligent and actively hunt wanderers to turn them into "cakes" or more Partygoers. They often hack the database to alter articles, ending messages with a smiling emoticon "=)".</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-900">
                    <h4 class="text-red-500 font-bold uppercase mb-3 text-lg">Absolute Avoidance</h4>
                    <p>If you see a balloon, run the other way. If an article tells you Level Fun is safe, it is a trap =).</p>
                </div>
            `
        },
        "entity10": {
            type: "entity", id: "10", title: "Entity 10", name: "Dullahan",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }
            ],
            heroImage: PATTERNS.entity,
            visualStatus: "ARMORED MASS DETECTED",
            visualColorHex: "#52525b",
            icon: "ph-sword",
            isTraceable: true,
            specificMetrics: {
                "Entity Specific": {
                    "Appearance": "Headless Knight",
                    "Durability": "Impenetrable",
                    "Speed": "Slow"
                }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Dullahans are headless humanoid entities clad in heavy medieval armor.</p>
                </div>
                <h3>Description</h3>
                <p>They wield massive rusted weapons. They are blind and deaf, relying entirely on sensing vibrations in the floor to hunt.</p>
            `,
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-600">
                    <h4 class="text-gray-400 font-bold uppercase mb-3 text-lg">Stand Still</h4>
                    <p>If a Dullahan is nearby, do not move your feet. Stop breathing heavily. Once it passes, tip-toe away.</p>
                </div>
            `
        }
    }
};