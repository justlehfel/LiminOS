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
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations, memory loss, paranoia, or manufactured realities. Physical entities may be absent, but the level itself is the threat." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently. The level cannot maintain a consistent state." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative anomalous properties. Water and food are usually abundant." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" }, { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" }, { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
};

const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303',
                pois: [
                    { name: "Gateway to Level 1 (Garages)", color: "#9ca3af", icon: "⬇" }, { name: "Fragile Wall (To Level 483)", color: "#ef4444", icon: "🔨" },
                    { name: "Rotten Floorboard (To Level 27)", color: "#8b5cf6", icon: "🕳" }, { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" }
                ]
            },
            specificMetrics: {
                "Level 0 Specific (Proprietary)": { "Carpet Saturation Depth": "1.2cm (Avg)", "Wall Permeability Factor": "0.0001% (Noclip Resist)", "Fluorescent Flicker Sync": "Asynchronous (Patternless)", "Spatial Redundancy Ratio": "89.4% Identical Layouts", "Ambient Hum Frequency": "59.8 Hz - 60.2 Hz" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.15 (Slower)", "Local Time Flow Rate": "Erratic / Psychological", "Memory Degradation": "+12% Accelerated" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H (Low)", "Euclidean Consistency": "14.2% (Severe Non-linear)" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "22.4 °C (Constant)", "Relative Humidity": "88% (Damp)", "Chemical Odor Profile": "Old Moist Carpet/Ozone" },
                "Survival & Infrastructure": { "Sanity Drain Rate": "-2% per Hour", "Rescue Probability": "0.000001%" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p>
                </div>
                <h3>Description</h3>
                <p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. All rooms in Level 0 share the same superficial features, with worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are the same, with each area differing significantly in shape and layout. The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. The buzz tends to induce throbbing migraines in most individuals, which persist for an extended period of time even after one has exited the level.</p>
                <p>Linear space and topology are significantly altered within Level 0, with it being possible to walk in a straight line, return to the starting point, and end up in a different set of rooms than one was in beforehand. Such properties cause the level to be extremely disorienting in layout, with research suggesting that the confusion may be the underlying cause of loss of mental stability among individuals. The Limina Theory propagates that the Backrooms are a prison created by unnatural forces. Despite this theory going generally unfollowed by most major groups, many wanderers believe it to be either partially or fully true. There are no known physical entities native to this level. However, visual and auditory hallucinations induced by profound isolation are heavily reported, mimicking entity encounters.</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Noclipping out of bounds in Baseline Reality (The Frontrooms).</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Failing an exit attempt in Level 283.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Wandering far and long enough may cause the hallways to gradually transition into Level 1's garages.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Breaking through a wall leads to Level 483.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Breaking through the floor leads to Level 27.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Entering a rare emergency exit leads to Level 14.</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-400 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. Psychological Anchoring</h4><p class="mb-2">The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 border border-purple-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Carry a mechanical watch. The ticking overrides the hum-buzz.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. Resource Management</h4><p class="mb-2">There is absolutely no clean water natively generated here. The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 border border-yellow-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Search specifically for pooling condensation near structural anomalies; these rarely contain trace amounts of safe Almond Water.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. Navigation Protocols</h4><p class="mb-2">Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless. Walking in a straight line will often result in a topological loop.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 border border-blue-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Employ the "Right-Hand Rule" to hit boundary walls which transition to Level 1.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Sleep Deprivation Countermeasures</h4><p class="mb-2">The inability to turn off the lights combined with the 60Hz hum makes REM sleep nearly impossible. Exhaustion is the #2 killer in Level 0.</p><p class="bg-red-900/20 p-3 rounded text-red-200 border border-red-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Tear strips of wallpaper to fashion a crude blindfold. Sleep in 3-hour bursts.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Equipment Degradation</h4><p class="mb-2">The ambient static charge (+12kV/m) will rapidly drain modern lithium-ion batteries. Magnetic storage will corrupt within 72 hours.</p><p class="bg-green-900/20 p-3 rounded text-green-200 border border-green-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Only rely on solid-state drives shielded in Faraday cages.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Dietary Restrictions</h4><p class="mb-2">There is no flora or fauna. The black mold occasionally found near baseboards is highly toxic if ingested.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 border border-orange-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> You must rely entirely on brought rations. Minimize physical exertion to lower metabolic burn.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Hypothetical Entity Protocols</h4><p class="mb-2">While Level 0 is canonically devoid of entities, paranoia often dictates otherwise. If you "hear" footsteps, do not panic.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 border border-teal-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Do not run. Acknowledge the hallucination out loud calmly. It will dissipate.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Noclip Vulnerabilities</h4><p class="mb-2">The walls here are structurally infinite, but geometry occasionally tears. Blackened or glitching walls indicate a weak Euclidean mesh.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 border border-fuchsia-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Avoid "glitch" walls unless desperate, as noclipping here often leads to the Void rather than Level 1.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Fluid Extraction (Warning)</h4><p class="mb-2">Attempting to squeeze or extract fluid from the carpet releases aerosolized toxic spores embedded in the polymer fibers.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 border border-cyan-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> If forced to walk barefoot, wrap feet in torn wallpaper to prevent dermal absorption.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. Spatial Marking (Chalk)</h4><p class="mb-2">Conventional marking methods (leaving items, marking walls) are ineffective as the layout shifts or items fall through geometry.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 border border-rose-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Chalk marks disappear after 12h. Only mark to confirm immediate localized loops.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 0)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.1s;"><i class="ph ph-headphones text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Analog Noise-cancelling headsets</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.2s;"><i class="ph ph-drop text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Minimum 3L Purified Almond Water</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.3s;"><i class="ph ph-pencil-simple text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Industrial Marking Chalk</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.4s;"><i class="ph ph-broadcast text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Proprietary Sub-space beacon</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.5s;"><i class="ph ph-first-aid text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">High-calorie survival paste (14 days)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.6s;"><i class="ph ph-watch text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Mechanical Watch (No battery)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.7s;"><i class="ph ph-shield-check text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Faraday Cage Pouch (For SSDs)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.8s;"><i class="ph ph-boot text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Thick-soled combat boots (Toxin resist)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 0.9s;"><i class="ph ph-eye-closed text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Light-blocking sleep mask</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up" style="animation-delay: 1.0s;"><i class="ph ph-compass text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Analog Compass (Detects Hume shifts)</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">MAY 12, 2019</div><h4 class="text-white font-bold text-lg mb-2">1. Initial Archival Image Captured</h4><p class="text-sm text-liminal-muted">An anonymous user uploads the first verified visual telemetry of Level 0. Liminality Corp acquires the raw file.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">OCTOBER 4, 2020</div><h4 class="text-white font-bold text-lg mb-2">2. Project "Yellow Wallpaper" Initiated</h4><p class="text-sm text-liminal-muted">The first batch of unmanned, tungsten-shielded probes are sent via induced noclip events.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JUNE 13, 2022</div><h4 class="text-white font-bold text-lg mb-2">3. Expedition Log Recovered</h4><p class="text-sm text-liminal-muted">Data retrieval from a deceased wanderer's device proves severe psychological degradation models.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JANUARY 18, 2023</div><h4 class="text-white font-bold text-lg mb-2">4. The "400-Mile March" Experiment</h4><p class="text-sm text-liminal-muted">Agent L-89 undergoes an experimental endurance run, confirming massive topological loop structures.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 3, 2024</div><h4 class="text-white font-bold text-lg mb-2">5. First Controlled Noclip Exit Verified</h4><p class="text-sm text-liminal-muted">A Liminality drone successfully maps an exit threshold breaching into Level 1.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">AUGUST 14, 2025</div><h4 class="text-white font-bold text-lg mb-2">6. Discontinuation of Physical Manned Outposts</h4><p class="text-sm text-liminal-muted">L-Corp realizes establishing a physical base in Level 0 is impossible due to shifting geometry.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Stable LiminOS Uplink Achieved</h4><p class="text-sm text-liminal-muted">Proprietary quantum nodes allow real-time telemetry extraction. The Cartography Engine maps 99.98% accurately.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> CALIBRATING HUME SENSORS... [OK]", "> BYPASSING M.E.G. INTERFERENCE... [OK]",
                "<br>> <span class='text-liminal-primary'>ANALYZING MOISTURE CONTENT:</span>", "  - H2O: 98.01%", "  - UNKNOWN BIOLOGICAL FLUID: 1.99%",
                "<br>> <span class='text-yellow-400'>CHECKING STRUCTURAL INTEGRITY:</span>", "  - WALL PERMEABILITY: 0.0001% (NOCLIP RESISTANCE HIGH)", "  - EUCLIDEAN CONSISTENCY: 14.2%",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - RESULT: 0 ENTITIES DETECTED.", "  - NOTE: IGNORE AUDITORY HALLUCINATIONS.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: {
                seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b',
                pois: [ { name: "Supply Crate", color: "#60a5fa", icon: "📦" }, { name: "M.E.G. Base Alpha", color: "#22c55e", icon: "🛡" }, { name: "Elevator (Level 2)", color: "#dc2626", icon: "↕" } ]
            },
            specificMetrics: {
                "Level 1 Specific (Proprietary)": { "Concrete Density": "2400 kg/m³", "Fog Accumulation": "Low", "Fluorescent Failure": "4% per Sector", "Resource Generation": "Confirmed" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "95.2 H", "Euclidean Consistency": "80.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "15.0 °C", "Relative Humidity": "50%", "Chemical Odor Profile": "Motor Oil/Concrete" },
                "Survival & Infrastructure": { "Base Threat Level": "1", "Rescue Probability": "Moderate" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and low-hanging fog. It is the first truly habitable level in the Backrooms.</p></div>
                <h3>Description</h3>
                <p>Level 1 is a large, sprawling warehouse that features concrete floors and walls, exposed rebar, and a low-hanging fog with no discernible source. The fog often coalesces into condensation, forming puddles on the floor in inconsistent areas. Unlike Level 0, this level possesses a consistent supply of water and electricity, which allows indefinite habitation by wanderers providing that appropriate precautions are taken. It is also far more expansive, possessing stairs, elevators, isolated rooms, and hallways. Crates of supplies appear and disappear randomly within the level.</p>
                <p>The light fixtures in Level 1 are prone to flickering and failing, plunging sections into total darkness. It is in these dark zones that entities such as Dullers, Adult Facelings, and Hounds can manifest. Wanderers are advised to carry reliable light sources and to avoid dark areas entirely. Due to the high stability of this level, it acts as the central hub for the Major Explorer Group (M.E.G.) and is arguably the safest populated level in the entire network.</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Wandering long enough through Level 0.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Entering through unlocked doors in Level 1.5.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Walking down any extended hallway often leads to Level 2.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Entering an elevator can take you to Level 2 or Level 3.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Locating a painting on the concrete wall leads to Level 57.</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. Outpost Proximity</h4><p class="mb-2">Level 1 is home to M.E.G. Base Alpha. Locate this base for medical aid and trading.</p><p class="bg-green-900/20 p-3 rounded text-green-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. The Darkness Protocol</h4><p class="mb-2">When lights flicker, entities spawn. Retreat to lit areas instantly.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Power grids follow a determinable 14-hour cycle. Plan rests accordingly.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. Crate Foraging</h4><p class="mb-2">Crates randomly spawn. Some contain Almond Water, others contain hazardous anomalies.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Only open crates made of standard pine. Dark oak crates often contain entities.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Hound Evasion</h4><p class="mb-2">Hounds patrol the fringes. Do not break eye contact if engaged.</p><p class="bg-red-900/20 p-3 rounded text-red-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Intimidate them. Screaming and making yourself appear larger works in Level 1.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Puddle Contamination</h4><p class="mb-2">Floor fog condenses into puddles. Do not drink it; it causes severe dysentery.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Puddles are highly flammable. Use them to create defensive fire lines.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Elevator Roulette</h4><p class="mb-2">Elevators are a quick exit to Level 2 or 3, but some drop into the Void.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Press the call button twice. If the ding is a major chord, it's safe.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Fog Inhalation</h4><p class="mb-2">Extended exposure to the low-hanging fog causes mild pneumonia.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Sleep on top of supply crates, at least 1 meter off the ground.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Trade Economy</h4><p class="mb-2">Level 1 uses Almond Water and Fire Salt as standard currency among wanderers.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Hoard mechanical parts from crates; B.N.T.G. traders pay premium for them.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Duller Phasing</h4><p class="mb-2">Dullers exist inside the concrete walls and drag victims through solid matter.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Avoid leaning against walls. Walk strictly in the center of the warehouse lanes.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. Structural Decay</h4><p class="mb-2">Some rebar pillars are rusted through and structurally unsound.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Tap pillars with a wrench. A hollow ring means a spatial collapse is imminent.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 1)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-flashlight text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">High-Lumen Crank Flashlight</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-mask-water text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">N95 Particulate Respirator (For fog)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-wrench text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Crowbar (For supply crates)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-hand-coins text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Trade Barter Goods (Batteries, wires)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-bandaids text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Trauma Medical Kit</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-tent text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Elevated Sleeping Cot</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-fire text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Magnesium Fire Starter</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-sword text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Melee Defense Weapon (Machete)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-binoculars text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Night Vision Goggles (NVGs)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-book-open text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">M.E.G. Cartography Map</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">FEBRUARY 4, 2020</div><h4 class="text-white font-bold text-lg mb-2">1. First Successful Transition</h4><p class="text-sm text-liminal-muted">A wanderer posts a blurry photo of a concrete pillar, marking the discovery of Level 1.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">AUGUST 14, 2020</div><h4 class="text-white font-bold text-lg mb-2">2. Establishment of Base Alpha</h4><p class="text-sm text-liminal-muted">M.E.G. successfully fortifies a large quadrant, establishing the first major human settlement.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">NOVEMBER 2, 2021</div><h4 class="text-white font-bold text-lg mb-2">3. The Great Blackout</h4><p class="text-sm text-liminal-muted">A massive electrical failure plunges Sector B into darkness for 3 days. Entity casualties are high.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">APRIL 10, 2022</div><h4 class="text-white font-bold text-lg mb-2">4. B.N.T.G. Trade Routes Open</h4><p class="text-sm text-liminal-muted">The Backrooms Non-Aligned Trade Group secures a safe route between Level 1 and Level 4.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">SEPTEMBER 21, 2023</div><h4 class="text-white font-bold text-lg mb-2">5. Discovery of the Void Elevators</h4><p class="text-sm text-liminal-muted">Three explorers are lost after mapping previously dormant elevator shafts.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JULY 5, 2025</div><h4 class="text-white font-bold text-lg mb-2">6. L-Corp Sensor Network Deployed</h4><p class="text-sm text-liminal-muted">Liminality Corp secretly installs 500 stealth nodes in the ceiling grids for passive scanning.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Population Peaks at 300+</h4><p class="text-sm text-liminal-muted">Base Alpha becomes a sprawling, self-sustaining civilian outpost and trade center.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]",
                "<br>> <span class='text-liminal-primary'>FOG ANALYSIS:</span>", "  - CONDENSATION: 90% H2O, 10% MOTOR OIL",
                "<br>> <span class='text-yellow-400'>CRATE SPAWN PREDICTION:</span>", "  - NEW CRATE DETECTED AT SECTOR 4B",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 3 HOUNDS DETECTED IN DARK ZONE.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.03, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000',
                pois: [ { name: "Superheated Pipe Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Unmarked Door", color: "#f59e0b", icon: "🚪" } ]
            },
            specificMetrics: {
                "Level 2 Specific (Proprietary)": { "Pipe Thermal Output": "Max 43°C", "Hallway Width": "0.8m to 1.5m", "Viscous Fluid Pools": "Frequent (Oil)", "Entity Spawn Rate": "Moderate" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "88.0 H", "Euclidean Consistency": "60.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "38.0 °C", "Relative Humidity": "95%", "Chemical Odor Profile": "Burning Oil, Iron" },
                "Survival & Infrastructure": { "Base Threat Level": "2", "Rescue Probability": "Low" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 2 mainly consists of dark, grey, concrete maintenance tunnels, stretching on for millions of miles. The walls are lined with pipes and occasionally ventilation ducts.</p></div>
                <h3>Description</h3>
                <p>Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with pipes lining the walls. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). Explorers will find the heat oppressive, and the constant hum of machinery overwhelming. Entities are far more common here. Smilers lurk in the unlit stretches of the maintenance tunnels, and Clumps make their homes within the ventilation shafts and darker corners. The physical layout of Level 2 is linear but highly inconsistent, meaning corridors can stretch for miles without intersecting, only to abruptly loop back onto themselves. Occasionally, doors can be found along the walls. The vast majority of these doors are locked, but those that are open can lead to small, closet-like rooms containing machinery, or act as transitions to Level 3.</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Walking down long hallways in Level 1.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Entering an unlocked door in The Hub.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Finding an unlocked fire exit door leads to Level 3.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Entering a multi-colored door leads to Level 283.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Crawling into a narrow, uncomfortably hot vent leads to Level 2.1.</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. Heat Stroke Prevention</h4><p class="mb-2">The ambient temperature in Level 2 will rapidly dehydrate wanderers.</p><p class="bg-red-900/20 p-3 rounded text-red-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Stay close to the floor where the temperature is 2-3°C cooler.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. Smiler Evasion</h4><p class="mb-2">If you spot a Smiler, do not use a flashlight. Maintain eye contact.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Throw a glowstick down an intersecting corridor to distract them.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. Steam Vents</h4><p class="mb-2">Pressurized pipes occasionally burst, releasing scalding steam.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> A loud hissing buildup gives a 3-second warning. Dive to the floor.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Overhead Ambush (Clumps)</h4><p class="mb-2">Clumps hide in the ceiling vents and drop on unsuspecting victims.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> If a vent grate is missing, run past the opening; do not walk.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Door Navigation</h4><p class="mb-2">Most doors are locked. Testing every handle drains stamina.</p><p class="bg-green-900/20 p-3 rounded text-green-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Look for doors with rust concentrated around the hinges; these are usually unlocked.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Machinery Deafness</h4><p class="mb-2">The noise covers the sounds of approaching entities.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Rely on visual cues and vibrations through the soles of your boots.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Toxic Viscosity</h4><p class="mb-2">Puddles of thick black fluid are highly flammable and sticky.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> If coated, do not use friction to wipe it off; it will ignite.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Claustrophobia Management</h4><p class="mb-2">Hallways shrink to 0.8m wide, inducing panic attacks.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Focus on the pipes running parallel to you to ground your depth perception.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Wretch Encounters</h4><p class="mb-2">Former wanderers driven mad by the heat wander aimlessly.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> They are blind but have acute hearing. Freeze completely until they pass.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. Bypassing Dead Ends</h4><p class="mb-2">Linear corridors often end abruptly in brick walls.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> These are usually illusions. Close your eyes and walk forward slowly to phase through.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 2)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-thermometer text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Ambient Thermometer</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-drop text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">5L Thermal Water Jug</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-lightbulb text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Breakable Chemical Glowsticks</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-fire-extinguisher text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Miniature Foam Extinguisher</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-shield text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Heat-Resistant Gloves</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-mask-water text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Carbon-filter Gas Mask</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-sword text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Blunt Force Weapon (Lead Pipe)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-first-aid text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Burn Salve & Gauze</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-ear text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Decibel-reducing Earplugs</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-key text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Lockpicking Kit</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">MAY 20, 2020</div><h4 class="text-white font-bold text-lg mb-2">1. The Heatwave Discovery</h4><p class="text-sm text-liminal-muted">Explorers breach an iron door from Level 1, encountering the extreme temperatures of Level 2.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JANUARY 10, 2021</div><h4 class="text-white font-bold text-lg mb-2">2. First Recorded Encounter with Clumps</h4><p class="text-sm text-liminal-muted">A wanderer records an amalgamation of limbs dropping from a vent.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">SEPTEMBER 5, 2021</div><h4 class="text-white font-bold text-lg mb-2">3. The Office Space Oasis</h4><p class="text-sm text-liminal-muted">A small pocket dimension labeled "The Office Space" is found locked behind a maintenance door.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 12, 2022</div><h4 class="text-white font-bold text-lg mb-2">4. Smiler Migration Documented</h4><p class="text-sm text-liminal-muted">A massive influx of Smilers moves into Sector 4 due to a long-term power failure.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">FEBRUARY 8, 2023</div><h4 class="text-white font-bold text-lg mb-2">5. M.E.G. Foraging Ban</h4><p class="text-sm text-liminal-muted">M.E.G. officially bans extended foraging in Level 2 due to an 80% casualty rate.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">OCTOBER 30, 2024</div><h4 class="text-white font-bold text-lg mb-2">6. Pipe Rupture Event</h4><p class="text-sm text-liminal-muted">A 40-mile stretch of piping ruptures simultaneously, flooding the corridors with boiling tar.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Transit Route Status</h4><p class="text-sm text-liminal-muted">Used strictly as a dangerous transit corridor to Level 3. No permanent bases exist.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL ANALYSIS:</span>", "  - METAL FATIGUE DETECTED IN PIPES",
                "<br>> <span class='text-purple-400'>COGNITITIVE HAZARD DETECTED:</span>", "  - CLAUSTROPHOBIA INDUCING GEOMETRY",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 1 CLUMP IN CEILING CAVITY.", "  - 4 SMILERS IN SECTOR 7G.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111',
                pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Elevator (Level 4)", color: "#3b82f6", icon: "↕" } ]
            },
            specificMetrics: {
                "Level 3 Specific (Proprietary)": { "Ambient Voltage Level": "10,000V", "Acoustic Hazard": "Deafening", "Entity Density Rate": "Extreme", "Copper Wire Permeation": "98%" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "70.0 H", "Euclidean Consistency": "40.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "25.0 °C", "Relative Humidity": "40%", "Chemical Odor Profile": "Ozone, Copper" },
                "Survival & Infrastructure": { "Base Threat Level": "4", "Rescue Probability": "Near Zero" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 3 is a series of long, dark, twisting hallways that work similarly to Level 0. They all consist of segmented rooms, resembling a prison complex or an electrical station.</p></div>
                <h3>Description</h3>
                <p>Level 3 is one of the most dangerous early levels in the Backrooms. It shares visual similarities with Level 2, but the environment is significantly darker, and the architecture consists of exposed copper pipes, iron bars, and large electrical generators. The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible.</p>
                <p>The entity density in Level 3 is extraordinarily high. Hounds, Facelings, Wretches, Skin-Stealers, and Smilers are abundant. Wanderers entering Level 3 are advised to move as quickly and quietly as possible, though the latter is difficult given the debris and metal grating that cover the floors. Due to the massive electrical grid, exposed live wires are common. Accidentally brushing against the walls in the dark can result in instant electrocution. Despite the immense danger, Level 3 is rich in resources like Fire Salt, Royal Rations, and Almond Water.</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Unlocked doors in Level 2 generally lead here.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Elevators in Level 4 can occasionally travel down here.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Elevators are the only confirmed, safe method to reach Level 4 or Level 5.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Wooden doors occasionally lead to Level 31.</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. High Entity Density</h4><p class="mb-2">Do not attempt to fight. You are severely outnumbered.</p><p class="bg-red-900/20 p-3 rounded text-red-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Use the deafening machinery noise to mask your sprinting footsteps.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. Electrocution Hazard</h4><p class="mb-2">Exposed live wires hang from the ceiling.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Stay in the exact dead-center of the hallways. Do not touch metal grates.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. Hound Packs</h4><p class="mb-2">Hounds hunt in organized packs here.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> If they acquire your scent, seek a chain-link fenced area and lock the gate.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Resource Scavenging</h4><p class="mb-2">Fire Salt and Royal Rations are hidden in fuse boxes.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Only open grey fuse boxes. Yellow ones are rigged with cognitohazards.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Skin-Stealer Deception</h4><p class="mb-2">Skin-Stealers wear human victims and cry for help.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> If they ask for help but their voice echoes mechanically, shoot to kill.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Metal Flooring</h4><p class="mb-2">The metal grating floors amplify vibrations.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Walk on the concrete borders supporting the grates, not the grates themselves.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Elevator Activation</h4><p class="mb-2">Elevators require power to operate.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> You must manually bridge power from a generator to the elevator shaft. Wear rubber gloves.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Wi-Fi Anomalies</h4><p class="mb-2">Wi-Fi is incredibly strong here, but intercepts your devices.</p><p class="bg-green-900/20 p-3 rounded text-green-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Do not connect to "L3_FREE". It downloads a virus that flashes your screen to attract entities.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Copper Toxicity</h4><p class="mb-2">The air tastes heavily of copper and ozone.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Bleeding here attracts entities 10x faster due to the metallic air synergy.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. No Sleep Protocol</h4><p class="mb-2">Sleeping in Level 3 is a death sentence.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Consume adrenaline or Fire Salt. Push through to Level 4.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 3)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-hand-palm text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">High-Voltage Rubber Gloves</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-boot text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Thick Rubber-Soled Boots</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-sword text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Non-Conductive Melee Weapon (Wood)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-crosshair text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Firearm (Lethal Force Authorized)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-lightning text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">EMP Grenades (Stuns entities)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-first-aid text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Hemostatic Clotting Agents</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-pill text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Adrenaline Syringes</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-wrench text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Insulated Wire Cutters</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-lock-key text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Heavy Padlocks (For securing gates)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-flashlight text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Tactical Strobe Light</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">AUGUST 19, 2020</div><h4 class="text-white font-bold text-lg mb-2">1. The Death Trap Discovery</h4><p class="text-sm text-liminal-muted">Explorers from Level 2 enter a fire exit, realizing they are trapped in a high-threat zone.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 5, 2021</div><h4 class="text-white font-bold text-lg mb-2">2. Base Gamma Overrun</h4><p class="text-sm text-liminal-muted">M.E.G. attempts an outpost. It is destroyed by a swarm of Skin-Stealers in 72 hours.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">NOVEMBER 11, 2022</div><h4 class="text-white font-bold text-lg mb-2">3. Fire Salt Extraction Perfected</h4><p class="text-sm text-liminal-muted">B.N.T.G. scavengers devise a method to safely extract Fire Salt from the fuse boxes.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">FEBRUARY 14, 2023</div><h4 class="text-white font-bold text-lg mb-2">4. The Great Generator Reboot</h4><p class="text-sm text-liminal-muted">An unknown wanderer triggers a massive generator, lighting up a previously pitch-black sector.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JUNE 9, 2024</div><h4 class="text-white font-bold text-lg mb-2">5. Elevator Map Compiled</h4><p class="text-sm text-liminal-muted">A comprehensive map of working elevators to Level 4 is distributed among survivor groups.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MAY 22, 2025</div><h4 class="text-white font-bold text-lg mb-2">6. Wi-Fi Trap Identified</h4><p class="text-sm text-liminal-muted">L-Corp isolates a rogue signal mimicking a safe network, saving countless agents.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Designated "Run" Zone</h4><p class="text-sm text-liminal-muted">Considered entirely unlivable. Scavenging runs are strictly timed to 4-hour windows.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL DANGER:</span>", "  - 10kV DETECTED ON LOCAL GRID",
                "<br>> <span class='text-red-500'>MASSIVE ENTITY SIGNATURES:</span>", "  - 24 HOSTILES IN 100M RADIUS",
                "<br>> <span class='text-yellow-400'>SURVIVAL PROBABILITY:</span>", "  - 4.2%",
                "<br>> UPLOADING AND SEVERING CONNECTION."
            ]
        },

        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: {
                seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc',
                pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Trap", color: "#000", icon: "🪟" } ]
            },
            specificMetrics: {
                "Level 4 Specific (Proprietary)": { "Cubicle Density": "75%", "Carpet Cleanliness": "Pristine", "Window Occurrence": "Low", "Almond Water Respawn": "High" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "100.0 H", "Euclidean Consistency": "99.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "21.0 °C", "Relative Humidity": "45%", "Chemical Odor Profile": "Clean Linen, Rain" },
                "Survival & Infrastructure": { "Base Threat Level": "0.5", "Rescue Probability": "High" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 4 resembles an empty office building. It is devoid of furniture save for the occasional water cooler or desk, and is completely safe.</p></div>
                <h3>Description</h3>
                <p>Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. There is no hum-buzz like in Level 0; instead, the level is accompanied by the soft, soothing hum of air conditioning or occasionally faint, muffled sounds of rain. This level is a sanctuary for wanderers. Entities are almost completely nonexistent here, with the notable exception of Windows—anomalous entities that disguise themselves as glass windows leading to a dark exterior.</p>
                <p>Scattered throughout Level 4 are water coolers that dispense pure Almond Water, and vending machines containing safe, edible snacks. Because of its safety and resources, the M.E.G. and other prominent groups have established massive bases and trade hubs here.</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Arriving via elevators from Level 3.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Following B.N.T.G. marked trails from Level 1.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Finding an ornate stairwell leads to Level 5.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Breaking a regular window (not an entity) may drop you into Level 6 (Not Recommended).</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. Rest and Resupply</h4><p class="mb-2">Level 4 is the ideal place to recover sanity, heal wounds, and gather supplies.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Sleep in the center of cubicles; they naturally block out the ambient noise.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. The Window Threat</h4><p class="mb-2">Despite the safety, Windows are a lethal threat.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. Water Cooler Foraging</h4><p class="mb-2">Coolers contain the highest purity Almond Water.</p><p class="bg-green-900/20 p-3 rounded text-green-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Always check the tap. If it dispenses red liquid, do not drink it.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Vending Machine Exploits</h4><p class="mb-2">Machines contain Frontrooms-style snacks.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> They do not require coins. Simply press a button sequence: 4-2-8-1.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Base Omega Registration</h4><p class="mb-2">Register with the M.E.G. upon arrival for protection.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Do not give them your real name. They use it for anomalous tracking.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Hound Stragglers</h4><p class="mb-2">Rarely, a Hound follows an elevator up from Level 3.</p><p class="bg-red-900/20 p-3 rounded text-red-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> The bright lights disorient them. Stare them down; they will flee.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Static Shocks</h4><p class="mb-2">The pristine carpet builds massive static electricity.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Touch a metal cubicle frame every 10 minutes to discharge safely.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Trade Etiquette</h4><p class="mb-2">Level 4 is the economic heart of the Backrooms.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Trade medical supplies for information, not water. Water is abundant here.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Printer Anomalies</h4><p class="mb-2">Office printers will occasionally print pages on their own.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Read them carefully. They often map out nearby exits.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. Stairwell Transitions</h4><p class="mb-2">Finding an ornate stairwell is the safest way forward.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> If the stairs go down instead of up, do not enter. It leads to Level 6.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 4)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-drop text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Empty Canteens (For stockpiling)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-hand-coins text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">High-Value Trade Goods</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-sleeping-bag text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Comfortable Sleeping Bag</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-book text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Journal / Pen (For mapping)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-shield-check text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Anti-Static Grounding Strap</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-first-aid text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Sanity Restorative Meds</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-knife text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Utility Knife (For crafting)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-bag text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Large Duffel Bag (Looting)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-camera text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Camera (To document safe zones)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-radio text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Short-wave Radio (Comms work here)</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">SEPTEMBER 12, 2020</div><h4 class="text-white font-bold text-lg mb-2">1. The Ascent from Level 3</h4><p class="text-sm text-liminal-muted">A group of battered wanderers takes an elevator up from Level 3 and finds paradise.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">NOVEMBER 11, 2021</div><h4 class="text-white font-bold text-lg mb-2">2. Establishment of M.E.G. Base Omega</h4><p class="text-sm text-liminal-muted">M.E.G. relocates primary civilian housing here.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 22, 2022</div><h4 class="text-white font-bold text-lg mb-2">3. The Window Massacre</h4><p class="text-sm text-liminal-muted">A group of wanderers mistake an anomalous window for an exit. 12 are pulled into the void.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">DECEMBER 1, 2023</div><h4 class="text-white font-bold text-lg mb-2">4. B.N.T.G. Headquarters Built</h4><p class="text-sm text-liminal-muted">The Trade Group sets up their central bank and barter exchange in a large open-plan sector.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JULY 14, 2024</div><h4 class="text-white font-bold text-lg mb-2">5. Agriculture Attempt</h4><p class="text-sm text-liminal-muted">Wanderers successfully grow Frontrooms vegetation using modified fluorescent lighting.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">APRIL 3, 2025</div><h4 class="text-white font-bold text-lg mb-2">6. L-Corp Observer Nodes Online</h4><p class="text-sm text-liminal-muted">Liminality Corp embeds into the M.E.G. infrastructure without detection.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. The Capital of the Backrooms</h4><p class="text-sm text-liminal-muted">Level 4 is the most populated and secure level known to wanderers.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99% STABLE",
                "<br>> <span class='text-blue-400'>RESOURCE TRACKING:</span>", "  - 400 ALMOND WATER DISPENSERS IN RADIUS",
                "<br>> <span class='text-yellow-400'>SCANNING FOR COGNITOHAZARDS:</span>", "  - WARNING: WINDOW ANOMALY LOCATED AT X:24, Y:-90",
                "<br>> <span class='text-green-400'>POPULATION DENSITY:</span>", "  - 2,490 HUMAN LIFE SIGNS DETECTED",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            themeColor: "#b45309", themeHover: "#92400e", themeGlow: "rgba(180, 83, 9, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "PSYCHOLOGICAL HAZARD", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDUxYTAzIi8+PHBhdGggZD0iTTAgMEwxMiAxMk0xMiAwTDAgMTIiIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: {
                seed: 50401, wallDensity: 0.7, renderStyle: 'diagonal', gridSize: 8, poiChance: 0.03, wallColor: '#b45309', gridColor: 'rgba(217, 119, 6, 0.1)', wallThickness: 0.2, bgColor: '#291001',
                pois: [ { name: "Beverly Room", color: "#10b981", icon: "🍸" }, { name: "Deathmoth Hive", color: "#f59e0b", icon: "🦋" }, { name: "Boiler Room", color: "#dc2626", icon: "🔥" } ]
            },
            specificMetrics: {
                "Level 5 Specific (Proprietary)": { "Wallpaper Toxicity": "Trace Arsenic", "Jazz Music Loop": "3.4 Hours", "Deathmoth Population": "High", "Architecture": "1930s Art Deco" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Psychological Dilation", "Memory Degradation": "+15%" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "85.0 H", "Euclidean Consistency": "70.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "23.0 °C", "Relative Humidity": "30%", "Chemical Odor Profile": "Mahogany, Dust" },
                "Survival & Infrastructure": { "Base Threat Level": "2", "Rescue Probability": "Moderate" }
            },
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 5 is an infinite hotel complex constructed in early 20th-century Art Deco architecture. The sound of faint, looping jazz music can be heard everywhere.</p></div>
                <h3>Description</h3>
                <p>Level 5 takes on the appearance of a lavishly decorated, yet completely abandoned, 1930s hotel. Ornate mahogany doors, detailed gold-leaf wallpaper, and plush red carpets cover the endless hallways. Much of the level is pristine, though wanderers report an overarching feeling of being watched, leading to severe paranoia if isolated for too long.</p>
                <p>The primary entity threat in Level 5 comes from Deathmoths. The level is considered the central hive for these creatures. Male Deathmoths are completely harmless, but the giant Female Deathmoths are aggressive and highly dangerous. They are attracted to the ornate brass wall sconces that provide the level's lighting. There are three main areas in Level 5: The Main Hotel, The Beverly Room (a massive ballroom used as a safe hub), and The Boiler Room (a searingly hot, rusty labyrinth underneath where Clumps reside).</p>
                <h3>Entrances & Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Ascending ornate stairs in Level 4.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1"></i> Taking an elevator from Level 3.</li>
                    </ul>
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <ul class="list-none space-y-2 text-liminal-text mb-4">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Going too deep into the Boiler Room leads to Level 6.</li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> Entering dark, unlit hotel rooms can sometimes transport you to Level 63.</li>
                    </ul>
                </div>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">1. Deathmoth Avoidance</h4><p class="mb-2">Female Deathmoths are attracted to light.</p><p class="bg-orange-900/20 p-3 rounded text-orange-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Avoid areas with broken sconces; it means a female claimed it.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-fuchsia-500"><h4 class="text-fuchsia-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">2. The Jazz Loop Paranoia</h4><p class="mb-2">The looping 1920s music induces severe anxiety.</p><p class="bg-fuchsia-900/20 p-3 rounded text-fuchsia-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Wear earplugs. If the music suddenly stops, hide immediately.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">3. The Beverly Room</h4><p class="mb-2">The massive ballroom is a safe zone.</p><p class="bg-green-900/20 p-3 rounded text-green-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Use the ballroom to trade for weapons before entering the Boiler Room.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">4. Boiler Room Clumps</h4><p class="mb-2">The sub-level is infested with Clumps.</p><p class="bg-red-900/20 p-3 rounded text-red-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Never go into the Boiler Room unless absolutely necessary to reach Level 6.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">5. Arsenic Wallpaper</h4><p class="mb-2">The beautiful wallpaper contains toxic elements.</p><p class="bg-yellow-900/20 p-3 rounded text-yellow-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Do not touch the walls. If you do, wash your hands with Almond Water.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">6. Room 54</h4><p class="mb-2">There are rumors of a Room 54 that contains immense wealth.</p><p class="bg-blue-900/20 p-3 rounded text-blue-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> It is a psychological trap. Room 54 does not exist. Do not look for it.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">7. Furniture Hallucinations</h4><p class="mb-2">Couches and chairs may appear to breathe.</p><p class="bg-purple-900/20 p-3 rounded text-purple-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Sit on the floor. Do not trust the furniture.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">8. Mirror Evasion</h4><p class="mb-2">Bathrooms contain mirrors that reflect incorrect timelines.</p><p class="bg-cyan-900/20 p-3 rounded text-cyan-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Keep your head down when washing in the sinks.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-rose-500"><h4 class="text-rose-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">9. Male Deathmoth Utility</h4><p class="mb-2">Males are harmless and produce a healing silk.</p><p class="bg-rose-900/20 p-3 rounded text-rose-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Let them land on you. Do not swat them; females will smell the pheromones.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500"><h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">10. Elevator Buttons</h4><p class="mb-2">Elevators here have buttons that go up to floor 300.</p><p class="bg-teal-900/20 p-3 rounded text-teal-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> Never press a button above 12. The air thins out completely.</p></div>
                    
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout (Level 5)</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-ear text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Industrial Earplugs (Crucial)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-bug text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Chemical Moth Repellent</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-mask-water text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Respirator (For Boiler Room)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-sword text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Long-reach Spear (For Deathmoths)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-flashlight text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Red-light Headlamp (Less attractive to moths)</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-first-aid text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Acid Burn Kits</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-pill text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Anti-psychotic Medication</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-drop text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Almond Water</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-map-trifold text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Hotel Blueprints</span></div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up"><i class="ph ph-watch text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">Stopwatch (Time reality checks)</span></div>
                        </div>
                    </div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">FEBRUARY 2, 2021</div><h4 class="text-white font-bold text-lg mb-2">1. The Golden Stairs Discovery</h4><p class="text-sm text-liminal-muted">Explorers from Level 4 ascend ornate stairs, finding the hotel.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">AUGUST 12, 2021</div><h4 class="text-white font-bold text-lg mb-2">2. The Moth King Slain</h4><p class="text-sm text-liminal-muted">A coordinated group of wanderers kill a massive Deathmoth King, clearing a wing of the hotel.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">DECEMBER 1, 2021</div><h4 class="text-white font-bold text-lg mb-2">3. The Beverly Room Treaty</h4><p class="text-sm text-liminal-muted">Factions establish a neutral trading hub within the Beverly Room.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 19, 2022</div><h4 class="text-white font-bold text-lg mb-2">4. Boiler Room Mapped</h4><p class="text-sm text-liminal-muted">M.E.G. agents map the descent to Level 6, suffering heavy Clump-related casualties.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">OCTOBER 31, 2023</div><h4 class="text-white font-bold text-lg mb-2">5. The "Jazz Madness" Incident</h4><p class="text-sm text-liminal-muted">Several wanderers go completely insane, barricading themselves in Room 212.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">JANUARY 11, 2025</div><h4 class="text-white font-bold text-lg mb-2">6. Arsenic Discovery</h4><p class="text-sm text-liminal-muted">Scientists at Base Omega trace a mysterious sickness back to the wallpaper in Level 5.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. The Hub of Deceit</h4><p class="text-sm text-liminal-muted">Considered safe by many, but the psychological toll makes it extremely dangerous long-term.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> INITIALIZING ACOUSTIC SCAN...", "> DETECTING LOOPING AUDIO TRACK [1920s_JAZZ.wav]",
                "<br>> <span class='text-fuchsia-400'>COGNITOHAZARD ALERT:</span>", "  - AUDITORY PARANOIA INDUCERS PRESENT",
                "<br>> <span class='text-orange-400'>BIOLOGICAL ENTITIES:</span>", "  - MASSIVE AERIAL PREDATORS DETECTED (DEATHMOTHS)",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL INTEGRITY:</span>", "  - HOTEL WINGS REPEAT INFINITELY",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "1", title: "Entity 1", name: "The Cameraman",
            themeColor: "#9ca3af", themeHover: "#6b7280", themeGlow: "rgba(156, 163, 175, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" }, { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            specificMetrics: {
                "Behavioral & Aggression Matrix": { "Hostility Baseline": "Passive", "Target Preference": "None", "Cognitohazard Output": "0%" },
                "Entity Specific (Proprietary)": { "Origin Level": "Unknown", "Photographic Resolution": "4K+", "Flash Lumens Generated": "0" }
            },
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="w-32 h-32 rounded-full border-2 border-gray-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast">
                            <i class="ph ph-camera text-6xl text-gray-400 opacity-80"></i>
                        </div>
                        <h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3>
                        <p class="text-xs text-gray-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p>
                    </div>
                </div>
            `,
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5 border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r">
                    <p class="text-sm text-yellow-200 font-mono"><strong>NOTICE:</strong> This document is pending revision following a recent alteration in the expected behavior of this phenomenon.</p>
                </div>
                <h3>Description</h3>
                <p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms. The process by which these photos are captured is unknown, and evidence of The Cameraman has yet to be proven; however, its existence could serve as an explanation for the mysterious phenomenon of images appearing in level entries instantaneously after their submission into the Database. These files often have no attribution or provided context, and have even appeared in level documents when the explorers responsible for the article did not report carrying photography equipment with them. Some speculate that The Cameraman is not a single entity, but rather a collective of entities capturing such images.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-400 font-bold uppercase mb-3 text-lg">1. Non-Intervention</h4><p>Wanderer engagement is strictly prohibited. Allow the entity to curate the database in peace.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-500"><h4 class="text-gray-400 font-bold uppercase mb-3 text-lg">2. Equipment Handling</h4><p>If you locate a camera or tripod that you did not bring, do not touch it.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg">3. Flash Photography</h4><p>If you see a sudden, silent camera flash in the dark, do not run. It is harmless.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">4. Database Uploads</h4><p>Never claim an anonymous photo as your own. The entity may take offense.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg">5. Film Rolls</h4><p>Do not develop found film rolls. They often contain cognitohazardous imagery of unknown levels.</p></div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">2019</div><h4 class="text-white font-bold text-lg mb-2">1. First Anomalous Upload</h4><p class="text-sm text-liminal-muted">The original Level 0 photo is traced to an anomalous packet injection.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2020</div><h4 class="text-white font-bold text-lg mb-2">2. Entity Theorized</h4><p class="text-sm text-liminal-muted">M.E.G. categorizes the phenomenon as Entity 1.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">3. Tripod Discovered</h4><p class="text-sm text-liminal-muted">A wanderer finds an antique tripod on Level 4; it vanishes when they look away.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">4. Database Spike</h4><p class="text-sm text-liminal-muted">Over 400 high-res images are uploaded in a single minute.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">5. The Blackout Image</h4><p class="text-sm text-liminal-muted">An image of Level 6 is uploaded, completely pitch black but perfectly framed.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2024</div><h4 class="text-white font-bold text-lg mb-2">6. Cessation of Uploads</h4><p class="text-sm text-liminal-muted">Dr. Hollinwell reports all uploads have completely stopped.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Return of the Photographer</h4><p class="text-sm text-liminal-muted">New images of previously undiscovered sub-levels begin appearing again.</p></div>
                </div>
            `
        },

        "entity2": {
            type: "entity", id: "2", title: "Entity 2", name: "Windows",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral & Aggression Matrix": { "Hostility Baseline": "Extremely Aggressive", "Target Preference": "Isolated wanderers", "Cognitohazard Output": "Moderate" },
                "Dimensional Interactions": { "Noclip Capability": "Disabled (Anchored)", "Level Boundary Traversing": "No" },
                "Entity Specific (Proprietary)": { "Origin Level": "Level 188", "Physical Composition": "Shadow/Void entity" }
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
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Windows are entities that take the form of typical glass windows. They are traps designed to lure wanderers to their deaths.</p></div>
                <h3>Description</h3>
                <p>Entity 2, more commonly known as "Windows", are creatures that disguise themselves as architectural features—specifically windows. The window frames are always closed, and looking through the glass will show a void of pitch black, or occasionally, a false image of the outside world. Behind the glass, a dark, humanoid shadow figure resides. When a wanderer approaches a Window, the entity inside will wait until the victim is within arm's reach. The entity will then burst through the glass and violently pull the wanderer inside. No wanderer pulled into a Window has ever returned.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg">1. Distance Keeping</h4><p>Keep a minimum distance of 5 meters from any window.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg">2. Visual Anomalies</h4><p>If a window shows Baseline Reality (Earth), it is a trap. Do not stare.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">3. Auditory Lures</h4><p>They sometimes mimic the voices of loved ones. Ignore it.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg">4. Glass Breaking</h4><p>Do not shoot or throw items at the glass. It enrages the entity.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-cyan-500"><h4 class="text-cyan-500 font-bold uppercase mb-3 text-lg">5. Shadows</h4><p>Shine a flashlight at the window. If the shadow inside has no reflection, run.</p></div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">2020</div><h4 class="text-white font-bold text-lg mb-2">1. First Sighting in Level 4</h4><p class="text-sm text-liminal-muted">A survivor reports a window in an otherwise windowless office building.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2020</div><h4 class="text-white font-bold text-lg mb-2">2. The Grab</h4><p class="text-sm text-liminal-muted">First recorded death via a Window. Captured on an explorer's bodycam.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">3. Level 188 Discovered</h4><p class="text-sm text-liminal-muted">The Courtyard of Windows is found, confirming they are a mass-spawning entity.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">4. Ballistics Test</h4><p class="text-sm text-liminal-muted">M.E.G. attempts to snipe a Window. The bullet phases through and the sniper disappears.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">5. Cognitohazard Proven</h4><p class="text-sm text-liminal-muted">L-Corp proves the windows emit low-frequency telepathic lures.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2024</div><h4 class="text-white font-bold text-lg mb-2">6. The Void Connection</h4><p class="text-sm text-liminal-muted">Theories suggest the entities are tendrils of a larger beast living in the Void.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Avoidance is Mandatory</h4><p class="text-sm text-liminal-muted">Protocol remains: Ignore and run.</p></div>
                </div>
            `
        },

        "entity3": {
            type: "entity", id: "3", title: "Entity 3", name: "Smilers",
            themeColor: "#ffffff", themeHover: "#e2e8f0", themeGlow: "rgba(255, 255, 255, 0.4)", idleAnimation: "animate-pulse",
            tags: [ { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "LIGHT SENSITIVE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgMkg0TTYgMkg4TTMgOEg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral & Aggression Matrix": { "Hostility Baseline": "Predatory", "Target Preference": "Light sources", "Response to Provocation": "Lethal Charge" },
                "Entity Specific (Proprietary)": { "Habitat": "Unlit / Dark zones", "Bioluminescence": "High (Face only)" }
            },
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#000] overflow-hidden border-b border-liminal-border cursor-none" id="smiler-container">
                    <div class="text-[8px] absolute top-2 left-2 text-liminal-muted font-mono z-20">MOVE CURSOR TO ILLUMINATE</div>
                    <div class="absolute inset-0 bg-black z-10 pointer-events-none" style="background: radial-gradient(circle 80px at var(--x, 50%) var(--y, 50%), transparent 0%, #000 100%);" id="flashlight-mask"></div>
                    <div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-1000 ease-out" style="left: 60%; top: 40%;">
                        <div class="flex gap-4"><div class="w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_10px_#fff]"></div><div class="w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_10px_#fff]"></div></div>
                        <svg width="40" height="20" viewBox="0 0 40 20" class="mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"><path d="M 0 5 Q 20 20 40 5 L 35 15 Q 20 25 5 15 Z" fill="white" class="animate-pulse" /></svg>
                    </div>
                    <script>
                        const cont = document.getElementById('smiler-container'); const mask = document.getElementById('flashlight-mask');
                        if(cont && mask) { cont.addEventListener('mousemove', (e) => { const rect = cont.getBoundingClientRect(); mask.style.setProperty('--x', (e.clientX - rect.left) + 'px'); mask.style.setProperty('--y', (e.clientY - rect.top) + 'px'); }); }
                    </script>
                </div>
            `,
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Smilers are highly aggressive entities known for their glowing white eyes and teeth that manifest in pitch darkness.</p></div>
                <h3>Description</h3>
                <p>Entity 3, the Smilers, are generally hostile entities that reside in the dark areas of various levels. They are recognizable by their signature glowing white eyes and a wide, toothy grin. No one has ever survived seeing the physical body of a Smiler, if they even possess one outside of their facial features. Smilers are attracted to light. If a wanderer enters a dark room and turns on a flashlight, a Smiler may immediately lock onto the source.</p>
                <p>They are incredibly fast in the dark but seemingly cannot enter well-lit areas. The leading theory suggests that light physically damages their unseen bodies, or causes them to dematerialize entirely. While terrifying, their predictable behavioral patterns make them manageable if wanderers are prepared with decoy lights.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-white"><h4 class="text-white font-bold uppercase mb-3 text-lg">1. Flashlight Decoy Protocol</h4><p>If a Smiler charges, throw your active light source in the opposite direction and run into a lit area.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-gray-400"><h4 class="text-gray-400 font-bold uppercase mb-3 text-lg">2. Eye Contact Maintenance</h4><p>Maintain eye contact while slowly backing away. Breaking line of sight triggers their predator instinct.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">3. The Light Zone Sanctuary</h4><p>Smilers physically cannot cross into areas with ambient lux levels above 400. Stand directly under functioning lights.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg">4. Noise Discipline</h4><p>While primarily hunting by light, loud noises in total darkness will attract a Smiler swarm.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg">5. "Smiler Exterminator" Usage</h4><p>If equipped with the M.E.G. formulated "Smiler Exterminator" spray, aim directly for the eyes. It is highly corrosive to their biology.</p></div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">2020</div><h4 class="text-white font-bold text-lg mb-2">1. First Visual Contact</h4><p class="text-sm text-liminal-muted">A blurry image of glowing teeth in Level 2 is captured before the camera cuts to static.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">2. The Flashbang Failure</h4><p class="text-sm text-liminal-muted">M.E.G. agents attempt to clear a Smiler nest with flashbangs. The intense brief light enrages them instead of killing them.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">3. Decoy Tactics Proven</h4><p class="text-sm text-liminal-muted">A survivor successfully escapes by throwing a chem-light down an adjacent hallway.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">4. Creation of Smiler Exterminator</h4><p class="text-sm text-liminal-muted">Base Alpha scientists formulate a compound out of Fire Salt and Almond Water that deters the entities.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">5. Level 3 Migration</h4><p class="text-sm text-liminal-muted">A massive influx of Smilers is documented migrating into Level 3 following an electrical grid failure.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2024</div><h4 class="text-white font-bold text-lg mb-2">6. The "Body" Theory</h4><p class="text-sm text-liminal-muted">L-Corp sensors detect massive thermal drops around the "face" of the Smiler, implying a body composed of absolute zero temperatures.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Constant Threat Status</h4><p class="text-sm text-liminal-muted">Smilers remain the #1 cause of wanderer deaths in unlit zones.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> INITIATING TARGETED ENTITY SCAN...", "> LIGHT CALIBRATION REQUIRED.",
                "<br>> <span class='text-red-500'>WARNING: PHOTON EMISSION DETECTED.</span>",
                "<br>> <span class='text-white'>MULTIPLE HOSTILE BIOMETRICS APPROACHING...</span>",
                "<br>> <span class='text-red-400'>ERROR: OPTICAL SENSORS OVERWHELMED BY ENTITY PRESENCE. ABORTING.</span>"
            ]
        },

        "entity4": {
            type: "entity", id: "4", title: "Entity 4", name: "Deathmoths",
            themeColor: "#22c55e", themeHover: "#16a34a", themeGlow: "rgba(34, 197, 94, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "VARIABLE HOSTILITY", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "HIVE MIND", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmEyYTIwIi8+PHBhdGggZD0iTTUgMEwyIDVINSBMOCA1WiIgZmlsbD0iI2I4YjgzZSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral & Aggression Matrix": { "Hostility Baseline": "Females Lethal / Males Passive", "Target Preference": "Artificial Light", "Pack Mentality": "Hive Strict" },
                "Entity Specific (Proprietary)": { "Origin Level": "Level 5", "Wingspan (Female)": "1.5m - 2.5m", "Acid Toxicity": "Extremely Corrosive" }
            },
            interactiveModule: `
                <div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border">
                    <div class="absolute inset-0 bg-green-900/10"></div>
                    <div class="absolute inset-0" style="background-image: radial-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <div class="w-64 h-64 border border-green-500/50 rounded-full relative overflow-hidden">
                        <div class="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tr from-green-500/40 to-transparent origin-top-left animate-spin-slow"></div>
                        <div class="absolute w-2 h-2 bg-green-400 rounded-full top-[30%] left-[60%] shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                        <div class="absolute w-1.5 h-1.5 bg-green-400 rounded-full top-[65%] left-[20%] shadow-[0_0_10px_#22c55e] animate-pulse" style="animation-delay: 0.5s"></div>
                        <div class="absolute w-4 h-4 bg-red-500 rounded-full top-[45%] left-[40%] shadow-[0_0_15px_#ef4444] animate-pulse" style="animation-delay: 1.2s"><div class="absolute inset-0 border border-red-500 rounded-full animate-ping"></div></div>
                    </div>
                    <div class="absolute bottom-2 left-2 text-[8px] font-mono text-green-400">SONAR TRACKING // WINGBEAT FREQUENCY DETECTED</div>
                </div>
            `,
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Deathmoths are giant moths that inhabit the Backrooms, split into harmless males and highly lethal females.</p></div>
                <h3>Description</h3>
                <p>Entity 4, Deathmoths, are giant moths that can be found in a variety of levels, most notably Level 5. The male Deathmoths are relatively small (though still large by Frontrooms standards) and completely harmless. They are known to even land on wanderers without aggressive intent, and some outposts have tamed them as companions. </p>
                <p>Female Deathmoths are much larger, boasting wingspans of over 2 meters. They are extremely hostile and will spit a highly acidic substance at prey before swooping in to consume them. Like normal moths, both genders are highly attracted to light sources. A hive of Deathmoths, typically ruled by a "King" or "Queen" entity, completely controls certain sectors of Level 5. Wandering into a hive territory usually guarantees a swift death by a swarm of females.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">1. Light Discipline</h4><p>If you hear rapid, helicopter-like buzzing, extinguish all light sources immediately and drop to the floor.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg">2. Insecticide Efficacy</h4><p>Industrial bug sprays have zero effect and will enrage females. Only use specialized M.E.G. repellents.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500"><h4 class="text-green-500 font-bold uppercase mb-3 text-lg">3. Male Symbiosis</h4><p>If a male Deathmoth lands on you, do not swat it. The pheromones crushed males release act as a beacon for females.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg">4. Acid Burns</h4><p>If hit by female acid spit, neutralize it immediately with Almond Water. Ordinary water accelerates the burning.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg">5. Hive Identification</h4><p>Hives are marked by thick, grey silk webbing coating the walls and ceiling. Turn back immediately upon seeing this silk.</p></div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">1. First Sighting in Level 5</h4><p class="text-sm text-liminal-muted">Explorers notice abnormally large moths swarming the hotel chandeliers.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">2. The Acid Tragedy</h4><p class="text-sm text-liminal-muted">A group attempts to capture a female. All four members are liquefied by acidic spit.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">3. The Moth King Slain</h4><p class="text-sm text-liminal-muted">A coordinated B.N.T.G. militia successfully kills a King, securing the Beverly Room.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">4. Silk Farming Established</h4><p class="text-sm text-liminal-muted">Safe harvesting of abandoned male silk begins, used to craft lightweight armor.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">5. Queen Discovery</h4><p class="text-sm text-liminal-muted">A drone captures footage of a Deathmoth Queen deeper in Level 5, measuring over 6 meters wide.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2024</div><h4 class="text-white font-bold text-lg mb-2">6. L-Corp Frequency Jammer</h4><p class="text-sm text-liminal-muted">Liminality Corp develops a sub-sonic emitter that scrambles female Deathmoth sonar.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. Containment Stable</h4><p class="text-sm text-liminal-muted">Deathmoth territory in Level 5 is strictly mapped and cordoned off by outposts.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> MAPPING AERIAL TRAJECTORIES...", "> HIGH-SPEED KINETIC SIGNATURES LOGGED.",
                "<br>> <span class='text-green-400'>SONAR PING:</span>", "  - FREQUENCY MATCHES WINGBEAT OF ENTITY 4",
                "<br>> <span class='text-yellow-400'>CHEMICAL TRACE DETECTED:</span>", "  - pH LEVEL: 1.2 (HIGHLY CORROSIVE ACID)",
                "<br>> <span class='text-red-400'>WARNING: SWARM INTELLIGENCE ACTIVE.</span>",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        },

        "entity5": {
            type: "entity", id: "5", title: "Entity 5", name: "Clumps",
            themeColor: "#ef4444", themeHover: "#b91c1c", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "AMBUSH PREDATOR", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwyIDZMNCAxTDggN0wxMCAwIiBzdHJva2U9IiM1NTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: {
                "Behavioral & Aggression Matrix": { "Hostility Baseline": "Ambush / Lethal", "Target Preference": "Unaware Wanderers", "Response to Provocation": "Flee to Vents" },
                "Entity Specific (Proprietary)": { "Origin Level": "Level 2 / Level 8", "Mobility": "High (in vents)", "Physical Composition": "Amalgamated Limbs" }
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
                <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Clumps are an amalgamation of arms, legs, and other human body parts bound together in a central mass. They lurk in cramped spaces to ambush prey.</p></div>
                <h3>Description</h3>
                <p>Entity 5, the Clumps, are horrific creatures constructed entirely from human limbs. Their movement is highly erratic and disturbing to watch, resembling a spider walking on a dozen disjointed hands and feet. Due to their biology, they excel at climbing and squeezing into tight spaces.</p>
                <p>Clumps are ambush predators. They reside in ventilation shafts, drop ceilings, and large pipes (particularly in Level 2 and Level 8). They wait for a wanderer to walk underneath their hiding spot before dropping down and wrapping their numerous limbs around the victim. The assimilation process is rapid and completely silent. Clumps are remarkably fragile if caught in the open, but their ambush tactics make them a high-priority threat.</p>
            `,
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text">
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500"><h4 class="text-red-500 font-bold uppercase mb-3 text-lg">1. Overhead Awareness</h4><p>Never walk directly under a loose ventilation grate or an unusually large pipe opening. Keep to the sides of hallways.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500"><h4 class="text-purple-500 font-bold uppercase mb-3 text-lg">2. Auditory Cues</h4><p>Clumps make a distinct, wet, slapping sound as they drag themselves through metal vents. Stop and listen often.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500"><h4 class="text-orange-500 font-bold uppercase mb-3 text-lg">3. Fire Vulnerability</h4><p>Clumps are entirely biological and highly vulnerable to fire. Molotovs or flares are extremely effective deterrents.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500"><h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg">4. Entanglement Protocol</h4><p>If grabbed, do not try to pull away; their grip is too strong. Use a blade to sever the specific limb holding you.</p></div>
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500"><h4 class="text-blue-500 font-bold uppercase mb-3 text-lg">5. Vent Navigation</h4><p>If you must crawl through a vent in Level 2, push a lit flare ahead of you. Clumps will retreat from the flame.</p></div>
                </div>
            `,
            history: `
                <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-primary rounded-full z-10"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono">2020</div><h4 class="text-white font-bold text-lg mb-2">1. The Vent Disappearance</h4><p class="text-sm text-liminal-muted">A wanderer on Level 2 vanishes without a trace. Only a bloody shoe is found under a ceiling vent.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2021</div><h4 class="text-white font-bold text-lg mb-2">2. First Video Evidence</h4><p class="text-sm text-liminal-muted">A bodycam captures a Clump dropping from a pipe and overwhelming an agent in seconds.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2022</div><h4 class="text-white font-bold text-lg mb-2">3. Biological Analysis</h4><p class="text-sm text-liminal-muted">A dead Clump is recovered. DNA testing reveals it is composed of dozens of missing wanderers.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">4. Base Gamma Infestation</h4><p class="text-sm text-liminal-muted">Clumps utilize the HVAC system to bypass defenses during the fall of Base Gamma in Level 3.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2023</div><h4 class="text-white font-bold text-lg mb-2">5. The "Purge" Protocol</h4><p class="text-sm text-liminal-muted">M.E.G. successfully clears a sector of Level 2 by pumping the vents full of superheated steam.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div><div class="text-[10px] text-liminal-muted mb-1 font-mono">2024</div><h4 class="text-white font-bold text-lg mb-2">6. Thermal Detection</h4><p class="text-sm text-liminal-muted">L-Corp updates LiminOS scanners to detect the dense, overlapping thermal signatures of Clumps in vents.</p></div>
                    <div class="relative pl-6 md:pl-10"><div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"></div><div class="text-[10px] text-liminal-safe mb-1 font-mono">CURRENT YEAR</div><h4 class="text-white font-bold text-lg mb-2">7. High Alert in Piping Zones</h4><p class="text-sm text-liminal-muted">Considered the apex ambush predator of industrial levels.</p></div>
                </div>
            `,
            resonanceLogs: [
                "> BOOTING THERMAL IMAGING SUITE...", "> SCANNING OVERHEAD GEOMETRY.",
                "<br>> <span class='text-red-500'>CRITICAL MASS DETECTED:</span>", "  - 32 INDIVIDUAL BIOMETRIC SIGNATURES OVERLAPPING",
                "<br>> <span class='text-orange-400'>MOVEMENT PATTERN:</span>", "  - ENTITY CONFINED TO HVAC SYSTEM",
                "<br>> <span class='text-red-400'>RECOMMENDATION: DO NOT WALK UNDER VENT GRATE [ID: 884-A]</span>",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }
    }
};