import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "aberdeen"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('aberdeen');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('aberdeen');
      expect(slugs).toContain('dyce');
      expect(slugs).toContain('westhill');
      expect(slugs).toContain('portlethen');
      expect(slugs).toContain('stonehaven');
      expect(slugs).toContain('inverurie');
      expect(slugs).toContain('ellon');
      expect(slugs).toContain('peterhead');
      expect(slugs).toContain('banchory');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "aberdeen"', () => {
      const loc = getLocationBySlug('aberdeen');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Aberdeen');
    });

    it('returns correct location for "dyce"', () => {
      const loc = getLocationBySlug('dyce');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Dyce');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
