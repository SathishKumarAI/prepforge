---
qid: ing_16f9f37441__star__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 339
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:36-05:00'
sources: []
---

**Situation**  
In my last role, we launched a video‑on‑demand service that streamed user‑generated content across North America. Our on‑prem cache layer was filling up quickly, causing latency spikes during peak hours and exceeding our storage budget.

**Task**  
I needed to design a CDN‑style caching strategy that balanced freshness with cost: set appropriate TTLs for different asset types and implement an efficient purging mechanism so updates could propagate within minutes without over‑caching stale data.

**Action**  
I mapped assets into three priority tiers—static thumbnails, dynamic video segments, and metadata. Using Redis Cluster as the edge cache, I assigned 24 h TTL to thumbnails, 5 min for video segments (to support live re‑encoding), and 30 s for metadata. For purging, I built a lightweight HTTP API that accepted a list of asset keys; the service used Lua scripts in Redis to atomically delete entries and publish events to an SNS topic. Edge servers subscribed to this topic and refreshed their local caches on receipt, ensuring eventual consistency with zero manual intervention.

**Result**  
Cache hit rates rose from 68 % to 93 %, cutting backend load by 42 %. Purging latency dropped below 2 s for critical updates, keeping user experience smooth during high‑traffic events. I learned that fine‑tuned TTLs coupled with a lightweight publish/subscribe purge channel can deliver both performance and freshness without over‑engineering the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
