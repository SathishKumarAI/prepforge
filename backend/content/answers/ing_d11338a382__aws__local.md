---
qid: ing_d11338a382__aws__local
question: 'Explain: High-level architecture — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 421
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:42-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a recommendation engine for a global e‑commerce platform that was struggling to scale during holiday traffic spikes (up to 5× normal load). The goal was to deliver real‑time AI predictions with <200 ms latency while keeping ops cost under $300K/month.

**Action – High‑level Architecture**  
1. **Data Ingestion** – Real‑time clickstream → *Amazon Kinesis Data Streams* (shard count auto‑scaling).  
2. **Feature Store** – Persist engineered features in *DynamoDB Global Tables* + *AWS Glue* for nightly batch enrichment.  
3. **Model Serving** – Containerized TensorFlow models on *Amazon SageMaker Endpoint* with *Multi‑Model Endpoints* (cost‑effective) and *Lambda@Edge* for edge inference during peak traffic.  
4. **Orchestration & Monitoring** – *Step Functions* for pipeline coordination; *CloudWatch Alarms* + *X-Ray* for latency tracing.  

**Result**  
- Latency dropped from 750 ms to <180 ms (95th percentile).  
- Traffic spikes handled with zero downtime, reducing rollback incidents by 93%.  
- Monthly cost decreased by 35% through serverless inference and multi‑model endpoints.

**Leadership Principles Reflected**  
*Customer Obsession* – delivered a faster, more reliable recommendation experience.  
*Ownership & Dive Deep* – I dissected every bottleneck, chose the right AWS services, and iterated on the design until metrics met business targets.  

**Bar‑raiser Takeaway**  
Showcased end‑to‑end ownership, quantified impact with clear KPIs, and learned from a prior over‑provisioning failure to adopt serverless scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
