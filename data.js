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
            "Temporal Echoes": "None detected",
            "Chronon Radiation": "Background",
            "Memory Degradation": "Baseline",
            "Aging Effect on Biology": "Normal",
            "Device Battery Drain": "Standard",
            "Historical Sedimentation": "Present",
            "Simultaneity Loss": "None",
            "Time Dilation Ratio (vs Frontrooms)": "1.000",
            "Temporal Drag Coefficient": "0.01 μs/m",
            "Causality Bleed Rate": "0.0001%",
            "Chronon Particulate Count": "4.2 ppm",
            "Paradox Tolerance Threshold": "Low"
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
            "Z-Axis Deviation": "0.00%",
            "Magnetic Declination": "Standard Earth",
            "Tesseract Folding": "None",
            "Quantum Superposition": "Collapsed",
            "Non-linear Corridors": "0%",
            "Collision Meshes": "Solid/Intact",
            "Coordinate Drift": "0m/hr",
            "Euclidean Warp Factor": "0.00 (Stable)",
            "Gravitational Shear": "0.0 m/s³",
            "Dimensional Permeability": "0.02%",
            "Tesseract Depth Index": "Level 1 (Surface)",
            "Absolute Void Proximity": ">1,000,000 AU"
        }
    },
    {
        category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400",
        data: {
            "Ambient Temp (Core)": "20.0 °C",
            "Temp Fluctuation (24h)": "±2.0 °C",
            "Relative Humidity": "40-60%",
            "Atmospheric Pressure": "101.3 kPa",
            "Air Comp: O2": "20.9%",
            "Air Comp: CO2": "0.04%",
            "Air Comp: N2": "78.0%",
            "Trace Anomalous Gases": "0%",
            "Particulate Matter": "Safe levels",
            "Ozone Level": "Normal",
            "Aerosolized Spores": "None",
            "Static Charge Density": "Neutral",
            "Breathability Index": "100%",
            "Background Rad-Count": "0.12 μSv/h",
            "Airborne Spatial Anomalies": "0 parts/Billion",
            "Chemical Odor Profile": "Sterile/Neutral",
            "Barometric Fluctuation Spike": "±0.1 kPa",
            "Xenon Gas Concentration": "Trace"
        }
    },
    {
        category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400",
        data: {
            "Ambient Hum": "None",
            "Acoustic Reverberation": "Standard",
            "Light Source Type": "Variable",
            "Luminosity Level": "Variable Lux",
            "Color Temperature": "Variable K",
            "Total Darkness Zones": "Possible",
            "Audio Hallucination Risk": "0%",
            "UV Radiation": "Sunlight-dependent",
            "Infrared Signature": "Normal",
            "Absolute Decibel Baseline": "30 dB",
            "Sub-sonic Interference": "None",
            "Echo Delay Variance": "Linear (0s)",
            "Auditory Mimicry Index": "0%",
            "Architectural Resonance Freq": "432 Hz"
        }
    },
    {
        category: "Material & Biological", icon: "ph-flask", color: "text-green-400",
        data: {
            "Toxicity Levels": "Safe",
            "Pathogen Level": "Standard Earth",
            "Mold Spore Count": "Low",
            "Structural Integrity": "Variable",
            "Entity Density": "0.00",
            "Organic Decay Rate": "Standard",
            "Nutrient Availability": "High",
            "Dehydration Risk": "Normal",
            "Flora/Fauna Present": "Earth Standard",
            "Carpet/Floor Fluid Toxicity": "0%",
            "Wall Arsenic Saturation": "0 mg/m²",
            "Micro-Concrete Density": "2400 kg/m³",
            "Organic Assimilation Rate": "0%/hr",
            "Architectural Decay Sub-routine": "Dormant"
        }
    },
    {
        category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400",
        data: {
            "Base Threat Level": "0",
            "Sanity Drain Rate": "0%",
            "Isolation Factor": "Variable",
            "Radio Comm Integrity": "100%",
            "GPS Functionality": "Online",
            "Electrical Availability": "Variable",
            "Internet Access": "Available",
            "Rescue Probability": "High",
            "Resource Respawn Algorithm": "Null",
            "Shelter Viability Score": "90/100",
            "Navigation Difficulty": "Low",
            "Psychological Erosion Rate": "Baseline",
            "Entity Detection Range Requirement": "N/A"
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
            "Physical Mass": "Variable",
            "Regeneration Factor": "N/A",
            "Ectoplasmic Output": "0.0 mg/L"
        }
    },
    {
        category: "Behavioral & Aggression Matrix", icon: "ph-brain", color: "text-red-400",
        data: {
            "Hostility Baseline": "Docile",
            "Sentience Level": "Unknown",
            "Target Preference": "None",
            "Pack Mentality": "Solitary",
            "Response to Provocation": "Flee/Ignore",
            "Cognitohazard Output": "0%"
        }
    },
    {
        category: "Dimensional Interactions", icon: "ph-intersect", color: "text-purple-400",
        data: {
            "Noclip Capability": "Enabled",
            "Hume Disruption Radius": "0.0m",
            "Level Boundary Traversing": "Yes",
            "Temporal Phasing": "Unknown",
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
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Unsafe, unsecure, entity infestation. Survival is nearly impossible. Instantaneous hazards present." },
        { class: "Class Unknown", name: "Undetermined", color: "bg-gray-500", desc: "Mysterious properties. Data is insufficient to assign a standard survival class." },
        { class: "Class Deadzone", name: "Lethal Anomaly", color: "bg-black border border-red-900 text-red-500", desc: "Environment actively breaks down molecular structure. Immediate death upon entry." }
    ],
    special: [
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations, memory loss, paranoia, or manufactured realities. Physical entities may be absent, but the level itself is the threat." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently. The level cannot maintain a consistent state." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative anomalous properties. Water and food are usually abundant." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" },
        { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" },
        { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
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
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303',
                pois: [
                    { name: "Gateway to Level 1 (Garages)", color: "#9ca3af", icon: "⬇" },
                    { name: "Fragile Wall (To Level 483)", color: "#ef4444", icon: "🔨" },
                    { name: "Rotten Floorboard (To Level 27)", color: "#8b5cf6", icon: "🕳" },
                    { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" }
                ]
            },

            specificMetrics: {
                "Level 0 Specific (Proprietary)": {
                    "Carpet Saturation Depth": "1.2cm (Avg)",
                    "Wall Permeability Factor": "0.0001% (Noclip Resist)",
                    "Fluorescent Flicker Sync": "Asynchronous (Patternless)",
                    "Spatial Redundancy Ratio": "89.4% Identical Layouts",
                    "Ambient Hum Frequency": "59.8 Hz - 60.2 Hz"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.15 (Slower)",
                    "Local Time Flow Rate": "Erratic / Psychological",
                    "Memory Degradation": "+12% Accelerated"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "82.4 H (Low)",
                    "Euclidean Consistency": "14.2% (Severe Non-linear)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "22.4 °C (Constant)",
                    "Relative Humidity": "88% (Damp)",
                    "Chemical Odor Profile": "Old Moist Carpet/Ozone"
                },
                "Survival & Infrastructure": {
                    "Sanity Drain Rate": "-2% per Hour",
                    "Rescue Probability": "0.000001%"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p>
                </div>
                <h3>Description</h3>
                <p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. All rooms in Level 0 share the same superficial features, with worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are the same, with each area differing significantly in shape and layout.</p>
                <p>The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. The buzz tends to induce throbbing migraines in most individuals, which persist for an extended period of time even after one has exited the level. As the level is devoid of hostile threats, the only danger that Level 0 poses is the evident lack of available resources, as many fall victim to dehydration, exhaustion, or starvation.</p>
                <p>Linear space and topology are significantly altered within Level 0, with it being possible to walk in a straight line, return to the starting point, and end up in a different set of rooms than one was in beforehand. Such properties cause the level to be extremely disorienting in layout, with research suggesting that the confusion may be the underlying cause of loss of mental stability among individuals.</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-brain"></i> 1. Psychological Anchoring</h4>
                        <p class="mb-2">The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours of isolation.</p>
                        <p class="bg-purple-900/20 p-3 rounded text-purple-200 border border-purple-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Carry a mechanical watch. The ticking overrides the hum-buzz and grounds you to linear Frontrooms time. Digital devices may fail or loop.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                        <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-drop"></i> 2. Resource Management & Hydration</h4>
                        <p class="mb-2">There is absolutely no clean water natively generated here. The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies. Do not attempt to boil or filter it; heating it produces a mild neurotoxin.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">MAY 12, 2019</div>
                        <h4 class="text-white font-bold text-lg mb-2">Initial Archival Image Captured</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">An anonymous 4chan user uploads the first verified visual telemetry of Level 0. Liminality Corp rapidly acquires the raw digital file, wiping metadata from public servers. Initial spectral analysis confirms the existence of spatial anomalies completely detached from baseline reality. Funding for Project "Yellow Wallpaper" is approved by the Board.</p>
                    </div>
                </div>
            `,
            
            resonanceScan: `
                <div class="flex flex-col gap-4">
                    <h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3>
                    <p class="text-sm text-liminal-muted mb-4">Execute a localized quantum ping to extract raw, unfiltered anomalous data from Level 0's immediate topology.</p>
                    <button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button>
                    <div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div>
                </div>
            `
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            
            mapConfig: {
                seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b',
                pois: [
                    { name: "Supply Crate (Almond Water)", color: "#60a5fa", icon: "📦" },
                    { name: "M.E.G. Alpha Base Outpost", color: "#22c55e", icon: "🛡" },
                    { name: "Flickering Puddle", color: "#3b82f6", icon: "💧" },
                    { name: "Elevator to Level 2", color: "#dc2626", icon: "↕" },
                    { name: "Stairwell to Level -1", color: "#9333ea", icon: "🪜" }
                ]
            },

            specificMetrics: {
                "Level 1 Specific (Proprietary)": {
                    "Concrete Density": "2400 kg/m³ (Standard)",
                    "Fog Accumulation Rate": "Low / Variable",
                    "Fluorescent Failure Rate": "4% per Sector",
                    "Resource Generation": "Confirmed (Crates/Water)",
                    "M.E.G. Patrol Frequency": "High in Sector A"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.0 (Baseline)",
                    "Local Time Flow Rate": "Standard Linear",
                    "Memory Degradation": "Baseline"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "95.2 H (Stable)",
                    "Euclidean Consistency": "80.0% (Mostly Linear)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "15.0 °C (Chilly)",
                    "Relative Humidity": "50% (Dry/Dusty)",
                    "Chemical Odor Profile": "Motor Oil/Concrete"
                },
                "Survival & Infrastructure": {
                    "Base Threat Level": "1",
                    "Sanity Drain Rate": "-0.1% per Hour",
                    "Rescue Probability": "Moderate (M.E.G. Presence)"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and low-hanging fog. It is the first truly habitable level in the Backrooms.</p>
                </div>
                <h3>Description</h3>
                <p>Level 1 is a large, sprawling warehouse that features concrete floors and walls, exposed rebar, and a low-hanging fog with no discernible source. The fog often coalesces into condensation, forming puddles on the floor in inconsistent areas. Unlike Level 0, this level possesses a consistent supply of water and electricity, which allows indefinite habitation by wanderers providing that appropriate precautions are taken.</p>
                <p>It is also far more expansive, possessing stairs, elevators, isolated rooms, and hallways. Crates of supplies appear and disappear randomly within the level, often containing a mixture of vital items (food, Almond Water, batteries, tarps, weaponry, clothing, medical supplies) and nonsensical items (assorted car parts, boxes of crayons, used syringes, partially burned paper, live mice, mice in a catatonic state that have been injected with unknown substances, shoelaces, loose change, bundles of human hair).</p>
                <p>The light fixtures in Level 1 are prone to flickering and failing, plunging sections into total darkness. It is in these dark zones that entities such as Dullers, Adult Facelings, and Hounds can manifest. Wanderers are advised to carry reliable light sources and to avoid dark areas.</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500">
                        <h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-shield-check"></i> 1. Outpost Proximity</h4>
                        <p class="mb-2">Level 1 is home to M.E.G. Base Alpha. For your own safety, locate this base as quickly as possible upon entering the level. They maintain secure perimeters, trade networks, and medical facilities.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                        <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-flashlight"></i> 2. The Darkness Protocol</h4>
                        <p class="mb-2">When the lights flicker and die, entities will spawn. If the lights in your sector go out, immediately retreat to a lit area. Do not attempt to navigate the warehouse in total darkness without night-vision optics.</p>
                        <p class="bg-yellow-900/20 p-3 rounded text-yellow-200 border border-yellow-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> The power grids here follow a determinable 14-hour reset cycle. LiminOS devices can predict sector blackouts with 80% accuracy.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">AUGUST 14, 2020</div>
                        <h4 class="text-white font-bold text-lg mb-2">Establishment of Base Alpha</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">The Major Explorer Group (M.E.G.) successfully fortifies a large quadrant of Level 1, establishing the first major human settlement within the Backrooms. Liminality Corp monitors their communications via quantum interception, determining the level to be largely stable.</p>
                    </div>
                </div>
            `,
            resonanceScan: `<div class="flex flex-col gap-4"><h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3><button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button><div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div></div>`
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            tags: [
                { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "UNSAFE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            
            mapConfig: {
                seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.03, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000',
                pois: [
                    { name: "Superheated Pipe Valve", color: "#ef4444", icon: "🔥" },
                    { name: "Clump Nest", color: "#d946ef", icon: "🕸" },
                    { name: "Unmarked Door (To Level 3)", color: "#f59e0b", icon: "🚪" }
                ]
            },

            specificMetrics: {
                "Level 2 Specific (Proprietary)": {
                    "Pipe Thermal Output": "Max 43°C (Lethal in areas)",
                    "Hallway Width": "0.8m to 1.5m (Cramped)",
                    "Viscous Fluid Pools": "Frequent (Oil/Tar)",
                    "Entity Spawn Rate": "Moderate (Smilers, Clumps)"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.0",
                    "Local Time Flow Rate": "Standard Linear",
                    "Memory Degradation": "Baseline"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "88.0 H (Minor Flux)",
                    "Euclidean Consistency": "60.0% (Long, impossible corridors)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "38.0 °C (Oppressive)",
                    "Relative Humidity": "95% (Suffocating)",
                    "Chemical Odor Profile": "Burning Oil, Iron, Sulfur"
                },
                "Survival & Infrastructure": {
                    "Base Threat Level": "2",
                    "Sanity Drain Rate": "-1% per Hour",
                    "Rescue Probability": "Low"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 2 mainly consists of dark, grey, concrete maintenance tunnels, stretching on for millions of miles. The walls are lined with pipes and occasionally ventilation ducts.</p>
                </div>
                <h3>Description</h3>
                <p>Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with pipes lining the walls. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). Explorers will find the heat oppressive, and the constant hum of machinery overwhelming.</p>
                <p>Entities are far more common here. Smilers lurk in the unlit stretches of the maintenance tunnels, and Clumps make their homes within the ventilation shafts and darker corners. The physical layout of Level 2 is linear but highly inconsistent, meaning corridors can stretch for miles without intersecting, only to abruptly loop back onto themselves.</p>
                <p>Occasionally, doors can be found along the walls. The vast majority of these doors are locked, but those that are open can lead to small, closet-like rooms containing machinery, or act as transitions to Level 3.</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500">
                        <h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-thermometer-hot"></i> 1. Heat Stroke Prevention</h4>
                        <p class="mb-2">The ambient temperature in Level 2 will rapidly dehydrate wanderers. Remove heavy clothing, and drink Almond Water consistently. Do NOT lean against the pipes.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-eye"></i> 2. Smiler Evasion</h4>
                        <p class="mb-2">If you spot a Smiler (glowing eyes and teeth in the dark), do not use a flashlight. Maintain eye contact, walk backward slowly. If it charges, throw your light source in the opposite direction and run.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">JANUARY 10, 2021</div>
                        <h4 class="text-white font-bold text-lg mb-2">First Recorded Encounter with Clumps</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">A wanderer traversing a notably hot section of Level 2 records an amalgamation of human limbs dropping from an overhead vent. This marks the first entry of 'Clumps' into the database.</p>
                    </div>
                </div>
            `,
            resonanceScan: `<div class="flex flex-col gap-4"><h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3><button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button><div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div></div>`
        },

        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            tags: [
                { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" },
                { label: "DANGEROUS", class: "bg-red-500/10 text-red-500 border-red-500/30" },
                { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            
            mapConfig: {
                seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111',
                pois: [
                    { name: "High Voltage Box (Lethal)", color: "#fbbf24", icon: "⚡" },
                    { name: "Hound Pack Scent Area", color: "#dc2626", icon: "🐾" },
                    { name: "Elevator (To Level 4)", color: "#3b82f6", icon: "↕" }
                ]
            },

            specificMetrics: {
                "Level 3 Specific (Proprietary)": {
                    "Ambient Voltage Level": "10,000V (Exposed)",
                    "Acoustic Hazard Level": "Deafening (Machinery)",
                    "Entity Density Rate": "Extreme (Class 4)",
                    "Copper Wire Permeation": "98% Coverage"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.0",
                    "Local Time Flow Rate": "Standard Linear",
                    "Memory Degradation": "Baseline"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "70.0 H (Unstable)",
                    "Euclidean Consistency": "40.0% (Labyrinthine)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "25.0 °C",
                    "Relative Humidity": "40%",
                    "Chemical Odor Profile": "Ozone, Copper, Rot"
                },
                "Survival & Infrastructure": {
                    "Base Threat Level": "4",
                    "Sanity Drain Rate": "-3% per Hour",
                    "Rescue Probability": "Near Zero"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 3 is a series of long, dark, twisting hallways that work similarly to Level 0. They all consist of segmented rooms, resembling a prison complex or an electrical station.</p>
                </div>
                <h3>Description</h3>
                <p>Level 3 is one of the most dangerous early levels in the Backrooms. It shares visual similarities with Level 2, but the environment is significantly darker, and the architecture consists of exposed copper pipes, iron bars, and large electrical generators. The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible.</p>
                <p>The entity density in Level 3 is extraordinarily high. Hounds, Facelings, Wretches, Skin-Stealers, and Smilers are abundant. Wanderers entering Level 3 are advised to move as quickly and quietly as possible, though the latter is difficult given the debris and metal grating that cover the floors.</p>
                <p>Due to the massive electrical grid, exposed live wires are common. Accidentally brushing against the walls in the dark can result in instant electrocution. Despite the immense danger, Level 3 is rich in resources like Fire Salt, Royal Rations, and Almond Water, leading some desperate scavengers to risk their lives here.</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500">
                        <h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-skull"></i> 1. High Entity Density Protocol</h4>
                        <p class="mb-2">Do not attempt to fight. You are outnumbered. Use the loud machinery to mask your footsteps. If a Hound pack acquires your scent, seek a chain-link fenced area and lock the gate immediately.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                        <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-lightning"></i> 2. Electrocution Hazard</h4>
                        <p class="mb-2">Stay in the exact center of the hallways. Do not touch the walls. Do not touch puddles near sparking wires.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">MARCH 5, 2021</div>
                        <h4 class="text-white font-bold text-lg mb-2">Base Gamma Overrun</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">The M.E.G. attempts to set up Base Gamma to harvest the abundant resources in Level 3. Within 72 hours, an unprecedented swarm of Skin-Stealers and Hounds breaks the perimeter. The base is abandoned. No further official outposts have been attempted.</p>
                    </div>
                </div>
            `,
            resonanceScan: `<div class="flex flex-col gap-4"><h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3><button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button><div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div></div>`
        },

        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            
            mapConfig: {
                seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc',
                pois: [
                    { name: "Water Cooler (Almond Water)", color: "#3b82f6", icon: "🚰" },
                    { name: "Vending Machine", color: "#10b981", icon: "🍫" },
                    { name: "M.E.G. Sector Control", color: "#22c55e", icon: "🛡" },
                    { name: "Window (Do Not Look)", color: "#000000", icon: "🪟" }
                ]
            },

            specificMetrics: {
                "Level 4 Specific (Proprietary)": {
                    "Cubicle Density": "75%",
                    "Carpet Cleanliness": "Pristine",
                    "Window Occurrence Rate": "Low (DANGER)",
                    "Almond Water Respawn": "High (Water Coolers)"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.0",
                    "Local Time Flow Rate": "Standard Linear",
                    "Memory Degradation": "Baseline"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "100.0 H (Perfectly Stable)",
                    "Euclidean Consistency": "99.0% (Linear Office Space)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "21.0 °C (Air Conditioned)",
                    "Relative Humidity": "45%",
                    "Chemical Odor Profile": "Clean Linen, Rain, Coffee"
                },
                "Survival & Infrastructure": {
                    "Base Threat Level": "0.5",
                    "Sanity Drain Rate": "+1% per Hour (Restorative)",
                    "Rescue Probability": "High"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 4 resembles an empty office building. It is devoid of furniture save for the occasional water cooler or desk, and is completely safe.</p>
                </div>
                <h3>Description</h3>
                <p>Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. There is no hum-buzz like in Level 0; instead, the level is accompanied by the soft, soothing hum of air conditioning or occasionally faint, muffled sounds of rain.</p>
                <p>This level is a sanctuary for wanderers. Entities are almost completely nonexistent here, with the notable exception of Windows—anomalous entities that disguise themselves as glass windows leading to a dark exterior. If a wanderer approaches a Window, a shadowy figure will attempt to pull them in.</p>
                <p>Scattered throughout Level 4 are water coolers that dispense pure Almond Water, and vending machines containing safe, edible snacks. Because of its safety and resources, the M.E.G. and other prominent groups have established massive bases and trade hubs here.</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500">
                        <h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-bed"></i> 1. Rest and Resupply</h4>
                        <p class="mb-2">Level 4 is the ideal place to recover sanity, heal wounds, and gather supplies. Take advantage of the safety to plan your next moves.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-warning"></i> 2. The Window Threat</h4>
                        <p class="mb-2">Despite the overall safety, <strong>Windows</strong> are a lethal threat. If you see a window showing a starry night or absolute pitch black, look away immediately and walk in the opposite direction.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">NOVEMBER 11, 2021</div>
                        <h4 class="text-white font-bold text-lg mb-2">Establishment of M.E.G. Base Omega</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">M.E.G. successfully relocates their primary civilian housing and data centers to Level 4. It becomes the unofficial "capital" of the known Backrooms.</p>
                    </div>
                </div>
            `,
            resonanceScan: `<div class="flex flex-col gap-4"><h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3><button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button><div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div></div>`
        },

        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            tags: [
                { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "UNSAFE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "PSYCHOLOGICAL HAZARD", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDUxYTAzIi8+PHBhdGggZD0iTTAgMEwxMiAxMk0xMiAwTDAgMTIiIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            
            mapConfig: {
                seed: 50401, wallDensity: 0.7, renderStyle: 'diagonal', gridSize: 8, poiChance: 0.03, wallColor: '#b45309', gridColor: 'rgba(217, 119, 6, 0.1)', wallThickness: 0.2, bgColor: '#291001',
                pois: [
                    { name: "Beverly Room (Safe Zone)", color: "#10b981", icon: "🍸" },
                    { name: "Deathmoth Hive", color: "#f59e0b", icon: "🦋" },
                    { name: "Boiler Room Descent", color: "#dc2626", icon: "🔥" }
                ]
            },

            specificMetrics: {
                "Level 5 Specific (Proprietary)": {
                    "Wallpaper Toxicity": "Trace Arsenic/Gold Leaf",
                    "Jazz Music Loop Duration": "3.4 Hours (1920s Big Band)",
                    "Deathmoth Population": "High (Male and Female)",
                    "Architectural Style": "1930s Art Deco"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.0",
                    "Local Time Flow Rate": "Psychological Time Dilation",
                    "Memory Degradation": "+15% (Auditory triggers)"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "85.0 H",
                    "Euclidean Consistency": "70.0% (Hallways loop infinitely)"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "23.0 °C",
                    "Relative Humidity": "30%",
                    "Chemical Odor Profile": "Mahogany, Old Perfume, Dust"
                },
                "Survival & Infrastructure": {
                    "Base Threat Level": "2",
                    "Sanity Drain Rate": "-2% per Hour (Paranoia)",
                    "Rescue Probability": "Moderate"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 5 is an infinite hotel complex constructed in early 20th-century Art Deco architecture. The sound of faint, looping jazz music can be heard everywhere.</p>
                </div>
                <h3>Description</h3>
                <p>Level 5 takes on the appearance of a lavishly decorated, yet completely abandoned, 1930s hotel. Ornate mahogany doors, detailed gold-leaf wallpaper, and plush red carpets cover the endless hallways. Much of the level is pristine, though wanderers report an overarching feeling of being watched, leading to severe paranoia if isolated for too long.</p>
                <p>The primary entity threat in Level 5 comes from Deathmoths. The level is considered the central hive for these creatures. Male Deathmoths are completely harmless, but the giant Female Deathmoths are aggressive and highly dangerous. They are attracted to the ornate brass wall sconces that provide the level's lighting.</p>
                <p>There are three main areas in Level 5: The Main Hotel, The Beverly Room (a massive ballroom often used as a safe trading hub), and The Boiler Room (a searingly hot, rusty labyrinth underneath the hotel where Clumps reside).</p>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500">
                        <h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-bug"></i> 1. Deathmoth Avoidance</h4>
                        <p class="mb-2">Avoid areas with broken or heavily flickering wall sconces; this indicates a female Deathmoth has claimed it as territory. Do not use your own flashlights unless necessary, as they will swarm you.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500">
                        <h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-ear"></i> 2. The Jazz Loop Paranoia</h4>
                        <p class="mb-2">The faint jazz music that constantly plays has cognitohazardous effects over time. It induces paranoia and the sensation of being stalked. Use earplugs if you begin to feel severe anxiety.</p>
                    </div>
                </div>
            `,

            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div>
                        <div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">DECEMBER 1, 2021</div>
                        <h4 class="text-white font-bold text-lg mb-2">The Beverly Room Treaty</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">Various factions within the Backrooms, including the M.E.G. and the B.N.T.G., establish a neutral trading hub within the Beverly Room of Level 5, solidifying it as a cornerstone of civilized survival in the Backrooms.</p>
                    </div>
                </div>
            `,
            resonanceScan: `<div class="flex flex-col gap-4"><h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3><button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button><div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div></div>`
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "1", title: "Entity 1", name: "The Cameraman",
            tags: [
                { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" },
                { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
                { label: "THEORETICAL", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Unknown (Omnipresent)",
                    "Current Locations": "All Levels (Theorized)",
                    "Photographic Resolution Avg": "4K+ Equivalent",
                    "Flash Lumens Generated": "0 (No light detected)",
                    "Detection Evasion Rate": "100%"
                }
            },
            
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="w-32 h-32 rounded-full border-2 border-purple-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast">
                            <div class="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin-slow"></div>
                            <i class="ph ph-ghost text-6xl text-purple-400 opacity-80"></i>
                        </div>
                        <h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3>
                        <p class="text-xs text-purple-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p>
                    </div>
                </div>
            `,

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5 border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r">
                    <p class="text-sm text-yellow-200 font-mono"><strong>NOTICE:</strong> This document is pending revision following a recent alteration in the expected behavior of this phenomenon.</p>
                </div>
                <h3>Description</h3>
                <p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms. The process by which these photos are captured is unknown, and evidence of The Cameraman has yet to be proven; however, its existence could serve as an explanation for the mysterious phenomenon of images appearing in level entries instantaneously after their submission into the Database.</p>
                <p>The physical characteristics of the entity remain mysterious, as it is believed to either avoid being seen or does not have a physical form altogether.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-info"></i> Non-Intervention Protocol</h4><p class="mb-2 text-sm text-gray-300">The Cameraman is classified as a Non-Hostile asset. Wanderer engagement is strictly prohibited. If you locate a camera, film roll, or tripod that you did not bring with you, do not touch it.</p></div>`,
            history: `
                <div class="space-y-6"><div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm"><div class="border-b border-white/10 pb-4 mb-4 text-liminal-muted"><p><strong>From:</strong> rhollinwell@kro.net</p><p><strong>To:</strong> dfuller@kro.net</p><p class="mt-2 text-white"><strong>Subject: Cessation of Anonymous Uploads</strong></p></div><div class="space-y-4 text-gray-300"><p>Greetings,</p><p>I hope this message finds you well. It is with minor concern that I report a sudden and perplexing change in the phenomenon of The Cameraman and its theorized activity. The continual and inexplicable addition of new images to the Database has, for lack of a better word, stopped entirely.</p></div></div></div>
            `
        },

        "entity2": {
            type: "entity", id: "2", title: "Entity 2", name: "Windows",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Level 188 (Notably)",
                    "Cognitohazard Pull": "Moderate (Enticing sight)",
                    "Physical Composition": "Shadow/Void entity",
                    "Target Preference": "Isolated wanderers"
                }
            },
            
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair">
                    <div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                        <div class="absolute top-1/2 left-0 w-full h-2 bg-gray-800 transform -translate-y-1/2 z-20"></div>
                        <div class="absolute top-0 left-1/2 w-2 h-full bg-gray-800 transform -translate-x-1/2 z-20"></div>
                        <div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0"></div>
                        <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-40 bg-black rounded-t-full opacity-0 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 z-10 blur-[1px]"></div>
                        <div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity">
                            <span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20">INTERACT TO SIMULATE</span>
                        </div>
                    </div>
                </div>
            `,

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Windows are entities that take the form of typical glass windows. They are traps designed to lure wanderers to their deaths.</p>
                </div>
                <h3>Description</h3>
                <p>Entity 2, more commonly known as "Windows", are creatures that disguise themselves as architectural features—specifically windows. The window frames are always closed, and looking through the glass will show a void of pitch black, or occasionally, a false image of the outside world, or another level. Behind the glass, a dark, humanoid shadow figure resides.</p>
                <p>When a wanderer approaches a Window, the entity inside will wait until the victim is within arm's reach. The entity will then burst through the glass (which shatters like normal glass but leaves no debris) and violently pull the wanderer inside. The space behind a Window is considered to be a void or a pocket dimension; no wanderer pulled into a Window has ever returned.</p>
                <p>Windows are most commonly found in Levels 1, 2, and 4, but are notoriously the main hazard in Level 188 (The Courtyard of Windows).</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-warning"></i> Evasion Protocol</h4><p class="mb-2 text-sm text-gray-300">If you see a window in a level where there should not be windows, do not approach it. Do not attempt to break the glass. Keep a minimum distance of 5 meters.</p></div>`,
            history: `
                <div class="space-y-6"><div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm"><p class="text-gray-300">"I saw a window in the office. It was showing a starry night. I haven't seen the stars in years. I walked up to it, pressed my hand against the glass. The stars weren't stars. They were eyes. The glass vanished and a hand grabbed my wrist. I only survived because my backpack snagged on a cubicle wall. The strength was inhuman." - Survivor Log</p></div></div>
            `
        },

        "entity3": {
            type: "entity", id: "3", title: "Entity 3", name: "Smilers",
            tags: [
                { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" },
                { label: "LIGHT SENSITIVE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgMkg0TTYgMkg4TTMgOEg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Unknown",
                    "Habitat": "Unlit / Dark zones",
                    "Bioluminescence": "High (Face only)",
                    "Physical Form": "Unknown / Unseen"
                }
            },
            
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#000] overflow-hidden border-b border-liminal-border cursor-none" id="smiler-container">
                    <div class="text-[8px] absolute top-2 left-2 text-liminal-muted font-mono z-20">MOVE CURSOR TO ILLUMINATE</div>
                    <div class="absolute inset-0 bg-black z-10 pointer-events-none" style="background: radial-gradient(circle 80px at var(--x, 50%) var(--y, 50%), transparent 0%, #000 100%);" id="flashlight-mask"></div>
                    
                    <div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-1000 ease-out" style="left: 60%; top: 40%;">
                        <div class="flex gap-4">
                            <div class="w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_10px_#fff]"></div>
                            <div class="w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_10px_#fff]"></div>
                        </div>
                        <svg width="40" height="20" viewBox="0 0 40 20" class="mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
                            <path d="M 0 5 Q 20 20 40 5 L 35 15 Q 20 25 5 15 Z" fill="white" class="animate-pulse" />
                        </svg>
                    </div>
                    
                    <script>
                        const cont = document.getElementById('smiler-container');
                        const mask = document.getElementById('flashlight-mask');
                        if(cont && mask) {
                            cont.addEventListener('mousemove', (e) => {
                                const rect = cont.getBoundingClientRect();
                                mask.style.setProperty('--x', (e.clientX - rect.left) + 'px');
                                mask.style.setProperty('--y', (e.clientY - rect.top) + 'px');
                            });
                        }
                    </script>
                </div>
            `,

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Smilers are highly aggressive entities known for their glowing white eyes and teeth that manifest in pitch darkness.</p>
                </div>
                <h3>Description</h3>
                <p>Entity 3, the Smilers, are generally hostile entities that reside in the dark areas of various levels. They are recognizable by their signature glowing white eyes and a wide, toothy grin. No one has ever survived seeing the physical body of a Smiler, if they even possess one outside of their facial features.</p>
                <p>Smilers are attracted to light. If a wanderer enters a dark room and turns on a flashlight, a Smiler may immediately lock onto the source. They are incredibly fast in the dark but seemingly cannot enter well-lit areas. The leading theory suggests that light physically damages their unseen bodies, or causes them to dematerialize.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-run"></i> Flashlight Decoy Protocol</h4><p class="mb-2 text-sm text-gray-300">If you see a Smiler, maintain eye contact. Turn off your light source if they haven't noticed you. If they begin to charge, throw your flashlight in the opposite direction and run into a lit area.</p></div>`,
            history: `
                <div class="space-y-6"><div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm"><p class="text-gray-300">Entity designated as Class 3 Hazard by the M.E.G. Due to the high mortality rate of encounters, capturing one alive has proven impossible.</p></div></div>
            `
        },

        "entity4": {
            type: "entity", id: "4", title: "Entity 4", name: "Deathmoths",
            tags: [
                { label: "VARIABLE HOSTILITY", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "HIVE MIND", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmEyYTIwIi8+PHBhdGggZD0iTTUgMEwyIDVINSBMOCA1WiIgZmlsbD0iI2I4YjgzZSIvPjwvc3ZnPg==",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Level 5 (Hive)",
                    "Wingspan (Male)": "0.1m - 0.3m",
                    "Wingspan (Female)": "1.5m - 2.5m",
                    "Diet": "Unknown / Organic Matter"
                }
            },
            
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border">
                    <div class="absolute inset-0 bg-green-900/10"></div>
                    <div class="absolute inset-0" style="background-image: radial-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <div class="w-64 h-64 border border-green-500/50 rounded-full relative overflow-hidden">
                        <div class="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tr from-green-500/40 to-transparent origin-top-left animate-spin-slow"></div>
                        <div class="absolute w-2 h-2 bg-green-400 rounded-full top-[30%] left-[60%] shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                        <div class="absolute w-1.5 h-1.5 bg-green-400 rounded-full top-[65%] left-[20%] shadow-[0_0_10px_#22c55e] animate-pulse" style="animation-delay: 0.5s"></div>
                        <div class="absolute w-3 h-3 bg-red-500 rounded-full top-[45%] left-[40%] shadow-[0_0_15px_#ef4444] animate-pulse" style="animation-delay: 1.2s"></div>
                    </div>
                    <div class="absolute bottom-2 left-2 text-[8px] font-mono text-green-400">SONAR TRACKING // WINGBEAT FREQUENCY DETECTED</div>
                </div>
            `,

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Deathmoths are giant moths that inhabit the Backrooms, split into harmless males and highly lethal females.</p>
                </div>
                <h3>Description</h3>
                <p>Entity 4, Deathmoths, are giant moths that can be found in a variety of levels, most notably Level 5. The male Deathmoths are relatively small (though still large by Frontrooms standards) and completely harmless. They are known to even land on wanderers without aggressive intent.</p>
                <p>Female Deathmoths are much larger, boasting wingspans of over 2 meters. They are extremely hostile and will spit a highly acidic substance at prey before swooping in to consume them. Like normal moths, both genders are highly attracted to light sources. A hive of Deathmoths, typically ruled by a "King" or "Queen" entity, completely controls certain sectors of Level 5.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-lightbulb-filament"></i> Light Discipline</h4><p class="mb-2 text-sm text-gray-300">If you hear a loud, rapid buzzing akin to a helicopter blade, immediately extinguish all light sources and drop to the floor. Female Deathmoths hunt entirely by light and motion.</p></div>`,
            history: `
                <div class="space-y-6"><div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm"><p class="text-gray-300">M.E.G. successfully utilized male Deathmoths to synthesize a mild healing salve, but harvesting them remains dangerous due to female proximity.</p></div></div>
            `
        },

        "entity5": {
            type: "entity", id: "5", title: "Entity 5", name: "Clumps",
            tags: [
                { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" },
                { label: "AMBUSH PREDATOR", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwyIDZMNCAxTDggN0wxMCAwIiBzdHJva2U9IiM1NTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Level 2 / Level 8",
                    "Mobility": "High (in vents)",
                    "Physical Composition": "Human limbs (Amalgamated)",
                    "Feeding Mechanism": "Assimilation"
                }
            },
            
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border">
                    <div class="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-red-900/10 mix-blend-color"></div>
                    <div class="relative w-48 h-48 border border-white/10 rounded bg-black overflow-hidden shadow-2xl">
                        <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 15px); z-index: 20;"></div>
                        <div class="absolute w-32 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-md z-10 animate-pulse" style="background: radial-gradient(circle, #ff0000 20%, #ffff00 60%, transparent 100%);"></div>
                        <div class="absolute w-16 h-10 top-1/4 left-1/3 transform blur-sm z-10 animate-pulse" style="animation-delay: 0.3s; background: radial-gradient(circle, #ff0000 20%, #ff8800 60%, transparent 100%);"></div>
                    </div>
                    <div class="absolute bottom-2 right-2 text-[8px] font-mono text-red-500 bg-black/80 px-2 py-1 rounded">THERMAL OPTICS // VENTILATION SHAFT</div>
                </div>
            `,

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Clumps are an amalgamation of arms, legs, and other human body parts bound together in a central mass. They lurk in cramped spaces to ambush prey.</p>
                </div>
                <h3>Description</h3>
                <p>Entity 5, the Clumps, are horrific creatures constructed entirely from human limbs. Their movement is highly erratic and disturbing to watch, resembling a spider walking on a dozen disjointed hands and feet. Due to their biology, they excel at climbing and squeezing into tight spaces.</p>
                <p>Clumps are ambush predators. They reside in ventilation shafts, drop ceilings, and large pipes (particularly in Level 2 and Level 8). They wait for a wanderer to walk underneath their hiding spot before dropping down and wrapping their numerous limbs around the victim. The assimilation process is rapid and unobservable.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-arrow-fat-line-down"></i> Overhead Awareness</h4><p class="mb-2 text-sm text-gray-300">Never walk directly under a loose ventilation grate or an unusually large pipe opening. If you hear a scuttling, fleshy sound above you, sprint immediately to open space.</p></div>`,
            history: `
                <div class="space-y-6"><div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm"><p class="text-gray-300">Biopsy reports from a deceased Clump indicate that the DNA of the limbs belongs to hundreds of missing wanderers. It is unknown if the Clump is born this way, or if it adds victims to its mass to grow.</p></div></div>
            `
        }
    }
};