---
qid: ing_2c55ae77f2__aws__local
question: 'Explain: your capacity is above your provision capacity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the inference pipeline for a recommendation engine that served 2 M active users daily. Production traffic spiked 4× during holiday season, yet our on‑prem GPU fleet was provisioned for only 0.5× of peak load, causing >30 % latency degradation.

**Action (Dive Deep & Ownership)**  
1. **Capacity audit** – collected per‑second request logs and GPU utilization with CloudWatch and X-Ray. Identified that model batch size was the bottleneck; a 4× increase in requests required ~3× more GPU time due to quadratic scaling of matrix multiplications.  
2. **Elastic inference** – migrated inference jobs to **Amazon SageMaker Endpoint** using **GPU‑optimized `ml.g5.12xlarge` instances** and enabled **auto‑scaling** (min = 4, max = 32).  
3. **Model simplification** – applied *model pruning* (20 % weight removal) and quantization to 8‑bit, cutting inference time by 45 % without affecting NDCG@10 (stayed at 0.67).  
4. **Cost control** – implemented a Spot‑Instance fallback policy, saving ~25 % on GPU spend while maintaining SLA.

**Result**  
- Latency dropped from 1.8 s to <300 ms (99th percentile).  
- Throughput increased by 5×, handling the 4× traffic surge without manual intervention.  
- Monthly inference cost fell from $120k to $90k due to spot usage and model compression.

**Learnings & Bar‑raiser signals**  
I owned the end‑to‑end pipeline, dove deep into telemetry, quantified impact (latency, cost), and iterated quickly—aligning with *Customer Obsession*, *Ownership*, and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
