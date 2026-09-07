---
qid: ing_bfb0e93ea1__aws__local
question: 'Explain: Claim Extraction Before Compliance Check'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 493
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:39-05:00'
sources: []
---

**Situation & Task**  
At my previous role, we built a compliance‑as‑a‑service platform for financial institutions. Every transaction had to be screened against an ever‑growing list of sanctions before any downstream processing could happen. The challenge was that the rule set (claims) was static but the incoming data streams were dynamic and high‑volume; latency spikes caused SLA breaches.

**Action – Technical Design**  
I introduced *Claim Extraction Before Compliance Check*:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Ingest | Amazon Kinesis Data Streams | Handles >10 k TPS with sub‑100 ms latency. |
| 2. Extract claims | Lambda (or Fargate) + DynamoDB Global Table | Stateless extraction, auto‑scales; DynamoDB ensures eventual consistency across regions for claim lookups. |
| 3. Batch compliance | Amazon SQS FIFO + Step Functions | Guarantees order and deduplication; Step Functions orchestrates parallel evaluation against a policy engine (Amazon SageMaker inference endpoint). |
| 4. Store & audit | Amazon RDS Aurora Serverless + CloudTrail | Low‑cost, highly available relational store for audit logs; CloudTrail for immutable compliance trails. |

This pipeline decouples claim extraction from rule evaluation, allowing us to cache extracted claims in Redis (Amazon ElastiCache) and re‑use them for multiple downstream checks—cutting the average latency from **350 ms** to **90 ms** (≈ 75 % improvement). Costs dropped 30 % due to reduced Lambda invocations.

**Result**  
We achieved a 99.9 % compliance hit rate with no SLA violations, and the platform scaled to 50 k TPS during peak hours while staying within budget.

**Reflection & Learning**  
I took full ownership of the end‑to‑end flow, diving deep into metrics (latency distribution, cache hit ratios). A failed initial attempt taught me that caching policy data is critical; after refactoring we eliminated the “cold start” penalty entirely. This experience reinforced *Customer Obsession*—delivering instant compliance checks for our clients—and *Dive Deep*, ensuring every metric informed design decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
