---
qid: ing_c61e1af1ed__aws__local
question: 'Explain: Prevent mapping explosions — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 425
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:56-05:00'
sources: []
---

**Situation (S)**  
I was leading a team that built an internal recommendation engine for our e‑commerce platform. The model produced a *mapping* of every user to thousands of product embeddings stored in Elastic Search, which quickly caused “mapping explosions” – the index grew beyond 10 TB and query latency hit 3 s.

**Task (T)**  
Reduce the mapping size by 80% while keeping precision > 92 %. Deliver a solution within two sprints so we could roll out to production without downtime.

**Action (A)**  
1. **Dive Deep into Data** – profiled the index, found that 70 % of terms were unique but had < 5 hits.  
2. **Design a Hybrid Storage Layer** – kept high‑frequency “hot” keys in Elastic Search for sub‑100 ms queries; moved low‑frequency keys to an S3‑backed DynamoDB Global Secondary Index (GSI) with TTL.  
3. **Implemented a Lambda‑driven Rebalancer** that periodically scans the GSI, aggregates rare terms into a compressed *ElasticDoc* blob stored in S3, and updates Elastic Search pointers.  
4. **Automated Testing & Canary Deploys** – used CloudWatch metrics to trigger rollback if latency > 200 ms or error rate > 1%.

**Result (R)**  
- Index size shrank from 10 TB to 2 TB (80 % reduction).  
- Query latency dropped from 3 s to 120 ms (97 % improvement).  
- Cost savings of $18K/month on Elastic Search capacity.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered a faster, cheaper experience for our internal users.  
*Ownership & Bias for Action*: Took end‑to‑end responsibility and executed within sprint limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
