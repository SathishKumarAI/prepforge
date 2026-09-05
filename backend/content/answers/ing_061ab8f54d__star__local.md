---
qid: ing_061ab8f54d__star__local
question: 'Explain: same server and then from then on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 366
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:05-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the real‑time order‑tracking feature for a food‑delivery app that had just hit 1 M daily active users. The existing polling mechanism caused 30 % higher latency and doubled server costs during peak hours.

**Task** – My goal was to cut end‑to‑end location update latency below 200 ms, keep the infrastructure cost within 10 % of the previous budget, and enable new “live ETA” widgets for customers and drivers.

**Action** – I introduced a two‑layer architecture. First, we partitioned the geographic space using Geo‑Hashing: each driver’s coordinates were hashed into a 12‑character string that maps to a grid cell. This allowed us to keep only relevant drivers in memory per cell and reduced broadcast traffic by ~70 %. Second, I swapped out long‑polling for WebSockets (using Kestrel + SignalR). The server opens a persistent socket with each client; whenever a driver’s GPS ping arrives, the Geo‑Hash index identifies nearby customers and pushes a lightweight JSON payload over the socket. We throttled updates to 1 s per cell to avoid burst traffic while still meeting the latency SLA.

**Result** – Latency dropped from an average of 550 ms to 140 ms, and server CPU usage fell by 45 %. The new system supported a 3× increase in concurrent drivers without additional hardware. I learned that careful spatial indexing combined with persistent connections can dramatically improve real‑time service quality while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
