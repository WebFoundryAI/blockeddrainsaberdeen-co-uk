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
 * Location-specific service content for each location + service combination
 */
export interface LocationServiceData {
  intro: string;
  localChallenges: string[];
  coverage: string;
}

export const LOCATION_SERVICE_CONTENT: Record<string, Record<string, LocationServiceData>> = {
  aberdeen: {
    "blocked-drains": {
      intro: "We clear blocked drains across Aberdeen quickly and professionally, from tenement flats in Rosemount to commercial premises on Union Street.",
      localChallenges: [
        "Older granite tenement buildings with shared drainage systems",
        "Victorian clay pipes susceptible to root ingress and joint failure",
        "Granite bedrock making excavation more challenging",
        "North Sea weather causing accelerated pipe wear"
      ],
      coverage: "City Centre, West End, Old Aberdeen, Rosemount, Ferryhill, Torry, Mannofield, Bridge of Don, Cults, and all surrounding areas."
    },
    "drain-unblocking": {
      intro: "Fast, effective drain unblocking for homes and businesses throughout Aberdeen. We handle everything from kitchen sinks to external drainage runs.",
      localChallenges: [
        "Grease buildup in older narrow-bore pipes common in city centre properties",
        "Shared drainage runs in tenement buildings",
        "External drains affected by leaf fall and debris from mature gardens",
        "Commercial kitchens in the city's restaurant quarter"
      ],
      coverage: "All Aberdeen postcodes including AB10, AB11, AB15, AB16, AB21, AB22, AB23, AB24, and AB25."
    },
    "cctv-drain-surveys": {
      intro: "Professional CCTV drain surveys across Aberdeen, providing detailed video inspection and comprehensive reports for homeowners, buyers, and property managers.",
      localChallenges: [
        "Older drainage systems beneath granite-built properties requiring careful navigation",
        "Pre-purchase surveys for Aberdeen's varied housing stock",
        "Identifying root ingress from mature trees in West End gardens",
        "Assessing shared drainage in tenement buildings"
      ],
      coverage: "Full coverage across Aberdeen and surrounding areas, including pre-purchase surveys for all property types."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting services across Aberdeen, clearing stubborn blockages and cleaning pipe walls to restore full drainage capacity.",
      localChallenges: [
        "Heavy grease buildup in older residential and commercial properties",
        "Scale deposits in hard water areas",
        "Root mass clearance in established residential areas",
        "Preventative maintenance for commercial properties"
      ],
      coverage: "Available across all Aberdeen areas with same-day service for urgent requests."
    },
    "emergency-drain-services": {
      intro: "24/7 emergency drainage services across Aberdeen. Our engineers respond rapidly to flooding, sewage backups, and urgent blockages day and night.",
      localChallenges: [
        "Flooding risk from heavy North Sea rainfall events",
        "Sewage backup in older tenement buildings with shared drainage",
        "Emergency access to commercial properties outside business hours",
        "Frozen and burst pipes during Aberdeen winters"
      ],
      coverage: "Emergency response across all Aberdeen areas, typically within 60 minutes."
    },
    "drain-repairs": {
      intro: "Professional drain repair services in Aberdeen, from trenchless pipe relining to full excavation and replacement for severely damaged drainage systems.",
      localChallenges: [
        "Granite bedrock and granite-flagged surfaces requiring specialist excavation",
        "Repairing Victorian clay and cast iron pipes without disrupting granite buildings",
        "Trenchless solutions ideal for minimising disruption in the city centre",
        "Repairs to shared drainage in flatted properties"
      ],
      coverage: "Full repair services across Aberdeen with both trenchless and traditional methods available."
    }
  }
};

export function getLocationData(slug: string): LocationData | undefined {
  return LOCATION_DATA[slug];
}

export function getLocationServiceData(locationSlug: string, serviceSlug: string): LocationServiceData | undefined {
  return LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug];
}
