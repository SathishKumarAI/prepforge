---
qid: ing_3dc908b92d__star__local
question: 'Explain: Reads (Redirects) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 366
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we launched a campaign that required generating millions of custom deep links for partner offers. The internal team was using a simple key‑value store and hitting 2 kB per read, but the traffic spike during the launch pushed latency over 250 ms and our cache hit ratio dropped to 30%.

**Task** – I had to redesign the redirect service so that each short URL resolved in under 80 ms with at least a 95 % cache hit rate while keeping costs low.

**Action** – I broke the problem into three layers:  
1. **Routing layer** – deployed a stateless HTTP API behind a CDN (CloudFront) to serve the first hop.  
2. **Cache layer** – used Redis Cluster with key partitioning by hash of the short code; added a pre‑warm job that bulk‑prefetched hot URLs from DynamoDB into Redis every 5 minutes.  
3. **Persistence layer** – kept the canonical mapping in DynamoDB, but introduced a TTL and a background Lambda to delete stale keys. I also added per‑request metrics via CloudWatch Alarms for latency and hit ratio.

**Result** – Post‑deployment we saw average redirect latency drop from 250 ms to 55 ms, cache hits jump to 97%, and cost savings of ~35% compared to the monolithic approach. The exercise taught me how to balance consistency, scalability, and cost by layering services and using CDN + in‑memory caching for read‑heavy traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
