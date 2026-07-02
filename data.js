// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
// ==========================================

const GlobalMetrics = [
    { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.00%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low" } },
    { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level (Reality)": "100.0 H", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.9%", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "0.00%" } },
    { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp (Core)": "20.0 °C", "Relative Humidity": "40-60%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Trace Anomalous Gases": "0%", "Chemical Odor Profile": "Sterile/Neutral" } },
    { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "None", "Absolute Decibel Baseline": "30 dB", "Luminosity Level": "Variable Lux", "Color Temperature": "Variable K", "Total Darkness Zones": "Possible", "Audio Hallucination Risk": "0%" } },
    { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Entity Density": "0.00", "Toxicity Levels": "Safe", "Wall Arsenic Saturation": "0 mg/m²", "Micro-Concrete Density": "2400 kg/m³", "Flora/Fauna Present": "Earth Standard", "Pathogen Level": "Standard Earth" } },
    { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0", "Sanity Drain Rate": "0%", "Isolation Factor": "Variable", "Radio Comm Integrity": "100%", "GPS Functionality": "Online", "Rescue Probability": "High" } }
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
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Unsafe, unsecure, entity infestation. Survival is nearly impossible. Instantaneous hazards present." }
    ],
    special: [
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations, memory loss, paranoia, or manufactured realities. Physical entities may be absent, but the level itself is the threat." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently. The level cannot maintain a consistent state." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative anomalous properties. Water and food are usually abundant." }
    ]
};

// ==========================================
// LIMINOS COMPILATION ENGINE
// ==========================================
// This engine dynamically constructs the massive HTML blocks required by the UI, 
// allowing the raw data to be incredibly dense without truncation.

const buildLevel = (d) => {
    const sgHTML = `
        <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
            ${d.tips.map((t, i) => `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-${t.c}-500 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow">
                    <h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">${i+1}. ${t.n}</h4>
                    <p class="mb-2 leading-relaxed">${t.d}</p>
                    <p class="bg-${t.c}-900/20 p-3 rounded text-${t.c}-200 text-xs font-mono border border-${t.c}-500/20"><strong>L-CORP PROTOCOL:</strong> ${t.l}</p>
                </div>
            `).join('')}
            <div class="mt-8 pt-6 border-t border-white/10">
                <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Tactical Loadout</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${d.loadout.map((l, i) => `
                        <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3 animate-slide-up hover:bg-white/5 transition-colors" style="animation-delay: ${i*0.1}s;">
                            <i class="ph ${l.i} text-2xl" style="color:var(--theme-primary)"></i>
                            <span class="font-mono text-xs text-gray-300">${l.n}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    const histHTML = `
        <div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">
            ${d.history.map((h, i) => `
                <div class="relative pl-6 md:pl-10">
                    <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-${i===d.history.length-1?'liminal-safe animate-pulse':'liminal-muted'} rounded-full z-10 flex items-center justify-center">
                        ${i===d.history.length-1 ? '<div class="w-2 h-2 bg-liminal-safe rounded-full animate-ping"></div>' : ''}
                    </div>
                    <div class="text-[10px] text-${i===d.history.length-1?'liminal-safe':'liminal-muted'} mb-1 font-mono">${h.date}</div>
                    <h4 class="text-white font-bold text-lg mb-2">${i+1}. ${h.t}</h4>
                    <p class="text-sm text-liminal-muted leading-relaxed">${h.d}</p>
                </div>
            `).join('')}
        </div>
    `;

    const metricsMatrixHTML = `
        <div class="mt-12 pt-8 border-t border-white/5">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3"><i class="ph ph-chart-polar text-liminal-primary"></i> Absolute Global Values Matrix</h3>
            <p class="text-xs text-liminal-muted font-mono mb-6">Cross-referenced spatial telemetry strictly localized to ${d.title}. These values overwrite standard Frontrooms baselines.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${Object.entries(d.metrics).map(([category, values]) => `
                    <div class="bg-black/50 border border-white/5 rounded-lg p-4 shadow-inner hover:border-liminal-primary/30 transition-colors">
                        <h4 class="text-[11px] font-bold text-liminal-primary uppercase tracking-wider mb-3 font-mono border-b border-white/5 pb-2">${category}</h4>
                        <div class="space-y-2">
                            ${Object.entries(values).map(([k, v]) => `
                                <div class="flex justify-between items-center text-[10px] md:text-xs">
                                    <span class="text-liminal-muted font-mono pr-2 truncate max-w-[50%]">${k}</span>
                                    <span class="text-white font-mono font-bold text-right truncate max-w-[50%]">${v}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const loreHTML = `
        <div class="mb-6 pb-4 border-b border-white/5">
            <p class="text-xl text-white font-light leading-relaxed">${d.desc[0]}</p>
        </div>
        <h3>Topological Description</h3>
        ${d.desc.slice(1).map(p => `<p class="leading-relaxed mb-4">${p}</p>`).join('')}
        <h3>Entrances & Exits</h3>
        <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner mb-8">
            <h4 class="text-liminal-primary font-bold mb-2 flex items-center gap-2"><i class="ph ph-sign-in"></i> VERIFIED ENTRANCES</h4>
            <ul class="list-none space-y-2 text-liminal-text mb-6">
                ${d.entrances.map(e => `<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1 animate-pulse"></i> <span>${e}</span></li>`).join('')}
            </ul>
            <h4 class="text-liminal-safe font-bold mb-2 flex items-center gap-2"><i class="ph ph-sign-out"></i> KNOWN EXITS</h4>
            <ul class="list-none space-y-2 text-liminal-text">
                ${d.exits.map(e => `<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>${e}</span></li>`).join('')}
            </ul>
        </div>
        ${metricsMatrixHTML}
    `;

    return {
        type: "level", id: d.id, title: d.title, name: d.name,
        themeColor: d.color, themeHover: d.hover, themeGlow: d.glow, idleAnimation: d.anim,
        tags: d.tags.map(t => ({ label: t[0], class: t[1] })),
        heroImage: d.hero, mapConfig: d.map, specificMetrics: d.metrics,
        lore: loreHTML, survivalGuide: sgHTML, history: histHTML, resonanceLogs: d.resonance
    };
};

// ==========================================
// MASSIVE LEVEL DATABASE
// ==========================================

const LiminOSDatabase = {
    levels: {
        "level0": buildLevel({
            id: "level0", title: "Level 0", name: "The Lobby", color: "#eab308", hover: "#ca8a04", glow: "rgba(234, 179, 8, 0.2)", anim: "animate-ambient-drift",
            tags: [["CLASS 1", "bg-green-500/10 text-green-400 border-green-500/30"], ["SAFE", "bg-green-500/10 text-green-400 border-green-500/30"], ["UNSTABLE", "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"], ["DEVOID OF ENTITIES", "bg-blue-500/10 text-blue-400 border-blue-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            map: { seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [{ name: "Gateway to Level 1 (Garages)", color: "#9ca3af", icon: "⬇" }, { name: "Fragile Wall (To Level 483)", color: "#ef4444", icon: "🔨" }, { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" }] },
            metrics: {
                "Level 0 Specific (Proprietary)": { "Carpet Saturation Depth": "1.2cm (Avg)", "Fluorescent Flicker Sync": "Asynchronous", "Spatial Redundancy Ratio": "89.4% Identical", "Ambient Hum Frequency": "59.8 Hz - 60.2 Hz", "Wall Permeability Factor": "0.0001%", "Synthetic Mold Growth": "0.04 mg/m²" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.15 (Slower)", "Local Time Flow Rate": "Erratic / Psychological", "Temporal Loop Probability": "84.2%", "Entropy Gradient": "Accelerated (+12%)", "Atomic Clock Drift": "±4.2s/24h", "Subjective Time Variance": "Extreme" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H (Low)", "Kant Counter Reading": "0.85 K", "Euclidean Consistency": "14.2% (Severe Non-linear)", "Noclipping Threshold": "Requires 14,000 Newtons", "Spatial Dilation Factor": "1:4 (Expanded)", "Z-Axis Deviation": "±0.02%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "22.4 °C (Constant)", "Relative Humidity": "88% (Damp)", "Atmospheric Pressure": "104.1 kPa", "Air Comp: O2": "19.2% (Depleted)", "Trace Anomalous Gases": "0.08% Unknown", "Chemical Odor Profile": "Old Moist Carpet / Ozone" },
                "Acoustic & Luminescent": { "Ambient Hum": "60Hz Electrical", "Absolute Decibel Baseline": "45 dB", "Luminosity Level": "250 Lux (Harsh)", "Color Temperature": "3200 K (Mono-Yellow)", "Total Darkness Zones": "0% (Omnipresent Light)", "Audio Hallucination Risk": "94%" },
                "Material & Biological": { "Entity Density": "0.00 (Devoid)", "Toxicity Levels": "Mild (Dermal)", "Wall Arsenic Saturation": "0.01 mg/m²", "Micro-Concrete Density": "2100 kg/m³", "Flora/Fauna Present": "None", "Pathogen Level": "Sterile Anomalous" },
                "Survival & Infrastructure": { "Base Threat Level": "1 (Psychological)", "Sanity Drain Rate": "-2.4% per Hour", "Isolation Factor": "Absolute", "Radio Comm Integrity": "0% (Static)", "GPS Functionality": "Offline / Scrambled", "Rescue Probability": "0.000001%" }
            },
            desc: [
                "Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in. It acts as the universal filter for wanderers falling out of bounds from the Frontrooms.",
                "Level 0 is an expansive, infinitely generating non-Euclidean space resembling the back rooms of a dated, 1990s retail outlet. The level is known most prominently for its disorienting layout and distinct, sickeningly yellowed wallpaper. All rooms in Level 0 share the same superficial features: heavily worn, moist carpeting that squelches underfoot, scattered two-prong electrical outlets that provide no current, and inconsistently placed fluorescent lighting. Aside from these aesthetic qualities, no two rooms in the level are exactly the same, with each area differing significantly in shape, length, and layout. Corridors often lead to dead ends or loop back upon themselves in mathematically impossible ways, defying standard geometry.",
                "The constant hum-buzz emitted by the ceiling lights permeates every cubic inch of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. L-Corp acoustical analysis reveals the frequency hovers relentlessly between 59.8 Hz and 60.2 Hz. This specific range is proven to induce throbbing migraines, sensory overload, and severe paranoia in most individuals within 24 hours of exposure. The buzz persists as an auditory phantom for weeks even after one has successfully exited the level.",
                "The physical composition of Level 0 is entirely anomalous. The carpet holds a particular fascination for researchers. Spectral analysis reveals that the moisture contained within the fibers is not water, but rather a synthetic, highly viscous fluid mixture that severely degrades cellular tissue upon prolonged exposure. Wandering barefoot or lying down for extended periods causes severe dermatological rashes resembling chemical burns. Linear space and topology are so significantly altered that walking in a straight line will inevitably result in returning to the starting point, despite no visible turns being made. Currently, there are absolutely no physical entities native to this level. The true threat is the profound, crushing isolation that drives wanderers to madness, dehydration, and eventual starvation[cite: 3]."
            ],
            entrances: [
                "Noclipping accidentally out of bounds in Baseline Reality (The Frontrooms) is the most common method of entry.",
                "Failing an exit attempt or stepping through a glitched doorway in Level 283.",
                "Slipping through the rotting floorboards in Level 500.",
                "Opening an unmarked, featureless wooden door deep within the subterranean infrastructure of Level 11.",
                "Wandering into the anomalous fog banks in Level 483."
            ],
            exits: [
                "Wandering far and long enough without losing your mind may cause the yellow hallways to gradually transition into Level 1's concrete architecture.",
                "Breaking through a wall (which requires immense, superhuman force or specialized tools) leads to Level 483.",
                "Finding a rare patch of weakened geometry in the floor and breaking through it leads to Level 27.",
                "Entering a very rare, red-painted emergency exit door leads immediately to Level 14.",
                "Locating the Manila Room—a unique, perfectly square room with beige wallpaper—provides a one-way threshold to Level 283."
            ],
            tips: [
                { n: "Psychological Anchoring", d: "The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours.", c: "purple", l: "Carry a mechanical watch. The ticking provides a rhythmic, Earth-bound anchor that overrides the chaotic hum-buzz." },
                { n: "Resource Management", d: "There is absolutely no clean water natively generated here. The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies.", c: "yellow", l: "Search specifically for pooling condensation near structural anomalies; these rare spots sometimes contain trace amounts of safe Almond Water." },
                { n: "Navigation Protocols", d: "Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless. Walking in a straight line will often result in a topological loop.", c: "blue", l: "Employ the 'Right-Hand Rule' to trace boundary walls. While it takes longer, it eventually forces the geometry to transition to Level 1." },
                { n: "Sleep Deprivation Countermeasures", d: "The inability to turn off the lights combined with the 60Hz hum makes REM sleep nearly impossible. Exhaustion is the #2 killer in Level 0.", c: "red", l: "Tear strips of wallpaper to fashion a crude blindfold. Sleep in strict 3-hour bursts to avoid deep REM paralysis." },
                { n: "Equipment Degradation", d: "The ambient static charge (+12kV/m) will rapidly drain modern lithium-ion batteries. Magnetic storage will corrupt within 72 hours.", c: "green", l: "Only rely on solid-state drives shielded in Faraday cages. Discard smartphones; they are dead weight here." },
                { n: "Dietary Restrictions", d: "There is no flora or fauna. The black mold occasionally found near baseboards is highly toxic and neurodegenerative if ingested.", c: "orange", l: "You must rely entirely on brought rations. Minimize physical exertion to lower your metabolic burn rate." },
                { n: "Hypothetical Entity Protocols", d: "While Level 0 is canonically devoid of entities, paranoia often dictates otherwise. If you 'hear' footsteps or whispers, do not panic.", c: "teal", l: "Do not run. Acknowledge the hallucination out loud in a calm voice. The psychological construct will dissipate." },
                { n: "Noclip Vulnerabilities", d: "The walls here are structurally infinite, but geometry occasionally tears. Blackened or glitching walls indicate a weak Euclidean mesh.", c: "fuchsia", l: "Avoid 'glitch' walls unless desperate, as noclipping here often leads to the Void rather than Level 1." },
                { n: "Fluid Extraction (Warning)", d: "Attempting to squeeze or extract fluid from the carpet releases aerosolized toxic spores embedded in the polymer fibers.", c: "cyan", l: "If forced to walk barefoot, wrap your feet in multiple layers of torn wallpaper to prevent dermal absorption." },
                { n: "Spatial Marking Limitations", d: "Conventional marking methods (leaving items, marking walls) are ineffective as the layout actively shifts or items fall through geometry.", c: "rose", l: "Chalk marks disappear after 12h. Only mark walls to confirm immediate localized loops, not for long-term navigation." }
            ],
            loadout: [
                { n: "Analog Noise-cancelling Headsets", i: "ph-headphones" }, { n: "Minimum 3L Purified Almond Water", i: "ph-drop" },
                { n: "Industrial Marking Chalk (Red)", i: "ph-pencil-simple" }, { n: "Proprietary Sub-space Beacon", i: "ph-broadcast" },
                { n: "High-calorie Survival Paste (14 days)", i: "ph-first-aid" }, { n: "Mechanical Watch (Spring-driven)", i: "ph-watch" },
                { n: "Faraday Cage Pouch", i: "ph-shield-check" }, { n: "Thick-soled Combat Boots", i: "ph-boot" },
                { n: "Light-blocking Sleep Mask", i: "ph-eye-closed" }, { n: "Analog Compass", i: "ph-compass" }
            ],
            history: [
                { date: "JANUARY 12, 1998", t: "First Anomalous Signature Detected", d: "Baseline radar systems pick up a massive, unexplainable subterranean void beneath a commercial district. It is later identified as the first recorded noclip tear." },
                { date: "MAY 12, 2019", t: "Initial Archival Image Captured", d: "An anonymous user uploads the first verified visual telemetry of Level 0 to a Frontrooms forum. Liminality Corp acquires the raw uncompressed file for spatial analysis." },
                { date: "OCTOBER 4, 2020", t: "Project 'Yellow Wallpaper' Initiated", d: "The first batch of unmanned, tungsten-shielded L-Corp probes are sent via induced noclip events to map the architecture." },
                { date: "JUNE 13, 2022", t: "Expedition Log Recovered", d: "Data retrieval from a deceased wanderer's device proves severe psychological degradation models, confirming the '60Hz Madness' hypothesis." },
                { date: "JANUARY 18, 2023", t: "The '400-Mile March' Experiment", d: "Agent L-89 undergoes an experimental endurance run, confirming massive topological loop structures and the impossibility of a physical boundary." },
                { date: "MARCH 3, 2024", t: "First Controlled Noclip Exit Verified", d: "A Liminality drone successfully maps an exit threshold, confirming the transition boundary breaching into Level 1." },
                { date: "AUGUST 14, 2025", t: "Discontinuation of Manned Outposts", d: "L-Corp realizes establishing a physical forward operating base in Level 0 is impossible due to the actively shifting geometry deleting inorganic structures." },
                { date: "FEBRUARY 11, 2026", t: "Cartography Engine Stable", d: "Proprietary quantum nodes allow real-time telemetry extraction. The Cartography Engine maps local topologies with 99.98% accuracy despite Euclidean shifts." }
            ],
            resonance: [
                "> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> CALIBRATING HUME SENSORS... [OK]", "> BYPASSING M.E.G. INTERFERENCE... [OK]",
                "<br>> <span class='text-liminal-primary'>ANALYZING MOISTURE CONTENT:</span>", "  - H2O: 98.01%", "  - UNKNOWN BIOLOGICAL FLUID: 1.99%",
                "<br>> <span class='text-yellow-400'>CHECKING STRUCTURAL INTEGRITY:</span>", "  - WALL PERMEABILITY: 0.0001% (NOCLIP RESISTANCE HIGH)", "  - EUCLIDEAN CONSISTENCY: 14.2%",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - RESULT: 0 ENTITIES DETECTED.", "  - NOTE: IGNORE AUDITORY HALLUCINATIONS.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }),

        "level1": buildLevel({
            id: "level1", title: "Level 1", name: "Habitable Zone", color: "#a1a1aa", hover: "#71717a", glow: "rgba(161, 161, 170, 0.2)", anim: "animate-flicker",
            tags: [["CLASS 1", "bg-green-500/10 text-green-400 border-green-500/30"], ["MINIMAL ENTITIES", "bg-blue-500/10 text-blue-400 border-blue-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            map: { seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [{ name: "Supply Crate", color: "#60a5fa", icon: "📦" }, { name: "M.E.G. Base Alpha", color: "#22c55e", icon: "🛡" }, { name: "Elevator (Level 2)", color: "#dc2626", icon: "↕" }] },
            metrics: {
                "Level 1 Specific (Proprietary)": { "Concrete Density": "2450 kg/m³ (Reinforced)", "Fog Accumulation Density": "4.2 mg/L", "Fluorescent Failure Rate": "14% per Sector", "Resource Generation Rate": "0.4 Crates/hr", "Rebar Rust Index": "Moderate", "Puddle Contamination": "Motor Oil/Water" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "2.1%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.1s/24h", "Subjective Time Variance": "Stable" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "95.2 H (Stable)", "Kant Counter Reading": "0.98 K", "Euclidean Consistency": "80.0% (Mostly Linear)", "Noclipping Threshold": "Possible (Hard)", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "±1.5% (Ramps/Stairs)" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "15.0 °C (Chilly)", "Relative Humidity": "50% (Condensing)", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9% (Normal)", "Trace Anomalous Gases": "0.01% Carbon Monoxide", "Chemical Odor Profile": "Motor Oil / Wet Concrete" },
                "Acoustic & Luminescent": { "Ambient Hum": "Low Machinery Drone", "Absolute Decibel Baseline": "35 dB", "Luminosity Level": "400 Lux (Flickering)", "Color Temperature": "4500 K (Cool White)", "Total Darkness Zones": "Frequent (Blackouts)", "Audio Hallucination Risk": "Low" },
                "Material & Biological": { "Entity Density": "0.04 (Minimal)", "Toxicity Levels": "Safe (Respirator Advised)", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "2400 kg/m³", "Flora/Fauna Present": "Mold/Fungi", "Pathogen Level": "Low Risk" },
                "Survival & Infrastructure": { "Base Threat Level": "1 (Safe)", "Sanity Drain Rate": "-0.2% per Hour", "Isolation Factor": "Low (Populated)", "Radio Comm Integrity": "85% (Clear)", "GPS Functionality": "Online (Local Nodes)", "Rescue Probability": "High" }
            },
            desc: [
                "Level 1 is a massive, sprawling warehouse constructed of concrete floors and walls, exposed rebar, and low-hanging fog. It is the first truly habitable and sustainable level in the Backrooms.",
                "The architecture of Level 1 is utilitarian and brutalist. It features endless rows of concrete pillars, loading docks that lead to brick walls, and miles of painted floor lines that guide wanderers in circles. A low-hanging fog with no discernible source coats the floor, often coalescing into condensation that forms large, slick puddles. Unlike Level 0, this level possesses a consistent supply of water and electricity, which allows for indefinite habitation providing that appropriate precautions are taken against the environment. It is far more vertically expansive, possessing stairs, elevators, isolated mechanical rooms, and long hallways.",
                "A unique anomalous property of Level 1 is its resource generation. Wooden crates of supplies appear and disappear randomly within the level. These crates often contain vital survival items such as Almond Water, batteries, flashlights, and Frontrooms-brand snacks, though they can occasionally contain hazardous materials or nothing at all. Due to this abundance of resources and the high Euclidean stability of the architecture, Level 1 acts as the central hub for the Major Explorer Group (M.E.G.), hosting 'Base Alpha'—the first and one of the largest human settlements in the Backrooms.",
                "The light fixtures in Level 1 are prone to flickering and failing entirely, plunging massive sectors into total, pitch-black darkness. It is within these unpredictable dark zones that entities such as Dullers, Adult Facelings, and Hounds can manifest and hunt. Wanderers are strictly advised to carry reliable, redundant light sources and to avoid dark areas entirely. The architecture will also occasionally shift seamlessly from modern warehouse design to antiquated, dungeon-like stone corridors with no clear boundary[cite: 3]."
            ],
            entrances: [
                "Wandering long enough through the shifting halls of Level 0 will eventually transition the wallpaper into concrete.",
                "Entering through unlocked, heavy metal doors in Level 1.5.",
                "Descending a functioning industrial elevator from Level 4.",
                "Crawling through the ventilation shafts in the Hub.",
                "Noclipping through the ceiling of Level 2 (Highly dangerous)."
            ],
            exits: [
                "Walking down any extended, exceptionally long hallway often gradually leads to the piping of Level 2.",
                "Entering a freight elevator can take you directly to Level 2 or Level 3.",
                "Locating a specific, out-of-place painting on a concrete wall and walking into it leads to Level 57.",
                "Wandering into the deepest, foggiest sections where the concrete turns to dirt leads to Level 9.",
                "Finding a door marked with a red exit sign occasionally leads to The Hub."
            ],
            tips: [
                { n: "Outpost Proximity", d: "Level 1 is home to M.E.G. Base Alpha. Locate this base for medical aid, trade, and safe sleeping quarters.", c: "green", l: "Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha's perimeter." },
                { n: "The Darkness Protocol", d: "When lights flicker and die, entities spawn instantly. Retreat to lit areas without hesitation.", c: "yellow", l: "The power grid follows a determinable 14-hour cycle. Plan your rests and movements accordingly." },
                { n: "Crate Foraging", d: "Crates randomly spawn. Some contain Almond Water, others contain hazardous anomalies.", c: "blue", l: "Only open crates made of standard pine. Dark oak or metallic crates often contain entities or cognitohazards." },
                { n: "Hound Evasion", d: "Hounds patrol the fringes of the lit zones. Do not break eye contact if engaged.", c: "red", l: "Intimidate them. Screaming and making yourself appear larger works effectively on Level 1 Hounds." },
                { n: "Puddle Contamination", d: "Floor fog condenses into large puddles. Do not drink it; it causes severe dysentery.", c: "purple", l: "The puddles are a mixture of water and motor oil. They are highly flammable; use them to create defensive fire lines." },
                { n: "Elevator Roulette", d: "Elevators are a quick exit to Level 2 or 3, but some are traps that drop into the Void.", c: "cyan", l: "Press the call button twice. If the mechanical ding is a major chord, it's safe. If dissonant, step away." },
                { n: "Fog Inhalation", d: "Extended exposure to the low-hanging fog causes mild pneumonia and lung irritation.", c: "orange", l: "Sleep on top of stacked supply crates, ensuring your head is at least 1 meter off the ground above the fog line." },
                { n: "Trade Economy", d: "Level 1 uses Almond Water and Fire Salt as standard currency among wandering traders.", c: "teal", l: "Hoard mechanical parts and copper wire from crates; B.N.T.G. traders pay a premium for them." },
                { n: "Duller Phasing", d: "Dullers exist inside the concrete walls and can drag victims through solid matter if they get too close.", c: "fuchsia", l: "Avoid leaning against walls to rest. Walk strictly in the center of the warehouse lanes." },
                { n: "Structural Decay", d: "Some concrete rebar pillars are rusted completely through and are structurally unsound.", c: "rose", l: "Tap pillars with a wrench. A hollow ring means a spatial collapse is imminent in that sector." }
            ],
            loadout: [
                { n: "High-Lumen Crank Flashlight", i: "ph-flashlight" }, { n: "N95 Particulate Respirator", i: "ph-mask-water" },
                { n: "Steel Crowbar (For crates)", i: "ph-wrench" }, { n: "Trade Barter Goods (Batteries)", i: "ph-hand-coins" },
                { n: "Trauma Medical Kit", i: "ph-first-aid" }, { n: "Elevated Sleeping Cot", i: "ph-tent" },
                { n: "Magnesium Fire Starter", i: "ph-fire" }, { n: "Melee Defense Weapon (Machete)", i: "ph-sword" },
                { n: "Night Vision Goggles (NVGs)", i: "ph-binoculars" }, { n: "M.E.G. Cartography Map", i: "ph-book-open" }
            ],
            history: [
                { date: "FEBRUARY 4, 2005", t: "First Successful Transition", d: "A wanderer posts a blurry photo of a concrete pillar to an early internet message board, marking the discovery of Level 1." },
                { date: "AUGUST 14, 2015", t: "Establishment of Base Alpha", d: "The Major Explorer Group successfully fortifies a massive, stable quadrant, establishing the first major human settlement in the Backrooms." },
                { date: "NOVEMBER 2, 2018", t: "The Great Blackout", d: "A massive anomalous electrical failure plunges Sector B into total darkness for 3 days. Entity casualties are exceptionally high." },
                { date: "APRIL 10, 2021", t: "B.N.T.G. Trade Routes Open", d: "The Backrooms Non-Aligned Trade Group secures a heavily guarded, safe route between Level 1 and Level 4." },
                { date: "SEPTEMBER 21, 2023", t: "Discovery of the Void Elevators", d: "Three explorers are lost after mapping previously dormant elevator shafts that plunged infinitely." },
                { date: "JULY 5, 2024", t: "L-Corp Sensor Network Deployed", d: "Liminality Corp secretly installs 5,000 stealth nodes in the ceiling grids for passive, global scanning of wanderer movements." },
                { date: "JANUARY 12, 2025", t: "First Agricultural Success", d: "Base Alpha botanists successfully cultivate a strain of mushrooms that grow in the motor-oil puddles, providing a new food source." },
                { date: "MARCH 30, 2026", t: "Population Peaks at 4,000+", d: "Base Alpha becomes a sprawling, self-sustaining civilian metropolis and the primary hub of Backrooms civilization." }
            ],
            resonance: [
                "> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]",
                "<br>> <span class='text-liminal-primary'>FOG ANALYSIS:</span>", "  - CONDENSATION: 90% H2O, 10% MOTOR OIL",
                "<br>> <span class='text-yellow-400'>CRATE SPAWN PREDICTION:</span>", "  - NEW CRATE DETECTED AT SECTOR 4B",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 3 HOUNDS DETECTED IN DARK ZONE.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }),

        "level2": buildLevel({
            id: "level2", title: "Level 2", name: "Pipe Dreams", color: "#ef4444", hover: "#dc2626", glow: "rgba(239, 68, 68, 0.2)", anim: "animate-glitch-shift",
            tags: [["CLASS 2", "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"], ["ENTITY RISK", "bg-orange-500/10 text-orange-400 border-orange-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            map: { seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.03, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [{ name: "Superheated Pipe Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Unmarked Door", color: "#f59e0b", icon: "🚪" }] },
            metrics: {
                "Level 2 Specific (Proprietary)": { "Pipe Thermal Output": "Max 43°C (110°F)", "Hallway Width Varience": "0.8m to 1.5m", "Viscous Fluid Pools": "Frequent (Black Tar)", "Entity Spawn Rate": "Moderate", "Steam Pressure Peaks": "1400 PSI", "Machinery Noise Level": "85 dB" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.05 (Slightly Slower)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "15.4%", "Entropy Gradient": "High Thermal", "Atomic Clock Drift": "±1.2s/24h", "Subjective Time Variance": "Fatigue-induced" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "88.0 H (Declining)", "Kant Counter Reading": "0.92 K", "Euclidean Consistency": "60.0% (Intersecting Loops)", "Noclipping Threshold": "High Density", "Spatial Dilation Factor": "1:1.4", "Z-Axis Deviation": "±5.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "38.0 °C (Oppressive)", "Relative Humidity": "95% (Steam)", "Atmospheric Pressure": "115.2 kPa", "Air Comp: O2": "18.5% (Low)", "Trace Anomalous Gases": "1.2% Sulfur Dioxide", "Chemical Odor Profile": "Burning Oil / Rusted Iron" },
                "Acoustic & Luminescent": { "Ambient Hum": "Roaring Furnaces / Hissing", "Absolute Decibel Baseline": "85 dB", "Luminosity Level": "50 Lux (Dim)", "Color Temperature": "2000 K (Deep Orange)", "Total Darkness Zones": "30%", "Audio Hallucination Risk": "Moderate" },
                "Material & Biological": { "Entity Density": "1.45 (Dangerous)", "Toxicity Levels": "Moderate (Inhalation)", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "2800 kg/m³", "Flora/Fauna Present": "None", "Pathogen Level": "Sterile (Heat)" },
                "Survival & Infrastructure": { "Base Threat Level": "2 (Unsafe)", "Sanity Drain Rate": "-1.5% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "30% (Interference)", "GPS Functionality": "Offline", "Rescue Probability": "Low" }
            },
            desc: [
                "Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic, dark grey concrete maintenance tunnels that stretch on for millions of miles. The walls are heavily lined with industrial pipes and occasionally ventilation ducts.",
                "The environment of Level 2 is deeply oppressive. Some sections of the maintenance tunnels are completely devoid of any light, and the pipes that line the walls often run dangerously hot, reaching temperatures up to 43°C (110°F) or higher. Explorers will find the heat suffocating and the constant, deafening hum of heavy machinery overwhelming. The floor is frequently coated in a viscous, sticky black fluid resembling tar, which is highly flammable. Decompression vents frequently open with lethal force, causing superheated steam to blind and scald wanderers trapped in the cramped sections.",
                "Entities are far more common here than in the previous levels. Smilers lurk in the unlit stretches of the maintenance tunnels, hunting anyone holding a light source. Clumps make their homes within the overhead ventilation shafts and darker corners, waiting to drop on unsuspecting victims. Facelings and Hounds are also occasionally encountered. The extreme heat causes many unprepared wanderers to succumb to heatstroke, turning them into 'Wretches'—former humans driven mad, who now aimlessly attack anything that moves.",
                "The physical layout of Level 2 is linear but highly inconsistent, meaning corridors can stretch for miles without intersecting, only to abruptly loop back onto themselves or shrink to shoulder-width. Occasionally, doors can be found along the walls. The vast majority of these doors are securely locked, but those that are open can lead to small, closet-like rooms containing ancient machinery, or act as transition thresholds to Level 3[cite: 3]."
            ],
            entrances: [
                "Walking down long, unbroken hallways in Level 1 will eventually cause the walls to narrow and sprout pipes.",
                "Entering an unlocked, heavy maintenance door in The Hub.",
                "Entering a specific boiler door in the basement of Level 5.",
                "Riding an elevator from Level 1 down into the basement levels."
            ],
            exits: [
                "Finding an unlocked fire exit door (often emitting a faint cool breeze) leads to Level 3.",
                "Entering an incredibly rare, multi-colored door leads to Level 283.",
                "Crawling into a narrow, uncomfortably hot vent grate leads to Level 2.1.",
                "Noclipping through the tar puddles (not recommended, extremely painful) leads to Level 4."
            ],
            tips: [
                { n: "Heat Stroke Prevention", d: "The ambient temperature in Level 2 will rapidly dehydrate and exhaust wanderers. Core body temperature must be monitored.", c: "red", l: "Stay close to the floor where the temperature is 2-3°C cooler. Drink Almond Water every 20 minutes." },
                { n: "Smiler Evasion", d: "If you spot a Smiler in the dark zones, do not use a flashlight. Maintain eye contact.", c: "purple", l: "Throw a glowstick down an intersecting corridor to distract them, then back away slowly." },
                { n: "Steam Vents", d: "Pressurized pipes occasionally burst or vent automatically, releasing scalding steam that causes third-degree burns.", c: "blue", l: "A loud hissing buildup gives a 3-second warning. Dive to the floor and cover your exposed skin." },
                { n: "Overhead Ambush (Clumps)", d: "Clumps hide in the ceiling vents and drop on unsuspecting victims. They assimilate limbs instantly.", c: "orange", l: "If a vent grate is missing or dripping black fluid, run past the opening; do not walk under it." },
                { n: "Door Navigation", d: "Most doors are locked. Testing every handle drains stamina and wastes precious time in the heat.", c: "green", l: "Look for doors with rust concentrated specifically around the hinges; these are usually unlocked." },
                { n: "Machinery Deafness", d: "The roaring noise of the boilers covers the sounds of approaching entities perfectly.", c: "teal", l: "Rely on visual cues and vibrations through the soles of your boots to detect approaching heavy entities." },
                { n: "Toxic Viscosity", d: "Puddles of thick black fluid on the floor are highly flammable, sticky, and toxic if absorbed through skin.", c: "cyan", l: "If coated, do not use friction to wipe it off; it will ignite. Rinse with Almond Water." },
                { n: "Claustrophobia Management", d: "Hallways occasionally shrink to 0.8m wide, inducing severe panic attacks and making turning around impossible.", c: "fuchsia", l: "Focus on the pipes running parallel to you to ground your depth perception and keep breathing steady." },
                { n: "Wretch Encounters", d: "Former wanderers driven mad by the heat wander aimlessly, attacking with primal ferocity.", c: "yellow", l: "They are blind from the steam but have acute hearing. Freeze completely until they pass." },
                { n: "Bypassing Dead Ends", d: "Linear corridors often end abruptly in solid brick walls, trapping wanderers.", c: "rose", l: "These are usually illusions generated by the level. Close your eyes and walk forward slowly to phase through." }
            ],
            loadout: [
                { n: "Ambient Thermometer", i: "ph-thermometer" }, { n: "5L Thermal Water Jug", i: "ph-drop" },
                { n: "Breakable Chemical Glowsticks", i: "ph-lightbulb" }, { n: "Miniature Foam Extinguisher", i: "ph-fire-extinguisher" },
                { n: "Heat-Resistant Kevlar Gloves", i: "ph-shield" }, { n: "Carbon-filter Gas Mask", i: "ph-mask-water" },
                { n: "Blunt Force Weapon (Lead Pipe)", i: "ph-sword" }, { n: "Burn Salve & Medical Gauze", i: "ph-first-aid" },
                { n: "Decibel-reducing Earplugs", i: "ph-ear" }, { n: "Lockpicking Kit", i: "ph-key" }
            ],
            history: [
                { date: "MAY 20, 2010", t: "The Heatwave Discovery", d: "Explorers breach an iron door from Level 1, encountering the extreme, oppressive temperatures of Level 2 for the first time." },
                { date: "JANUARY 10, 2013", t: "First Recorded Encounter with Clumps", d: "A wanderer records an amalgamation of human limbs dropping from a vent, introducing Entity 5 to the database." },
                { date: "SEPTEMBER 5, 2016", t: "The Office Space Oasis", d: "A small pocket dimension labeled 'The Office Space' is found locked behind a maintenance door, offering brief respite." },
                { date: "MARCH 12, 2019", t: "Smiler Migration Documented", d: "A massive influx of Smilers moves into Sector 4 due to a long-term power failure in the area." },
                { date: "FEBRUARY 8, 2021", t: "M.E.G. Foraging Ban", d: "M.E.G. officially bans extended foraging operations in Level 2 due to an unacceptable 80% casualty rate from heatstroke and entities." },
                { date: "OCTOBER 30, 2023", t: "Pipe Rupture Event", d: "A 40-mile stretch of primary piping ruptures simultaneously, flooding the corridors with boiling tar and sealing off Route B." },
                { date: "DECEMBER 14, 2024", t: "L-Corp Thermal Mapping", d: "Liminality Corp deploys heat-shielded drones to map the exact locations of the boiler cores." },
                { date: "JULY 2, 2026", t: "Transit Route Status", d: "Currently used strictly as a highly dangerous, high-speed transit corridor to Level 3. No permanent bases exist or can survive here." }
            ],
            resonance: [
                "> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL ANALYSIS:</span>", "  - METAL FATIGUE DETECTED IN PIPES",
                "<br>> <span class='text-purple-400'>COGNITITIVE HAZARD DETECTED:</span>", "  - CLAUSTROPHOBIA INDUCING GEOMETRY",
                "<br>> <span class='text-red-400'>ENTITY PROXIMITY SWEEP:</span>", "  - 1 CLUMP IN CEILING CAVITY.", "  - 4 SMILERS IN SECTOR 7G.",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }),

        "level3": buildLevel({
            id: "level3", title: "Level 3", name: "Electrical Station", color: "#f59e0b", hover: "#d97706", glow: "rgba(245, 158, 11, 0.2)", anim: "animate-pulse-fast",
            tags: [["CLASS 4", "bg-red-500/10 text-red-500 border-red-500/30"], ["ENTITY INFESTATION", "bg-red-700/10 text-red-700 border-red-700/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            map: { seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [{ name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Elevator (Level 4)", color: "#3b82f6", icon: "↕" }] },
            metrics: {
                "Level 3 Specific (Proprietary)": { "Ambient Voltage Level": "10,000V (Lethal)", "Acoustic Hazard": "Deafening (110dB)", "Entity Density Rate": "Extreme Swarms", "Copper Wire Permeation": "98%", "Grid Fluctuation": "Erratic", "Fire Salt Deposits": "High" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.1 (Slightly Slower)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "8.0%", "Entropy Gradient": "Electromagnetic", "Atomic Clock Drift": "±3.5s/24h", "Memory Degradation": "+5%" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "70.0 H (Unstable)", "Kant Counter Reading": "0.78 K", "Euclidean Consistency": "40.0% (Severe Shifts)", "Noclipping Threshold": "Low", "Spatial Dilation Factor": "1:2", "Z-Axis Deviation": "±12.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "25.0 °C", "Relative Humidity": "40% (Dry)", "Atmospheric Pressure": "100.1 kPa", "Air Comp: O2": "19.8%", "Trace Anomalous Gases": "3.2% Ozone", "Chemical Odor Profile": "Burnt Copper / Ozone" },
                "Acoustic & Luminescent": { "Ambient Hum": "High-Voltage Arcing", "Absolute Decibel Baseline": "110 dB (Damaging)", "Luminosity Level": "100 Lux (Strobing)", "Color Temperature": "5000 K", "Total Darkness Zones": "50%", "Audio Hallucination Risk": "High" },
                "Material & Biological": { "Entity Density": "8.9 (Lethal)", "Toxicity Levels": "High (Ozone/Copper)", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "3000 kg/m³", "Flora/Fauna Present": "Anomalous Rust", "Background Rad-Count": "0.45 μSv/h" },
                "Survival & Infrastructure": { "Base Threat Level": "4 (Dangerous)", "Sanity Drain Rate": "-4.0% per Hour", "Isolation Factor": "Zero (Hunted)", "Radio Comm Integrity": "0% (EMP Blocked)", "GPS Functionality": "Offline", "Rescue Probability": "Near Zero" }
            },
            desc: [
                "Level 3 is an incredibly dangerous, sprawling complex of long, dark, twisting hallways that function similarly to Level 0, but resemble a nightmarish hybrid of a maximum-security prison and a high-voltage electrical station. It is widely considered one of the most lethal early levels in the Backrooms.",
                "The architecture consists of exposed copper pipes, iron bars, heavy metal grating floors, and massive electrical generators that take up entire rooms. The noise in Level 3 is deafening. Constant whirring, metallic grinding, and the explosive sparking of high-voltage electronics make hearing approaching entities nearly impossible. The air is thick with the smell of ozone and burnt copper. Due to the massive, unregulated electrical grid, exposed live wires are common. Accidentally brushing against the walls in the dark can result in instant, 10,000-volt electrocution.",
                "The entity density in Level 3 is extraordinarily high and aggressive. Hounds hunt in organized packs, Facelings wander the halls, Wretches ambush from the dark, Skin-Stealers lure victims using stolen voices, and Smilers dominate the unlit corridors. Wanderers entering Level 3 are advised to move as quickly as possible, abandoning stealth, as the metal grating floors make silent movement impossible anyway.",
                "Despite the immense danger and high mortality rate, Level 3 is rich in highly valuable resources. Fire Salt, Royal Rations, Almond Water, and advanced weaponry can be scavenged from the electrical fuse boxes and supply rooms scattered throughout. Because of this, brave scavengers from the B.N.T.G. frequently mount heavily armed incursions into the level to harvest these materials before retreating to the safety of Level 4[cite: 3]."
            ],
            entrances: [
                "Unlocked fire doors in Level 2 generally lead directly here.",
                "Elevators in Level 4 can occasionally malfunction and travel down to Level 3.",
                "Noclipping through the floor in Level 5 (Often fatal).",
                "Entering a heavily rusted bunker door in Level 10."
            ],
            exits: [
                "Finding an elevator and manually powering it is the only confirmed, safe method to reach Level 4 or Level 5.",
                "Wooden doors occasionally appear and lead to Level 31.",
                "Noclipping through the metal grating floors leads to the void or Level 6.",
                "Entering a specific electrical closet painted bright green leads to Level 14."
            ],
            tips: [
                { n: "High Entity Density", d: "Do not attempt to fight. You are severely outnumbered by apex predators.", c: "red", l: "Use the deafening machinery noise to mask your sprinting footsteps. Run continuously." },
                { n: "Electrocution Hazard", d: "Exposed live wires hang from the ceiling and coat the walls.", c: "yellow", l: "Stay in the exact dead-center of the hallways. Do not touch metal grates with bare skin." },
                { n: "Hound Packs", d: "Hounds hunt in highly organized, tactical packs here, flanking prey.", c: "orange", l: "If they acquire your scent, seek a chain-link fenced area, enter, and padlock the gate behind you." },
                { n: "Resource Scavenging", d: "Fire Salt and Royal Rations are hidden inside industrial fuse boxes.", c: "blue", l: "Only open grey fuse boxes. Yellow ones are rigged with cognitohazards or live explosives." },
                { n: "Skin-Stealer Deception", d: "Skin-Stealers wear human victims and cry for help from the dark.", c: "purple", l: "If they ask for help but their voice echoes with a metallic ping, shoot to kill or flee." },
                { n: "Metal Flooring", d: "The metal grating floors amplify vibrations, announcing your location.", c: "cyan", l: "Walk on the concrete borders supporting the grates, not the hollow grates themselves." },
                { n: "Elevator Activation", d: "Elevators to Level 4 are dead and require manual power to operate.", c: "fuchsia", l: "You must manually bridge power from a generator to the shaft using copper wire. Wear rubber gloves." },
                { n: "Wi-Fi Anomalies", d: "Wi-Fi signals are incredibly strong here, but they actively intercept your devices.", c: "green", l: "Do not connect to 'L3_FREE'. It downloads a virus that flashes your screen to attract entities." },
                { n: "Copper Toxicity", d: "The air tastes heavily of copper and ozone, acting as a mild blood thinner.", c: "teal", l: "Bleeding here attracts entities 10x faster due to the metallic air synergy. Bandage instantly." },
                { n: "No Sleep Protocol", d: "Sleeping in Level 3 is a guaranteed death sentence due to wandering patrols.", c: "rose", l: "Consume adrenaline or Fire Salt. Push through exhaustion until you reach the Level 4 elevators." }
            ],
            loadout: [
                { n: "High-Voltage Rubber Gloves", i: "ph-hand-palm" }, { n: "Thick Rubber-Soled Boots", i: "ph-boot" },
                { n: "Non-Conductive Melee Weapon (Wood)", i: "ph-sword" }, { n: "Firearm (Lethal Force Authorized)", i: "ph-crosshair" },
                { n: "EMP Grenades (Stuns entities)", i: "ph-lightning" }, { n: "Hemostatic Clotting Agents", i: "ph-first-aid" },
                { n: "Adrenaline Syringes", i: "ph-pill" }, { n: "Insulated Wire Cutters", i: "ph-wrench" },
                { n: "Heavy Padlocks (For securing gates)", i: "ph-lock-key" }, { n: "Tactical Strobe Light", i: "ph-flashlight" }
            ],
            history: [
                { date: "AUGUST 19, 2011", t: "The Death Trap Discovery", d: "Explorers from Level 2 enter a fire exit, realizing they are trapped in a high-threat zone. Only 1 of 5 survives." },
                { date: "MARCH 5, 2014", t: "Base Gamma Overrun", d: "M.E.G. attempts to establish a forward outpost. It is destroyed by a swarm of Skin-Stealers within 72 hours." },
                { date: "NOVEMBER 11, 2017", t: "Fire Salt Extraction Perfected", d: "B.N.T.G. scavengers devise a method to safely extract explosive Fire Salt from the fuse boxes without detonating it." },
                { date: "FEBRUARY 14, 2020", t: "The Great Generator Reboot", d: "An unknown wanderer triggers a massive central generator, permanently lighting up a previously pitch-black, highly lethal sector." },
                { date: "JUNE 9, 2022", t: "Elevator Map Compiled", d: "A comprehensive map of working elevators to Level 4 is distributed among survivor groups, drastically reducing mortality." },
                { date: "MAY 22, 2024", t: "Wi-Fi Trap Identified", d: "L-Corp isolates a rogue, anomalous signal mimicking a safe network, saving countless agents from digital luring." },
                { date: "JANUARY 5, 2025", t: "Hound Pack Coordination", d: "Researchers document Hounds using rudimentary flanking tactics, proving they are adapting to human scavenger routes." },
                { date: "JULY 2, 2026", t: "Designated 'Run' Zone", d: "The level is considered entirely unlivable. Scavenging runs are strictly timed to 4-hour windows by all major factions." }
            ],
            resonance: [
                "> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL DANGER:</span>", "  - 10kV DETECTED ON LOCAL GRID",
                "<br>> <span class='text-red-500'>MASSIVE ENTITY SIGNATURES:</span>", "  - 24 HOSTILES IN 100M RADIUS",
                "<br>> <span class='text-yellow-400'>SURVIVAL PROBABILITY:</span>", "  - 4.2%",
                "<br>> UPLOADING AND SEVERING CONNECTION."
            ]
        }),

        "level4": buildLevel({
            id: "level4", title: "Level 4", name: "Abandoned Office", color: "#3b82f6", hover: "#2563eb", glow: "rgba(59, 130, 246, 0.2)", anim: "animate-ambient-drift",
            tags: [["CLASS 1", "bg-green-500/10 text-green-400 border-green-500/30"], ["ABUNDANT RESOURCES", "bg-blue-500/10 text-blue-400 border-blue-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            map: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [{ name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Trap", color: "#000", icon: "🪟" }] },
            metrics: {
                "Level 4 Specific (Proprietary)": { "Cubicle Density": "75%", "Carpet Cleanliness": "Pristine", "Window Occurrence": "Low (Anomalous)", "Almond Water Respawn": "High", "Ambient Static": "High", "Office Supply Yield": "Maximum" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:0.95 (Faster)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.0%", "Entropy Gradient": "Restorative", "Atomic Clock Drift": "0.0s/24h", "Memory Degradation": "-2% (Healing)" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "100.0 H (Stable)", "Kant Counter Reading": "1.00 K", "Euclidean Consistency": "99.0%", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "0.00%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "21.0 °C (Comfortable)", "Relative Humidity": "45%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "21.0%", "Trace Anomalous Gases": "0%", "Chemical Odor Profile": "Clean Linen / Rain" },
                "Acoustic & Luminescent": { "Ambient Hum": "AC Units / Muffled Rain", "Absolute Decibel Baseline": "25 dB", "Luminosity Level": "500 Lux (Bright)", "Color Temperature": "4000 K", "Total Darkness Zones": "0%", "Audio Hallucination Risk": "Zero" },
                "Material & Biological": { "Entity Density": "0.01 (Windows)", "Toxicity Levels": "Zero", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "Standard", "Flora/Fauna Present": "Indoor Potted Plants", "Pathogen Level": "Zero" },
                "Survival & Infrastructure": { "Base Threat Level": "0.5 (Sanctuary)", "Sanity Drain Rate": "0% (Restorative)", "Isolation Factor": "Low", "Radio Comm Integrity": "100%", "GPS Functionality": "Online", "Rescue Probability": "Maximum" }
            },
            desc: [
                "Level 4 is an infinite expanse of mostly empty office space. It is a striking contrast to the horrors of Level 3, acting as a massive sanctuary and recovery zone for wanderers. It is devoid of furniture save for the occasional water cooler, desk, or potted plant, and is almost completely safe.",
                "The carpet is thin, industrial, and impeccably clean. The walls are painted a sterile white or beige, and the drop ceilings hold fully functioning, non-flickering fluorescent lights. There is no maddening hum-buzz like in Level 0; instead, the level is accompanied by the soft, soothing hum of air conditioning or occasionally the faint, muffled sounds of a rainstorm outside, despite there being no actual exterior. Wanderers arriving here report an immediate sense of relief and a rapid restoration of their sanity.",
                "Entities are almost completely nonexistent here, making it the perfect hub for civilization. The only notable exception are 'Windows'—highly lethal anomalous entities that disguise themselves as glass windows leading to a dark exterior. If a wanderer approaches a Window, the entity inside will shatter the glass and drag them into the void.",
                "Scattered throughout Level 4 are water coolers that dispense pure Almond Water, and vending machines containing safe, edible snacks from the Frontrooms. Because of its safety, Euclidean stability, and infinite resources, the M.E.G. and the B.N.T.G. have established their massive, primary headquarters and trade hubs here. It is the economic and social capital of the Backrooms[cite: 3]."
            ],
            entrances: [
                "Arriving safely via the elevators from Level 3.",
                "Following the heavily guarded B.N.T.G. marked trails from Level 1.",
                "Noclipping through the walls of Level 16 (Rare).",
                "Entering a modern office door found in the Hub."
            ],
            exits: [
                "Finding an ornate, carpeted stairwell leads upwards to Level 5.",
                "Breaking a regular window (not an entity window) may drop you into Level 6 (Highly Not Recommended).",
                "Noclipping through a vending machine occasionally leads to Level 33.",
                "Entering an elevator and pressing 'B' leads back to Level 3."
            ],
            tips: [
                { n: "Rest and Resupply", d: "Level 4 is the ideal place to recover sanity, heal wounds, and gather supplies after surviving Level 3.", c: "blue", l: "Sleep in the center of cubicles; they naturally block out the ambient noise and provide psychological comfort." },
                { n: "The Window Threat", d: "Despite the safety, Windows are a lethal, stationary threat. They mimic Baseline Reality exteriors.", c: "purple", l: "Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter from the wall." },
                { n: "Water Cooler Foraging", d: "The coolers contain the highest purity Almond Water found anywhere in the Backrooms.", c: "green", l: "Always check the tap first. If it dispenses red liquid or smells of copper, do not drink it; move to the next cooler." },
                { n: "Vending Machine Exploits", d: "Machines contain Frontrooms-style snacks and never seem to run out of stock.", c: "yellow", l: "They do not require actual coins. Simply press a universal maintenance button sequence: 4-2-8-1." },
                { n: "Base Omega Registration", d: "Register with the M.E.G. upon arrival to receive a map, rations, and protection.", c: "orange", l: "Do not give them your real name. Use an alias, as names are used for anomalous tracking in deeper levels." },
                { n: "Hound Stragglers", d: "Rarely, a lone Hound will follow an elevator up from Level 3, lost and confused.", c: "red", l: "The bright lights disorient them heavily. Stare them down confidently; they will flee rather than attack." },
                { n: "Static Shocks", d: "The pristine carpet builds massive amounts of static electricity as you walk.", c: "cyan", l: "Touch a metal cubicle frame every 10 minutes to discharge safely before touching delicate electronics." },
                { n: "Trade Etiquette", d: "Level 4 is the economic heart of the Backrooms. Bartering is the rule of law.", c: "teal", l: "Trade medical supplies and weaponry for information, not water. Water is hyper-abundant here and worthless in trade." },
                { n: "Printer Anomalies", d: "Office printers will occasionally turn on and print pages on their own.", c: "fuchsia", l: "Read them carefully. They often print L-Corp cartography maps detailing the exact locations of nearby exits." },
                { n: "Stairwell Transitions", d: "Finding an ornate stairwell is the safest way forward to Level 5.", c: "rose", l: "If the stairs go down instead of up, do not enter. It is a spatial trap that leads directly to Level 6." }
            ],
            loadout: [
                { n: "Empty Canteens (For stockpiling)", i: "ph-drop" }, { n: "High-Value Trade Goods", i: "ph-hand-coins" },
                { n: "Comfortable Sleeping Bag", i: "ph-sleeping-bag" }, { n: "Journal & Pen (For mapping)", i: "ph-book" },
                { n: "Anti-Static Grounding Strap", i: "ph-shield-check" }, { n: "Sanity Restorative Meds", i: "ph-first-aid" },
                { n: "Utility Knife (For crafting)", i: "ph-knife" }, { n: "Large Duffel Bag (Looting)", i: "ph-bag" },
                { n: "Camera (To document safe zones)", i: "ph-camera" }, { n: "Short-wave Radio (Comms work here)", i: "ph-radio" }
            ],
            history: [
                { date: "SEPTEMBER 12, 2011", t: "The Ascent from Level 3", d: "A group of battered wanderers takes an elevator up from the horrors of Level 3 and finds paradise, mapping the first safe zone." },
                { date: "NOVEMBER 11, 2014", t: "Establishment of M.E.G. Base Omega", d: "M.E.G. relocates its primary civilian housing and command structure here due to the infinite resources and safety." },
                { date: "MARCH 22, 2016", t: "The Window Massacre", d: "A group of naive wanderers mistake an anomalous window for an exit to Earth. 12 are pulled into the void in seconds." },
                { date: "DECEMBER 1, 2018", t: "B.N.T.G. Headquarters Built", d: "The Trade Group sets up their central bank and barter exchange in a massive, open-plan sector of the office." },
                { date: "JULY 14, 2021", t: "Agriculture Attempt", d: "Wanderers successfully grow Frontrooms vegetation in cubicles using modified fluorescent lighting and Almond Water." },
                { date: "APRIL 3, 2023", t: "L-Corp Observer Nodes Online", d: "Liminality Corp embeds into the M.E.G. infrastructure without detection, tapping into their comms network." },
                { date: "AUGUST 22, 2024", t: "The Wi-Fi Network Restored", d: "Engineers manage to link several anomalous routers together, creating a stable, albeit slow, localized intranet." },
                { date: "JULY 2, 2026", t: "The Capital of the Backrooms", d: "Level 4 stands as the most populated and secure level known to wanderers, acting as the ultimate staging ground." }
            ],
            resonance: [
                "> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99% STABLE",
                "<br>> <span class='text-blue-400'>RESOURCE TRACKING:</span>", "  - 400 ALMOND WATER DISPENSERS IN RADIUS",
                "<br>> <span class='text-yellow-400'>SCANNING FOR COGNITOHAZARDS:</span>", "  - WARNING: WINDOW ANOMALY LOCATED AT X:24, Y:-90",
                "<br>> <span class='text-green-400'>POPULATION DENSITY:</span>", "  - 2,490 HUMAN LIFE SIGNS DETECTED",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }),

        "level5": buildLevel({
            id: "level5", title: "Level 5", name: "Terror Hotel", color: "#b45309", hover: "#92400e", glow: "rgba(180, 83, 9, 0.2)", anim: "animate-flicker",
            tags: [["CLASS 2", "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"], ["PSYCHOLOGICAL HAZARD", "bg-purple-500/10 text-purple-400 border-purple-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDUxYTAzIi8+PHBhdGggZD0iTTAgMEwxMiAxMk0xMiAwTDAgMTIiIHN0cm9rZT0iI2Q5NzcwNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            map: { seed: 50401, wallDensity: 0.7, renderStyle: 'diagonal', gridSize: 8, poiChance: 0.03, wallColor: '#b45309', gridColor: 'rgba(217, 119, 6, 0.1)', wallThickness: 0.2, bgColor: '#291001', pois: [{ name: "Beverly Room", color: "#10b981", icon: "🍸" }, { name: "Deathmoth Hive", color: "#f59e0b", icon: "🦋" }, { name: "Boiler Room", color: "#dc2626", icon: "🔥" }] },
            metrics: {
                "Level 5 Specific (Proprietary)": { "Wallpaper Toxicity": "Trace Arsenic", "Jazz Music Loop": "3.4 Hours", "Deathmoth Population": "High", "Architecture": "1930s Art Deco", "Elevator Floors": "300+", "Dust Accumulation": "Anomalous" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.5 (Fast)", "Local Time Flow Rate": "Psychological Dilation", "Temporal Loop Probability": "40.0%", "Entropy Gradient": "Stagnant", "Atomic Clock Drift": "±12.0s/24h", "Memory Degradation": "+15%" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "85.0 H", "Kant Counter Reading": "0.89 K", "Euclidean Consistency": "70.0%", "Noclipping Threshold": "Moderate", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "±2.0%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "23.0 °C", "Relative Humidity": "30%", "Atmospheric Pressure": "100.5 kPa", "Air Comp: O2": "20.1%", "Trace Anomalous Gases": "Arsenic Vapor", "Chemical Odor Profile": "Mahogany / Old Dust / Cigar Smoke" },
                "Acoustic & Luminescent": { "Ambient Hum": "1920s Jazz Music", "Absolute Decibel Baseline": "40 dB", "Luminosity Level": "200 Lux", "Color Temperature": "2500 K (Warm)", "Total Darkness Zones": "Rare", "Audio Hallucination Risk": "Very High" },
                "Material & Biological": { "Entity Density": "3.2 (Sworms)", "Toxicity Levels": "Low (Wallpaper)", "Wall Arsenic Saturation": "0.5 mg/m²", "Micro-Concrete Density": "N/A (Wood/Plaster)", "Flora/Fauna Present": "Deathmoths", "Pathogen Level": "Low" },
                "Survival & Infrastructure": { "Base Threat Level": "2 (Psychological)", "Sanity Drain Rate": "-3.5% per Hour", "Isolation Factor": "Moderate", "Radio Comm Integrity": "50%", "GPS Functionality": "Offline", "Rescue Probability": "Moderate" }
            },
            desc: [
                "Level 5 is an infinite hotel complex constructed entirely in early 20th-century Art Deco architecture. The sound of faint, looping 1920s jazz music can be heard echoing through the halls from an unseen source, driving wanderers slowly insane.",
                "The level takes on the appearance of a lavishly decorated, yet completely abandoned, luxury hotel. Ornate mahogany doors, detailed gold-leaf wallpaper, and plush red carpets cover the endless, labyrinthine hallways. Much of the level is completely pristine, though wanderers report an intense, overarching feeling of being watched. This profound paranoia, combined with the looping music, leads to severe psychological breakdown if one is isolated for too long. Furniture occasionally appears to breathe or shift when not looked at directly.",
                "The primary entity threat in Level 5 comes from Deathmoths. The level is considered the central hive for these creatures. Male Deathmoths are completely harmless and flutter around the lights, but the giant Female Deathmoths are highly aggressive and dangerous. They are attracted to the ornate brass wall sconces that provide the level's lighting, nesting in the fixtures and attacking anyone who disturbs them.",
                "There are three main, distinct areas in Level 5: The Main Hotel (the infinite hallways and rooms), The Beverly Room (a massive, fully functional ballroom used as a safe hub by M.E.G.), and The Boiler Room (a searingly hot, rusty labyrinth underneath the hotel where Clumps reside and the temperature rises dramatically)[cite: 3]."
            ],
            entrances: [
                "Ascending the ornate, carpeted stairs found in Level 4.",
                "Taking a working elevator up from Level 3.",
                "Entering a revolving hotel door occasionally found in Level 11.",
                "Noclipping through a mahogany desk in Level 4."
            ],
            exits: [
                "Going too deep into the Boiler Room eventually transitions the environment entirely into Level 6.",
                "Entering dark, unlit hotel rooms and waiting can sometimes transport you to Level 63.",
                "Opening the main front doors in the lobby leads out into Level 11.",
                "Noclipping through the boiler room walls drops you into Level 2."
            ],
            tips: [
                { n: "Deathmoth Avoidance", d: "Female Deathmoths are fiercely attracted to light and protect their nests.", c: "orange", l: "Avoid areas with broken sconces or silk webs; it means a female has claimed the territory." },
                { n: "The Jazz Loop Paranoia", d: "The looping 1920s music induces severe anxiety, auditory hallucinations, and eventual psychosis.", c: "fuchsia", l: "Wear earplugs. If the music suddenly stops playing entirely, hide immediately. Something is hunting." },
                { n: "The Beverly Room", d: "The massive ballroom is a designated safe zone cleared of entities.", c: "green", l: "Use the ballroom to rest and trade for weapons and anti-psychotics before braving the Boiler Room." },
                { n: "Boiler Room Clumps", d: "The sub-level is infested with Clumps that hide in the cramped pipes.", c: "red", l: "Never go into the Boiler Room unless absolutely necessary to reach Level 6. It is a death trap." },
                { n: "Arsenic Wallpaper", d: "The beautiful gold-leaf wallpaper contains toxic trace elements of arsenic.", c: "yellow", l: "Do not touch the walls or lean against them. If you do, wash your hands immediately with Almond Water." },
                { n: "Room 54", d: "There are rumors of a 'Room 54' that contains immense wealth and an exit to Earth.", c: "blue", l: "It is a psychological trap generated by the level. Room 54 does not exist. Do not look for it." },
                { n: "Furniture Hallucinations", d: "Couches, chairs, and beds may appear to breathe or shift their positions.", c: "purple", l: "Sit on the floor. Do not trust the furniture; some of it is composed of disguised entity biomass." },
                { n: "Mirror Evasion", d: "Bathrooms contain mirrors that reflect incorrect timelines or missing reflections.", c: "cyan", l: "Keep your head down when washing in the sinks. Looking into the mirrors drains your sanity instantly." },
                { n: "Male Deathmoth Utility", d: "Males are completely harmless and produce a healing silk used by medics.", c: "rose", l: "Let them land on you. Do not swat them; crushing them releases pheromones that attract angry females." },
                { n: "Elevator Buttons", d: "Elevators here have buttons that go up to floor 300, defying the building's exterior logic.", c: "teal", l: "Never press a button above 12. The air thins out completely, leading to asphyxiation." }
            ],
            loadout: [
                { n: "Industrial Earplugs (Crucial)", i: "ph-ear" }, { n: "Chemical Moth Repellent", i: "ph-bug" },
                { n: "Respirator (For Boiler Room)", i: "ph-mask-water" }, { n: "Long-reach Spear (For Deathmoths)", i: "ph-sword" },
                { n: "Red-light Headlamp (Less attractive)", i: "ph-flashlight" }, { n: "Acid Burn Kits", i: "ph-first-aid" },
                { n: "Anti-psychotic Medication", i: "ph-pill" }, { n: "Almond Water", i: "ph-drop" },
                { n: "Hotel Blueprints (L-Corp)", i: "ph-map-trifold" }, { n: "Stopwatch (Time reality checks)", i: "ph-watch" }
            ],
            history: [
                { date: "FEBRUARY 2, 2012", t: "The Golden Stairs Discovery", d: "Explorers from Level 4 ascend a newly formed set of ornate stairs, finding the hotel." },
                { date: "AUGUST 12, 2014", t: "The Moth King Slain", d: "A coordinated group of wanderers kill a massive Deathmoth King, clearing the east wing of the hotel." },
                { date: "DECEMBER 1, 2016", t: "The Beverly Room Treaty", d: "Factions establish a neutral trading hub within the Beverly Room, utilizing the ballroom's safety." },
                { date: "MARCH 19, 2018", t: "Boiler Room Mapped", d: "M.E.G. agents map the descent to Level 6, suffering heavy Clump-related casualties in the pipes." },
                { date: "OCTOBER 31, 2020", t: "The 'Jazz Madness' Incident", d: "Several wanderers go completely insane from the music loop, barricading themselves in Room 212 and attacking rescuers." },
                { date: "JANUARY 11, 2023", t: "Arsenic Discovery", d: "Scientists at Base Omega trace a mysterious sickness in survivors back to the vintage wallpaper in Level 5." },
                { date: "NOVEMBER 4, 2024", t: "Female Hive Eradication", d: "A specialized M.E.G. extermination unit clears out the primary hive on the 8th floor." },
                { date: "JULY 2, 2026", t: "The Hub of Deceit", d: "Considered safe by many amateurs, but the psychological toll makes it extremely dangerous for long-term habitation." }
            ],
            resonance: [
                "> INITIALIZING ACOUSTIC SCAN...", "> DETECTING LOOPING AUDIO TRACK [1920s_JAZZ.wav]",
                "<br>> <span class='text-fuchsia-400'>COGNITOHAZARD ALERT:</span>", "  - AUDITORY PARANOIA INDUCERS PRESENT",
                "<br>> <span class='text-orange-400'>BIOLOGICAL ENTITIES:</span>", "  - MASSIVE AERIAL PREDATORS DETECTED (DEATHMOTHS)",
                "<br>> <span class='text-liminal-primary'>STRUCTURAL INTEGRITY:</span>", "  - HOTEL WINGS REPEAT INFINITELY",
                "<br>> SCAN COMPLETE. UPLOADING."
            ]
        }),

        "level6": buildLevel({
            id: "level6", title: "Level 6", name: "Lights Out", color: "#1e293b", hover: "#0f172a", glow: "rgba(30, 41, 59, 0.2)", anim: "animate-flicker",
            tags: [["CLASS 4", "bg-red-500/10 text-red-500 border-red-500/30"], ["PITCH BLACK", "bg-gray-500/10 text-gray-400 border-gray-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwMDAiLz48L3N2Zz4=",
            map: { seed: 600, wallDensity: 0.9, renderStyle: 'grid', gridSize: 6, poiChance: 0.02, wallColor: '#1f2937', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.1, bgColor: '#000', pois: [{ name: "Audio Hazard", color: "#dc2626", icon: "👁" }, { name: "Tripping Hazard", color: "#60a5fa", icon: "💧" }] },
            metrics: {
                "Level 6 Specific (Proprietary)": { "Lux Level": "0.0 (Absolute)", "Acoustic Resonance": "Infinite Echo", "Entity Visability": "Zero", "Light Mitigaton Factor": "99.8%", "Floor Stability": "Uneven", "Wire Snare Presence": "High" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:2.0 (Fast)", "Local Time Flow Rate": "Unknown", "Temporal Loop Probability": "60.0%", "Entropy Gradient": "Stagnant", "Atomic Clock Drift": "Unknown", "Memory Degradation": "+25%" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "45.0 H (Failing)", "Kant Counter Reading": "0.45 K", "Euclidean Consistency": "20.0%", "Noclipping Threshold": "Low", "Spatial Dilation Factor": "1:3", "Z-Axis Deviation": "Extreme" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "12.0 °C (Cold)", "Relative Humidity": "60%", "Atmospheric Pressure": "98.5 kPa", "Air Comp: O2": "19.0%", "Trace Anomalous Gases": "Unknown", "Chemical Odor Profile": "Rust / Stale Air" },
                "Acoustic & Luminescent": { "Ambient Hum": "None (Dead Silence)", "Absolute Decibel Baseline": "0 dB", "Luminosity Level": "0 Lux", "Color Temperature": "N/A", "Total Darkness Zones": "100%", "Audio Hallucination Risk": "Maximum" },
                "Material & Biological": { "Entity Density": "7.5 (Smilers)", "Toxicity Levels": "Low", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "Variable", "Flora/Fauna Present": "None", "Pathogen Level": "None" },
                "Survival & Infrastructure": { "Base Threat Level": "4 (Lethal)", "Sanity Drain Rate": "-8.0% per Hour", "Isolation Factor": "Absolute", "Radio Comm Integrity": "0%", "GPS Functionality": "Offline", "Rescue Probability": "Zero" }
            },
            desc: [
                "Level 6 is an infinite complex shrouded in absolute, impenetrable darkness where all light sources are anomalously mitigated and absorbed by the environment.",
                "The level is completely devoid of natural or artificial light. Even industrial flashlights and chemical glowsticks only illuminate a few inches ahead of the user before the light is seemingly swallowed by the air itself. The walls are constructed of cold metal and rough concrete. The floor is treacherous, littered with exposed wires, pipes, and sudden, deep puddles of unknown fluids that cause wanderers to trip and injure themselves in the pitch black.",
                "The primary danger of Level 6 is the extreme psychological toll and the staggeringly high density of Smilers that lurk in the dark. Without light, human sanity drains rapidly, leading to intense auditory and visual hallucinations. Wanderers frequently report hearing their own names whispered, or the sounds of approaching footsteps that do not exist.",
                "Due to the absolute darkness, navigation is entirely reliant on touch and sound. However, making noise attracts the entities. It is a terrifying paradox of survival: you cannot see to move, but moving blindly makes noise, and noise brings death[cite: 3]."
            ],
            entrances: [
                "Going too deep into Level 5's boiler room seamlessly transitions into Level 6.",
                "Entering a rusted iron door in Level 4 (Highly dangerous trap)."
            ],
            exits: [
                "Tripping on a wire or stepping deeply into a puddle often causes a noclip event, dropping you into Level 7.",
                "Finding a spiral staircase leading downwards takes you to Level 8."
            ],
            tips: [
                { n: "Blind Navigation", d: "Keep one hand firmly on the wall to maintain your bearing in the dark.", c: "gray", l: "Follow the left wall exclusively to avoid topological loops and dead ends." },
                { n: "Listen for Smilers", d: "Listen closely for the distant laughing or clicking of Smilers.", c: "red", l: "Echolocation is your only early warning system. Stop breathing to listen." },
                { n: "Crawl to Avoid Tripping", d: "Tripping hazards (wires, pipes) are frequent and cause loud noises when you fall.", c: "yellow", l: "Dropping to the floor and crawling reduces your thermal silhouette and noise." },
                { n: "Do Not Trust Voices", d: "Auditory hallucinations calling your name or asking for help are traps.", c: "fuchsia", l: "If the voice echoes with a metallic ping, it is an entity trying to locate you." },
                { n: "Conserve Batteries", d: "Light sources degrade extremely fast due to the anomalous absorption.", c: "blue", l: "Strobe your light for 1 second every 10 meters to save battery and check for immediate drops." },
                { n: "Mark Walls by Touch", d: "Use chalk to carve tactile markers into the concrete.", c: "teal", l: "Carve three deep slashes at every dead end so you can feel them if you loop back." },
                { n: "Stay Quiet", d: "Noise travels infinitely in this space due to the acoustic resonance.", c: "cyan", l: "Wrap your boots in cloth to muffle your footsteps completely." },
                { n: "Avoid Sudden Drops", d: "The floor occasionally gives way to deep, bottomless pits.", c: "purple", l: "Slide a blind cane across the floor ahead of you. Never take a step without checking the ground." },
                { n: "Use Almond Water", d: "Drink frequently to combat the severe, rapid sanity drain.", c: "green", l: "Swish the water in your mouth to ground your senses with a physical sensation." },
                { n: "Accept the Darkness", d: "Do not panic. Panic raises your heart rate, which entities can hear.", c: "orange", l: "Meditation and acceptance of the dark prevents cognitohazard ingestion." }
            ],
            loadout: [
                { n: "Night Vision Goggles (Fail often)", i: "ph-binoculars" }, { n: "Nylon Rope (For tethering)", i: "ph-link" },
                { n: "Almond Water", i: "ph-drop" }, { n: "Industrial Chalk", i: "ph-pencil-simple" },
                { n: "Sound Mufflers / Cloth", i: "ph-ear" }, { n: "Padded Clothing", i: "ph-t-shirt" },
                { n: "Blind Cane", i: "ph-stick" }, { n: "First Aid Kit", i: "ph-first-aid" },
                { n: "Earplugs", i: "ph-ear-slash" }, { n: "Thermal Goggles", i: "ph-eye" }
            ],
            history: [
                { date: "MARCH 14, 2013", t: "Discovered from Level 5", d: "A wanderer fell from the boiler room into absolute darkness, barely surviving to document it." },
                { date: "JUNE 2, 2015", t: "First Smiler Swarm", d: "Massive casualties recorded by a M.E.G. unit attempting to establish a forward base." },
                { date: "SEPTEMBER 9, 2017", t: "Sanity Drain Anomaly", d: "Officially categorized by L-Corp researchers as a Level 4 psychological hazard." },
                { date: "DECEMBER 11, 2019", t: "L-Corp Deploys Sonar", d: "Acoustic mapping nodes successfully deployed, mapping the geometry via soundwaves." },
                { date: "FEBRUARY 28, 2021", t: "M.E.G. Abandons Outposts", d: "All operations ceased due to a 100% casualty rate." },
                { date: "AUGUST 15, 2023", t: "The Long Walk Experiment", d: "Proves Euclidean inconsistency; a straight walk of 5 miles looped back to the start." },
                { date: "JANUARY 10, 2025", t: "Light Mitigation Solved", d: "L-Corp develops proprietary flares that burn bright enough to pierce the anomaly for 10 seconds." },
                { date: "JULY 2, 2026", t: "Current Status", d: "Strict no-entry zone for all personnel. Transit is considered a suicide mission without sonar." }
            ],
            resonance: [
                "> INITIALIZING ACOUSTIC SCAN...", "> LIGHT NEGATION DETECTED.", 
                "> EXTREME COGNITOHAZARD PROXIMITY.", 
                "> ENTITY DENSITY: CRITICAL.",
                "> UPLOADING DATA AND SEVERING CONNECTION."
            ]
        }),

        "level7": buildLevel({
            id: "level7", title: "Level 7", name: "Thalassophobia", color: "#0284c7", hover: "#0369a1", glow: "rgba(2, 132, 199, 0.2)", anim: "animate-ambient-drift-slow",
            tags: [["CLASS 4", "bg-red-500/10 text-red-500 border-red-500/30"], ["AQUATIC HAZARD", "bg-blue-500/10 text-blue-400 border-blue-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNVExMCAwIDEwIDVUMjAgNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=",
            map: { seed: 700, wallDensity: 0.1, renderStyle: 'diagonal', gridSize: 10, poiChance: 0.05, wallColor: '#0c4a6e', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.5, bgColor: '#082f49', pois: [{ name: "Inverted House", color: "#fcd34d", icon: "🏠" }, { name: "Entity 20", color: "#ef4444", icon: "🦈" }] },
            metrics: {
                "Level 7 Specific (Proprietary)": { "Water Depth": "Unfathomable (>10km)", "Water Temperature": "4°C", "Gravity Inversion": "Local (House Only)", "Current Velocity": "12 Knots", "Salinity": "0% (Distilled)", "Bioluminescence": "Deep Cave Only" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.0%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "0.0s/24h", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "95.0 H", "Kant Counter Reading": "0.95 K", "Euclidean Consistency": "90.0%", "Noclipping Threshold": "High", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "Extreme (Depth)" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "10.0 °C (Surface)", "Relative Humidity": "100%", "Atmospheric Pressure": "Variable (Depth)", "Air Comp: O2": "21.0%", "Trace Anomalous Gases": "None", "Chemical Odor Profile": "Stale Water / Mildew" },
                "Acoustic & Luminescent": { "Ambient Hum": "Ocean Waves", "Absolute Decibel Baseline": "40 dB", "Luminosity Level": "5 Lux (Surface)", "Color Temperature": "6000 K (Blue)", "Total Darkness Zones": "Deep Water", "Audio Hallucination Risk": "Low" },
                "Material & Biological": { "Entity Density": "0.1 (Entity 20)", "Toxicity Levels": "Toxic Water", "Wall Arsenic Saturation": "N/A", "Micro-Concrete Density": "N/A", "Flora/Fauna Present": "Entity 20", "Pathogen Level": "Nervous System Parasites" },
                "Survival & Infrastructure": { "Base Threat Level": "4 (Lethal)", "Sanity Drain Rate": "-1.0% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "0% (Underwater)", "GPS Functionality": "Offline", "Rescue Probability": "Low" }
            },
            desc: [
                "Level 7 is an impossibly massive ocean that spans endlessly in all directions, accessed initially through an inverted, flooded house.",
                "Upon entry, wanderers find themselves in a furnished living room completely filled with a shallow layer of water. Bizarrely, gravity in this room is anomalously inverted relative to the surface of the exterior ocean. Looking out the window reveals the surface of the water hanging 'above' the room. Opening the front door drops the wanderer upward (or downward, relative to the ocean) into the pitch-black, freezing abyss of Level 7.",
                "The water is completely unsalvageable. It contains microscopic parasites that attack the nervous system if ingested. The ocean is devoid of typical marine life, save for Entity 20, 'The Thing on Level 7', a massive, hyper-aggressive apex predator that patrols the deep.",
                "Survival requires swimming down into the freezing, crushing depths to find an underwater cave system. The immense thalassophobia, freezing temperatures, and the looming threat of Entity 20 make traversing this level a harrowing experience[cite: 3]."
            ],
            entrances: [
                "Falling through a weakened section of the floor in Level 6 drops you into the inverted house."
            ],
            exits: [
                "Swimming deeply into a specific underwater cave system (marked by faint bioluminescence) transports the wanderer to Level 8."
            ],
            tips: [
                { n: "Swim Parallel to Currents", d: "Anomalous undertows will drag you down into the crushing depths.", c: "blue", l: "Currents rotate counter-clockwise around the entrance point. Use them to propel yourself." },
                { n: "Avoid Deep Dark Spots", d: "The deeper you go, the higher the pressure and the closer you get to Entity 20.", c: "gray", l: "Only dive when you have visually located the glowing cave exit." },
                { n: "Watch for Entity 20", d: "The apex predator patrols the deep and attacks anything that moves.", c: "red", l: "If the water suddenly grows warm, it means the entity is exhaling nearby. Swim away immediately." },
                { n: "Surface Often", d: "Maintain oxygen levels if you do not have scuba gear.", c: "teal", l: "Hypoxia accelerates the illusion of land, causing wanderers to swim endlessly." },
                { n: "Preserve Body Heat", d: "The water is a constant, freezing 4°C (39°F). Hypothermia sets in quickly.", c: "orange", l: "Stay inside the entrance room until you are fully mentally and physically prepared to dive." },
                { n: "Check Structural Stability", d: "The inverted house is fragile and under immense pressure.", c: "yellow", l: "Do not slam doors; the vibration weakens the gravity anchor, causing the room to flood." },
                { n: "Don't Drink the Water", d: "The ocean fluid is toxic and parasitic.", c: "green", l: "It contains microscopic anomalies that attack the nervous system. Keep your mouth shut." },
                { n: "Use Floating Debris", d: "Rest on pieces of the house that float to the surface.", c: "cyan", l: "Tie multiple planks together with extracted wiring from the house to make a raft." },
                { n: "Dive into the Cave", d: "The cave is the only known exit to Level 8.", c: "fuchsia", l: "Look for a faint bioluminescent green glow far below the surface. Aim for it." },
                { n: "Avoid Splashes", d: "Acoustic stealth is required to avoid the predator.", c: "purple", l: "Swim using silent breaststrokes. Do not thrash or kick wildly." }
            ],
            loadout: [
                { n: "Thermal Wetsuit", i: "ph-t-shirt" }, { n: "Oxygen Tank", i: "ph-cylinder" },
                { n: "Flippers", i: "ph-shoe" }, { n: "Waterproof Light", i: "ph-flashlight" },
                { n: "Diving Goggles", i: "ph-goggles" }, { n: "Spear Gun (Deterrent)", i: "ph-crosshair" },
                { n: "Thermal Paste", i: "ph-drop" }, { n: "Life Jacket", i: "ph-lifebuoy" },
                { n: "Waterproof Watch", i: "ph-watch" }, { n: "Underwater Compass", i: "ph-compass" }
            ],
            history: [
                { date: "OCTOBER 12, 2014", t: "First Explorer Survived Fall", d: "A wanderer survives the drop from Level 6 by landing in the shallow entrance room pool." },
                { date: "JANUARY 5, 2016", t: "House Room Explored", d: "M.E.G. agents map the bizarre inverted gravity physics of the entrance room." },
                { date: "MAY 19, 2018", t: "Depth Limits Tested", d: "M.E.G. confirms the depth exceeds standard ocean trenches without finding a bottom." },
                { date: "NOVEMBER 30, 2019", t: "Submersible Drone Lost", d: "A drone is crushed and eaten by Entity 20, providing the first blurry footage of the leviathan." },
                { date: "FEBRUARY 14, 2021", t: "M.E.G. Establishes Pontoon", d: "A small floating outpost is built near the entrance for staging dives." },
                { date: "SEPTEMBER 8, 2022", t: "Cave Entrance Found", d: "A brave diver discovers the bioluminescent route to Level 8." },
                { date: "APRIL 25, 2024", t: "L-Corp Buoy Node Installed", d: "Provides localized sonar tracking of the predator to warn divers." },
                { date: "JULY 2, 2026", t: "Transit Route Secured", d: "Dives are now scheduled precisely when Entity 20 is tracked at maximum depth." }
            ],
            resonance: [
                "> SCANNING AQUATIC DENSITY...", "> TEMPERATURE: 4°C.", 
                "> MASSIVE BIOLOGICAL SIGNATURE DETECTED AT 500M DEPTH.", 
                "> ABORTING ACTIVE PING TO MAINTAIN STEALTH."
            ]
        }),

        "level8": buildLevel({
            id: "level8", title: "Level 8", name: "Cave System", color: "#1a1a1a", hover: "#262626", glow: "rgba(26, 26, 26, 0.4)", anim: "animate-pulse-fast",
            tags: [["CLASS 5", "bg-red-700/10 text-red-700 border-red-700/30"], ["ENTITY INFESTATION", "bg-red-500/10 text-red-500 border-red-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEwyIDVMMCAxMEwxMCAxMEw4IDVMMTAgMFoiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            map: { seed: 800, wallDensity: 0.95, renderStyle: 'pipes', gridSize: 6, poiChance: 0.08, wallColor: '#262626', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.8, bgColor: '#0f0f0f', pois: [{ name: "Spider Nest", color: "#dc2626", icon: "🕸" }, { name: "Almond Water Spring", color: "#60a5fa", icon: "💧" }] },
            metrics: {
                "Level 8 Specific (Proprietary)": { "Rock Composition": "Unknown Metamorphic", "Arachnid Density": "Lethal", "Cave-in Risk": "High", "Webbing Tensile Strength": "Exceeds Kevlar", "Toxin Levels": "High (Venom)" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.0%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "0.0s/24h", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "80.0 H", "Kant Counter Reading": "0.80 K", "Euclidean Consistency": "85.0%", "Noclipping Threshold": "High", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "Extreme (Verticality)" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "12.0 °C", "Relative Humidity": "80%", "Atmospheric Pressure": "105.0 kPa", "Air Comp: O2": "18.0%", "Trace Anomalous Gases": "Spore Particulates", "Chemical Odor Profile": "Damp Earth / Venom" },
                "Acoustic & Luminescent": { "Ambient Hum": "Dripping Water", "Absolute Decibel Baseline": "20 dB", "Luminosity Level": "0 Lux (Natural)", "Color Temperature": "N/A", "Total Darkness Zones": "99%", "Audio Hallucination Risk": "Low" },
                "Material & Biological": { "Entity Density": "9.5 (Lethal)", "Toxicity Levels": "High (Venom/Spores)", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "N/A (Solid Rock)", "Flora/Fauna Present": "Giant Arachnids", "Pathogen Level": "Fungal" },
                "Survival & Infrastructure": { "Base Threat Level": "5 (Lethal)", "Sanity Drain Rate": "-2.0% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "10% (Rock Blocking)", "GPS Functionality": "Offline", "Rescue Probability": "Zero" }
            },
            desc: [
                "Level 8 consists of immense, pitch-black, and highly treacherous cave systems infested with lethal arachnid entities.",
                "The level is an infinitely expanding network of caverns. It is completely dark and incredibly dangerous. The rough, organic rock walls are frequently coated in thick, sticky webbing that is strong enough to trap a human effortlessly. The primary threat here consists of various massive spider entities (Entity 66) and Clumps that hide in the rocky crevices waiting to ambush.",
                "The terrain is highly uneven, requiring specialized climbing gear to navigate safely. Sudden drops, stalactites, and unstable floors make movement slow and perilous. Pools of Almond Water can occasionally be found in rock basins, but they are often guarded by nests.",
                "M.E.G. strongly advises against traveling through Level 8 without a heavily armed squad. It is widely considered a death trap for lone wanderers[cite: 3]."
            ],
            entrances: [
                "Emerging from the underwater caves at the bottom of Level 7."
            ],
            exits: [
                "Falling through a randomly generated, bottomless pit in the cave floor drops you directly into Level 9."
            ],
            tips: [
                { n: "Watch for Spiders", d: "Massive arachnids hunt in the dark and drop from the ceiling.", c: "red", l: "Their eyes reflect green under UV light. Use UV flashlights to spot them early." },
                { n: "Check Stalactites", d: "Entities hang from the ceiling mimicking rock formations.", c: "orange", l: "Shine your beam straight up before entering a new cavern to ensure the roof is clear." },
                { n: "Mark Turns", d: "The cave system is a three-dimensional labyrinth.", c: "gray", l: "Leave glow-in-the-dark paint markers on the left wall to trace your path." },
                { n: "Avoid Glowing Fungi", d: "Bioluminescence usually indicates toxic, hallucinogenic spores.", c: "green", l: "Wear a respirator if the air smells sweet or metallic." },
                { n: "Conserve Water", d: "Almond water pools are rare and often serve as bait.", c: "blue", l: "Only drink from flowing underground streams, never from stagnant rock pools." },
                { n: "Listen for Scuttling", d: "Spider legs on rock echo loudly before they attack.", c: "purple", l: "Place your ear to the cave wall to gauge distance and direction of swarms." },
                { n: "Stay Roped to Team", d: "Sudden drops and cave-ins are common.", c: "cyan", l: "Use a 5-meter tether with locking carabiners. If one falls, the team anchors." },
                { n: "Avoid Narrow Squeezes", d: "Clumps hide in tight gaps between boulders.", c: "yellow", l: "If you cannot easily fit your shoulders through, find another path. Do not force it." },
                { n: "Check for Pit Traps", d: "The floor is structurally unstable and covered in false webbing.", c: "fuchsia", l: "Tap the ground ahead of you with a pickaxe before shifting your weight." },
                { n: "Slip Through the Floor", d: "The exit requires falling into the void.", c: "teal", l: "Look for patches of dirt that dissolve into black mist. Jump through." }
            ],
            loadout: [
                { n: "Climbing Gear", i: "ph-link" }, { n: "High-Lumen Headlamp", i: "ph-flashlight" },
                { n: "Arachnid Repellent", i: "ph-bug" }, { n: "Heavy Hiking Boots", i: "ph-boot" },
                { n: "Flares (Deterrent)", i: "ph-fire" }, { n: "Glow-in-the-dark Paint", i: "ph-pencil" },
                { n: "Ice Pick / Pickaxe", i: "ph-hammer" }, { n: "Bandages & Antivenom", i: "ph-bandaids" },
                { n: "Canteen", i: "ph-drop" }, { n: "UV Flashlight", i: "ph-lightbulb" }
            ],
            history: [
                { date: "NOVEMBER 2, 2015", t: "Cave Mapped by M.E.G.", d: "Initial expeditions map a 50-mile radius, losing 4 members to falls." },
                { date: "MARCH 19, 2017", t: "Arachnid Nest Found", d: "A massive breeding ground is discovered and subsequently avoided by all cartographers." },
                { date: "JULY 4, 2019", t: "Almond Water Spring Tapped", d: "A safe source is secured by B.N.T.G., heavily fortified with auto-turrets." },
                { date: "DECEMBER 11, 2020", t: "Floor Anomaly Discovered", d: "The falling exit to Level 9 is confirmed after a survivor's radio signal is tracked." },
                { date: "MAY 25, 2022", t: "L-Corp Seismic Node Placed", d: "Detects rockslides before they happen, broadcasting warnings to agents." },
                { date: "OCTOBER 8, 2024", t: "Outpost Destroyed", d: "A forward operating base is overwhelmed by a swarm of spiders. No survivors." },
                { date: "JANUARY 15, 2026", t: "Trade Route Established", d: "A heavily armed, flamethrower-cleared path is established for transit to Level 9." },
                { date: "JULY 2, 2026", t: "Current Status", d: "Class 5 Lethal. Transit requires Level 4 clearance and a full combat squad." }
            ],
            resonance: [
                "> SCANNING LITHOSPHERE...", "> DENSE ORGANIC SIGNATURES DETECTED.", 
                "> WARNING: STRUCTURAL INSTABILITY AHEAD.", 
                "> UPLOADING SEISMIC DATA."
            ]
        }),

        "level9": buildLevel({
            id: "level9", title: "Level 9", name: "The Suburbs", color: "#4b5563", hover: "#374151", glow: "rgba(75, 85, 99, 0.2)", anim: "animate-flicker",
            tags: [["CLASS 5", "bg-red-700/10 text-red-700 border-red-700/30"], ["EXTREME ENTITY DENSITY", "bg-purple-500/10 text-purple-400 border-purple-500/30"]],
            hero: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMTBMMTAgMEwyMCAxMEgxN1YyMEgzVjEwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDQ0Ii8+PC9zdmc+",
            map: { seed: 900, wallDensity: 0.6, renderStyle: 'grid', gridSize: 10, poiChance: 0.05, wallColor: '#374151', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.3, bgColor: '#111827', pois: [{ name: "Illuminated House", color: "#fcd34d", icon: "💡" }, { name: "The Mangled", color: "#991b1b", icon: "🕷" }] },
            metrics: {
                "Level 9 Specific (Proprietary)": { "Streetlight Functionality": "0%", "Grass Toxicity": "Mild", "Entity Aggression": "Maximum", "House Furnishing": "1990s Era", "Fog Density": "High" },
                "Chrono-Temporal Dynamics": { "Frontrooms Time Dilation": "1:1.0", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.0%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "0.0s/24h", "Memory Degradation": "Baseline" },
                "Spatial & Dimensional": { "Hume Level (Reality)": "60.0 H", "Kant Counter Reading": "0.60 K", "Euclidean Consistency": "80.0%", "Noclipping Threshold": "High", "Spatial Dilation Factor": "1:1", "Z-Axis Deviation": "0.00%" },
                "Atmospheric Diagnostics": { "Ambient Temp (Core)": "18.0 °C", "Relative Humidity": "90%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "21.0%", "Trace Anomalous Gases": "Fog Particulates", "Chemical Odor Profile": "Wet Grass / Iron" },
                "Acoustic & Luminescent": { "Ambient Hum": "Wind / Distant Screams", "Absolute Decibel Baseline": "30 dB", "Luminosity Level": "5 Lux (Moonlight)", "Color Temperature": "6000 K", "Total Darkness Zones": "Streets", "Audio Hallucination Risk": "Moderate" },
                "Material & Biological": { "Entity Density": "10.0 (Extreme)", "Toxicity Levels": "Low", "Wall Arsenic Saturation": "0.0 mg/m²", "Micro-Concrete Density": "Standard", "Flora/Fauna Present": "Dead Trees / Grass", "Pathogen Level": "None" },
                "Survival & Infrastructure": { "Base Threat Level": "5 (Lethal)", "Sanity Drain Rate": "-2.0% per Hour", "Isolation Factor": "High", "Radio Comm Integrity": "20%", "GPS Functionality": "Offline", "Rescue Probability": "Zero" }
            },
            desc: [
                "Level 9 is an infinite, pitch-black suburban neighborhood fraught with extreme danger and a massive entity population.",
                "The level resembles a modern suburban neighborhood from the late 90s, but it is perpetually locked in the dead of night. The streetlights are broken, and a thick fog rolls over the asphalt. The houses are fully furnished but completely abandoned by humans.",
                "Instead of humans, the homes serve as nests for highly dangerous entities like The Neighborhood Watch (massive floating eyes) and The Mangled. It is considered one of the most lethal levels in the Backrooms. The streets are heavily patrolled by Hounds and Smilers.",
                "Survival relies on extreme stealth, avoiding the asphalt roads, and moving through the backyards. Entering a house to scavenge is incredibly risky, as light emanating from a window usually indicates an entity resides within[cite: 3]."
            ],
            entrances: [
                "Falling through the void in Level 8 eventually lands you safely on the damp grass of a front lawn in Level 9."
            ],
            exits: [
                "Following the asphalt road straight for 100-200 miles seamlessly transitions the environment into the wheat fields of Level 10."
            ],
            tips: [
                { n: "Stay Off the Street", d: "The asphalt roads are heavily patrolled by hunting entities.", c: "red", l: "Walk on the grass lawns to dampen your footsteps." },
                { n: "Avoid Illuminated Houses", d: "Light inside a house means an entity resides there.", c: "yellow", l: "Only scavenge completely dark homes." },
                { n: "Watch for Mangled", d: "Grotesque entities hide in the bushes and hedges.", c: "purple", l: "They smell fear. Control your breathing and heart rate." },
                { n: "Don't Look at the Sky", d: "The sky is a void that induces madness if stared at.", c: "gray", l: "Keep your gaze fixed on the horizon or the houses." },
                { n: "Keep Moving", d: "Staying in one place attracts attention from patrols.", c: "teal", l: "Never rest for more than 2 hours in a single house." },
                { n: "Sneak Through Backyards", d: "Backyards are significantly safer than front lawns.", c: "green", l: "Hop wooden fences quietly to bypass street patrols." },
                { n: "Ignore Ringing Phones", d: "Phones inside the houses are auditory traps.", c: "orange", l: "Answering them gives the entities your exact location." },
                { n: "Gather Supplies Quickly", d: "Houses have Almond water but are dangerous.", c: "cyan", l: "In and out in under 3 minutes. Do not linger." },
                { n: "Neighborhood Watch Evasion", d: "Massive floating eyes patrol the area, emitting a purple glow.", c: "fuchsia", l: "If you see a purple glow, hide under a porch instantly." },
                { n: "Follow the Road Signs", d: "They guide you to Level 10.", c: "blue", l: "Do not trust signs written in blood or scratch marks." }
            ],
            loadout: [
                { n: "Stealth Clothing (Dark)", i: "ph-t-shirt" }, { n: "Crowbar (For doors)", i: "ph-wrench" },
                { n: "Flashlight (Red Lens)", i: "ph-flashlight" }, { n: "Tactical Backpack", i: "ph-bag" },
                { n: "Silent Running Shoes", i: "ph-sneaker" }, { n: "First Aid Kit", i: "ph-first-aid" },
                { n: "Night-vision Binoculars", i: "ph-binoculars" }, { n: "Compass", i: "ph-compass" },
                { n: "Almond Water", i: "ph-drop" }, { n: "Silenced Weapon", i: "ph-crosshair" }
            ],
            history: [
                { date: "SEPTEMBER 2, 2016", t: "First Entered from 8", d: "Wanderers survive the fall from the caves, landing in the grass." },
                { date: "JANUARY 14, 2018", t: "Houses Looted", d: "Initial M.E.G. teams find ample supplies but suffer 60% casualties." },
                { date: "APRIL 5, 2019", t: "The Mangled Classified", d: "A new entity type is documented hiding in the hedges." },
                { date: "DECEMBER 20, 2020", t: "M.E.G. Sets Safehouse", d: "A heavily fortified house is established, but quickly overrun by a Watcher." },
                { date: "MAY 11, 2022", t: "Dark Cycles Mapped", d: "It is determined that daylight never arrives; it is perpetually 2 AM." },
                { date: "FEBRUARY 18, 2024", t: "L-Corp Installs Street Nodes", d: "Hidden in the broken streetlights to track entity migrations." },
                { date: "AUGUST 9, 2025", t: "Exits to 10 Confirmed", d: "The 100-mile march protocol is established." },
                { date: "JULY 2, 2026", t: "Transit Zone Only", d: "No bases exist. Level 9 is purely an obstacle to reach Level 10." }
            ],
            resonance: [
                "> SCANNING SUBURBAN GRID...", "> ZERO HUMAN LIFE DETECTED.", 
                "> MASSIVE HOSTILE PRESENCE IN DWELLINGS.", 
                "> UPLOADING TELEMETRY."
            ]
        })
    },
    entities: {
        "entity1": {
            type: "entity", id: "entity1", title: "Entity 1", name: "The Cameraman",
            themeColor: "#9ca3af", themeHover: "#6b7280", themeGlow: "rgba(156, 163, 175, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" }, { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            specificMetrics: { "Behavioral Matrix": { "Hostility Baseline": "Passive", "Target Preference": "None" }, "Entity Specific": { "Origin Level": "Unknown", "Photographic Resolution": "4K+" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div><div class="relative z-10 flex flex-col items-center animate-float"><div class="w-32 h-32 rounded-full border-2 border-gray-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast shadow-[0_0_20px_rgba(156,163,175,0.3)]"><i class="ph ph-camera text-6xl text-gray-400 opacity-80"></i></div><h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3><p class="text-xs text-gray-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p></div></div>`,
            lore: `<div class="mb-6 pb-4 border-b border-white/5 border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r shadow-lg"><p class="text-sm text-yellow-200 font-mono"><strong>NOTICE:</strong> This document is pending revision.</p></div><h3>Description</h3><p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms. The process is unknown, but it serves as an explanation for images appearing instantaneously in databases.</p>`,
            survivalGuide: makeSG([{n:"Non-Intervention",d:"Engagement is strictly prohibited.",c:"blue",l:"Allow the entity to curate the database in peace."},{n:"Equipment Handling",d:"Do not touch random cameras.",c:"gray",l:"They may belong to the entity."}], [{n:"Camera",i:"ph-camera"}]),
            history: makeHist([{t:"First Anomalous Upload",d:"The original Level 0 photo is traced to an anomalous packet injection."},{t:"Entity Theorized",d:"M.E.G. officially categorizes the phenomenon as Entity 1."}]),
            resonanceLogs: ["> INITIALIZING ENTITY PING...", "> SCANNING DATABASE INJECTION POINTS...", "> NO PHYSICAL ANCHOR DETECTED."]
        },

        "entity2": {
            type: "entity", id: "entity2", title: "Entity 2", name: "Windows",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Behavioral Matrix": { "Hostility Baseline": "Extremely Aggressive", "Target Preference": "Isolated wanderers" }, "Entity Specific": { "Origin Level": "Level 188", "Physical Composition": "Shadow/Void entity" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-red-900"><div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity"><span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20 animate-pulse">HOVER TO APPROACH</span></div></div></div>`,
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Windows are entities that take the form of typical glass windows. They are stationary ambush traps designed to lure wanderers to their deaths.</p></div><h3>Description</h3><p>Entity 2, more commonly known as "Windows", are creatures that disguise themselves as architectural features. Behind the glass, a dark, humanoid shadow figure resides.</p>`,
            survivalGuide: makeSG([{n:"Distance Keeping",d:"Keep a minimum distance of 5 meters from any window.",c:"red",l:"Their grab range is surprisingly long."},{n:"Visual Anomalies",d:"If a window shows Baseline Reality, it is a trap.",c:"purple",l:"The Backrooms do not have natural exteriors."}], [{n:"Flashlight",i:"ph-flashlight"}]),
            history: makeHist([{t:"First Sighting in Level 4",d:"A survivor reports encountering a window in a windowless office."},{t:"The Grab",d:"First recorded death via a Window captured on bodycam."}]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY PING...", "> LOCATING ENTITY 2 (WINDOW)", "> WARNING: SPATIAL TEAR DETECTED."]
        },

        "entity3": {
            type: "entity", id: "entity3", title: "Entity 3", name: "Smilers",
            themeColor: "#ffffff", themeHover: "#e2e8f0", themeGlow: "rgba(255, 255, 255, 0.4)", idleAnimation: "animate-pulse",
            tags: [ { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "LIGHT SENSITIVE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgMkg0TTYgMkg4TTMgOEg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Behavioral Matrix": { "Hostility Baseline": "Predatory / Lethal", "Target Preference": "Light sources / Movement" }, "Entity Specific": { "Habitat": "Pitch Black Zones", "Bioluminescence": "High (Face only)", "Thermal Output": "Absolute Zero (-273°C)" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#000] overflow-hidden border-b border-liminal-border cursor-none" id="smiler-container" onmousemove="window.updateSmiler(event, this)"><div class="text-[8px] absolute top-2 left-2 text-liminal-muted font-mono z-20 animate-pulse">MOVE CURSOR TO ILLUMINATE</div><div class="absolute inset-0 bg-black z-10 pointer-events-none" style="background: radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 0%, rgba(0,0,0,0.95) 80%, #000 100%);" id="flashlight-mask"></div><div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-1000 ease-out animate-float" style="left: 60%; top: 40%;"><div class="flex gap-5"><div class="w-4 h-4 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#fff]"></div><div class="w-4 h-4 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#fff]"></div></div><svg width="60" height="30" viewBox="0 0 40 20" class="mt-3 drop-shadow-[0_0_15px_rgba(255,255,255,1)]"><path d="M 0 5 Q 20 20 40 5 L 35 15 Q 20 25 5 15 Z" fill="white" class="animate-flicker" /></svg></div></div>`,
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Smilers are highly aggressive entities known for their glowing white eyes and teeth that manifest exclusively in pitch darkness.</p></div><h3>Description</h3><p>Entity 3, the Smilers, are generally hostile entities that reside in the dark areas of various levels. They are recognizable by their signature glowing white eyes and a wide, toothy grin.</p>`,
            survivalGuide: makeSG([{n:"Flashlight Decoy Protocol",d:"Throw your active light source in the opposite direction.",c:"white",l:"Sprint toward an illuminated area."},{n:"Eye Contact Maintenance",d:"Maintain eye contact while slowly backing away.",c:"gray",l:"Turning your back triggers their predator pursuit instinct."}], [{n:"Breakable Glowsticks",i:"ph-lightbulb"}]),
            history: makeHist([{t:"First Visual Contact",d:"A blurry image of glowing teeth in Level 2 is captured."},{t:"Creation of Smiler Exterminator",d:"Base Alpha scientists formulate a deterrent compound."}]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY SCAN...", "> WARNING: PHOTON EMISSION DETECTED.", "> THERMAL SENSORS: -250C."]
        },

        "entity4": {
            type: "entity", id: "entity4", title: "Entity 4", name: "Deathmoths",
            themeColor: "#22c55e", themeHover: "#16a34a", themeGlow: "rgba(34, 197, 94, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "VARIABLE HOSTILITY", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "HIVE MIND", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMmEyYTIwIi8+PHBhdGggZD0iTTUgMEwyIDVINSBMOCA1WiIgZmlsbD0iI2I4YjgzZSIvPjwvc3ZnPg==",
            specificMetrics: { "Behavioral Matrix": { "Hostility Baseline": "Females Lethal / Males Passive", "Target Preference": "Artificial Light" }, "Entity Specific": { "Origin Level": "Level 5", "Wingspan (Female)": "1.5m - 2.5m" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="absolute inset-0 bg-green-900/10"></div><div class="absolute bottom-2 left-2 text-[8px] font-mono text-green-400 animate-flicker">SONAR TRACKING // WINGBEAT FREQUENCY DETECTED</div></div>`,
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Deathmoths are giant moths that inhabit the Backrooms, split into harmless males and highly lethal females.</p></div><h3>Description</h3><p>Entity 4, Deathmoths, are giant moths found notably in Level 5. The male Deathmoths are relatively small and completely harmless. Female Deathmoths are much larger and extremely hostile.</p>`,
            survivalGuide: makeSG([{n:"Light Discipline",d:"Extinguish all light sources immediately if you hear buzzing.",c:"yellow",l:"Female Deathmoths hunt entirely by tracking illumination."},{n:"Acid Burns",d:"Neutralize acid spit immediately with Almond Water.",c:"red",l:"Ordinary water accelerates the chemical burning process."}], [{n:"Chemical Moth Repellent",i:"ph-bug"}]),
            history: makeHist([{t:"First Sighting in Level 5",d:"Explorers notice abnormally large moths swarming the hotel chandeliers."},{t:"The Moth King Slain",d:"A coordinated B.N.T.G. militia successfully kills a Deathmoth King."}]),
            resonanceLogs: ["> MAPPING AERIAL TRAJECTORIES...", "> HIGH-SPEED KINETIC SIGNATURES LOGGED.", "> FREQUENCY MATCHES WINGBEAT OF ENTITY 4."]
        },

        "entity5": {
            type: "entity", id: "entity5", title: "Entity 5", name: "Clumps",
            themeColor: "#ef4444", themeHover: "#b91c1c", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "AMBUSH PREDATOR", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHBhdGggZD0iTTAgMEwyIDZMNCAxTDggN0wxMCAwIiBzdHJva2U9IiM1NTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Behavioral Matrix": { "Hostility Baseline": "Ambush / Lethal", "Target Preference": "Unaware Wanderers" }, "Entity Specific": { "Origin Level": "Level 2 / Level 8", "Mobility": "High (in vents)" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-red-900/10 mix-blend-color"></div><div class="absolute bottom-2 right-2 text-[8px] font-mono text-red-500 bg-black/80 px-2 py-1 rounded animate-flicker">THERMAL OPTICS // VENTILATION SHAFT</div></div>`,
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Clumps are an amalgamation of arms, legs, and other human body parts bound together in a central mass.</p></div><h3>Description</h3><p>Entity 5, the Clumps, are horrific creatures constructed entirely from human limbs. They excel at climbing, hanging upside down, and squeezing into incredibly tight spaces like ventilation shafts to ambush prey.</p>`,
            survivalGuide: makeSG([{n:"Overhead Awareness",d:"Never walk directly under a loose ventilation grate.",c:"red",l:"Keep to the walls and sides of hallways."},{n:"Fire Vulnerability",d:"Clumps are entirely biological and highly vulnerable to fire.",c:"orange",l:"Molotovs or flares are extremely effective deterrents."}], [{n:"Flares",i:"ph-fire"}]),
            history: makeHist([{t:"The Vent Disappearance",d:"A wanderer on Level 2 vanishes without a trace."},{t:"Biological Analysis",d:"DNA testing reveals it is composed of dozens of missing wanderers."}]),
            resonanceLogs: ["> BOOTING THERMAL IMAGING SUITE...", "> CRITICAL MASS DETECTED: 32 INDIVIDUAL BIOMETRIC SIGNATURES OVERLAPPING.", "> RECOMMENDATION: DO NOT WALK UNDER VENT GRATE."]
        }
    }
};