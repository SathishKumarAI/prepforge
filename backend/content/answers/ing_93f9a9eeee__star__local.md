---
qid: ing_93f9a9eeee__star__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 357
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:50-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the real‑time delivery matching engine for a food‑delivery startup that had just crossed one million daily orders. The existing polling API caused latency spikes and cost escalated as traffic grew.

**Task:**  
I needed to build an architecture that could ingest location data from thousands of riders and restaurants, match them instantly, and push updates over WebSockets without exceeding our $1M monthly budget.

**Action:**  
I introduced a two‑layer solution: first, we partitioned the city into 10 m² geo‑hash buckets using a Z‑curve scheme so that each bucket held ~200 active orders on average. This allowed O(1) lookups for nearby drivers. Second, I replaced REST polling with a publish/subscribe layer built on Redis Streams and WebSocket endpoints; each driver’s client subscribed to their own geo‑bucket channel. We capped stream retention at 5 minutes and used batching to send bulk updates every 200 ms, reducing bandwidth by ~60%. To keep costs low we spun up the streaming workers only during peak hours and leveraged spot instances.

**Result:**  
The new system cut average match latency from 8 s to 0.7 s, increased order‑to‑pickup time by 30%, and reduced infrastructure spend by 45% in the first quarter. I learned that careful spatial indexing combined with event‑driven transport can turn a monolithic polling service into a scalable, cost‑effective real‑time platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
