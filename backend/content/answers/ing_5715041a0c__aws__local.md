---
qid: ing_5715041a0c__aws__local
question: 'Explain: Real-time recommendations — Recommendation engine & system use
  cases with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:59-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were launching a new e‑commerce line and needed a real‑time recommendation engine that could surface personalized product bundles within 200 ms of a user click. The goal was to lift cross‑sell revenue by at least **15 %** in the first quarter.

**Action**  
I led a squad that designed a hybrid graph + event‑driven architecture:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Graph store (user–item, item–item relationships) | Amazon Neptune | Native graph queries with sub‑second latency; ACID guarantees for consistency. |
| Event ingestion & real‑time updates | Kinesis Data Streams → Lambda → Neptune | Near‑real‑time mutation of the graph as users browse/purchase. |
| Recommendation microservice | ECS Fargate + SageMaker inference endpoint | Containerized Python service that queries Neptune and calls a pre‑trained LightGBM model hosted on SageMaker for scoring. |
| Cache layer | Amazon ElastiCache Redis | 50 % cache hit ratio reduces Neptune load and keeps response <200 ms. |

We used **Neptune’s Gremlin** to compute “similar items” via two‑hop traversal, then weighted by recent purchase frequency from Kinesis aggregates. The Lambda function updates a “hot edge” table that the recommendation service scans first.

**Result**  
Within 90 days we saw a **17 % lift in cross‑sell revenue**, exceeding our target. Latency stayed below 180 ms for 99th percentile traffic, and the cost per request dropped by 30 % after cache tuning.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivered instant, relevant suggestions that improved user experience.  
- **Ownership & Dive Deep** – architected end‑to‑end flow, tuned Neptune queries, and iterated on caching strategy to meet SLA.  

Bar raisers will notice my clear ownership, quantitative impact (15–17 % revenue lift), deep technical dive into graph traversal, and the lessons learned when we had to shift from DynamoDB to Neptune after profiling latency bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
