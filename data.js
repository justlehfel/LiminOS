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
            type: "level",
            id: "level0",
            title: "Level 0",
            name: "The Lobby",
            tags: [
                { label: "CLASS 1", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "SAFE", class: "bg-green-500/10 text-green-400 border-green-500/30" },
                { label: "UNSTABLE", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
                { label: "DEVOID OF ENTITIES", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" }
            ],
            heroImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
            
            mapConfig: {
                seed: 7492110, wallDensity: 0.65, gridSize: 5, poiChance: 0.015,
                pois: [
                    { name: "Gateway to Level 1 (Garages)", color: "#9ca3af", icon: "⬇" },
                    { name: "Fragile Wall (To Level 483)", color: "#ef4444", icon: "🔨" },
                    { name: "Rotten Floorboard (To Level 27)", color: "#8b5cf6", icon: "🕳" },
                    { name: "Glass Sliding Doors (To Level 13)", color: "#3b82f6", icon: "🪟" },
                    { name: "Emergency Exit (To Level 14)", color: "#dc2626", icon: "🏃" },
                    { name: "Almond Water Puddle", color: "#60a5fa", icon: "💧" },
                    { name: "Flickering T8 Fluorescent Cluster", color: "#fef08a", icon: "💡" },
                    { name: "Dead End (Topological Loop)", color: "#a8a29e", icon: "♾" },
                    { name: "Auditory Hallucination Epicenter", color: "#f97316", icon: "🔊" },
                    { name: "Black Mold Concentration", color: "#166534", icon: "🦠" },
                    { name: "Wanderer's Abandoned Backpack", color: "#d6d3d1", icon: "🎒" },
                    { name: "Densely Stained Carpet Sector", color: "#451a03", icon: "👣" },
                    { name: "Abnormally High Ceiling (+1.2m)", color: "#d4d4d4", icon: "⬆" },
                    { name: "Cramped Crawlspace (Unnavigable)", color: "#525252", icon: "🕸" },
                    { name: "Hum-Buzz Resonance Node", color: "#fbbf24", icon: "〰" },
                    { name: "Dislodged Ceiling Tile", color: "#737373", icon: "⬛" },
                    { name: "Shattered Outlet Mount", color: "#991b1b", icon: "🔌" },
                    { name: "Blood Splatter (Dried)", color: "#7f1d1d", icon: "🩸" },
                    { name: "Smell of Damp Rot (Intense)", color: "#84cc16", icon: "👃" },
                    { name: "Liminality Corp Sensor Probe", color: "#22c55e", icon: "📡" },
                    { name: "Graffiti: 'DON'T MOVE'", color: "#000000", icon: "🖋" },
                    { name: "Impossible Geometry Corner", color: "#d946ef", icon: "📐" },
                    { name: "Temperature Drop (-5°C)", color: "#bae6fd", icon: "❄" },
                    { name: "Overheating Ballast Warning", color: "#f87171", icon: "🔥" },
                    { name: "Isolated Office Chair", color: "#475569", icon: "🪑" },
                    { name: "Carpet Fluid Extraction Point", color: "#0284c7", icon: "🧪" },
                    { name: "Kant Counter Fluctuation Area", color: "#c084fc", icon: "📉" },
                    { name: "Echo Localization Failure Zone", color: "#f43f5e", icon: "🔇" },
                    { name: "Perfect Pitch Black Sector", color: "#0a0a0a", icon: "👁" },
                    { name: "Non-Euclidean Pillar", color: "#8b5cf6", icon: "🏛" },
                    { name: "Trace Noclip Signature", color: "#06b6d4", icon: "🌀" },
                    { name: "Wall Texture Glitch (Visual)", color: "#fcd34d", icon: "📺" }
                ]
            },

            specificMetrics: {
                "Level 0 Specific (Proprietary)": {
                    "Carpet Saturation Depth": "1.2cm (Avg)",
                    "Wall Permeability Factor": "0.0001% (Noclip Resist)",
                    "Fluorescent Flicker Sync": "Asynchronous (Patternless)",
                    "Spatial Redundancy Ratio": "89.4% Identical Layouts",
                    "Almond Water Trace Vol": "0.00001% per m²",
                    "Acoustic Damping (Walls)": "95% Absorption",
                    "Ambient Temperature Delta": "±0.2°C (Hyper-stable)",
                    "Psychological Pressure Index": "Class 4 (High)",
                    "Topological Shift Frequency": "Every 4.2 Hours (Est)",
                    "Sub-Floor Cavity Depth": "1.0m (Inaccessible)",
                    "Ambient Hum Frequency": "59.8 Hz - 60.2 Hz",
                    "Visual Hallucination Rate": "12% of agents/hr",
                    "Wallpaper Toxicity (Arsenic)": "0.04 mg/m²",
                    "Carpet Friction Coefficient": "0.85 (High Drag)",
                    "Carpet Fiber Synthetic Blend": "Unknown Polymer X",
                    "Wall Socket Voltage Check": "0.0V (Dead)",
                    "Drop-Ceiling Dust Composition": "70% Dead Skin / 30% Asbestos",
                    "Fluorescent Tube Lifespan": "Infinite (Anomalous)",
                    "Corner Shadows Depth": "Vanta-black index 9.8",
                    "Agent Resting Heart-rate Mod": "+25 BPM",
                    "Echo Propagation Distance": "Max 4 meters",
                    "Ambient Moisture Origin": "Extradimensional seepage",
                    "Structural Load Bearing Limit": "Indestructible",
                    "Architectural Plagiarism AI Score": "99.9% 1990s Office"
                },
                "Chrono-Temporal Dynamics": {
                    "Frontrooms Time Dilation": "1:1.15 (Slower)",
                    "Local Time Flow Rate": "Erratic / Psychological",
                    "Time Dilation Ratio (vs Frontrooms)": "1.150",
                    "Memory Degradation": "+12% Accelerated",
                    "Historical Sedimentation": "Zero"
                },
                "Spatial & Dimensional": {
                    "Hume Level (Reality)": "82.4 H (Low)",
                    "Euclidean Consistency": "14.2% (Severe Non-linear)",
                    "Euclidean Warp Factor": "8.4 (Severe)",
                    "Spatial Dilation Factor": "1:1.44",
                    "Non-linear Corridors": "86% of layout"
                },
                "Atmospheric Diagnostics": {
                    "Ambient Temp (Core)": "22.4 °C (Constant)",
                    "Relative Humidity": "88% (Damp)",
                    "Chemical Odor Profile": "Old Moist Carpet/Ozone",
                    "Static Charge Density": "Elevated (+12kV/m)"
                },
                "Acoustic & Luminescent": {
                    "Ambient Hum": "60 Hz (NTSC std) / 45dB",
                    "Architectural Resonance Freq": "59.94 Hz",
                    "Total Darkness Zones": "0.00% observed",
                    "Audio Hallucination Risk": "Very High"
                },
                "Material & Biological": {
                    "Structural Integrity": "Indestructible (Mostly)",
                    "Carpet/Floor Fluid Toxicity": "High (Bacterial)",
                    "Entity Density": "0.00 (Isolated)"
                },
                "Survival & Infrastructure": {
                    "Sanity Drain Rate": "-2% per Hour",
                    "Psychological Erosion Rate": "High",
                    "Rescue Probability": "0.000001%"
                }
            },
            
            lore: `
                <div class="mb-6 pb-4 border-b border-white/5">
                    <p class="text-xl text-white font-light">Level 0 is the first level of the Backrooms, and the first location that most entering from baseline reality will find themselves in.</p>
                </div>
                
                <div class="mb-8 overflow-hidden rounded-lg border border-liminal-border">
                    <img src="https://images.unsplash.com/photo-1572945281561-125dd78dce5b?auto=format&fit=crop&w=1000&q=80" class="w-full opacity-80 mix-blend-screen" alt="Level 0 Original">
                    <p class="text-[10px] font-mono text-liminal-muted p-2 bg-black/50 text-center">The first known image of Level 0, posted to 4chan in May of 2019.</p>
                </div>

                <h3>Description</h3>
                <p>Level 0 is an expansive non-Euclidean space resembling the back rooms of a dated retail outlet. The level is known most prominently for its disorienting layout and distinct yellowed wallpaper. All rooms in Level 0 share the same superficial features, with worn, moist carpeting, scattered electrical outlets, and inconsistently placed fluorescent lighting. Aside from these qualities, no two rooms in the level are the same, with each area differing significantly in shape and layout.</p>
                <p>The constant hum-buzz emitted by the ceiling lights permeates every area of Level 0, being notably louder and more obtrusive than ordinary fluorescent lighting. The buzz tends to induce throbbing migraines in most individuals, which persist for an extended period of time even after one has exited the level. As the level is devoid of hostile threats, the only danger that Level 0 poses is the evident lack of available resources, as many fall victim to dehydration, exhaustion, or starvation.</p>
                <p>Linear space and topology are significantly altered within Level 0, with it being possible to walk in a straight line, return to the starting point, and end up in a different set of rooms than one was in beforehand. Such properties cause the level to be extremely disorienting in layout, with research suggesting that the confusion may be the underlying cause of loss of mental stability among individuals. Due to the barren layout and confounding structure of Level 0, some individuals report experiencing intense visual and auditory hallucinations—with rare cases reporting wanderers descending into "utter lunacy" as a result of the level's properties.</p>
                <p>A small space, around one meter in height, lies above the drop ceiling of Level 0. Scattered around the cramped ceiling space are wires, electrical fixtures, and ventilation ducts, though these are generally unnavigable as the sheer amount of dust renders the air unbreathable.</p>

                <div class="grid grid-cols-2 gap-4 my-8">
                    <div class="border border-white/10 rounded-lg p-2 bg-black/40">
                        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80" class="w-full rounded opacity-70" alt="Tattered Photo">
                        <p class="text-[10px] font-mono text-liminal-muted mt-2 text-center">A tattered photograph of Level 0. An indecipherable signature was found scribbled on the back.</p>
                    </div>
                    <div class="border border-white/10 rounded-lg p-2 bg-black/40">
                        <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=400&q=80" class="w-full rounded opacity-70" alt="Unique Layout">
                        <p class="text-[10px] font-mono text-liminal-muted mt-2 text-center">Another image of Level 0 depicting a layout that is unique in appearance.</p>
                    </div>
                </div>

                <h3>The Limina Theory</h3>
                <p>The Limina Theory is the propagation that the Backrooms are a prison created by unnatural forces — as if it were an Abrahamic interpretation of hell or a purgatory of some sort. Despite this theory going generally unfollowed by most major groups, many wanderers believe it to be either partially or fully true, with it remaining the most prominent non-scientific theory within the Backrooms.</p>
                <p>Further information suggests that Level 0 may be a theoretical "dumping ground" of baseline reality, with certain individuals perceived to have gone missing eventually showing up within the Backrooms. Multiple well-known events within the Frontrooms, including the 1935 Yangtze floods, the disappearance of Amelia Earhart, and even those as far-fetched as the MV Joyita incident, have shown some correlation to the Backrooms, since sightings of victims from all three events have been reported at some point. Underlying evidence suggests that accidents regarding water in general are the most common way to enter the Backrooms, with even extensively dated cases such as the disappearances of the Santa Maria and Royal Merchant being among the fray of occurrences.</p>

                <h3>Entities</h3>
                <p>Level 0 is seemingly devoid of all life as a result of certain phenomena affecting the level. As it is thought to be impossible — or improbable — to find another wanderer, any and all reports detailing such a sighting are likely the result of visual and auditory hallucinations induced by prolonged isolation.</p>

                <h3>Entrances and Exits</h3>
                <div class="bg-[#050505] border border-liminal-border p-5 rounded-lg font-mono text-sm">
                    <h4 class="text-liminal-primary font-bold mb-2">ENTRANCES</h4>
                    <p class="text-liminal-text mb-4">The most commonplace entrance into Level 0 is via the Frontrooms, as this is the place where a majority of wanderers begin their journey. In addition, a wide variety of levels can lead one here.</p>
                    
                    <h4 class="text-liminal-safe font-bold mb-2">KNOWN EXITS</h4>
                    <p class="text-liminal-text mb-4 text-xs">As of the current date, Level 0 contains five properly documented exits:</p>
                    <ul class="list-none space-y-2 text-liminal-text">
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>Wandering far and long enough, which may cause the hallways to gradually transition into <strong>Level 1's garages</strong>;</span></li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>Breaking through a wall, which will lead one into <strong>Level 483</strong>;</span></li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>Breaking through the floor, which may lead one to <strong>Level 27</strong>, seldom The Void;</span></li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>Entering a rare emergency exit, which may lead one to <strong>Level 14</strong>;</span></li>
                        <li class="flex items-start gap-2"><i class="ph ph-arrow-right text-liminal-safe mt-1"></i> <span>And glass sliding doors resemblant of those within a greenhouse, which lead one to <strong>Level 13</strong>.</span></li>
                    </ul>
                </div>
            `,
            
            survivalGuide: `
                <div class="space-y-6 text-sm text-liminal-text max-w-4xl">
                    
                    <!-- Section 1 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-purple-500">
                        <h4 class="text-purple-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-brain"></i> 1. Psychological Anchoring</h4>
                        <p class="mb-2">The greatest threat in Level 0 is not physical, but mental. The hum-buzz and mono-yellow aesthetic induce rapid monophobia. Visual hallucinations begin typically within 48 hours of isolation.</p>
                        <p class="bg-purple-900/20 p-3 rounded text-purple-200 border border-purple-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Carry a mechanical watch. The ticking overrides the hum-buzz and grounds you to linear Frontrooms time. Digital devices may fail or loop.</p>
                    </div>
                    
                    <!-- Section 2 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-yellow-500">
                        <h4 class="text-yellow-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-drop"></i> 2. Resource Management & Hydration</h4>
                        <p class="mb-2">There is absolutely no clean water natively generated here. The fluid in the carpet is strictly non-potable and contains toxic bacterial anomalies. Do not attempt to boil or filter it; heating it produces a mild neurotoxin.</p>
                        <p class="bg-yellow-900/20 p-3 rounded text-yellow-200 border border-yellow-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Search specifically for pooling condensation near structural anomalies or dislodged ceiling tiles; these rarely contain trace amounts of safe Almond Water.</p>
                    </div>

                    <!-- Section 3 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500">
                        <h4 class="text-blue-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-compass"></i> 3. Navigation Protocols</h4>
                        <p class="mb-2">Do not rely on sight lines. The non-Euclidean geometry renders line-of-sight useless. Walking in a straight line will often result in a topological loop back to your starting point.</p>
                        <p class="bg-blue-900/20 p-3 rounded text-blue-200 border border-blue-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Employ the "Right-Hand Rule" tightly hugging the right wall. While it won't solve topological loops, it prevents wandering in open circles and increases the chance of hitting a boundary wall (which may eventually transition to Level 1).</p>
                    </div>

                    <!-- Section 4 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-red-500">
                        <h4 class="text-red-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-bed"></i> 4. Sleep Deprivation Countermeasures</h4>
                        <p class="mb-2">The inability to turn off the lights combined with the 60Hz hum makes REM sleep nearly impossible. Exhaustion is the #2 killer in Level 0.</p>
                        <p class="bg-red-900/20 p-3 rounded text-red-200 border border-red-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Tear strips of wallpaper (carefully, minding the mild arsenic) to fashion a crude blindfold. Wedge yourself into an internal 90-degree corner to limit your exposure area. Sleep in 3-hour bursts maximum.</p>
                    </div>

                    <!-- Section 5 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-green-500">
                        <h4 class="text-green-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-wrench"></i> 5. Equipment Durability & Degradation</h4>
                        <p class="mb-2">The ambient static charge (+12kV/m) will rapidly drain modern lithium-ion batteries. Magnetic storage (hard drives) will corrupt within 72 hours.</p>
                        <p class="bg-green-900/20 p-3 rounded text-green-200 border border-green-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Only rely on solid-state drives shielded in Faraday cages. For lighting, rely on the level's ambient light; do not waste flashlight batteries unless investigating a darkened anomaly.</p>
                    </div>

                    <!-- Section 6 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-orange-500">
                        <h4 class="text-orange-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-fork-knife"></i> 6. Dietary Restrictions & Foraging</h4>
                        <p class="mb-2">There is no flora or fauna. The black mold occasionally found near baseboards is highly toxic if ingested, causing severe gastrointestinal hemorrhaging.</p>
                        <p class="bg-orange-900/20 p-3 rounded text-orange-200 border border-orange-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> You must rely entirely on brought rations. If rations run out, attempt to minimize physical exertion to lower metabolic burn. Do not eat the carpet.</p>
                    </div>

                    <!-- Section 7 -->
                    <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-teal-500">
                        <h4 class="text-teal-500 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-ghost"></i> 7. Hypothetical Entity Protocols</h4>
                        <p class="mb-2">While Level 0 is canonically devoid of entities, paranoia often dictates otherwise. If you "hear" footsteps or "see" movement out of your peripheral vision...</p>
                        <p class="bg-teal-900/20 p-3 rounded text-teal-200 border border-teal-500/20 text-xs font-mono"><strong>L-CORP TRICK:</strong> Do not run. Running spikes heart rate and accelerates dehydration. Acknowledge the hallucination out loud calmly. It will dissipate. Real entities do not exist here.</p>
                    </div>

                    <!-- Loadout -->
                    <div class="mt-8 pt-6 border-t border-white/10">
                        <h4 class="text-white font-bold mb-4 text-xl tracking-tight">Recommended Agent Loadout</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-headphones text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">Noise-cancelling headsets (Active analog, not digital)</span>
                            </div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-drop text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">Minimum 3 liters of purified Almond Water</span>
                            </div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-pencil-simple text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">Chalk (markings disappear within 12h, use sparingly)</span>
                            </div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-broadcast text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">Proprietary Sub-space beacon (For telemetry)</span>
                            </div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-first-aid text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">High-calorie survival paste (14 days supply)</span>
                            </div>
                            <div class="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3">
                                <i class="ph ph-watch text-2xl text-liminal-primary"></i>
                                <span class="font-mono text-xs">Mechanical Watch (Psychological anchor)</span>
                            </div>
                        </div>
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
                    
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
                        <div class="text-[10px] text-liminal-muted mb-1 font-mono">OCTOBER 4, 2020</div>
                        <h4 class="text-white font-bold text-lg mb-2">Project "Yellow Wallpaper" Initiated</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">The first batch of unmanned, tungsten-shielded probes are sent via induced noclip events using a rudimentary particle accelerator setup. 80% of probes lose connection instantly upon entry due to severe Euclidean distortion. The surviving 20% establish the basis for the current Cartography Engine, mapping over 4 million square miles in the first week before their batteries succumb to static drain.</p>
                    </div>
                    
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
                        <div class="text-[10px] text-liminal-muted mb-1 font-mono">JUNE 13, 2022 - 2:03 P.M.</div>
                        <h4 class="text-white font-bold text-lg mb-2">Expedition Log: "Staring Back" Recovered</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed mb-3">Data retrieval from a deceased wanderer's recording device found pinned against a non-Euclidean corner. The device was heavily corrupted, but audio logs were salvaged.</p>
                        <div class="bg-[#050505] p-4 rounded border border-white/5 font-mono text-xs text-gray-400 italic">
                            "How long have I been walking? Where did I begin walking?<br>
                            I recall joining my lover on the floor. I don't think I was dancing well. I stepped in the same space a second time, and when I decided to move out of the clumsy two-step, the floor ate me up. Her grip was nowhere near strong enough to stop my sudden fall. I awoke to this space, a pain in my ankle, buzzing lights. My eyes were struck by a stinging sensation unlike anything else.<br><br>
                            With no better options, I had to get up, start moving, search for a way out. I was always told to "move forward, no matter the cost", but what is forward when everything looks the same? Whatever direction you choose, it would seem. It really isn't forward then, right? I lost direction an unknown time ago, for all I've seen is the same yellow walls. The same wallpaper too, always the same wallpaper. Whoever made this place had a strange love for arrows and vertical lines.<br><br>
                            I've tried blinking, over and over, to make it stop. To wake up. There are no clocks to check the time, only a smattering of power outlets and empty mounts. They add a little more character to the mundane rooms. The last one I stepped on, however, crumbled immediately. I still feel the trickle of something warm going down my face, a red hue reminding me that I'm still alive.<br><br>
                            I only hope I can return home."
                        </div>
                        <p class="text-sm text-liminal-muted leading-relaxed mt-3">This log profoundly validates Liminality Corp's psychological degradation models, leading to the strict implementation of mechanical watches in Agent Loadouts.</p>
                    </div>

                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
                        <div class="text-[10px] text-liminal-muted mb-1 font-mono">JANUARY 18, 2023</div>
                        <h4 class="text-white font-bold text-lg mb-2">The "400-Mile March" Experiment</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">Agent L-89 undergoes an experimental endurance run, heavily supplied, to test the linear boundaries of Level 0. Walking in a precise, straight line (aided by gyroscopic stabilization), L-89 covers an estimated 400 miles over 14 days. Result: No discernible change in architecture. At mile 401, L-89 encounters their own starting camp, confirming a massive topological loop structure rather than purely infinite linearity.</p>
                    </div>

                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2 top-1 w-4 h-4 bg-black border border-liminal-muted rounded-full z-10"></div>
                        <div class="text-[10px] text-liminal-muted mb-1 font-mono">MARCH 3, 2024</div>
                        <h4 class="text-white font-bold text-lg mb-2">First Controlled Noclip Exit Verified</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">After years of entrapment being the standard outcome, a Liminality drone successfully maps an exit threshold. By tracking anomalous visual glitches in specific wall textures (now cataloged as "Fragile Walls"), the drone breaches the boundary, recording a smooth transition into the industrial concrete environments of Level 1. This marks the beginning of inter-level mapping.</p>
                    </div>
                    
                    <div class="relative pl-6 md:pl-10">
                        <div class="absolute -left-2.5 top-1 w-5 h-5 bg-black border-2 border-liminal-safe rounded-full z-10 flex items-center justify-center"><div class="w-2 h-2 bg-liminal-safe rounded-full animate-pulse"></div></div>
                        <div class="text-[10px] text-liminal-safe mb-1 font-mono bg-liminal-safe/10 inline-block px-2 py-0.5 rounded">CURRENT YEAR</div>
                        <h4 class="text-white font-bold text-lg mb-2">Stable LiminOS Uplink Achieved</h4>
                        <p class="text-sm text-liminal-muted leading-relaxed">Proprietary quantum-entangled nodes allow for real-time telemetry extraction across Level 0 without risking human agents. The Cartography Engine is now running at 99.98% accuracy based on deterministic hashing algorithms. Live mapping is fully operational.</p>
                    </div>
                </div>
            `,
            
            resonanceScan: `
                <div class="flex flex-col gap-4">
                    <h3 class="text-xl font-bold text-white mb-2">Deep Resonance Protocol</h3>
                    <p class="text-sm text-liminal-muted mb-4">Execute a localized quantum ping to extract raw, unfiltered anomalous data from Level 0's immediate topology.</p>
                    
                    <button onclick="runResonanceScan()" id="btn-run-scan" class="bg-liminal-primary/20 border border-liminal-primary text-liminal-primary hover:bg-liminal-primary hover:text-black font-mono font-bold py-3 px-6 rounded transition-all flex items-center justify-center gap-3">
                        <i class="ph ph-scan text-xl"></i> INITIATE DEEP SCAN
                    </button>

                    <div id="scan-terminal" class="hidden mt-4 bg-[#050505] border border-white/10 rounded p-4 font-mono text-[10px] md:text-xs h-64 overflow-y-auto">
                        <div id="scan-terminal-content" class="space-y-1"></div>
                    </div>
                </div>
            `
        }
    },
    entities: {
        "entity49": {
            type: "entity",
            id: "49",
            title: "Entity 49",
            name: "The Cameraman",
            tags: [
                { label: "UNALIGNED", class: "bg-gray-500/10 text-gray-400 border-gray-500/30" },
                { label: "NON-HOSTILE", class: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
                { label: "THEORETICAL", class: "bg-purple-500/10 text-purple-400 border-purple-500/30" }
            ],
            heroImage: "https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&w=1600&q=80",
            
            specificMetrics: {
                "Entity Specific (Proprietary)": {
                    "Origin Level": "Unknown (Omnipresent)",
                    "Current Locations": "All Levels (Theorized)",
                    "Photographic Resolution Avg": "4K+ Equivalent",
                    "Flash Lumens Generated": "0 (No light detected)",
                    "Film Trace Evidence": "Rarely found on Level 4",
                    "Interference Rating": "Zero",
                    "Detection Evasion Rate": "100%",
                    "Audio Footprint": "0 dB",
                    "Database Upload Vector": "Anomalous Packet Injection",
                    "Digital Signature Origin": "Null / Void Route"
                }
            },

            lore: `
                <div class="mb-6 pb-4 border-b border-white/5 border-l-4 border-l-yellow-500 bg-yellow-500/10 p-4 rounded-r">
                    <p class="text-sm text-yellow-200 font-mono"><strong>NOTICE:</strong> This document is pending revision following a recent alteration in the expected behavior of this phenomenon. A thorough review is scheduled to be held by the Kauer Board of Directors to ensure that the updated understanding is accurately reflected.</p>
                </div>
                
                <div class="mb-8 overflow-hidden rounded-lg border border-liminal-border">
                    <img src="https://images.unsplash.com/photo-1605335198944-1296c6bd00fb?auto=format&fit=crop&w=1000&q=80" class="w-full opacity-80 mix-blend-screen" alt="Dark Room">
                    <p class="text-[10px] font-mono text-liminal-muted p-2 bg-black/50 text-center">Unverified undeveloped film strip allegedly recovered near a Level 2 pipe fixture.</p>
                </div>

                <h3>Description</h3>
                <p>The Cameraman is a theoretical entity presumed to be responsible for capturing most of the currently known images of the Backrooms. The process by which these photos are captured is unknown, and evidence of The Cameraman has yet to be proven; however, its existence could serve as an explanation for the mysterious phenomenon of images appearing in level entries instantaneously after their submission into the Database. These files often have no attribution or provided context, and have even appeared in level documents when the explorers responsible for the article did not report carrying photography equipment with them. Some speculate that The Cameraman is not a single entity, but rather a collective of entities capturing such images. This theory may be supported by their vastly different manners of photography, implying that they were not taken by one being.</p>
                
                <p>Furthermore, the quality of many of these anonymous photos indicates that they were not taken from a cellphone or other common device. Rather, the majority are high-quality and appear as if captured with a professional camera apparatus that a typical wanderer would not possess. If a wanderer did have camera equipment of this nature, it would be unreasonable to surmise that such an individual could manage to travel from level to level carrying the equipment alone. Many potential explanations have been provided to explain the source of this phenomenon, though, to date, none have been able to provide a conclusive answer. From this, The Cameraman is theorized. This entity, for unknown reasons and by means yet to be understood, is thought to travel throughout the Backrooms capturing images of various levels. Many images in the Database lack attribution to a specific photographer or an explanation as to how they were taken, and it is these entries that are attributed to The Cameraman, acting as their silent curator.</p>
                
                <p>The physical characteristics of the entity remain mysterious, as it is believed to either avoid being seen or does not have a physical form altogether. The only evidence pertaining to the existence of The Cameraman includes unproven reports of leftover film rolls and undeveloped photographs being discovered in certain levels, supposedly near where their Database images were taken. As it stands, it has been agreed to not make attempts to hinder or capture this entity, as although its methods and intentions are unknown, it serves as a general asset to the Database.</p>
            `,

            history: `
                <div class="space-y-6">
                    <div class="bg-[#050505] border border-white/10 rounded p-6 font-mono text-sm">
                        <div class="border-b border-white/10 pb-4 mb-4 text-liminal-muted">
                            <p><strong>From:</strong> rhollinwell@kro.net</p>
                            <p><strong>To:</strong> dfuller@kro.net</p>
                            <p class="mt-2 text-white"><strong>Subject: Cessation of Anonymous Uploads</strong></p>
                        </div>
                        <div class="space-y-4 text-gray-300">
                            <p>Greetings,</p>
                            <p>I hope this message finds you well. It is with minor concern that I report a sudden and perplexing change in the phenomenon of The Cameraman and its theorized activity. The continual and inexplicable addition of new images to the Database has, for lack of a better word, stopped entirely. Our analysis has indicated a complete absence of any new anonymous images beginning early this afternoon after we published the final revision of its article.</p>
                            <p>Upon discussing potential causes for this abrupt cessation, several theories have emerged; one prominent hypothesis among my colleagues suggests a potential interference from some external force, hindering The Cameraman’s process of capturing images, while others suggest that it could simply be the result of a temporary technical malfunction within the Database itself. What we wonder most, however, is whether this may be a reaction of some kind — a response from the entity potentially becoming aware of our documentation regarding itself. After all, its own article was one of the only Database documents to have never received any anonymous images.</p>
                            <p>As we investigate the source of this matter, we must remain open to all possibilities. I urge the Board to increase their research efforts regarding The Cameraman and its possible functions. Any insights or suggestions from your end would be greatly appreciated.</p>
                            <p>Sincerely,<br>Dr. Hollinwell<br>Head of Phenomenon Research, Kauer Research Organization</p>
                        </div>
                    </div>
                </div>
            `,
            
            survivalGuide: `
                <div class="p-5 bg-black/40 border border-white/5 rounded-lg border-l-4 border-l-blue-500">
                    <h4 class="text-blue-400 font-bold uppercase mb-3 text-lg flex items-center gap-2"><i class="ph ph-info"></i> Non-Intervention Protocol</h4>
                    <p class="mb-2 text-sm text-gray-300">The Cameraman is classified as a Non-Hostile asset. Wanderer engagement is strictly prohibited. If you locate a camera, film roll, or tripod that you did not bring with you, do not touch it. Allow the entity to curate the database in peace.</p>
                </div>
            `
        }
    }
};