---
qid: ing_92edc13200__aws__local
question: 'Explain: Indexing — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 506
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:26-05:00'
sources: []
---

**Situation / Task** – I led a team that built a real‑time recommendation engine for an e‑commerce catalog (15 M SKUs). The challenge was to expose “search as you type” results with <100 ms latency, while keeping monthly cost <$2 M.

**Action** –  
1. **Indexing strategy**: Sharded inverted index on Elasticsearch (Amazon OpenSearch Service) keyed by token → list of product IDs + TF‑IDF scores.  
2. **Scalable architecture**: Each shard runs on an `r6g.large` instance, auto‑scales with CloudWatch metrics; replicas keep 99.9 % availability.  
3. **Caching layer**: Frequently queried prefixes stored in Amazon ElastiCache‑Redis (cluster mode) to avoid disk I/O.  
4. **Cost control**: Spot instances for non‑critical shards, reserved capacity for hot ones; daily snapshot to S3 for backup.  

**Result** – 90 % of queries hit Redis cache, reducing query latency from 350 ms to 70 ms and cutting monthly spend by 35 %. Search accuracy (MAP) improved 12 % after tuning TF‑IDF weights with real user click data.

---

### Leadership Principles Anchored
- **Customer Obsession** – Built a search that feels instant, boosting conversion.  
- **Dive Deep & Ownership** – Diagnosed latency bottlenecks via profiling; took end‑to‑end ownership of the index pipeline.

### Bar‑raiser Checklist
| ✔ | Item |
|---|------|
| Ownership | Owned feature from data ingestion to production monitoring. |
| Dive Deep | Tuned scoring, shard allocation, and caching through metrics. |
| Quantified Impact | 35 % cost savings, 12 % MAP lift, <100 ms latency. |
| Learning | Failed first attempt with a monolithic index; pivoted to sharded design and learned to leverage managed services for resilience. |

This architecture balances **scalability** (auto‑scaled shards), **availability** (replicas + multi‑AZ), **cost** (spot+reserved instances, caching), and **simplicity** (managed OpenSearch + Redis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
