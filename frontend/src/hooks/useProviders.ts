import { useEffect, useState } from "react";
import { fetchProviders, type Providers } from "../lib/api";

/**
 * Which lenses cost nothing RIGHT NOW.
 *
 * `free_modes` is empty unless LM Studio is serving a model, so this is the one
 * signal that tells the tab row whether hovering a lens is free or a Claude
 * bill. It is shared state, not per-question: every open question asks the same
 * question of the same backend, and a 400ms hover sweep across eight tabs must
 * not become eight probes.
 *
 * Re-probed when the window regains focus, because starting LM Studio is
 * exactly the thing you alt-tab away to do.
 */

/** What we know before the probe answers. `loaded: false` is the difference
 *  between "LM Studio is off" and "nobody has asked yet" — the first is a claim
 *  and the second is the truth for the first second of every page load. */
export interface ProviderState extends Providers {
  loaded: boolean;
}

const UNKNOWN: ProviderState = { local_model: null, free_modes: [], loaded: false };
const NOTHING_FREE: Providers = { local_model: null, free_modes: [] };

let cache: ProviderState | null = null;
let inflight: Promise<void> | null = null;
const listeners = new Set<(p: ProviderState) => void>();

function load(): Promise<void> {
  if (inflight) return inflight;
  inflight = fetchProviders()
    // A backend that is down bills nothing either, and its own error surface is
    // already on the page — so fail to "nothing is free", never to "all free".
    .catch(() => NOTHING_FREE)
    .then((p) => {
      cache = { ...p, loaded: true };
      listeners.forEach((fn) => fn(cache!));
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export function useProviders(): ProviderState {
  const [providers, setProviders] = useState<ProviderState>(cache ?? UNKNOWN);

  useEffect(() => {
    listeners.add(setProviders);
    if (cache) setProviders(cache);
    else void load();
    const refresh = () => load();
    window.addEventListener("focus", refresh);
    return () => {
      listeners.delete(setProviders);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  return providers;
}
