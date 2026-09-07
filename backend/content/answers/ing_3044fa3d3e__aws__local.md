---
qid: ing_3044fa3d3e__aws__local
question: 'Explain: Stage 3: Onsite (4-5 Interviews + Founder Round)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 487
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:23-05:00'
sources: []
---

**Stage 3 – On‑Site (4–5 interviews + Founder round)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation** – I led a cross‑functional team that migrated our legacy ML pipeline to a fully serverless stack on AWS for a high‑traffic recommendation engine.

**Task** – Reduce end‑to‑end inference latency by 30 % while keeping cost < 20 % of the current spend, and ensure 99.9 % uptime during peak traffic (≈ 10 k requests/s).

**Action**  
1. **Design** – Chose Amazon SageMaker for model training/hosting, AWS Lambda + API Gateway for request routing, and Amazon DynamoDB with TTL for cache.  
2. **Scalability** – Leveraged Lambda’s provisioned concurrency to pre‑warm 200 workers; used SageMaker’s multi‑model endpoint to host all models on a single instance pool (10 GB memory).  
3. **Availability** – Deployed across two AZs, used CloudWatch alarms + EventBridge to auto‑scale Lambda and switch traffic via weighted routing in API Gateway.  
4. **Cost** – Implemented spot instances for training; switched from On‑Demand to Savings Plans for SageMaker inference (≈ 35 % savings).  
5. **Metrics** – Latency dropped from 650 ms → 440 ms (33 % improvement); cost fell from $12k/month → $8.4k/month (30 % reduction).

**Result** – Delivered a production‑ready, fully serverless inference pipeline that met the SLA and exceeded performance targets. Post‑deployment A/B tests showed a 12 % lift in conversion rate for personalized recommendations.

**Bar‑raiser takeaways**  
- *Ownership*: I drove the end‑to‑end migration, owning both architecture and operational excellence.  
- *Dive Deep*: Quantified latency & cost metrics; iterated on Lambda concurrency and SageMaker endpoint sizing.  
- *Learned from Failure*: Early prototype hit cold‑start spikes; we introduced warm‑up scripts and re‑architected the cache layer—an iterative, data‑driven fix that strengthened reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
