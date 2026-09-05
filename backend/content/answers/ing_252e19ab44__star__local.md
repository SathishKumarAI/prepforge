---
qid: ing_252e19ab44__star__local
question: 'Explain: Mobile App (Client) — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 379
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:11-05:00'
sources: []
---

**Situation:**  
While working on a cross‑platform streaming prototype, my team was tasked to design the client side of a Spotify‑style app that would handle millions of users and thousands of tracks per second. We had to keep the latency under 300 ms for playback while supporting offline caching and personalized recommendations.

**Task:**  
My responsibility was to architect the mobile client: decide on data flow, caching strategy, real‑time sync, and how to expose the recommendation engine efficiently. The goal was a smooth user experience, minimal battery drain, and easy scalability of new features.

**Action:**  
I chose a reactive architecture using Kotlin/Swift with coroutines/RxJava for asynchronous streams. For media playback I integrated ExoPlayer (Android) / AVFoundation (iOS), adding a local SQLite cache keyed by track ID to allow instant resume. To keep the UI responsive, I built a lightweight GraphQL layer that fetched metadata in batched requests and leveraged Apollo’s caching. Recommendations were served via a lightweight REST endpoint returning top‑N IDs; the client then prefetches thumbnails and audio segments asynchronously. I also implemented an event bus (using LiveData/Combine) so that authentication, playback state, and network changes propagate instantly across modules.

**Result:**  
The prototype achieved <250 ms start‑up latency on a mid‑tier device and dropped battery usage by 15% compared to a naïve implementation. User satisfaction scores rose from 3.2 to 4.6/5 in internal A/B tests, and the architecture allowed us to roll out a “sleep timer” feature with zero downtime. I learned that decoupling data fetching from UI logic and aggressive caching are key to building a scalable mobile music client.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
