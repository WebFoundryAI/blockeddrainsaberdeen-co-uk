/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  aberdeen: {
    neighborhoods: ["City Centre", "West End", "Old Aberdeen", "Rosemount", "Ferryhill", "Torry", "Mannofield", "Bridge of Don"],
    landmarks: ["Union Street", "Marischal College", "Aberdeen Harbour", "Duthie Park", "St Machar's Cathedral"],
    drainageInfo: "Aberdeen's historic drainage infrastructure dates back to the Victorian era, with the city centre's granite tenements and commercial buildings sitting atop some of the oldest sewer systems in the north-east of Scotland. The West End's granite villas feature ageing clay pipe networks, while the city's granite bedrock and North Sea climate create unique challenges for drainage engineers. Many properties in Rosemount, Ferryhill, and the Old Town rely on century-old clay and cast iron drainage that requires specialist maintenance.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "granite tenement flats, Victorian granite villas, modern apartments, and commercial premises"
  },
  dyce: {
    neighborhoods: ["Dyce village", "Bucksburn", "Stoneywood", "Kirkhill", "Dyce business parks", "Riverview"],
    landmarks: ["Aberdeen International Airport", "Dyce Parish Church", "Stoneywood Paper Mill", "the River Don", "Dyce railway station"],
    drainageInfo: "Dyce's mix of older village properties, mid-century housing, and modern developments supporting the airport and energy industry creates varied drainage needs. The area's low-lying position near the River Don makes some properties susceptible to surface water flooding during heavy rainfall. Commercial and industrial premises around the airport business parks require regular drainage maintenance to prevent operational disruptions.",
    responseTime: "typically within 45 to 75 minutes",
    propertyTypes: "traditional granite cottages, mid-century semi-detached houses, modern estate housing, and commercial premises"
  },
  westhill: {
    neighborhoods: ["Westhill town centre", "Elrick", "Broadstraik", "Arnhall", "Skene", "Kirkton of Skene"],
    landmarks: ["Westhill Shopping Centre", "Arnhall Moss Nature Reserve", "Westhill Golf Club", "Carnie Woods", "Loch of Skene"],
    drainageInfo: "Westhill's relatively modern housing stock, mostly built from the 1970s onwards, generally has well-designed drainage systems. However, properties on the earlier estates are now approaching 50 years old, and clay subsoil in parts of the town can contribute to ground movement and pipe joint displacement. Newer developments in Broadstraik have modern drainage, but connections to older sewer mains can create capacity issues during heavy rainfall.",
    responseTime: "typically within 45 to 60 minutes",
    propertyTypes: "1970s-1990s detached and semi-detached houses, modern family homes, and executive housing"
  },
  portlethen: {
    neighborhoods: ["Portlethen village", "Newtonhill", "Findon", "Downies", "Cookston", "Muirend"],
    landmarks: ["Portlethen Golf Club", "Portlethen Moss", "Bourtree Park", "Portlethen Academy", "the coastal path"],
    drainageInfo: "Portlethen is a modern commuter settlement south of Aberdeen that has grown significantly since the 1980s. The town's elevated coastal position on clay and boulder clay subsoil means that ground movement can stress underground pipes over time. The exposed position also means heavy North Sea rainfall can test drainage capacity. The older estates are now approaching 40 years old and may benefit from professional inspection.",
    responseTime: "typically within 40 to 60 minutes",
    propertyTypes: "1980s-2000s estate housing, modern detached homes, and traditional coastal cottages in Findon and Newtonhill"
  },
  stonehaven: {
    neighborhoods: ["Old Town", "harbour area", "Cowie", "Dunnottar", "Carron Den", "Ury estate"],
    landmarks: ["Dunnottar Castle", "Stonehaven Harbour", "Stonehaven Open Air Pool", "Market Square", "the Boardwalk"],
    drainageInfo: "Stonehaven's historic harbour town setting presents distinctive drainage challenges. The old town around the harbour and Market Square has traditional stone-built properties with some of the oldest drainage systems in Aberdeenshire. Steep streets running down to the harbour create significant gradient changes in drainage runs. The Carron Water running through the town has caused flooding historically, and all properties are exposed to harsh North Sea weather conditions.",
    responseTime: "typically within 60 to 90 minutes",
    propertyTypes: "historic stone-built cottages, Victorian terraces, harbour-side properties, and modern housing developments"
  },
  inverurie: {
    neighborhoods: ["Town centre", "Port Elphinstone", "Kintore", "Chapel of Garioch", "Harlaw", "Davah Wood"],
    landmarks: ["Inverurie Town Hall", "Bass Rock", "Brandsbutt Stone", "Keith Hall", "Bennachie"],
    drainageInfo: "Inverurie has grown rapidly in recent decades, with large new housing developments surrounding a historic town centre. The older centre has Victorian-era clay pipe drainage, while newer estates have modern plastic systems. The town's position on the River Don floodplain means some areas, particularly Port Elphinstone, are susceptible to flooding. Capacity issues can arise where modern developments connect to older sewer mains.",
    responseTime: "typically within 60 to 90 minutes",
    propertyTypes: "Victorian stone-built town houses, 20th-century semi-detached homes, and modern estate housing"
  },
  ellon: {
    neighborhoods: ["Town centre", "Cromleybank", "Modley", "McDonald Park", "Auchterellon", "Ythan valley"],
    landmarks: ["Ellon Castle Gardens", "Ythan Bridge", "the Meadows", "Formartine and Buchan Way", "Ellon Golf Club"],
    drainageInfo: "Ellon is an expanding town on the River Ythan that has seen considerable new housing development. The original town centre has older stone-built properties with traditional drainage, while newer estates have modern separate foul and surface water systems. The River Ythan can cause elevated water table conditions, affecting drainage performance for riverside properties. The growing population puts increasing demand on the local drainage infrastructure.",
    responseTime: "typically within 60 to 90 minutes",
    propertyTypes: "traditional stone-built properties, modern family homes, and new-build estate housing"
  },
  peterhead: {
    neighborhoods: ["Town centre", "Broad Street", "Keith Inch", "Boddam", "Cruden Bay", "Mintlaw"],
    landmarks: ["Peterhead Harbour", "Peterhead Prison Museum", "Buchan Ness lighthouse", "Boddam Lighthouse", "Arbuthnot Museum"],
    drainageInfo: "Peterhead's exposed North Sea coast position means properties face harsh weather conditions including salt spray, driving rain, and freezing temperatures that accelerate drainage system deterioration. The older town centre features traditional pink granite properties with century-old drainage systems. The harbour and fish processing facilities create commercial drainage demands. Even relatively modern systems can suffer from accelerated corrosion in the coastal environment.",
    responseTime: "typically within 75 to 100 minutes",
    propertyTypes: "traditional granite-built town houses, harbour-side commercial properties, and modern housing estates"
  },
  banchory: {
    neighborhoods: ["High Street", "Arbeadie", "Raemoir", "Strachan", "Torphins", "Inchmarlo"],
    landmarks: ["Crathes Castle", "Scolty Hill", "the River Dee", "Bellfield Park", "Banchory Museum"],
    drainageInfo: "Banchory's Dee valley location means water table levels can be elevated, particularly in winter and spring. The older town centre has traditional stone-built properties with ageing drainage, while newer housing on the edges features modern infrastructure. Some rural properties rely on private drainage including septic tanks. The River Dee's environmental protections require careful drainage work to prevent contamination. Banchory's wooded surroundings make tree root ingress a common drainage problem.",
    responseTime: "typically within 60 to 80 minutes",
    propertyTypes: "traditional stone-built houses, modern detached homes, rural properties with private drainage, and Deeside estate housing"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  aberdeen: {
    "blocked-drains": {
      intro: "Aberdeen's granite city heritage means blocked drains can affect anything from a Victorian tenement flat in Rosemount to a commercial premises on Union Street. Our experienced engineers understand the unique drainage challenges facing properties across the city and respond quickly to restore your system to full working order.",
      commonProblems: ["Older granite tenement buildings with shared drainage systems", "Victorian clay pipes susceptible to root ingress and joint failure", "Granite bedrock making excavation more challenging", "North Sea weather causing accelerated pipe wear", "Fat and grease buildup in residential kitchens across the city centre"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties in Aberdeen's West End and Rosemount should consider annual drain inspections as the mature trees and ageing clay pipe networks can accelerate root intrusion and pipe deterioration."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Aberdeen, you need a fast response from engineers who know the local area. Whether you're in the City Centre, Old Aberdeen, or Ferryhill, our drain unblocking teams are strategically positioned to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Grease buildup in older narrow-bore pipes common in city centre properties", "Shared drainage runs in tenement buildings", "External drains affected by leaf fall and debris from mature gardens", "Commercial kitchens in the city's restaurant quarter", "Kitchen sink blockages from food waste"],
      process: "On arrival, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream. Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction.",
      localTip: "Aberdeen's granite tenement buildings often have shared drainage systems — if your neighbours are experiencing similar issues, a shared drainage inspection can save everyone time and money."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys across Aberdeen, providing detailed video inspection and comprehensive reports for homeowners, buyers, and property managers.",
      commonProblems: ["Older drainage systems beneath granite-built properties requiring careful navigation", "Pre-purchase surveys for Aberdeen's varied housing stock", "Identifying root ingress from mature trees in West End gardens", "Assessing shared drainage in tenement buildings", "Mapping complex drainage runs beneath period properties"],
      process: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network. The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects.",
      localTip: "If you're buying a granite-built property in Aberdeen, a pre-purchase CCTV drain survey is essential — hidden drainage defects beneath these older buildings can cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting services across Aberdeen, clearing stubborn blockages and cleaning pipe walls to restore full drainage capacity.",
      commonProblems: ["Heavy grease buildup in older residential and commercial properties", "Scale deposits in hard water areas", "Root mass clearance in established residential areas", "Preventative maintenance for commercial properties", "Debris accumulation in Victorian clay pipes"],
      process: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer. A final camera pass confirms the pipe is clear.",
      localTip: "Aberdeen's older clay pipe networks in areas like Rosemount and Ferryhill benefit from regular jetting every 12 to 18 months to prevent gradual buildup becoming a full blockage."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drainage services across Aberdeen. Our engineers respond rapidly to flooding, sewage backups, and urgent blockages day and night.",
      commonProblems: ["Flooding risk from heavy North Sea rainfall events", "Sewage backup in older tenement buildings with shared drainage", "Emergency access to commercial properties outside business hours", "Frozen and burst pipes during Aberdeen winters", "Storm damage to external drainage systems"],
      process: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage. We diagnose the root cause and implement the fastest effective repair.",
      localTip: "Aberdeen's exposed North Sea position means winter storms can overwhelm drainage systems. If you experience recurring flooding, consider a preventative CCTV survey to identify vulnerabilities before the next storm season."
    },
    "drain-repairs": {
      intro: "Professional drain repair services in Aberdeen, from trenchless pipe relining to full excavation and replacement for severely damaged drainage systems.",
      commonProblems: ["Granite bedrock and granite-flagged surfaces requiring specialist excavation", "Repairing Victorian clay and cast iron pipes without disrupting granite buildings", "Trenchless solutions ideal for minimising disruption in the city centre", "Repairs to shared drainage in flatted properties", "Corrosion damage from Aberdeen's harsh coastal climate"],
      process: "We begin with a CCTV inspection to map the damage precisely. You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses.",
      localTip: "Aberdeen's granite bedrock means trenchless pipe relining is often the most practical repair option, avoiding the significant cost and disruption of excavation through granite surfaces."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Scottish Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Scottish Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Aberdeen and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Aberdeen and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Aberdeen and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Aberdeen and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
