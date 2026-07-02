// ==========================================
// DATA STRUCTURE: LIMINOS ADVANCED DATABASE
// ==========================================

const LiminOSClassifications = {
    general: [
        { class: "Class 0", name: "Habitable", color: "bg-green-500", desc: "Safe, secure, devoid of entities. Environment is stable." },
        { class: "Class 1", name: "Safe", color: "bg-green-400", desc: "Safe, secure, minimal entity count." },
        { class: "Class 2", name: "Unsafe", color: "bg-yellow-400", desc: "Unsafe, unsecure, low entity count." },
        { class: "Class 3", name: "Hazardous", color: "bg-orange-500", desc: "Unsafe, unsecure, moderate entity count." },
        { class: "Class 4", name: "Dangerous", color: "bg-red-500", desc: "Unsafe, unsecure, high entity count. Immediate danger." },
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Entity infestation. Survival is nearly impossible." }
    ],
    special: [
        { class: "Class Ψ (Psi)", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind." },
        { class: "Class Ω (Omega)", name: "Hyper-Unstable", color: "bg-indigo-500", desc: "Geometry, time, and laws fluctuate violently." }
    ]
};

// DYNAMIC GENERATORS
const makeLore = (p) => `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">${p[0]}</p></div><h3>Description</h3>${p.slice(1).map(x=>`<p>${x}</p>`).join('')}`;
const makeEntrances = (e, x) => `<div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner mt-8"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4">${e.map(i=>`<li><i class="ph ph-arrow-right text-liminal-primary"></i> ${i}</li>`).join('')}</ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4">${x.map(i=>`<li><i class="ph ph-arrow-right text-liminal-safe"></i> ${i}</li>`).join('')}</ul></div>`;
const makeSG = (tricks, items) => `<div class="space-y-6 text-sm text-liminal-text max-w-4xl">${tricks.map((t,i)=>`<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-${t.c}-500 shadow-lg"><h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">${i+1}. ${t.n}</h4><p class="mb-2 leading-relaxed">${t.d}</p><p class="bg-${t.c}-900/20 p-3 rounded text-${t.c}-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> ${t.l}</p></div>`).join('')}<div class="mt-8 pt-6 border-t border-white/10"><h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout</h4><div class="grid grid-cols-2 md:grid-cols-4 gap-3">${items.map(item=>`<div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><i class="ph ${item.i} text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">${item.n}</span></div>`).join('')}</div></div></div>`;

// Updated Historical Logs: The line stops at the last dot, and the last dot pulses green.
const makeHist = (logs) => `<div class="ml-4 md:ml-6 mt-4">${logs.map((l,i)=>{
    const isLast = i === logs.length - 1;
    const lineClass = isLast ? '' : 'border-l border-liminal-border pb-10';
    const dotClass = isLast ? 'bg-green-500 shadow-[0_0_12px_#22c55e] animate-pulse' : 'bg-black border border-liminal-primary shadow-[0_0_8px_var(--theme-glow)]';
    const tag = isLast ? 'PRESENT SITUATION' : `ARCHIVE LOG ${i+1}`;
    return `<div class="relative pl-6 md:pl-10 ${lineClass}">
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full z-10 ${dotClass}"></div>
        <div class="text-[10px] text-liminal-primary mb-1 font-mono font-bold tracking-widest uppercase">${tag} // ${l.date}</div>
        <h4 class="text-white font-bold text-lg mb-2">${l.t}</h4>
        <p class="text-sm text-liminal-muted leading-relaxed">${l.d}</p>
    </div>`;
}).join('')}</div>`;

const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.05, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [ { name: "Gateway Node", color: "#9ca3af", icon: "⬇" }, { name: "Almond Water", color: "#60a5fa", icon: "💧" }, { name: "Wallpaper Tear", color: "#ef4444", icon: "⚡" }, { name: "Fluorescent Trap", color: "#eab308", icon: "💡" }, { name: "Damp Carpet Sink", color: "#22c55e", icon: "🕳" }, { name: "Null Zone", color: "#a855f7", icon: "🌪" }, { name: "Manila Room", color: "#f97316", icon: "🚪" }, { name: "Ecto-Trace", color: "#ec4899", icon: "👻" }, { name: "Loop Start", color: "#14b8a6", icon: "🔄" }, { name: "M.E.G. Marker", color: "#3b82f6", icon: "🛡" } ] },
            fullMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:0.004", "Loop Probability": "14.2%", "Entropy Gradient": "Stagnant", "Clock Drift": "+14s/hr", "Subjective Time": "Stretched (Severe)", "Causality Integrity": "92.1%", "Temporal Echoes": "High Frequency", "Chronon Rad": "1.2 ppm", "Aging Rate": "Nullified", "Decay Rate": "Zero" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "82.4 H (Low)", "Kant Counter": "0.85", "Euclidean Consistency": "14.2%", "Noclipping Threshold": "Permeable", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "2.4%", "Magnetic Declination": "Spinning", "Tesseract Depth": "Surface", "Corridor Gen Rate": "4000 m/s", "Warp Factor": "0.12" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "22.4 °C", "Temp Fluctuation": "±0.1 °C", "Relative Humidity": "48%", "Pressure": "100.1 kPa", "Air Comp O2": "20.1%", "Air Comp N2": "79.0%", "Mold Spores": "Trace", "Ozone Level": "High (From Lights)", "Toxicity": "0%", "Breathability": "100%" } },
                { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "59.8 Hz (Constant)", "Acoustic Decay": "Rapid", "Light Source": "Fluorescent Tubes", "Luminosity Level": "300 Lux (Harsh)", "Color Temp": "3200K (Yellow)", "Audio Hallucination": "34%", "UV Radiation": "Low", "Decibel Baseline": "45 dB", "Echo Delay": "0.5s", "Resonance": "432 Hz" } },
                { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Carpet Saturation": "1.2cm (Avg)", "Fluid Composition": "Unknown/Musty", "Wallpaper Decay": "0%", "Entity Density": "0.001", "Pathogen Level": "Sterile", "Structural Integrity": "Indestructible", "Nutrient Avail": "Zero", "Dehydration Risk": "Extreme", "Flora/Fauna": "None", "Concrete Density": "N/A" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "1", "Sanity Drain Rate": "2.5% / hr", "Isolation Factor": "Absolute", "Radio Comm": "0% (Blocked)", "GPS Function": "Offline", "Shelter Viability": "0/100", "Resource Respawn": "None", "Navigation Difficulty": "Maximum", "Rescue Probability": "Minimal", "Threat Type": "Psychological" } }
            ],
            lore: makeLore([
                "Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in. It is widely considered the tutorial to the horrors that lie beneath, though it kills through isolation rather than violence.",
                "Level 0 is an expansive, non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout, mono-yellow wallpaper, and damp carpets. The constant hum-buzz emitted by the ceiling lights permeates every area. The layout consists of randomly segmented rooms and hallways that defy conventional architectural logic. Compasses spin wildly here, GPS devices fail entirely, and drawing a map is a futile endeavor as the architecture subtly shifts when unobserved. The carpets are notoriously damp, saturated with an unknown, musty fluid that resists drying and prevents wanderers from sitting comfortably.",
                "Due to the highly anomalous spatial properties, wanderers navigating Level 0 will almost never encounter another human being, even if they enter precisely at the same time and location. The resulting absolute isolation induces rapid psychological deterioration. This often leads to severe paranoia and auditory hallucinations where the relentless hum-buzz begins to mimic human whispers or the voices of loved ones. Physical entities are exceptionally rare here; there are no hounds, no smilers, and no clump-nests. Therefore, the primary threat to survival in Level 0 is starvation, profound dehydration from the heat of the lights, and the crushing psychological weight of the infinite yellow expanse."
            ]) + makeEntrances(
                ["Accidental noclipping through a shadow in Baseline Reality.", "Attempting to touch a glitched object in the real world.", "Falling asleep in an empty, windowless room on Earth.", "Noclipping through a deeply red wall in Level 1.", "Stepping through a rusted door frame in Level -1.", "Entering a false elevator in a mundane office building.", "Crawling under a bed that has no floor beneath it."],
                ["Noclipping through an unusually dark section of wallpaper transports the wanderer to Level 1.", "Finding a rare, standard wooden door labeled 'Manila' leads to the Manila Room.", "Breaking through the floorboards (extremely difficult) drops you into Level 27.", "Entering a room where the wallpaper is peeling reveals a tunnel to Level 4.", "Walking perfectly straight for 400 miles may glitch the user into Level 11."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Psychological Anchoring", d:"The hum-buzz and mono-yellow aesthetic induce rapid monophobia and sensory deprivation loop. The brain will attempt to create stimuli where there is none, leading to hallucinations.", c:"purple", l:"Carry a mechanical watch. The ticking overrides the hum-buzz and provides a Baseline anchor."},
                    {n:"Resource Management", d:"There is absolutely no clean water natively generated here. Drinking the carpet fluid results in severe gastrointestinal distress and rapid dehydration.", c:"yellow", l:"Search specifically for pooling condensation near structural anomalies or broken lights."},
                    {n:"Wall Tracing Protocol", d:"Navigating a non-Euclidean maze without markers causes endless looping. Wanderers have starved while walking in what they perceived to be a straight line.", c:"teal", l:"Trace the left wall with your hand to break spatial recursion loops and force new generation."},
                    {n:"Energy Conservation", d:"Running drastically increases caloric burn and accelerates panic. Because there are no entities, speed is irrelevant to survival.", c:"blue", l:"Maintain a strict walking pace of 3mph. Do not sprint. Sit and rest your legs every two hours."},
                    {n:"Hallucination Rejection", d:"You will hear voices of people you know calling for help. This is the architecture attempting to lure you into a dead end.", c:"fuchsia", l:"Bite your lip hard. Physical pain disrupts the cognitohazard loop immediately."},
                    {n:"Light Bulb Scavenging", d:"The fluorescent tubes contain trace amounts of safe glass and wiring that can be used later.", c:"gray", l:"Stand on a discarded box, wrap your shirt around your hand, and unscrew the bulb gently."},
                    {n:"Sleep Cycles", d:"The lights never turn off, making REM sleep nearly impossible, which drastically accelerates the onset of madness.", c:"orange", l:"Sleep face down with your arms covering your eyes. Tie a cloth around your head to block the 300-lux glare."}
                ], 
                [ {n:"Analog Watch",i:"ph-watch"}, {n:"Almond Water",i:"ph-drop"}, {n:"Compass (Broken)",i:"ph-compass"}, {n:"Industrial Chalk",i:"ph-pencil-simple"}, {n:"Thick Boots",i:"ph-boot"}, {n:"Blindfold",i:"ph-eye-closed"}, {n:"Earplugs",i:"ph-ear-slash"}, {n:"Backpack",i:"ph-bag"}, {n:"Rations",i:"ph-hamburger"}, {n:"Notepad",i:"ph-book"} ]
            ),
            history: makeHist([
                {date: "1991-08-14", t: "Initial Archival Image", d: "An anonymous user uploaded the first verified visual telemetry of Level 0 to a rudimentary web forum. The image was analyzed and confirmed to contain no digital manipulation, proving the existence of the Backrooms geometry. This sparked the initial wave of L-Corp clandestine investigations."},
                {date: "1998-02-03", t: "Project 'Yellow Wallpaper'", d: "The first batch of unmanned, tethered probes were sent through a localized spatial tear. The probes mapped a 10-mile radius before the tether was cleanly severed by an invisible spatial fold. Telemetry confirmed the exact Hume level drop."},
                {date: "2004-11-21", t: "Spatial Paradox Recorded", d: "An L-Corp drone successfully mapped a hallway that intersected itself at a perfect 90-degree angle without connecting to its own origin point. This proved the Euclidean consistency of Level 0 was below 15%, forcing a rewrite of standard physics models."},
                {date: "2012-06-08", t: "M.E.G. Isolation Study", d: "A volunteer spent 40 hours inside a tethered zone. The subject reported hearing the ceiling lights speak in the voice of their deceased mother. The subject required 6 months of psychiatric rehabilitation upon extraction."},
                {date: "2020-01-15", t: "Manila Room Discovered", d: "A lost wanderer stumbled into the Manila Room, proving that non-linear architectural exits exist within the labyrinth. The documentation of this room provided the first reliable map-out point to Level 1."},
                {date: "2026-07-02", t: "Stable Entry Node Established", d: "L-Corp has successfully stabilized a micro-tear allowing for consistent, one-way insertion of agents into the Lobby. Entity density remains flat at zero, but sanity drain metrics are higher than projected. Field teams are advised to transit to Level 1 within 12 hours of insertion to avoid permanent cognitive damage."}
            ]),
            resonanceLogs: ["> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> EUCLIDEAN MESH REJECTED.", "> CAUSALITY BLEED DETECTED.", "> SCAN COMPLETE."]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [ { name: "M.E.G. Base Alpha", color: "#22c55e", icon: "🛡" }, { name: "Supply Crate", color: "#3b82f6", icon: "📦" }, { name: "Flickering Light", color: "#eab308", icon: "💡" }, { name: "Fog Choke Point", color: "#a855f7", icon: "🌫" }, { name: "Hound Pack", color: "#ef4444", icon: "🐾" }, { name: "Generator", color: "#f97316", icon: "⚡" }, { name: "Concrete Pillar", color: "#9ca3af", icon: "🏢" }, { name: "Chalk Marker", color: "#06b6d4", icon: "✏" }, { name: "Water Puddle", color: "#60a5fa", icon: "💧" }, { name: "B.N.T.G Vault", color: "#eab308", icon: "🏦" } ] },
            fullMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.0", "Loop Probability": "0.1%", "Entropy Gradient": "Normal", "Clock Drift": "±0.0s/hr", "Subjective Time": "Linear", "Causality Integrity": "99.8%", "Temporal Echoes": "None", "Chronon Rad": "0.1 ppm", "Aging Rate": "Standard", "Decay Rate": "Standard" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "95.2 H", "Kant Counter": "1.05", "Euclidean Consistency": "80.0%", "Noclipping Threshold": "Difficult", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%", "Magnetic Declination": "Standard", "Tesseract Depth": "Shallow", "Corridor Gen Rate": "100 m/s", "Warp Factor": "0.02" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "15.0 °C", "Temp Fluctuation": "±5.0 °C", "Relative Humidity": "85% (Fog)", "Pressure": "102.1 kPa", "Air Comp O2": "19.2%", "Air Comp N2": "78.5%", "Mold Spores": "Moderate", "Ozone Level": "Low", "Toxicity": "0.5%", "Breathability": "95%" } },
                { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "Machinery Whir", "Acoustic Decay": "Dampened", "Light Source": "Industrial Bulbs", "Luminosity Level": "150 Lux", "Color Temp": "4000K", "Audio Hallucination": "2%", "UV Radiation": "Zero", "Decibel Baseline": "55 dB", "Echo Delay": "1.2s", "Resonance": "200 Hz" } },
                { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Floor Material": "Concrete", "Concrete Density": "2400 kg/m³", "Wall Decay": "2%", "Entity Density": "0.08", "Pathogen Level": "Low", "Structural Integrity": "High", "Nutrient Avail": "Moderate (Crates)", "Dehydration Risk": "Low", "Flora/Fauna": "Mildew", "Fog Density": "High" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "2", "Sanity Drain Rate": "0.1% / hr", "Isolation Factor": "Low", "Radio Comm": "Functional", "GPS Function": "Intermittent", "Shelter Viability": "90/100", "Resource Respawn": "Active (Crates)", "Navigation Difficulty": "Moderate", "Rescue Probability": "High", "Threat Type": "Predatory Entities" } }
            ],
            lore: makeLore([
                "Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and a constant, low-hanging fog that obscures the floor. It is the first truly habitable zone wanderers encounter.",
                "Level 1 is an incredibly vast, sprawling warehouse. Unlike Level 0, this level possesses a consistent, albeit fluctuating, supply of water and electricity. This infrastructure allows for indefinite habitation by wanderers, provided that appropriate precautions are taken. Crates of supplies appear and disappear randomly across the concrete floor, containing everything from car batteries to Almond Water, medical supplies, and occasionally useless detritus like human hair. The scale of the warehouse is incomprehensible, with some structural pillars measuring miles in diameter. The dense fog that blankets the floor carries a slightly metallic scent and actively dampens acoustic travel, making it difficult to hear approaching wanderers or entities.",
                "Level 1 is notably the home of M.E.G. Base Alpha, one of the most heavily fortified survivor outposts in the Backrooms. The lighting here is prone to severe flickering and rolling blackouts. During these pitch-black periods, hostile entities such as Smilers, Hounds, and Facelings frequently manifest out of the darkness, turning the otherwise habitable zone into a lethal hunting ground. Wanderers must map out safe zones and memorize the locations of light switches and generator hubs to survive the inevitable darkness protocols."
            ]) + makeEntrances(
                ["Noclipping through a dark patch of wall in Level 0.", "Opening the main exit door in the Manila Room.", "Falling through the ceiling of Level 2 (Rare).", "Entering a painted concrete door in Level 4.", "Wandering too far into the basements of Level 11."],
                ["Walking down an excessively long hallway transitions smoothly into Level 2.", "Entering a hole in the concrete wall drops the wanderer into Level 19.", "Unlocking a specific red shipping container leads to Level 3.", "Sleeping inside a supply crate sometimes wakes you up in Level 4.", "Finding a flooded stairwell leads to Level 7.", "Painting a door on the wall with chalk and walking through it leads to Level 0."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Outpost Proximity", d:"Level 1 is home to M.E.G. Base Alpha, the largest trade hub in the upper levels.", c:"green", l:"Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha. Avoid red chalk."},
                    {n:"The Darkness Protocol", d:"When lights flicker, entities spawn. The facility routinely experiences rolling blackouts that last up to 4 hours.", c:"yellow", l:"Power grids follow a determinable 14-hour cycle. Sync your watch and find a barricaded room before the cycle ends."},
                    {n:"Crate Scavenging", d:"Supply crates spawn dynamically. They are the only source of non-anomalous food.", c:"blue", l:"Pry open wooden crates with red markings; they contain food. Black crates contain mechanical parts."},
                    {n:"Fog Evasion", d:"The fog hides ankle-biting entities and Smilers. It also masks the sound of approaching Hounds.", c:"red", l:"Climb atop large crates to stay above the condensation line during a blackout."},
                    {n:"Generator Defense", d:"Generators keep the immediate area safe from entity spawns.", c:"orange", l:"Pour Almond water over overheating generators to cool them; it works better than coolant."},
                    {n:"Audio Masking", d:"The fog dampens sound, but metallic clangs travel miles.", c:"purple", l:"Wrap your boots in cloth to prevent your footsteps from echoing on the concrete."}
                ], 
                [ {n:"High-Lumen Flashlight",i:"ph-flashlight"}, {n:"Respirator Mask",i:"ph-mask-water"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Blue Chalk",i:"ph-pencil"}, {n:"Combat Knife",i:"ph-knife"}, {n:"Extra Batteries",i:"ph-battery-full"}, {n:"Almond Water",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"First Aid Kit",i:"ph-first-aid"}, {n:"Two-way Radio",i:"ph-radio"}, {n:"Duct Tape",i:"ph-tape"}, {n:"M.E.G. Map",i:"ph-map-trifold"} ]
            ),
            history: makeHist([
                {date: "1994-05-11", t: "First Successful Transition", d: "A wanderer posted a blurry photo of a concrete pillar on an obscure imageboard, marking the discovery of Level 1. The image showed a distinct lack of yellow wallpaper, confirming a multi-tiered structure to the Backrooms."},
                {date: "2001-09-02", t: "Establishment of Base Alpha", d: "The Major Explorer Group (M.E.G.) successfully fortified a large quadrant near a reliable water spawn. They erected barricades using anomalous supply crates and established the first permanent human government in the Backrooms."},
                {date: "2008-12-14", t: "The Long Blackout", d: "A 72-hour power failure resulted in massive entity incursions and heavy casualties. Over 40 wanderers were lost to Smilers. This prompted the creation of strict curfew laws and the hoarding of batteries."},
                {date: "2015-04-20", t: "Supply Crate Algorithm Cracked", d: "L-Corp scientists decoded the spatial spawn logic of the wooden crates. They determined that crates manifest in areas of low human observation, operating on quantum superposition rules."},
                {date: "2019-11-03", t: "Hound Pack Migration", d: "A massive pack of Hounds migrated from Level 3, breaching outer defenses. B.N.T.G. mercenaries were hired to cull the population, establishing the current perimeter guard."},
                {date: "2026-07-02", t: "Base Alpha Thriving", d: "Current population exceeds 800 active residents. The fog toxicity levels remain stable, though L-Corp nodes detect a slight increase in Hume instability near the western expansion zones. Trade routes to Level 4 are fully operational."}
            ]),
            resonanceLogs: ["> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]", "> ENTITY PROXIMITY SENSORS ACTIVE.", "> SCAN COMPLETE."]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: { seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.05, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [ { name: "Superheated Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Burst Pipe", color: "#60a5fa", icon: "💧" }, { name: "Dead End", color: "#9ca3af", icon: "🛑" }, { name: "Smiler Zone", color: "#ffffff", icon: "👁" }, { name: "Locked Fire Door", color: "#f97316", icon: "🚪" }, { name: "Maintenance Hatch", color: "#22c55e", icon: "🕳" }, { name: "Boiler Machine", color: "#eab308", icon: "⚙" }, { name: "M.E.G. Cache", color: "#3b82f6", icon: "🛡" }, { name: "Thermal Anomaly", color: "#ec4899", icon: "🌡" } ] },
            fullMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.2", "Loop Probability": "5.0%", "Entropy Gradient": "Accelerated", "Clock Drift": "-2s/hr", "Subjective Time": "Rushed", "Causality Integrity": "95.0%", "Temporal Echoes": "Low", "Chronon Rad": "2.4 ppm", "Aging Rate": "Standard", "Decay Rate": "High (Metal)" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "75.0 H", "Kant Counter": "1.15", "Euclidean Consistency": "60.0%", "Noclipping Threshold": "Moderate", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "1.2%", "Magnetic Declination": "Standard", "Tesseract Depth": "Deep", "Corridor Gen Rate": "200 m/s", "Warp Factor": "0.45" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "38.0 °C", "Temp Fluctuation": "±15.0 °C", "Relative Humidity": "95%", "Pressure": "105.2 kPa", "Air Comp O2": "18.5%", "Air Comp N2": "75.0%", "Mold Spores": "High", "Ozone Level": "Trace", "Toxicity": "2.0%", "Breathability": "70%" } },
                { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "Pipe Groans", "Acoustic Decay": "Echoing", "Light Source": "Flickering Bulbs", "Luminosity Level": "40 Lux (Dim)", "Color Temp": "2500K", "Audio Hallucination": "10%", "UV Radiation": "Zero", "Decibel Baseline": "85 dB", "Echo Delay": "2.5s", "Resonance": "110 Hz" } },
                { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Floor Material": "Grates/Concrete", "Pipe Material": "Rusted Iron", "Wall Decay": "45%", "Entity Density": "1.40 (High)", "Pathogen Level": "Moderate", "Structural Integrity": "Failing", "Nutrient Avail": "Zero", "Dehydration Risk": "Extreme", "Flora/Fauna": "Heat-fungi", "Water Toxicity": "Lethal" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "3", "Sanity Drain Rate": "1.5% / hr", "Isolation Factor": "Moderate", "Radio Comm": "Poor", "GPS Function": "Offline", "Shelter Viability": "10/100", "Resource Respawn": "None", "Navigation Difficulty": "High", "Rescue Probability": "Low", "Threat Type": "Thermal/Entity" } }
            ],
            lore: makeLore([
                "Level 2 mainly consists of dark, grey, concrete maintenance tunnels stretching endlessly, filled with scalding hot pipes.",
                "Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with rusted pipes lining the walls and ceilings. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). The intense heat causes rapid dehydration, forcing wanderers to move quickly through the suffocating atmosphere. The air is thick with steam and smells heavily of oxidized iron and sulfur.",
                "The entity density rises sharply here. Smilers lurk in the dark stretches of the tunnels, while Clumps utilize the overhead ventilation shafts to ambush unsuspecting prey. The constant groaning of expanding metal pipes creates a terrifying soundscape that easily masks the approach of Hounds. Wanderers are advised to never rest near a steaming valve, as they are prone to explosive ruptures. Finding a way out is paramount, as the heat and entities will overwhelm any prepared group within days."
            ]) + makeEntrances(
                ["Walking down a long, dark concrete hallway in Level 1.", "Noclipping through a hot boiler in Level 5.", "Entering a rusted maintenance door in Level 4.", "Falling through a broken grate in Level 3.", "Opening a red shipping container in Level 1.", "Entering a steam-filled vent in Level 6."],
                ["Finding an unlocked fire exit door leads directly to Level 3.", "Entering a colorful office door leads to Level 4.", "Noclipping into a perfectly clean pipe leads to Level 28.", "Riding an extremely rare freight elevator down leads to Level 5.", "Fainting from heat exhaustion sometimes wakes you up in Level 0.", "Climbing a ventilation ladder for hours leads to Level 15.", "Walking into a pitch-black corridor that drops in temperature leads to Level 6."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Heat Stroke Prevention", d:"The ambient temperature in Level 2 will rapidly dehydrate wanderers. Sweating is ineffective due to 95% humidity.", c:"red", l:"Stay close to the floor where the temperature is 2-3°C cooler. Crawl if necessary."},
                    {n:"Smiler Evasion", d:"If you spot a Smiler, do not use a flashlight. Light aggravates them.", c:"purple", l:"Throw a glowstick down an intersecting corridor to distract them, then back away slowly."},
                    {n:"Ventilation Awareness", d:"Clumps hide in the ceiling vents, waiting to drop on prey.", c:"yellow", l:"Never stand directly under a dripping grate. Keep your light pointed slightly upward."},
                    {n:"Burn Treatment", d:"Bursting steam pipes are common and cause 3rd-degree burns.", c:"cyan", l:"Carry burn salve; Almond Water is less effective on thermal burns. Listen for hissing valves."},
                    {n:"Avoid Black Pipes", d:"Pipes painted black contain a highly toxic, acidic sludge.", c:"green", l:"Do not try to drink from leaking black pipes. Only tap silver pipes for condensation."},
                    {n:"Hound Combat", d:"Hounds are aggressive but easily intimidated.", c:"orange", l:"Maintain intense eye contact. Do not run. Strike them with a heavy crowbar if they lunge."}
                ],
                [ {n:"Ambient Thermometer",i:"ph-thermometer"}, {n:"5L Thermal Water Jug",i:"ph-drop"}, {n:"Burn Salve",i:"ph-first-aid"}, {n:"Glowsticks",i:"ph-lightbulb"}, {n:"Heat Gloves",i:"ph-hand-palm"}, {n:"Heavy Crowbar",i:"ph-wrench"}, {n:"Cooling Towel",i:"ph-t-shirt"}, {n:"Thick Boots",i:"ph-boot"}, {n:"Compass",i:"ph-compass"} ]
            ),
            history: makeHist([
                {date: "1996-03-12", t: "The Heatwave Discovery", d: "Explorers breached an iron door from Level 1, immediately encountering extreme temperatures. Two members of the expedition died of heatstroke within 4 hours, marking the lethality of the tunnels."},
                {date: "2000-07-28", t: "Pipe Rupture Event", d: "A 40-mile stretch of piping ruptured simultaneously, flooding the corridors with boiling water. This event completely wiped out an early B.N.T.G. attempt to establish a trade route."},
                {date: "2007-02-19", t: "Clump Infestation Mapped", d: "M.E.G. confirmed Entity 5 populations thrive in the high-humidity environment. They documented the vent-ambush tactic, updating the survival guide heavily."},
                {date: "2013-09-04", t: "Fire Exit Discovered", d: "The first verified exit to Level 3 was documented by a lone survivor running from a Hound pack. The metal door was found to be incredibly heavy but unlocked."},
                {date: "2021-08-11", t: "L-Corp Thermal Scan", d: "Deployment of autonomous rovers successfully mapped temperature gradients and identified optimal, cooler paths through the maze."},
                {date: "2026-07-02", t: "Transit Only Status", d: "Due to rising thermal metrics (averaging 40°C), Level 2 is officially classified as a transit-only zone. No outposts are currently active. L-Corp telemetry indicates a massive pressure buildup in the northern quadrant."}
            ]),
            resonanceLogs: ["> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS.", "> MULTIPLE ENTITY SIGNATURES DETECTED IN VENTILATION.", "> PROCEED WITH EXTREME CAUTION."]
        },
        
        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: { seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Skin-Stealer", color: "#ec4899", icon: "👤" }, { name: "Elevator", color: "#22c55e", icon: "🚪" }, { name: "Live Wire Trap", color: "#eab308", icon: "〰" }, { name: "Machinery Room", color: "#9ca3af", icon: "⚙" }, { name: "M.E.G. Gamma Ruins", color: "#3b82f6", icon: "🛡" }, { name: "Dark Sector", color: "#000000", icon: "👁" }, { name: "Toxic Puddle", color: "#a855f7", icon: "💧" }, { name: "Breaker Switch", color: "#f97316", icon: "🎛" } ] },
            fullMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:0.9", "Loop Probability": "1.0%", "Entropy Gradient": "Normal", "Clock Drift": "+5s/hr", "Subjective Time": "Disjointed", "Causality Integrity": "90.0%", "Temporal Echoes": "Moderate", "Chronon Rad": "1.8 ppm", "Aging Rate": "Standard", "Decay Rate": "Standard" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "70.0 H", "Kant Counter": "1.30", "Euclidean Consistency": "40.0%", "Noclipping Threshold": "Low", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "5.0%", "Magnetic Declination": "Wild", "Tesseract Depth": "Deep", "Corridor Gen Rate": "800 m/s", "Warp Factor": "0.60" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "25.0 °C", "Temp Fluctuation": "±2.0 °C", "Relative Humidity": "60%", "Pressure": "100.5 kPa", "Air Comp O2": "20.0%", "Air Comp N2": "78.0%", "Mold Spores": "Low", "Ozone Level": "Extreme (Sparks)", "Toxicity": "0.5%", "Breathability": "90%" } },
                { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "120 dB (Deafening)", "Acoustic Decay": "Zero", "Light Source": "Sparks/Strobes", "Luminosity Level": "Variable", "Color Temp": "5000K", "Audio Hallucination": "0% (Too loud)", "UV Radiation": "High", "Decibel Baseline": "100 dB", "Echo Delay": "0.1s", "Resonance": "60 Hz" } },
                { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Floor Material": "Metal Grating", "Voltage Level": "10,000V", "Wall Decay": "10%", "Entity Density": "3.50 (Extreme)", "Pathogen Level": "Low", "Structural Integrity": "Sturdy", "Nutrient Avail": "None", "Dehydration Risk": "Moderate", "Flora/Fauna": "None", "Cable Density": "Extreme" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "4", "Sanity Drain Rate": "3.0% / hr", "Isolation Factor": "None (Entities)", "Radio Comm": "0% (Interference)", "GPS Function": "Offline", "Shelter Viability": "0/100", "Resource Respawn": "None", "Navigation Difficulty": "Extreme", "Rescue Probability": "Zero", "Threat Type": "Swarm/Electro" } }
            ],
            lore: makeLore([
                "Level 3 is a series of long, dark, twisting hallways resembling an electrical station. It is a severe difficulty spike and acts as a massive death trap for unprepared wanderers.",
                "The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible. The architecture is a chaotic maze of brick, metal grates, and heavy machinery that serves no logical purpose. Puddles of unknown fluids frequently pool on the floor, posing a severe electrocution hazard due to hanging live wires. The magnetic interference is so strong that compasses explode, and any brought electronic devices are instantly fried.",
                "The entity density in Level 3 is extraordinarily high, classifying it as one of the most dangerous early levels. Skin-Stealers, Hounds, and Smilers roam freely in massive swarms. Survival here relies heavily on stealth, visual tracking, and rapid traversal. Establishing any form of permanent base has proven impossible; M.E.G. Base Gamma was wiped out in 72 hours. The ultimate goal is to locate a functioning elevator to escape to the safety of Level 4."
            ]) + makeEntrances(
                ["Opening a fire exit door in Level 2.", "Unlocking a specific red shipping container in Level 1.", "Noclipping through a television in Level 18.", "Crawling through a dense thicket of black wires in Level 6.", "Opening a breaker box in Level 11 and crawling inside."],
                ["Finding a working elevator and riding it upwards takes you to Level 4.", "Entering a specific maintenance hatch drops you into Level 5.", "Touching a perfectly intact, glowing lightbulb teleports you to Level 0.", "Noclipping through a brick wall while being electrocuted leads to Level 12.", "Finding a rusted car in a wide hallway leads to Level 69.", "Following a trail of Almond Water into a dark tunnel leads to Level 10.", "Opening a door labeled 'Stairs' drops you into Level 7.", "Climbing a massive radio tower leads to Level 11."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"High Entity Density", d:"Do not attempt to fight. You are severely outnumbered by Skin-Stealers and Hounds.", c:"red", l:"Use the deafening machinery noise to mask your sprinting footsteps. Never engage."},
                    {n:"Electrocution Hazard", d:"Exposed live wires hang from the ceiling and touch the metal grates.", c:"yellow", l:"Stay in the exact dead-center of the hallways. Do not step in any liquid puddles."},
                    {n:"Elevator Access", d:"Elevators are the only reliable and safe extraction point to Level 4.", c:"blue", l:"Check the elevator cables with your flashlight before entering; entities frequently sever them."},
                    {n:"Visual Navigation", d:"Acoustic tracking is entirely useless here due to the 120dB background noise.", c:"teal", l:"Use a small inspection mirror to peek around corners before committing to a turn."},
                    {n:"Skin-Stealer Evasion", d:"They wear human skin and mimic voices.", c:"fuchsia", l:"If you see a human, check their blood. Skin-Stealers have clear, translucent blood."},
                    {n:"EMP Utilization", d:"Entities swarm when cornered.", c:"purple", l:"Detonate an EMP to fry the local lights, blinding Hounds and allowing you to escape in the dark."}
                ],
                [ {n:"Rubber Boots",i:"ph-boot"}, {n:"EMP Grenades",i:"ph-lightning"}, {n:"Ear Protection",i:"ph-ear"}, {n:"Inspection Mirror",i:"ph-magnifying-glass"}, {n:"Medkit",i:"ph-first-aid"}, {n:"Thick Gloves",i:"ph-hand-palm"}, {n:"High-Lumen Flashlight",i:"ph-flashlight"}, {n:"Almond Water",i:"ph-drop"}, {n:"Adrenaline",i:"ph-syringe"}, {n:"Weapon (Melee)",i:"ph-sword"}, {n:"Laser Pointer",i:"ph-crosshair"} ]
            ),
            history: makeHist([
                {date: "1997-10-30", t: "The Death Trap Discovery", d: "Explorers from Level 2 entered a fire exit, realizing they were trapped in a high-threat zone. The entire squad was wiped out by a Hound pack. The audio recording of their demise was recovered years later."},
                {date: "2003-05-15", t: "Base Gamma Overrun", d: "M.E.G. attempted to establish an outpost (Base Gamma) near a cluster of elevators. It was destroyed by a coordinated swarm of Skin-Stealers in 72 hours. No survivors were recovered."},
                {date: "2010-01-22", t: "Elevator Bypass Found", d: "A working elevator was documented, allowing survivors to bypass the worst sectors and escape to Level 4. This became the standard extraction protocol."},
                {date: "2016-08-09", t: "Voltage Spike Anomaly", d: "The entire level surged, temporarily incinerating a large portion of the entity population. This 2-week window allowed massive B.N.T.G. scavenging operations."},
                {date: "2023-04-12", t: "L-Corp Acoustic Dampeners", d: "Testing of personal acoustic shielding to restore localized hearing capability for field agents was successfully completed."},
                {date: "2026-07-02", t: "Elevator Grids Failing", d: "Telemetry shows 40% of known elevators to Level 4 have lost power. Entity swarms are clustering near the remaining functional lifts. Extraction is highly perilous."}
            ]),
            resonanceLogs: ["> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]", "> MULTIPLE HOSTILE BIOMETRICS PINGED.", "> ABORTING ACTIVE SCAN TO PREVENT DETECTION."]
        },
        
        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Entity", color: "#ef4444", icon: "🪟" }, { name: "Vending Machine", color: "#eab308", icon: "🍫" }, { name: "Safe Cubicle", color: "#10b981", icon: "🛏" }, { name: "Stairwell", color: "#9ca3af", icon: "🪜" }, { name: "Filing Cabinet", color: "#8b5cf6", icon: "📁" }, { name: "Server Room", color: "#06b6d4", icon: "💻" }, { name: "Break Room", color: "#f97316", icon: "☕" }, { name: "L-Corp Terminal", color: "#ec4899", icon: "🖥" } ] },
            fullMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.0", "Loop Probability": "0.0%", "Entropy Gradient": "Normal", "Clock Drift": "0s/hr", "Subjective Time": "Relaxed", "Causality Integrity": "100%", "Temporal Echoes": "None", "Chronon Rad": "0.0 ppm", "Aging Rate": "Standard", "Decay Rate": "Zero" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "99.0 H (Stable)", "Kant Counter": "1.01", "Euclidean Consistency": "95.0%", "Noclipping Threshold": "Extremely Hard", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.0%", "Magnetic Declination": "Standard", "Tesseract Depth": "Surface", "Corridor Gen Rate": "10 m/s", "Warp Factor": "0.00" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "21.0 °C", "Temp Fluctuation": "±0.5 °C", "Relative Humidity": "45%", "Pressure": "101.3 kPa", "Air Comp O2": "21.0%", "Air Comp N2": "78.0%", "Mold Spores": "Zero", "Ozone Level": "Normal", "Toxicity": "0%", "Breathability": "100%" } },
                { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "Low AC Whir", "Acoustic Decay": "Standard", "Light Source": "Fluorescents (Stable)", "Luminosity Level": "400 Lux", "Color Temp": "5000K (White)", "Audio Hallucination": "0%", "UV Radiation": "Zero", "Decibel Baseline": "40 dB", "Echo Delay": "0.2s", "Resonance": "None" } },
                { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Floor Material": "Thin Carpet", "Cubicle Density": "75%", "Wall Decay": "0%", "Entity Density": "0.01", "Pathogen Level": "Sterile", "Structural Integrity": "Perfect", "Nutrient Avail": "High", "Dehydration Risk": "Zero", "Flora/Fauna": "None", "Water Purity": "99.9%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0.5", "Sanity Drain Rate": "Restorative", "Isolation Factor": "Low", "Radio Comm": "Perfect", "GPS Function": "Online", "Shelter Viability": "100/100", "Resource Respawn": "Active", "Navigation Difficulty": "Low", "Rescue Probability": "Maximum", "Threat Type": "Stationary Traps" } }
            ],
            lore: makeLore([
                "Level 4 resembles an empty office building. It is completely safe, highly stable, and devoid of most roaming entities, acting as a sanctuary.",
                "Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. It represents a massive psychological relief for wanderers who have just survived the brutal, chaotic conditions of Level 3. Fresh Almond Water is widely available in water coolers scattered throughout the office, and vending machines frequently restock with edible snacks.",
                "Entities are almost completely nonexistent here, making it a primary hub for human civilization and the location of M.E.G. Base Omega. The only major threat comes from 'Windows' (Entity 2), which disguise themselves as normal office windows looking out onto a fake, rainy exterior. Wanderers must rigorously avoid approaching these traps. Aside from this, Level 4 is the best place in the entire Backrooms to sleep, heal, and trade supplies."
            ]) + makeEntrances(
                ["Exiting an elevator ascending from Level 3.", "Opening an office door in Level 2.", "Falling through the ceiling of Level 5.", "Sleeping inside a supply crate in Level 1.", "Entering a glass door in Level 11.", "Noclipping through a desk in Baseline Reality.", "Crawling through a perfectly clean vent in Level 2."],
                ["Walking down a grand staircase transitions smoothly to Level 5.", "Noclipping through a filing cabinet leads to Level 6.", "Drinking from a poisoned water cooler transports you to Level 7.", "Jumping out of a real window (rare) drops you into Level 11.", "Finding a heavy vault door leads to Level 10.", "Opening a boardroom door sometimes leads to Level 0."]
            ),
            survivalGuide: makeSG(
                [
                    {n:"Rest and Resupply", d:"Level 4 is the ideal place to recover sanity and heal wounds.", c:"blue", l:"Sleep in the center of cubicles; they naturally block out ambient noise and hide you from sight."},
                    {n:"The Window Threat", d:"Despite the safety, Windows (Entity 2) are a lethal trap.", c:"purple", l:"Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter."},
                    {n:"Vending Machines", d:"Break rooms contain functioning anomalous vending machines.", c:"green", l:"Coins found in desk drawers can be used to acquire protein bars. Do not eat neon-colored snacks."},
                    {n:"Base Omega Navigation", d:"M.E.G. forces patrol the area extensively.", c:"cyan", l:"Follow sticky notes left on computer monitors to find civilized outposts and trade hubs."},
                    {n:"Water Cooler Safety", d:"Most coolers contain pure Almond Water.", c:"yellow", l:"If the water is slightly pink, do not drink it. It will transport you to Level 7 immediately."},
                    {n:"Sanity Restoration", d:"The stable geometry repairs cognitive damage.", c:"fuchsia", l:"Sit down and read the blank papers found on desks; the act of focusing grounds your mind."},
                    {n:"Avoid Corner Offices", d:"Large corner offices occasionally trap wanderers in temporal loops.", c:"orange", l:"Stick to the open cubicle farm areas."}
                ],
                [ {n:"Empty Canteens",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"Backpack",i:"ph-bag"}, {n:"Notebook",i:"ph-book"}, {n:"Comfort Items",i:"ph-heart"}, {n:"First Aid",i:"ph-first-aid"}, {n:"Coins",i:"ph-coin"}, {n:"Watch",i:"ph-watch"}, {n:"Map",i:"ph-map"}, {n:"Radio",i:"ph-radio"}, {n:"Blanket",i:"ph-t-shirt"}, {n:"Pen",i:"ph-pencil"}, {n:"M.E.G. ID",i:"ph-identification-card"} ]
            ),
            history: makeHist([
                {date: "1998-11-04", t: "The Ascent from Level 3", d: "A group of battered wanderers took an elevator up from Level 3 and found this paradise. They immediately fell asleep on the carpet for 14 hours unbothered."},
                {date: "2002-04-11", t: "Base Omega Founded", d: "M.E.G. relocated primary civilian housing here due to the lack of entities. It quickly became the largest population center in the lower levels."},
                {date: "2009-07-22", t: "Window Trap Mapped", d: "The correlation between fake rain visuals and Entity 2 was definitively verified after a B.N.T.G. merchant was pulled through the glass."},
                {date: "2018-12-05", t: "Agricultural Testing", d: "B.N.T.G. attempted to grow crops in the cubicles using UV lamps with limited success, proving the soil/carpet is completely sterile."},
                {date: "2024-02-18", t: "L-Corp Server Farm", d: "Proprietary data centers were installed in the abandoned server rooms. The ambient 21°C temperature is perfect for hardware cooling."},
                {date: "2026-07-02", t: "Population Boom", d: "Level 4 currently hosts over 5,000 humans. Trade is booming. L-Corp nodes detect zero Hume fluctuations, affirming its status as a permanent sanctuary."}
            ]),
            resonanceLogs: ["> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99% STABLE.", "> NO HOSTILE BIOMETRICS DETECTED.", "> UPLOADING TELEMETRY."]
        }
    },
    entities: {
        "entity1": {
            type: "entity", id: "entity1", title: "Entity 1", name: "The Cameraman",
            themeColor: "#9ca3af", themeHover: "#6b7280", themeGlow: "rgba(156, 163, 175, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" }, { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            fullMetrics: [
                { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Non-Physical", "Carbon Based": "No", "Regeneration Factor": "N/A", "Lifespan": "Infinite", "Physical Mass": "0 kg" } },
                { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Passive", "Sentience Level": "Omniscient", "Target Preference": "Documentation", "Pack Mentality": "Solitary", "Response": "Fades Away" } },
                { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "Absolute", "Hume Disruption": "0.0m", "Gravity Resistance": "Immune", "Temporal Phasing": "Active", "Photographic Res": "4K+" } }
            ],
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div><div class="relative z-10 flex flex-col items-center animate-float"><div class="w-32 h-32 rounded-full border-2 border-gray-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast shadow-[0_0_20px_rgba(156,163,175,0.3)]"><i class="ph ph-camera text-6xl text-gray-400 opacity-80"></i></div><h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3><p class="text-xs text-gray-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p></div></div>`,
            lore: makeLore([
                "The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms.",
                "The process by which it operates is entirely unknown, but it serves as the only logical explanation for perfectly framed images appearing instantaneously in databases across M.E.G. and L-Corp terminals. The entity has never been physically observed, and its presence is only denoted by a sudden flash of light, followed by the sound of a mechanical shutter.",
                "It is completely non-hostile and seems entirely focused on documentation. Any attempt to trap, communicate with, or attack the entity results in the wanderer finding themselves completely alone, with a polaroid picture of themselves left on the floor."
            ]),
            survivalGuide: makeSG(
                [
                    {n:"Non-Intervention",d:"Engagement is strictly prohibited.",c:"blue",l:"Allow the entity to curate the database in peace. Do not attack the flash."},
                    {n:"Equipment Handling",d:"Do not touch random cameras found on tripods.",c:"gray",l:"They belong to the entity. Touching them induces localized temporal loops."},
                    {n:"Strike a Pose",d:"If you hear the shutter, freeze.",c:"green",l:"Moving during the flash can cause portions of your body to physically blur out of reality."}
                ], 
                [ {n:"Camera",i:"ph-camera"}, {n:"Polaroid Film",i:"ph-image"}, {n:"Sunglasses",i:"ph-sunglasses"}, {n:"Journal",i:"ph-book"} ]
            ),
            history: makeHist([
                {date: "1991-08-14", t:"First Anomalous Upload", d:"The original Level 0 photo was traced to an anomalous packet injection from an unknown IP address."},
                {date: "2010-09-02", t:"Entity Theorized", d:"M.E.G. officially categorized the phenomenon as Entity 1 to explain the spontaneous generation of intel."},
                {date: "2015-11-20", t:"The Polaroid Incident", d:"A wanderer attacked a flash of light. They were found a week later, completely unharmed, clutching a perfectly exposed photo of their own angry face."},
                {date: "2022-04-10", t:"L-Corp Code Injection", d:"Attempted to hack the entity's upload stream. The hack was reversed, and all L-Corp screens displayed a picture of the server room."},
                {date: "2026-07-02", t:"Ongoing Archival", d:"Entity 1 continues to upload high-resolution topography maps to our databases. We consider it a vital, untouchable asset."}
            ]),
            resonanceLogs: ["> INITIALIZING ENTITY PING...", "> SCANNING DATABASE INJECTION POINTS...", "> NO PHYSICAL ANCHOR DETECTED.", "> CONNECTION SEVERED BY EXTERNAL SOURCE."]
        },

        "entity2": {
            type: "entity", id: "entity2", title: "Entity 2", name: "Windows",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            fullMetrics: [
                { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Silicon/Void", "Carbon Based": "No", "Regeneration Factor": "Instant", "Lifespan": "Infinite", "Physical Mass": "Variable" } },
                { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Lethal Ambush", "Sentience Level": "Predatory", "Target Preference": "Unaware Wanderers", "Pack Mentality": "Solitary", "Response": "Immediate Grab" } },
                { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "None", "Hume Disruption": "2.0m", "Gravity Resistance": "N/A", "Temporal Phasing": "None", "Reach Distance": "1.5 Meters" } }
            ],
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-red-900"><div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity"><span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20 animate-pulse">HOVER TO APPROACH</span></div><div class="absolute inset-0 bg-blue-900/20 z-10"></div><div class="absolute bottom-0 w-full h-1/2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div></div></div>`,
            lore: makeLore([
                "Windows are entities that take the form of typical glass windows. They are stationary ambush traps designed to lure wanderers to their deaths.",
                "Entity 2, more commonly known as 'Windows', disguise themselves as architectural features. Behind the glass, a dark, humanoid shadow figure resides. They often project an illusion of Baseline Reality outside the window, such as a rainy street or a sunny park, to tempt homesick wanderers into approaching.",
                "If a human comes within 1.5 meters of the glass, the shadow figure will smash through the pane, grab the victim with inhuman strength, and pull them into the void behind the window. No one has ever been recovered from a Window attack."
            ]),
            survivalGuide: makeSG(
                [
                    {n:"Distance Keeping",d:"Keep a minimum distance of 2 meters from any window.",c:"red",l:"Their grab range is exactly 1.5 meters. Walk in the center of the hallway."},
                    {n:"Visual Anomalies",d:"If a window shows Baseline Reality, it is a trap.",c:"purple",l:"The Backrooms do not have natural exteriors. Rain is a dead giveaway."},
                    {n:"Blind Firing",d:"Do not shoot the glass.",c:"orange",l:"Breaking the glass intentionally releases the shadow entity into the room."}
                ], 
                [ {n:"Flashlight",i:"ph-flashlight"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Measuring Tape",i:"ph-ruler"}, {n:"Heavy Boots",i:"ph-boot"}, {n:"Blinds/Tape",i:"ph-tape"} ]
            ),
            history: makeHist([
                {date: "1998-11-04", t:"First Sighting in Level 4", d:"A survivor reported encountering a window in a windowless office. They wisely avoided it."},
                {date: "2009-07-22", t:"The Grab", d:"First recorded death via a Window captured on bodycam. The victim reached out to touch the 'rain'."},
                {date: "2016-03-14", t:"Illusion Analyzed", d:"L-Corp confirms the window projects a psychic illusion based on the victim's memories."},
                {date: "2021-12-05", t:"Shatter Protocol", d:"An agent shot the glass. The resulting entity manifestation wiped out the squad."},
                {date: "2026-07-02", t:"Current Threat", d:"Windows remain the primary cause of death in Level 4. Avoid all natural light sources."}
            ]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY PING...", "> LOCATING ENTITY 2 (WINDOW)", "> WARNING: SPATIAL TEAR DETECTED.", "> ABORTING PING."]
        }
    }
};