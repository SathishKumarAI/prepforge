---
qid: ing_224798bac5__eli5__local
question: 'Explain: Write Workflow — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 325
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:30:51-05:00'
sources: []
---

Imagine building a giant library that never runs out of books, even when millions of readers open them at once.  
The **Spotify workflow** is the set of rules that decide how each “book” (a song) travels from the writer’s desk to your earbuds.

1. **Upload & Index** – Artists push tracks into a *catalogue* database. A tiny “catalog bot” reads every file, extracts its title, artist, and a short fingerprint, and stores those in an index that lives on fast SSDs.  
2. **Content Delivery Network (CDN)** – When you hit play, the request goes to the nearest CDN edge. The edge checks its local cache; if the song is missing it pulls it from the central storage, streams it, and keeps a copy for future listeners.  
3. **Recommendation Engine** – Behind the scenes, every listening event feeds into a *recommendation pipeline*. It runs simple “who‑likes‑this‑song also likes” calculations on GPUs, then writes personalized “playlists” back to the user profile database.  
4. **Playback & Analytics** – The player streams audio via HTTP while sending tiny telemetry packets (start/stop, skip) to an analytics cluster that aggregates listening habits in real time.

In short: *upload → index → CDN cache → recommendation → playback*, all orchestrated so a song is found, delivered, and suggested faster than you can say “Now playing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
