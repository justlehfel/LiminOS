// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
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
        { class: "Class Habitable", name: "Sanctuary", color: "bg-teal-400", desc: "An environment naturally conducive to human life, often possessing restorative anomalous properties." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" }, { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" }, { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
};

const GlobalMetrics = [
    { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.00%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h" } },
    { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level (Reality)": "100.0 H", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.9%", "Noclipping Threshold": "Impossible" } },
    { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp (Core)": "20.0 °C", "Temp Fluctuation (24h)": "±2.0 °C", "Relative Humidity": "40-60%", "Atmospheric Pressure": "101.3 kPa" } },
    { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "None", "Acoustic Reverberation": "Standard", "Light Source Type": "Variable", "Luminosity Level": "Variable Lux" } },
    { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Entity Density": "0.00", "Organic Decay Rate": "Standard" } },
    { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0", "Sanity Drain Rate": "0%", "Isolation Factor": "Variable", "Shelter Viability Score": "90/100" } }
];

const GlobalEntityMetrics = [
    { category: "Biological Makeup", icon: "ph-dna", color: "text-green-400", data: { "Cellular Structure": "Unknown", "Carbon Based": "Unverified", "Regeneration Factor": "N/A" } },
    { category: "Behavioral Matrix", icon: "ph-brain", color: "text-red-400", data: { "Hostility Baseline": "Docile", "Sentience Level": "Unknown", "Target Preference": "None" } },
    { category: "Dimensional Limits", icon: "ph-intersect", color: "text-purple-400", data: { "Noclip Capability": "Enabled", "Hume Disruption": "0.0m", "Gravity Resistance": "100%" } }
];

// DYNAMIC HELPERS
const makeSG = (tricks, items) => `<div class="space-y-6 text-sm text-liminal-text max-w-4xl">${tricks.map((t,i)=>`<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-${t.c}-500 shadow-lg"><h4 class="text-${t.c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">${i+1}. ${t.n}</h4><p class="mb-2">${t.d}</p><p class="bg-${t.c}-900/20 p-3 rounded text-${t.c}-200 text-xs font-mono"><strong>L-CORP TRICK:</strong> ${t.l}</p></div>`).join('')}<div class="mt-8 pt-6 border-t border-white/10"><h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout</h4><div class="grid grid-cols-2 md:grid-cols-4 gap-3">${items.map(item=>`<div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><i class="ph ${item.i} text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">${item.n}</span></div>`).join('')}</div></div></div>`;
const makeHist = (logs) => `<div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">${logs.map((l,i)=>`<div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-primary rounded-full z-10 shadow-[0_0_8px_var(--theme-glow)]"></div><div class="text-[10px] text-liminal-primary mb-1 font-mono font-bold tracking-widest">ARCHIVE LOG ${i+1} // ${l.date}</div><h4 class="text-white font-bold text-lg mb-2">${l.t}</h4><p class="text-sm text-liminal-muted leading-relaxed">${l.d}</p></div>`).join('')}</div>`;
const makeGlobals = (overrides) => { const merged = GlobalMetrics.map(b => ({ ...b, data: { ...b.data, ...(overrides[b.category] || {}) } })); return `<div class="space-y-6 text-sm max-w-4xl"><h3 class="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Global Environment Metrics</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${merged.map(m => `<div class="p-4 bg-black/40 border border-white/5 rounded-lg shadow-lg"><h4 class="${m.color} font-bold uppercase mb-3 text-xs flex items-center gap-2"><i class="ph ${m.icon} text-lg"></i> ${m.category}</h4><ul class="space-y-1.5">${Object.entries(m.data).map(([k,v]) => `<li class="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1"><span class="text-liminal-muted">${k}</span><span class="text-white text-right">${v}</span></li>`).join('')}</ul></div>`).join('')}</div></div>`; };

const LiminOSDatabase = {
    levels: {
        "level0": {
            type: "level", id: "level0", title: "Level 0", name: "The Lobby",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNjY2FhMDAiLz48cGF0aCBkPSJNMCAwTDggOE04IDBMMCA4IiBzdHJva2U9IiNhYTg4MDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015, renderStyle: 'grid', wallColor: '#eab308', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.15, bgColor: '#030303', pois: [ { name: "Gateway to Level 1", color: "#9ca3af", icon: "⬇" }, { name: "Almond Water", color: "#60a5fa", icon: "💧" } ] },
            specificMetrics: { "Level 0 Specific": { "Carpet Saturation": "1.2cm (Avg)" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H (Low)", "Euclidean Consistency": "14.2%" }, "Acoustic & Luminescent": { "Ambient Hum": "59.8 Hz (Constant)" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p></div><h3>Description</h3><p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. The constant hum-buzz emitted by the ceiling lights permeates every area. The layout consists of randomly segmented rooms and hallways that defy conventional architectural logic. Compasses spin wildly here, and GPS devices fail entirely to establish a signal. The carpets are notoriously damp, saturated with an unknown, mold-resistant fluid.</p><p>Due to the anomalous spatial properties, wanderers navigating Level 0 will almost never encounter another human being, even if they enter precisely at the same time and location. The resulting isolation induces rapid psychological deterioration, often leading to paranoia and auditory hallucinations where the hum-buzz mimics human whispers. Physical entities are exceptionally rare here, meaning the primary threat to survival is starvation, dehydration, and the psychological weight of the infinite yellow expanse.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Accidental noclipping from Baseline Reality is the sole known method of entry.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Noclipping through unusually dark walls transports the wanderer to Level 1.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a rare door labeled "Manila" leads to the Manila Room.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Psychological Anchoring",d:"The hum-buzz and mono-yellow aesthetic induce rapid monophobia.",c:"purple",l:"Carry a mechanical watch. The ticking overrides the hum-buzz."},{n:"Resource Management",d:"There is absolutely no clean water natively generated here.",c:"yellow",l:"Search specifically for pooling condensation near structural anomalies."},{n:"Wall Tracing",d:"Navigating a non-Euclidean maze without markers causes endless looping.",c:"teal",l:"Trace the left wall with your hand to break spatial recursion loops."},{n:"Conserve Energy",d:"Running drastically increases caloric burn and accelerates panic.",c:"blue",l:"Maintain a walking pace of 3mph. Do not sprint."}], 
                [{n:"Analog Headsets",i:"ph-headphones"},{n:"Almond Water",i:"ph-drop"},{n:"Compass",i:"ph-compass"},{n:"Chalk",i:"ph-pencil-simple"},{n:"Stopwatch",i:"ph-watch"}]
            ),
            history: makeHist([
                {date: "1991-08-14", t: "Initial Archival Image", d: "An anonymous user uploads the first verified visual telemetry of Level 0."},
                {date: "1998-02-03", t: "Project 'Yellow Wallpaper'", d: "The first batch of unmanned probes are sent, mapping a 10-mile radius before losing signal."},
                {date: "2004-11-21", t: "Spatial Paradox Recorded", d: "L-Corp drone maps a hallway that intersects itself at a 90-degree angle without connecting."},
                {date: "2012-06-08", t: "M.E.G. Isolation Study", d: "A volunteer spent 40 hours inside; reported hearing the ceiling lights speak."},
                {date: "2020-01-15", t: "Manila Room Discovered", d: "A wanderer stumbles into the Manila Room, proving non-linear architectural exits exist."}
            ]),
            resonanceLogs: ["> INITIALIZING QUANTUM PING...", "> TARGET: LOCAL TOPOLOGY (LEVEL 0)", "> SCAN COMPLETE."]
        },

        "level1": {
            type: "level", id: "level1", title: "Level 1", name: "Habitable Zone",
            themeColor: "#a1a1aa", themeHover: "#71717a", themeGlow: "rgba(161, 161, 170, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "MINIMAL ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMmMyYzJjIi8+PHBhdGggZD0iTTAgMEwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 991204, wallDensity: 0.35, renderStyle: 'warehouse', gridSize: 12, poiChance: 0.05, wallColor: '#52525b', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.3, bgColor: '#18181b', pois: [ { name: "M.E.G. Alpha", color: "#22c55e", icon: "🛡" } ] },
            specificMetrics: { "Level 1 Specific": { "Concrete Density": "2400 kg/m³" } },
            globalValues: makeGlobals({ "Atmospheric Diagnostics": { "Relative Humidity": "85% (Low Fog)", "Air Comp: O2": "19.2%" }, "Material & Biological": { "Entity Density": "0.08" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 1 is a massive warehouse with concrete floors and walls, exposed rebar, and low-hanging fog.</p></div><h3>Description</h3><p>Level 1 is a large, sprawling warehouse. Unlike Level 0, this level possesses a consistent supply of water and electricity, which allows indefinite habitation by wanderers providing that appropriate precautions are taken. Crates of supplies appear and disappear randomly. The scale of the warehouse is incomprehensible, with some structural pillars measuring miles in diameter. The dense fog that blankets the floor carries a slightly metallic scent and actively dampens acoustic travel, making it difficult to hear approaching wanderers or entities.</p><p>Level 1 is notably the home of M.E.G. Base Alpha, one of the most heavily fortified survivor outposts in the Backrooms. The lighting here is prone to severe flickering and rolling blackouts. During these pitch-black periods, hostile entities such as Smilers and Hounds frequently manifest, turning the otherwise habitable zone into a lethal hunting ground.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Noclipping through a wall in Level 0 drops the wanderer here.</li><li><i class="ph ph-arrow-right text-liminal-primary"></i> Entering an unlocked door in the Manila Room.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Walking down an excessively long hallway transitions smoothly into Level 2.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Entering a hole in the concrete wall drops the wanderer into Level 19.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Outpost Proximity",d:"Level 1 is home to M.E.G. Base Alpha.",c:"green",l:"Follow wall graffiti; most arrows drawn in blue chalk lead to Base Alpha."},{n:"The Darkness Protocol",d:"When lights flicker, entities spawn. Retreat to lit areas instantly.",c:"yellow",l:"Power grids follow a determinable 14-hour cycle. Sync your watch."},{n:"Crate Scavenging",d:"Supply crates spawn dynamically.",c:"blue",l:"Pry open wooden crates with red markings; they contain food."},{n:"Fog Evasion",d:"The fog hides Smilers.",c:"red",l:"Climb atop large crates to stay above the condensation line."}],
                [{n:"High-Lumen Flashlight",i:"ph-flashlight"},{n:"Respirator",i:"ph-mask-water"},{n:"Crowbar",i:"ph-wrench"},{n:"Blue Chalk",i:"ph-pencil"},{n:"Combat Knife",i:"ph-knife"}]
            ),
            history: makeHist([
                {date: "1994-05-11", t: "First Successful Transition", d: "A wanderer posts a blurry photo of a concrete pillar, marking the discovery of Level 1."},
                {date: "2001-09-02", t: "Establishment of Base Alpha", d: "M.E.G. successfully fortifies a large quadrant near a reliable water spawn."},
                {date: "2008-12-14", t: "The Long Blackout", d: "A 72-hour power failure resulted in massive entity incursions and heavy casualties."},
                {date: "2015-04-20", t: "Supply Crate Algorithm Cracked", d: "L-Corp scientists decode the spatial spawn logic of the wooden crates."},
                {date: "2022-11-05", t: "Fog Toxicity Warning", d: "Prolonged exposure to the ground fog linked to respiratory degradation."}
            ]),
            resonanceLogs: ["> INITIATING LEVEL 1 WAREHOUSE SCAN...", "> CHECKING ELECTRICAL GRID STATUS... [FLUCTUATING]", "> SCAN COMPLETE."]
        },

        "level2": {
            type: "level", id: "level2", title: "Level 2", name: "Pipe Dreams",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "ENTITY RISK", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWEwZTAwIi8+PHBhdGggZD0iTTAgNUwxMCA1TTUgMEw1IDEwIiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
            mapConfig: { seed: 88472, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 6, poiChance: 0.03, wallColor: '#991b1b', gridColor: 'rgba(255,0,0,0.05)', wallThickness: 0.4, bgColor: '#0a0000', pois: [ { name: "Superheated Valve", color: "#ef4444", icon: "🔥" } ] },
            specificMetrics: { "Level 2 Specific": { "Pipe Thermal Output": "Max 43°C" } },
            globalValues: makeGlobals({ "Atmospheric Diagnostics": { "Ambient Temp (Core)": "38.0 °C", "Relative Humidity": "95%" }, "Material & Biological": { "Entity Density": "1.40 (High)" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 2 mainly consists of dark, grey, concrete maintenance tunnels.</p></div><h3>Description</h3><p>Level 2 is considerably more dangerous than Level 1. It is mostly composed of cramped, claustrophobic maintenance tunnels with rusted pipes lining the walls and ceilings. Some sections of Level 2 are completely devoid of any light, and some pipes run dangerously hot, reaching up to 43°C (110°F). The intense heat causes rapid dehydration, forcing wanderers to move quickly through the suffocating atmosphere.</p><p>The entity density rises sharply here. Smilers lurk in the dark stretches of the tunnels, while Clumps utilize the overhead ventilation shafts to ambush unsuspecting prey. The constant groaning of expanding metal pipes creates a terrifying soundscape that easily masks the approach of Hounds. Wanderers are advised to never rest near a steaming valve, as they are prone to explosive ruptures.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Proceeding down a long, dark concrete hallway from Level 1.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding an unlocked fire exit door leads directly to Level 3.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Entering a colorful office door leads to Level 4.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Heat Stroke Prevention",d:"The ambient temperature in Level 2 will rapidly dehydrate wanderers.",c:"red",l:"Stay close to the floor where the temperature is 2-3°C cooler."},{n:"Smiler Evasion",d:"If you spot a Smiler, do not use a flashlight.",c:"purple",l:"Throw a glowstick down an intersecting corridor to distract them."},{n:"Ventilation Awareness",d:"Clumps hide in the ceiling vents.",c:"yellow",l:"Never stand directly under a dripping grate."},{n:"Burn Treatment",d:"Bursting steam pipes are common.",c:"cyan",l:"Carry burn salve; Almond Water is less effective on thermal burns."}],
                [{n:"Thermometer",i:"ph-thermometer"},{n:"5L Water Jug",i:"ph-drop"},{n:"Burn Salve",i:"ph-first-aid"},{n:"Glowsticks",i:"ph-lightbulb"},{n:"Heat Gloves",i:"ph-hand-palm"}]
            ),
            history: makeHist([
                {date: "1996-03-12", t: "The Heatwave Discovery", d: "Explorers breach an iron door from Level 1, encountering extreme temperatures."},
                {date: "2000-07-28", t: "Pipe Rupture Event", d: "A 40-mile stretch of piping ruptures simultaneously, flooding the corridors with boiling water."},
                {date: "2007-02-19", t: "Clump Infestation Mapped", d: "M.E.G. confirms Entity 5 populations thrive in the high-humidity environment."},
                {date: "2013-09-04", t: "Fire Exit Discovered", d: "The first verified exit to Level 3 is documented by a lone survivor."},
                {date: "2021-08-11", t: "L-Corp Thermal Scan", d: "Deployment of autonomous rovers to map temperature gradients and safe paths."}
            ]),
            resonanceLogs: ["> SCANNING THERMAL OUTPUTS...", "> WARNING: AMBIENT TEMPERATURE EXCEEDS SAFE LIMITS", "> SCAN COMPLETE."]
        },

        "level3": {
            type: "level", id: "level3", title: "Level 3", name: "Electrical Station",
            themeColor: "#f59e0b", themeHover: "#d97706", themeGlow: "rgba(245, 158, 11, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "ENTITY INFESTATION", class: "bg-red-700/10 text-red-700 border-red-700/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZiYmYyNCIvPjwvc3ZnPg==",
            mapConfig: { seed: 10423, wallDensity: 0.8, renderStyle: 'electrical', gridSize: 4, poiChance: 0.08, wallColor: '#525252', gridColor: 'rgba(251, 191, 36, 0.1)', wallThickness: 0.2, bgColor: '#111', pois: [ { name: "High Voltage Box", color: "#fbbf24", icon: "⚡" } ] },
            specificMetrics: { "Level 3 Specific": { "Ambient Voltage Level": "10,000V" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "70.0 H", "Euclidean Consistency": "40.0%" }, "Acoustic & Luminescent": { "Ambient Hum": "120 dB (Deafening)", "Total Darkness Zones": "Frequent" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 3 is a series of long, dark, twisting hallways resembling an electrical station.</p></div><h3>Description</h3><p>The noise in Level 3 is deafening. Constant whirring, grinding, and the sparking of high-voltage electronics make hearing entities approach nearly impossible. The architecture is a chaotic maze of brick, metal grates, and heavy machinery that serves no logical purpose. Puddles of unknown fluids frequently pool on the floor, posing a severe electrocution hazard due to hanging live wires.</p><p>The entity density in Level 3 is extraordinarily high, classifying it as one of the most dangerous early levels. Skin-Stealers, Hounds, and Smilers roam freely in massive numbers. Survival here relies heavily on stealth and rapid traversal, as establishing any form of permanent base has proven impossible due to constant entity swarming.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Opening a fire exit door in Level 2.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding an elevator and riding it upwards takes you to Level 4.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Entering a specific maintenance hatch drops you into Level 5.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"High Entity Density",d:"Do not attempt to fight. You are severely outnumbered.",c:"red",l:"Use the deafening machinery noise to mask your sprinting footsteps."},{n:"Electrocution Hazard",d:"Exposed live wires hang from the ceiling.",c:"yellow",l:"Stay in the exact dead-center of the hallways. Do not touch metal grates."},{n:"Elevator Access",d:"Elevators are the only safe extraction point.",c:"blue",l:"Check the elevator cables before entering; entities frequently sever them."},{n:"Visual Navigation",d:"Acoustic tracking is useless here.",c:"teal",l:"Use a mirror to peek around corners before committing to a turn."}],
                [{n:"Rubber Boots",i:"ph-boot"},{n:"EMP Grenades",i:"ph-lightning"},{n:"Ear Protection",i:"ph-ear"},{n:"Inspection Mirror",i:"ph-magnifying-glass"},{n:"Medkit",i:"ph-first-aid"}]
            ),
            history: makeHist([
                {date: "1997-10-30", t: "The Death Trap Discovery", d: "Explorers from Level 2 enter a fire exit, realizing they are trapped in a high-threat zone."},
                {date: "2003-05-15", t: "Base Gamma Overrun", d: "M.E.G. attempts an outpost. It is destroyed by a swarm of Skin-Stealers in 72 hours."},
                {date: "2010-01-22", t: "Elevator Bypass Found", d: "A working elevator is documented, allowing survivors to bypass the worst sectors."},
                {date: "2016-08-09", t: "Voltage Spike Anomaly", d: "The entire level surges, temporarily incinerating a large portion of the entity population."},
                {date: "2023-04-12", t: "L-Corp Acoustic Dampeners", d: "Testing of personal acoustic shielding to restore localized hearing capability."}
            ]),
            resonanceLogs: ["> SENSING EXTREME ELECTROMAGNETIC INTERFERENCE...", "> COMPENSATING HZ FREQUENCIES... [OK]", "> SCAN COMPLETE."]
        },

        "level4": {
            type: "level", id: "level4", title: "Level 4", name: "Abandoned Office",
            themeColor: "#3b82f6", themeHover: "#2563eb", themeGlow: "rgba(59, 130, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "ABUNDANT RESOURCES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDZkM2QxIi8+PHBhdGggZD0iTTAgMEgxMFYxMEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTQxNjRkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==",
            mapConfig: { seed: 9942, wallDensity: 0.4, renderStyle: 'office', gridSize: 6, poiChance: 0.04, wallColor: '#60a5fa', gridColor: 'rgba(255,255,255,0.2)', wallThickness: 0.1, bgColor: '#f8fafc', pois: [ { name: "Water Cooler", color: "#3b82f6", icon: "🚰" } ] },
            specificMetrics: { "Level 4 Specific": { "Cubicle Density": "75%", "Carpet Cleanliness": "Pristine" } },
            globalValues: makeGlobals({ "Survival & Infrastructure": { "Base Threat Level": "0.5", "Rescue Probability": "High" }, "Material & Biological": { "Entity Density": "0.01" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 4 resembles an empty office building. It is completely safe and devoid of most entities.</p></div><h3>Description</h3><p>Level 4 is an infinite expanse of mostly empty office space. The carpet is thin and well-kept, the walls are painted a sterile white or beige, and drop ceilings hold fully functioning, non-flickering fluorescent lights. It represents a massive psychological relief for wanderers who have just survived the brutal conditions of Level 3. Fresh Almond Water is widely available in water coolers scattered throughout the office.</p><p>Entities are almost completely nonexistent here, making it a primary hub for human civilization and the location of M.E.G. Base Omega. The only major threat comes from "Windows" (Entity 2), which disguise themselves as normal office windows looking out onto a fake rainy exterior. Wanderers must rigorously avoid approaching these traps.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Exiting the elevator from Level 3.</li><li><i class="ph ph-arrow-right text-liminal-primary"></i> Opening an office door in Level 2.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Walking down a grand staircase transitions to Level 5.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Noclipping through a filing cabinet leads to Level 6.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Rest and Resupply",d:"Level 4 is the ideal place to recover sanity.",c:"blue",l:"Sleep in the center of cubicles; they naturally block out ambient noise."},{n:"The Window Threat",d:"Despite the safety, Windows are a lethal trap.",c:"purple",l:"Walk exactly in the center of the hallways. Windows cannot reach further than 1 meter."},{n:"Vending Machines",d:"Some break rooms contain functioning anomalous vending machines.",c:"green",l:"Coins found in desk drawers can be used to acquire protein bars."},{n:"Base Omega Navigation",d:"M.E.G. forces patrol the area.",c:"cyan",l:"Follow sticky notes left on computer monitors to find civilized outposts."}],
                [{n:"Empty Canteens",i:"ph-drop"},{n:"Sleeping Bag",i:"ph-sleeping-bag"},{n:"Backpack",i:"ph-bag"},{n:"Notebook",i:"ph-book"},{n:"Comfort Items",i:"ph-heart"}]
            ),
            history: makeHist([
                {date: "1998-11-04", t: "The Ascent from Level 3", d: "A group of battered wanderers takes an elevator up from Level 3 and finds paradise."},
                {date: "2002-04-11", t: "Base Omega Founded", d: "M.E.G. relocates primary civilian housing here due to the lack of entities."},
                {date: "2009-07-22", t: "Window Trap Mapped", d: "The correlation between fake rain visuals and Entity 2 is verified."},
                {date: "2018-12-05", t: "Agricultural Testing", d: "B.N.T.G. attempts to grow crops in the cubicles with limited success."},
                {date: "2024-02-18", t: "L-Corp Server Farm", d: "Proprietary data centers installed in the abandoned server rooms."}
            ]),
            resonanceLogs: ["> ANALYZING EUCLIDEAN STABILITY...", "> LEVEL 4 ARCHITECTURE = 99% STABLE", "> SCAN COMPLETE."]
        },

        "level5": {
            type: "level", id: "level5", title: "Level 5", name: "Terror Hotel",
            themeColor: "#b45309", themeHover: "#92400e", themeGlow: "rgba(180, 83, 9, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "PSYCHOLOGICAL HAZARD", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjkxMDAxIi8+PHBhdGggZD0iTTAgMEwxMCAxME0xMCAwTDAgMTAiIHN0cm9rZT0iI2I0NTMwOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 50401, wallDensity: 0.7, renderStyle: 'diagonal', gridSize: 8, poiChance: 0.03, wallColor: '#b45309', gridColor: 'rgba(217, 119, 6, 0.1)', wallThickness: 0.2, bgColor: '#291001', pois: [ { name: "Beverly Room", color: "#10b981", icon: "🍸" } ] },
            specificMetrics: { "Level 5 Specific": { "Wallpaper Toxicity": "Trace Arsenic", "Jazz Music Loop": "3.4 Hours" } },
            globalValues: makeGlobals({ "Chrono-Temporal Dynamics": { "Local Time Flow Rate": "Psychological Dilation", "Memory Degradation": "+15%" }, "Acoustic & Luminescent": { "Ambient Hum": "Muffled 1920s Jazz" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 5 is an infinite hotel complex constructed in early 20th-century Art Deco architecture.</p></div><h3>Description</h3><p>Level 5 takes on the appearance of a lavishly decorated, yet completely abandoned, 1930s hotel. Ornate mahogany doors, detailed gold-leaf wallpaper, and plush red carpets cover the endless hallways. The environment is impeccably clean, but the atmosphere is heavy with extreme psychological dread. Looping jazz music plays softly from unseen speakers, slowly eroding a wanderer's sanity over time.</p><p>The primary entity threat in Level 5 comes from Deathmoths. Swarms of these giant insects nest in the massive crystal chandeliers of the main ballroom. While the male moths are harmless, the massive female Deathmoths will aggressively attack any light source. The infamous "Beverly Room" serves as a safe haven and gathering point for wanderers, acting as the only reprieve from the psychological weight of the endless corridors.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Walking down the main staircase in Level 4.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a boiler room door and traveling deeply into it drops you into Level 6.</li><li><i class="ph ph-arrow-right text-liminal-safe"></i> Exiting through the hotel's main double doors leads to Level 11.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Deathmoth Avoidance",d:"Female Deathmoths are attracted to light.",c:"orange",l:"Avoid areas with broken sconces; it means a female claimed it."},{n:"The Jazz Loop Paranoia",d:"The looping 1920s music induces severe anxiety.",c:"fuchsia",l:"Wear earplugs. If the music suddenly stops, hide immediately."},{n:"The Boiler Room Threat",d:"The temperature rises sharply near the boiler.",c:"red",l:"Tie a wet cloth around your face to prevent inhalation burns."},{n:"Beverly Room Respite",d:"The Beverly Room contains safe supplies.",c:"teal",l:"Look for double doors made of polished obsidian."}],
                [{n:"Industrial Earplugs",i:"ph-ear"},{n:"Moth Repellent",i:"ph-bug"},{n:"Formal Wear",i:"ph-t-shirt"},{n:"Gas Mask",i:"ph-mask-water"},{n:"Flashlight",i:"ph-flashlight"}]
            ),
            history: makeHist([
                {date: "1999-01-14", t: "The Golden Stairs", d: "Explorers from Level 4 ascend ornate stairs, discovering the hotel."},
                {date: "2005-11-20", t: "The Moth King Slain", d: "A coordinated group kills a massive Deathmoth King, clearing a wing of the hotel."},
                {date: "2011-03-08", t: "Beverly Room Secured", d: "M.E.G. secures the large ballroom as a permanent diplomatic outpost."},
                {date: "2017-10-22", t: "Sanity Drain Mapped", d: "Researchers link the looping jazz music to a measured drop in cognitive function."},
                {date: "2025-01-05", t: "Boiler Room Collapse", d: "A section of the lower levels crumbles, exposing a direct drop to Level 6."}
            ]),
            resonanceLogs: ["> INITIALIZING ACOUSTIC SCAN...", "> DETECTING LOOPING AUDIO TRACK [1920s_JAZZ.wav]", "> SCAN COMPLETE."]
        },

        "level6": {
            type: "level", id: "level6", title: "Level 6", name: "Lights Out",
            themeColor: "#1e293b", themeHover: "#0f172a", themeGlow: "rgba(30, 41, 59, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "PITCH BLACK", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMwMDAiLz48L3N2Zz4=",
            mapConfig: { seed: 600, wallDensity: 0.9, renderStyle: 'grid', gridSize: 6, poiChance: 0.02, wallColor: '#1f2937', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.1, bgColor: '#000', pois: [{ name: "Audio Hazard", color: "#dc2626", icon: "👁" }] },
            specificMetrics: { "Level 6 Specific": { "Lux Level": "0.0", "Entity Visability": "Zero" } },
            globalValues: makeGlobals({ "Acoustic & Luminescent": { "Total Darkness Zones": "100%", "Luminosity Level": "0.0 Lux" }, "Survival & Infrastructure": { "Sanity Drain Rate": "Extreme" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 6 is an infinite complex shrouded in absolute darkness where light sources are anomalously mitigated.</p></div><h3>Description</h3><p>Level 6 is completely devoid of light. The darkness here is unnatural; flashlights, flares, and glowsticks only illuminate a few inches before the light is actively absorbed by the environment. The walls feel like cold, damp metal and rough concrete. The silence is deafening, broken only by the distant, echoing laughter of Smilers that roam the corridors in massive numbers.</p><p>The primary danger is the extreme psychological toll of absolute sensory deprivation. Sanity drains rapidly, leading to intense auditory and visual hallucinations. Wanderers frequently report hearing their names called out by loved ones. Due to the lack of visibility, tripping hazards and sudden drop-offs into the void make navigation a lethal guessing game.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Going deep into Level 5's boiler room.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Tripping on a wire or stepping into a puddle often drops you into Level 7.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Blind Navigation",d:"Keep one hand on the wall to maintain bearing.",c:"gray",l:"Follow the left wall to avoid topological loops."},{n:"Listen for Smilers",d:"Listen closely for the distant laughing.",c:"red",l:"Echolocation is your only early warning system."},{n:"Crawl to avoid tripping",d:"Tripping hazards are frequent.",c:"yellow",l:"Dropping to the floor reduces your thermal silhouette."},{n:"Do not trust voices",d:"Auditory hallucinations are traps.",c:"fuchsia",l:"If the voice echoes with a metallic ping, it is an entity."}],
                [{n:"Night Vision Goggles",i:"ph-binoculars"},{n:"Nylon Rope",i:"ph-link"},{n:"Almond Water",i:"ph-drop"},{n:"Industrial Chalk",i:"ph-pencil-simple"},{n:"Blind Cane",i:"ph-stick"}]
            ),
            history: makeHist([
                {date: "1999-04-18", t: "Discovered from Level 5", d: "A wanderer fell from the boiler room, surviving the plunge into pitch darkness."},
                {date: "2006-08-30", t: "First Smiler Swarm", d: "Massive casualties recorded by a heavily armed M.E.G. tactical unit."},
                {date: "2012-11-11", t: "Sanity Drain Anomaly", d: "Officially categorized by L-Corp researchers as a Level 4 Cognitohazard."},
                {date: "2019-02-25", t: "L-Corp Sonar Deployed", d: "Acoustic mapping nodes successfully deployed, creating the first blind map."},
                {date: "2024-06-01", t: "The Long Walk", d: "An experiment proved Euclidean geometry completely fails in the dark sectors."}
            ]),
            resonanceLogs: ["> INITIALIZING ACOUSTIC SCAN...", "> LIGHT NEGATION DETECTED.", "> EXTREME COGNITOHAZARD PROXIMITY.", "> UPLOADING DATA AND SEVERING CONNECTION."]
        },

        "level7": {
            type: "level", id: "level7", title: "Level 7", name: "Thalassophobia",
            themeColor: "#0284c7", themeHover: "#0369a1", themeGlow: "rgba(2, 132, 199, 0.2)", idleAnimation: "animate-ambient-drift-slow",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "AQUATIC HAZARD", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNVExMCAwIDEwIDVUMjAgNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDI4NGM3IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=",
            mapConfig: { seed: 700, wallDensity: 0.1, renderStyle: 'diagonal', gridSize: 10, poiChance: 0.05, wallColor: '#0c4a6e', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.5, bgColor: '#082f49', pois: [{ name: "Inverted House", color: "#fcd34d", icon: "🏠" }] },
            specificMetrics: { "Level 7 Specific": { "Water Depth": "Unfathomable", "Gravity Inversion": "Local" } },
            globalValues: makeGlobals({ "Atmospheric Diagnostics": { "Ambient Temp (Core)": "10.0 °C", "Relative Humidity": "100%" }, "Spatial & Dimensional": { "Z-Axis Deviation": "Gravity Inverted" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 7 is an impossibly massive ocean that spans in all directions, accessed initially through an inverted, flooded house.</p></div><h3>Description</h3><p>Level 7 is an endless body of dark, freezing water. Upon entry, wanderers find themselves in a furnished room completely filled with a shallow layer of water, where gravity is anomalously inverted to the surface of the exterior ocean. Opening the front door drops the wanderer into the pitch-black abyss below. The water is completely unsalvageable and devoid of typical marine life, save for Entity 20, "The Thing on Level 7", a massive apex predator.</p><p>Surviving Level 7 requires severe preparation. The water temperature is a constant 4°C, inducing hypothermia rapidly. The lack of light and crushing depth pressure cause extreme disorientation. Wanderers must swim blindly downward into the trench to locate the cave systems that serve as the only viable exit.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Falling through the floor of Level 6.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Swimming deeply into an underwater cave system transports the wanderer to Level 8.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Current Navigation",d:"Anomalous undertows will drag you down.",c:"blue",l:"Currents rotate counter-clockwise around the entrance point."},{n:"Entity 20 Evasion",d:"The apex predator patrols the deep.",c:"red",l:"If the water suddenly grows warm, swim away immediately."},{n:"Hypothermia Delay",d:"The water is a constant 4°C.",c:"orange",l:"Stay inside the entrance room until fully prepared."},{n:"Dive to the Cave",d:"The only known exit requires deep diving.",c:"fuchsia",l:"Look for a faint bioluminescent green glow far below."}],
                [{n:"Thermal Wetsuit",i:"ph-t-shirt"},{n:"Oxygen Tank",i:"ph-cylinder"},{n:"Flippers",i:"ph-shoe"},{n:"Waterproof Light",i:"ph-flashlight"},{n:"Diving Goggles",i:"ph-goggles"}]
            ),
            history: makeHist([
                {date: "1999-05-22", t: "First Drop from Level 6", d: "A survivor lands in the shallow entrance room pool."},
                {date: "2007-09-14", t: "House Room Explored", d: "Mapped the bizarre inverted gravity physics surrounding the entry door."},
                {date: "2014-03-05", t: "Submersible Drone Lost", d: "M.E.G. drone destroyed by Entity 20 at a depth of 3,000 meters."},
                {date: "2020-10-18", t: "Cave Entrance Found", d: "A brave diver discovers the bioluminescent route to Level 8."},
                {date: "2023-12-09", t: "L-Corp Buoy Node", d: "Provides localized sonar tracking of the predator to guide agents."}
            ]),
            resonanceLogs: ["> SCANNING AQUATIC DENSITY...", "> TEMPERATURE: 4°C.", "> MASSIVE BIOLOGICAL SIGNATURE DETECTED AT 500M DEPTH."]
        },

        "level8": {
            type: "level", id: "level8", title: "Level 8", name: "Cave System",
            themeColor: "#1a1a1a", themeHover: "#262626", themeGlow: "rgba(26, 26, 26, 0.4)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 5", class: "bg-red-700/10 text-red-700 border-red-700/30" }, { label: "ENTITY INFESTATION", class: "bg-red-500/10 text-red-500 border-red-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEwyIDVMMCAxMEwxMCAxMEw4IDVMMTAgMFoiIGZpbGw9IiMzMzMiLz48L3N2Zz4=",
            mapConfig: { seed: 800, wallDensity: 0.95, renderStyle: 'pipes', gridSize: 6, poiChance: 0.08, wallColor: '#262626', gridColor: 'rgba(255,255,255,0.02)', wallThickness: 0.8, bgColor: '#0f0f0f', pois: [{ name: "Spider Nest", color: "#dc2626", icon: "🕸" }] },
            specificMetrics: { "Level 8 Specific": { "Arachnid Density": "Lethal", "Cave-in Risk": "High" } },
            globalValues: makeGlobals({ "Material & Biological": { "Entity Density": "Extreme", "Flora/Fauna": "Bioluminescent Fungi" }, "Survival & Infrastructure": { "Base Threat Level": "5" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 8 consists of immense, dark, and highly treacherous cave systems infested with lethal arachnid entities.</p></div><h3>Description</h3><p>Level 8 is an infinitely expanding network of caverns. It is completely dark and incredibly dangerous. The rough, organic walls are frequently coated in thick, sticky webbing. The primary threat here consists of various massive spider entities and Clumps that hide in the rocky crevices. The terrain is highly uneven, requiring climbing gear to navigate safely.</p><p>Pools of Almond Water can be found here, but they are often guarded by nests. Navigating the caves is a brutal test of endurance, as the threat of cave-ins is constant. Stalactites frequently hide entities waiting to drop onto wanderers. Bioluminescent fungi provide the only natural light, but its spores are highly toxic if inhaled.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Emerging from the underwater caves of Level 7.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Falling through a randomly generated pit in the floor drops you into Level 9.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Arachnid Evasion",d:"Massive arachnids hunt in the dark.",c:"red",l:"Their eyes reflect green under UV light."},{n:"Vertical Threat Check",d:"Entities hang from the ceiling.",c:"orange",l:"Shine your beam straight up before entering a new cavern."},{n:"Spore Avoidance",d:"Bioluminescence usually indicates toxic spores.",c:"green",l:"Wear a respirator if the air smells sweet."},{n:"Void Trap Discovery",d:"The floor is highly unstable.",c:"fuchsia",l:"Tap the ground ahead with a pickaxe to find the exit void."}],
                [{n:"Climbing Gear",i:"ph-link"},{n:"Headlamp",i:"ph-flashlight"},{n:"Arachnid Repellent",i:"ph-bug"},{n:"Pickaxe",i:"ph-hammer"},{n:"Flares",i:"ph-fire"}]
            ),
            history: makeHist([
                {date: "2000-01-19", t: "Cave Mapped by M.E.G.", d: "Initial expeditions map a 50-mile radius before retreating due to casualties."},
                {date: "2008-05-11", t: "Arachnid Nest Found", d: "A massive breeding ground discovered and subsequently quarantined."},
                {date: "2015-11-23", t: "Floor Anomaly Confirmed", d: "The falling void exit to Level 9 is verified by a survivor."},
                {date: "2021-02-14", t: "L-Corp Seismic Node", d: "Nodes placed to detect structural rockslides before they happen."},
                {date: "2024-09-02", t: "Outpost Overrun", d: "A forward operating base is overwhelmed by spiders and abandoned."}
            ]),
            resonanceLogs: ["> SCANNING LITHOSPHERE...", "> DENSE ORGANIC SIGNATURES DETECTED.", "> WARNING: STRUCTURAL INSTABILITY AHEAD."]
        },

        "level9": {
            type: "level", id: "level9", title: "Level 9", name: "The Suburbs",
            themeColor: "#4b5563", themeHover: "#374151", themeGlow: "rgba(75, 85, 99, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 5", class: "bg-red-700/10 text-red-700 border-red-700/30" }, { label: "EXTREME ENTITY DENSITY", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMTBMMTAgMEwyMCAxMEgxN1YyMEgzVjEwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDQ0Ii8+PC9zdmc+",
            mapConfig: { seed: 900, wallDensity: 0.6, renderStyle: 'grid', gridSize: 10, poiChance: 0.05, wallColor: '#374151', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.3, bgColor: '#111827', pois: [{ name: "Illuminated House", color: "#fcd34d", icon: "💡" }] },
            specificMetrics: { "Level 9 Specific": { "Streetlight Functionality": "0%", "Entity Aggression": "Maximum" } },
            globalValues: makeGlobals({ "Survival & Infrastructure": { "Base Threat Level": "5", "Rescue Probability": "Zero" }, "Acoustic & Luminescent": { "Total Darkness Zones": "100% (Night)" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 9 is an infinite, pitch-black suburban neighborhood fraught with extreme danger.</p></div><h3>Description</h3><p>Level 9 resembles a modern suburban neighborhood, but it is perpetually locked in the dead of night. The streetlights are broken, and a thick fog rolls over the asphalt. The houses are fully furnished but completely abandoned by humans, instead serving as nests for highly dangerous entities like The Neighborhood Watch and The Mangled. It is considered one of the most lethal levels in the Backrooms.</p><p>Survival dictates absolute stealth. The asphalt streets are heavily patrolled by massive floating eyes, requiring wanderers to sneak through the damp grass of the backyards. Entering a house is a massive gamble; while they contain desperately needed supplies like Almond Water and food, they are often booby-trapped by the native entities. The sky is an anomalous void that induces instant madness if stared at for too long.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Falling through the void in Level 8 lands you on the damp grass here.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Following the asphalt road straight for 100-200 miles seamlessly transitions into Level 10.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Stay off the street",d:"The asphalt roads are heavily patrolled.",c:"red",l:"Walk on the grass lawns to dampen footsteps."},{n:"House Traps",d:"Light inside a house means an entity resides there.",c:"yellow",l:"Only scavenge completely dark homes."},{n:"The Mangled Threat",d:"Grotesque entities hide in the bushes.",c:"purple",l:"They smell fear. Control your breathing."},{n:"Neighborhood Watch Evasion",d:"Massive floating eyes patrol the area.",c:"fuchsia",l:"If you see a purple glow, hide under a porch immediately."}],
                [{n:"Stealth Clothing",i:"ph-t-shirt"},{n:"Crowbar",i:"ph-wrench"},{n:"Night-vision",i:"ph-binoculars"},{n:"Silenced Weapon",i:"ph-crosshair"},{n:"Almond Water",i:"ph-drop"}]
            ),
            history: makeHist([
                {date: "2001-08-11", t: "First Entered from Level 8", d: "Wanderers survive the fall from the caves and report the deadly suburb."},
                {date: "2009-04-12", t: "The Mangled Classified", d: "A new, hyper-lethal entity type is documented by surviving agents."},
                {date: "2016-10-30", t: "Dark Cycles Mapped", d: "M.E.G. determines that daylight literally never arrives on this level."},
                {date: "2022-07-15", t: "L-Corp Street Nodes", d: "Hidden sensors installed in the broken streetlights to track patrols."},
                {date: "2025-11-20", t: "Exits to Level 10 Confirmed", d: "The brutal 100-mile march protocol is officially established as the only exit."}
            ]),
            resonanceLogs: ["> SCANNING SUBURBAN GRID...", "> ZERO HUMAN LIFE DETECTED.", "> MASSIVE HOSTILE PRESENCE IN DWELLINGS."]
        },

        "level10": {
            type: "level", id: "level10", title: "Level 10", name: "Field of Wheat",
            themeColor: "#eab308", themeHover: "#ca8a04", themeGlow: "rgba(234, 179, 8, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMTBMMiAwTTUgMTBMNyAwTTEwIDEwTDEyIDAiIHN0cm9rZT0iI2VhYjMwOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
            mapConfig: { seed: 1000, wallDensity: 0.2, renderStyle: 'diagonal', gridSize: 15, poiChance: 0.02, wallColor: '#a16207', gridColor: 'rgba(234, 179, 8, 0.1)', wallThickness: 0.1, bgColor: '#422006', pois: [{ name: "Barn Outpost", color: "#22c55e", icon: "🏠" }] },
            specificMetrics: { "Level 10 Specific": { "Wheat Height": "1.5m", "Sky Condition": "Perpetual Overcast" } },
            globalValues: makeGlobals({ "Survival & Infrastructure": { "Base Threat Level": "1", "Rescue Probability": "Maximum" }, "Material & Biological": { "Toxicity Levels": "Safe (Boil Wheat)" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 10 is an infinite, peaceful field of wheat under a cloudy sky.</p></div><h3>Description</h3><p>Level 10 is a vast, open expanse of agricultural wheat fields stretching endlessly. Dirt paths cut through the crops, leading to rustic barns and small farming settlements. The environment is extremely safe and peaceful. The sky is always overcast, but the ambient light is akin to early afternoon. There are no known hostile entities here, making it a major hub for human civilization and agriculture.</p><p>The wheat itself is safe to consume, provided it is boiled first to remove mild anomalous toxins. B.N.T.G. operates massive trade routes along the dirt paths, ferrying supplies between Level 11 and lower levels. Wanderers finally have a chance to relax, breathe clean air, and recover from the trauma of Level 9.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Walking directly out of the suburbs of Level 9.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Walking far enough toward the distant skyline brings you seamlessly into Level 11.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Follow dirt paths",d:"Wandering into the deep wheat can cause you to lose your bearing.",c:"yellow",l:"Paths consistently lead to safe barns."},{n:"Food Preparation",d:"The wheat requires boiling to remove anomalous toxins.",c:"green",l:"Only eat bread provided by established B.N.T.G. outposts."},{n:"Rest in barns",d:"Barns are fortified and warm.",c:"blue",l:"Check the rafters for supplies left by traders."},{n:"Walk to the skyline",d:"The transition to the city is seamless.",c:"fuchsia",l:"Just keep walking toward the skyscrapers on the horizon."}],
                [{n:"Sun Hat",i:"ph-sun"},{n:"Water Jug",i:"ph-drop"},{n:"Hiking Boots",i:"ph-boot"},{n:"Utility Knife",i:"ph-knife"},{n:"Trade Goods",i:"ph-hand-coins"}]
            ),
            history: makeHist([
                {date: "2002-09-12", t: "Safe Zone Declared", d: "M.E.G. verifies the complete lack of hostile entities in the fields."},
                {date: "2010-04-03", t: "B.N.T.G. Route Built", d: "A massive dirt road is cleared for wagons to ferry supplies."},
                {date: "2017-08-19", t: "Wheat Anomalous Properties Tested", d: "Safe consumption methods (boiling) are discovered and distributed."},
                {date: "2021-12-05", t: "L-Corp Drone Lost", d: "An agricultural mapping drone is dismantled by scavengers."},
                {date: "2026-02-11", t: "City Entrance Mapped", d: "The horizon line is formally charted leading to Level 11."}
            ]),
            resonanceLogs: ["> SCANNING OPEN FIELDS...", "> 0 HOSTILE ENTITIES DETECTED.", "> HUME LEVEL STABLE."]
        },
        
        "level11": {
            type: "level", id: "level11", title: "Level 11", name: "The Endless City",
            themeColor: "#9ca3af", themeHover: "#6b7280", themeGlow: "rgba(156, 163, 175, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" }, { label: "HABITABLE", class: "bg-teal-500/10 text-teal-400 border-teal-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3QgeD0iMSIgeT0iMiIgd2lkdGg9IjMiIGhlaWdodD0iOCIgZmlsbD0iIzY2NiIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSIzIiBoZWlnaHQ9IjYiIGZpbGw9IiM2NjYiLz48L3N2Zz4=",
            mapConfig: { seed: 1100, wallDensity: 0.5, renderStyle: 'office', gridSize: 8, poiChance: 0.05, wallColor: '#9ca3af', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.4, bgColor: '#1f2937', pois: [{ name: "M.E.G. Headquarters", color: "#22c55e", icon: "🏢" }] },
            specificMetrics: { "Level 11 Specific": { "Urban Density": "High", "Traffic Level": "Low/Anomalous" } },
            globalValues: makeGlobals({ "Survival & Infrastructure": { "Rescue Probability": "Maximum", "Base Threat Level": "1" }, "Atmospheric Diagnostics": { "Weather": "Sunny/Stable" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 11 is an infinite, seemingly modern metropolis populated by peaceful Facelings and massive human settlements.</p></div><h3>Description</h3><p>Level 11 is arguably the safest and most populated level in the Backrooms. It is an endless city with skyscrapers, apartments, stores, and functional infrastructure. The "Facelings" here are completely passive and act as normal citizens, running shops and driving the occasionally working vehicles. Food, water, and electricity are abundant. The M.E.G. central command is located here.</p><p>Wanderers can easily claim furnished apartments, establishing a near-normal life. Supermarkets anomalously restock with fresh supplies weekly. The only threats involve wandering into unlit alleyways where the rare Hound might spawn, or violating the strange, unspoken laws of the city enforced by the Faceling police force.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Walking into the city from Level 10.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Entering perfectly white office buildings transitions you to Level 12.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Scavenge buildings",d:"Most stores are fully stocked with fresh supplies.",c:"green",l:"Supermarkets restock anomalously every 7 days."},{n:"Trade with Facelings",d:"They accept Almond Water as currency.",c:"purple",l:"Do not try to speak to them; use gestures."},{n:"Use working cars",d:"Some vehicles have infinite fuel.",c:"yellow",l:"Obey traffic laws; the anomalous police force is strict."},{n:"The Matrix Building",d:"To proceed, find a perfectly white skyscraper.",c:"fuchsia",l:"It has no windows on the ground floor."}],
                [{n:"Backpack",i:"ph-bag"},{n:"Currency (Almond Water)",i:"ph-drop"},{n:"City Map",i:"ph-map"},{n:"M.E.G. ID Card",i:"ph-identification-card"},{n:"Comfortable Clothes",i:"ph-t-shirt"}]
            ),
            history: makeHist([
                {date: "2003-10-14", t: "City Populated", d: "Mass migration from Level 4 and 10 occurs."},
                {date: "2008-01-22", t: "M.E.G. HQ Established", d: "The central command is built in a heavily fortified skyscraper."},
                {date: "2014-06-05", t: "Faceling Integration", d: "Wanderers successfully learn to coexist and trade with the native entities."},
                {date: "2019-11-19", t: "L-Corp Tower Built", d: "A massive, unmarked skyscraper serves as Liminality Corp's covert node."},
                {date: "2024-03-30", t: "Safest Level Declared", d: "Level 11 officially becomes the pinnacle of Backrooms civilization."}
            ]),
            resonanceLogs: ["> SCANNING URBAN SPRAWL...", "> MILLIONS OF NEUTRAL ENTITIES DETECTED.", "> HUMAN POPULATION HIGH."]
        },

        "level12": {
            type: "level", id: "level12", title: "Level 12", name: "Matrix",
            themeColor: "#ffffff", themeHover: "#e2e8f0", themeGlow: "rgba(255, 255, 255, 0.4)", idleAnimation: "animate-glitch-shift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "COGNITOHAZARD", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==",
            mapConfig: { seed: 1200, wallDensity: 0.1, renderStyle: 'grid', gridSize: 20, poiChance: 0.01, wallColor: '#e2e8f0', gridColor: 'rgba(0,0,0,0.1)', wallThickness: 0.05, bgColor: '#ffffff', pois: [{ name: "Wooden Door", color: "#8b5cf6", icon: "🚪" }] },
            specificMetrics: { "Level 12 Specific": { "Censorship Effect": "Active", "Visual Static": "High" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "15.0 H", "Euclidean Consistency": "10.0%" }, "Acoustic & Luminescent": { "Light Source Type": "Blinding Overexposure" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 12 is a stark, white, brightly lit room where physical reality breaks down into a matrix of censorship.</p></div><h3>Description</h3><p>Level 12 is a visually painful, infinite white room. Furniture and items occasionally appear, but they are heavily censored by floating black boxes or static. The level attempts to censor the wanderers themselves, causing extreme nausea, migraines, and vertigo. It is primarily a transitional level, acting as a structural glitch in the Backrooms' architecture.</p><p>Staying in Level 12 for more than an hour causes permanent neurological damage as the brain attempts to process the failing geometry. Entities here manifest as vibrating masses of static that hunt based on fear pheromones. Wanderers must locate a perfectly normal, uncensored wooden door to escape.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Entering specific white buildings in Level 11.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a standard wooden door leads to Level 13.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Ignore censorship bars",d:"Looking directly at the black boxes causes vertigo.",c:"purple",l:"Focus on the floor to ground yourself."},{n:"Close eyes for headaches",d:"The white light is blinding.",c:"yellow",l:"Wear heavily tinted sunglasses."},{n:"Don't run",d:"Running causes the floor to lose collision.",c:"orange",l:"A steady, slow pace prevents noclipping."},{n:"Enter wooden door",d:"The only stable object in the level.",c:"green",l:"Do not knock. Just open it."}],
                [{n:"Dark Sunglasses",i:"ph-sunglasses"},{n:"Aspirin",i:"ph-pill"},{n:"Earplugs",i:"ph-ear-slash"},{n:"Almond Water",i:"ph-drop"},{n:"Blindfold",i:"ph-eye-closed"}]
            ),
            history: makeHist([
                {date: "2004-03-12", t: "Discovered from Level 11", d: "An office worker accidentally entered the white room and reported the glitch."},
                {date: "2011-08-04", t: "Censorship Effect Recorded", d: "Cameras capture only black boxes, proving the visual anomaly."},
                {date: "2015-12-19", t: "Simulation Theory", d: "L-Corp proves the Backrooms has a digital underpinning via resonance scans."},
                {date: "2020-05-10", t: "M.E.G. Bans Long Stays", d: "Over 1 hour results in permanent mental damage."},
                {date: "2025-09-02", t: "Door to 13 Mapped", d: "The wooden door exit is successfully charted."}
            ]),
            resonanceLogs: ["> SCANNING MATRIX...", "> REALITY RENDER FAILURE DETECTED.", "> CORRUPTED DATA PACKETS."]
        },
        
        "level13": {
            type: "level", id: "level13", title: "Level 13", name: "The Infinite Apartments",
            themeColor: "#8b5cf6", themeHover: "#7c3aed", themeGlow: "rgba(139, 92, 246, 0.2)", idleAnimation: "animate-ambient-drift",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "HABITABLE", class: "bg-teal-500/10 text-teal-400 border-teal-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iIzhiNWNmNiIvPjxyZWN0IHg9IjYiIHk9IjEiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiIGZpbGw9IiM4YjVjZjYiLz48cmVjdCB4PSIxIiB5PSI2IiB3aWR0aD0iMyIgaGVpZ2h0PSIzIiBmaWxsPSIjOGI1Y2Y2Ii8+PHJlY3QgeD0iNiIgeT0iNiIgd2lkdGg9IjMiIGhlaWdodD0iMyIgZmlsbD0iIzhiNWNmNiIvPjwvc3ZnPg==",
            mapConfig: { seed: 1300, wallDensity: 0.6, renderStyle: 'office', gridSize: 8, poiChance: 0.04, wallColor: '#6b21a8', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.2, bgColor: '#2e1065', pois: [{ name: "Safe Apartment", color: "#22c55e", icon: "🚪" }] },
            specificMetrics: { "Level 13 Specific": { "Apartment Layouts": "Infinite", "Wi-Fi Access": "Strong" } },
            globalValues: makeGlobals({ "Survival & Infrastructure": { "Base Threat Level": "2", "Rescue Probability": "High" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 13 is an endless apartment complex featuring cozy rooms and highly dangerous hallways.</p></div><h3>Description</h3><p>Level 13 resembles a massive, infinite apartment building. The individual apartments are generally safe and stocked with food, water, and internet access. It is a popular level for lone wanderers to settle down, provided they secure their doors properly.</p><p>However, the hallways and elevators are incredibly dangerous. They are roamed by hostile Facelings and contain numerous Window entities. A massive entity known as "The Landlord" patrols the main lobby area. Wanderers must utilize the stairwells to move between floors and rely on lockpicking to access safe rooms.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Opening the wooden door in Level 12.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Jumping into a deep, black void hole found in the basement leads to Level 14.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Check room numbers",d:"Doors with red numbers contain entities.",c:"red",l:"Only enter rooms with brass, even-numbered plates."},{n:"Beware Windows",d:"The windows in the apartments are lethal entities.",c:"purple",l:"Close the blinds immediately upon entering."},{n:"Lock doors",d:"Entities cannot open locked doors.",c:"blue",l:"Use the deadbolt and the chain lock."},{n:"Jump in void hole",d:"The exit to Level 14 is terrifying but safe.",c:"cyan",l:"Do not hesitate. Dive headfirst."}],
                [{n:"Lockpicks",i:"ph-key"},{n:"Flashlight",i:"ph-flashlight"},{n:"Melee Weapon",i:"ph-sword"},{n:"Backpack",i:"ph-bag"},{n:"Canned Food",i:"ph-hamburger"}]
            ),
            history: makeHist([
                {date: "2005-06-18", t: "Apartment Claimed", d: "First wanderer establishes a permanent residence in room 204."},
                {date: "2010-09-02", t: "The Landlord Attacks", d: "The entity wipes out a careless group in the lobby."},
                {date: "2015-02-14", t: "Elevators Deemed Unsafe", d: "Multiple disappearances lead to an elevator ban."},
                {date: "2021-11-20", t: "L-Corp Surveillance", d: "Hidden cameras installed in the hallways to track patrol routes."},
                {date: "2026-01-05", t: "Basement Void Confirmed", d: "The basement void hole is confirmed as the official exit."}
            ]),
            resonanceLogs: ["> SCANNING RESIDENTIAL BLOCKS...", "> THOUSANDS OF ROOMS DETECTED.", "> WINDOW ENTITIES PROMINENT."]
        },

        "level14": {
            type: "level", id: "level14", title: "Level 14", name: "Paradise",
            themeColor: "#ef4444", themeHover: "#dc2626", themeGlow: "rgba(239, 68, 68, 0.2)", idleAnimation: "animate-pulse",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "PSYCHOLOGICAL TRAP", class: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMTBMNSAwTDEwIDEwWiIgZmlsbD0iI2VmNDQ0NCIvPjwvc3ZnPg==",
            mapConfig: { seed: 1400, wallDensity: 0.1, renderStyle: 'organic', gridSize: 10, poiChance: 0.05, wallColor: '#7f1d1d', gridColor: 'rgba(239,68,68,0.1)', wallThickness: 0.2, bgColor: '#450a0a', pois: [{ name: "Metal Door", color: "#9ca3af", icon: "🚪" }] },
            specificMetrics: { "Level 14 Specific": { "Madness Inducement": "High", "Flora Color": "Crimson" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "50.0 H" }, "Material & Biological": { "Flora/Fauna": "Toxic Red Vegetation" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 14 is a beautiful, red-tinted forest that acts as a severe psychological trap.</p></div><h3>Description</h3><p>Level 14 is a dense forest where the leaves, grass, and sky are all tinted deep red. It appears beautiful and tranquil, but it is a massive cognitohazard. The environment actively tries to convince wanderers to stay forever, inducing a sense of euphoria that rapidly devolves into violent madness.</p><p>Whispers can be heard from the trees, often mimicking the voices of loved ones. There are no physical entities here; the level itself is the predator. Wanderers who fall asleep on the red grass are slowly assimilated into the soil. Escaping requires immense willpower and sensory deprivation to block out the forest's allure.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Falling into the void in Level 13.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a rusted metal door in the side of a large tree leads to Level 15.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Ignore whispers",d:"The trees speak with voices of loved ones.",c:"red",l:"Wear earplugs immediately upon entry."},{n:"Don't eat red fruit",d:"The fruit induces instant paralysis.",c:"orange",l:"Only consume rations you brought with you."},{n:"Track time",d:"Time perception is heavily skewed here.",c:"blue",l:"Use a mechanical stopwatch to ground your sense of reality."},{n:"Resist staying",d:"The urge to lie down is overwhelming.",c:"fuchsia",l:"Pinch yourself to use physical pain as an anchor."}],
                [{n:"Mechanical Timer",i:"ph-watch"},{n:"Blindfold",i:"ph-eye-closed"},{n:"Earplugs",i:"ph-ear-slash"},{n:"Antipsychotics",i:"ph-pill"},{n:"Compass",i:"ph-compass"}]
            ),
            history: makeHist([
                {date: "2006-04-10", t: "Victims Go Mad", d: "First explorers refuse to leave and attack rescuers."},
                {date: "2012-07-25", t: "M.E.G. Classifies Trap", d: "Declared a Level 4 psychological hazard."},
                {date: "2018-01-14", t: "Oasis Hallucination Confirmed", d: "Drone footage reveals the 'water' is a pit of acid."},
                {date: "2023-10-09", t: "L-Corp True Geometry", d: "Using blind sensors to bypass the illusions."},
                {date: "2026-05-18", t: "Warning Signs Posted", d: "Placed at the Level 13 void hole by B.N.T.G."}
            ]),
            resonanceLogs: ["> SCANNING FLORA...", "> COGNITOHAZARD DETECTED IN SPORES.", "> NEURAL DISRUPTION IMMINENT."]
        },
        
        "level15": {
            type: "level", id: "level15", title: "Level 15", name: "Futuristic Halls",
            themeColor: "#06b6d4", themeHover: "#0891b2", themeGlow: "rgba(6, 182, 212, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS 3", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "TECHNOLOGICAL", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNUwxMCA1TTAgMEgxME0wIDEwSDEwIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==",
            mapConfig: { seed: 1500, wallDensity: 0.7, renderStyle: 'grid', gridSize: 6, poiChance: 0.05, wallColor: '#0891b2', gridColor: 'rgba(6,182,212,0.1)', wallThickness: 0.2, bgColor: '#164e63', pois: [{ name: "Security Drone", color: "#ef4444", icon: "🛸" }] },
            specificMetrics: { "Level 15 Specific": { "Technology Level": "Advanced", "Security Patrols": "Active" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "90.0 H" }, "Material & Biological": { "Structural Integrity": "Pristine Metal" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 15 is a massive complex of futuristic, sci-fi corridors patrolled by hostile mechanical entities.</p></div><h3>Description</h3><p>Level 15 resembles the interior of a highly advanced spaceship or futuristic facility. The walls are made of sleek white metal illuminated by cyan neon strips. The level is highly dangerous due to the presence of autonomous security drones and "Enigma" entities that patrol the halls. However, it contains highly advanced technology, making it a prime location for L-Corp and M.E.G. scavenging operations.</p><p>To navigate, wanderers must scavenge keycards to bypass heavy blast doors. Laser grids block many corridors, requiring acrobatic traversal. The teleporter exit is often guarded by a swarm of drones, requiring EMP usage to bypass safely.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Entering the metal door in Level 14.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a teleporter pad transitions you to Level 16.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Avoid drones",d:"Mechanical entities that shoot lasers.",c:"red",l:"Use an EMP grenade to temporarily disable them."},{n:"Use keycards",d:"Found on the floor, needed to open doors.",c:"yellow",l:"Level 3 cards are required for the exit."},{n:"Beware Enigmas",d:"Entities made of pure code.",c:"fuchsia",l:"They cannot see you if you stand perfectly still."},{n:"Enter teleporter",d:"The glowing blue pad is the exit.",c:"gray",l:"Ensure the pad is fully charged before stepping on."}],
                [{n:"Security Keycards",i:"ph-identification-card"},{n:"EMP Grenade",i:"ph-lightning"},{n:"Flash Drive",i:"ph-hard-drives"},{n:"Wire Cutters",i:"ph-scissors"},{n:"Multitool",i:"ph-wrench"}]
            ),
            history: makeHist([
                {date: "2007-02-14", t: "Tech Scavenged", d: "First explorers bring back advanced batteries to Base Alpha."},
                {date: "2013-09-02", t: "L-Corp Accesses Mainframe", d: "Proprietary data is extracted from the servers."},
                {date: "2019-05-18", t: "Enigma Encounter", d: "A digital entity deletes an explorer's memories."},
                {date: "2024-11-22", t: "Laser Grids Activated", d: "The facility goes into high alert mode permanently."},
                {date: "2026-06-30", t: "Teleporter Mapped", d: "The exit mechanism is finally understood and charted."}
            ]),
            resonanceLogs: ["> SCANNING MAINFRAME...", "> HIGH-TECH ARCHITECTURE DETECTED.", "> SECURITY BREACH LOGGED."]
        },

        "level16": {
            type: "level", id: "level16", title: "Level 16", name: "Altered Topography",
            themeColor: "#a855f7", themeHover: "#9333ea", themeGlow: "rgba(168, 85, 247, 0.2)", idleAnimation: "animate-spin-slow",
            tags: [ { label: "CLASS 3", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" }, { label: "HYPER-UNSTABLE", class: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEwxMCAxME0xMCAwTDAgMTAiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+",
            mapConfig: { seed: 1600, wallDensity: 0.8, renderStyle: 'diagonal', gridSize: 5, poiChance: 0.05, wallColor: '#7e22ce', gridColor: 'rgba(168,85,247,0.1)', wallThickness: 0.1, bgColor: '#3b0764', pois: [{ name: "Spatial Tear", color: "#000", icon: "🌪" }] },
            specificMetrics: { "Level 16 Specific": { "Gravity Shifts": "Constant", "Geometry": "Fractal" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "20.0 H", "Euclidean Consistency": "5.0%" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 16 is a chaotic environment where gravity and topography constantly shift and break down.</p></div><h3>Description</h3><p>Level 16 is a sprawling, fractal labyrinth of stone, metal, and floating debris. Gravity changes direction without warning, forcing wanderers to walk on walls or ceilings. Spatial tears randomly open, leading directly to the lethal void. The level is inhabited by "Shifters", entities that manipulate the geometry to trap prey.</p><p>Movement requires extreme care, utilizing tethers and climbing gear. A wrong step during a gravity shift is instantly fatal. The exit requires finding a glowing pool of light, often situated on a ceiling or vertical wall.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Using the teleporter in Level 15.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Diving into a glowing pool of light transitions to Level 17.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Walk carefully",d:"Gravity shifts abruptly.",c:"purple",l:"Watch the floating dust to see which way gravity is pulling."},{n:"Use a tether",d:"Tie yourself to a sturdy object.",c:"orange",l:"Always maintain three points of contact."},{n:"Avoid spatial tears",d:"Black rips in the air.",c:"gray",l:"They emit a low humming sound."},{n:"Dive into light pool",d:"The only way out.",c:"cyan",l:"Hold your breath as you enter."}],
                [{n:"Climbing Rope",i:"ph-link"},{n:"Carabiners",i:"ph-lock"},{n:"Helmet",i:"ph-hard-hat"},{n:"Chalk",i:"ph-pencil"},{n:"First Aid",i:"ph-first-aid"}]
            ),
            history: makeHist([
                {date: "2008-01-11", t: "Gravity Anomalies Recorded", d: "Explorers fall to the ceiling upon entry."},
                {date: "2014-07-29", t: "Spatial Tears Classified", d: "M.E.G. loses a squad to a void rift."},
                {date: "2020-03-05", t: "Shifter Entities Found", d: "They are documented manipulating walls to crush victims."},
                {date: "2024-10-18", t: "L-Corp Maps Geometry", d: "Using quantum cartography algorithms."},
                {date: "2026-06-25", t: "Light Pool Exit Confirmed", d: "A brave diver tests the pool and survives."}
            ]),
            resonanceLogs: ["> SCANNING TOPOLOGY...", "> EUCLIDEAN MESH FAILING.", "> GRAVITY INVERSION DETECTED."]
        },

        "level17": {
            type: "level", id: "level17", title: "Level 17", name: "The Carrier",
            themeColor: "#64748b", themeHover: "#475569", themeGlow: "rgba(100, 116, 139, 0.2)", idleAnimation: "animate-ambient-drift-slow",
            tags: [ { label: "CLASS 2", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" }, { label: "NAVAL", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNUwxMCA1TTAgN0gxMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=",
            mapConfig: { seed: 1700, wallDensity: 0.4, renderStyle: 'grid', gridSize: 12, poiChance: 0.04, wallColor: '#475569', gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.3, bgColor: '#0f172a', pois: [{ name: "Glowing Door", color: "#fcd34d", icon: "🚪" }] },
            specificMetrics: { "Level 17 Specific": { "Vessel Size": "Massive", "Ocean Condition": "Stormy" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "85.0 H", "Euclidean Consistency": "90.0%" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 17 is a massive aircraft carrier stranded in an endless, stormy ocean.</p></div><h3>Description</h3><p>Level 17 takes place entirely on and within a colossal, rusted naval aircraft carrier. The ocean surrounding the ship is violent and stormy, making escape by water impossible. The interior of the ship is labyrinthine, filled with abandoned military equipment and patrolled by "Spectral Crew", ghostly entities that repeat their mundane tasks eternally.</p><p>The engine room is incredibly hot and dangerous, housing aggressive entities like Clumps. The safest strategy is to scavenge the mess halls and upper cabins, completely ignoring the spectral crew. The exit is a glowing wooden door entirely out of place deep in the hull.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Emerging from the light pool in Level 16 onto the flight deck.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a glowing, child's bedroom door deep in the hull leads to Level 18.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Stay on ship",d:"Falling into the ocean is instant death.",c:"blue",l:"Avoid the edges of the flight deck during high winds."},{n:"Scavenge gear",d:"Weapons and armor are abundant.",c:"orange",l:"Check the armory, but beware the rusted locks."},{n:"Beware spectral crew",d:"Ghostly sailors roam the halls.",c:"gray",l:"Do not interrupt their tasks; they will turn hostile."},{n:"Find glowing door",d:"A wooden door out of place in the metal hull.",c:"purple",l:"It emits a soft, warm light."}],
                [{n:"Flashlight",i:"ph-flashlight"},{n:"Military Rations",i:"ph-hamburger"},{n:"Flares",i:"ph-fire"},{n:"Weapon",i:"ph-sword"},{n:"Sleeping Bag",i:"ph-sleeping-bag"}]
            ),
            history: makeHist([
                {date: "2009-02-11", t: "Ship Discovered", d: "Wanderers land on the flight deck."},
                {date: "2015-08-22", t: "Weapons Scavenged", d: "B.N.T.G. extracts massive amounts of firearms."},
                {date: "2020-04-10", t: "L-Corp Taps Sensors", d: "Ship radar is repurposed to scan the ocean."},
                {date: "2024-12-05", t: "Engine Room Sealed", d: "Welded shut due to entity infestation."},
                {date: "2026-07-02", t: "Exit Door Mapped", d: "The glowing door is found in the brig."}
            ]),
            resonanceLogs: ["> SCANNING NAVAL VESSEL...", "> RUST AND DECAY DETECTED.", "> SPECTRAL ANOMALIES LOGGED."]
        },

        "level18": {
            type: "level", id: "level18", title: "Level 18", name: "Memories",
            themeColor: "#f472b6", themeHover: "#db2777", themeGlow: "rgba(244, 114, 182, 0.2)", idleAnimation: "animate-pulse-fast",
            tags: [ { label: "CLASS Ψ", class: "bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/30" }, { label: "PSYCHOLOGICAL", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgNUExIDUgMCAwIDAgMTAgNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjQ3MmI2Ii8+PC9zdmc+",
            mapConfig: { seed: 1800, wallDensity: 0.3, renderStyle: 'warehouse', gridSize: 15, poiChance: 0.05, wallColor: '#be185d', gridColor: 'rgba(244,114,182,0.1)', wallThickness: 0.1, bgColor: '#4c1d95', pois: [{ name: "Plush Entity", color: "#ef4444", icon: "🧸" }] },
            specificMetrics: { "Level 18 Specific": { "Nostalgia Index": "Extreme", "Music Box Loops": "Constant" } },
            globalValues: makeGlobals({ "Spatial & Dimensional": { "Hume Level (Reality)": "40.0 H" }, "Survival & Infrastructure": { "Sanity Drain Rate": "Memory Loss" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 18 takes the form of a childhood bedroom, expanding infinitely and heavily inducing nostalgia.</p></div><h3>Description</h3><p>Level 18 looks like a massive, interconnected series of children's bedrooms and playrooms from the 1990s. Giant plush toys, building blocks, and old televisions playing static litter the floor. The level induces an overwhelming sense of nostalgia and comfort, which is a cognitohazard designed to trap wanderers.</p><p>"Plush Entities", resembling giant stuffed animals, will slowly move when not observed, eventually suffocating sleeping victims. The closets frequently contain void traps. To escape, a wanderer must find an old pull-down attic staircase string in the ceiling.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Entering the glowing door in Level 17.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a pull-down wooden staircase in the ceiling leads to Level 19.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Don't trust nostalgia",d:"The comfort is a trap.",c:"fuchsia",l:"Recite complex math to keep your brain logical."},{n:"Beware plush doll",d:"They move when you aren't looking.",c:"red",l:"Always keep one person on watch."},{n:"Stay out of closet",d:"The closets are gateways to the void.",c:"gray",l:"Never open a closed door."},{n:"Find attic stairs",d:"A string hanging from the ceiling.",c:"teal",l:"Pull it firmly to reveal the exit."}],
                [{n:"Analog Watch",i:"ph-watch"},{n:"Earplugs",i:"ph-ear-slash"},{n:"Flashlight",i:"ph-flashlight"},{n:"Journal",i:"ph-book"},{n:"Reality Anchor",i:"ph-anchor"}]
            ),
            history: makeHist([
                {date: "2010-03-14", t: "Memory Effect Documented", d: "Wanderers forget their past lives."},
                {date: "2016-09-02", t: "Plush Doll Classified", d: "The weeping angel mechanics are confirmed."},
                {date: "2021-01-19", t: "L-Corp Analyzes Cognitohazard", d: "It actively targets the amygdala."},
                {date: "2025-08-22", t: "Childhood Trauma Loops", d: "Some rooms project traumatic memories."},
                {date: "2026-07-02", t: "Attic Stairs Mapped", d: "The exit is discovered."}
            ]),
            resonanceLogs: ["> SCANNING PLAYROOM...", "> EXTREME PSYCHOLOGICAL ANOMALIES DETECTED.", "> MEMORY ALTERATION IN PROGRESS."]
        },

        "level19": {
            type: "level", id: "level19", title: "Level 19", name: "Crawlspace",
            themeColor: "#78350f", themeHover: "#451a03", themeGlow: "rgba(120, 53, 15, 0.2)", idleAnimation: "animate-flicker",
            tags: [ { label: "CLASS 4", class: "bg-red-500/10 text-red-500 border-red-500/30" }, { label: "CLAUSTROPHOBIC", class: "bg-orange-500/10 text-orange-400 border-orange-500/30" } ],
            heroImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMEgxMFYySDBNMCA0SDEwVjZIMEUiIGZpbGw9IiM3ODM1MGYiLz48L3N2Zz4=",
            mapConfig: { seed: 1900, wallDensity: 0.9, renderStyle: 'pipes', gridSize: 5, poiChance: 0.05, wallColor: '#451a03', gridColor: 'rgba(120,53,15,0.1)', wallThickness: 0.5, bgColor: '#1c1917', pois: [{ name: "Crawler Entity", color: "#dc2626", icon: "🕷" }] },
            specificMetrics: { "Level 19 Specific": { "Ceiling Height": "1.2m", "Wood Rot Level": "Extreme" } },
            globalValues: makeGlobals({ "Atmospheric Diagnostics": { "Ambient Temp (Core)": "30.0 °C", "Relative Humidity": "10%" }, "Material & Biological": { "Toxicity Levels": "Asbestos Hazard" } }),
            lore: `<div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">Level 19 is an infinite, claustrophobic attic space made entirely of rotting wood and dust.</p></div><h3>Description</h3><p>Level 19 is extremely cramped. The ceiling is too low to stand, forcing wanderers to crawl or crouch constantly. The floor consists of exposed wooden beams with brittle drywall between them; stepping off the beams drops the wanderer into the void. The air is thick with dust and asbestos.</p><p>"Crawlers", mutated entities adapted to the tight spaces, hunt aggressively here. Lighting is virtually non-existent, and the tight geometry makes combat impossible. The ultimate goal is to find a heavy, rusted metal door embedded inexplicably into the brick walls to escape.</p><h3>Entrances & Exits</h3><div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner"><h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-primary"></i> Climbing the attic stairs in Level 18.</li></ul><h4 class="text-liminal-safe font-bold mb-2 mt-6">EXITS</h4><ul class="list-none space-y-2 text-liminal-text mb-4"><li><i class="ph ph-arrow-right text-liminal-safe"></i> Finding a heavy, rusted metal door transitions to Level 20.</li></ul></div>`,
            survivalGuide: makeSG(
                [{n:"Walk on beams",d:"The drywall cannot support human weight.",c:"red",l:"Test the wood with your crowbar before putting weight on it."},{n:"Watch for Crawlers",d:"They move silently through the dust.",c:"purple",l:"Shine your light into the dark corners continuously."},{n:"Don't breathe dust",d:"The air is toxic.",c:"green",l:"Wear a respirator or N95 mask."},{n:"Find rusty door",d:"The exit to Level 20.",c:"teal",l:"It smells strongly of iron."}],
                [{n:"Respirator",i:"ph-mask-water"},{n:"Headlamp",i:"ph-flashlight"},{n:"Heavy Boots",i:"ph-boot"},{n:"Crowbar",i:"ph-wrench"},{n:"Medkit",i:"ph-first-aid"}]
            ),
            history: makeHist([
                {date: "2011-04-20", t: "Wood Rot Analyzed", d: "Found to contain anomalous fungi."},
                {date: "2017-09-08", t: "Crawler Entities Classified", d: "M.E.G. documents their hunting patterns."},
                {date: "2022-03-15", t: "L-Corp Maps Expanse", d: "Using crawling drones to map the beams."},
                {date: "2025-10-30", t: "Box Contents Deemed Useless", d: "Mostly containing old VHS tapes."},
                {date: "2026-07-02", t: "Rusty Door Mapped", d: "The exit is verified."}
            ]),
            resonanceLogs: ["> SCANNING ATTIC SPACE...", "> STRUCTURAL INTEGRITY CRITICAL.", "> DUST PARTICULATES TOXIC."]
        }
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
            history: makeHist([{date: "1991-08-14", t:"First Anomalous Upload",d:"The original Level 0 photo is traced to an anomalous packet injection."},{date: "2010-09-02", t:"Entity Theorized",d:"M.E.G. officially categorizes the phenomenon as Entity 1."}]),
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
            history: makeHist([{date: "1998-11-04", t:"First Sighting in Level 4",d:"A survivor reports encountering a window in a windowless office."},{date: "2009-07-22", t:"The Grab",d:"First recorded death via a Window captured on bodycam."}]),
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
            history: makeHist([{date: "1996-03-12", t:"First Visual Contact",d:"A blurry image of glowing teeth in Level 2 is captured."},{date: "2013-09-04", t:"Creation of Smiler Exterminator",d:"Base Alpha scientists formulate a deterrent compound."}]),
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
            history: makeHist([{date: "1999-01-14", t:"First Sighting in Level 5",d:"Explorers notice abnormally large moths swarming the hotel chandeliers."},{date: "2005-11-20", t:"The Moth King Slain",d:"A coordinated B.N.T.G. militia successfully kills a Deathmoth King."}]),
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
            history: makeHist([{date: "2007-02-19", t:"The Vent Disappearance",d:"A wanderer on Level 2 vanishes without a trace."},{date: "2015-11-23", t:"Biological Analysis",d:"DNA testing reveals it is composed of dozens of missing wanderers."}]),
            resonanceLogs: ["> BOOTING THERMAL IMAGING SUITE...", "> CRITICAL MASS DETECTED: 32 INDIVIDUAL BIOMETRIC SIGNATURES OVERLAPPING.", "> RECOMMENDATION: DO NOT WALK UNDER VENT GRATE."]
        }
    }
};