---
qid: ing_48dde520d5__faang__local
question: 'Explain: Horizontal Scaling (Scale Out) — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 433
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:25-05:00'
sources: []
---

**Horizontal Scaling (Scale‑Out) for a Service like Instagram**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “We need to add more capacity by adding nodes rather than beefing up one machine.  Assume we’re handling millions of uploads, feeds, and real‑time likes per day; latency <200 ms.” |
| **Approach** | • Stateless API layer → auto‑scaling groups.<br>• Distributed cache (Redis) + CDN for static media.<br>• Sharded image store (S3+RDS/NoSQL).<br>• Event‑driven background workers (Kafka → Celery) for feed generation. |
| **Depth** | *API* – load balancer distributes to stateless containers; session data in Redis, so any node can serve any user.<br>*Storage* – images split across S3 buckets by hash; metadata sharded in a NoSQL DB keyed on user ID.<br>*Feed* – pre‑computed fan‑out jobs write to per‑user feed tables; workers scale with message queue partitions. <br>Complexity: O(1) for cache hits, O(log N) for DB lookups; linear scalability as we add nodes. |
| **Edge Cases** | • Node failure → health checks redirect traffic.<br>• Hot shards (popular users) require re‑sharding or read replicas.<br>• Backward compatibility of API when rolling out new schema changes. |
| **Optimize & Communicate** | “We can start with 3–5 nodes, monitor CPU/memory and request latency, then auto‑scale based on thresholds. Adding a CDN cuts media bandwidth by ~80 %. If feed latency grows, we shard the feed table horizontally.” |

*Key takeaway:* Horizontal scaling turns capacity into commodity hardware; careful sharding, caching, and statelessness let Instagram serve millions of concurrent users with low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
