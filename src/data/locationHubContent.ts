/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  aberdeen: {
    landmarks: [
      "Union Street",
      "Marischal College",
      "Aberdeen Harbour",
      "Duthie Park",
      "Aberdeen Art Gallery",
      "St Machar's Cathedral",
      "King's College Chapel",
      "Hazlehead Park",
      "His Majesty's Theatre",
      "Aberdeen Beach Esplanade",
      "Pittodrie Stadium",
      "Union Terrace Gardens",
      "Castlegate",
      "The Bon Accord Centre",
      "Aberdeen Maritime Museum",
      "Seaton Park",
      "Rubislaw Den",
      "Bridge of Don",
      "Footdee (Fittie)",
      "Torry Battery",
      "Victoria Park",
      "Westburn Park"
    ],
    drainageProfile: "Aberdeen's drainage infrastructure reflects the city's long history and distinctive granite construction. The city centre around Union Street and the surrounding Georgian and Victorian quarters relies on ageing clay and cast iron pipe networks, many dating back to the 19th century. Aberdeen's granite bedrock presents unique challenges for drainage engineers, as excavation work is more demanding than in areas with softer geology. The city's coastal position on the North Sea means properties are exposed to salt-laden moisture, heavy rainfall, and freezing conditions that accelerate wear on drainage systems. Scottish Water manages the public sewer network, but private drains within property boundaries remain the owner's responsibility. The mix of traditional granite tenements in areas like Rosemount and Ferryhill, Victorian villas in the West End, and modern housing developments in Bridge of Don and Cove creates a wide range of drainage system types and ages across the city.",
    localFAQs: [
      {
        question: "Do you cover all areas of Aberdeen?",
        answer: "Yes, we cover the entire Aberdeen city area including the city centre, West End, Old Aberdeen, Bridge of Don, Torry, Mannofield, Cults, Dyce, and all surrounding suburbs. Our engineers are positioned across the city for fast response times."
      },
      {
        question: "How does Aberdeen's granite affect drainage work?",
        answer: "Aberdeen's granite bedrock and granite-built properties can make drainage excavation more challenging than in other cities. Our engineers carry specialist equipment suited to working with granite, and we offer trenchless repair methods like pipe relining that avoid the need for excavation wherever possible."
      },
      {
        question: "Are Aberdeen's older drainage systems prone to problems?",
        answer: "Yes, many Aberdeen properties — particularly Victorian and Edwardian granite tenements and villas — have clay or cast iron drainage systems that are over 100 years old. These systems are susceptible to cracking, joint displacement, and root ingress. A CCTV drain survey can reveal the condition of your pipes and help you plan maintenance before a failure occurs."
      },
      {
        question: "What should I do if I suspect a shared drain blockage in my Aberdeen tenement?",
        answer: "If you live in a tenement or flatted property, the responsibility for shared drainage usually falls to all owners jointly. We can diagnose whether the blockage is in your private section or the shared system and advise on next steps. If it is in the public sewer, Scottish Water is responsible."
      }
    ],
    caseStudy: "We were called to a granite tenement flat near Rosemount Place where the ground-floor kitchen sink had been backing up repeatedly for weeks. Previous attempts with drain rods had failed. Our CCTV survey revealed a collapsed section of Victorian clay pipe beneath the rear garden, caused by root ingress from a mature tree. We carried out a trenchless pipe reline, avoiding the need to excavate the granite-flagged garden path. The repair was completed in a single day and the homeowner reported no further issues."
  },

  dyce: {
    landmarks: [
      "Aberdeen International Airport",
      "Dyce Parish Church",
      "Stoneywood Paper Mill",
      "Dyce railway station",
      "Riverview Drive",
      "Victoria Street Dyce",
      "Pitmedden Road",
      "Dyce Park",
      "Bucksburn Swimming Pool",
      "Farburn Terrace"
    ],
    drainageProfile: "Dyce sits to the north-west of Aberdeen city centre, close to Aberdeen International Airport and key energy industry hubs. The area features a mix of older village properties built with local granite, mid-20th-century housing, and newer developments built to service the oil and gas workforce. The River Don runs nearby, and the low-lying terrain in parts of Dyce can make properties vulnerable to surface water flooding during heavy rainfall. Industrial and commercial premises in the area, particularly around the airport business parks, require regular drainage maintenance to keep operations running smoothly. The nearby Stoneywood and Bucksburn areas share similar drainage profiles, with many properties connected to older sewer systems that have been extended over the decades.",
    localFAQs: [
      {
        question: "How quickly can you reach Dyce for an emergency?",
        answer: "We typically arrive in Dyce within 45 to 75 minutes for emergency callouts. Our engineers cover the wider Dyce area including Bucksburn, Stoneywood, and Kirkhill."
      },
      {
        question: "Do you provide drainage services for commercial properties near Aberdeen Airport?",
        answer: "Yes, we provide commercial drainage services for businesses across Dyce and the airport business parks. This includes scheduled maintenance, emergency response, and CCTV surveys for offices, warehouses, hotels, and industrial units."
      },
      {
        question: "Is Dyce prone to flooding?",
        answer: "Parts of Dyce near the River Don are in flood risk areas. Heavy rainfall can overwhelm older drainage systems and cause surface water flooding. We provide emergency flood response and can advise on preventative measures such as non-return valves and drainage improvements."
      }
    ],
    caseStudy: "A commercial property near Dyce business park contacted us after repeated drain backups were disrupting their operations. Our CCTV investigation revealed a significant fat and grease buildup in the main drainage run serving the staff canteen area. We carried out a thorough high-pressure jetting service, clearing the entire run, and recommended a quarterly maintenance schedule. The client has reported no further drainage issues since we put the maintenance plan in place."
  },

  westhill: {
    landmarks: [
      "Westhill Shopping Centre",
      "Arnhall Moss Nature Reserve",
      "Westhill Golf Club",
      "Carnie Woods",
      "Westhill Academy",
      "Broadstraik area",
      "Westhill Business Park",
      "Skene Parish Church",
      "Loch of Skene",
      "Elrick"
    ],
    drainageProfile: "Westhill is a modern commuter town west of Aberdeen that has grown significantly since the 1960s, with much of its housing stock built from the 1970s onwards. The town's relatively modern drainage infrastructure generally performs well, but properties on the earlier estates may have drainage systems approaching 50 years old that are starting to show wear. The area sits on a gently sloping hillside with some clay subsoil, which can contribute to ground movement and pipe joint displacement over time. Newer developments in areas like Broadstraik and the western edge of town have modern drainage systems, but connections to older sewer mains can create bottlenecks during heavy rainfall. Westhill's popularity with families means that blocked drains from wet wipes and sanitary products are among the most common callouts we attend.",
    localFAQs: [
      {
        question: "Do you cover Westhill and the surrounding area?",
        answer: "Yes, we provide full drainage services across Westhill and nearby areas including Elrick, Skene, Kirkton of Skene, and Garlogie. We can usually reach Westhill within 45 to 60 minutes for emergency callouts."
      },
      {
        question: "My Westhill property is from the 1970s — should I get a drain survey?",
        answer: "Properties built in the 1970s and 1980s often have drainage systems that are now 40 to 50 years old. At this age, clay pipes can develop cracks and joint failures. A CCTV drain survey is a sensible investment, particularly if you are experiencing recurring blockages or slow drainage."
      },
      {
        question: "Do you offer drain maintenance contracts for Westhill businesses?",
        answer: "Yes, we offer scheduled maintenance plans for commercial properties in Westhill Business Park and the surrounding area. Regular jetting and inspection helps prevent disruptive blockages and keeps your drainage in good condition."
      }
    ],
    caseStudy: "A family in Westhill called us after noticing a persistent damp smell in their back garden and slow-draining downstairs toilet. Our CCTV survey discovered a displaced joint in the underground drainage about four metres from the house, likely caused by minor ground movement in the clay subsoil. We repaired the joint using trenchless pipe relining, avoiding any need to dig up the patio. The problem was resolved within a few hours and the family noticed an immediate improvement."
  },

  portlethen: {
    landmarks: [
      "Portlethen Golf Club",
      "Portlethen Moss",
      "Bourtree Park",
      "Portlethen Academy",
      "Asda Portlethen",
      "Muirend Road",
      "Cookston Road",
      "Findon",
      "Newtonhill",
      "Downies"
    ],
    drainageProfile: "Portlethen is a coastal commuter settlement south of Aberdeen that has expanded considerably since the 1980s with extensive modern housing developments. The town sits on elevated ground above the coast, with clay and boulder clay subsoil that can shift in wet conditions and put stress on underground drainage pipes. The relative modernity of most properties means that drainage systems are generally in reasonable condition, but the oldest estates are now approaching 40 years old and may benefit from inspection. Portlethen's exposed coastal position means that properties can experience heavy rainfall driven by North Sea weather systems, which tests drainage capacity. The nearby villages of Newtonhill and Findon have a mix of older traditional cottages and modern housing, each with different drainage characteristics.",
    localFAQs: [
      {
        question: "Do you cover Portlethen and Newtonhill?",
        answer: "Yes, we cover Portlethen, Newtonhill, Findon, and the surrounding areas. Our engineers can usually reach Portlethen within 40 to 60 minutes for emergency callouts from our Aberdeen base."
      },
      {
        question: "Are Portlethen's drainage systems affected by coastal weather?",
        answer: "Portlethen's exposed position means properties experience heavier rainfall than sheltered inland areas. Modern drainage systems are designed to handle this, but older systems or those with partial blockages can be overwhelmed during storms. Regular maintenance helps prevent weather-related drainage problems."
      },
      {
        question: "Can you help with a blocked drain in a new-build property in Portlethen?",
        answer: "Yes, we attend new-build properties regularly. Even modern drainage systems can develop blockages from construction debris, incorrect installation, or misuse. We can diagnose and resolve the issue quickly and advise whether the problem may be covered by your NHBC warranty."
      }
    ],
    caseStudy: "We attended a property in Portlethen where the external drain had been overflowing during heavy rain, flooding the patio and threatening the rear entrance. Our investigation found that the soakaway serving the property's surface water drainage had become silted up and was no longer absorbing rainwater effectively. We cleared the soakaway, jetted the connecting pipes, and restored proper drainage. The homeowner has not experienced any further flooding during subsequent storms."
  },

  stonehaven: {
    landmarks: [
      "Dunnottar Castle",
      "Stonehaven Harbour",
      "Stonehaven Open Air Pool",
      "Stonehaven War Memorial",
      "Market Square",
      "Baird Park",
      "Cowie",
      "Fetteresso Castle",
      "Shell House",
      "Mineralwell Park",
      "The Boardwalk",
      "Stonehaven Beach"
    ],
    drainageProfile: "Stonehaven is a historic harbour town set between dramatic coastal cliffs and rolling Aberdeenshire countryside. The old town around the harbour and Market Square features traditional stone-built properties with some of the oldest drainage systems in the area, including original clay pipes and stone-lined channels. The town's topography, with steep streets running down to the harbour, means drainage systems must handle significant changes in gradient. The newer residential areas on the higher ground south and west of the town centre have more modern infrastructure, but all properties in Stonehaven are exposed to the full force of North Sea weather. The Carron Water runs through the town and has caused flooding historically, particularly in the lower-lying areas. Scottish Water has invested in flood prevention, but private drainage maintenance remains essential for property owners.",
    localFAQs: [
      {
        question: "Do you cover Stonehaven?",
        answer: "Yes, we provide comprehensive drainage services throughout Stonehaven and the surrounding area including Cowie, Muchalls, and Dunnottar. Emergency callouts are typically attended within 60 to 90 minutes."
      },
      {
        question: "Are properties near Stonehaven harbour at risk of drainage problems?",
        answer: "Properties in the old town and near the harbour often have older drainage systems that are more susceptible to blockages and damage. The steep gradients and proximity to the sea can also contribute to issues. Regular inspection and maintenance are particularly important for these properties."
      },
      {
        question: "Can heavy rain cause drain problems in Stonehaven?",
        answer: "Yes, Stonehaven's coastal position and the Carron Water running through the town mean that heavy rainfall can overwhelm drainage systems, particularly in lower-lying areas. We provide emergency flood response and can advise on preventative measures for at-risk properties."
      }
    ],
    caseStudy: "A property owner near Stonehaven harbour contacted us after noticing sewage smells in the ground-floor rooms of their stone-built cottage. Our CCTV survey revealed multiple cracks in the original clay drainage pipe running beneath the property, allowing waste to seep into the surrounding ground. Given the challenging access beneath the stone floor, we used trenchless pipe relining to seal the damaged sections without any excavation inside the property. The smells disappeared immediately after the repair."
  },

  inverurie: {
    landmarks: [
      "Inverurie Town Hall",
      "Bass Rock",
      "Inverurie Golf Club",
      "Brandsbutt Stone",
      "Keith Hall",
      "Strathburn Park",
      "Market Place",
      "St Andrew's Church",
      "Port Elphinstone",
      "Kintore",
      "Bennachie",
      "Victoria Park Inverurie"
    ],
    drainageProfile: "Inverurie is a thriving market town on the River Don, approximately 16 miles north-west of Aberdeen. The town has experienced significant growth in recent decades, with large new housing developments surrounding a historic town centre. The older properties in the centre and along the main streets typically have Victorian-era drainage systems with clay pipes, while the newer estates feature modern plastic pipework. The town's location on the River Don floodplain means that some areas are susceptible to flooding during periods of heavy rainfall, and properties in lower-lying areas such as Port Elphinstone have historically been affected. The mix of old and new drainage infrastructure means that capacity issues can arise where modern developments connect to older sewer mains. Nearby Kintore has also grown rapidly, sharing similar drainage characteristics.",
    localFAQs: [
      {
        question: "How quickly can you attend a drainage emergency in Inverurie?",
        answer: "We typically reach Inverurie within 60 to 90 minutes for emergency callouts. We also cover the surrounding areas including Kintore, Port Elphinstone, and Chapel of Garioch."
      },
      {
        question: "Is flooding a concern in Inverurie?",
        answer: "The River Don has caused flooding in Inverurie historically, particularly in lower-lying areas. While flood defences have been improved, private drainage maintenance remains important. We can install non-return valves and clear drainage systems to reduce flood risk for your property."
      },
      {
        question: "Do you offer pre-purchase drain surveys in Inverurie?",
        answer: "Yes, we offer comprehensive pre-purchase CCTV drain surveys for properties in Inverurie and the surrounding area. Given the wide age range of housing stock, a drain survey is particularly valuable to identify any issues before you commit to a purchase."
      }
    ],
    caseStudy: "We were called to a Victorian property in Inverurie town centre where multiple drains had backed up simultaneously during heavy rain. Our investigation revealed that tree roots from a mature sycamore in the neighbouring garden had infiltrated the main drainage run at a displaced joint. We used high-pressure jetting to clear the root mass, then applied a sectional pipe reline to seal the joint and prevent regrowth. The entire job was completed within a day without any disruption to the neighbouring property."
  },

  ellon: {
    landmarks: [
      "Ellon Castle Gardens",
      "Ythan Bridge",
      "Ellon Academy",
      "The Meadows",
      "Ellon Golf Club",
      "McDonald Drive",
      "Modley estate",
      "Cromleybank",
      "Formartine and Buchan Way",
      "Ellon Parish Church"
    ],
    drainageProfile: "Ellon is an expanding town on the River Ythan, approximately 16 miles north of Aberdeen. The town has grown considerably with new housing developments on its eastern and western edges, while the original town centre retains older stone-built properties with traditional drainage systems. The River Ythan has historically caused localised flooding in the town, and properties near the river require well-maintained drainage to cope with high water table conditions. The newer housing estates generally have modern drainage with separate surface water and foul water systems, but connections to older combined sewers in the centre can create capacity issues during heavy rainfall. Ellon's growing population means that the local drainage infrastructure is under increasing demand, making regular maintenance particularly important for older properties.",
    localFAQs: [
      {
        question: "Do you cover Ellon and surrounding villages?",
        answer: "Yes, we cover Ellon and the surrounding area including Newburgh, Collieston, and the Ythan valley. Emergency callouts are typically attended within 60 to 90 minutes."
      },
      {
        question: "Are Ellon properties near the River Ythan at risk of drainage issues?",
        answer: "Properties near the River Ythan can experience higher water table levels, which can affect drainage system performance and increase the risk of groundwater infiltration into older pipes. Regular inspection and maintenance help keep drainage systems working effectively in these areas."
      },
      {
        question: "Can you help with drainage for new-build estates in Ellon?",
        answer: "Yes, we attend new-build properties across Ellon's growing housing developments. We can diagnose and resolve blockages, carry out CCTV surveys, and advise on any issues that may be covered by your builder's warranty."
      }
    ],
    caseStudy: "A homeowner in Ellon contacted us after persistent slow drainage from their bathroom. Previous plumbing work had not resolved the issue. Our CCTV survey discovered that a section of the underground drainage had been incorrectly installed with an insufficient fall, causing waste to pool and solidify in the pipe. We excavated the affected section, re-laid the pipe with the correct gradient, and restored the garden surface. The drainage has worked perfectly since the repair."
  },

  peterhead: {
    landmarks: [
      "Peterhead Harbour",
      "Peterhead Prison Museum",
      "Ugie Hospital site",
      "Meethill Circle",
      "Lido",
      "Keith Inch",
      "Boddam Lighthouse",
      "Buchan Ness",
      "Arbuthnot Museum",
      "Inverugie Castle",
      "Broad Street Peterhead",
      "St Peter's Church"
    ],
    drainageProfile: "Peterhead is Scotland's most easterly mainland town and one of the principal fishing ports in Europe. The town's exposed position on the North Sea coast means that properties face harsh weather conditions including salt spray, driving rain, and freezing temperatures, all of which accelerate deterioration of drainage systems. The older parts of town around Broad Street and the harbour feature traditional granite-built properties with drainage systems dating back well over a century. The pink granite that characterises much of Peterhead's architecture sits above a mix of bedrock and coastal deposits that can make excavation work challenging. The town's industrial harbour and fish processing facilities also generate commercial drainage demands that differ from purely residential areas. Newer housing developments to the south and west of the town centre have modern drainage systems, but the coastal environment means that even relatively new pipes can suffer from accelerated corrosion.",
    localFAQs: [
      {
        question: "Do you cover Peterhead?",
        answer: "Yes, we provide full drainage services throughout Peterhead and the surrounding area including Boddam, Cruden Bay, and Mintlaw. Emergency callouts to Peterhead are typically attended within 75 to 100 minutes."
      },
      {
        question: "Does Peterhead's coastal location cause extra drainage problems?",
        answer: "Yes, the salt-laden air and harsh weather conditions on the Peterhead coast can accelerate corrosion and wear on drainage systems. Older cast iron and clay pipes are particularly vulnerable. Regular inspection helps catch deterioration early before it leads to failures."
      },
      {
        question: "Do you provide drainage services for commercial properties in Peterhead?",
        answer: "Yes, we serve commercial properties across Peterhead including harbour-side businesses, fish processing facilities, shops, offices, and industrial units. We offer both emergency response and scheduled maintenance."
      }
    ],
    caseStudy: "A fish processing business near Peterhead harbour called us after repeated drain blockages were disrupting their operations. Our CCTV investigation found significant fat and organic buildup throughout the main drainage run, with several corroded cast iron pipe sections that were catching debris. We carried out a full jetting clearance followed by relining of the worst-affected pipe sections. We then set up a quarterly maintenance schedule to prevent recurrence. The business has reported uninterrupted operations since our work was completed."
  },

  banchory: {
    landmarks: [
      "Banchory High Street",
      "Crathes Castle",
      "Bridge of Dee",
      "Banchory Golf Club",
      "Bellfield Park",
      "King George V Park",
      "Banchory Museum",
      "Scolty Hill",
      "River Dee",
      "Strachan",
      "Durris Forest",
      "Banchory Academy"
    ],
    drainageProfile: "Banchory is a popular residential town set in the Dee valley in Royal Deeside, approximately 18 miles west of Aberdeen. The town's location alongside the River Dee means that water table levels can be elevated, particularly during winter and spring, which affects drainage system performance. The older parts of Banchory around the High Street and the original village feature traditional stone-built properties with ageing drainage systems, while the newer housing developments on the edges of town have modern infrastructure. The rural setting means that some properties in the surrounding area rely on private drainage including septic tanks and treatment plants rather than mains sewerage. The River Dee is an important salmon river with strict environmental protections, which means that drainage work near the river must be carried out carefully to prevent any contamination. Banchory's wooded surroundings also make tree root ingress a common drainage problem for properties with mature gardens.",
    localFAQs: [
      {
        question: "How quickly can you reach Banchory?",
        answer: "We can usually reach Banchory within 60 to 80 minutes for emergency callouts. We also cover the surrounding Deeside area including Aboyne, Torphins, and Strachan."
      },
      {
        question: "Do you service septic tanks in the Banchory area?",
        answer: "Yes, we provide drainage services for properties with private drainage systems including septic tanks and treatment plants. We can diagnose blockages, carry out CCTV surveys of connecting pipework, and advise on system maintenance."
      },
      {
        question: "Are tree roots a common problem in Banchory?",
        answer: "Yes, Banchory's wooded setting means that tree root ingress is one of the most common drainage problems we deal with in the area. Roots seek out moisture in drainage pipes and can infiltrate through even small cracks or displaced joints. Regular CCTV inspection helps identify root ingress before it causes a complete blockage."
      }
    ],
    caseStudy: "We attended a property in Banchory where the external drainage had been flooding the garden during heavy rain. The homeowner was concerned about potential contamination near the River Dee. Our CCTV survey revealed that tree roots from a mature beech tree had completely blocked the main drainage run approximately eight metres from the house. We cleared the roots using high-pressure jetting, then installed a root barrier and relined the affected pipe section to prevent regrowth. The work was completed with full environmental precautions given the proximity to the river."
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
