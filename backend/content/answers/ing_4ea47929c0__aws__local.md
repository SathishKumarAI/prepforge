---
qid: ing_4ea47929c0__aws__local
question: 'Explain: ⚡ Caching Fundamentals — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 455
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:03-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a recommendation engine for an e‑commerce platform that served 10 M users daily. The real‑time inference latency had to drop from 1.2 s to <200 ms, and we needed to keep costs under $250k/month.

**Action**  
*Customer Obsession & Ownership:* I mapped the cold‑start and hot‑path data flows, identified a 70 % hit‑rate bottleneck in DynamoDB reads.  
*Dive Deep & Bias for Action:* Built a multi‑tier cache:  

| Tier | Service | Purpose |
|------|---------|---------|
| 1 | **Amazon ElastiCache Redis** (clustered, read replicas) | 90 % of request traffic; TTL 12 h for feature vectors. |
| 2 | **AWS Lambda + API Gateway** | Cache‑aside logic, auto‑refresh on miss. |
| 3 | **CloudFront Edge** | Serve static model artifacts from S3, reducing origin hits by 60 %. |

I added a *cache‑miss* queue (SQS) to trigger background recomputation and used CloudWatch metrics to auto‑scale replicas.

**Result**  
Latency dropped to 150 ms (30 % improvement). Monthly cache cost was $45k, 80 % less than the previous DynamoDB read spend. The system now handles 50 % traffic growth with no additional infra budget.  

**Learning & Bar‑raiser Insight**  
I documented failure cases where stale data caused incorrect recommendations; we fixed this by adding version tags and a strict cache‑invalidation policy. The bar‑raiser looked for ownership (owning the end‑to‑end flow), depth (understanding TTL, replica lag, cost trade‑offs), quantified impact (latency & cost savings), and iterative learning from edge failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
