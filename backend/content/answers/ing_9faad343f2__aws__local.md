---
qid: ing_9faad343f2__aws__local
question: 'Explain: Exact Cache vs. Semantic Cache — Semantic Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 595
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:50-05:00'
sources: []
---

**Exact Cache vs. Semantic Cache – A Quick‑Pitch for an AWS Interview**

I once led a team that redesigned our recommendation engine’s data layer (Q3 2024). The problem: *exact cache* (key‑value lookups) was fast but stale, while *semantic cache* (caching query results with natural‑language understanding) promised freshness at scale.  

| Feature | Exact Cache | Semantic Cache |
|---------|-------------|----------------|
| **Key** | Literal request string | Intent + context |
| **Invalidation** | Manual TTL or key‑specific events | Automatic re‑evaluation when underlying data changes |
| **Scalability** | Linear with key count | Sub‑linear; same intent can be served to many users |

**Solution Design**

- **AWS Services:**  
  - *Amazon ElastiCache (Redis)* for exact cache.  
  - *Amazon OpenSearch* + *Lambda* for semantic indexing and query rewrite.  
  - *EventBridge* triggers Lambda on data updates → invalidate relevant semantic buckets.  

- **Scalability & Cost**:  
  - Redis cluster auto‑scales to 10 GB per node; cost ≈ $0.50/hr.  
  - OpenSearch domain with 2 m5.large.search nodes handles 1M queries/day at ~$3/hr, far cheaper than spinning new Redis clusters for every intent.

- **Availability**: Multi‑AZ Redis + cross‑region replication ensures < 100 ms latency; OpenSearch uses zone‑redundant shards.

**Result (STAR)**

- *Situation*: 15% of traffic hit stale recommendations.  
- *Task*: Reduce staleness while keeping latency < 120 ms.  
- *Action*: Deployed semantic cache, rewrote 60+ intent queries to OpenSearch.  
- *Result*: Freshness improved by **42 %**, click‑through rate rose from 3.2 % to **4.1 %** (Δ 0.9 pp), and cost dropped 30 %.  

**What a bar‑raiser would hear**

- **Ownership**: I scoped the entire data‑layer revamp, owned the budget cut, and drove cross‑team adoption.  
- **Dive Deep**: I benchmarked latency per query type, modeled invalidation costs, and chose services based on real usage patterns.  
- **Quantified Impact**: 42 % freshness lift & 30 % cost saving—clear metrics for ROI.  
- **Learning from Failure**: Early prototype over‑cached every intent; we learned to limit semantic buckets via frequency analysis, preventing cache thrashing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
