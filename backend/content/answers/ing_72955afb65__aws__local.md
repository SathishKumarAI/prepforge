---
qid: ing_72955afb65__aws__local
question: 'Explain: Most Recently Used (MRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 548
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:32-05:00'
sources: []
---

**Answer – MRU (Most‑Recently‑Used) Cache Eviction Policy**

> *Leadership Principles:* **Customer Obsession** + **Dive Deep**  
> I always start by understanding the customer’s pain point—latency in a data‑plane that feeds real‑time analytics—and then dig into the metrics that matter.

### Situation
In my last role, we had an on‑prem Redis cluster serving ad‑targeting requests. The cache hit ratio dropped from 92 % to 65 % during traffic spikes, causing a 3× increase in backend query latency and a $15K/month cost spike.

### Task
I was tasked with redesigning the eviction strategy to keep hot keys alive while still evicting stale ones, without incurring extra operational overhead.

### Action
1. **Requirement Analysis** – The cache held ~10 M keys; read‑write ratio 9:1; eviction policy needed to be deterministic and cost‑effective.
2. **Design Decision** – Adopted an *MRU* strategy for the “hot‑slot” segment (top 20 % of traffic). MRU evicts the key that was accessed most recently, which works when recently used items are *unlikely* to be reused again—common in one‑shot ad impressions.
3. **Implementation** – Leveraged **Amazon ElastiCache for Redis** with a custom Lua script to enforce MRU within a dedicated namespace. Configured `maxmemory-policy` to `volatile-ttl` and set TTLs based on click‑through prediction models.
4. **Scalability & Cost** – Sharded the cache across 3 nodes; each node handles ~1M keys, keeping memory usage <70 %. The change eliminated an extra DynamoDB lookup that previously refreshed stale entries, saving ~$7K/month.

### Result
- Cache hit ratio rose to 94 %, cutting backend latency from 120 ms to 35 ms (–71 %).
- Monthly cost decreased by $22K.
- Operated with a single point of failure removed; the system now auto‑scales via ElastiCache Auto Discovery.

### Learnings
I realized that *MRU* is counterintuitive for most caches, yet perfectly suited when recent access implies “dead” data. The key takeaway: always align eviction logic with actual access patterns rather than default assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
