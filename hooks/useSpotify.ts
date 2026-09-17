"use client";

/**
 * Static stub for the newui showcase. The sahilcodex portfolio uses the
 * real `useSpotify` hook (Lanyard + Appwrite + /api/spotify); here we just
 * hand back a single fake track so the Spotify card has something to render
 * without any backend wiring.
 *
 * If you want to wire the real hook in later, replace this file with the
 * version from the portfolio repo (or drop in a fresh fetch) and the
 * Spotify component will pick it up unchanged via its `@/hooks/useSpotify`
 * import.
 */

export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  songUrl: string | null;
  lastPlayedAt?: string;
}

interface UseSpotifyReturn {
  data: SpotifyTrack | null;
  loading: boolean;
  error: string | null;
}

const DEMO_TRACK: SpotifyTrack = {
  isPlaying: true,
  title: "Blinding Lights",
  artist: "The Weeknd",
  albumArt:
    "https://i.scdn.co/image/ab67616d0000b273ef017e899c0547a39e10c1ec",
  songUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
  lastPlayedAt: new Date().toISOString(),
};

export function useSpotify(): UseSpotifyReturn {
  return {
    data: DEMO_TRACK,
    loading: false,
    error: null,
  };
}