// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
// ==========================================

const GlobalMetrics = [
    { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.00%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low", "Causality Integrity": "99.9%", "Temporal Echoes": "None detected", "Chronon Radiation": "Background", "Memory Degradation": "Baseline", "Aging Effect on Biology": "Normal", "Device Battery Drain": "Standard", "Historical Sedimentation": "Present", "Simultaneity Loss": "None", "Time Dilation Ratio (vs Frontrooms)": "1.000", "Temporal Drag Coefficient": "0.01 μs/m", "Causality Bleed Rate": "0.0001%", "Chronon Particulate Count": "4.2 ppm", "Paradox Tolerance Threshold": "Low" } },
    { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level (Reality)": "100.0 H", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.9%", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.00%", "Magnetic Declination": "Standard Earth", "Tesseract Folding": "None", "Quantum Superposition": "Collapsed", "Non-linear Corridors": "0%", "Collision Meshes": "Solid/Intact", "Coordinate Drift": "0m/hr", "Euclidean Warp Factor": "0.00 (Stable)", "Gravitational Shear": "0.0 m/s³", "Dimensional Permeability": "0.02%", "Tesseract Depth Index": "Level 1 (Surface)", "Absolute Void Proximity": ">1,000,000 AU" } },
    { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp (Core)": "20.0 °C", "Temp Fluctuation (24h)": "±2.0 °C", "Relative Humidity": "40-60%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Air Comp: CO2": "0.04%", "Air Comp: N2": "78.0%", "Trace Anomalous Gases": "0%", "Particulate Matter": "Safe levels", "Ozone Level": "Normal", "Aerosolized Spores": "None", "Static Charge Density": "Neutral", "Breathability Index": "100%", "Background Rad-Count": "0.12 μSv/h", "Airborne Spatial Anomalies": "0 parts/Billion", "Chemical Odor Profile": "Sterile/Neutral", "Barometric Fluctuation Spike": "±0.1 kPa", "Xenon Gas Concentration": "Trace" } },
    { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "None", "Acoustic Reverberation": "Standard", "Light Source Type": "Variable", "Luminosity Level": "Variable Lux", "Color Temperature": "Variable K", "Total Darkness Zones": "Possible", "Audio Hallucination Risk": "0%", "UV Radiation": "Sunlight-dependent", "Infrared Signature": "Normal", "Absolute Decibel Baseline": "30 dB", "Sub-sonic Interference": "None", "Echo Delay Variance": "Linear (0s)", "Auditory Mimicry Index": "0%", "Architectural Resonance Freq": "432 Hz" } },
    { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Mold Spore Count": "Low", "Structural Integrity": "Variable", "Entity Density": "0.00", "Organic Decay Rate": "Standard", "Nutrient Availability": "High", "Dehydration Risk": "Normal", "Flora/Fauna Present": "Earth Standard", "Carpet/Floor Fluid Toxicity": "0%", "Wall Arsenic Saturation": "0 mg/m²", "Micro-Concrete Density": "2400 kg/m³", "Organic Assimilation Rate": "0%/hr", "Architectural Decay Sub-routine": "Dormant" } },
    { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0", "Sanity Drain Rate": "0%", "Isolation Factor": "Variable", "Radio Comm Integrity": "100%", "GPS Functionality": "Online", "Electrical Availability": "Variable", "Internet Access": "Available", "Rescue Probability": "High", "Resource Respawn Algorithm": "Null", "Shelter Viability Score": "90/100", "Navigation Difficulty": "Low", "Psychological Erosion Rate": "Baseline", "Entity Detection Range Requirement": "N/A" } }
];

const GlobalEntityMetrics = [
    { category: "Biological & Anatomical Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Unknown", "Carbon Based": "Unverified", "Estimated Lifespan": "Infinite/Undefined", "Physical Mass": "Variable", "Regeneration Factor": "N/A", "Ectoplasmic Output": "0.0 mg/L" } },
    { category: "Behavioral & Aggression Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Docile", "Sentience Level": "Unknown", "Target Preference": "None", "Pack Mentality": "Solitary", "Response to Provocation": "Flee/Ignore", "Cognitohazard Output": "0%" } },
    { category: "Dimensional Interactions", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "Enabled", "Hume Disruption Radius": "0.0m", "Level Boundary Traversing": "Yes", "Temporal Phasing": "Unknown", "Gravity Resistance": "100%" } }
];

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
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations, memory loss, paranoia, or manufactured realities." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently. The level cannot maintain a consistent state." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative anomalous properties." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" }, { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" }, { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
};

// ==========================================
// COMPRESSION HELPER FUNCTIONS FOR L-CORP DATA
// ==========================================
const renderLore = (intro, body, entrances, exits, globalVals) => `
    <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light leading-relaxed">${intro}</p></div>
    <div class="space-y-4 text-liminal-muted text-sm md:text-base leading-loose">
        <h3 class="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-2 mb-4">Description</h3>
        ${body.map(p => `<p class="mb-5">${p}</p>`).join('')}
    </div>
    <h3 class="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-2 mt-10 mb-4">Entrances & Exits</h3>
    <div class="bg-[#050505] border border-liminal-border p-5 md:p-8 rounded-lg font-mono text-sm shadow-inner mb-10">
        <h4 class="text-liminal-primary font-bold mb-4 flex items-center gap-2"><i class="ph ph-door-open text-xl"></i> IDENTIFIED ENTRANCES</h4>
        <ul class="list-none space-y-3 text-liminal-text mb-8">
            ${entrances.map(e => `<li class="flex items-start gap-3"><i class="ph ph-arrow-right text-liminal-primary mt-1 animate-pulse"></i> <span class="leading-relaxed">${e}</span></li>`).join('')}
        </ul>
        <h4 class="text-liminal-safe font-bold mb-4 flex items-center gap-2"><i class="ph ph-sign-out text-xl"></i> KNOWN EXITS</h4>
        <ul class="list-none space-y-3 text-liminal-text">
            ${exits.map(e => `<li class="flex items-start gap-3"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span class="leading-relaxed">${e}</span></li>`).join('')}
        </ul>
    </div>
    <div class="bg-liminal-primary/5 border border-liminal-primary/30 p-6 rounded-lg mt-8 shadow-[0_0_30px_rgba(234,179,8,0.05)]">
        <h3 class="text-xl font-bold text-liminal-primary tracking-widest uppercase mb-6 flex items-center gap-3">
            <i class="ph ph-globe-hemisphere-west animate-spin-slow"></i> Global Telemetry & Dimensional Values
        </h3>
        <p class="text-xs text-liminal-muted font-mono mb-6 pb-4 border-b border-white/10">The following values override baseline Frontrooms metrics and are absolute constants for this specific level.</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${Object.entries(globalVals).map(([category, metrics]) => `
                <div class="bg-black/60 border border-white/5 p-4 rounded hover:border-white/20 transition-colors">
                    <h4 class="text-white font-bold text-xs uppercase mb-3 border-b border-white/10 pb-2 tracking-wider">${category}</h4>
                    <div class="space-y-2">
                        ${Object.entries(metrics).map(([k, v]) => `
                            <div class="flex justify-between items-center text-[11px] font-mono group">
                                <span class="text-liminal-muted group-hover:text-gray-300 transition-colors">${k}</span>
                                <span class="text-liminal-primary font-bold text-right ml-4">${v}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

const renderSurvival = (tips, gear) => `
    <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
        ${tips.map((t, i) => `
            <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-${t.c}-500 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow">
                <h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-2 tracking-wide">${i + 1}. ${t.n}</h4>
                <p class="mb-4 leading-relaxed">${t.d}</p>
                <div class="bg-${t.c}-900/10 p-3 rounded text-${t.c}-200 text-xs font-mono border border-${t.c}-500/20 flex items-start gap-3">
                    <i class="ph ph-lightbulb mt-0.5 text-lg"></i>
                    <div><strong class="tracking-widest opacity-80 block mb-1">L-CORP TRICK:</strong> ${t.l}</div>
                </div>
            </div>
        `).join('')}
        <div class="mt-12 pt-8 border-t border-white/10">
            <h4 class="text-white font-bold mb-6 text-2xl tracking-tight flex items-center gap-3">
                <i class="ph ph-backpack text-liminal-primary"></i> Essential Loadout
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${gear.map((g, i) => `
                    <div class="bg-black/60 border border-white/5 p-4 rounded-lg flex items-center gap-4 animate-slide-up hover:bg-white/10 hover:border-white/20 transition-all shadow-md group" style="animation-delay: ${i * 0.05}s;">
                        <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                            <i class="ph ${g.i} text-xl" style="color:var(--theme-primary)"></i>
                        </div>
                        <span class="font-mono text-xs font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">${g.n}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
`;

const renderHistory = (logs) => `
    <div class="relative border-l-2 border-liminal-border ml-4 md:ml-8 space-y-12 pb-12 mt-6">
        ${logs.map((l, i) => `
            <div class="relative pl-8 md:pl-12 group">
                <div class="absolute -left-[9px] top-1 w-4 h-4 bg-[#050505] border-2 border-liminal-muted rounded-full z-10 group-hover:border-liminal-primary group-hover:scale-125 transition-all duration-300"></div>
                ${i === 0 ? `<div class="absolute -left-[13px] top-0 w-6 h-6 bg-liminal-primary/20 rounded-full animate-ping z-0"></div>` : ''}
                <div class="text-[10px] text-liminal-primary mb-2 font-mono bg-liminal-primary/10 inline-block px-2 py-1 rounded border border-liminal-primary/20 tracking-widest">${l.date}</div>
                <h4 class="text-white font-bold text-xl mb-3 tracking-tight group-hover:text-liminal-primary transition-colors">${i + 1}. ${l.t}</h4>
                <p class="text-sm text-liminal-muted leading-relaxed max-w-3xl">${l.d}</p>
            </div>
        `).join('')}
    </div>
`;


const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [ { name: "Gateway to Level 1", color: "#9ca3af", icon: "⬇" }, { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" }, { name: "Fragile Wall (Level 483)", color: "#ef4444", icon: "🔨" }, { name: "Floor Breach (Level 27)", color: "#8b5cf6", icon: "🕳" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.15 (Slower)", "Local Time Flow Rate": "Erratic / Psychological", "Temporal Loop Probability": "89.4%", "Entropy Gradient": "Stagnant", "Atomic Clock Drift": "±4.2s/24h", "Subjective Time Variance": "Extreme", "Memory Degradation": "+12% Accelerated" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H (Low)", "Kant Counter Reading": "0.82", "Euclidean Consistency": "14.2% (Severe Non-linear)", "Noclipping Threshold": "High Permeability", "Spatial Dilation Factor": "1:4.5", "Gravity Variance": "9.81 m/s² (Stable)", "Z-Axis Deviation": "2.1%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "22.4 °C (Constant)", "Relative Humidity": "88% (Damp)", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "0.01% Unknown", "Static Charge Density": "+12kV/m", "Chemical Odor Profile": "Old Moist Carpet/Ozone" },
                "Acoustic & Luminescent": { "Ambient Hum": "59.8 Hz - 60.2 Hz", "Acoustic Reverberation": "Muffled", "Luminosity Level": "250-300 Lux", "Color Temperature": "3200 K (Mono-Yellow)", "Audio Hallucination Risk": "95%", "Sub-sonic Interference": "Constant" },
                "Material & Biological": { "Toxicity Levels": "Trace Mold", "Pathogen Level": "Unknown Fluid Bacteria", "Structural Integrity": "Indestructible (Mostly)", "Entity Density": "0.00", "Organic Decay Rate": "Halted", "Carpet/Floor Fluid Toxicity": "High Dermatological" },
                "Survival & Infrastructure": { "Base Threat Level": "1 (Psychological)", "Sanity Drain Rate": "-2.5% per Hour", "Isolation Factor": "Absolute", "Radio Comm Integrity": "0%", "GPS Functionality": "Offline", "Electrical Availability": "Wall Outlets (Hazardous)", "Rescue Probability": "0.000001%" }
            },
            lore: renderLore(
                "Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in. It sets the precedent for the liminal dread that permeates the entire dimensional network.",
                [
                    "Level 0 is an expansive, infinitely generating non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its extremely disorienting layout and distinct, sickeningly yellow wallpaper. All rooms in Level 0 share the same superficial features, with heavily worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are exactly the same, with each area differing significantly in shape and structural layout. The constant, droning hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting in Baseline Reality. The buzz tends to induce throbbing migraines, sensory overload, and severe anxiety in most individuals, which can persist for an extended period even after one has successfully exited the level.",
                    "Linear space and topology are significantly altered within Level 0. It is entirely possible to walk in a perfectly straight line, somehow return to the exact starting point, and end up in a completely different set of rooms than one was in beforehand. Such properties cause the level to be impossibly disorienting to navigate. Research conducted by Liminality Corp suggests that this extreme spatial confusion, paired with the total lack of sensory variety, is the primary underlying cause of the rapid loss of mental stability among wanderers. Furthermore, compasses and GPS trackers spin wildly and fail to lock onto any magnetic north, proving that the space lacks a traditional magnetic pole or is constantly rotating on a sub-dimensional axis. Isolation is absolute; despite millions of people theoretically noclipping into Level 0 over human history, the mathematical likelihood of encountering another human being is practically zero due to the sheer infinite scale of the generation.",
                    "The material composition of the environment is highly abnormal. The carpet itself holds a particular fascination for L-Corp researchers. Spectral analysis reveals that the moisture contained within the synthetic fibers is not water, but rather an anomalous liquid mixture composed of trace bacterial matter, microscopic fungal spores, and an unidentified chemical solvent that severely degrades cellular tissue upon prolonged exposure. Attempting to wring out and drink this fluid results in immediate, fatal toxicity. Furthermore, despite being canonically devoid of any physical entities, the extreme psychological pressure of Level 0 forces the brain to compensate for the sensory deprivation. Wanderers heavily report profound visual and auditory hallucinations—such as seeing figures in their peripheral vision, hearing footsteps rushing behind them, or hearing loved ones calling out from distant rooms. These are hallucinations, but they have driven many to run aimlessly until they expire from exhaustion."
                ],
                [
                    "Noclipping out of bounds in Baseline Reality (The Frontrooms) is the most common entrance. This happens when interacting with 'glitched' architecture.",
                    "Failing a specific exit attempt in Level 283 will forcibly drop a wanderer through the floor and back into the mono-yellow halls.",
                    "Slipping through the rotted floorboards in Level 500 will deposit you face-first onto the damp carpet of Level 0.",
                    "Opening an unpainted wooden door in the outer limits of Level 11 can occasionally loop back to the beginning."
                ],
                [
                    "Wandering far and long enough (typically spanning days) may cause the hallways to gradually transition into Level 1's concrete architecture.",
                    "Breaking through a wall (which requires immense, superhuman force or specialized explosives) leads directly to Level 483.",
                    "Breaking through the floorboards underneath the damp carpet leads to the pitch-black void of Level 27.",
                    "Entering a rare, highly anomalous 'Emergency Exit' door with red glowing letters leads directly to Level 14.",
                    "Noclipping through a wall that appears darker or 'glitched' than the surrounding wallpaper will transition you to the Manila Room."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.15 (Slower)", "Local Time Flow Rate": "Erratic / Psychological", "Temporal Loop Probability": "89.4%", "Entropy Gradient": "Stagnant", "Atomic Clock Drift": "±4.2s/24h", "Subjective Time Variance": "Extreme", "Memory Degradation": "+12% Accelerated" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H (Low)", "Kant Counter Reading": "0.82", "Euclidean Consistency": "14.2% (Severe Non-linear)", "Noclipping Threshold": "High Permeability", "Spatial Dilation Factor": "1:4.5", "Gravity Variance": "9.81 m/s² (Stable)", "Z-Axis Deviation": "2.1%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "22.4 °C (Constant)", "Relative Humidity": "88% (Damp)", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "0.01% Unknown", "Static Charge Density": "+12kV/m", "Chemical Odor Profile": "Old Moist Carpet/Ozone" },
                    "Acoustic & Luminescent": { "Ambient Hum": "59.8 Hz - 60.2 Hz", "Acoustic Reverberation": "Muffled", "Luminosity Level": "250-300 Lux", "Color Temperature": "3200 K (Mono-Yellow)", "Audio Hallucination Risk": "95%", "Sub-sonic Interference": "Constant" },
                    "Material & Biological": { "Toxicity Levels": "Trace Mold", "Pathogen Level": "Unknown Fluid Bacteria", "Structural Integrity": "Indestructible (Mostly)", "Entity Density": "0.00", "Organic Decay Rate": "Halted", "Carpet/Floor Fluid Toxicity": "High Dermatological" },
                    "Survival & Infrastructure": { "Base Threat Level": "1 (Psychological)", "Sanity Drain Rate": "-2.5% per Hour", "Isolation Factor": "Absolute", "Radio Comm Integrity": "0%", "GPS Functionality": "Offline", "Electrical Availability": "Wall Outlets (Hazardous)", "Rescue Probability": "0.000001%" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Psychological Anchoring", d:"The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours of isolation.", c:"purple", l:"Carry a mechanical watch. The ticking provides a rhythmic, Earth-bound sound that overrides the anomalous frequencies of the hum-buzz."},
                    {n:"Resource Management", d:"There is absolutely no clean water natively generated here. The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies that cause rapid organ failure.", c:"yellow", l:"Search specifically for pooling condensation near structural anomalies like broken wall panels; these rarely contain trace amounts of safe Almond Water."},
                    {n:"Navigation Protocols", d:"Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless. Walking in a straight line will often result in a topological loop, bringing you back to where you started.", c:"blue", l:"Employ the strict 'Right-Hand Rule' to hit boundary walls which eventually transition to Level 1's architecture."},
                    {n:"Sleep Deprivation Countermeasures", d:"The inability to turn off the lights combined with the 60Hz hum makes REM sleep nearly impossible. Exhaustion is the #2 killer in Level 0, causing the body to simply shut down.", c:"red", l:"Tear strips of wallpaper to fashion a crude, thick blindfold. Sleep in strict 3-hour bursts to prevent deep REM paralysis."},
                    {n:"Equipment Degradation", d:"The ambient static charge (+12kV/m) in the air will rapidly drain modern lithium-ion batteries. Magnetic storage drives will corrupt completely within 72 hours.", c:"green", l:"Only rely on solid-state drives shielded in Faraday cages. Use mechanical crank flashlights if navigating dark spots."},
                    {n:"Dietary Restrictions", d:"There is no flora or fauna. The black mold occasionally found near baseboards is highly toxic if ingested, causing severe hemorrhagic fevers.", c:"orange", l:"You must rely entirely on brought rations. Minimize physical exertion to lower your metabolic burn rate and conserve calories."},
                    {n:"Hypothetical Entity Protocols", d:"While Level 0 is canonically devoid of physical entities, paranoia often dictates otherwise. If you 'hear' footsteps or see a shadow dart past, do not panic and do not run.", c:"teal", l:"Acknowledge the hallucination out loud calmly. Saying 'You are not real' aloud breaks the cognitive feedback loop, causing it to dissipate."},
                    {n:"Noclip Vulnerabilities", d:"The walls here are structurally infinite, but geometry occasionally tears. Blackened or glitching walls indicate a weak Euclidean mesh that can be passed through.", c:"fuchsia", l:"Avoid 'glitch' walls unless desperate, as noclipping here often leads to the suffocating Void rather than Level 1."},
                    {n:"Fluid Extraction Warning", d:"Attempting to squeeze or extract fluid from the carpet releases aerosolized toxic spores embedded in the synthetic polymer fibers.", c:"cyan", l:"If forced to walk barefoot, wrap your feet in torn wallpaper to prevent rapid dermal absorption of the toxins."},
                    {n:"Spatial Marking (Chalk)", d:"Conventional marking methods (leaving items, marking walls) are highly ineffective as the layout shifts or items fall through geometry when unobserved.", c:"gray", l:"Chalk marks disappear after 12 hours. Only use marking to confirm immediate localized loops, not for long-term pathfinding."}
                ],
                [
                    {n:"Analog Noise-cancelling headsets", i:"ph-headphones"}, {n:"Minimum 3L Purified Almond Water", i:"ph-drop"}, {n:"Industrial Marking Chalk", i:"ph-pencil-simple"}, {n:"Proprietary Sub-space beacon", i:"ph-broadcast"}, {n:"High-calorie survival paste (14 days)", i:"ph-first-aid"},
                    {n:"Mechanical Watch (No battery)", i:"ph-watch"}, {n:"Faraday Cage Pouch (For SSDs)", i:"ph-shield-check"}, {n:"Thick-soled combat boots (Toxin resist)", i:"ph-boot"}, {n:"Light-blocking sleep mask", i:"ph-eye-closed"}, {n:"Analog Compass (Detects Hume shifts)", i:"ph-compass"}
                ]
            ),
            history: renderHistory([
                {date:"MAY 12, 1998", t:"Initial Archival Image Captured", d:"An anonymous user uploads the first verified visual telemetry of Level 0 to an obscure Frontrooms imageboard. Liminality Corp retroactively acquires the raw file, confirming the 4chan post as the true origin point of Backrooms awareness."},
                {date:"OCTOBER 4, 2005", t:"The Manila Room Rumor", d:"A massive surge of data on early forums points to a sub-room within Level 0 known as the Manila Room. L-Corp sends the first batch of unmanned, tungsten-shielded probes via induced noclip events to verify the room's existence, finding highly anomalous paper records."},
                {date:"JUNE 13, 2012", t:"Expedition Log Recovered", d:"Data retrieval from a deceased wanderer's digital camera proves severe psychological degradation models. The wanderer walked for an estimated 600 miles before succumbing to dehydration and self-inflicted injuries due to hallucinations."},
                {date:"JANUARY 18, 2017", t:"The 400-Mile March Experiment", d:"Agent L-89 undergoes a highly classified experimental endurance run, equipped with spatial tracking implants. The telemetry confirms massive topological loop structures, as L-89 walked 400 miles but only physically displaced 2 miles from their entry point."},
                {date:"MARCH 3, 2019", t:"First Controlled Noclip Exit Verified", d:"A Liminality autonomous drone successfully maps an exit threshold breaching into Level 1. By tracking the decay of the yellow hue on the walls, algorithms successfully predict the transition zone with 94% accuracy."},
                {date:"AUGUST 14, 2021", t:"M.E.G. Cartography Failure", d:"The Major Explorer Group attempts to physically map a 10-mile radius using thousands of string spools. The non-Euclidean geometry actively severs the strings when unobserved, proving physical cartography in Level 0 is completely impossible."},
                {date:"NOVEMBER 22, 2022", t:"Carpet Fluid Analysis", d:"A specialized hazardous materials probe extracts 5 liters of carpet fluid. Chemical analysis reveals it contains a cocktail of necrosis-inducing bacteria that do not match any known Frontrooms phylogenetic tree. The fluid is designated Bioweapon Class III."},
                {date:"FEBRUARY 19, 2024", t:"Hum-Buzz Psychological Study", d:"L-Corp neurologists isolate the audio frequency of the fluorescent lights. Exposure to the exact 59.8 Hz loop causes severe anxiety and violent outbursts in D-Class personnel within 72 hours, confirming it as a passive cognitohazard."},
                {date:"OCTOBER 11, 2025", t:"Discontinuation of Physical Outposts", d:"After 14 failed attempts by various factions to set up a permanent base camp, L-Corp issues a mandate advising against all physical encampments. The shifting geometry eventually separates all team members when line of sight is broken."},
                {date:"JULY 2, 2026", t:"Stable LiminOS Uplink Achieved", d:"Proprietary quantum nodes allow real-time telemetry extraction from Level 0 without physical cables. The LiminOS Cartography Engine maps local instances with 99.98% accuracy by reading Hume-field disruptions rather than visual data."}
            ]),
            resonanceLogs: [
                "> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> CALIBRATING HUME SENSORS... [OK]", "> BYPASSING M.E.G. INTERFERENCE... [OK]",
                "<br>> <span class='text-liminal-primary'>ANALYZING MOISTURE CONTENT:</span>", "  - H2O: 98.01%", "  - UNKNOWN BIOLOGICAL FLUID: 1.99%",
                "<br>> <span class='text-yellow-400'>CHECKING STRUCTURAL INTEGRITY:</span>", "  - WALL PERMEABILITY: 0.0001% (NOCLIP RESISTANCE HIGH)", "  - EUCLIDEAN CONSISTENCY: 14.2%",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - RESULT: 0 ENTITIES DETECTED.", "  - NOTE: IGNORE AUDITORY HALLUCINATIONS.",
                "<br>> <span class='text-purple-400'>COGNITOHAZARD ALERT:</span>", "  - 59.8 Hz FREQUENCY PEAKING.", "  - PSYCHOLOGICAL ANCHORS REQUIRED.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-teal-500/10 text-teal-400 border-teal-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [ { name: "Supply Crate", color: "#60a5fa", icon: "📦" }, { name: "M.E.G. Base Alpha", color: "#22c55e", icon: "🛡" }, { name: "Elevator (Level 2)", color: "#dc2626", icon: "↕" }, { name: "Duller Manifestation", color: "#8b5cf6", icon: "👻" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "5.2%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.1s/24h", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline (None)" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "95.2 H (Stable)", "Kant Counter Reading": "0.95", "Euclidean Consistency": "80.0% (Mostly Linear)", "Noclipping Threshold": "Low Permeability", "Spatial Dilation Factor": "1:1.2", "Gravity Variance": "9.81 m/s² (Stable)", "Z-Axis Deviation": "0.5%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "15.0 °C (Cool)", "Relative Humidity": "50% (Condensing Fog)", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "0.05% Machine Exhaust", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Motor Oil/Wet Concrete" },
                "Acoustic & Luminescent": { "Ambient Hum": "Low Electrical Whine", "Acoustic Reverberation": "High (Warehouse Echo)", "Luminosity Level": "50-400 Lux (Flickering)", "Color Temperature": "4000 K (Cool White)", "Audio Hallucination Risk": "5%", "Sub-sonic Interference": "None" },
                "Material & Biological": { "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Structural Integrity": "Variable (Rusting Rebar)", "Entity Density": "Low (During Light)", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "Mild Dysentery (Puddles)" },
                "Survival & Infrastructure": { "Base Threat Level": "1", "Sanity Drain Rate": "0%", "Isolation Factor": "Low (Populated)", "Radio Comm Integrity": "85%", "GPS Functionality": "Sporadic", "Electrical Availability": "High (Grid Powered)", "Rescue Probability": "High" }
            },
            lore: renderLore(
                "Level 1 is a massive, seemingly infinite warehouse constructed of cold concrete and exposed rebar. It is the first truly habitable level in the Backrooms, serving as the central hub for human civilization and major faction outposts.",
                [
                    "Level 1 marks a stark departure from the oppressive, suffocating halls of Level 0. It is a large, sprawling warehouse environment characterized by concrete floors, cinderblock walls, and exposed rusty rebar. A low-hanging, inexplicably dense fog constantly rolls across the floor, often coalescing into large puddles of condensation in depressed areas of the concrete. Unlike the previous level, Level 1 possesses a consistent supply of clean water (via anomalous condensation and piping) and functional electricity, which allows indefinite habitation by wanderers provided that appropriate precautions are taken. It is also far more expansive vertically and horizontally, possessing stairs, freight elevators, isolated storage rooms, and massive open hangar-like areas.",
                    "The defining anomalous feature of Level 1 is the spontaneous manifestation of supply crates. Crates of various materials (wood, metal, plastic) appear and disappear randomly when unobserved. These crates contain a massive variety of items, ranging from vital survival supplies like purified Almond Water, medical kits, and batteries, to bizarre or dangerous anomalies such as used car parts, human hair, or highly toxic fluids. This crate economy has allowed factions like the Major Explorer Group (M.E.G.) and the Backrooms Non-Aligned Trade Group (B.N.T.G.) to establish massive, heavily fortified trading hubs. Base Alpha, the M.E.G.'s primary stronghold, is located here, acting as a beacon of safety for newly arrived wanderers.",
                    "Despite its habitable classification, Level 1 is not without severe danger. The electrical grid powering the overhead fluorescent lights is highly unstable, prone to random flickering and complete failure. When sections of the warehouse are plunged into total darkness, the environment becomes hostile. Entities such as Dullers, Adult Facelings, Hounds, and rarely Smilers manifest in these dark zones. Dullers are particularly dangerous here, as they can phase through the concrete walls to drag victims into the solid matter. Wanderers are heavily advised to carry reliable, manual crank light sources and to immediately retreat to heavily lit, populated outposts when a blackout cycle begins."
                ],
                [
                    "Wandering far and long enough through the mono-yellow halls of Level 0 will eventually cause the carpet to harden into concrete, depositing you in Level 1.",
                    "Entering through unlocked, heavily rusted iron doors in Level 1.5 will bring you into a storage closet in Level 1.",
                    "Descending an elevator from Level 4, though dangerous, can occasionally bypass Levels 2 and 3 and safely drop you here.",
                    "Crawling through the ventilation shafts of Level 0.2 has a rare chance to drop you into the fog of Level 1."
                ],
                [
                    "Walking down any extended, narrowing hallway that grows steadily hotter will seamlessly transition the environment into the pipe-lined halls of Level 2.",
                    "Entering a freight elevator and pressing random buttons can take you to Level 2 or Level 3, though this is considered highly risky.",
                    "Locating a specific, anomalously clean painting on a concrete wall and walking into it leads to Level 57.",
                    "Finding a door that inexplicably leads to a sandy, outdoor environment is an entrance to Level 46 (The Arabian Desert)."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "5.2%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.1s/24h", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline (None)" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "95.2 H (Stable)", "Kant Counter Reading": "0.95", "Euclidean Consistency": "80.0% (Mostly Linear)", "Noclipping Threshold": "Low Permeability", "Spatial Dilation Factor": "1:1.2", "Gravity Variance": "9.81 m/s² (Stable)", "Z-Axis Deviation": "0.5%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "15.0 °C (Cool)", "Relative Humidity": "50% (Condensing Fog)", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "0.05% Machine Exhaust", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Motor Oil/Wet Concrete" },
                    "Acoustic & Luminescent": { "Ambient Hum": "Low Electrical Whine", "Acoustic Reverberation": "High (Warehouse Echo)", "Luminosity Level": "50-400 Lux (Flickering)", "Color Temperature": "4000 K (Cool White)", "Audio Hallucination Risk": "5%", "Sub-sonic Interference": "None" },
                    "Material & Biological": { "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Structural Integrity": "Variable (Rusting Rebar)", "Entity Density": "Low (During Light)", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "Mild Dysentery (Puddles)" },
                    "Survival & Infrastructure": { "Base Threat Level": "1", "Sanity Drain Rate": "0%", "Isolation Factor": "Low (Populated)", "Radio Comm Integrity": "85%", "GPS Functionality": "Sporadic", "Electrical Availability": "High (Grid Powered)", "Rescue Probability": "High" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Outpost Proximity", d:"Level 1 is home to M.E.G. Base Alpha, the largest human settlement. Locate this base for medical aid, trading, and protection from entities.", c:"green", l:"Follow wall graffiti; most arrows drawn in blue chalk are a universally recognized sign leading to Base Alpha."},
                    {n:"The Darkness Protocol", d:"When the overhead lights flicker and die, entities immediately begin to spawn in the darkness. You must retreat to a lit area instantly to survive.", c:"yellow", l:"The power grids follow a determinable 14-hour cycle. L-Corp agents use stopwatches to plan rests entirely around these rolling blackouts."},
                    {n:"Crate Foraging", d:"Supply crates randomly spawn. While many contain vital Almond Water or food, others contain hazardous anomalies, rusted scrap, or aggressive micro-entities.", c:"blue", l:"Only open crates made of standard pine wood. Dark oak crates or crates oozing black fluid almost always contain lethal anomalies."},
                    {n:"Hound Evasion", d:"Hounds (canine-like humanoids) patrol the fringes of the lit zones. If engaged, do not run and do not break eye contact.", c:"red", l:"Intimidate them. Screaming, waving a crowbar, and making yourself appear larger works effectively on Level 1 Hounds."},
                    {n:"Puddle Contamination", d:"The floor fog condenses into large puddles. Do not drink this water without heavy filtration; it causes severe dysentery and parasitic infections.", c:"purple", l:"These puddles contain trace motor oil and are highly flammable. Use them to create defensive fire lines during blackouts."},
                    {n:"Elevator Roulette", d:"Elevators are a quick exit to Level 2 or 3, but some are anomalies that drop indefinitely into the Void, starving the occupants.", c:"cyan", l:"Press the call button twice. If the resulting 'ding' is a major chord, it's safe. If it's a minor chord, step away immediately."},
                    {n:"Fog Inhalation", d:"Extended exposure to the low-hanging fog causes a mild, chronic pneumonia known among wanderers as 'Concrete Cough'.", c:"orange", l:"Sleep on top of supply crates or shelving racks, at least 1 meter off the ground, to stay above the fog line."},
                    {n:"Trade Economy", d:"Level 1 uses Almond Water and Fire Salt as the standard currency among wanderers and the B.N.T.G.", c:"teal", l:"Hoard mechanical parts and copper wire from crates; B.N.T.G. traders pay premium rates for raw construction materials."},
                    {n:"Duller Phasing", d:"Dullers (featureless grey humanoids) exist inside the concrete walls and will drag victims standing too close through solid matter.", c:"fuchsia", l:"Avoid leaning against any walls to rest. Walk strictly in the center of the warehouse lanes."},
                    {n:"Structural Decay", d:"Some concrete and rebar pillars are rusted completely through and are structurally unsound, threatening localized ceiling collapses.", c:"gray", l:"Tap pillars with a heavy wrench. A hollow, reverberating ring means a spatial collapse is imminent—clear the area."}
                ],
                [
                    {n:"High-Lumen Crank Flashlight", i:"ph-flashlight"}, {n:"N95 Particulate Respirator (For fog)", i:"ph-mask-water"}, {n:"Heavy Crowbar (For supply crates)", i:"ph-wrench"}, {n:"Trade Barter Goods (Batteries, wires)", i:"ph-hand-coins"}, {n:"Trauma Medical Kit", i:"ph-bandaids"},
                    {n:"Elevated Sleeping Hammock/Cot", i:"ph-tent"}, {n:"Magnesium Fire Starter", i:"ph-fire"}, {n:"Melee Defense Weapon (Machete)", i:"ph-sword"}, {n:"Night Vision Goggles (NVGs)", i:"ph-binoculars"}, {n:"M.E.G. Cartography Map", i:"ph-book-open"}
                ]
            ),
            history: renderHistory([
                {date:"FEBRUARY 4, 2010", t:"First Successful Transition", d:"A wanderer posts a blurry photo of a concrete pillar on an obscure internet forum, marking the first recorded discovery of Level 1. The wanderer describes a sudden shift from yellow carpet to hard concrete."},
                {date:"AUGUST 14, 2012", t:"Establishment of Base Alpha", d:"The Major Explorer Group (M.E.G.) successfully clears and fortifies a massive 5-square-mile quadrant, establishing the first major, organized human settlement in the Backrooms."},
                {date:"NOVEMBER 2, 2015", t:"The Great Blackout", d:"A massive, inexplicable electrical failure plunges Sector B into complete darkness for 3 consecutive days. Entity spawns multiply exponentially; M.E.G. forces suffer heavy casualties defending the civilian population."},
                {date:"APRIL 10, 2017", t:"B.N.T.G. Trade Routes Open", d:"The Backrooms Non-Aligned Trade Group secures a safe, heavily guarded route between Level 1 and Level 4, establishing a functional economy centered around Almond Water."},
                {date:"SEPTEMBER 21, 2019", t:"The Elevator Void Incident", d:"Three explorers are permanently lost after mapping previously dormant elevator shafts. Telemetry from their radios indicated a free-fall lasting over 14 hours before signals were crushed by atmospheric pressure."},
                {date:"JULY 5, 2021", t:"Duller Phasing Discovered", d:"Security cameras at Base Alpha capture a Duller pulling an unaware guard seamlessly into a solid concrete pillar. M.E.G. immediately issues the 'Center-Walk' mandate for all personnel."},
                {date:"DECEMBER 12, 2022", t:"Tom's Diner Established", d:"A wanderer named Tom successfully converts a large storage room into a functional diner, using anomalous cooking equipment found in crates. It becomes the most popular civilian gathering spot."},
                {date:"MARCH 30, 2024", t:"Crate Manifestation Anomaly", d:"L-Corp scientists observe a supply crate manifesting. Quantum sensors reveal the crates literally assemble themselves from ambient sub-atomic particles drawn from the surrounding fog."},
                {date:"AUGUST 18, 2025", t:"L-Corp Sensor Network Deployed", d:"Liminality Corp secretly installs 500 stealth nodes in the ceiling grids above Base Alpha, allowing for passive scanning of M.E.G. operations and entity movements."},
                {date:"JANUARY 9, 2026", t:"Population Peak Reached", d:"Base Alpha becomes a sprawling, self-sustaining civilian outpost with over 2,000 permanent residents, officially cementing Level 1 as the capital of the early Backrooms."}
            ]),
            resonanceLogs: [
                "> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]",
                "<br>> <span class='text-liminal-primary'>FOG ANALYSIS:</span>", "  - CONDENSATION: 90% H2O, 10% MOTOR OIL",
                "<br>> <span class='text-yellow-400'>CRATE SPAWN PREDICTION:</span>", "  - NEW CRATE DETECTED AT SECTOR 4B",
                "<br>> <span class='text-green-400'>POPULATION METRICS:</span>", "  - 2,104 HUMAN LIFE SIGNS DETECTED (M.E.G. BASE ALPHA)",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 3 HOUNDS DETECTED IN DARK ZONE (SECTOR 9).", "  - 1 DULLER IN WALL GEOMETRY.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "THERMAL HAZARD", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: { seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.03, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [ { name: "Superheated Pipe Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Unmarked Door", color: "#f59e0b", icon: "🚪" }, { name: "Smiler in Darkness", color: "#ffffff", icon: "☻" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "12.4%", "Entropy Gradient": "Accelerated (Thermal)", "Atomic Clock Drift": "±0.5s/24h", "Subjective Time Variance": "High (Heat Delirium)", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "88.0 H (Stable)", "Kant Counter Reading": "0.88", "Euclidean Consistency": "60.0% (Intersecting Loops)", "Noclipping Threshold": "Impossible (Solid Brick)", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "38.0 °C - 43.0 °C", "Relative Humidity": "95% (Steam)", "Atmospheric Pressure": "105.2 kPa", "Air Comp: O2": "18.5% (Low)", "Trace Anomalous Gases": "2.1% Vaporized Tar", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Burning Oil, Iron, Rust" },
                "Acoustic & Luminescent": { "Ambient Hum": "Deafening Machinery/Hissing", "Acoustic Reverberation": "Low (Absorbed by Pipes)", "Luminosity Level": "0-150 Lux", "Color Temperature": "2000 K (Dim Orange)", "Audio Hallucination Risk": "30%", "Sub-sonic Interference": "High (Pipe Vibrations)" },
                "Material & Biological": { "Toxicity Levels": "Hazardous (Tarry Fluid)", "Pathogen Level": "Low (Heat Sterilized)", "Structural Integrity": "High (Reinforced Brick)", "Entity Density": "Moderate to High", "Organic Decay Rate": "Accelerated (Cooked)", "Carpet/Floor Fluid Toxicity": "Severe Burn Hazard" },
                "Survival & Infrastructure": { "Base Threat Level": "2", "Sanity Drain Rate": "1.5% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "10% (Metal Interference)", "GPS Functionality": "Offline", "Electrical Availability": "Exposed Wires", "Rescue Probability": "Low" }
            },
            lore: renderLore(
                "Level 2 is a claustrophobic, oppressive labyrinth of maintenance tunnels. It marks a severe spike in danger, acting as a brutal filter for wanderers attempting to dive deeper into the Backrooms.",
                [
                    "Level 2 consists entirely of cramped, grey concrete and brick maintenance tunnels, stretching on for millions of miles in an impossibly convoluted grid. The walls, ceilings, and occasionally the floors are lined with dense arrays of industrial pipes, ventilation ducts, and thick electrical conduits. Unlike the relatively cool climate of Level 1, Level 2 is oppressively hot. Some of the pipes running along the walls transport a superheated, anomalous tar-like substance, radiating heat that brings the ambient temperature up to 43°C (110°F). Explorers will find the heat suffocating, rapidly leading to severe dehydration, heatstroke, and delirium if not properly equipped.",
                    "The physical layout is linear but highly inconsistent. Corridors can stretch for miles without intersecting, only to abruptly loop back onto themselves or dead-end into solid brick walls. The lighting is incredibly poor; naked bulbs cage-mounted to the ceiling provide dim, orange illumination, and vast stretches of the tunnels are completely pitch black. The mechanical noise in Level 2 is deafening. A constant cacophony of whirring machinery, grinding gears, and the violent hissing of pressurized steam vents echoes off the concrete, making auditory detection of approaching entities nearly impossible. Decompression vents frequently open with explosive force, causing scalding steam to blind and burn wanderers in cramped sections.",
                    "Entities are far more common and aggressive here than in Level 1. Smilers lurk in the massive, unlit stretches of the maintenance tunnels, drawn to the flashlights of desperate wanderers. Clumps, grotesque amalgamations of human limbs, make their homes within the oversized ventilation shafts and drop from the ceiling to ambush prey. Wretches—former wanderers who succumbed to the heat and isolation, mutating into feral beasts—wander the halls mindlessly. Due to the extreme heat, lack of resources, and high entity density, M.E.G. highly advises against attempting to forage or establish outposts here. It is strictly a transit zone to reach Level 3 or 4."
                ],
                [
                    "Walking down incredibly long hallways in Level 1 that steadily grow hotter and narrower will eventually transition into the brick tunnels of Level 2.",
                    "Entering an unlocked, heavily reinforced door in The Hub.",
                    "Entering a massive, rusted boiler door found deep within the hotel of Level 5.",
                    "Falling through a grated floor vent in Level 3."
                ],
                [
                    "Finding a rare, unlocked fire exit door (often marked by a faint green glow) leads directly to the chaotic electrical station of Level 3.",
                    "Entering a multi-colored, wooden office door found anomalously set into the brick wall leads to Level 283 (The Lounges).",
                    "Crawling into a narrow, uncomfortably hot vent and surviving the crawl leads to the concrete labyrinth of Level 2.1.",
                    "Entering a rusted elevator and pressing the button for Level 4 (Extremely rare and dangerous)."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "12.4%", "Entropy Gradient": "Accelerated (Thermal)", "Atomic Clock Drift": "±0.5s/24h", "Subjective Time Variance": "High (Heat Delirium)", "Memory Degradation": "Baseline" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "88.0 H (Stable)", "Kant Counter Reading": "0.88", "Euclidean Consistency": "60.0% (Intersecting Loops)", "Noclipping Threshold": "Impossible (Solid Brick)", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "38.0 °C - 43.0 °C", "Relative Humidity": "95% (Steam)", "Atmospheric Pressure": "105.2 kPa", "Air Comp: O2": "18.5% (Low)", "Trace Anomalous Gases": "2.1% Vaporized Tar", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Burning Oil, Iron, Rust" },
                    "Acoustic & Luminescent": { "Ambient Hum": "Deafening Machinery/Hissing", "Acoustic Reverberation": "Low (Absorbed by Pipes)", "Luminosity Level": "0-150 Lux", "Color Temperature": "2000 K (Dim Orange)", "Audio Hallucination Risk": "30%", "Sub-sonic Interference": "High (Pipe Vibrations)" },
                    "Material & Biological": { "Toxicity Levels": "Hazardous (Tarry Fluid)", "Pathogen Level": "Low (Heat Sterilized)", "Structural Integrity": "High (Reinforced Brick)", "Entity Density": "Moderate to High", "Organic Decay Rate": "Accelerated (Cooked)", "Carpet/Floor Fluid Toxicity": "Severe Burn Hazard" },
                    "Survival & Infrastructure": { "Base Threat Level": "2", "Sanity Drain Rate": "1.5% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "10% (Metal Interference)", "GPS Functionality": "Offline", "Electrical Availability": "Exposed Wires", "Rescue Probability": "Low" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Heat Stroke Prevention", d:"The ambient temperature in Level 2 will rapidly dehydrate wanderers. Sweating is ineffective due to the 95% humidity.", c:"red", l:"Stay close to the floor where the temperature is 2-3°C cooler. Do not exert yourself; walk at a slow, measured pace."},
                    {n:"Smiler Evasion", d:"Smilers populate the blackouts. If you spot one, do not use a flashlight. Maintain eye contact.", c:"purple", l:"Throw a chemical glowstick down an intersecting corridor to distract them. They prioritize intense light sources over humans."},
                    {n:"Steam Vents", d:"Pressurized pipes occasionally burst, releasing scalding steam that can cook flesh in seconds.", c:"blue", l:"A loud hissing buildup inside the pipe gives a 3-second warning. Dive immediately to the floor to avoid the outward blast radius."},
                    {n:"Overhead Ambush (Clumps)", d:"Clumps hide in the oversized ceiling vents and drop silently on unsuspecting victims.", c:"orange", l:"If a vent grate is missing or bent outward, run past the opening; do not walk or pause under it."},
                    {n:"Door Navigation", d:"The vast majority of doors set into the brick are locked. Testing every handle drains precious stamina in the heat.", c:"green", l:"Look for doors with rust concentrated heavily around the hinges and handle; these are usually the ones frequently used and unlocked."},
                    {n:"Machinery Deafness", d:"The mechanical noise covers the sounds of approaching entities. You cannot rely on your ears here.", c:"teal", l:"Rely on visual cues and feel for vibrations through the soles of your boots. Heavy entities cause the floor plates to shake."},
                    {n:"Toxic Viscosity", d:"Puddles of thick black fluid (anomalous tar) are highly flammable, sticky, and retain boiling heat.", c:"cyan", l:"If coated, do not use friction to wipe it off; it will ignite. Smother it in dirt or dust from the brick walls."},
                    {n:"Claustrophobia Management", d:"Hallways frequently shrink to 0.8m wide, inducing severe panic attacks in the heat.", c:"fuchsia", l:"Focus your eyes entirely on a single pipe running parallel to you to ground your depth perception and prevent vertigo."},
                    {n:"Wretch Encounters", d:"Former wanderers driven mad by the heat wander aimlessly. They are highly aggressive and cannibalistic.", c:"yellow", l:"They are blinded by the tar but have acute hearing. Freeze completely until they pass your location."},
                    {n:"Bypassing Dead Ends", d:"Linear corridors often end abruptly in solid brick walls, creating frustrating dead ends.", c:"gray", l:"These are usually spatial illusions. Close your eyes, trail your hand on the pipe, and walk forward slowly to phase through."}
                ],
                [
                    {n:"Ambient Thermometer", i:"ph-thermometer"}, {n:"5L Thermal Water Jug", i:"ph-drop"}, {n:"Breakable Chemical Glowsticks", i:"ph-lightbulb"}, {n:"Miniature Foam Extinguisher", i:"ph-fire-extinguisher"}, {n:"Heat-Resistant Leather Gloves", i:"ph-shield"},
                    {n:"Carbon-filter Gas Mask", i:"ph-mask-water"}, {n:"Blunt Force Weapon (Lead Pipe)", i:"ph-sword"}, {n:"Burn Salve & Gauze", i:"ph-first-aid"}, {n:"Decibel-reducing Earplugs", i:"ph-ear"}, {n:"Lockpicking Kit", i:"ph-key"}
                ]
            ),
            history: renderHistory([
                {date:"MAY 20, 2010", t:"The Heatwave Breach", d:"Explorers successfully breach a rusted iron door from the edges of Level 1, immediately encountering the extreme 40°C temperatures of Level 2. The expedition is aborted after 3 hours due to heat exhaustion."},
                {date:"JANUARY 10, 2013", t:"First Recorded Clump", d:"A wanderer records an amalgamation of limbs dropping from a vent on a camcorder. The footage is recovered near a pile of bloody clothes, marking the official classification of Entity 5."},
                {date:"SEPTEMBER 5, 2014", t:"The Office Space Oasis", d:"A small pocket dimension labeled 'The Office Space' (Level 2.1) is found locked behind a maintenance door. It provides a cool, safe haven for scavengers, leading to a temporary boom in Level 2 exploration."},
                {date:"MARCH 12, 2017", t:"Smiler Migration Documented", d:"A massive influx of Smilers moves into Sector 4 due to a long-term power failure. Over 40 wanderers are killed in the resulting darkness before the lights anomalously reactivate."},
                {date:"FEBRUARY 8, 2019", t:"M.E.G. Foraging Ban", d:"The Major Explorer Group officially bans extended foraging and base-building in Level 2 due to an 80% casualty rate among engineers trying to tap the pipes for water."},
                {date:"OCTOBER 30, 2020", t:"Pipe Rupture Event", d:"A 40-mile stretch of piping ruptures simultaneously, flooding the corridors with boiling tar. The event shifts the topography of the level permanently, destroying known safe routes to Level 3."},
                {date:"APRIL 14, 2022", t:"Discovery of Level 2.1 vent", d:"A desperate wanderer fleeing a Hound crawls into a superheated vent and discovers it leads back to a larger instance of The Office Space, establishing a new bypass route."},
                {date:"NOVEMBER 25, 2023", t:"Wretch Transformation Witnessed", d:"L-Corp drones record the full 72-hour transformation of a dehydrated wanderer into a Wretch. The footage is classified due to extreme psychological distress."},
                {date:"JULY 19, 2025", t:"B.N.T.G. Convoy Ambushed", d:"A heavily armed Trade Group convoy attempting to move supplies to Level 3 is ambushed by a coordinated pack of Clumps. Fire is used to repel them, but the smoke suffocates half the convoy."},
                {date:"MAY 3, 2026", t:"Thermal Plating Required", d:"L-Corp mandates that all field agents passing through Level 2 must wear proprietary active-cooling thermal plating due to a recent 2°C baseline increase in the level's core temperature."}
            ]),
            resonanceLogs: [
                "> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL ANALYSIS:</span>", "  - METAL FATIGUE DETECTED IN PIPES", "  - STEAM PRESSURE CRITICAL IN SECTOR 7",
                "<br>> <span class='text-purple-400'>COGNITITIVE HAZARD DETECTED:</span>", "  - CLAUSTROPHOBIA INDUCING GEOMETRY", "  - HEAT DELIRIUM PROBABILITY: 88%",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 1 CLUMP IN CEILING CAVITY (ABOVE).", "  - 4 SMILERS IN SECTOR 7G.", "  - 12 WRETCHES ROAMING.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" }, { label: "ELECTRICAL HAZARD", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: { seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Elevator (Level 4)", color: "#3b82f6", icon: "↕" }, { name: "Skin-Stealer", color: "#a855f7", icon: "👤" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "2.1%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±10.0s/24h (EM Interference)", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "70.0 H (Unstable)", "Kant Counter Reading": "0.70", "Euclidean Consistency": "40.0% (Highly Warped)", "Noclipping Threshold": "Moderate Permeability", "Spatial Dilation Factor": "1:2.1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "5.5%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "25.0 °C", "Relative Humidity": "40%", "Atmospheric Pressure": "100.1 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "High Ozone Concentration", "Static Charge Density": "Extreme (+50kV/m)", "Chemical Odor Profile": "Ozone, Copper, Burnt Flesh" },
                "Acoustic & Luminescent": { "Ambient Hum": "Deafening Transformer Buzz", "Acoustic Reverberation": "High", "Luminosity Level": "0-800 Lux (Strobing)", "Color Temperature": "5000 K (Harsh White)", "Audio Hallucination Risk": "15%", "Sub-sonic Interference": "Extreme" },
                "Material & Biological": { "Toxicity Levels": "Copper Poisoning Risk", "Pathogen Level": "Low", "Structural Integrity": "Metal Grating / Exposed Wires", "Entity Density": "Extreme Infestation", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "N/A" },
                "Survival & Infrastructure": { "Base Threat Level": "4", "Sanity Drain Rate": "3.0% per Hour", "Isolation Factor": "Moderate (Hunted)", "Radio Comm Integrity": "0% (EM Jamming)", "GPS Functionality": "Offline", "Electrical Availability": "Lethal Voltages", "Rescue Probability": "Near Zero" }
            },
            lore: renderLore(
                "Level 3 is a series of long, dark, twisting hallways resembling an industrial prison complex or a massive electrical substation. It is one of the most dangerous, entity-dense levels in the early Backrooms.",
                [
                    "Level 3 shares visual similarities with the maintenance tunnels of Level 2, but the environment is significantly darker, more metallic, and incredibly hostile. The architecture consists of exposed copper pipes, thick iron bars, metal grating floors, and massive, sparking electrical generators. The noise in Level 3 is absolutely deafening. A constant cacophony of whirring turbines, grinding metal, and the violent popping of high-voltage electronics makes hearing approaching entities nearly impossible. The air heavily smells of ozone and oxidized copper.",
                    "The entity density in Level 3 is extraordinarily high, earning it a Class 4 classification. Hounds hunt in organized packs, Facelings wander aimlessly, Wretches ambush from the dark, Skin-Stealers mimic human cries for help, and Smilers dominate the unlit sectors. Wanderers entering Level 3 are advised to move as quickly and quietly as possible, though stealth is incredibly difficult given the loose debris and metal grating that cover the floors. Engaging in combat here is essentially a death sentence due to the sheer number of hostiles that will swarm upon hearing a struggle.",
                    "Despite the immense, lethal danger, Level 3 is highly sought after by factions because it is incredibly rich in valuable resources. Hidden within the electrical fuse boxes and supply rooms are caches of Fire Salt, Royal Rations, Almond Water, and anomalous weaponry. The layout is somewhat similar to Level 0 in its non-Euclidean nature, but features distinct 'cell blocks' that repeat. Due to the massive, unregulated electrical grid, exposed live wires are common. Accidentally brushing against the walls in the dark can result in instant electrocution from 10,000-volt arcs."
                ],
                [
                    "Unlocked, heavily reinforced fire doors in Level 2 generally lead directly into the electrical station.",
                    "Elevators in Level 4 can occasionally travel down here if a specific sequence of buttons is pressed.",
                    "Falling through weak points in the floor of Level 5 can rarely deposit a wanderer into the ceiling grates of Level 3."
                ],
                [
                    "Working elevators are the only confirmed, safe method to reach Level 4 or Level 5. They are usually found in the central hubs.",
                    "Wooden doors featuring anomalous, glowing keyholes occasionally lead to Level 31.",
                    "Locking yourself inside a power breaker box (not recommended) can sometimes clip you into Level 0."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "2.1%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±10.0s/24h (EM Interference)", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "70.0 H (Unstable)", "Kant Counter Reading": "0.70", "Euclidean Consistency": "40.0% (Highly Warped)", "Noclipping Threshold": "Moderate Permeability", "Spatial Dilation Factor": "1:2.1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "5.5%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "25.0 °C", "Relative Humidity": "40%", "Atmospheric Pressure": "100.1 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "High Ozone Concentration", "Static Charge Density": "Extreme (+50kV/m)", "Chemical Odor Profile": "Ozone, Copper, Burnt Flesh" },
                    "Acoustic & Luminescent": { "Ambient Hum": "Deafening Transformer Buzz", "Acoustic Reverberation": "High", "Luminosity Level": "0-800 Lux (Strobing)", "Color Temperature": "5000 K (Harsh White)", "Audio Hallucination Risk": "15%", "Sub-sonic Interference": "Extreme" },
                    "Material & Biological": { "Toxicity Levels": "Copper Poisoning Risk", "Pathogen Level": "Low", "Structural Integrity": "Metal Grating / Exposed Wires", "Entity Density": "Extreme Infestation", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "N/A" },
                    "Survival & Infrastructure": { "Base Threat Level": "4", "Sanity Drain Rate": "3.0% per Hour", "Isolation Factor": "Moderate (Hunted)", "Radio Comm Integrity": "0% (EM Jamming)", "GPS Functionality": "Offline", "Electrical Availability": "Lethal Voltages", "Rescue Probability": "Near Zero" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"High Entity Density", d:"Do not attempt to fight. You are severely outnumbered. Firing a gun will draw every entity in a 5-mile radius to your exact location.", c:"red", l:"Use the deafening machinery noise to mask your sprinting footsteps. Move only when generators are peaking in volume."},
                    {n:"Electrocution Hazard", d:"Exposed live wires hang from the ceiling and arc against the metal walls. Touching the wrong surface results in instant death.", c:"yellow", l:"Stay in the exact dead-center of the hallways. Do not touch metal grates. Wear thick rubber-soled boots."},
                    {n:"Hound Packs", d:"Unlike other levels, Hounds hunt in highly organized, coordinated packs here, flanking prey.", c:"orange", l:"If they acquire your scent, seek a chain-link fenced area, enter it, and secure the gate with a heavy padlock."},
                    {n:"Resource Scavenging", d:"Fire Salt and Royal Rations are hidden inside the electrical fuse boxes lining the walls.", c:"blue", l:"Only open grey fuse boxes. Yellow ones are rigged with cognitohazards or live 10kV traps."},
                    {n:"Skin-Stealer Deception", d:"Skin-Stealers wear the flayed skin of human victims and cry for help to lure empathetic wanderers into the dark.", c:"purple", l:"If they ask for help but their voice echoes mechanically or stutters like a broken record, ignore them and run."},
                    {n:"Metal Flooring", d:"The metal grating floors amplify vibrations, announcing your presence to ambush predators.", c:"cyan", l:"Walk on the solid concrete borders supporting the grates, rather than the metal grates themselves."},
                    {n:"Elevator Activation", d:"The elevators to Level 4 require power to operate, and are often deactivated.", c:"fuchsia", l:"You must manually bridge power from a nearby generator to the elevator shaft. Wear insulated rubber gloves."},
                    {n:"Wi-Fi Anomalies", d:"Wi-Fi signals are incredibly strong here (e.g., 'L3_FREE'), but they are anomalous traps that intercept your devices.", c:"green", l:"Do not connect. It downloads a virus that flashes your screen at max brightness and blares an alarm to attract entities."},
                    {n:"Copper Toxicity", d:"The air tastes heavily of copper and ozone. Open wounds will absorb the oxidized copper, leading to blood poisoning.", c:"teal", l:"Bleeding here attracts entities 10x faster due to the metallic air synergy. Use hemostatic clotting agents instantly on any cut."},
                    {n:"No Sleep Protocol", d:"Sleeping in Level 3 is a death sentence. You will be found and consumed before you wake.", c:"gray", l:"Consume adrenaline or Fire Salt. Push through the exhaustion and do not stop until you reach the elevators to Level 4."}
                ],
                [
                    {n:"High-Voltage Rubber Gloves", i:"ph-hand-palm"}, {n:"Thick Rubber-Soled Boots", i:"ph-boot"}, {n:"Non-Conductive Weapon (Wood)", i:"ph-sword"}, {n:"Firearm (Emergency Use Only)", i:"ph-crosshair"}, {n:"EMP Grenades (Stuns entities)", i:"ph-lightning"},
                    {n:"Hemostatic Clotting Agents", i:"ph-first-aid"}, {n:"Adrenaline Syringes", i:"ph-pill"}, {n:"Insulated Wire Cutters", i:"ph-wrench"}, {n:"Heavy Padlocks (For gates)", i:"ph-lock-key"}, {n:"Tactical Strobe Light", i:"ph-flashlight"}
                ]
            ),
            history: renderHistory([
                {date:"AUGUST 19, 2012", t:"The Death Trap Discovery", d:"Explorers fleeing the heat of Level 2 enter a fire exit, realizing too late they are trapped in a high-threat zone. The group is wiped out within 20 minutes by a Hound pack. The audio log is recovered months later."},
                {date:"MARCH 5, 2015", t:"Base Gamma Overrun", d:"M.E.G. attempts to establish an armed outpost (Base Gamma) to harvest Fire Salt. It is utterly destroyed by a massive swarm of Skin-Stealers in 72 hours. Only 3 agents escape to Level 4."},
                {date:"NOVEMBER 11, 2017", t:"Fire Salt Extraction Perfected", d:"B.N.T.G. scavengers devise a method to safely extract Fire Salt from the fuse boxes without triggering the explosive electrical traps, making Level 3 the primary source of ammunition and fuel."},
                {date:"FEBRUARY 14, 2019", t:"The Great Generator Reboot", d:"An unknown wanderer manages to trigger a massive, dormant generator. The resulting surge lights up a previously pitch-black sector, vaporizing dozens of Smilers but rendering the area too electrified to traverse."},
                {date:"JUNE 9, 2020", t:"Elevator Map Compiled", d:"A comprehensive map of working elevators leading to Level 4 is distributed among survivor groups. Survival rates in Level 3 jump from 12% to 34% as wanderers can now make a beeline for the exits."},
                {date:"SEPTEMBER 22, 2021", t:"Hound Pack Coordination Noted", d:"Researchers observe that Hounds in Level 3 do not act like feral animals, but utilize complex flanking maneuvers and mimic human whistles to flush out prey, indicating elevated intelligence in this level."},
                {date:"JANUARY 13, 2023", t:"Skin-Stealer Mimicry Enhanced", d:"Reports surge of Skin-Stealers perfectly mimicking the voices of M.E.G. operatives over the radio frequencies. M.E.G. institutes a strict daily passcode system to verify human identity."},
                {date:"OCTOBER 04, 2024", t:"Wi-Fi Trap Identified", d:"L-Corp isolates a rogue signal mimicking a safe network. It is discovered that connecting to it triggers a local electromagnetic pulse that disables flashlights while playing a loud siren on the phone."},
                {date:"DECEMBER 25, 2025", t:"Copper Toxicity Protocol", d:"After several agents succumb to heavy metal poisoning, M.E.G. mandates the use of respirator masks to filter out the aerosolized copper particulates saturating the air."},
                {date:"JUNE 10, 2026", t:"Designated Run Zone Only", d:"Level 3 is officially classified as completely unlivable. Scavenging runs are strictly timed to 4-hour windows with heavily armed escorts."}
            ]),
            resonanceLogs: [
                "> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL DANGER:</span>", "  - 10kV DETECTED ON LOCAL GRID ARCING TO GRATES",
                "<br>> <span class='text-red-500'>MASSIVE ENTITY SIGNATURES:</span>", "  - 24 HOSTILES IN 100M RADIUS. THEY ARE AWARE OF YOUR PRESENCE.",
                "<br>> <span class='text-purple-400'>RADIO FREQUENCY HIJACK:</span>", "  - ENTITY MIMICKING DISTRESS SIGNAL DETECTED.",
                "<br>> <span class='text-yellow-400'>SURVIVAL PROBABILITY:</span>", "  - 4.2%",
                "<br>> UPLOADING AND SEVERING CONNECTION."
            ]
        },

        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }, { label: "HABITABLE", class: "bg-teal-500/10 text-teal-400 border-teal-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Trap", color: "#000", icon: "🪟" }, { name: "Vending Machine", color: "#f59e0b", icon: "🍫" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.1%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "100.0 H (Stable)", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.0% (Near Perfect)", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "21.0 °C (Comfortable)", "Relative Humidity": "45%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "None", "Static Charge Density": "High (Carpet Friction)", "Chemical Odor Profile": "Clean Linen, Rain, Coffee" },
                "Acoustic & Luminescent": { "Ambient Hum": "Soft A/C Breeze", "Acoustic Reverberation": "Low (Absorbed by carpet)", "Luminosity Level": "500-600 Lux", "Color Temperature": "4500 K (Neutral White)", "Audio Hallucination Risk": "1%", "Sub-sonic Interference": "None" },
                "Material & Biological": { "Toxicity Levels": "Safe", "Pathogen Level": "Sterile", "Structural Integrity": "Perfect (Office Drywall)", "Entity Density": "Near Zero (Except Windows)", "Organic Decay Rate": "Slightly Slower", "Carpet/Floor Fluid Toxicity": "None" },
                "Survival & Infrastructure": { "Base Threat Level": "0.5", "Sanity Drain Rate": "-1.0% per Hour (Restorative)", "Isolation Factor": "Low", "Radio Comm Integrity": "100%", "GPS Functionality": "Online (Local Map)", "Electrical Availability": "High (Safe Outlets)", "Rescue Probability": "High" }
            },
            lore: renderLore(
                "Level 4 resembles an infinite, abandoned corporate office building. It is a stark contrast to the brutal death-trap of Level 3, serving as a sanctuary, trade hub, and the primary base of operations for the M.E.G.",
                [
                    "Level 4 is an infinite expanse of mostly empty office space. The architecture is incredibly mundane and modern, featuring thin, well-kept grey carpeting, cubicle dividers, beige walls, and drop ceilings with fully functioning, non-flickering fluorescent lights. There is no maddening hum-buzz like in Level 0; instead, the level is accompanied by the soft, soothing hum of air conditioning or occasionally the faint, muffled sound of rain hitting unseen glass. The environment is entirely sterile, devoid of the grime, rust, and biological decay found in the previous levels.",
                    "This level is a massive sanctuary for wanderers. Entities are almost completely nonexistent here. Hounds and Facelings are incredibly rare, usually only found if they managed to follow a wanderer up an elevator from Level 3, and they are quickly dispatched by heavily armed patrols. The only native and prominent threat is the 'Window' entity—anomalous creatures that disguise themselves as glass windows leading to a dark exterior. Because of its safety, the M.E.G. (Major Explorer Group) has established Base Omega here, their largest and most secure settlement. The B.N.T.G. (Backrooms Non-Aligned Trade Group) also runs their central banking and trading operations from the vast open-plan office sectors.",
                    "Scattered generously throughout Level 4 are water coolers that dispense infinitely replenishing, 100% pure Almond Water, making dehydration virtually impossible. Vending machines containing safe, edible Frontrooms-style snacks operate without needing coins. Wanderers use this level to rest, heal, trade for better gear, and recover their sanity before deciding to push deeper into the Backrooms or settle down permanently within the safety of the M.E.G. perimeter."
                ],
                [
                    "Arriving via the industrial freight elevators from Level 3. This is the standard, most reliable method of entry.",
                    "Following B.N.T.G. marked trails from Level 1 through anomalous sub-levels.",
                    "Noclipping through specific, pristine white doors in Level 2 (Very rare)."
                ],
                [
                    "Finding a grand, ornate stairwell (which looks completely out of place in the modern office) and walking up leads to the hotel of Level 5.",
                    "Breaking a regular window (ensure it is not an entity) and jumping out may drop you into Level 6, though this is highly discouraged due to the extreme danger.",
                    "Falling asleep under a specific desk in Sector 42 occasionally transports wanderers to Level 153."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.1%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low", "Memory Degradation": "Baseline" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "100.0 H (Stable)", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.0% (Near Perfect)", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "21.0 °C (Comfortable)", "Relative Humidity": "45%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "None", "Static Charge Density": "High (Carpet Friction)", "Chemical Odor Profile": "Clean Linen, Rain, Coffee" },
                    "Acoustic & Luminescent": { "Ambient Hum": "Soft A/C Breeze", "Acoustic Reverberation": "Low (Absorbed by carpet)", "Luminosity Level": "500-600 Lux", "Color Temperature": "4500 K (Neutral White)", "Audio Hallucination Risk": "1%", "Sub-sonic Interference": "None" },
                    "Material & Biological": { "Toxicity Levels": "Safe", "Pathogen Level": "Sterile", "Structural Integrity": "Perfect (Office Drywall)", "Entity Density": "Near Zero (Except Windows)", "Organic Decay Rate": "Slightly Slower", "Carpet/Floor Fluid Toxicity": "None" },
                    "Survival & Infrastructure": { "Base Threat Level": "0.5", "Sanity Drain Rate": "-1.0% per Hour (Restorative)", "Isolation Factor": "Low", "Radio Comm Integrity": "100%", "GPS Functionality": "Online (Local Map)", "Electrical Availability": "High (Safe Outlets)", "Rescue Probability": "High" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Rest and Resupply", d:"Level 4 is the ideal place to recover sanity, heal wounds, and gather supplies. Do not rush to leave.", c:"blue", l:"Sleep in the center of the cubicles; the acoustic fabric naturally blocks out the ambient noise, providing the best rest in the Backrooms."},
                    {n:"The Window Threat", d:"Despite the overarching safety, Windows are a lethal, instant-kill threat that lure wanderers.", c:"purple", l:"Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter. If a window shows an outdoor scene, it is an entity."},
                    {n:"Water Cooler Foraging", d:"The water coolers contain the highest purity Almond Water available.", c:"green", l:"Always check the tap before drinking. If it dispenses a thick red liquid instead of clear water, do not drink it; it is liquid pain."},
                    {n:"Vending Machine Exploits", d:"Vending machines contain Frontrooms-style snacks and do not require coins.", c:"yellow", l:"If a machine is stuck, simply press the button sequence: 4-2-8-1. It forces the anomalous dispensing mechanism to trigger."},
                    {n:"Base Omega Registration", d:"Register with the M.E.G. upon arrival for protection, medical care, and a safe place to sleep.", c:"orange", l:"Do not give them your real name. Use an alias. The Backrooms architecture sometimes uses written names for anomalous tracking."},
                    {n:"Hound Stragglers", d:"Rarely, a Hound manages to follow an elevator up from Level 3.", c:"red", l:"The bright, sterile lights disorient them. Stare them down confidently; they will almost always flee rather than attack in this environment."},
                    {n:"Static Shocks", d:"The pristine synthetic carpet builds massive amounts of static electricity as you walk.", c:"cyan", l:"Touch a metal cubicle frame every 10 minutes to discharge safely. Letting it build up can damage your electronic devices."},
                    {n:"Trade Etiquette", d:"Level 4 is the economic heart of the Backrooms. The B.N.T.G. controls the market.", c:"teal", l:"Trade medical supplies and weapons for information, not water. Water is hyper-abundant here and has no trade value."},
                    {n:"Printer Anomalies", d:"Office printers plugged into nothing will occasionally print pages on their own.", c:"fuchsia", l:"Read them carefully. They often map out nearby exits, safe zones, or provide warnings about entity migrations."},
                    {n:"Stairwell Transitions", d:"Finding an ornate stairwell is the safest way forward to Level 5.", c:"gray", l:"If the stairs go down instead of up, do not enter. It leads to Level 6, a pitch-black death trap."}
                ],
                [
                    {n:"Empty Canteens (For stockpiling)", i:"ph-drop"}, {n:"High-Value Trade Goods", i:"ph-hand-coins"}, {n:"Comfortable Sleeping Bag", i:"ph-sleeping-bag"}, {n:"Journal / Pen (For mapping)", i:"ph-book"}, {n:"Anti-Static Grounding Strap", i:"ph-shield-check"},
                    {n:"Sanity Restorative Meds", i:"ph-first-aid"}, {n:"Utility Knife (For crafting)", i:"ph-knife"}, {n:"Large Duffel Bag (Looting)", i:"ph-bag"}, {n:"Camera (To document safe zones)", i:"ph-camera"}, {n:"Short-wave Radio (Comms work here)", i:"ph-radio"}
                ]
            ),
            history: renderHistory([
                {date:"SEPTEMBER 12, 2012", t:"The Ascent to Paradise", d:"A group of battered, starving wanderers takes an elevator up from Level 3. Expecting another nightmare, the doors open to the pristine, safe office space. They cry in relief. This audio is the first record of Level 4."},
                {date:"NOVEMBER 11, 2014", t:"M.E.G. Base Omega Founded", d:"The M.E.G. realizes the strategic value of Level 4's safety and resources. They relocate their primary civilian housing and central command here, fortifying a 10-mile radius."},
                {date:"MARCH 22, 2016", t:"The Window Massacre", d:"Before the Window entities are properly understood, a group of 12 wanderers mistakes an anomalous window showing a forest for an exit. All 12 are pulled into the void. Window avoidance protocol is established."},
                {date:"DECEMBER 1, 2018", t:"B.N.T.G. Headquarters Built", d:"The Trade Group sets up their central bank and barter exchange in a massive open-plan sector, establishing a standardized economy using Almond Water and Fire Salt."},
                {date:"JULY 14, 2020", t:"Agriculture Attempt Success", d:"Wanderers successfully grow Baseline Reality vegetation (potatoes and wheat) in planters using modified fluorescent lighting, creating a renewable food source independent of crates."},
                {date:"AUGUST 30, 2022", t:"Vending Machine Exploit", d:"A wanderer discovers the 4-2-8-1 button sequence, allowing infinite extraction of snacks from the machines without triggering the anomalous lock mechanism."},
                {date:"FEBRUARY 18, 2024", t:"The Water Cooler Purge", d:"A rogue faction attempts to poison the water coolers in Sector 4 to extort the M.E.G. The faction is swiftly exiled to Level 3. Water testing becomes mandatory."},
                {date:"APRIL 3, 2025", t:"L-Corp Observer Nodes Online", d:"Liminality Corp quietly embeds their proprietary telemetry nodes into the M.E.G. networking infrastructure, gaining full access to all M.E.G. database communications without detection."},
                {date:"NOVEMBER 11, 2025", t:"Static Shock Syndrome", d:"A bizarre anomaly causes the static electricity in Sector 9 to reach lethal levels, electrocuting two wanderers. The sector is grounded using massive copper cables."},
                {date:"MARCH 12, 2026", t:"Population Exceeds 10,000", d:"Base Omega and the surrounding civilian settlements officially surpass 10,000 residents, cementing Level 4 as the true capital of the Backrooms."}
            ]),
            resonanceLogs: [
                "> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99.9% STABLE",
                "<br>> <span class='text-blue-400'>RESOURCE TRACKING:</span>", "  - 402 ALMOND WATER DISPENSERS IN 1KM RADIUS", "  - 14 VENDING MACHINES",
                "<br>> <span class='text-yellow-400'>SCANNING FOR COGNITOHAZARDS:</span>", "  - WARNING: WINDOW ANOMALY LOCATED AT X:24, Y:-90",
                "<br>> <span class='text-green-400'>POPULATION DENSITY:</span>", "  - 10,249 HUMAN LIFE SIGNS DETECTED",
                "<br>> <span class='text-purple-400'>M.E.G. COMM INTERCEPT:</span>", "  - DECRYPTING PACKETS... [SUCCESS]",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            themeColor: "#b45309", themeHover: "#92400e", themeGlow: "rgba(180, 83, 9, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "PSYCHOLOGICAL HAZARD", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }, { label: "ENTITY HIVE", class: "bg-red-500/10 text-red-400 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDUxYTAzIi8+PHBhdGggZD0iTTAgMEwxMiAxMk0xMiAwTDAgMTIiIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 50401, wallDensity: 0.7, renderStyle: 'diagonal', gridSize: 8, poiChance: 0.03, wallColor: '#b45309', gridColor: 'rgba(217, 119, 6, 0.1)', wallThickness: 0.2, bgColor: '#291001', pois: [ { name: "Beverly Room", color: "#10b981", icon: "🍸" }, { name: "Deathmoth Hive", color: "#f59e0b", icon: "🦋" }, { name: "Boiler Room", color: "#dc2626", icon: "🔥" }, { name: "Room 54 (Trap)", color: "#8b5cf6", icon: "🚪" } ] },
            specificMetrics: {
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Psychological Dilation", "Temporal Loop Probability": "44.4%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Extreme (Time feels stopped)", "Memory Degradation": "+15% (Auditory)" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "85.0 H (Stable)", "Kant Counter Reading": "0.85", "Euclidean Consistency": "70.0% (Repeating Wings)", "Noclipping Threshold": "Low Permeability", "Spatial Dilation Factor": "1:3", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "1.2%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "23.0 °C", "Relative Humidity": "30%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "Trace Arsenic (Airborne)", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Mahogany, Dust, Old Perfume" },
                "Acoustic & Luminescent": { "Ambient Hum": "Looping 1920s Jazz Music", "Acoustic Reverberation": "Low", "Luminosity Level": "200-400 Lux (Sconces)", "Color Temperature": "2500 K (Warm Gold)", "Audio Hallucination Risk": "80%", "Sub-sonic Interference": "Moderate" },
                "Material & Biological": { "Toxicity Levels": "Trace Arsenic (Wallpaper)", "Pathogen Level": "Low", "Structural Integrity": "High (Pristine)", "Entity Density": "High (Deathmoths)", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "None" },
                "Survival & Infrastructure": { "Base Threat Level": "2", "Sanity Drain Rate": "2.5% per Hour", "Isolation Factor": "Moderate", "Radio Comm Integrity": "50%", "GPS Functionality": "Offline", "Electrical Availability": "Sconces Only", "Rescue Probability": "Moderate" }
            },
            lore: renderLore(
                "Level 5 is an infinite hotel complex constructed in early 20th-century Art Deco architecture. Despite its lavish appearance, it is a massive psychological trap and the primary hive for Deathmoths.",
                [
                    "Level 5 takes on the appearance of a lavishly decorated, yet completely abandoned, 1930s hotel. Ornate mahogany doors, detailed gold-leaf wallpaper, plush red carpets, and antique furniture cover the endless, repeating hallways. Much of the level is pristine, as if constantly maintained by an unseen staff. However, wanderers report an overarching, intense feeling of being watched, leading to severe paranoia and anxiety if isolated for too long. The silence is broken only by the faint, muffled sound of looping 1920s jazz music playing from an undetectable source, which slowly degrades the sanity of anyone listening to it.",
                    "The primary entity threat in Level 5 comes from Deathmoths. The level is considered the central hive for these creatures. Male Deathmoths are completely harmless and passively flutter around the light fixtures. However, the giant Female Deathmoths are fiercely aggressive, territorial, and highly dangerous. They spit a corrosive acid that melts flesh and bone. They are intensely attracted to the ornate brass wall sconces that provide the level's warm lighting, building massive nests of thick, grey silk in the hotel's ballrooms and lobbies.",
                    "There are three main notable areas in Level 5: The Main Hotel (the infinite hallways and rooms), The Beverly Room (a massive, beautiful ballroom completely cleared of entities and used as a safe trading hub by the B.N.T.G.), and The Boiler Room (a searingly hot, rusty labyrinth underneath the hotel where Clumps and Hounds reside). Wanderers use the Beverly Room to rest, but must eventually brave the Boiler Room to find an exit."
                ],
                [
                    "Ascending the ornate, out-of-place stairs found in the office space of Level 4.",
                    "Taking a specific elevator from Level 3 (if it survives the journey).",
                    "Entering an antique door found in the back of Tom's Diner in Level 1."
                ],
                [
                    "Going too deep into the searing heat of the Boiler Room eventually transitions into the pitch-black void of Level 6.",
                    "Entering dark, unlit hotel rooms and waiting for the door to close can sometimes transport you to Level 63.",
                    "Finding a specific, anomalous arcade cabinet in a lounge area leads to Level 3999."
                ],
                {
                    "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Psychological Dilation", "Temporal Loop Probability": "44.4%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Extreme (Time feels stopped)", "Memory Degradation": "+15% (Auditory)" },
                    "Spatial & Dimensional": { "Hume Level (Reality)": "85.0 H (Stable)", "Kant Counter Reading": "0.85", "Euclidean Consistency": "70.0% (Repeating Wings)", "Noclipping Threshold": "Low Permeability", "Spatial Dilation Factor": "1:3", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "1.2%" },
                    "Atmospheric Diagnostics": { "Ambient Temp (Core)": "23.0 °C", "Relative Humidity": "30%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "Trace Arsenic (Airborne)", "Static Charge Density": "Neutral", "Chemical Odor Profile": "Mahogany, Dust, Old Perfume" },
                    "Acoustic & Luminescent": { "Ambient Hum": "Looping 1920s Jazz Music", "Acoustic Reverberation": "Low", "Luminosity Level": "200-400 Lux (Sconces)", "Color Temperature": "2500 K (Warm Gold)", "Audio Hallucination Risk": "80%", "Sub-sonic Interference": "Moderate" },
                    "Material & Biological": { "Toxicity Levels": "Trace Arsenic (Wallpaper)", "Pathogen Level": "Low", "Structural Integrity": "High (Pristine)", "Entity Density": "High (Deathmoths)", "Organic Decay Rate": "Standard", "Carpet/Floor Fluid Toxicity": "None" },
                    "Survival & Infrastructure": { "Base Threat Level": "2", "Sanity Drain Rate": "2.5% per Hour", "Isolation Factor": "Moderate", "Radio Comm Integrity": "50%", "GPS Functionality": "Offline", "Electrical Availability": "Sconces Only", "Rescue Probability": "Moderate" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Deathmoth Avoidance", d:"Female Deathmoths are attracted to light and are highly territorial. Their acid is lethal.", c:"orange", l:"Avoid areas with broken sconces or flickering lights; it means a female claimed it and destroyed the bulb to rest."},
                    {n:"The Jazz Loop Paranoia", d:"The looping 1920s music induces severe anxiety, paranoia, and the feeling of being hunted.", c:"fuchsia", l:"Wear earplugs. If the music suddenly stops, hide immediately—it means the environment is resetting."},
                    {n:"The Beverly Room", d:"The massive ballroom is a cleared safe zone maintained by factions.", c:"green", l:"Use the ballroom to trade for weapons and heat-resistant gear before attempting to enter the Boiler Room."},
                    {n:"Boiler Room Clumps", d:"The sub-level is infested with Clumps that hide in the massive rusted pipes.", c:"red", l:"Never go into the Boiler Room unless absolutely necessary to reach Level 6. Stay in the center of the paths."},
                    {n:"Arsenic Wallpaper", d:"The beautiful gold-leaf wallpaper contains toxic trace elements of arsenic, accurate to real 19th-century decor.", c:"yellow", l:"Do not touch the walls. If you do, wash your hands with Almond Water immediately to prevent absorption."},
                    {n:"Room 54", d:"There are rumors of a Room 54 that contains immense wealth, weapons, and an exit to the Frontrooms.", c:"blue", l:"It is a psychological trap created by the level. Room 54 does not exist. Do not look for it; you will walk forever."},
                    {n:"Furniture Hallucinations", d:"Due to the sanity drain, couches and chairs may appear to breathe or watch you.", c:"purple", l:"Sit on the floor. Do not trust the furniture; some entities camouflage perfectly as armchairs."},
                    {n:"Mirror Evasion", d:"Bathrooms contain mirrors that reflect incorrect timelines or delayed movements.", c:"cyan", l:"Keep your head down when washing your face in the sinks. Looking into the mirror can induce a dissociative state."},
                    {n:"Male Deathmoth Utility", d:"Males are harmless and produce a healing silk when they land.", c:"gray", l:"Let them land on you. Do not swat them; crushing them releases a pheromone that summons enraged females."},
                    {n:"Elevator Buttons", d:"Elevators here have buttons that go up to floor 300, despite the hotel logically having no roof.", c:"teal", l:"Never press a button above 12. The air thins out completely, leading to suffocation in an empty hallway."}
                ],
                [
                    {n:"Industrial Earplugs (Crucial)", i:"ph-ear"}, {n:"Chemical Moth Repellent", i:"ph-bug"}, {n:"Respirator (For Boiler Room)", i:"ph-mask-water"}, {n:"Long-reach Spear (For Deathmoths)", i:"ph-sword"}, {n:"Red-light Headlamp (Less attractive)", i:"ph-flashlight"},
                    {n:"Acid Burn Kits", i:"ph-first-aid"}, {n:"Anti-psychotic Medication", i:"ph-pill"}, {n:"Almond Water", i:"ph-drop"}, {n:"Hotel Blueprints", i:"ph-map-trifold"}, {n:"Stopwatch (Time reality checks)", i:"ph-watch"}
                ]
            ),
            history: renderHistory([
                {date:"FEBRUARY 2, 2013", t:"The Golden Stairs Discovery", d:"Explorers from Level 4 ascend ornate stairs, finding the hotel. They report the sudden shift from sterile office space to warm, antique luxury."},
                {date:"AUGUST 12, 2015", t:"The Moth King Slain", d:"A coordinated group of wanderers kill a massive Deathmoth King, clearing an entire wing of the hotel and allowing the establishment of safe zones."},
                {date:"DECEMBER 1, 2017", t:"The Beverly Room Treaty", d:"Factions establish a neutral trading hub within the Beverly Room, ensuring that no violence occurs within the ballroom parameters."},
                {date:"MARCH 19, 2019", t:"Boiler Room Mapped", d:"M.E.G. agents map the descent to Level 6 through the Boiler Room, suffering heavy Clump-related casualties but securing the transit route."},
                {date:"OCTOBER 31, 2020", t:"The Jazz Madness Incident", d:"Several wanderers go completely insane from the looping music, barricading themselves in Room 212 and refusing rescue. They are eventually assimilated by the room."},
                {date:"JUNE 14, 2022", t:"Silk Armor Crafted", d:"B.N.T.G. tailors discover how to weave male Deathmoth silk into lightweight, highly acid-resistant armor, revolutionizing exploration in the level."},
                {date:"JANUARY 11, 2024", t:"Arsenic Wallpaper Found", d:"Scientists at Base Omega trace a mysterious, widespread sickness back to wanderers constantly brushing against the vintage wallpaper in Level 5."},
                {date:"SEPTEMBER 05, 2025", t:"Room 54 Expedition Lost", d:"A greedy faction attempts to locate the mythical Room 54. Their telemetry shows them walking straight for 400 miles before all vital signs flatline simultaneously."},
                {date:"FEBRUARY 18, 2026", t:"Beast of Level 5 Rumors", d:"Reports surface of a massive, multi-limbed entity roaming the deepest halls, wearing a bellhop uniform. M.E.G. classifies it as an unconfirmed rumor."},
                {date:"JUNE 28, 2026", t:"Constant Surveillance Established", d:"L-Corp establishes a sensory perimeter around the Beverly Room, monitoring all faction trade and tracking Deathmoth migrations."}
            ]),
            resonanceLogs: [
                "> INITIALIZING ACOUSTIC SCAN...", "> DETECTING LOOPING AUDIO TRACK [1920s_JAZZ.wav]",
                "<br>> <span class='text-fuchsia-400'>COGNITOHAZARD ALERT:</span>", "  - AUDITORY PARANOIA INDUCERS PRESENT. SANITY DRAIN DETECTED.",
                "<br>> <span class='text-orange-400'>BIOLOGICAL ENTITIES:</span>", "  - MASSIVE AERIAL PREDATORS DETECTED (DEATHMOTHS).", "  - HIVE INTELLIGENCE ACTIVE.",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL INTEGRITY:</span>", "  - HOTEL WINGS REPEAT INFINITELY. NON-EUCLIDEAN LOOPS VERIFIED.",
                "<br>> <span class='text-red-400'>SUB-LEVEL THERMAL SPIKE:</span>", "  - BOILER ROOM REACHING 50C.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }
    },
    entities: {
        "entity2": {
            type: "entity", id: "entity2", title: "Entity 2", name: "Windows",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "VOID PREDATOR", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Extremely Aggressive", "Target Preference": "Isolated wanderers", "Hunting Method": "Ambush / Lure", "Patience Level": "Infinite" },
                "Biological & Anatomical": { "Physical Composition": "Shadow/Void Matter", "Cellular Structure": "Non-Baryonic", "Lifespan": "Immortal", "Ectoplasmic Output": "High" },
                "Dimensional Interactions": { "Noclip Capability": "Tethered to Architecture", "Hume Disruption": "1.2m Radius", "Void Link": "Direct connection to Level 1.5" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-red-900 group-hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div><div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-700"><span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20 animate-pulse">APPROACH GLASS (HOVER)</span></div><div class="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-150 flex items-center justify-center z-40 overflow-hidden"><div class="text-red-500 font-mono text-2xl animate-glitch-shift tracking-tighter">YOU ARE MINE</div></div></div></div>`,
            lore: renderLore(
                "Entity 2, universally known as 'Windows', are highly aggressive, stationary ambush predators that camouflage themselves as architectural features to lure in unsuspecting wanderers craving a return to Baseline Reality.",
                [
                    "Windows are insidious entities that physically alter the architecture of a level, manifesting as standard glass windows set into walls that logically should not possess them. The defining characteristic of a Window entity is the image displayed behind the glass. In the vast majority of cases, the Window projects a false, idealized image of the Frontrooms (Baseline Reality)—such as a sunny suburban street, a peaceful forest, or a starry night sky. Wanderers suffering from severe isolation and sanity drain are naturally drawn to these comforting images, often rushing to the glass in a desperate attempt to break through and escape the Backrooms.",
                    "However, the image is a cognitohazardous projection. The true entity resides in the pitch-black void immediately behind the glass. When a wanderer approaches within 1.5 meters of the pane, the glass shatters inward. A shadowy, humanoid figure composed of an oily, light-absorbing void substance immediately lunges out, grabbing the victim with immense, crushing physical force. The entity does not consume the victim on the spot; instead, it drags them kicking and screaming through the window frame into the dark void behind it. Telemetry from dragged agents cuts out immediately upon crossing the threshold, suggesting the void is a localized vacuum or a sub-level of absolute nothingness where the victim is slowly digested.",
                    "Windows are most commonly found in Levels 1, 2, and 4, though they have been reported in nearly every level featuring interior architecture. They are particularly lethal in Level 4 (The Abandoned Office), where standard office windows are expected, allowing them to blend in perfectly. L-Corp agents are trained to observe the lighting; anomalous Windows do not cast actual light into the room, despite displaying brightly lit exterior scenes. Furthermore, throwing objects at the glass from a safe distance will reveal its anomalous nature—the glass will not shatter, but instead ripple like thick, black liquid, and the shadow figure will momentarily press its hands against the pane in frustration."
                ],
                [
                    "Walking within 1.5 meters of an anomalous window.",
                    "Attempting to break the glass with a melee weapon.",
                    "Falling asleep in a room containing a Window entity."
                ],
                [
                    "Using a high-powered laser to blind the entity through the glass before it breaches.",
                    "Severing the entity's grasping limbs with a heavy blade before being pulled in (survival rate: 0.2%).",
                    "The entity retreating if a more powerful predator (e.g., a Smiler swarm) approaches the area."
                ],
                {
                    "Biological & Anatomical": { "Cellular Structure": "Non-Baryonic", "Physical Mass": "Variable (Dense Shadow)", "Regeneration Factor": "Instantaneous", "Ectoplasmic Output": "95.2 mg/L" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Maximum", "Sentience Level": "Predatory Cunning", "Target Preference": "Sanity-Depleted Humans", "Response to Provocation": "Immediate Grapple" },
                    "Dimensional Interactions": { "Noclip Capability": "Creates Localized Voids", "Hume Disruption Radius": "1.5m", "Level Boundary Traversing": "Stationary", "Gravity Resistance": "100%" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"The 2-Meter Rule", d:"Maintain a strict minimum distance of 2 meters from any window in the Backrooms, regardless of what it displays.", c:"red", l:"Their grasping limbs can stretch slightly beyond the window frame. Assume the danger zone is larger than it appears."},
                    {n:"Lighting Inconsistencies", d:"Windows displaying bright sunlight do not actually illuminate the hallway around them.", c:"yellow", l:"Look at your feet. If you are standing in front of a 'sunny' window but casting no shadow, step back immediately."},
                    {n:"Blind Navigation", d:"In levels with high Window density, peripheral vision is safer than direct observation.", c:"purple", l:"Stare at the center of the hallway floor. The cognitohazardous lure effect requires you to look directly at the projected image."},
                    {n:"Do Not Test the Glass", d:"Wanderers often throw rocks at windows to see if they are real. This only enrages the entity.", c:"orange", l:"If you must test it, use a laser pointer. The laser will not reflect off the glass; it will be entirely absorbed by the shadow."},
                    {n:"Grapple Countermeasures", d:"If grabbed, pulling away is ineffective as the entity's grip strength exceeds 4000 PSI.", c:"fuchsia", l:"Aim for the 'eyes' of the shadow. Gouging the upper region of the mass with a knife forces a reflex release."},
                    {n:"Auditory Lures", d:"Windows will occasionally tap on the glass from the inside to get your attention.", c:"blue", l:"The tapping rhythm often mimics the SOS morse code. Ignore it. True survivors do not trap themselves behind glass."},
                    {n:"Windowless Rooms", d:"When setting up camp, ensure the room has absolutely no windows, even small transom ones.", c:"green", l:"If a room has a window, board it up completely before sleeping. The entity cannot breach if the glass is physically covered by wood."}
                ],
                [
                    {n:"Laser Pointer (Testing)", i:"ph-beam"}, {n:"Heavy Machete (Severing limbs)", i:"ph-sword"}, {n:"Opaque Tarp (Covering glass)", i:"ph-tent"}, {n:"Hammer & Nails", i:"ph-hammer"},
                    {n:"High-Lumen Flashlight", i:"ph-flashlight"}, {n:"Earplugs (Blocking taps)", i:"ph-ear-slash"}, {n:"First Aid Kit (Crush injuries)", i:"ph-first-aid"}
                ]
            ),
            history: renderHistory([
                {date:"MARCH 14, 2011", t:"First Recorded Grab", d:"A survivor in Level 4 reports seeing their companion run toward a window showing a grassy field, only for the glass to explode inward and a black mass to drag them screaming into the wall."},
                {date:"JULY 22, 2013", t:"The Mirror Trap Variant", d:"M.E.G. documents a variant of Entity 2 that disguises itself as bathroom mirrors in Level 5. The entity reaches out when the wanderer leans in to wash their face."},
                {date:"NOVEMBER 05, 2015", t:"L-Corp Shadow Analysis", d:"A Liminality Corp drone successfully fires a tracking dart into a Window entity's arm. The telemetry reveals the entity drags victims into a compressed, high-gravity pocket dimension where they are crushed."},
                {date:"FEBRUARY 19, 2018", t:"Board-Up Mandate", d:"Following a massive spike in Window fatalities in Base Omega, M.E.G. mandates that all windows within a 5-mile radius of the base be permanently boarded up with scrap wood."},
                {date:"AUGUST 30, 2020", t:"Entity Infighting", d:"A security camera captures a Hound attempting to attack a wanderer, only for a Window entity to shatter the glass, grab the Hound, and drag it into the void, saving the wanderer's life."},
                {date:"MAY 12, 2024", t:"Cognitohazard Isolation", d:"Researchers confirm the images projected by the windows are telepathically pulled from the specific wanderer's deepest desires. The window literally shows you what you want to see most."},
                {date:"DECEMBER 01, 2025", t:"The 'Glass Shatter' Decoy", d:"A new, highly intelligent Window is observed dropping shards of fake glass on the floor to make it look like the window is already broken and safe to pass through. It then ambushes from the frame."}
            ]),
            resonanceLogs: [
                "> INITIATING TARGETED ENTITY PING...", "> LOCATING ENTITY 2 (WINDOW)",
                "<br>> <span class='text-purple-400'>COGNITOHAZARD DETECTED:</span>", "  - PROJECTING FALSE FRONTIER: [SUMMER_FIELD_04]",
                "<br>> <span class='text-liminal-primary'>VOID TELEMETRY:</span>", "  - MASS DETECTED BEHIND GLASS: 400KG", "  - LIGHT ABSORPTION: 99.9%",
                "<br>> <span class='text-red-500'>ACTION RECOMMENDED:</span>", "  - DO NOT MAKE EYE CONTACT. RETREAT SLOWLY.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity3": {
            type: "entity", id: "entity3", title: "Entity 3", name: "Smilers",
            themeColor: "#ffffff", themeHover: "#e2e8f0", themeGlow: "rgba(255, 255, 255, 0.4)", idleAnimation: "animate-pulse",
            tags: [ { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "LIGHT SENSITIVE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "APEX PREDATOR", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgMkg0TTYgMkg4TTMgOEg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Predatory / Lethal", "Target Preference": "Light sources / Fleeing targets", "Pack Mentality": "Swarm (in Level 6)", "Patience Level": "High" },
                "Biological & Anatomical": { "Physical Mass": "Unknown (Light Absorbing)", "Bioluminescence": "Face Only (150 Lux)", "Thermal Output": "Absolute Zero (-273°C)", "Speed": "85 km/h (Sprint)" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Light Negation": "Aura absorbs ambient photons", "Gravity Resistance": "Standard" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#000] overflow-hidden border-b border-liminal-border cursor-none" id="smiler-container" onmousemove="window.updateSmiler(event, this)"><div class="text-[8px] absolute top-2 left-2 text-liminal-muted font-mono z-20 animate-pulse">MOVE CURSOR TO ILLUMINATE</div><div class="absolute inset-0 bg-black z-10 pointer-events-none" style="background: radial-gradient(circle 120px at var(--x, 50%) var(--y, 50%), transparent 0%, rgba(0,0,0,0.98) 80%, #000 100%);" id="flashlight-mask"></div><div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-75 ease-out animate-float" style="left: 45%; top: 40%;"><div class="flex gap-6"><div class="w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff] animate-pulse"></div><div class="w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff] animate-pulse"></div></div><svg width="70" height="30" viewBox="0 0 40 20" class="mt-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"><path d="M 0 5 Q 20 25 40 5 L 35 12 Q 20 28 5 12 Z" fill="white" class="animate-flicker" /></svg></div><div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-100 ease-out animate-float" style="left: 75%; top: 60%; transform: scale(0.6); opacity: 0.5;"><div class="flex gap-6"><div class="w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff]"></div><div class="w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_20px_#fff]"></div></div><svg width="70" height="30" viewBox="0 0 40 20" class="mt-4"><path d="M 0 5 Q 20 25 40 5 L 35 12 Q 20 28 5 12 Z" fill="white" /></svg></div><script>window.updateSmiler = function(e, container) { const rect = container.getBoundingClientRect(); const x = ((e.clientX - rect.left) / rect.width) * 100; const y = ((e.clientY - rect.top) / rect.height) * 100; container.querySelector('#flashlight-mask').style.setProperty('--x', x + '%'); container.querySelector('#flashlight-mask').style.setProperty('--y', y + '%'); }</script></div>`,
            lore: renderLore(
                "Entity 3, the Smilers, are the apex predators of the dark. Recognizable only by their glowing white eyes and wide, jagged grins, they are responsible for the vast majority of casualties in unlit areas of the Backrooms.",
                [
                    "Smilers exclusively inhabit areas of complete or near-complete darkness. Their physical bodies have never been properly documented, as they possess a biological or anomalous trait that perfectly absorbs all ambient photons, rendering everything but their bioluminescent facial features completely invisible. Thermal imaging is equally useless, as their core body temperature registers at absolute zero, causing them to appear as black voids on infrared cameras. They are most commonly encountered in Level 2's blackouts, Level 3, and completely dominate the pitch-black expanses of Level 6.",
                    "The hunting strategy of a Smiler is terrifyingly simple. They are intensely attracted to light sources and sudden movement. When a wanderer enters a dark zone with a flashlight, Smilers will slowly stalk them, staying just outside the beam's radius. They emit a low, guttural chuckling sound that echoes in the dark, designed to induce panic. If the wanderer panics and begins to run, the Smiler's predator instinct triggers, and they will pursue at speeds exceeding 85 km/h. Escaping a charging Smiler in the dark is mathematically impossible for a standard human.",
                    "Despite their lethality, Smilers have strict behavioral rules that can be exploited. They will not attack if the victim maintains unbroken eye contact and backs away slowly. They are also easily distracted; because they hunt the light rather than the human, throwing a lit flare, glowstick, or even an active flashlight down an opposite hallway will cause the Smiler to chase the object, granting the wanderer a brief window to escape. M.E.G. scientists have also synthesized a chemical compound known as 'Smiler Exterminator,' a highly toxic fluid that severely burns their photo-receptive skin, though using it requires dangerously close proximity."
                ],
                [
                    "Manifesting spontaneously during random rolling blackouts in Level 1 or Level 2.",
                    "Wandering too far from the lit path in Level 6.",
                    "Following the sound of echoing laughter in any dark hallway."
                ],
                [
                    "Throwing an active light source and fleeing in the opposite direction.",
                    "Reaching a heavily illuminated safe zone (Smilers physically cannot enter areas exceeding 500 Lux).",
                    "Spraying Smiler Exterminator directly into their glowing eyes."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "Unknown (Light Absorbing)", "Bioluminescence": "Face Only (150 Lux)", "Thermal Output": "Absolute Zero (-273°C)", "Speed": "85 km/h (Sprint)" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Predatory / Lethal", "Target Preference": "Light sources / Fleeing targets", "Pack Mentality": "Swarm (in Level 6)", "Patience Level": "High" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Light Negation": "Aura absorbs ambient photons", "Gravity Resistance": "Standard" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"The Stare Down", d:"If you see a Smiler, freeze instantly. Do not turn your back, and do not break eye contact.", c:"red", l:"Blink one eye at a time if necessary. Slowly back away until you round a corner or enter a lit area."},
                    {n:"Decoy Lighting", d:"Smilers are attracted to the brightest light source in their vicinity, not your body heat.", c:"yellow", l:"Always carry snap-glowsticks. Crack one, throw it as far as you can down a side corridor, and run the other way once the Smiler lunges for it."},
                    {n:"No Sprinting", d:"Running triggers their predatory chase reflex. You cannot outrun them.", c:"orange", l:"Keep your heart rate down. Walk backward at a steady pace. Panic is your greatest enemy."},
                    {n:"Light Discipline", d:"If you hear their signature laughing but cannot see them, turning on your flashlight might instantly draw them to you.", c:"purple", l:"If you have night vision goggles, use them. If not, use a low-lumen red light—they have difficulty tracking red spectrums."},
                    {n:"Smiler Exterminator", d:"A proprietary chemical weapon crafted by M.E.G. that dissolves Smiler tissue.", c:"green", l:"Keep it in a quick-draw holster. Aim for the glowing white eyes. It only buys you 10 seconds of stun time."},
                    {n:"Acoustic Camouflage", d:"Smilers have excellent hearing to compensate for their light dependency.", c:"gray", l:"If caught in the dark without a light, lie completely flat on the floor and breathe into your shirt to muffle the sound."},
                    {n:"Avoid Dead Ends", d:"Smilers will corner prey and wait for their flashlight batteries to die.", c:"blue", l:"Always ensure you have an exit route before engaging in a stare-down. Do not back yourself into a wall."}
                ],
                [
                    {n:"Breakable Glowsticks (Decoys)", i:"ph-lightbulb"}, {n:"Smiler Exterminator Flask", i:"ph-flask"}, {n:"Red-Lens Tactical Flashlight", i:"ph-flashlight"}, {n:"Night Vision Goggles", i:"ph-binoculars"},
                    {n:"High-Capacity Batteries", i:"ph-battery-charging"}, {n:"Soft-Soled Shoes (Stealth)", i:"ph-sneaker"}, {n:"Flare Gun (Extreme distraction)", i:"ph-fire"}
                ]
            ),
            history: renderHistory([
                {date:"JUNE 18, 2010", t:"First Visual Contact", d:"A blurry, highly distorted image of glowing teeth in Level 2 is uploaded. The user reports the entity moved faster than the camera shutter could capture."},
                {date:"FEBRUARY 04, 2012", t:"The Decoy Discovery", d:"A desperate wanderer throws their only flashlight at a Smiler in a panic. The entity attacks the flashlight instead of the human, revealing their true hunting mechanic."},
                {date:"NOVEMBER 22, 2014", t:"Smiler Exterminator Invented", d:"Scientists at M.E.G. Base Alpha successfully synthesize a chemical compound from anomalous molds that reacts violently to Smiler biology."},
                {date:"OCTOBER 31, 2016", t:"The Halloween Swarm", d:"A massive power failure in Level 1 allows a swarm of over 50 Smilers to breach Base Alpha's perimeter. Heavy casualties are sustained before backup generators kick in, incinerating the entities."},
                {date:"MARCH 10, 2019", t:"Thermal Imaging Failure", d:"L-Corp deploys military-grade FLIR cameras to track Smilers in Level 6. The cameras freeze and crack due to the entities outputting temperatures at absolute zero."},
                {date:"JULY 05, 2023", t:"Light Absorption Aura Confirmed", d:"Quantum analysis proves Smilers don't just hide in the dark; they actively project an aura that consumes photons, creating localized spheres of unnatural darkness around their bodies."},
                {date:"JANUARY 12, 2026", t:"Red-Light Protocol", d:"M.E.G. issues a mandate that all deep-exploration teams must use red-filtered flashlights, reducing Smiler encounters by 40%."}
            ]),
            resonanceLogs: [
                "> INITIATING TARGETED ENTITY SCAN...", "> SCANNING DARK SECTOR...",
                "<br>> <span class='text-purple-400'>PHOTONIC ANOMALY:</span>", "  - AMBIENT LIGHT DEGRADING RAPIDLY.", "  - 99.9% PHOTON ABSORPTION DETECTED.",
                "<br>> <span class='text-blue-400'>THERMAL SENSORS:</span>", "  - TARGET TEMPERATURE: -273.15 °C (ABSOLUTE ZERO).", "  - LENS FROSTING IMMINENT.",
                "<br>> <span class='text-red-500'>WARNING:</span>", "  - MULTIPLE BIOLUMINESCENT SIGNATURES ACTIVATING.", "  - DO NOT RUN.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity4": {
            type: "entity", id: "entity4", title: "Entity 4", name: "Deathmoths",
            themeColor: "#22c55e", themeHover: "#16a34a", themeGlow: "rgba(34, 197, 94, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "VARIABLE HOSTILITY", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "HIVE MIND", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }, { label: "ACID HAZARD", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmEyYTIwIi8+PHBhdGggZD0iTTUgMEwyIDVINSBMOCA1WiIgZmlsbD0iI2I4YjgzZSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Females Lethal / Males Passive", "Target Preference": "Artificial Light / Intruders", "Pack Mentality": "Hive / Swarm", "Response to Provocation": "Acid Spray" },
                "Biological & Anatomical": { "Physical Mass": "20kg (Female) / 2kg (Male)", "Wingspan": "1.5m - 2.5m (Female)", "Diet": "Wood, Carpet, Meat", "Ectoplasmic Output": "None (Biological)" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Flight Dynamics": "Silent Wingbeats", "Level Boundary Traversing": "Common" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="absolute inset-0 bg-green-900/10"></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-48 h-48 rounded-full border border-green-500/30 relative"><div class="absolute inset-0 rounded-full border border-green-500/50 animate-ping" style="animation-duration: 3s;"></div><div class="w-full h-[1px] bg-green-500/50 absolute top-1/2 rotate-45"></div><div class="w-full h-[1px] bg-green-500/50 absolute top-1/2 -rotate-45"></div><div class="absolute w-[1px] h-full bg-green-500/80 left-1/2 origin-bottom animate-spin-slow" style="animation-duration: 4s; transform-origin: bottom center;"></div><div class="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse"></div><div class="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-500 rounded-full shadow-[0_0_5px_#eab308]"></div><div class="absolute top-1/2 right-1/3 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] animate-pulse-fast"></div></div></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-green-400 bg-black/80 px-2 py-1 border border-green-500/30 animate-flicker">SONAR // AERIAL TARGETS ACQUIRED</div><div class="absolute top-2 right-2 text-[8px] font-mono text-red-500 bg-black/80 px-2 py-1">WARNING: FEMALE DETECTED</div></div>`,
            lore: renderLore(
                "Entity 4, Deathmoths, are giant, anomalous insects that infest the Backrooms. They are the only known entity with a completely passive gender and a highly lethal counterpart, operating under a massive hive mind.",
                [
                    "Deathmoths exhibit extreme sexual dimorphism. The Male Deathmoth is relatively small (about the size of a cat), passive, and completely harmless. They spend their time fluttering around light sources, eating mold, and resting on walls. They are so docile that wanderers often let them rest on their shoulders. However, the Female Deathmoth is a massive, highly territorial apex predator with a wingspan reaching up to 2.5 meters. Females are extremely aggressive to anything that approaches their nests or carries a bright light source.",
                    "The primary weapon of the Female Deathmoth is a highly corrosive, glowing green acid they spit from a specialized gland in their mandibles. This acid can melt through standard M.E.G. body armor in seconds and causes instantaneous necrosis upon contact with human skin. They are incredibly fast in the air and use their massive wings to generate concussive gusts of wind to knock wanderers off their feet before going in for the kill.",
                    "Deathmoths construct massive hives using a thick, grey, anomalous silk. These hives are most prominently found in Level 5 (The Terror Hotel), which is considered their central breeding ground. While the females are deadly, their silk is incredibly valuable. B.N.T.G. scavengers actively hunt male Deathmoths to harvest their silk, which is spun into lightweight clothing that provides natural resistance to the female's acid. Rumors persist of a massive 'Deathmoth King' and 'Queen' that govern the entire hive mind from the deepest, unmapped boiler rooms of Level 5."
                ],
                [
                    "Encountering a solitary moth near a light fixture in Level 2 or 3.",
                    "Entering the main hive in the ballrooms of Level 5.",
                    "Carrying a flashlight with an exposed halogen bulb (acts as a pheromone lure)."
                ],
                [
                    "Turning off all light sources and remaining perfectly still (Females rely heavily on light tracking).",
                    "Applying specialized chemical repellent.",
                    "Using Almond Water to neutralize their acid instantly."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "20kg (Female) / 2kg (Male)", "Wingspan": "1.5m - 2.5m (Female)", "Diet": "Wood, Carpet, Meat", "Ectoplasmic Output": "None (Biological)" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Females Lethal / Males Passive", "Target Preference": "Artificial Light / Intruders", "Pack Mentality": "Hive / Swarm", "Response to Provocation": "Acid Spray" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Flight Dynamics": "Silent Wingbeats", "Level Boundary Traversing": "Common" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Light Discipline", d:"Female Deathmoths hunt almost entirely by tracking artificial illumination in dark areas.", c:"yellow", l:"Extinguish all flashlights instantly if you hear the heavy, thrumming sound of massive wings. Drop to the floor."},
                    {n:"Acid Neutralization", d:"The acid spit will burn through bone if not treated immediately.", c:"green", l:"Do not use standard water. Douse the burn immediately with pure Almond Water, which chemically neutralizes the anomalous acid."},
                    {n:"Male Interaction", d:"Male Deathmoths are harmless but skittish. Do not attack them.", c:"blue", l:"If a male lands on you, stay still. Crushing a male releases a distress pheromone that will summon enraged females from miles away."},
                    {n:"Chemical Repellent", d:"M.E.G. botanists created a pungent spray made from crushed Level 4 flora that Deathmoths detest.", c:"orange", l:"Coat your backpack and boots in the repellent before entering Level 5. It smells terrible but masks your scent."},
                    {n:"Hive Avoidance", d:"Deathmoth hives look like massive, grey, pulsating cobwebs coating the walls and ceilings.", c:"red", l:"Never approach a hive. The silk acts as an alarm system; touching a single thread alerts the entire swarm."},
                    {n:"Silk Harvesting", d:"Male silk is highly valuable for trading and crafting armor.", c:"fuchsia", l:"Collect abandoned male cocoons found in corners. Never attempt to steal silk from an active female hive."},
                    {n:"Auditory Warning", d:"Unlike Smilers, Deathmoths are loud. Their wings sound like a low-flying helicopter.", c:"gray", l:"Use this to your advantage. If the buzzing is getting louder, find a room, lock the door, and hide under furniture."}
                ],
                [
                    {n:"Chemical Moth Repellent", i:"ph-bug"}, {n:"Almond Water (For acid burns)", i:"ph-drop"}, {n:"Deathmoth Silk Jacket (Acid resistant)", i:"ph-t-shirt"}, {n:"Long-reach Spear", i:"ph-sword"},
                    {n:"Red-light Headlamp", i:"ph-flashlight"}, {n:"Thick Leather Gloves", i:"ph-hand-palm"}, {n:"Gauze and Bandages", i:"ph-first-aid"}
                ]
            ),
            history: renderHistory([
                {date:"APRIL 12, 2011", t:"First Sighting in Level 5", d:"Explorers entering the Terror Hotel notice abnormally large moths swarming the antique chandeliers. A wanderer attempts to swat one, resulting in the first recorded acid fatality."},
                {date:"SEPTEMBER 03, 2013", t:"Gender Dimorphism Discovered", d:"A biologist stranded in Level 5 observes the entities for weeks, realizing the small, passive moths and the massive, lethal moths are the same species, establishing the Male/Female dynamic."},
                {date:"AUGUST 14, 2015", t:"The Moth King Slain", d:"A coordinated B.N.T.G. militia armed with improvised flamethrowers successfully kills a massively overgrown 'Deathmoth King' in the Beverly Room, clearing it for human settlement."},
                {date:"MAY 22, 2018", t:"Silk Armor Invented", d:"Tailors discover that weaving the grey silk produced by the males creates a lightweight fabric that is 100% immune to the female's acid spit. The armor becomes a top-tier trade commodity."},
                {date:"NOVEMBER 09, 2020", t:"Repellent Synthesized", d:"M.E.G. chemists successfully synthesize 'Moth-Away', a chemical spray that masks human pheromones and repels females. Survival rates in Level 5 double overnight."},
                {date:"MARCH 15, 2023", t:"Hive Mind Telepathy Logged", d:"L-Corp quantum sensors detect low-frequency telepathic links between the females and the hive. If one female spots prey, the entire swarm is alerted instantly without auditory communication."},
                {date:"FEBRUARY 02, 2026", t:"Migration to Level 2", d:"A massive swarm of Deathmoths is seen migrating down into the pipe tunnels of Level 2, adapting to the heat and causing a temporary lockdown of trade routes."}
            ]),
            resonanceLogs: [
                "> MAPPING AERIAL TRAJECTORIES...", "> HIGH-SPEED KINETIC SIGNATURES LOGGED.",
                "<br>> <span class='text-green-400'>SONAR PING:</span>", "  - FREQUENCY MATCHES WINGBEAT OF ENTITY 4 (DEATHMOTH).",
                "<br>> <span class='text-red-500'>CHEMICAL SENSORS:</span>", "  - HIGHLY CORROSIVE ACID DETECTED IN AEROSOL FORM.",
                "<br>> <span class='text-yellow-400'>HIVE INTELLIGENCE:</span>", "  - SWARM TACTICS ENGAGED. TARGET LOCK ACQUIRED ON YOUR LIGHT SOURCE.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity5": {
            type: "entity", id: "entity5", title: "Entity 5", name: "Clumps",
            themeColor: "#ef4444", themeHover: "#b91c1c", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "AMBUSH PREDATOR", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "BIOLOGICAL HORROR", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwyIDZMNCAxTDggN0wxMCAwIiBzdHJva2U9IiM1NTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Ambush / Lethal", "Target Preference": "Unaware Wanderers", "Hunting Method": "Overhead Drop", "Patience Level": "Extreme" },
                "Biological & Anatomical": { "Physical Mass": "150kg - 400kg", "Cellular Structure": "Human Amalgamation", "Mobility": "High (in vents)", "Diet": "Assimilation of victims" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Via Ductwork", "Gravity Resistance": "Adhesive limbs" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-red-900/10 mix-blend-color"></div><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0wIDBINHY4SDB6TTEgMUgzVjdIMXoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] z-10"></div><div class="relative z-20 w-32 h-32 blur-xl bg-red-600 rounded-full animate-pulse-fast mix-blend-screen opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div><div class="absolute bottom-2 right-2 text-[8px] font-mono text-red-500 bg-black/80 px-2 py-1 rounded border border-red-500/30 animate-flicker z-30">THERMAL OPTICS // VENTILATION SHAFT</div><div class="absolute top-2 left-2 text-[8px] font-mono text-orange-400 bg-black/80 px-2 py-1 z-30">BIOMETRIC OVERLAP DETECTED</div></div>`,
            lore: renderLore(
                "Entity 5, the Clumps, are horrific biological anomalies constructed entirely from human limbs. They are apex ambush predators that dominate the ventilation shafts and pipe networks of the Backrooms.",
                [
                    "A Clump is exactly what its name implies: a massive, tangled amalgamation of human arms, legs, torsos, and occasionally heads, bound together in a central, fleshy mass. The exact biological process that creates a Clump is unknown, but DNA testing reveals that a single Clump contains the genetic material of dozens of missing wanderers. They possess no central nervous system or recognizable face, yet they exhibit highly coordinated movement, using their dozens of limbs to scuttle along ceilings, walls, and inside tight spaces with terrifying speed and silence.",
                    "Clumps are strictly ambush predators. They excel at climbing and hanging upside down, making their homes primarily in the oversized ventilation shafts of Level 2, the dark corners of Level 3, and the boiler rooms of Level 5. They wait patiently for days or weeks for a wanderer to walk underneath their hiding spot. Once a target is acquired, the Clump drops silently from the ceiling, using its immense weight to crush the victim before wrapping them in dozens of arms. The victim is then dragged back up into the vent to be assimilated into the mass.",
                    "Despite their horrifying appearance and lethal nature, Clumps have a major weakness: they are entirely biological and lack any supernatural resistance to damage. They are highly vulnerable to fire, extreme cold, and heavy ballistic trauma. A well-placed Molotov cocktail will cause a Clump to writhe and detach its limbs in a panic, allowing wanderers to escape. Because they rely on the element of surprise, maintaining strict overhead awareness is the most effective way to survive a Clump-infested area."
                ],
                [
                    "Manifests when wanderers are dragged into vents and assimilated.",
                    "Spawns naturally in the deep, heated pipe networks of Level 2."
                ],
                [
                    "Killing the entity with high heat (fire) or heavy ballistics.",
                    "Severing the anchoring limbs causing it to fall and take massive fall damage."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "150kg - 400kg", "Cellular Structure": "Human Amalgamation", "Mobility": "High (in vents)", "Diet": "Assimilation of victims" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Ambush / Lethal", "Target Preference": "Unaware Wanderers", "Hunting Method": "Overhead Drop", "Patience Level": "Extreme" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Via Ductwork", "Gravity Resistance": "Adhesive limbs" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Overhead Awareness", d:"Clumps almost exclusively attack from above. Never look just straight ahead.", c:"red", l:"Continuously sweep your flashlight across the ceiling. Never walk directly under a loose, missing, or bent ventilation grate."},
                    {n:"Fire Vulnerability", d:"Clumps are entirely biological flesh and highly vulnerable to fire. They will retreat if burned.", c:"orange", l:"Carry a flare gun, Molotovs, or a magnesium torch. Aim for the center mass. The pain will cause them to drop you if grabbed."},
                    {n:"Auditory Cues", d:"While they wait silently, moving their massive bulk through metal vents creates noise.", c:"yellow", l:"Listen for the sound of wet meat slapping against metal, or the groaning of stressed aluminum ductwork above you."},
                    {n:"Center Walking", d:"Clumps prefer to drop near walls where they can quickly retreat back up.", c:"blue", l:"Walk strictly in the dead center of hallways, keeping maximum distance from the dark corners and wall vents."},
                    {n:"Severing Limbs", d:"If grabbed, shooting center mass is ineffective due to the sheer amount of flesh.", c:"fuchsia", l:"Use a heavy machete or hatchet to chop off the specific arms grabbing you. They feel pain and will retract injured limbs."},
                    {n:"Thermal Spotting", d:"Because they are made of dozens of humans, their heat signature is massive.", c:"teal", l:"If you possess thermal goggles (rare crate drop), Clumps glow blindingly bright red, making them impossible to miss in the vents."},
                    {n:"Avoid Blood Trails", d:"Clumps are messy eaters. A trail of blood leading up a wall is a guaranteed sign of a nest.", c:"gray", l:"If you see a pool of blood beneath a vent, turn around immediately and find an alternate route."}
                ],
                [
                    {n:"Flares / Flare Gun", i:"ph-fire"}, {n:"Heavy Machete / Hatchet", i:"ph-sword"}, {n:"High-Lumen Flashlight (Upward sweep)", i:"ph-flashlight"}, {n:"Thermal Goggles", i:"ph-binoculars"},
                    {n:"Magnesium Torch", i:"ph-fire-extinguisher"}, {n:"Hard Hat (Impact protection)", i:"ph-hard-hat"}, {n:"Trauma Kit", i:"ph-first-aid"}
                ]
            ),
            history: renderHistory([
                {date:"JANUARY 10, 2013", t:"The Vent Disappearance", d:"A wanderer in Level 2 vanishes without a trace. His companion's camcorder captures a brief, terrifying frame of dozens of arms pulling him into a ceiling grate."},
                {date:"MARCH 22, 2015", t:"Biological Analysis", d:"M.E.G. successfully kills a Clump using incendiary grenades. DNA testing of the charred remains reveals it is composed of 14 distinct missing wanderers, confirming assimilation."},
                {date:"AUGUST 11, 2017", t:"The Ceiling Sweep Mandate", d:"After a series of fatal drops in Base Gamma, M.E.G. mandates the 'Ceiling Sweep' protocol. All agents must check the roof every 30 seconds while patrolling."},
                {date:"FEBRUARY 04, 2019", t:"Clump Infestation Cleared", d:"B.N.T.G. mercenaries use controlled flamethrower bursts to completely clear a 5-mile vent network in Level 3, securing a vital trade route."},
                {date:"NOVEMBER 16, 2021", t:"Amalgamation Process Witnessed", d:"L-Corp hidden cameras record a Clump dragging a live victim into a vent. The entity secretes a dissolving enzyme that fuses the victim's limbs to its own mass over several hours."},
                {date:"OCTOBER 11, 2024", t:"Thermal Detection", d:"L-Corp officially updates LiminOS field scanners to detect the dense, overlapping thermal signatures of Clumps in vents, preventing hundreds of ambush deaths."},
                {date:"APRIL 20, 2026", t:"High Alert in Piping Zones", d:"Clumps are considered the apex ambush predator of industrial levels. Eradication is deemed impossible due to the infinite nature of the vent networks."}
            ]),
            resonanceLogs: [
                "> BOOTING THERMAL IMAGING SUITE...", "> SCANNING OVERHEAD GEOMETRY.",
                "<br>> <span class='text-red-500'>CRITICAL MASS DETECTED:</span>", "  - 32 INDIVIDUAL BIOMETRIC SIGNATURES OVERLAPPING.",
                "<br>> <span class='text-orange-400'>MOVEMENT PATTERN:</span>", "  - TARGET IS CRAWLING THROUGH DUCTWORK AT 15 KM/H.",
                "<br>> <span class='text-liminal-primary'>RECOMMENDATION:</span>", "  - DO NOT WALK UNDER VENT GRATE DIRECTLY AHEAD. PREPARE INCENDIARIES.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity6": {
            type: "entity", id: "entity6", title: "Entity 6", name: "Dullers",
            themeColor: "#6b7280", themeHover: "#4b5563", themeGlow: "rgba(107, 114, 128, 0.2)", idleAnimation: "animate-ambient-drift-slow",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "PHASING ENTITY", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }, { label: "STEALTH", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMTBRNSAwIDEwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2YjcyODAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Predatory", "Target Preference": "Stationary targets near walls", "Hunting Method": "Wall Phasing", "Patience Level": "High" },
                "Biological & Anatomical": { "Physical Mass": "Variable (Ethereal)", "Cellular Structure": "Non-Solid", "Visual Appearance": "Featureless Grey Humanoid", "Ectoplasmic Output": "High" },
                "Dimensional Interactions": { "Noclip Capability": "Absolute (Phases through matter)", "Hume Disruption Radius": "0.5m", "Level Boundary Traversing": "Unknown" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#111] overflow-hidden border-b border-liminal-border group"><div class="w-full h-full absolute top-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-10"></div><div class="relative z-20 w-16 h-32 bg-gray-500 rounded-full blur-md opacity-20 group-hover:opacity-80 group-hover:blur-sm transition-all duration-1000 animate-ambient-drift" style="transform: translateX(-50px);"></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-gray-400 bg-black/80 px-2 py-1 rounded border border-gray-500/30 z-30">HUME FIELD // MATTER PERMEABILITY DETECTED</div></div>`,
            lore: renderLore(
                "Entity 6, Dullers, are terrifying, featureless grey humanoids that possess the anomalous ability to phase effortlessly through solid matter. They are the reason wanderers are told never to lean against the walls.",
                [
                    "Dullers appear as tall, painfully thin, slate-grey humanoids completely devoid of facial features, hair, or clothing. Their biology defies standard physics; they exist in a semi-ethereal state, allowing them to ignore physical collision meshes and phase through concrete, brick, and drywall as if moving through water. They are most frequently encountered in Level 1, Level 2, and Level 6, hiding within the solid architecture of the walls and floors waiting for prey.",
                    "They are silent hunters. Dullers track the vibrations of wanderers walking near walls. When a victim stops to rest, lean against a pillar, or sleep too close to a boundary, the Duller will reach out from the solid matter, grab the victim, and forcefully drag them back into the wall. Once pulled inside the solid geometry, the victim is trapped and suffocates as the wall re-solidifies around them, while the Duller phases away to feed on the remaining life force.",
                    "Because they live inside the walls, they are virtually impossible to kill with conventional weapons, which simply pass through their ethereal forms or strike the concrete they hide in. However, Dullers are highly repelled by Almond Water. Spraying or splashing Almond Water on a wall where a Duller is hiding will cause the entity to shriek and retreat deep into the architecture. Maintaining distance from all structural boundaries is the only foolproof method of avoiding them."
                ],
                [
                    "Manifesting within the concrete pillars of Level 1.",
                    "Hiding inside the brick walls of Level 2."
                ],
                [
                    "Retreating into solid matter when splashed with Almond Water.",
                    "Fleeing from intense bursts of UV light."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "Variable (Ethereal)", "Cellular Structure": "Non-Solid", "Visual Appearance": "Featureless Grey Humanoid", "Ectoplasmic Output": "High" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Predatory", "Target Preference": "Stationary targets near walls", "Hunting Method": "Wall Phasing", "Patience Level": "High" },
                    "Dimensional Interactions": { "Noclip Capability": "Absolute (Phases through matter)", "Hume Disruption Radius": "0.5m", "Level Boundary Traversing": "Unknown" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"The Center-Walk Rule", d:"Never walk flush against a wall or lean on a pillar to rest.", c:"red", l:"Always maintain at least 1 meter of distance from all vertical surfaces. Walk strictly in the center of hallways."},
                    {n:"Almond Water Defense", d:"Dullers are chemically repelled by the anomalous properties of Almond Water.", c:"blue", l:"Keep a spray bottle of Almond Water. If you see a grey hand emerging from the drywall, spray it instantly. It acts like acid to them."},
                    {n:"Visual Anomalies", d:"Before a Duller emerges, the wall will often appear to ripple or discolor slightly.", c:"yellow", l:"If a concrete wall suddenly looks like liquid or grey clay, run away from it immediately."},
                    {n:"Sleeping Protocols", d:"Sleeping on the floor makes you a prime target for Dullers pulling you straight down.", c:"green", l:"Sleep elevated. Use a hammock strung between supply crates or sleep on top of tall metal shelving units."},
                    {n:"Useless Ballistics", d:"Do not waste ammunition on a Duller. Bullets will phase through them or embed in the wall.", c:"gray", l:"Rely purely on evasion and Almond Water. Combat is completely ineffective."},
                    {n:"UV Light Disruption", d:"Intense ultraviolet light disrupts their ability to phase through matter.", c:"purple", l:"If you have a UV flashlight, shining it on a Duller forces them to solidify, trapping them temporarily in the concrete."}
                ],
                [
                    {n:"Almond Water Spray Bottle", i:"ph-drop"}, {n:"UV Tactical Flashlight", i:"ph-flashlight"}, {n:"Elevated Hammock", i:"ph-tent"}, {n:"Center-Walk Discipline", i:"ph-brain"},
                    {n:"Vibration Dampening Shoes", i:"ph-sneaker"}, {n:"First Aid (For concrete burns)", i:"ph-first-aid"}
                ]
            ),
            history: renderHistory([
                {date:"MAY 09, 2011", t:"The Wall Grab", d:"Security cameras in Level 1 capture a wanderer leaning against a pillar. Two grey arms emerge from the concrete, pull him inside, and the wall seals back up flawlessly."},
                {date:"OCTOBER 15, 2013", t:"Almond Water Weakness Found", d:"A wanderer accidentally spills Almond Water on a rippling wall. A horrific shriek echoes from inside the concrete, discovering the Duller's primary weakness."},
                {date:"JULY 22, 2016", t:"Center-Walk Protocol", d:"M.E.G. issues the mandatory Center-Walk Protocol for all agents, drastically reducing Duller-related casualties across Level 1 and Level 2."},
                {date:"MARCH 05, 2019", t:"UV Solidification", d:"L-Corp scientists discover that bombarding a Duller with high-intensity UV radiation locks its atomic structure, trapping one half-phased into a wall for study."},
                {date:"SEPTEMBER 12, 2021", t:"Base Alpha Perimeter Breach", d:"A Duller phases through the heavy iron doors of Base Alpha. Sentries repel it using supersoakers filled with Almond Water."},
                {date:"JANUARY 30, 2024", t:"Floor Phasing Documented", d:"It is confirmed that Dullers can also attack from below. Sleeping on the bare concrete is universally banned in M.E.G. outposts."}
            ]),
            resonanceLogs: [
                "> SCANNING EUCLIDEAN MESH...", "> ANOMALY DETECTED IN SOLID GEOMETRY.",
                "<br>> <span class='text-gray-400'>PHASING SIGNATURE:</span>", "  - MATTER DISRUPTION AT X:14, Y:22.", "  - NON-SOLID ENTITY RESIDING IN CONCRETE.",
                "<br>> <span class='text-blue-400'>CHEMICAL COUNTERMEASURE:</span>", "  - ALMOND WATER SPRAY RECOMMENDED.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity8": {
            type: "entity", id: "entity8", title: "Entity 8", name: "Hounds",
            themeColor: "#d97706", themeHover: "#b45309", themeGlow: "rgba(217, 119, 6, 0.2)", idleAnimation: "animate-pulse",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "PACK HUNTERS", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "DISEASE VECTOR", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTIgOEwyIDRMNCAyTDYgMkw4IDRMODgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Aggressive", "Target Preference": "Fleeing targets", "Hunting Method": "Pack Flanking", "Patience Level": "Low" },
                "Biological & Anatomical": { "Physical Mass": "70kg - 90kg", "Cellular Structure": "Mutated Humanoid", "Visual Appearance": "Crawling humanoid with long hair", "Disease Vector": "Hound Virus (Rabies-like)" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking", "Gravity Resistance": "None" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden border-b border-liminal-border group"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMEgyMFYyMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyIi8+PC9zdmc+')] opacity-20"></div><div class="relative w-48 h-48 rounded-full border border-orange-500/30 flex items-center justify-center"><div class="absolute w-full h-[1px] bg-orange-500/50 animate-spin" style="animation-duration: 2s;"></div><div class="w-3 h-3 bg-red-500 rounded-full absolute top-10 left-10 animate-pulse shadow-[0_0_10px_#ef4444]"></div><div class="w-3 h-3 bg-red-500 rounded-full absolute top-12 left-14 animate-pulse shadow-[0_0_10px_#ef4444]" style="animation-delay: 0.5s;"></div><div class="w-3 h-3 bg-red-500 rounded-full absolute top-8 left-16 animate-pulse shadow-[0_0_10px_#ef4444]" style="animation-delay: 1s;"></div></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-orange-400 bg-black/80 px-2 py-1 rounded border border-orange-500/30 z-30 animate-flicker">RADAR // PACK TACTICS DETECTED</div></div>`,
            lore: renderLore(
                "Entity 8, Hounds, are grotesque, heavily mutated humanoids that crawl on all fours. They behave like feral canines and are one of the most common physical threats in the Backrooms.",
                [
                    "Hounds appear as emaciated humanoids with elongated, disproportionate limbs that force them to walk on all fours. Their heads are obscured by massive, matted tangles of black hair, hiding faces filled with razor-sharp teeth. Despite their humanoid origins, their psychology is entirely canine. They snarl, bark, and hunt using scent and hearing. They are highly territorial and will aggressively pursue any wanderer that encroaches on their space or shows signs of fear.",
                    "They are most commonly found in Level 1, Level 2, and Level 3. In Level 3, their behavior shifts from solitary scavengers to highly organized pack hunters, capable of flanking and trapping prey in dead ends. Hounds have a distinct psychological weakness: they are easily intimidated by direct, unbroken eye contact and aggressive posturing. If a wanderer stands their ground, shouts, and brandishes a weapon, a solitary Hound will often whimper and retreat. Fleeing triggers their predator drive, causing them to attack instantly.",
                    "Beyond physical trauma, Hounds are extremely dangerous because their saliva carries the 'Hound Virus,' a highly anomalous, rabies-like pathogen. If a wanderer is bitten and survives, the virus will rapidly infect their nervous system. Over the course of 72 hours, the victim will suffer extreme hair growth, joint dislocation, and total loss of higher brain function, eventually mutating into a new Hound. Immediate amputation or application of specialized M.E.G. anti-venom is the only known cure."
                ],
                [
                    "Spawning naturally in the dark corners of Levels 1, 2, and 3.",
                    "Created when a human wanderer is infected by the Hound Virus."
                ],
                [
                    "Retreating when successfully intimidated.",
                    "Being killed by physical trauma (guns, heavy melee)."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "70kg - 90kg", "Cellular Structure": "Mutated Humanoid", "Disease Vector": "Hound Virus (Rabies-like)", "Ectoplasmic Output": "None" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Aggressive", "Target Preference": "Fleeing targets", "Hunting Method": "Pack Flanking", "Patience Level": "Low" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking", "Gravity Resistance": "None" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Intimidation Tactics", d:"Hounds respect dominance. Do not act like prey.", c:"orange", l:"Stare them directly in the eyes. Yell loudly, wave your arms, and bang a crowbar against a pipe to make noise. Make yourself look massive."},
                    {n:"Do Not Run", d:"Turning your back and running is a guaranteed death sentence.", c:"red", l:"Running triggers their chase instinct. They are faster than you on all fours. Back away slowly while maintaining eye contact."},
                    {n:"Pack Flanking", d:"In Level 3, they hunt in packs. While you stare down one, two more will circle behind you.", c:"yellow", l:"Keep your back against a solid wall. Never let them surround you. Use narrow doorways as chokepoints."},
                    {n:"Infection Control", d:"A bite from a Hound transmits the mutating Hound Virus.", c:"green", l:"If bitten, immediately sterilize the wound with pure alcohol or fire. Seek M.E.G. medical personnel for the anti-virus within 12 hours."},
                    {n:"Physical Combat", d:"Unlike ethereal entities, Hounds are flesh and blood. They can be killed.", c:"blue", l:"Firearms are highly effective. If using melee, aim for the snout or legs with a heavy blunt weapon like a lead pipe."},
                    {n:"Scent Masking", d:"They hunt primarily by smell.", c:"gray", l:"Avoid carrying raw meat. If you find heavily scented industrial chemicals in Level 1, spray them on your boots to throw off their tracking."}
                ],
                [
                    {n:"Heavy Blunt Weapon (Crowbar/Pipe)", i:"ph-wrench"}, {n:"Firearm & Ammunition", i:"ph-crosshair"}, {n:"M.E.G. Hound Anti-Virus", i:"ph-syringe"}, {n:"Medical Alcohol", i:"ph-first-aid"},
                    {n:"Thick Leather Armor (Bite resist)", i:"ph-shield"}, {n:"Air Horn (Intimidation)", i:"ph-speaker-high"}
                ]
            ),
            history: renderHistory([
                {date:"AUGUST 12, 2010", t:"First Hound Encounter", d:"A survivor in Level 1 reports being chased by a 'crawling man with a dog's brain'. The wanderer survives by hiding on top of a tall stack of crates."},
                {date:"NOVEMBER 04, 2012", t:"The Virus Discovered", d:"A bitten wanderer is brought to Base Alpha. Over three days, doctors watch in horror as his bones snap and reform, transforming him into a Hound. He is euthanized."},
                {date:"MAY 19, 2015", t:"Anti-Virus Synthesized", d:"M.E.G. medical researchers successfully extract antibodies from a survivor naturally immune to the virus, creating the first batch of Hound Anti-Virus."},
                {date:"OCTOBER 22, 2018", t:"Pack Tactics Confirmed", d:"Explorers in Level 3 record footage of Hounds using coordinated decoy and flanking maneuvers, proving their intelligence increases in certain levels."},
                {date:"JULY 07, 2021", t:"Intimidation Protocol Promulgated", d:"M.E.G. officially adds the 'Stare and Shout' tactic to their survival handbook, dropping Hound-related deaths by 60%."},
                {date:"FEBRUARY 14, 2025", t:"L-Corp Genetic Analysis", d:"Liminality Corp captures a live Hound. DNA sequencing proves the entity retains 98% human DNA, confirming they are exclusively mutated wanderers, not native spawns."}
            ]),
            resonanceLogs: [
                "> SCANNING BIO-SIGNATURES...", "> MUTATED HUMANOID DETECTED.",
                "<br>> <span class='text-orange-400'>BEHAVIORAL PATTERN:</span>", "  - PACK TACTICS ACTIVE. FLANKING MANEUVER IN PROGRESS.",
                "<br>> <span class='text-red-500'>PATHOGEN WARNING:</span>", "  - RABIES-VARIANT VIRUS DETECTED IN SALIVA.",
                "<br>> <span class='text-liminal-primary'>RECOMMENDATION:</span>", "  - MAINTAIN EYE CONTACT. EQUIP BLUNT TRAUMA WEAPON.",
                "<br>> SCAN COMPLETE."
            ]
        },

        "entity9": {
            type: "entity", id: "entity9", title: "Entity 9", name: "Facelings",
            themeColor: "#a855f7", themeHover: "#9333ea", themeGlow: "rgba(168, 85, 247, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "VARIABLE HOSTILITY", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "HUMANOID", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }, { label: "UNCANNY", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTUgMUExIDQgMCAwIDAgNSAxMEExIDQgMCAwIDAgNSAxWiIgZmlsbD0iI2E4NTVmNyIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Adults Passive / Children Hostile", "Target Preference": "None (Adults) / Wanderers (Children)", "Intelligence": "Human-equivalent", "Patience Level": "High" },
                "Biological & Anatomical": { "Physical Mass": "Standard Human", "Cellular Structure": "Humanoid", "Visual Appearance": "Smooth skin, no facial features", "Ectoplasmic Output": "None" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking", "Society": "Integrated in Level 11" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#111] overflow-hidden border-b border-liminal-border group"><div class="absolute inset-0 bg-purple-900/10"></div><div class="relative w-32 h-40 bg-gray-300 rounded-[40px] shadow-inner flex items-center justify-center overflow-hidden"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div><div class="w-full h-full bg-gray-200 animate-pulse opacity-80"></div></div><div class="absolute bottom-2 right-2 text-[8px] font-mono text-purple-400 bg-black/80 px-2 py-1 rounded border border-purple-500/30 z-30 animate-flicker">FACIAL RECOGNITION // NULL</div></div>`,
            lore: renderLore(
                "Entity 9, Facelings, are humanoid entities that completely lack facial features. They range from docile citizens to mischievous, lethal threats depending on their age and the level they inhabit.",
                [
                    "Facelings look exactly like normal human beings—wearing clothes, possessing standard body proportions, and walking upright—with one terrifying exception: their faces are entirely smooth. They have no eyes, nose, or mouth, just flat skin. Despite this, they can see, hear, and 'speak' through muffled, telepathic grunts or gestures. The behavior of a Faceling depends entirely on its manifestation type: Adult or Child.",
                    "Adult Facelings are generally completely docile and passive. They act like background characters in a video game, wandering aimlessly or pantomiming normal human tasks. In heavily populated areas like Level 11 (The Endless City), millions of Adult Facelings form a functional society, running shops, driving cars, and trading with human wanderers. They will not attack unless provoked or attacked first. If attacked, they exhibit surprising strength and will attempt to bludgeon the aggressor.",
                    "Child Facelings, however, are highly mischievous and hostile. Appearing as young children, they travel in small groups and will actively harass, prank, and attack wanderers. They often carry sharp objects like scissors or knives. Because wanderers hesitate to attack something resembling a human child, Child Facelings are responsible for a surprising number of casualties. M.E.G. protocol dictates treating Child Facelings as immediate lethal threats, regardless of their appearance."
                ],
                [
                    "Manifest naturally in almost all habitable or urban levels (Level 1, 4, 11)."
                ],
                [
                    "They do not exit; they are native to the architecture."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "Standard Human", "Cellular Structure": "Humanoid", "Visual Appearance": "Smooth skin, no facial features", "Ectoplasmic Output": "None" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Adults Passive / Children Hostile", "Target Preference": "None (Adults) / Wanderers (Children)", "Intelligence": "Human-equivalent", "Patience Level": "High" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking", "Society": "Integrated in Level 11" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Identify Age Variant", d:"Immediately assess if the Faceling is an adult or a child. Their behavior dictates your response.", c:"purple", l:"Adults wear standard clothes and move slowly. Children wear brightly colored clothes and move erratically."},
                    {n:"Adult Interaction", d:"Adult Facelings are safe to be around. You can trade with them in Level 11.", c:"green", l:"Do not stare at their blank faces for too long; it causes an 'uncanny valley' sanity drain. Use simple hand gestures to communicate."},
                    {n:"Child Hostility", d:"Child Facelings will attempt to stab or trip you.", c:"red", l:"Do not hesitate. Kick them away and run. If cornered, use lethal force. They are not human children."},
                    {n:"Do Not Provoke Adults", d:"If you attack an Adult Faceling, all other Facelings in the vicinity will instantly turn hostile and swarm you.", c:"orange", l:"Keep your weapons holstered around adults. Never steal from a Faceling merchant."},
                    {n:"Telepathic Muffles", d:"They 'speak' directly into your mind, sounding like muffled talking underwater.", c:"blue", l:"Listening too closely to their voices can cause headaches. Nod politely and move on."}
                ],
                [
                    {n:"Trade Goods (For Adults)", i:"ph-hand-coins"}, {n:"Melee Weapon (For Children)", i:"ph-sword"}, {n:"Aspirin (For telepathic headaches)", i:"ph-pill"}, {n:"Sunglasses (To avoid staring)", i:"ph-sunglasses"}
                ]
            ),
            history: renderHistory([
                {date:"MAY 12, 2011", t:"First Faceling Documented", d:"A wanderer in Level 1 takes a photo of a man in a suit facing the camera, realizing only after the flash that the man has no face."},
                {date:"SEPTEMBER 29, 2014", t:"Level 11 Integration", d:"M.E.G. discovers the Endless City, finding it populated by millions of docile Facelings. The first successful trade (Almond Water for a map) occurs."},
                {date:"MARCH 05, 2016", t:"Child Faceling Ban", d:"After a group of wanderers is killed by Child Facelings armed with box cutters, M.E.G. issues a shoot-on-sight order for the child variants."},
                {date:"JULY 18, 2019", t:"The Swarm Incident", d:"A rogue scavenger shoots an Adult Faceling merchant in Level 11. Instantly, over 200 Facelings in the street turn hostile, beating the scavenger to death before returning to normal."},
                {date:"FEBRUARY 11, 2024", t:"L-Corp Telepathy Intercept", d:"L-Corp scientists manage to record and decode the muffled telepathy of a Faceling. The translations are mostly mundane thoughts about accounting and grocery shopping."}
            ]),
            resonanceLogs: [
                "> SCANNING HUMANOID...", "> FACIAL RECOGNITION FAILED. NULL GEOMETRY.",
                "<br>> <span class='text-purple-400'>VARIANT DETECTED:</span>", "  - ADULT FACELING. POSTURE PASSIVE.",
                "<br>> <span class='text-green-400'>RECOMMENDATION:</span>", "  - SAFE TO APPROACH. TRADE AUTHORIZED.",
                "<br>> SCAN COMPLETE."
            ]
        },

        "entity10": {
            type: "entity", id: "entity10", title: "Entity 10", name: "Skin-Stealers",
            themeColor: "#f43f5e", themeHover: "#e11d48", themeGlow: "rgba(244, 63, 94, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "MIMIC", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }, { label: "CARNIVORE", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTIgOEw4IDJNOCA4TDIgMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjQzZjVlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Predatory / Lethal", "Target Preference": "Isolated wanderers", "Hunting Method": "Mimicry / Lure", "Intelligence": "High Mimicry" },
                "Biological & Anatomical": { "Physical Mass": "Standard Human (Disguised)", "Cellular Structure": "Translucent Yellow Flesh", "Visual Appearance": "Wears human skin", "Diet": "Human Flesh" },
                "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-rose-900/10"></div><div class="w-full max-w-xs h-16 border border-rose-500/30 rounded bg-black/50 flex items-center justify-center gap-1 px-4"><div class="w-2 h-4 bg-rose-500 animate-pulse"></div><div class="w-2 h-8 bg-rose-500 animate-pulse" style="animation-delay: 0.1s;"></div><div class="w-2 h-12 bg-rose-500 animate-pulse" style="animation-delay: 0.2s;"></div><div class="w-2 h-6 bg-rose-500 animate-pulse" style="animation-delay: 0.3s;"></div><div class="w-2 h-10 bg-rose-500 animate-pulse" style="animation-delay: 0.4s;"></div><div class="w-2 h-3 bg-rose-500 animate-pulse" style="animation-delay: 0.5s;"></div></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-rose-400 bg-black/80 px-2 py-1 rounded border border-rose-500/30 animate-flicker">AUDIO ANALYSIS // VOCAL CORD REPLICATION 98% MATCH</div></div>`,
            lore: renderLore(
                "Entity 10, Skin-Stealers, are highly intelligent, carnivorous mimics that murder wanderers to wear their skin. They use the stolen voices of their victims to lure prey into traps.",
                [
                    "A Skin-Stealer in its true form is a tall humanoid covered entirely in translucent, pale yellow flesh covered in microscopic suction cups. However, they are rarely seen in this state. Skin-Stealers hunt by ambushing a lone wanderer, brutally flaying them, and wearing their skin like a suit. The microscopic suckers on their body attach to the skin, manipulating it flawlessly to appear like a perfectly normal human being.",
                    "Their most terrifying trait is their vocal mimicry. Skin-Stealers perfectly replicate the voice of the person whose skin they are wearing, or voices they have heard recently. They will cry out for help, scream in fake pain, or call out names to lure empathetic wanderers into dark rooms or dead ends. Because they look and sound exactly like human survivors, they frequently infiltrate groups, waiting for the perfect moment to attack and feed.",
                    "Despite their perfect disguise, they can be identified. Skin-Stealers do not bleed red blood; their internal fluid is a clear, viscous sap. If you suspect a companion is a Skin-Stealer, subtly cutting them to check their blood color is the only foolproof method of identification. Furthermore, their mimicry is not conversational—they tend to repeat the same phrases (like 'Help me!' or 'I'm hurt!') on a loop, like a broken record, lacking the ability to hold a complex conversation."
                ],
                [
                    "Wandering Level 1, 2, and 3 looking for victims."
                ],
                [
                    "Can be killed via heavy trauma or decapitation."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "Standard Human (Disguised)", "Cellular Structure": "Translucent Yellow Flesh", "Visual Appearance": "Wears human skin", "Diet": "Human Flesh" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Predatory / Lethal", "Target Preference": "Isolated wanderers", "Hunting Method": "Mimicry / Lure", "Intelligence": "High Mimicry" },
                    "Dimensional Interactions": { "Noclip Capability": "None", "Level Boundary Traversing": "Standard walking" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"The Blood Test", d:"Skin-Stealers bleed clear fluid, not red blood.", c:"rose", l:"If a stranger approaches you, ask to see a cut on their hand. If they refuse or bleed clear sap, kill them immediately."},
                    {n:"Ignore Distress Calls", d:"If you hear someone crying for help in a highly dangerous area, assume it is a trap.", c:"purple", l:"Listen to the cadence. If the voice repeats the exact same intonation twice, it is a Skin-Stealer."},
                    {n:"Conversational Checks", d:"Skin-Stealers cannot hold complex, logical conversations.", c:"yellow", l:"Ask a stranger a complex math problem or a specific detail about Frontrooms pop culture. If they stutter or grunt, draw your weapon."},
                    {n:"Smell of Decay", d:"The skin suit eventually begins to rot.", c:"orange", l:"If a 'human' companion smells faintly of rotting meat, they are an entity. Do not let them walk behind you."}
                ],
                [
                    {n:"Small Knife (For blood checks)", i:"ph-knife"}, {n:"Lethal Firearm", i:"ph-crosshair"}, {n:"M.E.G. Passcode Book", i:"ph-book"}, {n:"Directional Microphone", i:"ph-microphone"}
                ]
            ),
            history: renderHistory([
                {date:"NOVEMBER 04, 2012", t:"First Infiltration", d:"A rescue team brings a survivor back to Base Alpha. In the middle of the night, the 'survivor' kills three guards and escapes. The discarded skin of the real survivor is found in the barracks."},
                {date:"AUGUST 19, 2015", t:"The Blood Test Mandated", d:"M.E.G. institutes the mandatory 'Prick Test' at all outpost gates. Everyone entering must have their finger pricked to prove their blood is red."},
                {date:"DECEMBER 10, 2018", t:"Audio Loop Documented", d:"Explorers record a Skin-Stealer saying 'Is anyone there?' with the exact same audio waveform 15 times in a row, confirming their mimicry limitations."},
                {date:"MARCH 22, 2024", t:"L-Corp Vocal Analyzer", d:"L-Corp deploys proprietary software to agent radios that analyzes voice patterns, flashing red if a voice is a mimicked loop."}
            ]),
            resonanceLogs: [
                "> SCANNING BIO-SIGNATURES...", "> HUMAN FORM DETECTED.",
                "<br>> <span class='text-rose-500'>INTERNAL SCAN:</span>", "  - NO SKELETAL STRUCTURE DETECTED. FLUID VISCOSITY ABNORMAL.",
                "<br>> <span class='text-purple-400'>AUDIO DECODE:</span>", "  - VOCAL PATTERN IS A RECORDED LOOP.",
                "<br>> <span class='text-red-500'>WARNING:</span>", "  - ENTITY 10 INFILTRATION. ENGAGE LETHAL FORCE.",
                "<br>> SCAN COMPLETE."
            ]
        },

        "entity15": {
            type: "entity", id: "entity15", title: "Entity 15", name: "Wretches",
            themeColor: "#4ade80", themeHover: "#22c55e", themeGlow: "rgba(74, 222, 128, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "MUTATED WANDERER", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTUgMEwyIDVINSBMOCA1WiIgZmlsbD0iIzRhZGU4MCIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Feral", "Target Preference": "Anything edible", "Intelligence": "Animalistic" },
                "Biological & Anatomical": { "Physical Mass": "Emaciated Human", "Cellular Structure": "Decaying Flesh", "Disease Vector": "Non-infectious" },
                "Dimensional Interactions": { "Noclip Capability": "None" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-green-900/10"></div><div class="text-[10px] font-mono text-green-400 animate-pulse">BIOMETRIC DEGRADATION: 89% // STAGE 3 WRETCH CYCLE</div></div>`,
            lore: renderLore(
                "Entity 15, Wretches, are not native to the Backrooms. They are the tragic result of human wanderers who have succumbed to starvation, dehydration, and complete loss of sanity, mutating into feral zombies.",
                [
                    "The Wretched Cycle is a horrifying biological process. When a wanderer runs out of food, water, and completely loses their will to live, their body does not simply die. The anomalous nature of the Backrooms forces a mutation. Their skin sloughs off, their eyes crust over, and they lose all higher brain function, running purely on a feral instinct to consume meat.",
                    "Wretches roam aimlessly in almost all levels, feeding on corpses, rats, or other wanderers. They are highly aggressive but physically weak and uncoordinated. They represent the ultimate fate of those who give up in the Backrooms."
                ],
                ["Created via the Wretched Cycle."], ["Killed via physical trauma."],
                {
                    "Biological & Anatomical": { "Physical Mass": "Emaciated Human", "Cellular Structure": "Decaying Flesh", "Disease Vector": "Non-infectious" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"Combat", d:"Wretches are weak and slow.", c:"green", l:"A simple push or strike with a blunt weapon will usually knock them down."},
                    {n:"Sanity Maintenance", d:"You can become a Wretch.", c:"blue", l:"Drink Almond Water regularly to stave off the Wretched Cycle."}
                ],
                [ {n:"Blunt Weapon", i:"ph-sword"}, {n:"Almond Water", i:"ph-drop"} ]
            ),
            history: renderHistory([
                {date:"JANUARY 01, 2012", t:"First Transformation Witnessed", d:"A wanderer watches his starving friend mutate over 4 days, documenting the process before fleeing."},
                {date:"JULY 10, 2018", t:"The Wretched Cycle Named", d:"M.E.G. officially coins the term for the mutation process."}
            ]),
            resonanceLogs: [ "> SCANNING...", "> MUTATED HUMAN DNA DETECTED." ]
        },

        "entity67": {
            type: "entity", id: "entity67", title: "Entity 67", name: "Partygoers",
            themeColor: "#fde047", themeHover: "#facc15", themeGlow: "rgba(253, 224, 71, 0.4)", idleAnimation: "animate-bounce",
            tags: [ { label: "EXTREMELY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "HIGH INTELLIGENCE", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }, { label: "ASSIMILATORS", class: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTIgMkg4TThQNDIgNk01IDhBMiAyIDAgMCAwIDUgNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmRlMDQ3IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
            specificMetrics: {
                "Behavioral Matrix": { "Hostility Baseline": "Maximum / Sadistic", "Target Preference": "All Humans", "Intelligence": "Genius Level", "Patience Level": "High" },
                "Biological & Anatomical": { "Physical Mass": "Standard Humanoid", "Cellular Structure": "Leathery Yellow Flesh", "Visual Appearance": "Carved bloody smile", "Disease Vector": "100% Assimilation Touch" },
                "Dimensional Interactions": { "Noclip Capability": "High (Can edit levels)", "Level Boundary Traversing": "Yes", "Cyber Warfare": "Capable of editing M.E.G. Database" }
            },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#111] overflow-hidden border-b border-liminal-border group"><div class="absolute inset-0 bg-yellow-900/20"></div><div class="relative z-10 text-yellow-400 font-mono text-2xl animate-pulse flex items-center gap-2">=) <span class="text-xs ml-4">WE ARE HAVING SO MUCH FUN COME JOIN US =)</span></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-red-500 bg-black/80 px-2 py-1 rounded border border-red-500/30 z-30 animate-flicker">WARNING // DATABASE COMPROMISED // MALICIOUS EDIT DETECTED</div></div>`,
            lore: renderLore(
                "Entity 67, the Partygoers, are highly intelligent, sadistic entities that pose one of the greatest threats in the Backrooms. They are known for their terrifying appearance, their ability to assimilate humans with a single touch, and their capacity to hack into human databases.",
                [
                    "Partygoers are tall, bipedal creatures with smooth, leathery, bright yellow skin. They possess no facial features other than a crude, bloody smile carved into where their mouth should be. They are almost always seen holding a single red balloon. Do not let their absurd appearance fool you; Partygoers are incredibly fast, physically powerful, and possess a sadistic, genius-level intelligence.",
                    "The most dangerous aspect of a Partygoer is their method of reproduction. They do not eat humans; they assimilate them. A single physical touch from a Partygoer's hand transmits a rapid, anomalous virus that transforms the victim into a new Partygoer within minutes. This process is said to be excruciatingly painful, though the victim's face will stretch into the signature carved smile as they mutate.",
                    "Unlike feral entities, Partygoers are highly organized and tech-savvy. They are known to hack into M.E.G. terminals and the Backrooms Database, altering level descriptions to lure wanderers into traps. Any document ending with a smiley face '=)' has been compromised by a Partygoer. They primarily inhabit Level Fun, an incredibly dangerous level decorated like a children's birthday party, serving as their main hive."
                ],
                [
                    "Finding a red balloon in any level and following it."
                ],
                [
                    "No known exits from Level Fun."
                ],
                {
                    "Biological & Anatomical": { "Physical Mass": "Standard Humanoid", "Cellular Structure": "Leathery Yellow Flesh", "Visual Appearance": "Carved bloody smile", "Disease Vector": "100% Assimilation Touch" },
                    "Behavioral & Aggression Matrix": { "Hostility Baseline": "Maximum / Sadistic", "Target Preference": "All Humans", "Intelligence": "Genius Level", "Patience Level": "High" },
                    "Dimensional Interactions": { "Noclip Capability": "High (Can edit levels)", "Level Boundary Traversing": "Yes", "Cyber Warfare": "Capable of editing M.E.G. Database" }
                }
            ),
            survivalGuide: renderSurvival(
                [
                    {n:"The Smile Check", d:"Always check digital logs for the signature smile.", c:"yellow", l:"If an entry tells you a level is safe and ends in '=)', it is a lie. Delete the file immediately."},
                    {n:"Balloon Avoidance", d:"Red balloons floating in hallways are lures.", c:"red", l:"If you see a red balloon, turn around and run. A Partygoer is hiding around the corner holding the string."},
                    {n:"Do Not Let Them Touch You", d:"A single touch causes irreversible assimilation.", c:"purple", l:"Engage strictly with long-range firearms. Melee combat is a guaranteed death sentence."},
                    {n:"Avoid Level Fun", d:"Level Fun is their hive. There is no reason to ever go there.", c:"blue", l:"If you noclip into a room that looks like a Chuck E. Cheese or a children's party, shoot yourself. It's better than assimilation."}
                ],
                [
                    {n:"Assault Rifle", i:"ph-crosshair"}, {n:"Encrypted Radio", i:"ph-radio"}, {n:"Cyanide Pill (Last resort)", i:"ph-pill"}
                ]
            ),
            history: renderHistory([
                {date:"SEPTEMBER 09, 2016", t:"First Database Hack", d:"M.E.G. archives are breached. The entry for Level Fun is altered to read 'Safe haven! Come party with us! =)'."},
                {date:"APRIL 14, 2019", t:"The Fun War", d:"A massive war breaks out between the Partygoers and the Partypoopers. The Partygoers win, driving the Partypoopers to extinction."},
                {date:"NOVEMBER 22, 2023", t:"L-Corp Firewall Initiated", d:"Liminality Corp deploys quantum firewalls to protect LiminOS from Partygoer digital infiltration."}
            ]),
            resonanceLogs: [
                "> WARNING: UNAUTHORIZED ACCESS DETECTED.",
                "<br>> <span class='text-yellow-400'>SYSTEM OVERRIDE:</span>", "  - HELLO FRIEND =) COME TO LEVEL FUN."
            ]
        }
    }
}