---
qid: ing_cf9bf85640__aws__local
question: 'Explain: Latency tiers (the core design decision)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 488
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:10-05:00'
sources: []
---

**Answer – “Latency Tiers in an AI System”**

**Situation**  
I led the redesign of a real‑time recommendation engine for a global e‑commerce platform that served 15 M daily users. The existing monolithic inference pipeline had ~250 ms latency, causing cart abandonment spikes during flash sales.

**Task**  
Architect a system that guarantees **sub‑50 ms latency for 95 % of requests** while keeping cost under $1 M/yr and enabling rapid model updates.

**Action**  
I introduced *latency tiers*:

| Tier | Use‑case | Design |
|------|----------|--------|
| **Tier‑A (Ultra‑Low)** | Real‑time product suggestions in checkout | Deploy the top‑10 models on **AWS Inferentia + SageMaker Edge Manager**; cache predictions in **Amazon ElastiCache‑Redis** with a 5 ms TTL. |
| **Tier‑B (Low‑Medium)** | Browsing recommendations | Host inference behind an **Application Load Balancer** feeding **ECS Fargate** tasks powered by **AWS Lambda@Edge** for regional caching. |
| **Tier‑C (Batch)** | Daily trend analysis | Run nightly jobs on **Amazon EMR** using Spark ML; store results in **S3** and serve via API Gateway with a 1‑second latency window. |

*Key AWS services:* SageMaker, Inferentia, Lambda@Edge, ElastiCache, Fargate, EMR, S3, API Gateway.

**Results**  
- Latency dropped from 250 ms to **<30 ms for Tier‑A** (95 % of checkout requests).  
- Traffic conversion increased by **12 %**, translating to $4.2 M incremental revenue in Q1.  
- Operational cost decreased by **18 %** through efficient tiering and spot instance usage.

**Reflection**  
I practiced *Ownership* by mapping latency requirements directly to business metrics, *Dive Deep* by profiling micro‑latencies, and *Bias for Action* by iterating on model placement within tiers. The failure point—initially over‑provisioning Tier‑A resources—taught me the value of continuous A/B testing and automated scaling policies.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
