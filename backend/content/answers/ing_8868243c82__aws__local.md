---
qid: ing_8868243c82__aws__local
question: 'Explain: Traffic Funnel and Read QPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 432
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:44-05:00'
sources: []
---

**Situation & Task**  
At Airbnb I led the redesign of our “Traffic Funnel” service that aggregates per‑page request counts for the recommendation engine. The goal was to reduce the 30 % spike in read QPS during peak booking windows while keeping latency <50 ms.

**Action (Technical)**  
I scoped the requirements: *aggregate, cache, and serve* funnel metrics at scale.  
1. **Ingest**: Kafka → Lambda for stream processing.  
2. **Aggregation**: DynamoDB Global Tables with a TTL‑based “bucket” key (`page_id#hour`).  
3. **Cache**: ElastiCache Redis (cluster mode) to surface the last‑10‑minute metrics; read traffic hit ~95 % cache hit ratio.  
4. **API Gateway + Lambda@Edge** for low‑latency reads, backed by CloudFront to serve static funnel dashboards globally.

Scalability was achieved via auto‑scaling DynamoDB and Redis shards; availability through multi‑AZ deployments. Cost was kept <30 % of the legacy monolith by eliminating the on‑prem data warehouse.

**Result**  
Read QPS dropped from 12k to 8k during peak, latency improved to 35 ms average, and we saved ~$200k/month in compute spend. The team adopted this pattern for other telemetry services.

---

> **Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, cheaper insights for product managers.  
- **Ownership & Bias for Action**: Took end‑to‑end responsibility from design to deployment.  

Bar‑raiser check: depth of AWS service trade‑offs, quantified impact (12k→8k QPS), and learning—initially we over‑provisioned Redis; after profiling we tuned shard sizing, proving the “dive deep” mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
