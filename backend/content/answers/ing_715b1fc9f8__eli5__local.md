---
qid: ing_715b1fc9f8__eli5__local
question: 'Build a Voice Activity Detector from scratch: detect where speech is present
  in an audio stream. How do you approach it, and how do you make it robust for phone-quality
  Indian-language audio?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 288
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:04-05:00'
sources: []
---

Imagine a detective who watches a crowded street and decides when someone is talking by listening for the “whoosh” of words versus the quiet hum of traffic.  
**Step 1 – Listen in short bursts.** Cut the audio into tiny windows (about 10 ms). For each window compute its *energy*—how loud it is—and a quick spectral sketch (which frequencies are present).  
**Step 2 – Set a flexible threshold.** If energy and a few low‑frequency peaks rise above a level that changes with background noise, flag the window as speech; otherwise mark it silent. The threshold adapts to phone‑quality chatter by looking at recent silence levels.  
**Step 3 – Smooth the verdicts.** Merge consecutive speech windows, drop isolated one‑frame “speech” bursts, and require a minimum duration (≈ 200 ms) before declaring a speaking segment.  
For Indian‑language phones this approach stays robust because it relies on universal acoustic cues—loudness and low‑frequency energy—rather than language‑specific sounds, and the adaptive threshold keeps performance steady even with noisy network chatter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
