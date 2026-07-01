// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
// ==========================================

const GlobalMetrics = [
    {
        category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400",
        data: {
            "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.00%",
            "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low",
            "Causality Integrity": "99.9%", "Temporal Echoes": "None detected", "Chronon Radiation": "Background",
            "Memory Degradation": "Baseline", "Aging Effect on Biology": "Normal", "Device Battery Drain": "Standard",
            "Historical Sedimentation": "Present", "Simultaneity Loss": "None", "Time Dilation Ratio (vs Frontrooms)": "1.000",
            "Temporal Drag Coefficient": "0.01 μs/m", "Causality Bleed Rate": "0.0001%", "Chronon Particulate Count": "4.2 ppm", "Paradox Tolerance Threshold": "Low"
        }
    },
    {
        category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400",
        data: {
            "Hume Level (Reality)": "100.0 H", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.9%",
            "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²",
            "Z-Axis Deviation": "0.00%", "Magnetic Declination": "Standard Earth", "Tesseract Folding": "None",
            "Quantum Superposition": "Collapsed", "Non-linear Corridors": "0%", "Collision Meshes": "Solid/Intact",
            "Coordinate Drift": "0m/hr", "Euclidean Warp Factor": "0.00 (Stable)", "Gravitational Shear": "0.0 m/s³",
            "Dimensional Permeability": "0.02%", "Tesseract Depth Index": "Level 1 (Surface)", "Absolute Void Proximity": ">1,000,000 AU"
        }
    },
    {
        category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400",
        data: {
            "Ambient Temp (Core)": "20.0 °C", "Temp Fluctuation (24h)": "±2.0 °C", "Relative Humidity": "40-60%",
            "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Air Comp: CO2": "0.04%", "Air Comp: N2": "78.0%",
            "Trace Anomalous Gases": "0%", "Particulate Matter": "Safe levels", "Ozone Level": "Normal",
            "Aerosolized Spores": "None", "Static Charge Density": "Neutral", "Breathability Index": "100%",
            "Background Rad-Count": "0.12 μSv/h", "Airborne Spatial Anomalies": "0 parts/Billion", "Chemical Odor Profile": "Sterile/Neutral",
            "Barometric Fluctuation Spike": "±0.1 kPa", "Xenon Gas Concentration": "Trace"
        }
    },
    {
        category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400",
        data: {
            "Ambient Hum": "None", "Acoustic Reverberation": "Standard", "Light Source Type": "Variable",
            "Luminosity Level": "Variable Lux", "Color Temperature": "Variable K", "Total Darkness Zones": "Possible",
            "Audio Hallucination Risk": "0%", "UV Radiation": "Sunlight-dependent", "Infrared Signature": "Normal",
            "Absolute Decibel Baseline": "30 dB", "Sub-sonic Interference": "None", "Echo Delay Variance": "Linear (0s)",
            "Auditory Mimicry Index": "0%", "Architectural Resonance Freq": "432 Hz"
        }
    },
    {
        category: "Material & Biological", icon: "ph-flask", color: "text-green-400",
        data: {
            "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Mold Spore Count": "Low",
            "Structural Integrity": "Variable", "Entity Density": "0.00", "Organic Decay Rate": "Standard",
            "Nutrient Availability": "High", "Dehydration Risk": "Normal", "Flora/Fauna Present": "Earth Standard",
            "Carpet/Floor Fluid Toxicity": "0%", "Wall Arsenic Saturation": "0 mg/m²", "Micro-Concrete Density": "2400 kg/m³",
            "Organic Assimilation Rate": "0%/hr", "Architectural Decay Sub-routine": "Dormant"
        }
    },
    {
        category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400",
        data: {
            "Base Threat Level": "0", "Sanity Drain Rate": "0%", "Isolation Factor": "Variable",
            "Radio Comm Integrity": "100%", "GPS Functionality": "Online", "Electrical Availability": "Variable",
            "Internet Access": "Available", "Rescue Probability": "High", "Resource Respawn Algorithm": "Null",
            "Shelter Viability Score": "90/100", "Navigation Difficulty": "Low", "Psychological Erosion Rate": "Baseline",
            "Entity Detection Range Requirement": "N/A"
        }
    }
];

const GlobalEntityMetrics = [
    {
        category: "Biological & Anatomical Makeup", icon: "ph-dna", color: "text-green-400",
        data: { "Cellular Structure": "Unknown", "Carbon Based": "Unverified", "Estimated Lifespan": "Infinite", "Physical Mass": "Variable", "Regeneration Factor": "N/A", "Ectoplasmic Output": "0.0 mg/L" }
    },
    {
        category: "Behavioral & Aggression Matrix", icon: "ph-brain", color: "text-red-400",
        data: { "Hostility Baseline": "Docile", "Sentience Level": "Unknown", "Target Preference": "None", "Pack Mentality": "Solitary", "Response to Provocation": "Flee", "Cognitohazard Output": "0%" }
    },
    {
        category: "Dimensional Interactions", icon: "ph-intersect", color: "text-purple-400",
        data: { "Noclip Capability": "Enabled", "Hume Disruption Radius": "0.0m", "Level Boundary Traversing": "Yes", "Temporal Phasing": "Unknown", "Gravity Resistance": "100%" }
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
// DATA STRUCTURE: LEVELS (0 to 10)
// ==========================================
const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, bgColor: "#1f1a04", wallColor: "#eab308",
                pois: [
                    { name: "Gateway to Level 1 (Garages)", color: "#9ca3af", icon: "⬇" }, { name: "Fragile Wall", color: "#ef4444", icon: "🔨" },
                    { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" }, { name: "Flickering T8 Fluorescent Cluster", color: "#fef08a", icon: "💡" },
                    { name: "Dead End (Topological Loop)", color: "#a8a29e", icon: "♾" }, { name: "Auditory Hallucination Epicenter", color: "#f97316", icon: "🔊" }
                ]
            },
            specificMetrics: {
                "Level 0 Specific (Proprietary)": { "Carpet Saturation Depth": "1.2cm (Avg)", "Wall Permeability Factor": "0.0001% (Noclip Resist)", "Fluorescent Flicker Sync": "Asynchronous (Patternless)", "Spatial Redundancy Ratio": "89.4% Identical Layouts", "Almond Water Trace Vol": "0.00001% per m²", "Acoustic Damping (Walls)": "95% Absorption" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.15", "Local Time Flow Rate": "Erratic", "Memory Degradation": "+12% Accelerated" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H", "Euclidean Consistency": "14.2% (Severe Non-linear)" },
                "Survival & Infrastructure": { "Sanity Drain Rate": "-2% per Hour", "Rescue Probability": "0.000001%" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p></div>
                <h3>Description</h3>
                <p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. All rooms in Level 0 share the same superficial features, with worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are the same, with each area differing significantly in shape and layout.</p>
                <p>The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. The buzz tends to induce throbbing migraines in most individuals, which persist for an extended period of time even after one has exited the level. As the level is devoid of hostile threats, the only danger that Level 0 poses is the evident lack of available resources, as many fall victim to dehydration, exhaustion, or starvation.</p>
                <p>Linear space and topology are significantly altered within Level 0, with it being possible to walk in a straight line, return to the starting point, and end up in a different set of rooms than one was in beforehand. Such properties cause the level to be extremely disorienting in layout, with research suggesting that the confusion may be the underlying cause of loss of mental stability among individuals.</p>
                <h3>Entities</h3>
                <p>Level 0 is canonically devoid of all life. Any and all reports detailing sightings of entities are likely the result of visual and auditory hallucinations induced by prolonged isolation and the hum-buzz.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-brain"></i> 1. Psychological Anchoring</h4>
                        <p class="mb-2">The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours of isolation.</p>
                        <p class="bg-purple-900/20 p-3 rounded text-purple-200 border border-purple-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Carry a mechanical watch. The ticking overrides the hum-buzz.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                        <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-drop"></i> 2. Hydration Protocols</h4>
                        <p class="mb-2">The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies. Do not boil it; heating it produces neurotoxins.</p>
                    </div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500">
                        <h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-compass"></i> 3. Navigation</h4>
                        <p class="mb-2">Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless. Employ the "Right-Hand Rule" hugging the right wall to prevent walking in open circles and increase the chance of hitting a boundary wall.</p>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-primary rounded-full"></div></div><div class="text-[10px] text-liminal-primary mb-1 font-mono bg-liminal-primary/10 inline-block px-2 py-0.5 rounded">MAY 12, 2019</div><h4 class="text-white font-bold text-lg mb-2">Initial Archival Image Captured</h4><p class="text-sm text-liminal-muted leading-relaxed">An anonymous 4chan user uploads the first verified visual telemetry of Level 0. Liminality Corp rapidly acquires the raw digital file.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">OCTOBER 4, 2020</div><h4 class="text-white font-bold text-lg mb-2">Project "Yellow Wallpaper" Initiated</h4><p class="text-sm text-liminal-muted leading-relaxed">The first batch of unmanned, tungsten-shielded probes are sent via induced noclip events using a rudimentary particle accelerator setup.</p></div>
                </div>
            `,
            resonanceScan: `
                <div class="flex flex-col gap-4">
                    <h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3>
                    <button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN</button>
                    <div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto"><div id="scan-terminal-content" class="space-y-1"></div></div>
                </div>
            `
        },
        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "HABITABLE", class: "bg-teal-500/10 text-teal-400 border-teal-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiM2NjYiLz48L3N2Zz4=",
            mapConfig: {
                seed: 849200, wallDensity: 0.45, gridSize: 6, poiChance: 0.02, bgColor: "#111", wallColor: "#666", gridOpacity: 0.1,
                zones: [ { x: -50, y: -50, w: 100, h: 40, color: "rgba(100,100,120,0.2)", label: "Concrete Warehouse Area", z: 0 } ],
                pois: [ { name: "Supply Crate (M.E.G.)", color: "#22c55e", icon: "📦" }, { name: "Puddle of Almond Water", color: "#3b82f6", icon: "💧" }, { name: "Elevator to Level 2", color: "#dc2626", icon: "🚪" } ]
            },
            specificMetrics: {
                "Level 1 Specific": { "Concrete Density": "Standard", "Fluorescent Flicker": "Occasional", "Water Puddle Toxicity": "0% (Potable)", "M.E.G. Outpost Proximity": "High" },
                "Survival & Infrastructure": { "Base Threat Level": "1", "Resource Respawn Algorithm": "Active", "Shelter Viability Score": "95/100" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and low-hanging fog.</p></div>
                <h3>Description</h3>
                <p>Level 1 is a massive, sprawling warehouse with concrete floors and walls, exposed rebar, dim fluorescent lights, and a low-hanging fog with no discernible source. The fog often coalesces into condensation, forming puddles on the floor in inconsistent locations. Unlike Level 0, this level possesses a consistent supply of water and electricity, which allows infinite habitation by wanderers.</p>
                <p>Crates appear and disappear randomly within the level, containing a mixture of vital items (Almond Water, batteries, rations) and useless items (used syringes, burnt paper, live mice). Entities are present, most notably Hounds, Dullers, and Facelings, but they rarely attack if unprovoked or if light levels are maintained.</p>
                <h3>Entities</h3>
                <p>Dullers, Hounds, Facelings, and Scratchers inhabit the darker areas of Level 1. Staying in well-lit zones significantly reduces encounter rates.</p>
            `,
            survivalGuide: `<div class="space-y-6 text-sm text-liminal-text"><div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg"><i class="ph ph-package"></i> Foraging</h4><p>Crates are your lifeline. Open them cautiously, as some contain dangerous biological matter.</p></div></div>`,
            history: `<div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4"><div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">AUG 2021</div><h4 class="text-white font-bold text-lg mb-2">M.E.G. Base Alpha Established</h4><p class="text-sm text-liminal-muted leading-relaxed">The Major Explorer Group established their primary hub here due to the stable geometry and resource respawns.</p></div></div>`,
            resonanceScan: `<div class="flex flex-col gap-4"><button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button></div>`
        },
        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "UNSAFE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmExYTEwIi8+PHBhdGggZD0iTTAgNUwxMCA1IiBzdHJva2U9IiM4YTI1MTgiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 11993, wallDensity: 0.75, gridSize: 4, poiChance: 0.01, bgColor: "#1a0f0f", wallColor: "#7f1d1d", gridOpacity: 0.05,
                pois: [ { name: "Scalding Steam Vent", color: "#ef4444", icon: "♨️" }, { name: "Locked Fire Door", color: "#9ca3af", icon: "🚪" } ]
            },
            specificMetrics: { "Atmospheric Diagnostics": { "Ambient Temp (Core)": "43.0 °C (Hazardous)", "Relative Humidity": "95%", "Chemical Odor Profile": "Machine Oil / Rust" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 2 consists mainly of dark, grey, concrete maintenance tunnels.</p></div>
                <h3>Description</h3>
                <p>Level 2 is vastly composed of long, dimly lit concrete maintenance tunnels lined with pipes. The temperature in Level 2 is intensely hot, often reaching 43 °C (110 °F) or higher, largely due to the scalding fluid moving through the pipes. The level is highly claustrophobic.</p>
                <p>Entities are far more common here than in Level 1. Smilers lurk in the dark stretches of the tunnels. Wanderers must continuously move to avoid being cornered by entities or succumbing to heatstroke.</p>
            `,
            survivalGuide: `<div class="space-y-6"><div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-thermometer-hot"></i> Heat Mitigation</h4><p>Strip non-essential clothing. The primary cause of death is hyperthermia, not entities.</p></div></div>`,
            history: `<div class="text-sm text-liminal-muted">Historically used as a transit route, but abandoned due to rising ambient temperatures in late 2023.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "DANGEROUS", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTEyIi8+PHBhdGggZD0iTTAgMEw1IDEwTDEwIDAiIHN0cm9rZT0iIzU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 5543, wallDensity: 0.8, gridSize: 4, poiChance: 0.05, bgColor: "#050505", wallColor: "#333", pois: [ { name: "High Voltage Box", color: "#eab308", icon: "⚡" }, { name: "Hound Pack", color: "#ef4444", icon: "🐺" } ] },
            specificMetrics: { "Acoustic & Luminescent": { "Ambient Hum": "120 dB (Deafening)", "Total Darkness Zones": "70% of Map" }, "Survival & Infrastructure": { "Entity Detection Range Requirement": "Crucial", "Sanity Drain Rate": "High" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">A sprawling complex of dark, incredibly loud electrical stations and narrow hallways.</p></div>
                <h3>Description</h3>
                <p>Level 3 is notoriously dangerous. The ambient noise of massive generators operates at deafening levels. The hallways randomly intersect with prison-like bars and heavy metal doors. The entity count is extremely high, making navigation without weaponry or stealth gear effectively a death sentence.</p>
                <p>Wi-Fi is surprisingly strong here, often acting as a trap to keep wanderers distracted by their devices while entities approach.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-warning"></i> DO NOT LINGER</h4><p>Move constantly. If you stop to use the Wi-Fi, you will be ambushed by Hounds or Smilers.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Site of the infamous "Blackout Massacre" where a M.E.G. squad was wiped out by a rogue generator explosion and subsequent Smiler swarm.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgNUwxMCA1IiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.3, gridSize: 6, poiChance: 0.02, bgColor: "#d6d3d1", wallColor: "#78716c", pois: [ { name: "Water Cooler (Almond Water)", color: "#3b82f6", icon: "💧" }, { name: "Vending Machine", color: "#22c55e", icon: "🍫" } ] },
            specificMetrics: { "Material & Biological": { "Entity Density": "0.01 (Very Low)", "Nutrient Availability": "Very High" }, "Survival & Infrastructure": { "Shelter Viability Score": "99/100" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An infinite, empty office building devoid of furniture but rich in resources.</p></div>
                <h3>Description</h3>
                <p>Level 4 resembles an empty office building. It is mostly devoid of furniture, though water coolers and vending machines are abundant and restock autonomously. Windows are present, but attempting to break them reveals they look out into a solid white void. It is widely considered one of the safest levels in the Backrooms, acting as a major hub.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3"><i class="ph ph-tent"></i> Camp Setup</h4><p>This is the ideal level to rest, heal, and stockpile Almond Water before descending deeper.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Currently houses M.E.G. Base Omega and multiple trade outposts.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNDUxYTAzIi8+PHBhdGggZD0iTTAgMEwxMCAxME0xMCAwTDAgMTAiIHN0cm9rZT0iI2I0NTMwOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { 
                seed: 1221, wallDensity: 0.5, gridSize: 5, poiChance: 0.03, bgColor: "#291616", wallColor: "#7c2d12",
                zones: [ { x: -30, y: -30, w: 60, h: 60, color: "rgba(180, 83, 9, 0.2)", label: "The Beverly Room", z: 0 } ],
                pois: [ { name: "Deathmoth Hive", color: "#ef4444", icon: "🦋" }, { name: "Elevator", color: "#9ca3af", icon: "🛗" } ] 
            },
            specificMetrics: { "Acoustic & Luminescent": { "Ambient Hum": "Jazz Music (Muffled)", "Audio Hallucination Risk": "Moderate" }, "Material & Biological": { "Entity Density": "Moderate (Deathmoths)" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An infinite hotel complex decorated in the style of the early 1930s.</p></div>
                <h3>Description</h3>
                <p>Level 5 is an infinite hotel. The architecture is grand but degrading. Hallways are lined with opulent wallpaper and antique furniture. The primary threat here is the massive infestation of Deathmoths, particularly in the Boiler Room areas. The "Beverly Room" serves as a relatively safe hub area.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3"><i class="ph ph-warning"></i> Avoid the Boiler Room</h4><p>Deathmoths use the intense heat of the boiler areas to breed. Do not enter without extreme thermal protection.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Explored extensively in 2021. The Beverly Room was secured by a rogue faction of wanderers.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level6": {
            type: "level", id: "level6", title: "Level 6", name: "Lights Out",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "PITCH BLACK", class: "bg-black text-white border-white/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PC9zdmc+",
            mapConfig: { seed: 666, wallDensity: 0.9, gridSize: 4, poiChance: 0.005, bgColor: "#000", wallColor: "#111", gridOpacity: 0.01, pois: [ { name: "Unknown Entity", color: "#ef4444", icon: "👁️" } ] },
            specificMetrics: { "Acoustic & Luminescent": { "Total Darkness Zones": "100%", "Luminosity Level": "0 Lux (Absolute)" }, "Survival & Infrastructure": { "Sanity Drain Rate": "Extreme" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An expanse of complete and utter darkness.</p></div>
                <h3>Description</h3>
                <p>Level 6 is completely devoid of light. No light source brought into the level can illuminate more than a few inches. The layout is believed to be composed of tight metallic corridors, but mapping is impossible. Wanderers report intense auditory hallucinations and the sensation of being breathed on.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-eye-slash"></i> Blind Navigation</h4><p>Keep one hand on the wall. Do not trust your eyes or ears.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Many have entered Level 6. Very few have successfully exited to Level 7.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level7": {
            type: "level", id: "level7", title: "Level 7", name: "Thalassophobia",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "SUBMERGED", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDYxOTI5Ii8+PHBhdGggZD0iTTAgNUwxMCA1IiBzdHJva2U9IiMxZDNhOGEiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+",
            mapConfig: { 
                seed: 777, wallDensity: 0.1, gridSize: 10, poiChance: 0.01, bgColor: "#020617", wallColor: "#1e3a8a",
                zones: [ { x: -200, y: -200, w: 400, h: 400, color: "rgba(29, 78, 216, 0.1)", label: "Endless Ocean", z: 0 }, { x: -10, y: -10, w: 20, h: 20, color: "rgba(100, 116, 139, 0.8)", label: "The Room", z: 0 } ],
                pois: [ { name: "The Thing on Level 7", color: "#ef4444", icon: "🦈" } ] 
            },
            specificMetrics: { "Atmospheric Diagnostics": { "Breathability Index": "0% (Underwater)", "Ambient Temp (Core)": "4 °C (Freezing)" }, "Survival & Infrastructure": { "Navigation Difficulty": "Extreme" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An impossibly vast, pitch-black ocean existing below a single flooded living room.</p></div>
                <h3>Description</h3>
                <p>Level 7 begins in a flooded, modern living room. The floor gives way to an impossibly deep, freezing ocean. The water is entirely devoid of normal marine life. The only known inhabitant is a massive, leviathan-class entity known as 'The Thing on Level 7'.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3"><i class="ph ph-waves"></i> Drowning Hazard</h4><p>Do not enter the water unless you possess anomalous breathing apparatus or are actively being hunted in the starting room.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Exploration of the ocean floor has proven physically impossible due to anomalous pressure.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level8": {
            type: "level", id: "level8", title: "Level 8", name: "Cave System",
            tags: [ { label: "CLASS 5", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "ENTITY INFESTATION", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWMyMDFiIi8+PHBhdGggZD0iTTAgMEw1IDEwTDEwIDAiIHN0cm9rZT0iIzI5MjUyNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 888, wallDensity: 0.6, gridSize: 5, poiChance: 0.04, bgColor: "#111", wallColor: "#451a03", pois: [ { name: "Arachnid Nest", color: "#ef4444", icon: "🕷️" }, { name: "Almond Water Spring", color: "#3b82f6", icon: "💧" } ] },
            specificMetrics: { "Material & Biological": { "Entity Density": "Severe", "Flora/Fauna Present": "Anomalous Arachnids" }, "Atmospheric Diagnostics": { "Relative Humidity": "100% (Dripping)" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An immense network of dark, damp, entity-infested caverns.</p></div>
                <h3>Description</h3>
                <p>Level 8 is made of highly dangerous, intertwining cave systems. The primary threat is the massive population of entities, specifically giant anomalous spiders, Rattlers, and Camouflage Crawlers. The terrain is treacherous, with sudden drop-offs and jagged stalactites.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-skull"></i> Extreme Caution</h4><p>Loud noises will echo and attract swarms. Proceed with absolute silence.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Many wanderers mapping this level have never returned. M.E.G. strictly advises against entry.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level9": {
            type: "level", id: "level9", title: "Level 9", name: "Darkened Suburbs",
            tags: [ { label: "CLASS 5", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "OUTDOORS", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgNUwxMCA1IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIi8+PC9zdmc+",
            mapConfig: { 
                seed: 999, wallDensity: 0.2, gridSize: 10, poiChance: 0.02, bgColor: "#050505", wallColor: "#333", gridOpacity: 0.05,
                zones: [ { x: -100, y: -10, w: 200, h: 20, color: "rgba(30, 30, 30, 0.5)", label: "Asphalt Street", z: 0 } ],
                pois: [ { name: "Neighborhood Watch (Entity)", color: "#ef4444", icon: "👁️" }, { name: "Lit House", color: "#eab308", icon: "🏠" } ] 
            },
            specificMetrics: { "Atmospheric Diagnostics": { "Ambient Temp (Core)": "10 °C", "Ozone Level": "High (Smell of Rain)" }, "Survival & Infrastructure": { "Shelter Viability Score": "0/100 (Houses are Traps)" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An infinite suburban neighborhood stuck in perpetual midnight.</p></div>
                <h3>Description</h3>
                <p>Level 9 resembles an endless American suburb at midnight. The houses are devoid of furniture and usually completely dark. The streets are paved with asphalt. The entities here are uniquely adapted to the environment, including "The Neighborhood Watch" which hunts anything moving on the streets.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-house"></i> Do Not Enter the Houses</h4><p>Houses often possess non-Euclidean geometry inside, trapping wanderers in looping hallways. Stay on the grass.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Discovered in 2020. Several houses have been marked with neon tape by survivors.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        },
        "level10": {
            type: "level", id: "level10", title: "Level 10", name: "Field of Wheat",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDk3NzA2Ii8+PHBhdGggZD0iTTAgMEw1IDEwTDEwIDAiIHN0cm9rZT0iI2Y1OThjYyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { 
                seed: 1010, wallDensity: 0.05, gridSize: 10, poiChance: 0.01, bgColor: "#b45309", wallColor: "#78350f", gridOpacity: 0.0,
                zones: [ { x: -500, y: -500, w: 1000, h: 1000, color: "rgba(217, 119, 6, 0.4)", label: "Wheat Fields", z: 0 } ],
                pois: [ { name: "Dirt Path", color: "#78350f", icon: "🛣️" }, { name: "Barn", color: "#ef4444", icon: "🛖" } ] 
            },
            specificMetrics: { "Atmospheric Diagnostics": { "Ambient Temp (Core)": "22 °C (Sunny)", "Air Comp: O2": "25.0% (Rich)" }, "Material & Biological": { "Entity Density": "Very Low", "Flora/Fauna Present": "Infinite Wheat" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An infinite, sunlit wheat field split by a single dirt path.</p></div>
                <h3>Description</h3>
                <p>Level 10 is an infinite expanse of wheat fields under a perpetually clear, sunlit sky. A single dirt path runs endlessly in a straight line. It is a massive relief from the prior levels. The wheat is edible and safe. The only structures are occasional wooden barns.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3"><i class="ph ph-plant"></i> Harvest</h4><p>Gather wheat for sustenance. Rest here. Do not stray far from the dirt path to avoid getting lost forever.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Several agricultural communities have been established here by long-term wanderers.</div>`,
            resonanceScan: `<button class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary font-mono font-bold py-3 px-6 rounded"><i class="ph ph-scan text-xl"></i> INITIATE SCAN</button>`
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "1", title: "Entity 1", name: "The Cameraman",
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" }, { label: "THEORETICAL", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            tracker: { active: false, status: "NO REAL-TIME VISUAL AVAILABLE", color: "purple", icon: "ph-camera-slash" },
            specificMetrics: { "Entity Specific (Proprietary)": { "Origin Level": "Unknown", "Current Locations": "Omnipresent", "Interference Rating": "Zero" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">The theoretical entity responsible for documenting the Backrooms.</p></div>
                <h3>Description</h3>
                <p>The Cameraman is an unverified entity presumed to capture the high-quality photos submitted anonymously to the M.E.G. databases. Its physical form is unknown.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-400 font-bold uppercase mb-3"><i class="ph ph-info"></i> Non-Intervention</h4><p>If you find abandoned camera gear, do not touch it.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Database logs show untraceable image uploads bypassing all known cybersecurity protocols.</div>`
        },
        "entity2": {
            type: "entity", id: "2", title: "Entity 2", name: "Windows",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgNUwxMCA1TTAgMEwxMCAxMCIgc3Ryb2tlPSIjMzY5IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=",
            tracker: { active: true, status: "STATIONARY ANOMALY DETECTED", color: "blue", icon: "ph-square" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Hostility Baseline": "Ambush Predator", "Target Preference": "Approaching Wanderers", "Sentience Level": "Low (Trap-like)" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Entities taking the form of regular windows, primarily found in Level 188.</p></div>
                <h3>Description</h3>
                <p>Windows appear as normal glass windows set into walls, but the space behind them is a void. Inside the window, a dark figure often gestures to the wanderer. If approached, the entity will smash through the glass and drag the victim into the void.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-400 font-bold uppercase mb-3"><i class="ph ph-warning"></i> Avoid all Windows</h4><p>Never approach a window in the Backrooms, especially if someone is waving at you from the other side.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Documented extensively in Level 188 where they form the walls of the courtyard.</div>`
        },
        "entity3": {
            type: "entity", id: "3", title: "Entity 3", name: "Smilers",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "LIGHT-AVERSE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTAgNUQ1IDEwIDEwIDUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+",
            tracker: { active: true, status: "LIGHT-AVERSE PREDATOR DETECTED", color: "yellow", icon: "ph-smiley-x" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Hostility Baseline": "Aggressive Predator", "Pack Mentality": "Solitary", "Response to Provocation": "Lethal Attack" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Hostile entities identifiable only by their glowing eyes and teeth in the dark.</p></div>
                <h3>Description</h3>
                <p>Smilers hide in completely dark areas. They have no visible body, only glowing white eyes and a wide, toothy grin. They are highly aggressive but repelled by bright light.</p>
                <h4>Sub-variants</h4>
                <ul><li><strong>Entity 3-A: Frowners (Vulpes Lumina)</strong> - Passive variants that glow softly and attempt to guide wanderers.</li><li><strong>Entity 3-B: Rattlers (Crepitus Nocturnus)</strong> - Larger, slower variants found in Level 8.</li></ul>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-400 font-bold uppercase mb-3"><i class="ph ph-flashlight"></i> Light Discipline</h4><p>Maintain eye contact and back away slowly. Throw a light source in the opposite direction to distract them.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">One of the most common and ancient entities documented in the M.E.G. database.</div>`
        },
        "entity4": {
            type: "entity", id: "4", title: "Entity 4", name: "Deathmoths",
            tags: [ { label: "VARIABLE HOSTILITY", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTUgMEwwIDEwTDEwIDEwWiIgZmlsbD0iI2I0NTMwOSIvPjwvc3ZnPg==",
            tracker: { active: true, status: "AIRBORNE SWARM DETECTED", color: "orange", icon: "ph-butterfly" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Hostility Baseline": "Varies by gender", "Pack Mentality": "Hive/Swarm" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Giant anomalous moths found primarily in Level 5.</p></div>
                <h3>Description</h3>
                <p>Deathmoths are giant moths. The males are smaller and relatively harmless, while the females are massive, highly aggressive, and spit acid. They are drawn to light sources.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-400 font-bold uppercase mb-3"><i class="ph ph-fire"></i> Avoid Hives</h4><p>Turn off your flashlight if you hear aggressive fluttering. Do not approach their nests in hot areas.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Infestations have crippled multiple M.E.G. outposts in Level 5's boiler rooms.</div>`
        },
        "entity5": {
            type: "entity", id: "5", title: "Entity 5", name: "Clumps",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjMiIGZpbGw9IiM3ZjFkMWQiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMiIgZmlsbD0iIzlmMWExYyIvPjwvc3ZnPg==",
            tracker: { active: true, status: "BIOLOGICAL MASS MOVING", color: "red", icon: "ph-users-three" },
            specificMetrics: { "Biological & Anatomical Makeup": { "Physical Mass": "Amorphous / Shifting", "Ectoplasmic Output": "High" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Amorphous masses of limbs and flesh.</p></div>
                <h3>Description</h3>
                <p>Clumps are grotesque agglomerations of human limbs that move with surprising speed. They are ravenous and will attempt to absorb wanderers into their mass to grow larger. Mostly found in Level 2 and Level 3.</p>
                <h4>Sub-variants</h4>
                <ul><li><strong>Entity 5-A: Amalgamations</strong> - Massive variants composing the majority of older Clump populations.</li></ul>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-400 font-bold uppercase mb-3"><i class="ph ph-person-simple-run"></i> Evade</h4><p>Clumps are fast in straight lines but struggle with sharp turns. Zig-zag through obstacles.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Believed to be the absorbed remains of previous wanderers who died in Level 2.</div>`
        },
        "entity6": {
            type: "entity", id: "6", title: "Entity 6", name: "Dullers",
            tags: [ { label: "ELUSIVE", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTUgMEwyIDEwSDhaIiBmaWxsPSIjNDQ0Ii8+PC9zdmc+",
            tracker: { active: false, status: "CLOAKED/DIMENSIONAL SHIFTING", color: "gray", icon: "ph-user-minus" },
            specificMetrics: { "Dimensional Interactions": { "Noclip Capability": "High", "Level Boundary Traversing": "Yes" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Tall, faceless grey humanoids that phase through walls.</p></div>
                <h3>Description</h3>
                <p>Dullers are completely grey, featureless entities that move slowly and can noclip through physical architecture at will. They usually flee when observed but will snatch wanderers who aren't looking.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-500"><h4 class="text-gray-400 font-bold uppercase mb-3"><i class="ph ph-eye"></i> Maintain Line of Sight</h4><p>Look directly at them to force them to retreat through the walls.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Often sighted on Level 1, stealing supplies from M.E.G. crates.</div>`
        },
        "entity7": {
            type: "entity", id: "7", title: "Entity 7", name: "The Mandela Virus",
            tags: [ { label: "PATHOGEN", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "LETHAL", class: "bg-red-700/10 text-red-500 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLWRhc2hhcnJheT0iMSAxIi8+PC9zdmc+",
            tracker: { active: true, status: "INFECTIOUS AGENT DETECTED", color: "green", icon: "ph-virus" },
            specificMetrics: { "Biological & Anatomical Makeup": { "Cellular Structure": "Anomalous RNA", "Carbon Based": "No" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">An airborne, memory-altering pathogen originating in Level 1.</p></div>
                <h3>Description</h3>
                <p>The Mandela Virus is a cognitive pathogen that doesn't just attack the body, but rewrites the victim's memories of baseline reality. Infected wanderers gradually forget their Frontrooms life, eventually turning into vegetative husks dedicated to serving the Backrooms topology.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3"><i class="ph ph-mask-shield"></i> Bio-Hazard Protocols</h4><p>Wear high-grade respirators in unmapped sectors of Level 1. Drink Almond Water immediately if memory lapses occur.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">First isolated by Kauer Research scientists in 2023. Responsible for the quarantine of Sector 4.</div>`
        },
        "entity8": {
            type: "entity", id: "8", title: "Entity 8", name: "Hounds",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTIgOEw1IDRMODggOCIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
            tracker: { active: true, status: "HOSTILE QUADRUPED DETECTED", color: "red", icon: "ph-paw-print" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Hostility Baseline": "High", "Response to Provocation": "Rabid Charge" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Humanoid entities that crawl on all fours like feral dogs.</p></div>
                <h3>Description</h3>
                <p>Hounds have the anatomy of humans but disheveled hair, sharp teeth, and crawl rabidly on their hands and knees. They are highly territorial and will charge at wanderers on sight.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-hand-palm"></i> Intimidation</h4><p>Maintain eye contact and stand tall. Hounds are intimidated by confident prey. Never run.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Bite victims undergo a slow, painful mutation process into Hounds themselves.</div>`
        },
        "entity9": {
            type: "entity", id: "9", title: "Entity 9", name: "Facelings",
            tags: [ { label: "VARIABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
            tracker: { active: true, status: "HUMANOID SIGNATURE DETECTED", color: "pink", icon: "ph-user" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Sentience Level": "Mimicry", "Hostility Baseline": "Varies by Age/Type" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Humanoids possessing entirely blank faces.</p></div>
                <h3>Description</h3>
                <p>Facelings look like normal humans (often dressed in period-appropriate clothing depending on the level) but lack any facial features. Adult Facelings are generally docile and will wander aimlessly, but Child Facelings are notoriously mischievous and hostile.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3"><i class="ph ph-baby"></i> Avoid the Children</h4><p>Adults can be ignored. If you hear a child giggling, evacuate the room immediately.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">The most widespread entity class in the Backrooms, found in almost all populated levels.</div>`
        },
        "entity10": {
            type: "entity", id: "10", title: "Entity 10", name: "Skin-Stealers",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "DECEPTIVE", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTIgMkgyVjhMMCAxMEwxMCAxMEw4IDhaIiBmaWxsPSIjZWY0NDQ0Ii8+PC9zdmc+",
            tracker: { active: true, status: "DECEPTIVE PREDATOR DETECTED", color: "red", icon: "ph-mask-happy" },
            specificMetrics: { "Behavioral & Aggression Matrix": { "Sentience Level": "High", "Hostility Baseline": "Predatory Mimicry" } },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Tall, pale humanoids that consume humans and wear their skin.</p></div>
                <h3>Description</h3>
                <p>Skin-Stealers are physically imposing, pale, bloodless entities. They hunt humans by mimicking speech (often crying for help). Once they kill their prey, they tear off the skin and wear it to disguise themselves as normal wanderers, repeating the victim's last words.</p>
            `,
            survivalGuide: `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3"><i class="ph ph-mask-happy"></i> Trust No One</h4><p>If a wanderer is bleeding clear fluid instead of red blood, or their speech sounds repetitive and mangled, shoot on sight.</p></div>`,
            history: `<div class="text-sm text-liminal-muted">Skin-Stealer infiltration caused the collapse of M.E.G. Outpost Delta in Level 3.</div>`
        }
    }
};