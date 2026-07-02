// ==========================================
// DATA STRUCTURE: LIMINOS ADVANCED ENCYCLOPEDIA
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

const makeLore = (p) => `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light leading-relaxed">${p[0]}</p></div><h3>Description</h3>${p.slice(1).map(x=>`<p class="text-justify leading-loose">${x}</p>`).join('')}`;
const makeEntrances = (e, x) => `<div class="bg-[#050505] border border-liminal-border p-6 rounded-xl font-mono text-sm shadow-inner mt-10"><h4 class="text-liminal-primary font-bold mb-3 border-b border-liminal-border pb-2 flex items-center gap-2"><i class="ph ph-door-open"></i> ENTRANCES</h4><ul class="list-none space-y-3 text-liminal-text mb-6">${e.map(i=>`<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1 flex-shrink-0"></i> <span>${i}</span></li>`).join('')}</ul><h4 class="text-liminal-safe font-bold mb-3 mt-8 border-b border-liminal-border pb-2 flex items-center gap-2"><i class="ph ph-sign-out"></i> EXITS</h4><ul class="list-none space-y-3 text-liminal-text mb-2">${x.map(i=>`<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1 flex-shrink-0"></i> <span>${i}</span></li>`).join('')}</ul></div>`;
const makeSG = (tricks, items) => `<div class="space-y-6 text-sm text-liminal-text max-w-4xl">${tricks.map((t,i)=>`<div class="p-6 bg-black/40 border border-white/5 rounded-xl border-l-4 border-l-${t.c}-500 shadow-xl hover:bg-white/5 transition-all"><h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-3"><span class="bg-${t.c}-500/20 text-${t.c}-400 w-8 h-8 rounded flex items-center justify-center">${i+1}</span> ${t.n}</h4><p class="mb-4 leading-relaxed text-gray-300 text-[15px]">${t.d}</p><div class="bg-${t.c}-900/30 border border-${t.c}-500/20 p-4 rounded text-${t.c}-300 text-xs font-mono shadow-inner"><strong class="text-white mr-2"><i class="ph ph-info"></i> L-CORP TRICK:</strong> ${t.l}</div></div>`).join('')}<div class="mt-10 pt-8 border-t border-white/10"><h4 class="text-white font-bold mb-6 text-2xl tracking-tight flex items-center gap-3"><i class="ph ph-backpack text-liminal-primary"></i> Essential Loadout</h4><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">${items.map(item=>`<div class="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 p-4 rounded-lg flex flex-col items-center justify-center gap-3 text-center group hover:border-liminal-primary/50 hover:shadow-[0_0_15px_var(--theme-glow)] transition-all"><i class="ph ${item.i} text-3xl transition-transform group-hover:scale-110" style="color:var(--theme-primary)"></i><span class="font-mono text-xs text-gray-300">${item.n}</span></div>`).join('')}</div></div></div>`;

const makeHist = (logs) => `<div class="ml-4 md:ml-8 mt-6">${logs.map((l,i)=>{
    const isFirst = i === 0;
    const isLast = i === logs.length - 1;
    const lineClass = isLast ? '' : 'border-l border-liminal-border pb-12';
    const dotClass = isLast ? 'bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse' : isFirst ? 'bg-liminal-primary shadow-[0_0_15px_var(--theme-primary)]' : 'bg-black border-2 border-liminal-muted shadow-sm';
    const tag = isFirst ? 'DATE OF DISCOVERY' : isLast ? 'PRESENT SITUATION' : `ARCHIVE LOG ${i}`;
    const color = isFirst || isLast ? 'text-white' : 'text-liminal-primary';
    return `<div class="relative pl-8 md:pl-12 ${lineClass} group">
        <div class="absolute -left-[10px] top-1.5 w-5 h-5 rounded-full z-10 ${dotClass} transition-all duration-300 group-hover:scale-125"></div>
        <div class="text-[10px] text-liminal-muted mb-2 font-mono font-bold tracking-widest uppercase flex items-center gap-2"><span class="${color} bg-white/5 px-2 py-0.5 rounded border border-white/10">${tag}</span> <span class="text-gray-500">// ${l.date}</span></div>
        <h4 class="text-white font-bold text-xl mb-3 tracking-tight">${l.t}</h4>
        <p class="text-[15px] text-gray-400 leading-loose">${l.d}</p>
    </div>`;
}).join('')}</div>`;

const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 7492, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [ { name: "Gateway Node", color: "#9ca3af", icon: "⬇" }, { name: "Almond Puddle", color: "#60a5fa", icon: "💧" }, { name: "Wall Tear", color: "#ef4444", icon: "⚡" }, { name: "Fluorescent Trap", color: "#eab308", icon: "💡" }, { name: "Carpet Sink", color: "#22c55e", icon: "🕳" }, { name: "Null Zone", color: "#a855f7", icon: "🌪" }, { name: "Manila Door", color: "#f97316", icon: "🚪" }, { name: "Loop Start", color: "#14b8a6", icon: "🔄" } ] },
            specificMetrics: { "Level 0 Proprietary": { "Carpet Saturation Depth": "1.2cm", "Wallpaper Decay Rate": "0%", "Fluorescent Flicker Rate": "0.4 Hz", "Must Scent Density": "High", "Layout Gen Speed": "Instant" } },
            globalMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:0.004", "Loop Probability": "14.2%", "Entropy Gradient": "Stagnant", "Clock Drift": "+14s/hr" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "82.4 H", "Kant Counter": "0.85", "Euclidean Consistency": "14.2%", "Noclipping Threshold": "Permeable" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "22.4 °C", "Relative Humidity": "48%", "Pressure": "100.1 kPa", "Air Comp O2": "20.1%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "1", "Sanity Drain Rate": "2.5% / hr", "Isolation Factor": "Absolute", "Radio Comm": "0%" } }
            ],
            lore: makeLore([
                "Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in. It is widely considered the tutorial to the horrors that lie beneath, though it kills through isolation rather than violence.",
                "Level 0 is an expansive, non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout, mono-yellow wallpaper, and damp carpets. The constant hum-buzz emitted by the ceiling lights permeates every area. The layout consists of randomly segmented rooms and hallways that defy conventional architectural logic. Compasses spin wildly here, GPS devices fail entirely, and drawing a map is a futile endeavor as the architecture subtly shifts when unobserved. The carpets are notoriously damp, saturated with an unknown, musty fluid that resists drying and prevents wanderers from sitting comfortably.",
                "Due to the highly anomalous spatial properties, wanderers navigating Level 0 will almost never encounter another human being, even if they enter precisely at the same time and location. The resulting absolute isolation induces rapid psychological deterioration. This often leads to severe paranoia and auditory hallucinations where the relentless hum-buzz begins to mimic human whispers or the voices of loved ones. Physical entities are exceptionally rare here; there are no hounds, no smilers, and no clump-nests. Therefore, the primary threat to survival in Level 0 is starvation, profound dehydration from the heat of the lights, and the crushing psychological weight of the infinite yellow expanse."
            ]) + makeEntrances(
                ["Accidental noclipping through a shadow in Baseline Reality.", "Attempting to touch a glitched object in the real world.", "Falling asleep in an empty, windowless room on Earth.", "Stepping through a rusted door frame in Level -1."], // 4
                ["Noclipping through an unusually dark section of wallpaper transports the wanderer to Level 1.", "Finding a rare, standard wooden door labeled 'Manila' leads to the Manila Room.", "Walking perfectly straight for 400 miles may glitch the user into Level 11."] // 3 (Total 7)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Psychological Anchoring", d:"The hum-buzz and mono-yellow aesthetic induce rapid monophobia.", c:"purple", l:"Carry a mechanical watch. The ticking overrides the hum-buzz."},
                    {n:"Resource Management", d:"There is absolutely no clean water natively generated here.", c:"yellow", l:"Search specifically for pooling condensation near structural anomalies."},
                    {n:"Wall Tracing Protocol", d:"Navigating a non-Euclidean maze without markers causes endless looping.", c:"teal", l:"Trace the left wall with your hand to break spatial recursion loops."},
                    {n:"Energy Conservation", d:"Running drastically increases caloric burn and accelerates panic.", c:"blue", l:"Maintain a strict walking pace of 3mph. Do not sprint."},
                    {n:"Hallucination Rejection", d:"You will hear voices of people you know calling for help.", c:"fuchsia", l:"Bite your lip hard. Physical pain disrupts the cognitohazard loop."} // 5
                ], 
                [ {n:"Analog Watch",i:"ph-watch"}, {n:"Almond Water",i:"ph-drop"}, {n:"Chalk",i:"ph-pencil-simple"}, {n:"Boots",i:"ph-boot"}, {n:"Blindfold",i:"ph-eye-closed"}, {n:"Earplugs",i:"ph-ear-slash"}, {n:"Backpack",i:"ph-bag"}, {n:"Notepad",i:"ph-book"} ] // 8
            ),
            history: makeHist([
                {date: "1991-08-14", t: "First Archival Record", d: "An anonymous user uploaded the first verified visual telemetry of Level 0 to a rudimentary web forum. The image was analyzed and confirmed to contain no digital manipulation."},
                {date: "1998-02-03", t: "Project 'Yellow Wallpaper'", d: "The first batch of unmanned, tethered probes were sent through a localized spatial tear in an abandoned mall. Telemetry confirmed the exact Hume level drop."},
                {date: "2004-11-21", t: "Spatial Paradox Recorded", d: "An L-Corp drone successfully mapped a hallway that intersected itself at a perfect 90-degree angle without connecting to its own origin point."},
                {date: "2012-06-08", t: "M.E.G. Isolation Study", d: "A volunteer spent 40 hours inside a tethered zone. The subject reported hearing the ceiling lights speak in the voice of their deceased mother."},
                {date: "2026-07-02", t: "L-Corp Outpost Zero", d: "L-Corp has successfully stabilized a micro-tear allowing for consistent, one-way insertion of field agents into the Lobby. Entity density remains flat at zero."} // 5
            ]),
            resonanceLogs: ["> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> EUCLIDEAN MESH REJECTED.", "> CAUSALITY BLEED DETECTED.", "> SCAN COMPLETE."]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 99120, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [ { name: "M.E.G. Alpha", color: "#22c55e", icon: "🛡" }, { name: "Supply Crate", color: "#3b82f6", icon: "📦" }, { name: "Flickering Light", color: "#eab308", icon: "💡" }, { name: "Fog Choke Point", color: "#a855f7", icon: "🌫" }, { name: "Hound Pack", color: "#ef4444", icon: "🐾" }, { name: "Generator", color: "#f97316", icon: "⚡" }, { name: "Concrete Pillar", color: "#9ca3af", icon: "🏢" }, { name: "Chalk Marker", color: "#06b6d4", icon: "✏" }, { name: "Water Puddle", color: "#60a5fa", icon: "💧" }, { name: "B.N.T.G Vault", color: "#eab308", icon: "🏦" }, { name: "Skin-Stealer", color: "#ec4899", icon: "👤" }, { name: "False Door", color: "#14b8a6", icon: "🚪" } ] },
            specificMetrics: { "Level 1 Proprietary": { "Concrete Density": "2400 kg/m³", "Fog Metallic Content": "14 ppm", "Crate Spawn Algorithm": "Fibonacci", "Blackout Duration": "14.2 Hours", "Rebar Rust Rate": "Minimal", "Generator Output": "220V" } },
            globalMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.0", "Loop Probability": "0.1%", "Entropy Gradient": "Normal", "Clock Drift": "±0.0s/hr" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "95.2 H", "Kant Counter": "1.05", "Euclidean Consistency": "80.0%", "Noclipping Threshold": "Difficult" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "15.0 °C", "Relative Humidity": "85%", "Pressure": "102.1 kPa", "Air Comp O2": "19.2%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "2", "Sanity Drain Rate": "0.1% / hr", "Isolation Factor": "Low", "Radio Comm": "Functional" } }
            ],
            lore: makeLore([
                "Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and a constant, low-hanging fog that obscures the floor. It is the first truly habitable zone wanderers encounter.",
                "Level 1 is an incredibly vast, sprawling warehouse. Unlike Level 0, this level possesses a consistent, albeit fluctuating, supply of water and electricity. This infrastructure allows for indefinite habitation by wanderers, provided that appropriate precautions are taken. Crates of supplies appear and disappear randomly across the concrete floor, containing everything from car batteries to Almond Water, medical supplies, and occasionally useless detritus like human hair. The scale of the warehouse is incomprehensible, with some structural pillars measuring miles in diameter. The dense fog that blankets the floor carries a slightly metallic scent and actively dampens acoustic travel, making it difficult to hear approaching wanderers or entities.",
                "Level 1 is notably the home of M.E.G. Base Alpha, one of the most heavily fortified survivor outposts in the Backrooms. The lighting here is prone to severe flickering and rolling blackouts. During these pitch-black periods, hostile entities such as Smilers, Hounds, and Facelings frequently manifest out of the darkness, turning the otherwise habitable zone into a lethal hunting ground. Wanderers must map out safe zones and memorize the locations of light switches and generator hubs to survive the inevitable darkness protocols."
            ]) + makeEntrances(
                ["Noclipping through a dark patch of wall in Level 0.", "Opening the main exit door in the Manila Room.", "Falling through the ceiling of Level 2 (Rare).", "Entering a painted concrete door in Level 4.", "Wandering too far into the basements of Level 11."], // 5
                ["Walking down an excessively long hallway transitions smoothly into Level 2.", "Entering a hole in the concrete wall drops the wanderer into Level 19.", "Unlocking a specific red shipping container leads to Level 3.", "Sleeping inside a supply crate sometimes wakes you up in Level 4.", "Painting a door on the wall with chalk and walking through it leads to Level 0."] // 5 (Total 10)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Outpost Proximity", d:"Level 1 is home to M.E.G. Base Alpha, the largest trade hub in the upper levels.", c:"green", l:"Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha. Avoid red chalk."},
                    {n:"The Darkness Protocol", d:"When lights flicker, entities spawn. The facility routinely experiences rolling blackouts that last up to 4 hours.", c:"yellow", l:"Power grids follow a determinable 14-hour cycle. Sync your watch and find a barricaded room before the cycle ends."},
                    {n:"Crate Scavenging", d:"Supply crates spawn dynamically. They are the only source of non-anomalous food.", c:"blue", l:"Pry open wooden crates with red markings; they contain food. Black crates contain mechanical parts."},
                    {n:"Fog Evasion", d:"The fog hides ankle-biting entities and Smilers.", c:"red", l:"Climb atop large crates to stay above the condensation line during a blackout."},
                    {n:"Generator Defense", d:"Generators keep the immediate area safe from entity spawns.", c:"orange", l:"Pour Almond water over overheating generators to cool them; it works better than standard coolant."},
                    {n:"Audio Masking", d:"The fog dampens sound, but metallic clangs travel miles.", c:"purple", l:"Wrap your boots in cloth to prevent your footsteps from echoing on the concrete floors."} // 6
                ], 
                [ {n:"Flashlight",i:"ph-flashlight"}, {n:"Respirator",i:"ph-mask-water"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Blue Chalk",i:"ph-pencil"}, {n:"Knife",i:"ph-knife"}, {n:"Batteries",i:"ph-battery-full"}, {n:"Almond Water",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"Radio",i:"ph-radio"} ] // 9
            ),
            history: makeHist([
                {date: "1994-05-11", t: "First Successful Transition", d: "A wanderer posted a blurry photo of a concrete pillar on an obscure imageboard, marking the discovery of Level 1. The image showed a distinct lack of yellow wallpaper."},
                {date: "1999-08-22", t: "First Entity Encounter", d: "A video log was recovered showing a wanderer being chased by a Hound through the fog. This confirmed that Level 1, while habitable, was not safe from predatory entities."},
                {date: "2001-09-02", t: "Establishment of Base Alpha", d: "The Major Explorer Group (M.E.G.) successfully fortified a large quadrant near a reliable water spawn."},
                {date: "2008-12-14", t: "The Long Blackout", d: "A 72-hour power failure resulted in massive entity incursions and heavy casualties. Over 40 wanderers were lost to Smilers."},
                {date: "2012-03-11", t: "B.N.T.G. Trade Route", d: "The B.N.T.G. successfully charted a reliable trade route from Base Alpha to the exits leading to Level 4."},
                {date: "2015-04-20", t: "Crate Algorithm Cracked", d: "L-Corp scientists decoded the spatial spawn logic of the wooden crates. They determined that crates manifest in areas of low human observation."},
                {date: "2026-07-02", t: "Base Alpha Thriving", d: "Current population exceeds 800 active residents. The fog toxicity levels remain stable, though L-Corp nodes detect a slight increase in Hume instability near the western expansion zones."} // 7
            ]),
            resonanceLogs: ["> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]", "> ENTITY PROXIMITY SENSORS ACTIVE.", "> SCAN COMPLETE."]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: { seed: 8847, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.05, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [ { name: "Superheated Valve", color: "#ef4444", icon: "🔥" }, { name: "Clump Nest", color: "#d946ef", icon: "🕸" }, { name: "Burst Pipe", color: "#60a5fa", icon: "💧" }, { name: "Dead End", color: "#9ca3af", icon: "🛑" }, { name: "Smiler Zone", color: "#ffffff", icon: "👁" }, { name: "Locked Fire Door", color: "#f97316", icon: "🚪" }, { name: "Maintenance Hatch", color: "#22c55e", icon: "🕳" }, { name: "Boiler Machine", color: "#eab308", icon: "⚙" }, { name: "M.E.G. Cache", color: "#3b82f6", icon: "🛡" }, { name: "Thermal Anomaly", color: "#ec4899", icon: "🌡" }, { name: "Acid Sludge", color: "#14b8a6", icon: "🧪" }, { name: "Rusty Ladder", color: "#71717a", icon: "🪜" }, { name: "Steam Vent", color: "#f43f5e", icon: "💨" }, { name: "Crawling Space", color: "#8b5cf6", icon: "🕷" } ] },
            specificMetrics: { "Level 2 Proprietary": { "Pipe Thermal Output": "Max 43°C", "Steam Pressure Level": "1200 PSI", "Iron Oxidation Rate": "Accelerated", "Acoustic Pipe Groans": "90 dB", "Hallway Width": "0.8m to 1.5m", "Acidic Sludge Flow": "2 L/min", "Ventilation Draft": "Hot" } },
            globalMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.2", "Loop Probability": "5.0%", "Entropy Gradient": "Accelerated", "Clock Drift": "-2s/hr" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "75.0 H", "Kant Counter": "1.15", "Euclidean Consistency": "60.0%", "Noclipping Threshold": "Moderate" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "38.0 °C", "Relative Humidity": "95%", "Pressure": "105.2 kPa", "Air Comp O2": "18.5%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "3", "Sanity Drain Rate": "1.5% / hr", "Isolation Factor": "Moderate", "Radio Comm": "Poor" } }
            ],
            lore: makeLore([
                "Level 2 mainly consists of dark, grey, concrete maintenance tunnels stretching endlessly, filled with scalding hot pipes.",
                "Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with rusted pipes lining the walls and ceilings. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). The intense heat causes rapid dehydration, forcing wanderers to move quickly through the suffocating atmosphere. The air is thick with steam and smells heavily of oxidized iron and sulfur. The narrow pathways make running from entities exceedingly difficult, as there is often no room to turn or maneuver.",
                "The entity density rises sharply here. Smilers lurk in the dark stretches of the tunnels, while Clumps utilize the overhead ventilation shafts to ambush unsuspecting prey. The constant groaning of expanding metal pipes creates a terrifying soundscape that easily masks the approach of Hounds. Wanderers are advised to never rest near a steaming valve, as they are prone to explosive ruptures. Finding a way out is paramount, as the heat and entities will overwhelm any prepared group within days. There are no safe outposts on this level."
            ]) + makeEntrances(
                ["Walking down a long, dark concrete hallway in Level 1.", "Noclipping through a hot boiler in Level 5.", "Entering a rusted maintenance door in Level 4.", "Falling through a broken grate in Level 3.", "Opening a red shipping container in Level 1."], // 5
                ["Finding an unlocked fire exit door leads directly to Level 3.", "Entering a colorful office door leads to Level 4.", "Noclipping into a perfectly clean pipe leads to Level 28.", "Riding an extremely rare freight elevator down leads to Level 5.", "Fainting from heat exhaustion sometimes wakes you up in Level 0.", "Climbing a ventilation ladder for hours leads to Level 15."] // 6 (Total 11)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Heat Stroke Prevention", d:"The ambient temperature in Level 2 will rapidly dehydrate wanderers. Sweating is ineffective due to 95% humidity.", c:"red", l:"Stay close to the floor where the temperature is 2-3°C cooler. Crawl if necessary."},
                    {n:"Smiler Evasion", d:"If you spot a Smiler, do not use a flashlight. Light aggravates them.", c:"purple", l:"Throw a glowstick down an intersecting corridor to distract them, then back away slowly."},
                    {n:"Ventilation Awareness", d:"Clumps hide in the ceiling vents, waiting to drop on prey.", c:"yellow", l:"Never stand directly under a dripping grate. Keep your light pointed slightly upward."},
                    {n:"Burn Treatment", d:"Bursting steam pipes are common and cause 3rd-degree burns.", c:"cyan", l:"Carry burn salve; Almond Water is less effective on thermal burns. Listen for hissing valves."},
                    {n:"Avoid Black Pipes", d:"Pipes painted black contain a highly toxic, acidic sludge.", c:"green", l:"Do not try to drink from leaking black pipes. Only tap silver pipes for condensation."},
                    {n:"Hound Combat", d:"Hounds are aggressive but easily intimidated.", c:"orange", l:"Maintain intense eye contact. Do not run. Strike them with a heavy crowbar if they lunge."},
                    {n:"Acoustic Navigation", d:"The sound of hissing steam usually denotes a dead end or a pipe cluster.", c:"gray", l:"Move toward areas of lower acoustic reverberation; it signifies wider, safer hallways."} // 7
                ],
                [ {n:"Thermometer",i:"ph-thermometer"}, {n:"Thermal Jug",i:"ph-drop"}, {n:"Burn Salve",i:"ph-first-aid"}, {n:"Glowsticks",i:"ph-lightbulb"}, {n:"Heat Gloves",i:"ph-hand-palm"}, {n:"Heavy Crowbar",i:"ph-wrench"}, {n:"Cooling Towel",i:"ph-t-shirt"}, {n:"Thick Boots",i:"ph-boot"}, {n:"Compass",i:"ph-compass"}, {n:"Respirator",i:"ph-mask-water"} ] // 10
            ),
            history: makeHist([
                {date: "1996-03-12", t: "The Heatwave Discovery", d: "Explorers breached an iron door from Level 1, immediately encountering extreme temperatures. Two members died of heatstroke."},
                {date: "1998-09-05", t: "First Smiler Casualty", d: "A wanderer's camera was recovered near a dark stretch of hallway. The final frame showed the glowing teeth of Entity 3."},
                {date: "2000-07-28", t: "Pipe Rupture Event", d: "A 40-mile stretch of piping ruptured simultaneously, flooding the corridors with boiling water."},
                {date: "2004-11-12", t: "Acid Sludge Identified", d: "A scientific team extracted samples from the black pipes. The fluid was found to be highly corrosive."},
                {date: "2007-02-19", t: "Clump Infestation Mapped", d: "M.E.G. confirmed Entity 5 populations thrive in the high-humidity environment. They documented the vent-ambush tactic."},
                {date: "2010-06-30", t: "The 30-Day Survivor", d: "A heavily scarred wanderer emerged into Level 4 after surviving in Level 2 for 30 days by drinking condensation."},
                {date: "2013-09-04", t: "Fire Exit Discovered", d: "The first verified exit to Level 3 was documented by a lone survivor running from a Hound pack."},
                {date: "2021-08-11", t: "L-Corp Thermal Scan", d: "Deployment of autonomous rovers successfully mapped temperature gradients and identified optimal paths."},
                {date: "2026-07-02", t: "Transit Only Status", d: "Due to rising thermal metrics (averaging 40°C), Level 2 is officially classified as a transit-only zone. No outposts are currently active."} // 9
            ]),
            resonanceLogs: ["> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS.", "> MULTIPLE ENTITY SIGNATURES DETECTED IN VENTILATION.", "> PROCEED WITH EXTREME CAUTION."]
        },
        
        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: { seed: 1042, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" }, { name: "Hound Pack", color: "#dc2626", icon: "🐾" }, { name: "Skin-Stealer", color: "#ec4899", icon: "👤" }, { name: "Elevator", color: "#22c55e", icon: "🚪" }, { name: "Live Wire Trap", color: "#eab308", icon: "〰" }, { name: "Machinery Room", color: "#9ca3af", icon: "⚙" }, { name: "M.E.G. Gamma", color: "#3b82f6", icon: "🛡" }, { name: "Dark Sector", color: "#000000", icon: "👁" }, { name: "Breaker Switch", color: "#f97316", icon: "🎛" }, { name: "Spilled Acid", color: "#14b8a6", icon: "🧪" } ] },
            specificMetrics: { "Level 3 Proprietary": { "Ambient Voltage Level": "10,000V", "Electromagnetic Inter.": "Severe", "Metal Grating Ox.": "5%", "Machinery RPM": "14,000", "Spark Frequency": "0.8 Hz", "Transformer Heat": "High", "Cable Insulation": "Failing", "Grid Load Variance": "Erratic" } },
            globalMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:0.9", "Loop Probability": "1.0%", "Entropy Gradient": "Normal", "Clock Drift": "+5s/hr" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "70.0 H", "Kant Counter": "1.30", "Euclidean Consistency": "40.0%", "Noclipping Threshold": "Low" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "25.0 °C", "Relative Humidity": "60%", "Pressure": "100.5 kPa", "Air Comp O2": "20.0%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "4", "Sanity Drain Rate": "3.0% / hr", "Isolation Factor": "None", "Radio Comm": "0%" } }
            ],
            lore: makeLore([
                "Level 3 is a series of long, dark, twisting hallways resembling an electrical station. It is a severe difficulty spike and acts as a massive death trap for unprepared wanderers.",
                "The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible. The architecture is a chaotic maze of brick, metal grates, and heavy machinery that serves no logical purpose. Puddles of unknown fluids frequently pool on the floor, posing a severe electrocution hazard due to hanging live wires. The magnetic interference is so strong that compasses explode, and any brought electronic devices are instantly fried. The environment feels actively hostile, with hallways narrowing and shifting when a wanderer is running.",
                "The entity density in Level 3 is extraordinarily high, classifying it as one of the most dangerous early levels. Skin-Stealers, Hounds, and Smilers roam freely in massive swarms, completely unfazed by the noise or electricity. Survival here relies heavily on stealth, visual tracking, and rapid traversal. Establishing any form of permanent base has proven impossible; M.E.G. Base Gamma was wiped out in 72 hours. The ultimate goal is to locate a functioning elevator to escape to the safety of Level 4."
            ]) + makeEntrances(
                ["Opening a fire exit door in Level 2.", "Unlocking a specific red shipping container in Level 1.", "Crawling through a dense thicket of black wires in Level 6.", "Opening a breaker box in Level 11 and crawling inside.", "Falling through a vent grate in Level 2.", "Noclipping through a television in Level 18."], // 6
                ["Finding a working elevator and riding it upwards takes you to Level 4.", "Entering a specific maintenance hatch drops you into Level 5.", "Noclipping through a brick wall while being electrocuted leads to Level 12.", "Finding a rusted car in a wide hallway leads to Level 69.", "Opening a door labeled 'Stairs' drops you into Level 7."] // 5 (Total 11)
            ),
            survivalGuide: makeSG(
                [
                    {n:"High Entity Density", d:"Do not attempt to fight. You are severely outnumbered by Skin-Stealers and Hounds.", c:"red", l:"Use the deafening machinery noise to mask your sprinting footsteps. Never engage."},
                    {n:"Electrocution Hazard", d:"Exposed live wires hang from the ceiling and touch the metal grates.", c:"yellow", l:"Stay in the exact dead-center of the hallways. Do not step in any liquid puddles."},
                    {n:"Elevator Access", d:"Elevators are the only reliable and safe extraction point to Level 4.", c:"blue", l:"Check the elevator cables with your flashlight before entering; entities frequently sever them."},
                    {n:"Visual Navigation", d:"Acoustic tracking is entirely useless here due to the 120dB background noise.", c:"teal", l:"Use a small inspection mirror to peek around corners before committing to a turn."},
                    {n:"Skin-Stealer Evasion", d:"They wear human skin and mimic voices.", c:"fuchsia", l:"If you see a human, check their blood. Skin-Stealers have clear, translucent blood."},
                    {n:"EMP Utilization", d:"Entities swarm when cornered.", c:"purple", l:"Detonate an EMP to fry the local lights, blinding Hounds and allowing you to escape in the dark."},
                    {n:"Radio Silence", d:"Using radios causes sparks to jump to the antenna.", c:"orange", l:"Turn off all transceivers to prevent electrocution."} // 7
                ],
                [ {n:"Rubber Boots",i:"ph-boot"}, {n:"EMP Grenades",i:"ph-lightning"}, {n:"Ear Protection",i:"ph-ear"}, {n:"Inspection Mirror",i:"ph-magnifying-glass"}, {n:"Medkit",i:"ph-first-aid"}, {n:"Thick Gloves",i:"ph-hand-palm"}, {n:"High-Lumen Flashlight",i:"ph-flashlight"}, {n:"Adrenaline",i:"ph-syringe"}, {n:"Weapon (Melee)",i:"ph-sword"}, {n:"Laser Pointer",i:"ph-crosshair"}, {n:"Wire Cutters",i:"ph-scissors"} ] // 11
            ),
            history: makeHist([
                {date: "1997-10-30", t: "The Death Trap Discovery", d: "Explorers from Level 2 entered a fire exit, realizing they were trapped in a high-threat zone. The entire squad was wiped out by a Hound pack. The audio recording of their demise was recovered years later."},
                {date: "2001-04-12", t: "Skin-Stealer Documentation", d: "The first verified footage of a Skin-Stealer mimicking a human voice was recorded here by a hiding survivor."},
                {date: "2003-05-15", t: "Base Gamma Overrun", d: "M.E.G. attempted to establish an outpost (Base Gamma) near a cluster of elevators. It was destroyed by a coordinated swarm of Skin-Stealers in 72 hours. No survivors were recovered."},
                {date: "2010-01-22", t: "Elevator Bypass Found", d: "A working elevator was documented, allowing survivors to bypass the worst sectors and escape to Level 4. This became the standard extraction protocol."},
                {date: "2016-08-09", t: "Voltage Spike Anomaly", d: "The entire level surged, temporarily incinerating a large portion of the entity population. This 2-week window allowed massive B.N.T.G. scavenging operations."},
                {date: "2023-04-12", t: "L-Corp Acoustic Dampeners", d: "Testing of personal acoustic shielding to restore localized hearing capability for field agents was successfully completed."},
                {date: "2026-07-02", t: "Elevator Grids Failing", d: "Telemetry shows 40% of known elevators to Level 4 have lost power. Entity swarms are clustering near the remaining functional lifts. Extraction is highly perilous."} // 7
            ]),
            resonanceLogs: ["> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]", "> MULTIPLE HOSTILE BIOMETRICS PINGED.", "> ABORTING ACTIVE SCAN TO PREVENT DETECTION."]
        },
        
        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.05, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" }, { name: "M.E.G. Omega", color: "#22c55e", icon: "🛡" }, { name: "Window Entity", color: "#ef4444", icon: "🪟" }, { name: "Vending Machine", color: "#eab308", icon: "🍫" }, { name: "Safe Cubicle", color: "#10b981", icon: "🛏" }, { name: "Stairwell", color: "#9ca3af", icon: "🪜" }, { name: "Filing Cabinet", color: "#8b5cf6", icon: "📁" }, { name: "Server Room", color: "#06b6d4", icon: "💻" }, { name: "Break Room", color: "#f97316", icon: "☕" }, { name: "L-Corp Terminal", color: "#ec4899", icon: "🖥" }, { name: "Paper Jam", color: "#f43f5e", icon: "📄" }, { name: "Copier Machine", color: "#14b8a6", icon: "🖨" }, { name: "Locked Boardroom", color: "#d97706", icon: "🚪" }, { name: "Coffee Puddle", color: "#64748b", icon: "☕" }, { name: "Elevator Bank", color: "#a855f7", icon: "🛗" }, { name: "Fluorescent Buzz", color: "#eab308", icon: "💡" }, { name: "Desolate Hall", color: "#334155", icon: "🛣" }, { name: "Trading Post", color: "#10b981", icon: "💰" }, { name: "Medical Cache", color: "#ef4444", icon: "💊" }, { name: "Janitor Closet", color: "#0ea5e9", icon: "🧹" } ] },
            specificMetrics: { "Level 4 Proprietary": { "Cubicle Density": "75%", "Carpet Cleanliness": "Pristine", "Fluorescent Flicker Rate": "0%", "Vending Restock Rate": "14 Days", "Wi-Fi Signal Strength": "Moderate", "Ink Toner Presence": "Infinite", "Coffee Spoilage Time": "Never", "Window Trap Ratio": "1 in 500" } },
            globalMetrics: [
                { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Time Dilation": "1:1.0", "Loop Probability": "0.0%", "Entropy Gradient": "Normal", "Clock Drift": "0s/hr" } },
                { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level": "99.0 H", "Kant Counter": "1.01", "Euclidean Consistency": "95.0%", "Noclipping Threshold": "Hard" } },
                { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp": "21.0 °C", "Relative Humidity": "45%", "Pressure": "101.3 kPa", "Air Comp O2": "21.0%" } },
                { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0.5", "Sanity Drain Rate": "Restorative", "Isolation Factor": "Low", "Radio Comm": "Perfect" } }
            ],
            lore: makeLore([
                "Level 4 resembles an empty office building. It is completely safe, highly stable, and devoid of most roaming entities, acting as a sanctuary.",
                "Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. It represents a massive psychological relief for wanderers who have just survived the brutal, chaotic conditions of Level 3. Fresh Almond Water is widely available in water coolers scattered throughout the office, and vending machines frequently restock with edible snacks. The ambient temperature is a perfectly stable 21°C, and the air smells faintly of fresh printer paper and ozone.",
                "Entities are almost completely nonexistent here, making it a primary hub for human civilization and the location of M.E.G. Base Omega. The only major threat comes from 'Windows' (Entity 2), which disguise themselves as normal office windows looking out onto a fake, rainy exterior. Wanderers must rigorously avoid approaching these traps. Aside from this, Level 4 is the best place in the entire Backrooms to sleep, heal, and trade supplies. The architecture makes sense, and straight lines remain straight."
            ]) + makeEntrances(
                ["Exiting an elevator ascending from Level 3.", "Opening an office door in Level 2.", "Falling through the ceiling of Level 5.", "Sleeping inside a supply crate in Level 1.", "Entering a glass door in Level 11.", "Noclipping through a desk in Baseline Reality.", "Crawling through a perfectly clean vent in Level 2.", "Walking through a white door in Level 0."], // 8
                ["Walking down a grand staircase transitions smoothly to Level 5.", "Noclipping through a filing cabinet leads to Level 6.", "Drinking from a poisoned water cooler transports you to Level 7.", "Jumping out of a real window drops you into Level 11.", "Finding a heavy vault door leads to Level 10.", "Opening a boardroom door sometimes leads to Level 0.", "Crawling into the ceiling tiles drops you into Level 19."] // 7 (Total 15)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Rest and Resupply", d:"Level 4 is the ideal place to recover sanity and heal wounds.", c:"blue", l:"Sleep in the center of cubicles; they naturally block out ambient noise and hide you from sight."},
                    {n:"The Window Threat", d:"Despite the safety, Windows (Entity 2) are a lethal trap.", c:"purple", l:"Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter."},
                    {n:"Vending Machines", d:"Break rooms contain functioning anomalous vending machines.", c:"green", l:"Coins found in desk drawers can be used to acquire protein bars. Do not eat neon-colored snacks."},
                    {n:"Base Omega Navigation", d:"M.E.G. forces patrol the area extensively.", c:"cyan", l:"Follow sticky notes left on computer monitors to find civilized outposts and trade hubs."},
                    {n:"Water Cooler Safety", d:"Most coolers contain pure Almond Water.", c:"yellow", l:"If the water is slightly pink, do not drink it. It will transport you to Level 7 immediately."},
                    {n:"Sanity Restoration", d:"The stable geometry repairs cognitive damage.", c:"fuchsia", l:"Sit down and read the blank papers found on desks; the act of focusing grounds your mind."},
                    {n:"Avoid Corner Offices", d:"Large corner offices occasionally trap wanderers in temporal loops.", c:"orange", l:"Stick to the open cubicle farm areas. If the carpet turns dark blue, turn around."},
                    {n:"Server Room Temperatures", d:"The server rooms are freezing cold and contain complex electronics.", c:"teal", l:"Use them to store perishable food, but do not sleep in them due to hypothermia risk."},
                    {n:"Desk Scavenging", d:"Desks often contain useful office supplies.", c:"gray", l:"Scissors and letter openers make excellent improvised shivs for later levels."},
                    {n:"Stairwell Exit Approach", d:"The stairwells leading to Level 5 play faint jazz music.", c:"red", l:"Only descend if you are fully stocked on Almond water and earplugs."} // 10
                ],
                [ {n:"Empty Canteens",i:"ph-drop"}, {n:"Sleeping Bag",i:"ph-sleeping-bag"}, {n:"Backpack",i:"ph-bag"}, {n:"Notebook",i:"ph-book"}, {n:"Comfort Items",i:"ph-heart"}, {n:"First Aid",i:"ph-first-aid"}, {n:"Coins",i:"ph-coin"}, {n:"Watch",i:"ph-watch"}, {n:"Map",i:"ph-map"}, {n:"Radio",i:"ph-radio"}, {n:"Blanket",i:"ph-t-shirt"}, {n:"Pen",i:"ph-pencil"}, {n:"M.E.G. ID",i:"ph-identification-card"}, {n:"Scissors",i:"ph-scissors"}, {n:"Batteries",i:"ph-battery-full"} ] // 15
            ),
            history: makeHist([
                {date: "1998-11-04", t: "The Ascent from Level 3", d: "A group of battered wanderers took an elevator up from Level 3 and found this paradise. They immediately fell asleep on the carpet for 14 hours unbothered, reporting a complete restoration of sanity."},
                {date: "1999-06-15", t: "First Almond Water Discovery", d: "A wanderer tested the water cooler fluid. It tasted faintly of vanilla and almond, and miraculously cured their infected wounds. The 'Almond Water' phenomenon was named."},
                {date: "2002-04-11", t: "Base Omega Founded", d: "M.E.G. relocated primary civilian housing here due to the total lack of entities. It quickly became the largest population center in the lower levels."},
                {date: "2005-02-18", t: "The First Trade Guild", d: "B.N.T.G. established their central economy here, using Almond Water and AA batteries as standard currency."},
                {date: "2009-07-22", t: "Window Trap Mapped", d: "The correlation between fake rain visuals and Entity 2 was definitively verified after a B.N.T.G. merchant was pulled through the glass."},
                {date: "2012-09-10", t: "Stairwell to Level 5 Charted", d: "Explorers successfully descended the grand staircase, discovering the Terror Hotel. They returned to warn others of the psychological hazard."},
                {date: "2015-03-30", t: "Vending Machine Exploit", d: "Wanderers found that slugging the vending machines with metal washers produces infinite supplies. The anomalous machines never run out of stock."},
                {date: "2018-12-05", t: "Agricultural Testing", d: "B.N.T.G. attempted to grow crops in the cubicles using UV lamps with limited success, proving the soil/carpet is completely sterile."},
                {date: "2020-08-14", t: "Filing Cabinet Exit Verified", d: "A wanderer attempting to hide in a filing cabinet noclipped directly into the pitch-black void of Level 6. The route was sealed by M.E.G."},
                {date: "2022-01-22", t: "M.E.G. Expansion Project", d: "Base Omega expands across a 50-mile radius, securing millions of square feet of office space for civilian housing."},
                {date: "2024-02-18", t: "L-Corp Server Farm", d: "Proprietary data centers were installed in the abandoned server rooms. The ambient 21°C temperature is perfect for hardware cooling, establishing the LiminOS backbone."},
                {date: "2026-07-02", t: "Population Boom", d: "Level 4 currently hosts over 5,000 humans. Trade is booming. L-Corp nodes detect zero Hume fluctuations, affirming its status as a permanent sanctuary. Civilian morale is at an all-time high."} // 12
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
            specificMetrics: { "Entity 1 Proprietary": { "Flash Luminosity": "15,000 Lumens", "Audio Shutter Volume": "80 dB", "Camera Make": "Unknown/Anomalous", "Interaction Range": "Omnipresent", "Data Injection Speed": "Instantaneous", "Footprint Generation": "Zero", "Thermal Trace": "Zero" } },
            globalMetrics: [
                { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Non-Physical", "Carbon Based": "No", "Regeneration Factor": "N/A" } },
                { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Passive", "Sentience Level": "Omniscient", "Target Preference": "Documentation" } },
                { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "Absolute", "Hume Disruption": "0.0m", "Gravity Resistance": "Immune" } }
            ],
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border"><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4KPHBhdGggZD0iTTAgMEg0VjRIMEoiIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-30"></div><div class="relative z-10 flex flex-col items-center animate-float"><div class="w-32 h-32 rounded-full border-2 border-gray-500/30 flex items-center justify-center relative mb-4 animate-pulse-fast shadow-[0_0_20px_rgba(156,163,175,0.3)]"><i class="ph ph-camera text-6xl text-gray-400 opacity-80"></i></div><h3 class="text-white font-mono font-bold tracking-widest">ENTITY SIGNATURE TRACKING</h3><p class="text-xs text-gray-400 font-mono mt-2">NO REAL-TIME VISUAL AVAILABLE (UNTRACKABLE)</p></div></div>`,
            lore: makeLore([
                "The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms.",
                "The process by which it operates is entirely unknown, but it serves as the only logical explanation for perfectly framed images appearing instantaneously in databases across M.E.G. and L-Corp terminals. The entity has never been physically observed, and its presence is only denoted by a sudden flash of light, followed by the sound of a mechanical shutter.",
                "It is completely non-hostile and seems entirely focused on documentation. Any attempt to trap, communicate with, or attack the entity results in the wanderer finding themselves completely alone, with a polaroid picture of themselves left on the floor. It prefers photographing liminal transition spaces."
            ]) + makeEntrances(
                ["Appears randomly across any level without warning.", "Manifests instantly if a wanderer discovers a previously uncharted transition point.", "Triggers when a wanderer is perfectly still for 48 hours.", "Following a trail of polaroids dropped on the floor.", "Staring deeply into the flash of a broken camera."], // 5
                ["Fades out of reality within 1.4 seconds of taking a photograph.", "Leaves behind a polaroid film that acts as an anchor to reality.", "Blinds the wanderer before disappearing.", "Teleports the wanderer to the last place they were photographed.", "Disintegrates into silver nitrate dust when touched.", "Retreats if exposed to extreme heat."] // 6 (Total 11)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Non-Intervention",d:"Engagement is strictly prohibited.",c:"blue",l:"Allow the entity to curate the database in peace. Do not attack the flash."},
                    {n:"Equipment Handling",d:"Do not touch random cameras found on tripods.",c:"gray",l:"They belong to the entity. Touching them induces localized temporal loops."},
                    {n:"Strike a Pose",d:"If you hear the shutter, freeze.",c:"green",l:"Moving during the flash can cause portions of your body to physically blur out of reality."},
                    {n:"Information Drops",d:"Polaroids left behind often show the nearest safe exit.",c:"purple",l:"Study the photo carefully; the lighting angle hints at the correct path."},
                    {n:"Ignore the Flash Blindness",d:"The flash is 15,000 lumens and will blind you temporarily.",c:"yellow",l:"Do not run while blind; wait 30 seconds for your vision to return to avoid noclipping."},
                    {n:"Flash Avoidance",d:"Prolonged exposure to the flash causes memory erasure.",c:"orange",l:"Close your eyes and turn your head if you hear the shutter winding up."} // 6
                ], 
                [ {n:"Camera",i:"ph-camera"}, {n:"Polaroid Film",i:"ph-image"}, {n:"Sunglasses",i:"ph-sunglasses"}, {n:"Journal",i:"ph-book"}, {n:"Pen",i:"ph-pencil"}, {n:"Flashlight",i:"ph-flashlight"}, {n:"Watch",i:"ph-watch"}, {n:"Compass",i:"ph-compass"}, {n:"Almond Water",i:"ph-drop"} ] // 9
            ),
            history: makeHist([
                {date: "1991-08-14", t:"First Anomalous Upload", d:"The original Level 0 photo was traced to an anomalous packet injection from an unknown IP address."},
                {date: "1995-03-22", t:"Flash Phenomenon Recorded", d:"A survivor in Level 2 reported a massive flash of light, followed by a photo of a Clump nest appearing in their pocket."},
                {date: "2001-09-02", t:"Entity Theorized", d:"M.E.G. officially categorized the phenomenon as Entity 1 to explain the spontaneous generation of intel."},
                {date: "2015-11-20", t:"The Polaroid Incident", d:"A wanderer attacked a flash of light. They were found a week later, completely unharmed, clutching a perfectly exposed photo of their own angry face."},
                {date: "2022-04-10", t:"L-Corp Code Injection", d:"Attempted to hack the entity's upload stream. The hack was reversed, and all L-Corp screens displayed a picture of the server room."},
                {date: "2026-07-02", t:"Ongoing Archival", d:"Entity 1 continues to upload high-resolution topography maps to our databases. We consider it a vital, untouchable asset."} // 6
            ]),
            resonanceLogs: ["> INITIALIZING ENTITY PING...", "> SCANNING DATABASE INJECTION POINTS...", "> NO PHYSICAL ANCHOR DETECTED.", "> CONNECTION SEVERED BY EXTERNAL SOURCE."]
        },

        "entity2": {
            type: "entity", id: "entity2", title: "Entity 2", name: "Windows",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.3)", idleAnimation: "animate-flicker",
            tags: [ { label: "HOSTILE", class: "bg-red-500/10 text-red-400 border-red-500/30" }, { label: "STATIONARY TRAP", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMTExIi8+PHBhdGggZD0iTTAgOEgxNk04IDBWODE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Entity 2 Proprietary": { "Glass Tensile Strength": "Unbreakable", "Reach Distance": "1.5 Meters", "Illusion Type": "Psychic Memory Projection", "Shadow Mass": "Void Matter", "Preferred Target": "Homesick Humans", "Lure Radius": "10 Meters", "Vibration Frequency": "14 Hz", "Shatter Sound Level": "110 dB" } },
            globalMetrics: [
                { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Silicon/Void", "Carbon Based": "No", "Regeneration Factor": "Instant" } },
                { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Lethal Ambush", "Sentience Level": "Predatory", "Target Preference": "Unaware Wanderers" } },
                { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "None", "Hume Disruption": "2.0m", "Gravity Resistance": "N/A" } }
            ],
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#050505] overflow-hidden border-b border-liminal-border group cursor-crosshair"><div class="w-48 h-64 border-8 border-gray-800 bg-black relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-red-900"><div class="absolute inset-0 flex items-center justify-center z-30 opacity-100 group-hover:opacity-0 transition-opacity"><span class="font-mono text-xs text-red-500/50 bg-black/50 px-2 py-1 border border-red-500/20 animate-pulse">HOVER TO APPROACH</span></div><div class="absolute inset-0 bg-blue-900/20 z-10"></div><div class="absolute bottom-0 w-full h-1/2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div></div></div>`,
            lore: makeLore([
                "Windows are entities that take the form of typical glass windows. They are stationary ambush traps designed to lure wanderers to their deaths.",
                "Entity 2, more commonly known as 'Windows', disguise themselves as architectural features. Behind the glass, a dark, humanoid shadow figure resides. They often project an illusion of Baseline Reality outside the window, such as a rainy street or a sunny park, to tempt homesick wanderers into approaching.",
                "If a human comes within 1.5 meters of the glass, the shadow figure will smash through the pane, grab the victim with inhuman strength, and pull them into the void behind the window. No one has ever been recovered from a Window attack. They are exceptionally common in Level 4 and Level 188."
            ]) + makeEntrances(
                ["Architectural generation during level transition.", "Replacing ordinary walls when a wanderer is not looking.", "Manifesting in clusters in Level 188.", "Spawning inside empty doorframes on Level 4.", "Appearing as skylights in Level 5."], // 5
                ["Walking away further than 10 meters breaks the psychic lure.", "Covering the glass fully neutralizes the entity's ability to hunt.", "Shining UV light forces the entity back into the void temporarily.", "Breaking line of sight for 5 minutes despawns the trap."] // 4 (Total 9)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Distance Keeping",d:"Keep a minimum distance of 2 meters from any window.",c:"red",l:"Their grab range is exactly 1.5 meters. Walk in the center of the hallway."},
                    {n:"Visual Anomalies",d:"If a window shows Baseline Reality, it is a trap.",c:"purple",l:"The Backrooms do not have natural exteriors. Rain is a dead giveaway."},
                    {n:"Blind Firing",d:"Do not shoot the glass.",c:"orange",l:"Breaking the glass intentionally releases the shadow entity into the room."},
                    {n:"Acoustic Lures",d:"Windows will often play sounds of crying children or barking dogs.",c:"yellow",l:"Wear earplugs. If the sound is coming from a pane of glass, ignore it completely."},
                    {n:"Covering Protocol",d:"If you must sleep in a room with a Window, cover it completely.",c:"green",l:"Tape garbage bags or thick blankets over the glass. Out of sight prevents the psychic lure."},
                    {n:"Mirror Check",d:"Windows don't reflect light properly.",c:"teal",l:"Shine a flashlight into the glass. If the beam disappears instead of bouncing back, it is an entity."} // 6
                ], 
                [ {n:"Flashlight",i:"ph-flashlight"}, {n:"Crowbar",i:"ph-wrench"}, {n:"Measuring Tape",i:"ph-ruler"}, {n:"Heavy Boots",i:"ph-boot"}, {n:"Blinds/Tape",i:"ph-tape"}, {n:"Earplugs",i:"ph-ear-slash"}, {n:"Blackout Curtains",i:"ph-app-window"}, {n:"Almond Water",i:"ph-drop"}, {n:"Mirrors",i:"ph-magnifying-glass"}, {n:"First Aid",i:"ph-first-aid"}, {n:"Radio",i:"ph-radio"} ] // 11
            ),
            history: makeHist([
                {date: "1998-11-04", t:"First Sighting in Level 4", d:"A survivor reported encountering a window in a windowless office. They wisely avoided it, noting the impossibility of rain inside a building."},
                {date: "2003-02-18", t:"Psychic Lure Documented", d:"A wanderer described feeling an overwhelming urge to jump out of the window to 'go home'. They were restrained by their party."},
                {date: "2009-07-22", t:"The Grab", d:"First recorded death via a Window captured on bodycam. The victim reached out to touch the 'rain' and was instantly pulled into the darkness."},
                {date: "2016-03-14", t:"Illusion Analyzed", d:"L-Corp confirms the window projects a psychic illusion based on the victim's memories, not a standard visual projection."},
                {date: "2021-12-05", t:"Shatter Protocol Failure", d:"An agent shot the glass thinking they could kill the entity. The resulting shadow manifestation wiped out the entire squad."},
                {date: "2024-05-10", t:"Level 188 Quarantine", d:"M.E.G. declares Level 188 a hazard zone due to the walls consisting entirely of Window entities."},
                {date: "2026-07-02", t:"Current Threat", d:"Windows remain the primary cause of death in Level 4. Avoid all natural light sources. Do not trust your eyes."} // 7
            ]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY PING...", "> LOCATING ENTITY 2 (WINDOW)", "> WARNING: SPATIAL TEAR DETECTED.", "> ABORTING PING."]
        },

        "entity3": {
            type: "entity", id: "entity3", title: "Entity 3", name: "Smilers",
            themeColor: "#ffffff", themeHover: "#e2e8f0", themeGlow: "rgba(255, 255, 255, 0.4)", idleAnimation: "animate-pulse",
            tags: [ { label: "HIGHLY HOSTILE", class: "bg-red-700/10 text-red-500 border-red-700/30" }, { label: "LIGHT SENSITIVE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIgMkg0TTYgMkg4TTMgOEg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            specificMetrics: { "Entity 3 Proprietary": { "Bioluminescence": "High (Face only)", "Thermal Output": "Absolute Zero (-273°C)", "Bite Force": "4,500 PSI", "Pupil Dilation": "Zero", "Speed in Darkness": "50 km/h", "Sound Output": "Hyena-like Laugh" } },
            globalMetrics: [
                { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Unknown", "Carbon Based": "Unverified", "Regeneration Factor": "N/A" } },
                { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Predatory / Lethal", "Sentience Level": "Animalistic", "Target Preference": "Light sources" } },
                { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "Enabled", "Hume Disruption": "0.5m", "Gravity Resistance": "100%" } }
            ],
            interactiveModule: `<div class="flex-1 relative flex items-center justify-center bg-[#000] overflow-hidden border-b border-liminal-border cursor-none" id="smiler-container" onmousemove="window.updateSmiler(event, this)"><div class="text-[8px] absolute top-2 left-2 text-liminal-muted font-mono z-20 animate-pulse">MOVE CURSOR TO ILLUMINATE</div><div class="absolute inset-0 bg-black z-10 pointer-events-none" style="background: radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 0%, rgba(0,0,0,0.95) 80%, #000 100%);" id="flashlight-mask"></div><div class="absolute flex flex-col items-center gap-1 z-0 transition-all duration-1000 ease-out animate-float" style="left: 60%; top: 40%;"><div class="flex gap-5"><div class="w-4 h-4 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#fff]"></div><div class="w-4 h-4 bg-white rounded-full blur-[1px] shadow-[0_0_15px_#fff]"></div></div><svg width="60" height="30" viewBox="0 0 40 20" class="mt-3 drop-shadow-[0_0_15px_rgba(255,255,255,1)]"><path d="M 0 5 Q 20 20 40 5 L 35 15 Q 20 25 5 15 Z" fill="white" class="animate-flicker" /></svg></div></div>`,
            lore: makeLore([
                "Smilers are highly aggressive entities known for their glowing white eyes and teeth that manifest exclusively in pitch darkness.",
                "Entity 3, the Smilers, are generally hostile entities that reside in the dark areas of various levels. They are recognizable by their signature glowing white eyes and a wide, toothy grin. They are drawn to light and movement, and will chase down wanderers who attempt to use flashlights in their territory.",
                "They possess no visible body, though thermal imaging reveals a massive, distorted humanoid structure that absorbs ambient heat, dropping the temperature of a room to freezing when they are near. Their primary hunting ground is Level 6."
            ]) + makeEntrances(
                ["Manifesting in completely unlit areas of Level 2.", "Spawning during the blackout phases of Level 1.", "Inhabiting the deepest basements of Level 3.", "Lurking in the pitch-black void of Level 6.", "Appearing inside unlit closets in Level 13.", "Hiding under beds in Level 18."], // 6
                ["Retreating instantly when exposed to high-lumen light sources.", "Despawning when a room's power grid is restored.", "Dissipating into black smoke if struck with a Smiler Exterminator dart.", "Fleeing if a louder, larger entity (like a Hound pack) approaches.", "Noclipping back into the walls if starved of light for 3 weeks."] // 5 (Total 11)
            ),
            survivalGuide: makeSG(
                [
                    {n:"Flashlight Decoy Protocol",d:"Throw your active light source in the opposite direction.",c:"white",l:"Sprint toward an illuminated area while they chase the flashlight."},
                    {n:"Eye Contact Maintenance",d:"Maintain eye contact while slowly backing away.",c:"gray",l:"Turning your back triggers their predator pursuit instinct."},
                    {n:"Thermal Warning",d:"If your breath suddenly fogs up, a Smiler is within 10 feet.",c:"blue",l:"Equip your Smiler Exterminator immediately. Do not run blind."},
                    {n:"Smiler Exterminator",d:"A specialized chemical deterrent created by Base Alpha.",c:"green",l:"Spray it directly at the glowing eyes to force a retreat."},
                    {n:"Avoid Sudden Noises",d:"They are primarily sight-hunters but are agitated by loud noise.",c:"yellow",l:"Walk heel-to-toe to minimize echoing footsteps in the dark."},
                    {n:"Glowstick Distraction",d:"Crack a glowstick and throw it down a vent.",c:"purple",l:"The entity will squeeze into the vent to chase it, clearing the hallway."},
                    {n:"Do not use UV light",d:"UV light enrages them, increasing their speed by 300%.",c:"red",l:"Stick to standard yellow or white incandescent bulbs."} // 7
                ], 
                [ {n:"Breakable Glowsticks",i:"ph-lightbulb"}, {n:"Smiler Exterminator",i:"ph-spray-bottle"}, {n:"Backup Flashlight",i:"ph-flashlight"}, {n:"Thermal Coat",i:"ph-t-shirt"}, {n:"Heavy Boots",i:"ph-boot"}, {n:"Almond Water",i:"ph-drop"}, {n:"First Aid",i:"ph-first-aid"}, {n:"Batteries",i:"ph-battery-full"}, {n:"Compass",i:"ph-compass"}, {n:"Notepad",i:"ph-book"} ] // 10
            ),
            history: makeHist([
                {date: "1996-03-12", t:"First Visual Contact",d:"A blurry image of glowing teeth in Level 2 was captured by a deceased explorer. The camera was found frozen solid."},
                {date: "2002-08-14", t:"The Level 6 Massacre",d:"A heavily armed M.E.G. squad entered Level 6. All 12 members were wiped out within 5 minutes by a massive swarm."},
                {date: "2008-11-05", t:"Thermal Body Discovered",d:"L-Corp utilized military-grade FLIR cameras to finally outline the massive, spider-like body attached to the glowing face."},
                {date: "2013-09-04", t:"Creation of Smiler Exterminator",d:"Base Alpha scientists formulated a deterrent compound using a mixture of Almond Water and anomalous fungi."},
                {date: "2020-02-18", t:"UV Enragement Proven",d:"A B.N.T.G. scavenger attempted to use a UV flare. The Smiler tore through a steel door to reach them."},
                {date: "2026-07-02", t:"Population Control",d:"M.E.G. actively patrols the borders of Level 1 during blackouts with Exterminator cannons to keep the population in check. Casualties have dropped 40%."} // 6
            ]),
            resonanceLogs: ["> INITIATING TARGETED ENTITY SCAN...", "> WARNING: PHOTON EMISSION DETECTED.", "> THERMAL SENSORS: -250C.", "> ENTITY PURSUIT DETECTED."]
        }
    }
};