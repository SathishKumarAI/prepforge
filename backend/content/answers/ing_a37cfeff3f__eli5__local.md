---
qid: ing_a37cfeff3f__eli5__local
question: 'Explain: The ~75ms figure in context — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 232
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:11-05:00'
sources: []
---

Think of a phone call between two friends who live far apart. The “latency” is the tiny pause you hear before your friend’s voice comes through—how long it takes for the signal to travel, get processed, and arrive at their ears. In ElevenLabs’ text‑to‑speech system, that pause is about **75 milliseconds (ms)**.

Why 75 ms? When you type a sentence, the software first turns your words into a digital audio file. That file must be sent over the internet, decoded by the server’s AI model, and streamed back to your device. All those steps—sending data, waiting for a reply, converting text to sound—add up to roughly 0.075 seconds before you actually hear the voice.

So, the 75 ms figure is simply how long it takes from the moment you hit “play” until the first audible word appears, giving users a sense of how snappy or lag‑free the experience feels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
