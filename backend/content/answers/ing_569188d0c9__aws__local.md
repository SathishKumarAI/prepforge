---
qid: ing_569188d0c9__aws__local
question: 'Explain: Strategy 3: Caching — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 437
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:02-05:00'
sources: []
---

**Situation / Task**  
While launching a global SaaS that auto‑pricings subscriptions in real time, I noticed the pricing engine hit our RDS instance 10 M times/day, driving CPU spikes and a $12k/month bill. The goal was to reduce latency for end users and cut costs by at least 30 % without compromising accuracy.

**Action**  
I designed a two‑tier cache:  

1. **In‑memory tier (ElastiCache Redis)** – holds the most frequently accessed price rules (top 5 k products) with a TTL of 60 s, ensuring <2 ms reads.  
2. **Secondary tier (DynamoDB Global Tables)** – serves stale but valid prices for the remaining 95 % of requests; DynamoDB’s on‑demand mode keeps us from over‑provisioning.

I leveraged AWS Lambda to refresh Redis asynchronously when a rule updates, and CloudWatch alarms triggered manual invalidation if latency drifted >10 %. Cost modeling showed we could drop RDS CPU usage by 80 %, reducing the monthly bill from $12k to $3.4k (≈71 % savings). The cache hit ratio climbed from 18 % to 92 %, cutting average response time from 350 ms to 30 ms.

**Result**  
- **Customer Obsession:** Users now see instant price updates, improving conversion by 12 %.  
- **Ownership & Deliver Results:** I owned the migration, validated with A/B testing, and delivered a 71 % cost reduction while keeping SLA >99.9 %.  

**Bar‑raiser takeaways** – ownership of both performance and budget; deep dive into TTL tuning; quantifiable impact on latency and spend; learning loop: we iterated cache size based on real usage patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
