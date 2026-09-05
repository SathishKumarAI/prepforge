---
qid: ing_838282c388__star__local
question: 'Explain: CAP and Latency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:20-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine that served millions of users per day. The data pipeline was split across three shards: user profile, item catalog, and interaction logs, all replicated for high availability.

**Task:**  
I had to design the read layer so that latency stayed under 50 ms while still keeping the system highly available during traffic spikes and network partitions.

**Action:**  
First I mapped our architecture onto the CAP theorem. We chose *AP* (available + partition tolerant) because a brief outage would be unacceptable, even if consistency slipped for a moment. To mitigate the loss of strict consistency we implemented vector clocks on each shard to detect diverging writes and used conflict‑resolution policies that favored the latest interaction timestamp. For latency, I introduced a local in‑memory cache per front‑end node (using Redis) with a TTL of 2 seconds, so most reads hit the cache instead of hitting all three shards. We also sharded the cache by user ID to keep hot data in memory and used read‑through logic that automatically refreshed stale entries.

**Result:**  
After deployment we saw read latency drop from an average of 180 ms to 35 ms, keeping 99.9% of requests below our SLA. The system remained fully available during a week‑long network partition without any user‑visible data loss. I learned that in distributed ML systems you can trade strict consistency for availability and use smart caching plus lightweight conflict resolution to keep latency low while still delivering accurate recommendations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
