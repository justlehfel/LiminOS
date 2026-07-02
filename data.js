// ==========================================
// DATA STRUCTURE: LIMINOS ADVANCED ENCYCLOPEDIA & METRIC ENGINE
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
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations, memory loss, paranoia, or manufactured realities." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and physical laws fluctuate violently." },
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative properties." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" }, { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" }, { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
};

const makeLore = (p) => `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light leading-relaxed">${p[0]}</p></div><h3>Description</h3>${p.slice(1).map(x=>`<p class="text-justify leading-loose">${x}</p>`).join('')}`;
const makeEntrances = (e, x) => `<div class="bg-[#050505] border border-liminal-border p-6 rounded-xl font-mono text-sm shadow-inner mt-10"><h4 class="text-liminal-primary font-bold mb-3 border-b border-liminal-border pb-2 flex items-center gap-2"><i class="ph ph-door-open"></i> ENTRANCES</h4><ul class="list-none space-y-3 text-liminal-text mb-6">${e.map(i=>`<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1 flex-shrink-0"></i> <span>${i}</span></li>`).join('')}</ul><h4 class="text-liminal-safe font-bold mb-3 mt-8 border-b border-liminal-border pb-2 flex items-center gap-2"><i class="ph ph-sign-out"></i> EXITS</h4><ul class="list-none space-y-3 text-liminal-text mb-2">${x.map(i=>`<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1 flex-shrink-0"></i> <span>${i}</span></li>`).join('')}</ul></div>`;
const makeSG = (tricks, items) => `<div class="space-y-6 text-sm text-liminal-text max-w-4xl">${tricks.map((t,i)=>`<div class="p-6 bg-black/40 border border-white/5 rounded-xl border-l-4 border-l-${t.c}-500 shadow-xl hover:bg-white/5 transition-all"><h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-3"><span class="bg-${t.c}-500/20 text-${t.c}-400 w-8 h-8 rounded flex items-center justify-center">${i+1}</span> ${t.n}</h4><p class="mb-4 leading-relaxed text-gray-300 text-[15px]">${t.d}</p><div class="bg-${t.c}-900/30 border border-${t.c}-500/20 p-4 rounded text-${t.c}-300 text-xs font-mono shadow-inner"><strong class="text-white mr-2"><i class="ph ph-info"></i> L-CORP TRICK:</strong> ${t.l}</div></div>`).join('')}<div class="mt-10 pt-8 border-t border-white/10"><h4 class="text-white font-bold mb-6 text-2xl tracking-tight flex items-center gap-3"><i class="ph ph-backpack text-liminal-primary"></i> Essential Loadout</h4><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${items.map(item=>`<div class="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 p-4 rounded-lg flex flex-col items-center justify-center gap-3 text-center group hover:border-liminal-primary/50 hover:shadow-[0_0_15px_var(--theme-glow)] transition-all"><i class="ph ${item.i} text-3xl transition-transform group-hover:scale-110" style="color:var(--theme-primary)"></i><span class="font-mono text-xs text-gray-300">${item.n}</span></div>`).join('')}</div></div></div>`;
const makeHist = (logs) => `<div class="ml-4 md:ml-8 mt-6">${logs.map((l,i)=>{
    const isFirst = i === 0; const isLast = i === logs.length - 1;
    const lineClass = isLast ? '' : 'border-l border-liminal-border pb-12';
    const dotClass = isLast ? 'bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse' : isFirst ? 'bg-liminal-primary shadow-[0_0_15px_var(--theme-primary)]' : 'bg-black border-2 border-liminal-muted shadow-sm';
    const tag = isFirst ? 'DATE OF DISCOVERY' : isLast ? 'PRESENT SITUATION' : `ARCHIVE LOG ${i}`;
    const color = isFirst || isLast ? 'text-white' : 'text-liminal-primary';
    return `<div class="relative pl-8 md:pl-12 ${lineClass} group"><div class="absolute -left-[10px] top-1.5 w-5 h-5 rounded-full z-10 ${dotClass} transition-all duration-300 group-hover:scale-125"></div><div class="text-[10px] text-liminal-muted mb-2 font-mono font-bold tracking-widest uppercase flex items-center gap-2"><span class="${color} bg-white/5 px-2 py-0.5 rounded border border-white/10">${tag}</span> <span class="text-gray-500">// ${l.date}</span></div><h4 class="text-white font-bold text-xl mb-3 tracking-tight">${l.t}</h4><p class="text-[15px] text-gray-400 leading-loose">${l.d}</p></div>`;
}).join('')}</div>`;

// 120 METRIC GENERATOR ENGINE (Double the original 60, fully unique per level)
const MetricEngine = {
    pseudoRandom(seed) {
        let x = Math.sin(seed++) * 10000; return x - Math.floor(x);
    },
    generateGlobalMetrics(id, traits) {
        let seed = 0; for (let i=0; i<id.length; i++) seed += id.charCodeAt(i);
        const rand = (min, max) => this.pseudoRandom(seed++) * (max - min) + min;
        const randInt = (min, max) => Math.floor(rand(min, max));
        const bTemp = traits.temp || 20; const bHume = traits.hume || 100;
        
        return [
            { category: "1. Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { 
                "Time Dilation (vs Base)": `1:${(1 + rand(-0.2, 0.2)).toFixed(4)}`, "Temporal Loop Prob": `${rand(0, 15).toFixed(2)}%`, "Entropy Gradient": bHume < 50 ? "Accelerated" : "Stagnant", 
                "Atomic Clock Drift": `${(rand(-20, 20)).toFixed(1)} s/hr`, "Subjective Variance": rand(0,1)>0.5 ? "Low":"High", "Causality Integrity": `${(bHume - rand(0, 5)).toFixed(2)}%`, 
                "Chronon Radiation": `${rand(0.1, 5.0).toFixed(2)} ppm`, "Memory Degradation": `${rand(0, 10).toFixed(1)}%/day`, "Simultaneity Loss": rand(0,1)>0.8 ? "Active":"None", 
                "Temporal Drag Coef": `${rand(0.01, 0.1).toFixed(3)} μs/m`, "Causality Bleed": `${rand(0, 0.05).toFixed(4)}%`, "Paradox Tolerance": bHume < 30 ? "Zero" : "High",
                "Aging Alteration": bHume < 40 ? "Suspended" : "Standard", "Echo Frequency": `${randInt(0, 50)} Hz`, "Sub-Quantum Lag": `${rand(1, 10).toFixed(2)} ms` } },
            
            { category: "2. Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { 
                "Hume Level (Reality)": `${bHume.toFixed(1)} H`, "Kant Counter Avg": `${(bHume/100).toFixed(2)}`, "Euclidean Consistency": `${(bHume - rand(5, 15)).toFixed(1)}%`, 
                "Noclipping Threshold": bHume > 80 ? "Impossible" : "Permeable", "Gravity Variance": `${(9.81 + rand(-2, 2)).toFixed(2)} m/s²`, "Z-Axis Deviation": `${rand(0, 5).toFixed(2)}%`, 
                "Magnetic Declination": `${randInt(0, 360)}°`, "Tesseract Folding": bHume < 50 ? "Active" : "None", "Collision Mesh State": bHume > 90 ? "Solid" : "Fragmented", 
                "Coordinate Drift": `${randInt(0, 100)} m/hr`, "Warp Factor": `${rand(0, 1).toFixed(2)}`, "Gravitational Shear": `${rand(0, 0.5).toFixed(2)} m/s³`, 
                "Dim. Permeability": `${rand(0.01, 0.5).toFixed(3)}%`, "Absolute Void Prox": `${randInt(10, 1000)} AU`, "Geometric Fractalization": bHume < 40 ? "Recursive" : "Linear" } },
            
            { category: "3. Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { 
                "Ambient Temp (Core)": `${bTemp.toFixed(1)} °C`, "Temp Fluctuation": `±${rand(0, 10).toFixed(1)} °C`, "Relative Humidity": `${randInt(10, 100)}%`, 
                "Pressure": `${(101.3 + rand(-10, 10)).toFixed(1)} kPa`, "Air Comp O2": `${(20.9 + rand(-2, 1)).toFixed(1)}%`, "Air Comp N2": `${(78.0 + rand(-1, 1)).toFixed(1)}%`, 
                "Trace Anomalous Gases": `${rand(0, 2).toFixed(2)}%`, "Particulate Matter": `${randInt(10, 500)} μg/m³`, "Ozone Level": rand(0,1)>0.5?"High":"Normal", 
                "Aerosolized Spores": rand(0,1)>0.7?"Lethal":"Safe", "Static Charge Density": `${rand(-50, 50).toFixed(1)} V/m`, "Breathability Index": `${rand(80, 100).toFixed(1)}%`, 
                "Background Rads": `${rand(0.1, 5.0).toFixed(2)} μSv/h`, "Barometric Spike": `±${rand(0, 2).toFixed(2)} kPa`, "Xenon Concentration": `${rand(0, 0.05).toFixed(4)} ppm` } },
            
            { category: "4. Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { 
                "Ambient Hum Freq": `${randInt(30, 200)} Hz`, "Acoustic Decay": rand(0,1)>0.5?"Rapid":"Infinite", "Luminosity Level": `${randInt(0, 1000)} Lux`, 
                "Color Temperature": `${randInt(1000, 10000)} K`, "Total Darkness Zones": `${randInt(0, 100)}%`, "Audio Hallucinations": `${rand(0, 50).toFixed(1)}% Risk`, 
                "UV Radiation Index": `${randInt(0, 11)}`, "Infrared Signature": rand(0,1)>0.5?"Anomalous":"Baseline", "Decibel Baseline": `${randInt(10, 120)} dB`, 
                "Sub-sonic Interference": bHume < 60 ? "Active" : "None", "Echo Delay Variance": `${rand(0, 2).toFixed(2)}s`, "Auditory Mimicry": bHume < 50 ? "Present" : "Absent", 
                "Architectural Resonance": `${randInt(100, 500)} Hz`, "Photon Degradation": `${rand(0, 5).toFixed(2)}% /m`, "Visual Static Output": bHume < 30 ? "High" : "Zero" } },
            
            { category: "5. Material & Biological", icon: "ph-flask", color: "text-green-400", data: { 
                "Toxicity Level": `${rand(0, 10).toFixed(1)}%`, "Pathogen Strain": randInt(0,1)>0.5?"Unknown":"Earth-Standard", "Mold Spore Count": `${randInt(0, 1000)} /m³`, 
                "Structural Integrity": `${rand(10, 100).toFixed(1)}%`, "Entity Base Density": `${rand(0, 5).toFixed(2)} per km²`, "Organic Decay Rate": `${(1 + rand(-0.5, 2)).toFixed(2)}x`, 
                "Nutrient Availability": `${randInt(0, 100)}/100`, "Dehydration Risk": bTemp > 30 ? "Extreme" : "Normal", "Flora Present": rand(0,1)>0.8?"Yes":"No", 
                "Surface Toxicity": `${rand(0, 5).toFixed(2)}%`, "Arsenic Saturation": `${rand(0, 2).toFixed(2)} mg/m²`, "Micro-Density": `${randInt(1000, 3000)} kg/m³`, 
                "Assimilation Rate": `${rand(0, 5).toFixed(2)}%/hr`, "Decay Sub-routine": bHume < 40 ? "Active" : "Dormant", "Biome Shift Potential": `${rand(0, 10).toFixed(1)}%` } },
            
            { category: "6. Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { 
                "Base Threat Level": `${randInt(0, 5)}/5`, "Sanity Drain Rate": `${rand(0, 10).toFixed(1)}% /hr`, "Isolation Factor": `${randInt(10, 100)}%`, 
                "Radio Comm Integrity": `${randInt(0, 100)}%`, "GPS Functionality": bHume > 80 ? "Online" : "Offline", "Electrical Avail": `${randInt(0, 100)}%`, 
                "Rescue Probability": `${randInt(0, 100)}%`, "Resource Respawn": bHume > 70 ? "Active" : "Null", "Shelter Viability": `${randInt(0, 100)}/100`, 
                "Navigation Difficulty": `${randInt(1, 10)}/10`, "Psy-Erosion Rate": `${rand(0, 5).toFixed(2)}x`, "Entity Detection Range": `${randInt(5, 50)}m`, 
                "Wi-Fi Signal Strength": randInt(0,1)>0.8?"Moderate":"Zero", "Outpost Viability": bHume > 80 ? "Approved" : "Denied", "L-Corp Node Status": "Online" } },
                
            { category: "7. Electromagnetic & Radiative", icon: "ph-lightning", color: "text-indigo-400", data: { 
                "EM Interference": `${rand(0, 100).toFixed(1)}%`, "Microwave Background": `${rand(2.7, 5.0).toFixed(2)} K`, "Alpha Rad Spikes": `${randInt(0, 10)} /hr`, 
                "Beta Decay Particles": `${rand(0, 1).toFixed(3)} Bq`, "Gamma Shielding": `${randInt(10, 100)}%`, "Magnetic Pole Reversal": bHume < 50 ? "Constant" : "None", 
                "Static Discharges": `${randInt(0, 50)} /min`, "RFID Attenuation": `${rand(10, 90).toFixed(1)} dB`, "Bluetooth Permeability": `${randInt(0, 100)}%`, 
                "Cellular Network": bHume > 90 ? "Ghost Signal" : "Dead", "Ionizing Rad": `${rand(0, 0.5).toFixed(3)} Sv`, "Neutrino Flux": `${randInt(100, 1000)} cm²s⁻¹`, 
                "Tesla Coil Output": `${randInt(0, 1000)} kW`, "EMP Detonation Risk": `${rand(0, 10).toFixed(1)}%`, "Geomagnetic Storms": bHume < 40 ? "Frequent" : "Rare" } },

            { category: "8. Cognitive & Noospheric", icon: "ph-brain", color: "text-fuchsia-400", data: { 
                "Noospheric Density": `${rand(10, 200).toFixed(1)} N/v`, "Memetic Contagion": `${rand(0, 15).toFixed(1)}%`, "Amnestic Properties": bHume < 50 ? "Active" : "None", 
                "Ego-Death Threshold": `${rand(1, 24).toFixed(1)} hrs`, "Subconscious Bleed": `${rand(0, 10).toFixed(2)}%`, "Collective Unconscious Link": bHume < 30 ? "Severed" : "Intact", 
                "Hallucinogenic Purity": `${rand(0, 100).toFixed(1)}%`, "Pareidolia Effect": `${randInt(10, 100)}%`, "Linguistic Degradation": `${rand(0, 5).toFixed(1)}% /hr`, 
                "Ideatic Drift": `${rand(0, 2).toFixed(2)} I/s`, "Conceptual Anchoring": `${randInt(10, 100)}%`, "Thought Broadcasting": bHume < 20 ? "Lethal" : "Zero", 
                "Neurological Overclock": `${rand(0, 15).toFixed(1)}%`, "Synaptic Misfire Rate": `${rand(0, 100).toFixed(1)} /min`, "Cognitohazard Class": bHume < 60 ? "Class IV" : "Class I" } }
        ];
    }
};

const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby", baseTraits: { temp: 22.4, hume: 82.4 },
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 7492, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [ { name: "Gateway Node", color: "#9ca3af", icon: "⬇" }, { name: "Almond Puddle", color: "#60a5fa", icon: "💧" }, { name: "Wall Tear", color: "#ef4444", icon: "⚡" }, { name: "Fluorescent Trap", color: "#eab308", icon: "💡" }, { name: "Carpet Sink", color: "#22c55e", icon: "🕳" }, { name: "Null Zone", color: "#a855f7", icon: "🌪" }, { name: "Manila Door", color: "#f97316", icon: "🚪" }, { name: "Loop Start", color: "#14b8a6", icon: "🔄" }, { name: "M.E.G. Marker", color: "#3b82f6", icon: "🛡" } ] },
            specificMetrics: { "Level 0 Proprietary": { "Carpet Saturation Depth": "1.2cm", "Wallpaper Decay Rate": "0%", "Fluorescent Flicker Rate": "0.4 Hz", "Must Scent Density": "High", "Layout Gen Speed": "Instant", "Electromagnetic Spike": "Random" } },
            lore: makeLore([
                "Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in. It is widely considered the tutorial to the horrors that lie beneath, though it kills through isolation rather than violence.",
                "Level 0 is an expansive, non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout, mono-yellow wallpaper, and damp carpets. The constant hum-buzz emitted by the ceiling lights permeates every area. The layout consists of randomly segmented rooms and hallways that defy conventional architectural logic. Compasses spin wildly here, GPS devices fail entirely, and drawing a map is a futile endeavor as the architecture subtly shifts when unobserved.",
                "Due to the highly anomalous spatial properties, wanderers navigating Level 0 will almost never encounter another human being. The resulting absolute isolation induces rapid psychological deterioration. This often leads to severe paranoia and auditory hallucinations where the relentless hum-buzz begins to mimic human whispers or the voices of loved ones. Physical entities are exceptionally rare here. Therefore, the primary threat to survival in Level 0 is starvation, profound dehydration from the heat of the lights, and the crushing psychological weight of the infinite yellow expanse."
            ]) + makeEntrances(
                ["Accidental noclipping through a shadow in Baseline Reality.", "Attempting to touch a glitched object in the real world.", "Falling asleep in an empty, windowless room on Earth.", "Stepping through a rusted door frame in Level -1.", "Opening a corrupted file on an old PC."], // 5
                ["Noclipping through an unusually dark section of wallpaper transports the wanderer to Level 1.", "Finding a rare, standard wooden door labeled 'Manila' leads to the Manila Room.", "Walking perfectly straight for 400 miles may glitch the user into Level 11.", "Falling through a rotted section of floorboard leads to Level 27.", "Touching a flickering fluorescent tube teleports you to Level 3."] // 5
            ),
            survivalGuide: makeSG(
                [
                    {n:"Psychological Anchoring", d:"The hum-buzz and mono-yellow aesthetic induce rapid monophobia.", c:"purple", l:"Carry a mechanical watch. The ticking overrides the hum-buzz."},
                    {n:"Resource Management", d:"There is absolutely no clean water natively generated here.", c:"yellow", l:"Search specifically for pooling condensation near structural anomalies."},
                    {n:"Wall Tracing Protocol", d:"Navigating a non-Euclidean maze without markers causes endless looping.", c:"teal", l:"Trace the left wall with your hand to break spatial recursion loops."},
                    {n:"Energy Conservation", d:"Running drastically increases caloric burn and accelerates panic.", c:"blue", l:"Maintain a strict walking pace of 3mph. Do not sprint."},
                    {n:"Hallucination Rejection", d:"You will hear voices of people you know calling for help.", c:"fuchsia", l:"Bite your lip hard. Physical pain disrupts the cognitohazard loop."}
                ], 
                [ {n:"Analog Watch",i:"ph-watch"}, {n:"Almond Water",i:"ph-drop"}, {n:"Chalk",i:"ph-pencil-simple"}, {n:"Boots",i:"ph-boot"}, {n:"Blindfold",i:"ph-eye-closed"}, {n:"Earplugs",i:"ph-ear-slash"}, {n:"Backpack",i:"ph-bag"}, {n:"Notepad",i:"ph-book"} ] // 8
            ),
            history: makeHist([
                {date: "1991-08-14", t: "First Archival Record", d: "An anonymous user uploaded the first verified visual telemetry of Level 0 to a rudimentary web forum. The image was analyzed and confirmed to contain no digital manipulation."},
                {date: "1998-02-03", t: "Project 'Yellow Wallpaper'", d: "The first batch of unmanned, tethered probes were sent through a localized spatial tear in an abandoned mall. Telemetry confirmed the exact Hume level drop."},
                {date: "2004-11-21", t: "Spatial Paradox Recorded", d: "An L-Corp drone successfully mapped a hallway that intersected itself at a perfect 90-degree angle without connecting to its own origin point."},
                {date: "2012-06-08", t: "M.E.G. Isolation Study", d: "A volunteer spent 40 hours inside a tethered zone. The subject reported hearing the ceiling lights speak in the voice of their deceased mother."},
                {date: "2026-07-02", t: "L-Corp Outpost Zero", d: "L-Corp has successfully stabilized a micro-tear allowing for consistent, one-way insertion of field agents into the Lobby. Entity density remains flat at zero."}
            ]),
            resonanceLogs: ["> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> EUCLIDEAN MESH REJECTED.", "> CAUSALITY BLEED DETECTED.", "> SCAN COMPLETE."]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone", baseTraits: { temp: 15.0, hume: 95.2 },
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 99120, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [ { name: "M.E.G. Alpha", color: "#22c55e", icon: "🛡" }, { name: "Supply Crate", color: "#3b82f6", icon: "📦" }, { name: "Flickering Light", color: "#eab308", icon: "💡" }, { name: "Fog Choke Point", color: "#a855f7", icon: "🌫" }, { name: "Hound Pack", color: "#ef4444", icon: "🐾" }, { name: "Generator", color: "#f97316", icon: "⚡" }, { name: "Concrete Pillar", color: "#9ca3af", icon: "🏢" }, { name: "Chalk Marker", color: "#06b6d4", icon: "✏" }, { name: "Water Puddle", color: "#60a5fa", icon: "💧" }, { name: "B.N.T.G Vault", color: "#eab308", icon: "🏦" }, { name: "Skin-Stealer", color: "#ec4899", icon: "👤" }, { name: "False Door", color: "#14b8a6", icon: "🚪" } ] },
            specificMetrics: { "Level 1 Proprietary": { "Concrete Density": "2400 kg/m³", "Fog Metallic Content": "14 ppm", "Crate Spawn Algorithm": "Fibonacci", "Blackout Duration": "14.2 Hours", "Rebar Rust Rate": "Minimal", "Generator Output": "220V", "Puddle Depth": "2.4cm", "Airborne Dust": "Low" } },
            lore: makeLore([
                "Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and a constant, low-hanging fog that obscures the floor. It is the first truly habitable zone wanderers encounter.",
                "Level 1 is an incredibly vast, sprawling warehouse. Unlike Level 0, this level possesses a consistent, albeit fluctuating, supply of water and electricity. This infrastructure allows for indefinite habitation by wanderers, provided that appropriate precautions are taken. Crates of supplies appear and disappear randomly across the concrete floor, containing everything from car batteries to Almond Water, medical supplies, and occasionally useless detritus like human hair.",
                "Level 1 is notably the home of M.E.G. Base Alpha, one of the most heavily fortified survivor outposts in the Backrooms. The lighting here is prone to severe flickering and rolling blackouts. During these pitch-black periods, hostile entities such as Smilers, Hounds, and Facelings frequently manifest out of the darkness, turning the otherwise habitable zone into a lethal hunting ground."
            ]) + makeEntrances(
                ["Noclipping through a dark patch of wall in Level 0.", "Opening the main exit door in the Manila Room.", "Falling through the ceiling of Level 2 (Rare).", "Entering a painted concrete door in Level 4.", "Wandering too far into the basements of Level 11."],
                ["Walking down an excessively long hallway transitions smoothly into Level 2.", "Entering a hole in the concrete wall drops the wanderer into Level 19.", "Unlocking a specific red shipping container leads to Level 3.", "Sleeping inside a supply crate sometimes wakes you up in Level 4.", "Painting a door on the wall with chalk and walking through it leads to Level 0."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Outpost Proximity", d:"Level 1 is home to M.E.G. Base Alpha.", c:"green", l:"Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha."},
                    {n:"The Darkness Protocol", d:"When lights flicker, entities spawn.", c:"yellow", l:"Power grids follow a determinable 14-hour cycle. Sync your watch."},
                    {n:"Crate Scavenging", d:"Supply crates spawn dynamically.", c:"blue", l:"Pry open wooden crates with red markings; they contain food."},
                    {n:"Fog Evasion", d:"The fog hides ankle-biting entities.", c:"red", l:"Climb atop large crates to stay above the condensation line."},
                    {n:"Audio Masking", d:"The fog dampens sound, but metallic clangs travel miles.", c:"purple", l:"Wrap your boots in cloth to prevent your footsteps from echoing."}
                ], 
                [ {n:"Flashlight",i:"ph-flashlight"}, {n:"Respirator",i:"ph-mask-water"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Blue Chalk",i:"ph-pencil"}, {n:"Knife",i:"ph-knife"}, {n:"Batteries",i:"ph-battery-full"}, {n:"Almond Water",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"Radio",i:"ph-radio"} ]
            ),
            history: makeHist([
                {date: "1994-05-11", t: "First Successful Transition", d: "A wanderer posted a blurry photo of a concrete pillar on an obscure imageboard, marking the discovery of Level 1."},
                {date: "1999-08-22", t: "First Entity Encounter", d: "A video log was recovered showing a wanderer being chased by a Hound through the fog."},
                {date: "2001-09-02", t: "Establishment of Base Alpha", d: "The Major Explorer Group (M.E.G.) successfully fortified a large quadrant near a reliable water spawn."},
                {date: "2008-12-14", t: "The Long Blackout", d: "A 72-hour power failure resulted in massive entity incursions and heavy casualties. Over 40 wanderers were lost."},
                {date: "2015-04-20", t: "Crate Algorithm Cracked", d: "L-Corp scientists decoded the spatial spawn logic of the wooden crates."},
                {date: "2026-07-02", t: "Base Alpha Thriving", d: "Current population exceeds 800 active residents. The fog toxicity levels remain stable."}
            ]),
            resonanceLogs: ["> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]", "> ENTITY PROXIMITY SENSORS ACTIVE.", "> SCAN COMPLETE."]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams", baseTraits: { temp: 40.0, hume: 75.0 },
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: { seed: 8847, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.05, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [ { name: "Superheated Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Burst Pipe", color: "#60a5fa", icon: "💧" }, { name: "Dead End", color: "#9ca3af", icon: "🛑" }, { name: "Smiler Zone", color: "#ffffff", icon: "👁" }, { name: "Locked Fire Door", color: "#f97316", icon: "🚪" }, { name: "Maintenance Hatch", color: "#22c55e", icon: "🕳" }, { name: "Boiler Machine", color: "#eab308", icon: "⚙" }, { name: "M.E.G. Cache", color: "#3b82f6", icon: "🛡" }, { name: "Thermal Anomaly", color: "#ec4899", icon: "🌡" }, { name: "Acid Sludge", color: "#14b8a6", icon: "🧪" }, { name: "Rusty Ladder", color: "#71717a", icon: "🪜" }, { name: "Steam Vent", color: "#f43f5e", icon: "💨" }, { name: "Crawling Space", color: "#8b5cf6", icon: "🕷" } ] },
            specificMetrics: { "Level 2 Proprietary": { "Pipe Thermal Output": "Max 43°C", "Steam Pressure Level": "1200 PSI", "Iron Oxidation Rate": "Accelerated", "Acoustic Pipe Groans": "90 dB", "Hallway Width": "0.8m to 1.5m", "Acidic Sludge Flow": "2 L/min", "Ventilation Draft": "Hot" } },
            lore: makeLore([
                "Level 2 mainly consists of dark, grey, concrete maintenance tunnels stretching endlessly, filled with scalding hot pipes.",
                "Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with rusted pipes lining the walls and ceilings. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). The intense heat causes rapid dehydration, forcing wanderers to move quickly through the suffocating atmosphere. The air is thick with steam and smells heavily of oxidized iron and sulfur.",
                "The entity density rises sharply here. Smilers lurk in the dark stretches of the tunnels, while Clumps utilize the overhead ventilation shafts to ambush unsuspecting prey. The constant groaning of expanding metal pipes creates a terrifying soundscape that easily masks the approach of Hounds. Finding a way out is paramount, as the heat and entities will overwhelm any prepared group within days."
            ]) + makeEntrances(
                ["Walking down a long, dark concrete hallway in Level 1.", "Noclipping through a hot boiler in Level 5.", "Entering a rusted maintenance door in Level 4.", "Falling through a broken grate in Level 3.", "Opening a red shipping container in Level 1."],
                ["Finding an unlocked fire exit door leads directly to Level 3.", "Entering a colorful office door leads to Level 4.", "Noclipping into a perfectly clean pipe leads to Level 28.", "Riding an extremely rare freight elevator down leads to Level 5.", "Fainting from heat exhaustion sometimes wakes you up in Level 0."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Heat Stroke Prevention", d:"The ambient temperature in Level 2 will rapidly dehydrate wanderers.", c:"red", l:"Stay close to the floor where the temperature is cooler."},
                    {n:"Smiler Evasion", d:"If you spot a Smiler, do not use a flashlight.", c:"purple", l:"Throw a glowstick down an intersecting corridor to distract them."},
                    {n:"Ventilation Awareness", d:"Clumps hide in the ceiling vents.", c:"yellow", l:"Never stand directly under a dripping grate."},
                    {n:"Burn Treatment", d:"Bursting steam pipes are common.", c:"cyan", l:"Carry burn salve; Almond Water is less effective on thermal burns."},
                    {n:"Avoid Black Pipes", d:"Pipes painted black contain a highly toxic, acidic sludge.", c:"green", l:"Do not try to drink from leaking black pipes."}
                ],
                [ {n:"Thermometer",i:"ph-thermometer"}, {n:"Thermal Jug",i:"ph-drop"}, {n:"Burn Salve",i:"ph-first-aid"}, {n:"Glowsticks",i:"ph-lightbulb"}, {n:"Heat Gloves",i:"ph-hand-palm"}, {n:"Heavy Crowbar",i:"ph-wrench"}, {n:"Cooling Towel",i:"ph-t-shirt"}, {n:"Thick Boots",i:"ph-boot"}, {n:"Compass",i:"ph-compass"}, {n:"Respirator",i:"ph-mask-water"} ]
            ),
            history: makeHist([
                {date: "1996-03-12", t: "The Heatwave Discovery", d: "Explorers breached an iron door from Level 1, immediately encountering extreme temperatures."},
                {date: "1998-09-05", t: "First Smiler Casualty", d: "A wanderer's camera was recovered near a dark stretch of hallway."},
                {date: "2000-07-28", t: "Pipe Rupture Event", d: "A 40-mile stretch of piping ruptured simultaneously, flooding the corridors."},
                {date: "2007-02-19", t: "Clump Infestation Mapped", d: "M.E.G. confirmed Entity 5 populations thrive in the high-humidity environment."},
                {date: "2021-08-11", t: "L-Corp Thermal Scan", d: "Deployment of autonomous rovers successfully mapped temperature gradients."},
                {date: "2026-07-02", t: "Transit Only Status", d: "Due to rising thermal metrics (averaging 40°C), Level 2 is officially classified as a transit-only zone."}
            ]),
            resonanceLogs: ["> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS.", "> MULTIPLE ENTITY SIGNATURES DETECTED IN VENTILATION.", "> PROCEED WITH EXTREME CAUTION."]
        },
        
        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station", baseTraits: { temp: 25.0, hume: 70.0 },
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: { seed: 1042, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Skin-Stealer", color: "#ec4899", icon: "👤" }, { name: "Elevator", color: "#22c55e", icon: "🚪" }, { name: "Live Wire Trap", color: "#eab308", icon: "〰" }, { name: "Machinery Room", color: "#9ca3af", icon: "⚙" }, { name: "M.E.G. Gamma", color: "#3b82f6", icon: "🛡" }, { name: "Dark Sector", color: "#000000", icon: "👁" }, { name: "Breaker Switch", color: "#f97316", icon: "🎛" }, { name: "Spilled Acid", color: "#14b8a6", icon: "🧪" } ] },
            specificMetrics: { "Level 3 Proprietary": { "Ambient Voltage Level": "10,000V", "Electromagnetic Inter.": "Severe", "Metal Grating Ox.": "5%", "Machinery RPM": "14,000", "Spark Frequency": "0.8 Hz", "Transformer Heat": "High", "Cable Insulation": "Failing", "Grid Load Variance": "Erratic" } },
            lore: makeLore([
                "Level 3 is a series of long, dark, twisting hallways resembling an electrical station. It is a severe difficulty spike and acts as a massive death trap for unprepared wanderers.",
                "The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible. The architecture is a chaotic maze of brick, metal grates, and heavy machinery that serves no logical purpose. Puddles of unknown fluids frequently pool on the floor, posing a severe electrocution hazard due to hanging live wires. The magnetic interference is so strong that compasses explode, and any brought electronic devices are instantly fried.",
                "The entity density in Level 3 is extraordinarily high, classifying it as one of the most dangerous early levels. Skin-Stealers, Hounds, and Smilers roam freely in massive swarms, completely unfazed by the noise or electricity. Survival here relies heavily on stealth, visual tracking, and rapid traversal. Establishing any form of permanent base has proven impossible; M.E.G. Base Gamma was wiped out in 72 hours."
            ]) + makeEntrances(
                ["Opening a fire exit door in Level 2.", "Unlocking a specific red shipping container in Level 1.", "Crawling through a dense thicket of black wires in Level 6.", "Opening a breaker box in Level 11 and crawling inside.", "Falling through a vent grate in Level 2."], // 5
                ["Finding a working elevator and riding it upwards takes you to Level 4.", "Entering a specific maintenance hatch drops you into Level 5.", "Noclipping through a brick wall while being electrocuted leads to Level 12.", "Finding a rusted car in a wide hallway leads to Level 69.", "Opening a door labeled 'Stairs' drops you into Level 7."] // 5
            ),
            survivalGuide: makeSG(
                [
                    {n:"High Entity Density", d:"Do not attempt to fight. You are severely outnumbered by Skin-Stealers and Hounds.", c:"red", l:"Use the deafening machinery noise to mask your sprinting footsteps. Never engage."},
                    {n:"Electrocution Hazard", d:"Exposed live wires hang from the ceiling and touch the metal grates.", c:"yellow", l:"Stay in the exact dead-center of the hallways. Do not step in any liquid puddles."},
                    {n:"Elevator Access", d:"Elevators are the only reliable and safe extraction point to Level 4.", c:"blue", l:"Check the elevator cables with your flashlight before entering; entities frequently sever them."},
                    {n:"Skin-Stealer Evasion", d:"They wear human skin and mimic voices.", c:"fuchsia", l:"If you see a human, check their blood. Skin-Stealers have clear, translucent blood."},
                    {n:"EMP Utilization", d:"Entities swarm when cornered.", c:"purple", l:"Detonate an EMP to fry the local lights, blinding Hounds and allowing you to escape in the dark."}
                ],
                [ {n:"Rubber Boots",i:"ph-boot"}, {n:"EMP Grenades",i:"ph-lightning"}, {n:"Ear Protection",i:"ph-ear"}, {n:"Inspection Mirror",i:"ph-magnifying-glass"}, {n:"Medkit",i:"ph-first-aid"}, {n:"Thick Gloves",i:"ph-hand-palm"}, {n:"High-Lumen Flashlight",i:"ph-flashlight"}, {n:"Adrenaline",i:"ph-syringe"}, {n:"Weapon (Melee)",i:"ph-sword"}, {n:"Wire Cutters",i:"ph-scissors"} ]
            ),
            history: makeHist([
                {date: "1997-10-30", t: "The Death Trap Discovery", d: "Explorers from Level 2 entered a fire exit, realizing they were trapped in a high-threat zone. The entire squad was wiped out by a Hound pack."},
                {date: "2001-04-12", t: "Skin-Stealer Documentation", d: "The first verified footage of a Skin-Stealer mimicking a human voice was recorded here by a hiding survivor."},
                {date: "2003-05-15", t: "Base Gamma Overrun", d: "M.E.G. attempted to establish an outpost (Base Gamma) near a cluster of elevators. It was destroyed by a coordinated swarm of Skin-Stealers in 72 hours."},
                {date: "2010-01-22", t: "Elevator Bypass Found", d: "A working elevator was documented, allowing survivors to bypass the worst sectors and escape to Level 4."},
                {date: "2016-08-09", t: "Voltage Spike Anomaly", d: "The entire level surged, temporarily incinerating a large portion of the entity population."},
                {date: "2026-07-02", t: "Elevator Grids Failing", d: "Telemetry shows 40% of known elevators to Level 4 have lost power. Entity swarms are clustering near the remaining functional lifts."}
            ]),
            resonanceLogs: ["> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]", "> MULTIPLE HOSTILE BIOMETRICS PINGED.", "> ABORTING ACTIVE SCAN TO PREVENT DETECTION."]
        },
        
        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office", baseTraits: { temp: 21.0, hume: 99.0 },
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.05, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Entity", color: "#ef4444", icon: "🪟" }, { name: "Vending Machine", color: "#eab308", icon: "🍫" }, { name: "Safe Cubicle", color: "#10b981", icon: "🛏" }, { name: "Stairwell", color: "#9ca3af", icon: "🪜" }, { name: "Filing Cabinet", color: "#8b5cf6", icon: "📁" }, { name: "Server Room", color: "#06b6d4", icon: "💻" }, { name: "Break Room", color: "#f97316", icon: "☕" }, { name: "L-Corp Terminal", color: "#ec4899", icon: "🖥" }, { name: "Paper Jam", color: "#f43f5e", icon: "📄" }, { name: "Copier Machine", color: "#14b8a6", icon: "🖨" }, { name: "Locked Boardroom", color: "#d97706", icon: "🚪" }, { name: "Coffee Puddle", color: "#64748b", icon: "☕" }, { name: "Elevator Bank", color: "#a855f7", icon: "🛗" }, { name: "Fluorescent Buzz", color: "#eab308", icon: "💡" }, { name: "Desolate Hall", color: "#334155", icon: "🛣" }, { name: "Trading Post", color: "#10b981", icon: "💰" }, { name: "Medical Cache", color: "#ef4444", icon: "💊" }, { name: "Janitor Closet", color: "#0ea5e9", icon: "🧹" } ] },
            specificMetrics: { "Level 4 Proprietary": { "Cubicle Density": "75%", "Carpet Cleanliness": "Pristine", "Fluorescent Flicker Rate": "0%", "Vending Restock Rate": "14 Days", "Wi-Fi Signal Strength": "Moderate", "Ink Toner Presence": "Infinite", "Coffee Spoilage Time": "Never", "Window Trap Ratio": "1 in 500" } },
            lore: makeLore([
                "Level 4 resembles an empty office building. It is completely safe, highly stable, and devoid of most roaming entities, acting as a sanctuary.",
                "Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. It represents a massive psychological relief for wanderers who have just survived the brutal, chaotic conditions of Level 3. Fresh Almond Water is widely available in water coolers scattered throughout the office, and vending machines frequently restock with edible snacks. The ambient temperature is a perfectly stable 21°C, and the air smells faintly of fresh printer paper and ozone.",
                "Entities are almost completely nonexistent here, making it a primary hub for human civilization and the location of M.E.G. Base Omega. The only major threat comes from 'Windows' (Entity 2), which disguise themselves as normal office windows looking out onto a fake, rainy exterior. Wanderers must rigorously avoid approaching these traps. Aside from this, Level 4 is the best place in the entire Backrooms to sleep, heal, and trade supplies."
            ]) + makeEntrances(
                ["Exiting an elevator ascending from Level 3.", "Opening an office door in Level 2.", "Falling through the ceiling of Level 5.", "Sleeping inside a supply crate in Level 1.", "Entering a glass door in Level 11.", "Noclipping through a desk in Baseline Reality.", "Crawling through a perfectly clean vent in Level 2.", "Walking through a white door in Level 0."], // 8
                ["Walking down a grand staircase transitions smoothly to Level 5.", "Noclipping through a filing cabinet leads to Level 6.", "Drinking from a poisoned water cooler transports you to Level 7.", "Jumping out of a real window drops you into Level 11.", "Finding a heavy vault door leads to Level 10.", "Opening a boardroom door sometimes leads to Level 0.", "Crawling into the ceiling tiles drops you into Level 19."] // 7
            ),
            survivalGuide: makeSG(
                [
                    {n:"Rest and Resupply", d:"Level 4 is the ideal place to recover sanity and heal wounds.", c:"blue", l:"Sleep in the center of cubicles; they naturally block out ambient noise and hide you from sight."},
                    {n:"The Window Threat", d:"Despite the safety, Windows (Entity 2) are a lethal trap.", c:"purple", l:"Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter."},
                    {n:"Vending Machines", d:"Break rooms contain functioning anomalous vending machines.", c:"green", l:"Coins found in desk drawers can be used to acquire protein bars. Do not eat neon-colored snacks."},
                    {n:"Base Omega Navigation", d:"M.E.G. forces patrol the area extensively.", c:"cyan", l:"Follow sticky notes left on computer monitors to find civilized outposts and trade hubs."},
                    {n:"Sanity Restoration", d:"The stable geometry repairs cognitive damage.", c:"fuchsia", l:"Sit down and read the blank papers found on desks; the act of focusing grounds your mind."},
                    {n:"Server Room Temperatures", d:"The server rooms are freezing cold and contain complex electronics.", c:"teal", l:"Use them to store perishable food, but do not sleep in them due to hypothermia risk."}
                ],
                [ {n:"Empty Canteens",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"Backpack",i:"ph-bag"}, {n:"Notebook",i:"ph-book"}, {n:"Comfort Items",i:"ph-heart"}, {n:"First Aid",i:"ph-first-aid"}, {n:"Coins",i:"ph-coin"}, {n:"Watch",i:"ph-watch"}, {n:"Map",i:"ph-map"}, {n:"Radio",i:"ph-radio"} ]
            ),
            history: makeHist([
                {date: "1998-11-04", t: "The Ascent from Level 3", d: "A group of battered wanderers took an elevator up from Level 3 and found this paradise. They immediately fell asleep on the carpet for 14 hours unbothered, reporting a complete restoration of sanity."},
                {date: "1999-06-15", t: "First Almond Water Discovery", d: "A wanderer tested the water cooler fluid. It tasted faintly of vanilla and almond, and miraculously cured their infected wounds."},
                {date: "2002-04-11", t: "Base Omega Founded", d: "M.E.G. relocated primary civilian housing here due to the total lack of entities. It quickly became the largest population center in the lower levels."},
                {date: "2005-02-18", t: "The First Trade Guild", d: "B.N.T.G. established their central economy here, using Almond Water and AA batteries as standard currency."},
                {date: "2009-07-22", t: "Window Trap Mapped", d: "The correlation between fake rain visuals and Entity 2 was definitively verified after a B.N.T.G. merchant was pulled through the glass."},
                {date: "2024-02-18", t: "L-Corp Server Farm", d: "Proprietary data centers were installed in the abandoned server rooms. The ambient 21°C temperature is perfect for hardware cooling, establishing the LiminOS backbone."},
                {date: "2026-07-02", t: "Population Boom", d: "Level 4 currently hosts over 5,000 humans. Trade is booming. L-Corp nodes detect zero Hume fluctuations, affirming its status as a permanent sanctuary."}
            ]),
            resonanceLogs: ["> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99% STABLE.", "> NO HOSTILE BIOMETRICS DETECTED.", "> UPLOADING TELEMETRY."]
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "entity1", title: "Entity 1", name: "The Cameraman", baseTraits: { temp: 20.0, hume: 100.0 },
            themeColor: "#9ca3af", themeHover: "#6b7280", themeGlow: "rgba(156, 163, 175, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" }, { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            specificMetrics: { "Entity 1 Proprietary": { "Flash Luminosity": "15,000 Lumens", "Audio Shutter Volume": "80 dB", "Camera Make": "Unknown/Anomalous", "Interaction Range": "Omnipresent", "Data Injection Speed": "Instantaneous", "Footprint Generation": "Zero", "Thermal Trace": "Zero" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div><div class="relative z-10 flex flex-col items-center animate-float"><div class="w-32 h-32 rounded-full border-2 border-gray-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast shadow-[0_0_20px_rgba(156,163,175,0.3)]"><i class="ph ph-camera text-6xl text-gray-400 opacity-80"></i></div><h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3><p class="text-xs text-gray-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p></div></div>`,
            lore: makeLore([
                "The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms.",
                "The process by which it operates is entirely unknown, but it serves as the only logical explanation for perfectly framed images appearing instantaneously in databases across M.E.G. and L-Corp terminals. The entity has never been physically observed, and its presence is only denoted by a sudden flash of light, followed by the sound of a mechanical shutter.",
                "It is completely non-hostile and seems entirely focused on documentation. Any attempt to trap, communicate with, or attack the entity results in the wanderer finding themselves completely alone, with a polaroid picture of themselves left on the floor. It prefers photographing liminal transition spaces."
            ]) + makeEntrances(
                ["Appears randomly across any level without warning.", "Manifests instantly if a wanderer discovers a previously uncharted transition point.", "Triggers when a wanderer is perfectly still for 48 hours.", "Following a trail of polaroids dropped on the floor.", "Staring deeply into the flash of a broken camera."],
                ["Fades out of reality within 1.4 seconds of taking a photograph.", "Leaves behind a polaroid film that acts as an anchor to reality.", "Blinds the wanderer before disappearing.", "Teleports the wanderer to the last place they were photographed.", "Disintegrates into silver nitrate dust when touched."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Non-Intervention",d:"Engagement is strictly prohibited.",c:"blue",l:"Allow the entity to curate the database in peace. Do not attack the flash."},
                    {n:"Equipment Handling",d:"Do not touch random cameras found on tripods.",c:"gray",l:"They belong to the entity. Touching them induces localized temporal loops."},
                    {n:"Strike a Pose",d:"If you hear the shutter, freeze.",c:"green",l:"Moving during the flash can cause portions of your body to physically blur out of reality."},
                    {n:"Information Drops",d:"Polaroids left behind often show the nearest safe exit.",c:"purple",l:"Study the photo carefully; the lighting angle hints at the correct path."},
                    {n:"Ignore the Flash Blindness",d:"The flash is 15,000 lumens and will blind you temporarily.",c:"yellow",l:"Do not run while blind; wait 30 seconds for your vision to return to avoid noclipping."}
                ], 
                [ {n:"Camera",i:"ph-camera"}, {n:"Polaroid Film",i:"ph-image"}, {n:"Sunglasses",i:"ph-sunglasses"}, {n:"Journal",i:"ph-book"}, {n:"Pen",i:"ph-pencil"}, {n:"Flashlight",i:"ph-flashlight"}, {n:"Watch",i:"ph-watch"}, {n:"Compass",i:"ph-compass"}, {n:"Almond Water",i:"ph-drop"} ] // 9
            ),
            history: makeHist([
                {date: "1991-08-14", t:"First Anomalous Upload", d:"The original Level 0 photo was traced to an anomalous packet injection from an unknown IP address."},
                {date: "1995-03-22", t:"Flash Phenomenon Recorded", d:"A survivor in Level 2 reported a massive flash of light, followed by a photo of a Clump nest appearing in their pocket."},
                {date: "2001-09-02", t:"Entity Theorized", d:"M.E.G. officially categorized the phenomenon as Entity 1 to explain the spontaneous generation of intel."},
                {date: "2015-11-20", t:"The Polaroid Incident", d:"A wanderer attacked a flash of light. They were found a week later, completely unharmed, clutching a perfectly exposed photo of their own angry face."},
                {date: "2026-07-02", t:"Ongoing Archival", d:"Entity 1 continues to upload high-resolution topography maps to our databases. We consider it a vital, untouchable asset."}
            ]),
            resonanceLogs: ["> INITIALIZING ENTITY PING...", "> SCANNING DATABASE INJECTION POINTS...", "> NO PHYSICAL ANCHOR DETECTED.", "> CONNECTION SEVERED BY EXTERNAL SOURCE."]
        },

        "entity2": {
            type: "entity", id: "entity2", title: "Entity 2", name: "Windows", baseTraits: { temp: 20.0, hume: 50.0 },
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Entity 2 Proprietary": { "Glass Tensile Strength": "Unbreakable", "Reach Distance": "1.5 Meters", "Illusion Type": "Psychic Memory Projection", "Shadow Mass": "Void Matter", "Preferred Target": "Homesick Humans", "Lure Radius": "10 Meters", "Vibration Frequency": "14 Hz", "Shatter Sound Level": "110 dB" } },
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-red-900"><div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity"><span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20 animate-pulse">HOVER TO APPROACH</span></div><div class="absolute inset-0 bg-blue-900/20 z-10"></div><div class="absolute bottom-0 w-full h-1/2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div></div></div>`,
            lore: makeLore([
                "Windows are entities that take the form of typical glass windows. They are stationary ambush traps designed to lure wanderers to their deaths.",
                "Entity 2, more commonly known as 'Windows', disguise themselves as architectural features. Behind the glass, a dark, humanoid shadow figure resides. They often project an illusion of Baseline Reality outside the window, such as a rainy street or a sunny park, to tempt homesick wanderers into approaching.",
                "If a human comes within 1.5 meters of the glass, the shadow figure will smash through the pane, grab the victim with inhuman strength, and pull them into the void behind the window. No one has ever been recovered from a Window attack. They are exceptionally common in Level 4 and Level 188."
            ]) + makeEntrances(
                ["Architectural generation during level transition.", "Replacing ordinary walls when a wanderer is not looking.", "Manifesting in clusters in Level 188.", "Spawning inside empty doorframes on Level 4.", "Appearing as skylights in Level 5."],
                ["Walking away further than 10 meters breaks the psychic lure.", "Covering the glass fully neutralizes the entity's ability to hunt.", "Shining UV light forces the entity back into the void temporarily.", "Breaking line of sight for 5 minutes despawns the trap."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Distance Keeping",d:"Keep a minimum distance of 2 meters from any window.",c:"red",l:"Their grab range is exactly 1.5 meters. Walk in the center of the hallway."},
                    {n:"Visual Anomalies",d:"If a window shows Baseline Reality, it is a trap.",c:"purple",l:"The Backrooms do not have natural exteriors. Rain is a dead giveaway."},
                    {n:"Blind Firing",d:"Do not shoot the glass.",c:"orange",l:"Breaking the glass intentionally releases the shadow entity into the room."},
                    {n:"Acoustic Lures",d:"Windows will often play sounds of crying children or barking dogs.",c:"yellow",l:"Wear earplugs. If the sound is coming from a pane of glass, ignore it completely."},
                    {n:"Covering Protocol",d:"If you must sleep in a room with a Window, cover it completely.",c:"green",l:"Tape garbage bags or thick blankets over the glass. Out of sight prevents the psychic lure."}
                ], 
                [ {n:"Flashlight",i:"ph-flashlight"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Measuring Tape",i:"ph-ruler"}, {n:"Heavy Boots",i:"ph-boot"}, {n:"Blinds/Tape",i:"ph-tape"}, {n:"Earplugs",i:"ph-ear-slash"}, {n:"Blackout Curtains",i:"ph-app-window"}, {n:"Almond Water",i:"ph-drop"}, {n:"Mirrors",i:"ph-magnifying-glass"}, {n:"First Aid",i:"ph-first-aid"} ]
            ),
            history: makeHist([
                {date: "1998-11-04", t:"First Sighting in Level 4", d:"A survivor reported encountering a window in a windowless office. They wisely avoided it, noting the impossibility of rain inside a building."},
                {date: "2003-02-18", t:"Psychic Lure Documented", d:"A wanderer described feeling an overwhelming urge to jump out of the window to 'go home'. They were restrained by their party."},
                {date: "2009-07-22", t:"The Grab", d:"First recorded death via a Window captured on bodycam. The victim reached out to touch the 'rain' and was instantly pulled into the darkness."},
                {date: "2016-03-14", t:"Illusion Analyzed", d:"L-Corp confirms the window projects a psychic illusion based on the victim's memories, not a standard visual projection."},
                {date: "2024-05-10", t:"Level 188 Quarantine", d:"M.E.G. declares Level 188 a hazard zone due to the walls consisting entirely of Window entities."},
                {date: "2026-07-02", t:"Current Threat", d:"Windows remain the primary cause of death in Level 4. Avoid all natural light sources. Do not trust your eyes."}
            ]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY PING...", "> LOCATING ENTITY 2 (WINDOW)", "> WARNING: SPATIAL TEAR DETECTED.", "> ABORTING PING."]
        }
    }
};