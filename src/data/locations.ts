export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "aberdeen",
  name: "Aberdeen",
  countyOrRegion: "Aberdeenshire",
  latitude: 57.1497,
  longitude: -2.0943,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "dyce",
    name: "Dyce",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.2069,
    longitude: -2.1856,
  },
  {
    slug: "westhill",
    name: "Westhill",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.1519,
    longitude: -2.2726,
  },
  {
    slug: "portlethen",
    name: "Portlethen",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.0625,
    longitude: -2.1283,
  },
  {
    slug: "stonehaven",
    name: "Stonehaven",
    countyOrRegion: "Aberdeenshire",
    latitude: 56.9636,
    longitude: -2.2100,
  },
  {
    slug: "inverurie",
    name: "Inverurie",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.2866,
    longitude: -2.3743,
  },
  {
    slug: "ellon",
    name: "Ellon",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.3647,
    longitude: -2.0724,
  },
  {
    slug: "peterhead",
    name: "Peterhead",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.5066,
    longitude: -1.7834,
  },
  {
    slug: "banchory",
    name: "Banchory",
    countyOrRegion: "Aberdeenshire",
    latitude: 57.0540,
    longitude: -2.4930,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
