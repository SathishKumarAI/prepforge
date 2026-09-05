---
qid: ing_765a93fd8c__star__local
question: 'Explain: kind of a real-time update and so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 380
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:33-05:00'
sources: []
---

**Situation** – While leading the feature team at a food‑delivery startup, we noticed that our rider‑dispatch latency was creeping above 3 s during peak hours, causing order abandonment rates to climb from 2% to nearly 5%. The existing polling API over HTTP was too heavy for real‑time rider location updates.

**Task** – Design an end‑to‑end system that could push accurate, sub‑second location changes to both the rider app and the dispatch dashboard, while keeping server cost under our $500k/month budget.

**Action** – I introduced a hybrid Geo‑Hashing + WebSocket solution. First, we partitioned the city into 1 km² Geo‑Hashes and stored each rider’s current hash in Redis with TTL=5s to keep state fresh. The rider app opened a persistent WebSocket to our edge gateway; on every GPS tick (≈2 Hz) it sent only the new hash and delta offset. The gateway used Redis Pub/Sub to fan‑out updates to all subscribers whose bounding box overlapped the hash, filtering out distant riders client‑side. For the dashboard we deployed a lightweight Node service that listened to the same channel and updated the UI via Socket.IO. We also added a fallback HTTP long‑poll for intermittent connectivity.

**Result** – Latency dropped from 3 s to <200 ms on average, and order abandonment fell by 1.8% (≈10,000 orders/month). I learned that coupling coarse spatial indexing with fine‑grained delta streams can dramatically reduce bandwidth while keeping cost low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
