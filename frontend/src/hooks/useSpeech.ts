import { useCallback, useEffect, useState } from "react";

/**
 * Read text aloud with the browser's own voice (Web Speech API). No
 * dependency, no network, nothing stored: a spoken answer is a way to review
 * while walking, not a recording.
 *
 * Owns: starting, stopping, and the "is it talking" flag. Does NOT own what
 * gets read — the caller hands over plain text.
 *
 * Chunked by sentence rather than one utterance: Chrome silently stops a
 * single long utterance after ~15 s with some voices. Queued sentences do not
 * hit that, and stopping cancels the whole queue.
 */
export function useSpeech() {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [speaking, setSpeaking] = useState(false);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const speak = useCallback(
    (text: string) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      const parts = text
        .replace(/\s+/g, " ")
        .split(/(?<=[.!?])\s+/)
        .map((p) => p.trim())
        .filter(Boolean);
      if (parts.length === 0) return;
      parts.forEach((part, i) => {
        const u = new SpeechSynthesisUtterance(part);
        // The flag follows the LAST chunk: `end` fires per utterance, and
        // flipping it on the first would show "stopped" while it was still talking.
        if (i === parts.length - 1) u.onend = () => setSpeaking(false);
        u.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(u);
      });
      setSpeaking(true);
    },
    [supported],
  );

  // Leaving the page must not leave a voice talking about it.
  useEffect(() => stop, [stop]);

  return { supported, speaking, speak, stop };
}
