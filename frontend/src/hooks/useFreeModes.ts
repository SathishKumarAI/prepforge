import { useEffect, useState } from "react";
import { fetchProviders } from "../lib/api";

/**
 * The lenses that cost nothing right now, because a local model is serving them.
 *
 * This is what decides whether hovering a lens tab may generate it. A free lens
 * generates on hover; a billed one switches for free and waits for a press. Owns
 * only that question — not which tab is selected, and not the generation itself.
 *
 * Deliberately not cached across mounts: LM Studio gets started mid-session, and
 * a module-level cache would keep the row gated until a reload.
 */
export function useFreeModes(): { free: Set<string>; localModel: string | null } {
  const [state, setState] = useState<{ free: Set<string>; localModel: string | null }>({
    free: new Set(),
    localModel: null,
  });

  useEffect(() => {
    let live = true;
    fetchProviders()
      .then((p) => live && setState({ free: new Set(p.free_modes), localModel: p.local_model }))
      .catch(() => {}); // backend down or old — everything stays gated, which is the safe side
    return () => {
      live = false;
    };
  }, []);

  return state;
}
