---
qid: ing_241a69a0c0__eli5__local
question: 'Explain: High-level architecture — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 214
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:33:36-05:00'
sources: []
---

Think of a real‑time voice agent like a live radio DJ who listens to your song request and plays the track instantly.  
**Microphone → Audio Capture**: Your voice is picked up by a microphone (the “input device”).  
**Speech‑to‑Text Engine**: The audio stream is fed into a speech recognizer that turns sound waves into written words, just as the DJ’s radio scanner converts your request into text.  
**Dialogue Manager**: This component reads the text and decides what to say next—like the DJ choosing the right track or trivia based on your cue.  
**Text‑to‑Speech Engine**: The chosen reply is turned back into sound waves, so you hear a spoken response, just as the DJ’s microphone plays the song for listeners.  
All these parts work together with very low delay, giving you an instant conversation partner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
