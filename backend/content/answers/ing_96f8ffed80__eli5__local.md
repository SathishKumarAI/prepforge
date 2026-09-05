---
qid: ing_96f8ffed80__eli5__local
question: 'Explain: Ultra-low latency Speech to Text for real-time agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 195
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:17-05:00'
sources: []
---

Imagine a live radio station where the DJ must shout out every word as it comes, and listeners instantly hear a written version on their phones. That’s what ultra‑low latency speech‑to‑text does for real‑time agents—software that turns spoken language into text in a few milliseconds instead of seconds.

The “latency” is the delay between saying a word and seeing it typed out. To keep this delay tiny, the system splits the audio into very short chunks (just a few hundred milliseconds). Each chunk is processed by a fast neural network that guesses the most likely words right away, then stitches the guesses together so the text appears almost as soon as you finish speaking.

The result: customer‑service bots or virtual assistants can read what you’re saying and respond instantly, just like the DJ’s live notes appear on your screen while you still talk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
