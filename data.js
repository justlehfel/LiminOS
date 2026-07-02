// ==========================================
// DATA STRUCTURE: LIMINOS GLOBAL METRICS
// ==========================================

const GlobalMetrics = [
    { category: "Chrono-Temporal Dynamics", icon: "ph-hourglass", color: "text-teal-400", data: { "Frontrooms Time Dilation": "1:1.0 (Baseline)", "Local Time Flow Rate": "Standard Linear", "Temporal Loop Probability": "0.00%", "Entropy Gradient": "Normal", "Atomic Clock Drift": "±0.0s/24h", "Subjective Time Variance": "Low", "Causality Integrity": "99.9%", "Temporal Echoes": "None detected", "Chronon Radiation": "Background", "Memory Degradation": "Baseline", "Aging Effect on Biology": "Normal", "Device Battery Drain": "Standard", "Historical Sedimentation": "Present", "Simultaneity Loss": "None", "Time Dilation Ratio": "1.000" } },
    { category: "Spatial & Dimensional", icon: "ph-intersect", color: "text-purple-400", data: { "Hume Level (Reality)": "100.0 H", "Kant Counter Reading": "1.00", "Euclidean Consistency": "99.9%", "Noclipping Threshold": "Impossible", "Spatial Dilation Factor": "1:1", "Gravity Variance": "9.81 m/s²", "Z-Axis Deviation": "0.00%", "Magnetic Declination": "Standard Earth", "Tesseract Folding": "None", "Quantum Superposition": "Collapsed", "Non-linear Corridors": "0%", "Collision Meshes": "Solid/Intact", "Coordinate Drift": "0m/hr", "Dimensional Permeability": "0.02%" } },
    { category: "Atmospheric Diagnostics", icon: "ph-wind", color: "text-blue-400", data: { "Ambient Temp (Core)": "20.0 °C", "Temp Fluctuation (24h)": "±2.0 °C", "Relative Humidity": "40-60%", "Atmospheric Pressure": "101.3 kPa", "Air Comp: O2": "20.9%", "Air Comp: CO2": "0.04%", "Air Comp: N2": "78.0%", "Trace Anomalous Gases": "0%", "Particulate Matter": "Safe", "Ozone Level": "Normal", "Aerosolized Spores": "None", "Background Rad-Count": "0.12 μSv/h", "Barometric Spike": "±0.1 kPa" } },
    { category: "Acoustic & Luminescent", icon: "ph-waveform", color: "text-yellow-400", data: { "Ambient Hum": "None", "Acoustic Reverberation": "Standard", "Light Source Type": "Variable", "Luminosity Level": "Variable Lux", "Color Temperature": "Variable K", "Total Darkness Zones": "Possible", "Audio Hallucination Risk": "0%", "UV Radiation": "Sunlight-dependent", "Absolute Decibel Baseline": "30 dB", "Sub-sonic Interference": "None" } },
    { category: "Material & Biological", icon: "ph-flask", color: "text-green-400", data: { "Toxicity Levels": "Safe", "Pathogen Level": "Standard Earth", "Mold Spore Count": "Low", "Structural Integrity": "Variable", "Entity Density": "0.00", "Organic Decay Rate": "Standard", "Nutrient Availability": "High", "Dehydration Risk": "Normal", "Flora/Fauna Present": "Earth Standard", "Carpet Fluid Toxicity": "0%" } },
    { category: "Survival & Infrastructure", icon: "ph-shield", color: "text-red-400", data: { "Base Threat Level": "0", "Sanity Drain Rate": "0%", "Isolation Factor": "Variable", "Radio Comm Integrity": "100%", "GPS Functionality": "Online", "Electrical Availability": "Variable", "Internet Access": "Available", "Rescue Probability": "High", "Navigation Difficulty": "Low", "Psychological Erosion Rate": "Baseline" } }
];

const LiminOSClassifications = {
    general: [
        { class: "Class 0", name: "Habitable", color: "bg-green-500", desc: "Safe, secure, devoid of entities. Environment is stable and can support long-term outposts." },
        { class: "Class 1", name: "Safe", color: "bg-green-400", desc: "Safe, secure, minimal entity count. Environmental hazards are low." },
        { class: "Class 2", name: "Unsafe", color: "bg-yellow-400", desc: "Unsafe, unsecure, low entity count. Environmental hazards require attention." },
        { class: "Class 3", name: "Hazardous", color: "bg-orange-500", desc: "Unsafe, unsecure, moderate entity count. Survival requires preparation." },
        { class: "Class 4", name: "Dangerous", color: "bg-red-500", desc: "Unsafe, unsecure, high entity count. Immediate danger to human life." },
        { class: "Class 5", name: "Lethal", color: "bg-red-700", desc: "Unsafe, unsecure, entity infestation. Survival is nearly impossible." }
    ],
    special: [
        { class: "Class Ψ", name: "Psychological", color: "bg-fuchsia-500", desc: "Environment directly attacks the mind. Hallucinations or memory loss." },
        { class: "Class 2e", name: "Environmental", color: "bg-blue-500", desc: "Severe environmental or biohazardous threats are present, requiring protective gear." },
        { class: "Class Mu", name: "Irradiated", color: "bg-lime-500", desc: "High presence of radioactive material or severe nuclear anomalies." }
    ],
    tags: [
        { label: "SAFE", icon: "ph-check-circle", color: "text-green-400" }, { label: "UNSTABLE", icon: "ph-warning", color: "text-yellow-400" },
        { label: "DEVOID OF ENTITIES", icon: "ph-ghost", color: "text-blue-400" }, { label: "ENTITY INFESTATION", icon: "ph-skull", color: "text-red-500" },
        { label: "ENVIRONMENTAL HAZARD", icon: "ph-wind", color: "text-orange-400" }
    ]
};

// ==========================================
// UTILITY BUILDERS FOR LIMINOS RENDERER
// ==========================================

const buildLore = (desc, entrances, exits) => `
    <div class="mb-6 pb-4 border-b border-white/5"><p class="text-xl text-white font-light">${desc}</p></div>
    <h3>Entrances & Exits</h3>
    <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm shadow-inner">
        <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
        <ul class="list-none space-y-2 text-liminal-text mb-4">${entrances.map(e => `<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-primary mt-1 animate-pulse"></i> ${e}</li>`).join('')}</ul>
        <h4 class="text-liminal-safe font-bold mb-2 mt-6">KNOWN EXITS</h4>
        <ul class="list-none space-y-2 text-liminal-text mb-4">${exits.map(e => `<li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> ${e}</li>`).join('')}</ul>
    </div>
`;

const buildSurvival = (tricks, loadout) => {
    const colors = ["blue", "purple", "green", "yellow", "orange", "red", "cyan", "teal", "fuchsia", "rose"];
    let html = '<div class="space-y-6 text-sm text-liminal-text max-w-4xl">';
    tricks.forEach((t, i) => {
        const c = colors[i % colors.length];
        html += `<div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-${c}-500 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow">
            <h4 class="text-${c}-500 font-bold uppercase mb-3 text-lg flex items-center gap-2">${i+1}. ${t.t}</h4>
            <p class="mb-2">${t.d}</p><p class="bg-${c}-900/20 p-3 rounded text-${c}-200 text-xs font-mono border border-${c}-500/20"><strong>L-CORP TRICK:</strong> ${t.l}</p>
        </div>`;
    });
    html += `<div class="mt-8 pt-6 border-t border-white/10"><h4 class="text-white font-bold mb-4 text-xl tracking-tight">Essential Loadout</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-3">`;
    loadout.forEach((item, i) => {
        html += `<div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><i class="ph ${item.icon} text-2xl" style="color:var(--theme-primary)"></i><span class="font-mono text-xs">${item.name}</span></div>`;
    });
    return html + `</div></div></div>`;
};

const buildHistory = (logs) => {
    let html = '<div class="relative border-l border-liminal-border ml-4 md:ml-6 space-y-10 pb-12 mt-4">';
    logs.forEach((h, i) => {
        html += `<div class="relative pl-6 md:pl-10"><div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
        <div class="text-[10px] text-liminal-muted mb-1 font-mono">${h.date}</div><h4 class="text-white font-bold text-lg mb-2">${i+1}. ${h.t}</h4><p class="text-sm text-liminal-muted">${h.d}</p></div>`;
    });
    return html + '</div>';
};

const generateSVG = (r, g, b) => `data:image/svg+xml;base64,` + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><rect width="12" height="12" fill="rgb(${r},${g},${b})"/><path d="M0 6h12M6 0v12" stroke="rgb(${r+40},${g+40},${b+40})" stroke-width="1"/></svg>`);

// ==========================================
// DATABASE INSTANTIATION
// ==========================================

const LiminOSDatabase = { levels: {} };

const insertLevel = (num, title, name, themeColor, themeClass, tags, desc, ent, ex, tricks, loadout, history, metrics, pois) => {
    LiminOSDatabase[`level${num}`] = {
        type: "level", id: `level${num}`, title: title, name: name, themeColor: themeColor, themeHover: themeColor, themeGlow: `rgba(255,255,255,0.2)`, idleAnimation: "animate-ambient-drift",
        tags: tags.map(t => ({ label: t.toUpperCase(), class: `bg-${themeClass}-500/10 text-${themeClass}-400 border-${themeClass}-500/30` })),
        heroImage: generateSVG(parseInt(themeColor.slice(1,3), 16), parseInt(themeColor.slice(3,5), 16), parseInt(themeColor.slice(5,7), 16)),
        mapConfig: { seed: 8000 + num, wallDensity: 0.6, renderStyle: num % 2 === 0 ? 'grid' : 'diagonal', gridSize: 8, poiChance: 0.04, wallColor: themeColor, gridColor: 'rgba(255,255,255,0.05)', wallThickness: 0.2, bgColor: '#030303', pois: pois },
        specificMetrics: metrics,
        lore: buildLore(desc, ent, ex),
        survivalGuide: buildSurvival(tricks, loadout),
        history: buildHistory(history),
        resonanceLogs: ["> INITIATING QUANTUM PING...", `> TARGET: LEVEL ${num} TOPOLOGY`, "> CALIBRATING HUME SENSORS... [OK]", "> EXTRACTING SPATIAL DATA... [OK]", "> SCAN COMPLETE. UPLOADING."]
    };
};

// --- LEVEL 0 ---
insertLevel(0, "Level 0", "The Lobby", "#eab308", "yellow", ["Class 1", "Unstable", "Devoid of Entities"],
    "Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet, filled with worn, moist carpeting and inconsistently placed fluorescent lighting.",
    ["Noclipping out of bounds in Baseline Reality.", "Failing an exit attempt in Level 283."], ["Wandering far enough may lead to Level 1 garages.", "Breaking through a wall leads to Level 483."],
    [
        {t: "Psychological Anchoring", d: "The hum-buzz induces rapid monophobia.", l: "Carry a mechanical watch. The ticking overrides the hum-buzz."},
        {t: "Resource Management", d: "Carpet fluid is toxic.", l: "Search for pooling condensation near anomalies for Almond Water."},
        {t: "Navigation Protocols", d: "Geometry is non-linear.", l: "Employ the Right-Hand Rule to hit boundary walls."},
        {t: "Sleep Deprivation", d: "Lights never turn off.", l: "Tear strips of wallpaper for a blindfold. Sleep in 3-hour bursts."},
        {t: "Equipment Degradation", d: "Static charge drains batteries.", l: "Use solid-state drives shielded in Faraday cages."},
        {t: "Dietary Restrictions", d: "Black mold is toxic.", l: "Rely entirely on brought rations."},
        {t: "Entity Protocols", d: "Hallucinations mimic entities.", l: "Acknowledge the hallucination out loud calmly."},
        {t: "Noclip Vulnerabilities", d: "Glitching walls indicate a weak mesh.", l: "Avoid dark walls to prevent Void drops."},
        {t: "Fluid Extraction", d: "Squeezing carpet releases aerosolized spores.", l: "Wrap feet in torn wallpaper if barefoot."},
        {t: "Spatial Marking", d: "Items fall through geometry.", l: "Use chalk only to confirm localized loops."}
    ],
    [
        {name: "Noise-cancelling headsets", icon: "ph-headphones"}, {name: "3L Purified Almond Water", icon: "ph-drop"},
        {name: "Industrial Marking Chalk", icon: "ph-pencil"}, {name: "Mechanical Watch", icon: "ph-watch"},
        {name: "Faraday Cage Pouch", icon: "ph-shield"}, {name: "Thick-soled combat boots", icon: "ph-boot"},
        {name: "Light-blocking sleep mask", icon: "ph-eye-closed"}, {name: "Analog Compass", icon: "ph-compass"},
        {name: "High-calorie survival paste", icon: "ph-first-aid"}, {name: "Proprietary Sub-space beacon", icon: "ph-broadcast"}
    ],
    [
        {date: "MAY 12, 2019", t: "Initial Archival Image Captured", d: "An anonymous user uploads the first verified visual telemetry of Level 0."},
        {date: "OCTOBER 4, 2020", t: "Project Yellow Wallpaper", d: "Unmanned, tungsten-shielded probes are sent via induced noclip events."},
        {date: "JUNE 13, 2022", t: "Expedition Log Recovered", d: "Data retrieval confirms severe psychological degradation models."},
        {date: "JANUARY 18, 2023", t: "400-Mile March Experiment", d: "Agent L-89 undergoes an endurance run, confirming massive topological loop structures."},
        {date: "CURRENT YEAR", t: "Stable LiminOS Uplink", d: "Proprietary quantum nodes allow real-time telemetry extraction."}
    ],
    { "Spatial & Dimensional": { "Hume Level (Reality)": "82.4 H", "Euclidean Consistency": "14.2%" }, "Atmospheric Diagnostics": { "Chemical Odor Profile": "Moist Carpet/Ozone" } },
    [{ name: "Gateway to Level 1", color: "#9ca3af", icon: "⬇" }]
);

// --- LEVEL 6 ---
insertLevel(6, "Level 6", "Lights Out", "#1a1a1a", "gray", ["Class 4", "Pitch Black", "Entity Infestation"],
    "Level 6 is a sprawling, barren tundra and subterranean complex shrouded in perpetual, absolute darkness. Auditory hallucinations and microsleep are rampant due to isolation.",
    ["Entering a boiler located within Level 5.", "Passing through a rusted door in Level 6.1."], ["Tripping on a fallen branch leads to Level 6.1.", "Entering a hole leads to Level 8."],
    [
        {t: "Total Darkness", d: "Photons are anomalously absorbed.", l: "Rely on tactile feedback and kinetic energy."},
        {t: "Microsleep Prevention", d: "The dark forces sudden narcolepsy.", l: "Consume pure adrenaline periodically to stay awake."},
        {t: "Auditory Hallucinations", d: "Voices mimic loved ones perfectly.", l: "Utilize industrial earplugs to block psychological attacks."},
        {t: "Thermal Drops", d: "Temperatures plummet randomly to freezing.", l: "Wear insulated tactical gear at all times."},
        {t: "Entity Evasion", d: "Entities hunt entirely by sound.", l: "Stay completely silent; sound travels miles."},
        {t: "Wire Traps", d: "Unseen wires cross corridors.", l: "Sweep arms forward slowly while walking."},
        {t: "Subterranean Descent", d: "Floors occasionally collapse.", l: "Test weight distribution before stepping."},
        {t: "Mental Anchoring", d: "Paranoia reaches critical levels rapidly.", l: "Recite prime numbers out loud to maintain logic."},
        {t: "Smiler Infestations", d: "Smilers thrive in absolute darkness.", l: "Never use flashlights if glowing eyes are seen; throw glowsticks as decoys."},
        {t: "Navigation", d: "No visual markers exist anywhere.", l: "Follow distinct air drafts to locate exits."}
    ],
    [
        {name: "Night Vision Goggles (Fail-prone)", icon: "ph-binoculars"}, {name: "Chemical Glowsticks", icon: "ph-lightbulb"},
        {name: "Thermal Insulated Suit", icon: "ph-coat"}, {name: "Industrial Earplugs", icon: "ph-ear"},
        {name: "Adrenaline Syringes", icon: "ph-syringe"}, {name: "Smiler Exterminator Fluid", icon: "ph-flask"},
        {name: "Tactical Walking Stick", icon: "ph-stick"}, {name: "High-calorie Rations", icon: "ph-hamburger"},
        {name: "Silent Footwear", icon: "ph-boot"}, {name: "Almond Water", icon: "ph-drop"}
    ],
    [
        {date: "AUG 19, 2019", t: "First Blackout Report", d: "Wanderers report complete visual loss transitioning from Level 5."},
        {date: "MAR 10, 2020", t: "Smiler Discovery", d: "First fatal encounter with absolute-zero entities caught on audio."},
        {date: "DEC 04, 2021", t: "Tunnel Mapping", d: "M.E.G. attempts sonar mapping of the underground corridors."},
        {date: "FEB 22, 2022", t: "Psychological Study", d: "Microsleep identified as the primary hazard by Base Alpha."},
        {date: "CURRENT YEAR", t: "Avoidance Protocol", d: "Level officially designated as transit-only due to high casualty rates."}
    ],
    { "Acoustic & Luminescent": { "Luminosity Level": "0 Lux (Absolute)" }, "Survival & Infrastructure": { "Psychological Erosion Rate": "Severe" } },
    [{ name: "Hole to Level 8", color: "#78350f", icon: "🕳" }]
);

// --- LEVEL 8 ---
insertLevel(8, "Level 8", "Cave System", "#78350f", "orange", ["Class 3", "Hostile Entities", "Environmental Hazard"],
    "Level 8 is a sprawling subterranean complex of towering, rocky heights and deep, twisting burrows. Its extreme difficulty of navigation makes it nearly impossible to measure.",
    ["Entering a hole in Level 6.", "Stumbling into a sinkhole in Level 85."], ["Wandering far enough may lead to Level 9.", "Falling through unstable rock leads to Level 2."],
    [
        {t: "Stalactite Hazards", d: "Ceiling rocks frequently fall due to seismic shifts.", l: "Wear reinforced headgear at all times."},
        {t: "Arachnid Entities", d: "Giant spiders nest in the higher ridges.", l: "Carry industrial chemical deterrents to mask scent."},
        {t: "The Burrows", d: "Tight caves shift architecture anomalously.", l: "Never enter unmapped burrows; stick to open caverns."},
        {t: "Abyssal Drops", d: "Pits have no determined bottom.", l: "Use high-lumen flares to check depth before jumping."},
        {t: "Almond Water Scarcity", d: "Cave pools are highly toxic and acidic.", l: "Do not drink cave runoff under any circumstances."},
        {t: "Echo Location", d: "Sound bounces endlessly in the caverns.", l: "Use sound to detect cavern size and entity presence."},
        {t: "Bridge Crossings", d: "Old wooden bridges are severely rotted.", l: "Always cross one at a time, tethered to a rock anchor."},
        {t: "Thermal Vents", d: "Steam burns are common near the floor.", l: "Avoid red-tinted rock formations."},
        {t: "Entity 5 (Clumps)", d: "Clumps hide in crevices to ambush prey.", l: "Always look up when entering a new chamber."},
        {t: "Directional Tracking", d: "Compasses fail due to magnetic anomalies.", l: "Leave chemical glow markers to trace your path."}
    ],
    [
        {name: "Reinforced Spelunking Helmet", icon: "ph-helmet"}, {name: "Heavy Duty Climbing Rope", icon: "ph-link"},
        {name: "Chemical Deterrent Spray", icon: "ph-spray-bottle"}, {name: "High-Lumen Flares", icon: "ph-fire"},
        {name: "Carabiners & Pitons", icon: "ph-anchor"}, {name: "Extended Rations (14 Days)", icon: "ph-backpack"},
        {name: "Water Filtration Tablets", icon: "ph-pill"}, {name: "Thick Leather Gloves", icon: "ph-hand"},
        {name: "Glow Markers", icon: "ph-paint-brush"}, {name: "Machete", icon: "ph-sword"}
    ],
    [
        {date: "920 BCE", t: "Initial Formation", d: "Theorized by historians to be one of the oldest structural levels."},
        {date: "OCT 14, 2018", t: "Arachnid Incident", d: "Mass casualty event in Sector 4 wipes out an entire exploration team."},
        {date: "JUN 03, 2020", t: "Bridge Collapse", d: "Ancient wooden structures give way, proving decay anomalies."},
        {date: "SEP 11, 2021", t: "Burrow Mapping", d: "L-Corp drones lost due to constantly shifting subterranean geometry."},
        {date: "CURRENT YEAR", t: "Hazard Zone", d: "Considered highly lethal for solo travelers; group tethering is mandatory."}
    ],
    { "Spatial & Dimensional": { "Euclidean Consistency": "45.2%" }, "Material & Biological": { "Entity Density": "High (Arachnids, Clumps)" } },
    [{ name: "Deep Burrow Entry", color: "#000", icon: "🕳" }]
);

// --- LEVEL 9 ---
insertLevel(9, "Level 9", "Darkened Suburbs", "#1e3a8a", "blue", ["Class 5", "Lethal", "Entity Infestation"],
    "Level 9 is a winding network of paved asphalt roads and post-war residential homes. The entire suburbia is under eternal nighttime, enshrouded in thick fog that limits vision to mere meters.",
    ["Taking specific walkways from Level 10.", "Noclipping through a snow-covered tree in Level 9.1."], ["Following walkways back to Level 10.", "Destroyed basement doors connect to Level 84."],
    [
        {t: "Fog Obscurity", d: "Visibility is less than 3 meters.", l: "Use thermal imaging goggles to spot entities."},
        {t: "House Interiors", d: "Houses contain hostile entities and traps.", l: "Never enter a home with locked doors; force entry is fatal."},
        {t: "Deathmoth Swarms", d: "Lethal moths patrol the skies.", l: "Do not use upward-facing flashlights or high beams."},
        {t: "Wretch Encounters", d: "Aggressive mutated humans roam the streets.", l: "Outpace them; their mutations prevent them from running."},
        {t: "Skin-Stealers", d: "Entities perfectly mimic travelers.", l: "Check blood color; transparent blood means shoot to kill."},
        {t: "The Tree House", d: "A safe bar run by Faceling 'Any E'.", l: "Seek neon lights hidden behind the main housing rows."},
        {t: "Noise Discipline", d: "Sound attracts neighborhood entities rapidly.", l: "Tread lightly on asphalt; avoid stepping on debris."},
        {t: "Window Traps", d: "Entity 2 mimics house windows.", l: "Never approach windows showing bright, idyllic scenes."},
        {t: "Weapon Selection", d: "Precision weapons fail on flying moths.", l: "Use area-effect shotguns equipped with incendiary rounds."},
        {t: "Roadway Anomalies", d: "Roads infinitely loop without logic.", l: "Track landmarks using luminescent graffiti on stop signs."}
    ],
    [
        {name: "Thermal Imaging Goggles", icon: "ph-binoculars"}, {name: "Incendiary Shotgun", icon: "ph-crosshair"},
        {name: "Low-Profile Flashlight", icon: "ph-flashlight"}, {name: "Blood Testing Kit", icon: "ph-test-tube"},
        {name: "Heavy Body Armor", icon: "ph-shield"}, {name: "Silent Tread Boots", icon: "ph-boot"},
        {name: "UV Chemical Spray", icon: "ph-spray-bottle"}, {name: "Barter Goods (For Any E)", icon: "ph-coins"},
        {name: "Luminescent Spray Paint", icon: "ph-paint-brush"}, {name: "Medical Trauma Kit", icon: "ph-first-aid"}
    ],
    [
        {date: "MAR 04, 2019", t: "First Suburb Sighting", d: "Wanderers document the neighborhood and its eternal night."},
        {date: "JUL 12, 2020", t: "The Tree House", d: "Any E. establishes a neutral sanctuary immune to entity attacks."},
        {date: "NOV 08, 2021", t: "Moth Migration", d: "Deathmoths establish localized hives on the rooftops of Sector 3."},
        {date: "FEB 14, 2023", t: "Wretch Surge", d: "Psychological breakdowns exponentially increase the Wretch population."},
        {date: "CURRENT YEAR", t: "High Alert", d: "M.E.G. advises extreme caution; deemed a Class 5 lethal zone."}
    ],
    { "Atmospheric Diagnostics": { "Relative Humidity": "100% (Persistent Fog)" }, "Behavioral & Aggression Matrix": { "Hostility Baseline": "Extreme" } },
    [{ name: "The Tree House (Safe Zone)", color: "#22c55e", icon: "🍻" }]
);

// --- LEVEL 10 ---
insertLevel(10, "Level 10", "The Bumper Crop", "#ca8a04", "yellow", ["Class 1", "Safe", "Habitable"],
    "Level 10 is an expansive pasture of wheat and barley fields stretching endlessly under a leaden, overcast sky. The level features abundant resources and is safe for habitation.",
    ["Walking down the paths in Level 9.", "Taking back roads from Level 11."], ["Wandering far enough leads to Level 83.", "Contact with black grass teleports to After Life."],
    [
        {t: "Resource Harvesting", d: "Wheat and barley are completely safe to consume.", l: "Harvest grain to stockpile for deeper level descents."},
        {t: "Water Sources", d: "Puddles do not drain due to hydrophobic soil.", l: "Boil surface water before drinking to kill trace bacteria."},
        {t: "Excavation Hazard", d: "Digging summons anomalous worms.", l: "Never dig deeper than 1 meter under any circumstances."},
        {t: "Tire Tracks", d: "Roads show usage but lack vehicles.", l: "Follow dirt tracks to locate established M.E.G. outposts."},
        {t: "Shrubbery Lines", d: "Bushes divide plots uniformly.", l: "Use them to grid-map the level and prevent getting lost."},
        {t: "Weather Patterns", d: "Rain is brief but frequent.", l: "Set up wide tarps to collect clean rainwater safely."},
        {t: "Time Dilation", d: "No day/night cycle exists; sky is always overcast.", l: "Rely strictly on mechanical clocks to track sleep cycles."},
        {t: "Entity Absence", d: "The level is highly devoid of biological threats.", l: "Use this level for psychological recovery and resting."},
        {t: "Black Grass", d: "Anomalous grass causes instantaneous teleportation.", l: "Avoid dark patches entirely; they lead to lethal zones."},
        {t: "Settlement Building", d: "Prime candidate for permanent bases.", l: "Construct shelters using harvested shrubbery and dirt."}
    ],
    [
        {name: "Scythe / Harvesting Tool", icon: "ph-knife"}, {name: "Water Boiling Kit", icon: "ph-fire"},
        {name: "Large Canvas Tarps", icon: "ph-tent"}, {name: "Mechanical Clock", icon: "ph-watch"},
        {name: "Burlap Sacks (For grain)", icon: "ph-bag"}, {name: "Camp Stove", icon: "ph-cooking-pot"},
        {name: "Sturdy Hiking Boots", icon: "ph-boot"}, {name: "Compass", icon: "ph-compass"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Trade Barter Items", icon: "ph-coins"}
    ],
    [
        {date: "920 BCE", t: "Early Formation", d: "Recorded in archaic Backrooms lore as one of the original agricultural levels."},
        {date: "MAY 15, 2018", t: "Harvest Outposts", d: "B.N.T.G. establishes the first large-scale agricultural bases."},
        {date: "AUG 22, 2020", t: "The Worm Incident", d: "Deep digging by unaware wanderers causes a localized biological breach."},
        {date: "JAN 04, 2022", t: "M.E.G. Approval", d: "Deemed safe for mass civilian habitation and farming."},
        {date: "CURRENT YEAR", t: "Transit Hub", d: "Serves as the primary food supply route for Cluster I settlements."}
    ],
    { "Material & Biological": { "Nutrient Availability": "Extremely High", "Toxicity Levels": "0%" } },
    [{ name: "Wheat Farm Outpost", color: "#eab308", icon: "🌾" }]
);

// --- LEVEL 11 ---
insertLevel(11, "Level 11", "Concrete Jungle", "#64748b", "gray", ["Class 1", "Habitable", "Safe"],
    "Level 11 is an infinite metropolis of modern skyscrapers, apartments, and concrete infrastructure. It is largely benign, devoid of hostile entities, and heavily populated.",
    ["Wandering far enough from Level 10."], ["Sewer grates lead directly to Level 34.", "Interacting with traffic lights leads to Level 11.6."],
    [
        {t: "Urban Scavenging", d: "Buildings contain safe supplies and food.", l: "Loot corner stores for Almond Water and canned goods."},
        {t: "Traffic Avoidance", d: "No cars exist, but roads loop infinitely.", l: "Stick to sidewalks to prevent getting lost in the asphalt maze."},
        {t: "Building Entry", d: "Skyscrapers act as micro-levels.", l: "Map interior exits carefully; stairwells often shift."},
        {t: "Entity Trade", d: "Facelings here are entirely docile.", l: "Barter with local neutral entities for rare materials."},
        {t: "Sewer Hazards", d: "Grates lead to severe Biohazards.", l: "Never enter a drainpipe; the Hydrolitis plague is lethal."},
        {t: "Radio Signals", d: "Comms work perfectly here.", l: "Use shortwave radios to contact M.E.G. dispatch."},
        {t: "Weather", d: "Sunny with occasional gentle rain.", l: "Use rooftops for solar charging battery packs."},
        {t: "Elevator Roulette", d: "Elevators occasionally warp reality.", l: "Take the stairs when possible to ensure linear movement."},
        {t: "Subway Systems", d: "Leads to The Metro.", l: "Only use mapped transit lines sanctioned by outposts."},
        {t: "Psychological Relief", d: "The level mimics Earth perfectly.", l: "Beware of severe homesickness; it causes mental breakdowns."}
    ],
    [
        {name: "Shortwave Radio", icon: "ph-radio"}, {name: "Solar Power Bank", icon: "ph-battery-charging"},
        {name: "Urban Backpack", icon: "ph-backpack"}, {name: "City Map (M.E.G. Issued)", icon: "ph-map-trifold"},
        {name: "Trade Currency", icon: "ph-money"}, {name: "Crowbar (For doors)", icon: "ph-wrench"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "Comfortable Sneakers", icon: "ph-sneaker"},
        {name: "Water Bottles", icon: "ph-drop"}, {name: "Signal Flare", icon: "ph-fire"}
    ],
    [
        {date: "SEP 12, 2019", t: "City Discovered", d: "Mass migration of wanderers begins after exiting Level 10."},
        {date: "FEB 20, 2020", t: "Base Establishment", d: "M.E.G. sets up primary urban outposts and residential zones."},
        {date: "NOV 05, 2021", t: "Faceling Integration", d: "Neutral entities successfully integrated into the societal economy."},
        {date: "JUL 18, 2023", t: "Sewer Lockdown", d: "All grates to Level 34 are welded shut due to biohazard leaks."},
        {date: "CURRENT YEAR", t: "The Metropolis", d: "Level 11 stands as the most populated and stable level in Cluster I."}
    ],
    { "Spatial & Dimensional": { "Hume Level (Reality)": "99.0 H" }, "Survival & Infrastructure": { "Electrical Availability": "100%" } },
    [{ name: "M.E.G. Headquarters", color: "#3b82f6", icon: "🏢" }]
);

// --- LEVEL 14 ---
insertLevel(14, "Level 14", "Inhospitality", "#ef4444", "red", ["Class Ψ", "Psychological", "Unstable"],
    "Level 14 takes the form of a well-equipped hospital comprising infinitely segmented areas with shadowy hallways. Constant distant footsteps and whispers induce unceasing paranoia.",
    ["Entering a rare emergency exit in Level 0.", "Wandering through doors in Level 13."], ["Following floor arrows to the main exit leads to Level 130.", "Futuristic doors lead to Level 15.", "Toying with medical equipment leads to Level 268."],
    [
        {t: "Auditory Hallucinations", d: "Whispers and footsteps are constant.", l: "Wear noise-canceling headphones to prevent severe paranoia."},
        {t: "Shadow Evasion", d: "Shadowy figures lurk in patient rooms.", l: "Never enter a room where the lights are off."},
        {t: "Equipment Hazards", d: "Medical tools teleport wanderers.", l: "Do not touch scalpels, MRI machines, or IV drips."},
        {t: "Floor Arrows", d: "Red arrows point to the exit.", l: "Follow them exactly; deviating causes spatial loops."},
        {t: "The Research Group", d: "Past explorers died here.", l: "Loot their remains but do not read their journals."},
        {t: "Futuristic Doors", d: "Lead to Level 15.", l: "Enter these if you wish to escape the hospital setting."},
        {t: "Sanity Preservation", d: "The sterile environment breaks the mind.", l: "Focus on bright colors; carry a vibrant object."},
        {t: "Entity Absence", d: "The threats are entirely psychological.", l: "Remind yourself that the footsteps cannot hurt you."},
        {t: "Drug Scavenging", d: "Pharmacies contain anomalous pills.", l: "Only consume pills verified by M.E.G. databases."},
        {t: "Corridor Infinite Loop", d: "Hallways stretch forever.", l: "Turn back immediately if the floor tiles change color."}
    ],
    [
        {name: "Noise-canceling Headphones", icon: "ph-headphones"}, {name: "Sanity Restorative Meds", icon: "ph-pill"},
        {name: "High-Lumen Flashlight", icon: "ph-flashlight"}, {name: "Vibrant Focus Object", icon: "ph-star"},
        {name: "M.E.G. Pill Database", icon: "ph-book-open"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Analog Watch", icon: "ph-watch"}, {name: "Chalk", icon: "ph-pencil"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Rubber Gloves", icon: "ph-hand"}
    ],
    [
        {date: "OCT 11, 2020", t: "Hospital Discovered", d: "Wanderers document the eerie, empty medical facility."},
        {date: "JAN 05, 2021", t: "Research Group Formed", d: "A team enters to catalog the medical supplies."},
        {date: "MAR 22, 2021", t: "Team Deceased", d: "All members of the research group succumb to paranoia and perish."},
        {date: "AUG 14, 2022", t: "Exit Arrows Mapped", d: "The red floor arrows are confirmed to lead to Level 130."},
        {date: "CURRENT YEAR", t: "Psychological Threat", d: "Designated as a Class Psi hazard; enter only if necessary."}
    ],
    { "Survival & Infrastructure": { "Psychological Erosion Rate": "Extreme" }, "Acoustic & Luminescent": { "Audio Hallucination Risk": "100%" } },
    [{ name: "Pharmacy Storage", color: "#22c55e", icon: "💊" }]
);

// --- LEVEL 16 ---
insertLevel(16, "Level 16", "J. Barry Mental Asylum", "#d946ef", "fuchsia", ["Class 2", "Psychological", "Unsafe"],
    "Level 16 is a defunct psychiatric facility that stretches endlessly. It attempts to placate wanderers by creating padded rooms and providing meals, trapping them via comfort.",
    ["Traveling too far into the hospital in Level 14."], ["Checking out at the receptionist desk leads to unknown voids.", "Escaping through the Novelty Zone."],
    [
        {t: "The Comfort Trap", d: "The asylum provides perfect amenities.", l: "Never sleep in the beds; you will lose the will to leave."},
        {t: "Maid Entities", d: "Entities serve food and clean.", l: "Ignore them; speaking to them initiates a permanent contract."},
        {t: "The Receptionist", d: "Offers to extend your stay.", l: "Do not engage. Run past the desk."},
        {t: "Elevator Deception", d: "Buttons lead deeper into the hotel.", l: "Always take emergency exit stairs upward."},
        {t: "The Novelty Zone", d: "A futuristic sector deep inside.", l: "Seek this zone to find genuine exits."},
        {t: "M.E.G. Outpost", d: "Asylum Archivers exist in break rooms.", l: "Trade hospital equipment with them for intel."},
        {t: "The Faced Ones", d: "Staff members who treat travelers.", l: "Accept medical help but refuse to stay overnight."},
        {t: "Food Consumption", d: "Provided meals contain sedatives.", l: "Only eat rations you brought yourself."},
        {t: "Certificate Hallucination", d: "The level fakes your time spent.", l: "Check your own watch; the level lies about years passed."},
        {t: "Taser Defense", d: "The Faced Ones hoard tasers.", l: "Trade for a taser; they disable rogue entities instantly."}
    ],
    [
        {name: "Mechanical Watch", icon: "ph-watch"}, {name: "Personal Rations", icon: "ph-hamburger"},
        {name: "Taser (Traded)", icon: "ph-lightning"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Hospital Scavenge (For trade)", icon: "ph-stethoscope"}, {name: "Stairway Map", icon: "ph-map-trifold"},
        {name: "Adrenaline", icon: "ph-syringe"}, {name: "Flashlight", icon: "ph-flashlight"},
        {name: "Earplugs", icon: "ph-ear"}, {name: "Running Shoes", icon: "ph-sneaker"}
    ],
    [
        {date: "FEB 28, 2021", t: "First Victim", d: "A wanderer stays for 'one night' and documents the trap."},
        {date: "MAY 19, 2021", t: "Asylum Archivers", d: "M.E.G. establishes a secure documentation outpost."},
        {date: "SEP 03, 2022", t: "The Faced Ones", d: "Former staff establish a neutral medical zone."},
        {date: "NOV 11, 2023", t: "Novelty Zone Found", d: "Deep explorers discover the futuristic exit sector."},
        {date: "CURRENT YEAR", t: "Cognitohazard Warning", d: "The comfort of the level is officially classified as a psychological weapon."}
    ],
    { "Survival & Infrastructure": { "Shelter Viability Score": "100/100 (Trap)" }, "Behavioral & Aggression Matrix": { "Hostility Baseline": "Passive-Aggressive" } },
    [{ name: "M.E.G. Asylum Archivers", color: "#3b82f6", icon: "🛡" }]
);

// --- LEVEL 17 ---
insertLevel(17, "Level 17", "Abandoned Carrier", "#0ea5e9", "cyan", ["Class 2", "Unsafe", "Aquatic"],
    "Level 17 resembles the interior of an enormous cargo carrier spanning hundreds of thousands of square meters. The ship is actively sailing through aquatic levels.",
    ["Boarding the ship from aquatic levels like Level 7."], ["Entering a door labelled 'Supply Room' transitions to Level 20."],
    [
        {t: "Imprint Entities", d: "Ghostly figures mimic your past movements.", l: "Do not panic; they are harmless echoes. Walk through them."},
        {t: "Cargo Hold Navigation", d: "Containers are filled with random items.", l: "Loot military supplies, but watch for crushing hazards."},
        {t: "Exterior Winds", d: "Going outside sucks you into the void.", l: "Never attempt to open external bulkhead doors."},
        {t: "Ship Movement", d: "The carrier physically sails.", l: "Secure loose items when the ship hits turbulence."},
        {t: "Flooded Lower Decks", d: "The bilges are filled with water.", l: "Avoid the bottom floors; thalassophobic entities lurk there."},
        {t: "Supply Room Exit", d: "Leads to Level 20.", l: "Search the mid-decks for doors marked 'Supply Room'."},
        {t: "Piping Hazards", d: "Pipes burst with pressurized water.", l: "Walk in the center of the blue-floored corridors."},
        {t: "Wire Electrocution", d: "Exposed wires hang from ceilings.", l: "Wear rubber-soled boots and duck under sparks."},
        {t: "Drone Destruction", d: "Flying drones outside destroys them.", l: "Keep all surveillance equipment indoors."},
        {t: "The Voyage Theory", d: "The ship traverses the Backrooms.", l: "Look out portholes to map other aquatic levels safely."}
    ],
    [
        {name: "Rubber-soled Boots", icon: "ph-boot"}, {name: "Crowbar (For cargo)", icon: "ph-wrench"},
        {name: "Waterproof Flashlight", icon: "ph-flashlight"}, {name: "Life Jacket", icon: "ph-lifebuoy"},
        {name: "Military Rations (Scavenged)", icon: "ph-hamburger"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Insulated Gloves", icon: "ph-hand"}, {name: "Rope", icon: "ph-link"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Notepad (For mapping)", icon: "ph-pencil"}
    ],
    [
        {date: "APR 12, 2020", t: "First Boarding", d: "Wanderers in Level 7 discover the massive ship."},
        {date: "AUG 05, 2021", t: "Cargo Hold Looted", d: "Massive caches of military supplies are found."},
        {date: "JAN 19, 2022", t: "Drone Loss", d: "External mapping attempts fail as drones are sucked into the void."},
        {date: "OCT 30, 2023", t: "Imprints Categorized", d: "The ghostly mimics are officially deemed harmless anomalies."},
        {date: "CURRENT YEAR", t: "Transit Vessel", d: "Used by brave wanderers to safely cross aquatic levels."}
    ],
    { "Spatial & Dimensional": { "Coordinate Drift": "20m/hr (Moving)" }, "Atmospheric Diagnostics": { "Relative Humidity": "90%" } },
    [{ name: "Cargo Hold", color: "#eab308", icon: "📦" }]
);

// --- LEVEL 20 ---
insertLevel(20, "Level 20", "The Warehouse", "#a3e635", "lime", ["Class 1", "Safe", "Abundant Resources"],
    "Level 20 is a modern, well-ventilated depot stretching endlessly. It is filled with boxes, forklifts, and machinery, acting as the distribution unit for the Backrooms.",
    ["Entering a 'Supply Room' door in Level 17.", "Noclipping in Area 2 of Level 20.1."], ["Finding an off-white door leads to Level 21.", "Doors labeled 'Exit' lead to Level 9 or 22."],
    [
        {t: "Crate Scavenging", d: "Boxes contain tools and food.", l: "Use crowbars to open wooden crates for Almond Water."},
        {t: "Crushing Hazards", d: "Crudely stacked shelves topple.", l: "Do not stand directly under leaning towers of boxes."},
        {t: "Forklift Utilization", d: "Vehicles are fully operational.", l: "Befriend 'The Forklifters' faction for rapid transit."},
        {t: "The Tetra Clan", d: "A 150-member guard faction.", l: "Trade resources with them for protection."},
        {t: "The Almond Twenty", d: "A hostile water-hoarding group.", l: "Avoid their territory; they do not welcome outsiders."},
        {t: "Weapon Procurement", d: "Machetes and knives spawn here.", l: "Stockpile melee weapons before exiting to dangerous levels."},
        {t: "Off-White Doors", d: "Leads to Level 21.", l: "Seek completely blank, off-white doors to progress."},
        {t: "Window Illusions", d: "Windows show parking lots.", l: "Do not attempt to break the glass; the outside is inaccessible."},
        {t: "Lighting Anomalies", d: "Lights change brightness arbitrarily.", l: "Keep a flashlight handy when the grid dims."},
        {t: "Art Deco Ruins", d: "1900s structures appear randomly.", l: "Use these stone ruins as stable landmarks for mapping."}
    ],
    [
        {name: "Crowbar", icon: "ph-wrench"}, {name: "Heavy Duty Backpack", icon: "ph-backpack"},
        {name: "Trade Goods", icon: "ph-coins"}, {name: "Machete (Scavenged)", icon: "ph-sword"},
        {name: "Hardhat", icon: "ph-helmet"}, {name: "Flashlight", icon: "ph-flashlight"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Mechanic Gloves", icon: "ph-hand"},
        {name: "Steel-toe Boots", icon: "ph-boot"}, {name: "First Aid Kit", icon: "ph-first-aid"}
    ],
    [
        {date: "1900s", t: "Historical Records", d: "Logs suggest the level existed in this modern state before warehouses were invented."},
        {date: "MAY 22, 2020", t: "The Tetra Clan", d: "A massive guard faction is established to protect scavengers."},
        {date: "SEP 14, 2021", t: "The Forklifters", d: "A group begins using the machinery for rapid level transit."},
        {date: "MAR 08, 2023", t: "Almond Twenty Conflict", d: "Resource hoarding leads to minor skirmishes."},
        {date: "CURRENT YEAR", t: "Distribution Hub", d: "Theorized to be the central storage unit for the entire Backrooms."}
    ],
    { "Material & Biological": { "Nutrient Availability": "High" }, "Survival & Infrastructure": { "Resource Respawn Algorithm": "Active" } },
    [{ name: "Tetra Clan Base", color: "#22c55e", icon: "🛡" }]
);

// --- LEVEL 21 ---
insertLevel(21, "Level 21", "Numbered Doors", "#cbd5e1", "slate", ["Class 1", "Safe", "Labyrinthine"],
    "Level 21 is an expansive labyrinth of hallways with equally-spaced metal doors on each side. The architecture is orderly, featuring modern carpeting and fluorescent lights.",
    ["Opening an off-white door in Level 20."], ["Opening specific numbered doors leads to various random levels."],
    [
        {t: "Door Roulette", d: "Doors lead to random environments.", l: "Never open a door unless you are fully prepared for combat."},
        {t: "Linear Navigation", d: "The halls are orderly but endless.", l: "Use the chair rails to trace your path physically."},
        {t: "Supply Rooms", d: "Some doors hide stockpiles.", l: "Listen closely to doors; silence usually means supplies."},
        {t: "Window Voids", d: "Windows show stars or white light.", l: "Do not attempt to shatter them; they are impenetrable."},
        {t: "Fire Systems", d: "Sprinklers and alarms are active.", l: "Do not start fires; the sprinkler water is anomalous."},
        {t: "Temperature Stability", d: "Vents keep it at 18°C.", l: "Use the level to rest and regulate body temperature."},
        {t: "Dead Ends", d: "Corridors suddenly terminate.", l: "Turn back immediately; dead ends often shift behind you."},
        {t: "Entity Absence", d: "No native entities exist.", l: "Sleep freely in the hallways without fear."},
        {t: "Nostalgic Architecture", d: "Halls mimic schools or hotels.", l: "Do not let the familiarity lower your guard."},
        {t: "The Lobby Room", d: "A specific hub room exists.", l: "Seek areas with windows to find the main lobby."}
    ],
    [
        {name: "Chalk (For marking doors)", icon: "ph-pencil"}, {name: "Notepad & Pen", icon: "ph-book-open"},
        {name: "Sleeping Bag", icon: "ph-sleeping-bag"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "Compass (Fails often)", icon: "ph-compass"},
        {name: "Combat Knife", icon: "ph-knife"}, {name: "Rations", icon: "ph-hamburger"},
        {name: "Stethoscope (To listen to doors)", icon: "ph-stethoscope"}, {name: "First Aid Kit", icon: "ph-first-aid"}
    ],
    [
        {date: "JUL 19, 2020", t: "First Entry", d: "Wanderers from Level 20 discover the endless doors."},
        {date: "NOV 02, 2021", t: "Door Mapping Failure", d: "Attempts to map where doors lead fail; destinations are randomized."},
        {date: "APR 14, 2022", t: "The Lobby Discovered", d: "A central room with void windows is found."},
        {date: "SEP 28, 2023", t: "Fire System Test", d: "A fire triggers sprinklers, flooding a sector with anomalous fluid."},
        {date: "CURRENT YEAR", t: "Transit Maze", d: "Used as a gamble to reach deeper levels quickly."}
    ],
    { "Spatial & Dimensional": { "Non-linear Corridors": "100%" }, "Survival & Infrastructure": { "Navigation Difficulty": "Extreme" } },
    [{ name: "The Lobby Room", color: "#3b82f6", icon: "🏛" }]
);

// --- LEVEL 23 ---
insertLevel(23, "Level 23", "Viennese Sunday", "#d97706", "amber", ["Class 4", "Hazardous", "Starvation Risk"],
    "Level 23 is a quasi-replica of historical Vienna, fixed perpetually in daytime. Despite abundant cafes, there is no food or water, and leftovers spoil instantly.",
    ["Entering an ornate door in Level 22."], ["Finding a specific anomalous newspaper kiosk leads to Level 24."],
    [
        {t: "Starvation Threat", d: "All food spoils instantly.", l: "Bring massive amounts of personal rations; do not eat cafe food."},
        {t: "Dehydration", d: "Drinking fountains are absent.", l: "Carry minimum 5L of Almond Water."},
        {t: "Hostile Entities", d: "Fast entities pursue wanderers.", l: "Sprint through the cobbled streets; do not linger in plazas."},
        {t: "Isolation Anomaly", d: "Entrants are segregated instantly.", l: "Do not attempt group travel; you will be separated."},
        {t: "Newspaper Predictions", d: "Kiosks predict Frontrooms events.", l: "Read them for intel, but do not obsess over them."},
        {t: "Homogenous Layout", d: "Streets repeat flawlessly.", l: "Mapping is impossible; rely on intuition."},
        {t: "Building Exteriors", d: "Entering buildings traps you.", l: "Stay on the streets; building interiors are featureless voids."},
        {t: "Daylight Illusion", d: "The sun never sets.", l: "Manage your own sleep cycle carefully."},
        {t: "Cobblestone Hazards", d: "Uneven streets cause injuries.", l: "Wear thick-soled, ankle-supporting boots."},
        {t: "The Kiosk Exit", d: "The only way out.", l: "Seek a newspaper stand displaying anachronistic dates."}
    ],
    [
        {name: "10L Almond Water", icon: "ph-drop"}, {name: "14 Days Iron Rations", icon: "ph-hamburger"},
        {name: "Ankle-support Boots", icon: "ph-boot"}, {name: "Mechanical Watch", icon: "ph-watch"},
        {name: "Running Gear", icon: "ph-sneaker"}, {name: "Adrenaline", icon: "ph-syringe"},
        {name: "Melee Weapon", icon: "ph-sword"}, {name: "First Aid Kit", icon: "ph-first-aid"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "Backpack", icon: "ph-backpack"}
    ],
    [
        {date: "1938", t: "Level Discovered", d: "First recorded entry by a wanderer fleeing the Frontrooms."},
        {date: "OCT 12, 2020", t: "Starvation Epidemic", d: "Confirmed that no corpses remain, but starvation is the #1 killer."},
        {date: "MAR 05, 2021", t: "Isolation Confirmed", d: "M.E.G. teams realize group travel is impossible here."},
        {date: "DEC 20, 2022", t: "Prophetic Newspapers", d: "A wanderer finds a paper predicting a global Frontrooms event."},
        {date: "CURRENT YEAR", t: "Lethal Transit", d: "Only entered by those desperate for prophetic knowledge."}
    ],
    { "Material & Biological": { "Nutrient Availability": "0%", "Organic Decay Rate": "Extreme" }, "Survival & Infrastructure": { "Isolation Factor": "100%" } },
    [{ name: "Prophetic Kiosk", color: "#ef4444", icon: "📰" }]
);

// --- LEVEL 25 ---
insertLevel(25, "Level 25", "Out of Order", "#ec4899", "fuchsia", ["Class 1", "Safe", "Arcade"],
    "Level 25 is an abandoned, dusty video game arcade filled with functioning machines. Every arcade game requires a quarter to operate and serves as a portal to other levels.",
    ["Playing an arcade machine in Level 27.", "Wormholes in Level 24."], ["Operating specific arcade cabinets transports the user to Levels 0-90."],
    [
        {t: "Quarter Dependency", d: "Machines require quarters.", l: "Bring bags of 25-cent coins to utilize the level's exits."},
        {t: "Arcade Roulette", d: "Games lead to random levels.", l: "Record which game leads where before inserting coins."},
        {t: "Pizza Places", d: "Facelings run food stalls.", l: "The pizza is safe to eat; trade with the Facelings."},
        {t: "Beverage Hazards", d: "Drinks taste weird and may be expired.", l: "Stick to your own Almond Water."},
        {t: "Vending Machines", d: "Marked 'Out of Order'.", l: "Smash them open to scavenge high-value supplies."},
        {t: "Bowling Alleys", d: "Neon lanes exist.", l: "Avoid the dark areas behind the pinsetters."},
        {t: "Carpet Anomalies", d: "Carpet shows planets and stars.", l: "If the carpet turns pitch black, entities are near."},
        {t: "M.E.G. Outpost", d: "A 20-person trade hub.", l: "Trade scavenged quarters for weapons and maps."},
        {t: "Cabinet Plundering", d: "Broken cabinets have wires.", l: "Scavenge electronics for trade in Level 11."},
        {t: "Lighting Safety", d: "Neon lights keep entities away.", l: "Stay in highly saturated, brightly lit zones."}
    ],
    [
        {name: "Sack of Quarters", icon: "ph-coins"}, {name: "Crowbar (For vending machines)", icon: "ph-wrench"},
        {name: "Wire Cutters", icon: "ph-scissors"}, {name: "Duffel Bag", icon: "ph-bag"},
        {name: "Trade Goods", icon: "ph-hand-coins"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "Notebook (To map games)", icon: "ph-book-open"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Melee Weapon", icon: "ph-sword"}
    ],
    [
        {date: "AUG 14, 2019", t: "First Token Inserted", d: "A wanderer from Level 27 discovers the arcade."},
        {date: "MAY 02, 2020", t: "Portal Discovery", d: "Playing a game teleports a wanderer to Level 5."},
        {date: "SEP 19, 2021", t: "M.E.G. Arcade Outpost", d: "A permanent base is established to map the game portals."},
        {date: "JAN 11, 2023", t: "Vending Scavenge", d: "Wanderers learn to crack the 'Out of Order' machines for loot."},
        {date: "CURRENT YEAR", t: "Transit Hub", d: "Used by elite explorers as a rapid transit system across Cluster I."}
    ],
    { "Survival & Infrastructure": { "Electrical Availability": "High" }, "Acoustic & Luminescent": { "Color Temperature": "Neon / Saturated" } },
    [{ name: "M.E.G. Arcade Outpost", color: "#3b82f6", icon: "🕹" }]
);

// --- LEVEL 27 ---
insertLevel(27, "Level 27", "The Woodrooms", "#8b5cf6", "purple", ["Class 2", "Unsafe", "Labyrinthine"],
    "Level 27 is an endless, labyrinthine complex of wooden rooms and hallways. The architecture is a strange amalgam of natural and manmade techniques, heavily decayed.",
    ["Breaking through the floorboards in Level 0.", "Basements in Level 39."], ["Playing an arcade machine leads to Level 25.", "Wooden doors lead to Level 31."],
    [
        {t: "Disorientation", d: "The wooden maze is perfectly uniform.", l: "Carve arrows into the walls with a knife to track your path."},
        {t: "Dust Inhalation", d: "The air is stale and filled with dust.", l: "Wear an N95 respirator to prevent extreme coughing."},
        {t: "Auditory Paranoia", d: "Knocking sounds echo from inside the walls.", l: "Ignore them; they are a natural anomaly, not entities."},
        {t: "Lighting Scarcity", d: "Artificial lights are extremely dim.", l: "Rely heavily on your own high-lumen flashlights."},
        {t: "Wood Rot", d: "Floors frequently give way.", l: "Test floorboards before applying full body weight."},
        {t: "Entity Absence", d: "The level is completely devoid of life.", l: "Use the isolation to rest safely, but monitor your sanity."},
        {t: "The Fragmentation Link", d: "Identical layout to Level 0.", l: "Use Level 0 navigation tactics (Right-Hand Rule)."},
        {t: "Resource Void", d: "No supplies exist here.", l: "Bring all necessary water and food; do not linger."},
        {t: "Arcade Cabinets", d: "Rare machines sit in corners.", l: "Play them to escape to Level 25."},
        {t: "Pop Music Cue", d: "Muffled music indicates an exit.", l: "Follow 2000s bubblegum pop sounds to find a door to Level 31."}
    ],
    [
        {name: "N95 Respirator", icon: "ph-mask-water"}, {name: "Carving Knife", icon: "ph-knife"},
        {name: "High-Lumen Flashlight", icon: "ph-flashlight"}, {name: "Extra Batteries", icon: "ph-battery-charging"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Quarters (For arcade exits)", icon: "ph-coins"},
        {name: "Rations", icon: "ph-hamburger"}, {name: "Thick Boots", icon: "ph-boot"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Analog Compass", icon: "ph-compass"}
    ],
    [
        {date: "OCT 05, 2019", t: "Floor Breach", d: "A wanderer falls through Level 0 and discovers the wooden replica."},
        {date: "APR 22, 2020", t: "Fragmentation Theory", d: "Scientists posit Level 27 is an early structural clone of Level 0."},
        {date: "DEC 14, 2021", t: "Knocking Anomaly", d: "Microphones inside the walls capture empty, rhythmic knocking."},
        {date: "JUN 09, 2023", t: "Arcade Exit Found", d: "First successful transit to Level 25 documented."},
        {date: "CURRENT YEAR", t: "Transit Maze", d: "Not viable for outposts due to absolute lack of resources."}
    ],
    { "Atmospheric Diagnostics": { "Particulate Matter": "High (Dust/Rot)" }, "Spatial & Dimensional": { "Euclidean Consistency": "14.2%" } },
    [{ name: "Arcade Cabinet", color: "#ec4899", icon: "🕹" }]
);

// --- LEVEL 34 ---
insertLevel(34, "Level 34", "The Sewers", "#166534", "green", ["Class 2e", "Biohazard", "Lethal Pathogens"],
    "Level 34 is an expansive sewer complex filled with lukewarm, toxic water. It is a breeding ground for the lethal Hydrolitis Plague and carcinogenic radon gas.",
    ["Descending sewer grates in Level 11 or 84."], ["Fluctuating doors lead to Level 33 or 35."],
    [
        {t: "Biohazard Gear", d: "The water is highly infectious.", l: "Wear full Hazmat suits; never expose skin to the air or water."},
        {t: "Hydrolitis Plague", d: "Bacteria causes fatal internal bleeding.", l: "If infected, seek M.E.G. medical outposts immediately."},
        {t: "Radon Gas", d: "Colorless gas causes rapid cancer.", l: "Carry a Geiger/Radon counter and avoid maintenance tunnels."},
        {t: "Walkway Collapses", d: "Rickety metal rusts instantly.", l: "Test weight on grates before walking."},
        {t: "Temperature Fluctuations", d: "Shifts from 40 to 60 Fahrenheit.", l: "Wear thermal layers under hazmat suits."},
        {t: "Almond Water Foraging", d: "Clean water hides in vents.", l: "Sterilize all bottles found here before consuming."},
        {t: "Tunnel Slippage", d: "Bricks are smooth from acid.", l: "Wear spiked boots for traction."},
        {t: "Drainpipe Navigation", d: "Pipes lead to massive cesspools.", l: "Always travel against the water current."},
        {t: "M.E.G. Outposts", d: "Research bases exist inside.", l: "Follow neon biohazard tags to safety."},
        {t: "Exit Shifting", d: "Exits vanish in mere hours.", l: "Move quickly when a wooden door is spotted."}
    ],
    [
        {name: "Hazmat Suit", icon: "ph-shield-plus"}, {name: "Gas Mask w/ Filters", icon: "ph-mask-water"},
        {name: "Radon Detector", icon: "ph-activity"}, {name: "Spiked Boots", icon: "ph-boot"},
        {name: "Water Sterilization Kit", icon: "ph-flask"}, {name: "Almond Water", icon: "ph-drop"},
        {name: "Heavy Flashlight", icon: "ph-flashlight"}, {name: "First Aid Kit", icon: "ph-first-aid"},
        {name: "Antibiotics", icon: "ph-pill"}, {name: "Glowsticks", icon: "ph-lightbulb"}
    ],
    [
        {date: "MAR 10, 2020", t: "Sewer Breach", d: "Wanderers fall from Level 11 grates into the toxic water."},
        {date: "AUG 22, 2021", t: "Hydrolitis Discovered", d: "First mass casualty due to the airborne bacteria."},
        {date: "FEB 14, 2022", t: "Hazmat Protocols", d: "Strict entry requirements established by M.E.G."},
        {date: "SEP 05, 2023", t: "Radon Mapping", d: "L-Corp maps safe ventilation routes through the gas pockets."},
        {date: "CURRENT YEAR", t: "Quarantine Zone", d: "Actively avoided by unequipped travelers; extreme biohazard."}
    ],
    { "Material & Biological": { "Toxicity Levels": "Extreme", "Pathogen Level": "Hydrolitis Plague" }, "Atmospheric Diagnostics": { "Trace Anomalous Gases": "High (Radon)" } },
    [{ name: "M.E.G. Bio-Lab", color: "#22c55e", icon: "🔬" }]
);

// --- LEVEL 38 ---
insertLevel(38, "Level 38", "Air Pollution", "#ea580c", "orange", ["Class 2e", "Environmental", "Toxic Atmosphere"],
    "Level 38 is a waterlocked town defined by a pungent, overpowering orange hue. The primary threat is the catastrophic air quality, filled with sulfur dioxide and ozone.",
    ["Entering an area with polluted air in Level 370."], ["Random noclipping may lead to Level 39."],
    [
        {t: "Air Quality", d: "The atmosphere causes stroke and cardiac arrest.", l: "N95 or KN95 masks are absolutely mandatory for survival."},
        {t: "Electrocution", d: "Lightbulbs are highly volatile.", l: "Never touch exposed bulbs, even if they appear off."},
        {t: "Appliance Hazards", d: "Fans and radios act anomalously.", l: "Do not interact with household electronics."},
        {t: "Ocean Depth", d: "The seabed drops suddenly.", l: "Never wade into the water; you will drown when the floor vanishes."},
        {t: "Sandstorms", d: "Intense winds blind wanderers.", l: "Wear airtight goggles to protect your eyes."},
        {t: "Flying Debris", d: "Winds throw objects at lethal speeds.", l: "Take shelter indoors immediately when the wind howls."},
        {t: "The Rotten Smell", d: "Maroon substance causes the stench.", l: "Do not touch the maroon plaster in kitchens."},
        {t: "Medical Symptoms", d: "Coughing and chest pain are immediate.", l: "Evacuate the level the moment dizziness begins."},
        {t: "Navigation", d: "Thick orange haze obscures vision.", l: "Follow the brick walkways strictly."},
        {t: "Shelter Protocol", d: "Buildings provide slight air filtering.", l: "Rest only inside enclosed residential structures."}
    ],
    [
        {name: "N95 / KN95 Mask", icon: "ph-mask-water"}, {name: "Airtight Goggles", icon: "ph-eyeglasses"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Oxygen Canister", icon: "ph-wind"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "Heavy Coat (For debris)", icon: "ph-coat"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Asthma Inhaler", icon: "ph-lungs"},
        {name: "Sturdy Boots", icon: "ph-boot"}, {name: "Compass", icon: "ph-compass"}
    ],
    [
        {date: "JUL 04, 2020", t: "First Cough", d: "Wanderers emerge from Level 370 suffering severe respiratory failure."},
        {date: "NOV 18, 2021", t: "Atmosphere Analyzed", d: "M.E.G. identifies lethal levels of sulfur dioxide and ozone."},
        {date: "MAY 29, 2022", t: "Sandstorm Casualties", d: "A team is wiped out by flying debris during a sudden storm."},
        {date: "FEB 10, 2023", t: "Ocean Anomaly", d: "Explorers drown when the seabed drops infinitely beneath them."},
        {date: "CURRENT YEAR", t: "Mask Mandate", d: "Level is impassable without industrial-grade respiratory protection."}
    ],
    { "Atmospheric Diagnostics": { "Particulate Matter": "Lethal", "Ozone Level": "Extreme" }, "Material & Biological": { "Toxicity Levels": "High" } },
    [{ name: "Safe Shelter", color: "#facc15", icon: "🏠" }]
);

// --- LEVEL 41 ---
insertLevel(41, "Level 41", "Greed of Man", "#84cc16", "lime", ["Class Mu", "Irradiated", "Lethal"],
    "Level 41 is an irradiated, dystopian array of abandoned brutalist cities. The surface suffers from 5,000 mSv of radiation, capable of killing humans within a month.",
    ["Unknown; access is highly restricted."], ["Unknown; exit requires extreme luck before radiation poisoning sets in."],
    [
        {t: "Lethal Radiation", d: "5,000 mSv ambient dose.", l: "Hazmat suits lined with lead are the only way to survive."},
        {t: "Acid Rain", d: "Weather melts flesh.", l: "Hide in basements the moment clouds darken."},
        {t: "Tornadoes", d: "Violent winds destroy structures.", l: "Stay underground during all meteorological events."},
        {t: "Rooftop Travel", d: "Streets are cluttered with debris.", l: "Navigate the cities via building rooftops."},
        {t: "Starvation", d: "No edible plants or food exist.", l: "Bring massive stockpiles of rations."},
        {t: "Absolute Silence", d: "No entities exist here.", l: "Do not let the silence induce auditory paranoia."},
        {t: "Highway Loops", d: "Roads loop infinitely.", l: "Do not follow the highways; rely on building landmarks."},
        {t: "Bridge Collapses", d: "Scaffolding is unstable.", l: "Never cross a bridge under construction."},
        {t: "Propaganda Hazards", d: "Posters display unknown languages.", l: "Do not attempt to read them; cognitohazard risk."},
        {t: "Rapid Evacuation", d: "Time is ticking.", l: "Your sole objective is to find an exit before your cells degrade."}
    ],
    [
        {name: "Lead-lined Hazmat Suit", icon: "ph-shield-plus"}, {name: "Geiger Counter", icon: "ph-activity"},
        {name: "Potassium Iodide Pills", icon: "ph-pill"}, {name: "Massive Rations", icon: "ph-hamburger"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Grappling Hook (For roofs)", icon: "ph-anchor"},
        {name: "Flashlight", icon: "ph-flashlight"}, {name: "First Aid Kit", icon: "ph-first-aid"},
        {name: "Radio", icon: "ph-radio"}, {name: "Thick Boots", icon: "ph-boot"}
    ],
    [
        {date: "1974", t: "Initial Discovery", d: "An unknown group of wanderers stumbles into the irradiated wasteland."},
        {date: "OCT 19, 2020", t: "Radiation Logged", d: "M.E.G. probes confirm the lethal 5,000 mSv ambient dose."},
        {date: "MAR 22, 2021", t: "Acid Rain Incident", d: "An expedition team is melted alive by sudden precipitation."},
        {date: "DEC 05, 2022", t: "Class Mu Designation", d: "Level is officially flagged as a nuclear/irradiated hazard."},
        {date: "CURRENT YEAR", t: "Dead Zone", d: "Exploration is strictly forbidden by all major Backrooms factions."}
    ],
    { "Atmospheric Diagnostics": { "Background Rad-Count": "5000.0 mSv" }, "Material & Biological": { "Toxicity Levels": "Lethal" } },
    [{ name: "Underground Bunker", color: "#22c55e", icon: "🛡" }]
);

// --- LEVEL 48 ---
insertLevel(48, "Level 48", "Inconvenience Store", "#b91c1c", "red", ["Class 4", "Biohazard", "Annexed"],
    "Level 48 is a boundless supermarket labyrinth completely bereft of edible food. It is plagued by radioactive contaminants and the 100% fatal Giznya Virus.",
    ["All known entrances have been annexed and prohibited by M.E.G."], ["No known exits. It is a death trap."],
    [
        {t: "Giznya Virus", d: "Fast-acting hemorrhagic fever.", l: "Absolute quarantine. Do not enter this level."},
        {t: "Radon Gas", d: "Colorless, carcinogenic gas.", l: "Industrial respirators are mandatory if accidentally trapped."},
        {t: "Food Spoilage", d: "All items on shelves are putrid.", l: "Never consume anything found in the store."},
        {t: "Hallucinations", d: "Toxins induce severe visual warping.", l: "Use digital cameras to verify reality; do not trust your eyes."},
        {t: "Blackouts", d: "Power fails for days at a time.", l: "Carry mechanical, crank-powered flashlights."},
        {t: "Signal Jamming", d: "Radio waves are dead.", l: "Use hardlined communications if laying cable."},
        {t: "Floor Fluid", d: "Unknown slurry seeps from tiles.", l: "Avoid stepping in dark puddles; they contain the virus."},
        {t: "Waste Disposal Link", d: "Connected to toxic dumps.", l: "Do not follow waste pipes."},
        {t: "M.E.G. Barricades", d: "Entrances are sealed.", l: "Do not break quarantine lines."},
        {t: "Respiratory Failure", d: "Air quality destroys lungs.", l: "Carry supplemental oxygen tanks."}
    ],
    [
        {name: "Hazmat Suit", icon: "ph-shield-plus"}, {name: "Oxygen Tanks", icon: "ph-wind"},
        {name: "Respirator", icon: "ph-mask-water"}, {name: "Crank Flashlight", icon: "ph-flashlight"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Digital Camera", icon: "ph-camera"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Antiviral Meds", icon: "ph-pill"},
        {name: "Thick Boots", icon: "ph-boot"}, {name: "Rations", icon: "ph-hamburger"}
    ],
    [
        {date: "APR 11, 2019", t: "Initial Exploration", d: "Assumed safe due to its supermarket layout."},
        {date: "AUG 30, 2020", t: "The Great Sickness", d: "Settlers die in the hundreds from bleeding out."},
        {date: "JAN 15, 2021", t: "Giznya Isolation", d: "The virus is identified by Base Alpha scientists."},
        {date: "OCT 02, 2022", t: "Total Annexation", d: "M.E.G. seals all known entrances to protect the population."},
        {date: "CURRENT YEAR", t: "Dead Zone", d: "Unfit for all carbon-based life."}
    ],
    { "Material & Biological": { "Pathogen Level": "Extreme (Giznya)", "Toxicity Levels": "Lethal" }, "Atmospheric Diagnostics": { "Trace Anomalous Gases": "Radon" } },
    [{ name: "Quarantine Seal", color: "#ef4444", icon: "🛑" }]
);

// --- LEVEL 49 ---
insertLevel(49, "Level 49", "Spreading Darkness", "#0f172a", "slate", ["Class 0", "Unsecure", "Devoid of Entities"],
    "Level 49 is composed of countless infinitely extending roads and scattered architectural clusters, bordered by endless darkness theorized to be The Void.",
    ["Unknown noclipping mechanics."], ["No verifiable exits exist."],
    [
        {t: "The Void Guardrails", d: "The darkness beyond the road is lethal.", l: "Never cross the guardrails under any circumstances."},
        {t: "Architectural Clusters", d: "Buildings are hollow and decayed.", l: "Do not stay inside; they induce severe dizziness."},
        {t: "Road Signs", d: "No-entry signs appear randomly.", l: "Follow them; defying logic actually leads to the clusters."},
        {t: "Temporal Echoes", d: "Voices from your past whisper.", l: "Ignore them; they are auditory phantoms generated by the void."},
        {t: "Entropy Acceleration", d: "Items degrade faster here.", l: "Do not trust found medicine or food; they are expired."},
        {t: "Isolation", d: "Intersection with others is near zero.", l: "Prepare for absolute solitude."},
        {t: "Signal Failure", d: "Comms redirect to Level 0.", l: "Do not rely on GPS or radios."},
        {t: "Tire Tracks", d: "Vehicles once existed here.", l: "Follow the tracks to maintain center-road alignment."},
        {t: "Entity Absence", d: "No creatures live here.", l: "You are the only threat to yourself."},
        {t: "Road Closures", d: "Paths suddenly bar your way.", l: "Seek the single unmarked extension to continue."}
    ],
    [
        {name: "High-Lumen Flashlight", icon: "ph-flashlight"}, {name: "Mechanical Watch", icon: "ph-watch"},
        {name: "Almond Water", icon: "ph-drop"}, {name: "Massive Rations", icon: "ph-hamburger"},
        {name: "Sleeping Bag", icon: "ph-sleeping-bag"}, {name: "Walking Stick", icon: "ph-stick"},
        {name: "First Aid Kit", icon: "ph-first-aid"}, {name: "Earplugs", icon: "ph-ear"},
        {name: "Sturdy Boots", icon: "ph-boot"}, {name: "Compass (Fails)", icon: "ph-compass"}
    ],
    [
        {date: "2020", t: "First Chinese Document", d: "Level 49 becomes the first level originally documented in Chinese."},
        {date: "2021", t: "Void Theory", d: "Scientists propose the darkness beyond the guardrails is the raw Void."},
        {date: "2022", t: "Signal Anomaly", d: "All IP addresses pinged here resolve to Level 0."},
        {date: "2023", t: "Entropy Acceleration", d: "Found supplies are confirmed to age at 100x speed."},
        {date: "CURRENT YEAR", t: "Isolation Zone", d: "Colonies remain unverified due to the sheer infinite scale of the roads."}
    ],
    { "Spatial & Dimensional": { "Absolute Void Proximity": "0.0m (Beyond Guardrail)" }, "Survival & Infrastructure": { "Isolation Factor": "Absolute" } },
    [{ name: "Void Edge", color: "#000", icon: "🌌" }]
);

// PROGRAMMATIC GENERATION FOR REMAINDER OF LEVELS 0-49
// Ensures the LiminOS database array contains exactly 50 instantiated topological nodes.
const specificTitles = {
    1: "Habitable Zone", 2: "Pipe Dreams", 3: "Electrical Station", 4: "Abandoned Office", 5: "Terror Hotel",
    7: "Thalassophobia", 12: "Aedificium", 13: "Vitrum Madness", 15: "Futuristic Halls", 18: "Nostalgic Memories",
    19: "Abyss Inn", 22: "Polluted Ruins", 24: "Extraterrestre", 26: "Otherworldly", 28: "The Attic",
    29: "Artistic View", 30: "Aquatic Cycles", 31: "Roller Rink", 32: "The Future", 33: "Dead Mall",
    35: "Day Zero", 36: "Desolate Terminal", 37: "Sublimity", 39: "Megalophobia", 40: "Video Rental Store",
    42: "Surreal Continuum", 43: "Water World", 44: "Under the Ice", 45: "Otherworldly Timberland",
    46: "Arabian Desert", 47: "Interrogative Infohazard?"
};

for (let i = 0; i <= 49; i++) {
    if (LiminOSDatabase[`level${i}`]) continue; // Skip manually detailed levels
    
    let title = specificTitles[i] || `Level ${i} Anomaly`;
    let colorHex = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    
    let genTricks = Array.from({length: 10}, (_, idx) => ({
        t: `Survival Protocol ${idx+1}`, d: `Standard automated hazard warning for ${title}.`, l: `Maintain baseline geometric awareness.`
    }));
    
    let genLoadout = Array.from({length: 10}, () => ({ name: "Standard M.E.G. Ration", icon: "ph-briefcase" }));
    
    let genHist = Array.from({length: 5}, (_, idx) => ({
        date: `202${idx}`, t: `Automated Ping ${idx+1}`, d: `Spatial integrity algorithm verified by LiminOS.`
    }));

    insertLevel(i, `Level ${i}`, title, colorHex, "gray", ["Class Variable", "Unstable"], 
        `LiminOS Automated Entry: ${title} is currently undergoing spatial restructuring. Proceed with standard Backrooms protocols.`,
        ["Various anomalous noclipping events."], ["Randomized geometric shifts."],
        genTricks, genLoadout, genHist, { "Spatial & Dimensional": { "Hume Level": "Variable" } }, []
    );
}

// ---------------------------------------------------------