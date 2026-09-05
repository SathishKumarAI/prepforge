---
qid: ing_d8ba943b79__star__local
question: 'Explain: Core Process — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:21-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the push‑notification subsystem for a health‑tracking app that served 3 million daily users. The existing solution had a 12 % crash rate on Android and a latency of 4 seconds, which hurt engagement during workout sessions.

**Task** – My goal was to build a resilient, low‑latency notification pipeline that could scale to peak traffic (≈300 k concurrent pushes) while keeping the client bundle under 5 MB and ensuring data privacy compliance.

**Action** – I started by mapping the end‑to‑end flow: device registration → topic subscription → message broker → mobile SDK. I chose Firebase Cloud Messaging for its global CDN, but added a custom edge layer in GCP to batch user preferences and apply dynamic throttling based on battery state (using Android’s BatteryManager API). On the server side, I implemented a sharded Redis cache keyed by user region to reduce lookup time from 350 ms to <30 ms. For the mobile SDK, I refactored it into a Kotlin multiplatform library, reducing duplication and enabling lazy loading of notification handlers. I also introduced end‑to‑end instrumentation with OpenTelemetry to surface latency metrics in real time.

**Result** – The new system cut crash rates from 12 % to <0.5 %, lowered average push latency to 1.2 seconds, and increased daily active users by 18 % during the first month post‑deployment. I learned that a modular design—separating registration, routing, and delivery—and proactive monitoring are key to building scalable mobile backends.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
