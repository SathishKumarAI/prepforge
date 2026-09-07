---
qid: ing_0e2ccd2f86__aws__local
question: 'Explain: Top 5 Redis Use Cases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 531
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:48-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Leadership Principles:** *Customer Obsession* – we build fast, reliable ML pipelines that deliver value to end users; *Ownership* – I own the end‑to‑end flow from data ingestion to inference.

**Situation / Task**  
At my last role I led a project to accelerate feature‑store lookups for an online recommendation engine. The latency budget was 5 ms, yet our RDBMS queries averaged 120 ms and hit the DB tier 3× more often than expected.

**Action**  
I introduced **Redis** as an in‑memory cache with five proven use cases:

1. **Feature Store Caching** – store pre‑computed embeddings (≈200 KB each) for 10M users; `SETEX` ensures TTL of 24 h.  
2. **Hot‑Item Lookup** – LRU eviction (`maxmemory-policy: allkeys-lru`) keeps the top 1 % of items in RAM, reducing cache miss rate from 35 % to <5 %.  
3. **Rate‑Limiting for Model Inference** – `INCR` + `EXPIRE` per user token limits API calls to 50/min, preventing burst spikes.  
4. **Real‑time Feature Refresh** – Pub/Sub via Redis Streams triggers async updates, keeping the cache fresh without polling.  
5. **Distributed Locking for Training Jobs** – `SETNX` guarantees single training instance per model version across EC2 autoscaling groups.

I deployed this on **Amazon ElastiCache for Redis (cluster mode)** with 4 shards, 16 GiB each, achieving 99.9 % availability and a cost of $0.12/GB‑month versus $0.50/GB‑month on DynamoDB.

**Result**  
Latency dropped from 120 ms to <5 ms; cache hit rate rose to 95 %. Production traffic grew 3× without additional compute costs, and we reduced AWS spend by 30 % in the first quarter.  

**Bar‑raiser note:** I demonstrated ownership (full pipeline redesign), dive deep (TTL strategy, eviction policy), quantified impact (latency & cost metrics), and learned from initial mis‑configured memory limits that caused OOM errors—resolved by monitoring `maxmemory-reserved`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
