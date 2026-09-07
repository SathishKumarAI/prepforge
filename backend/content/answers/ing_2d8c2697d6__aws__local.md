---
qid: ing_2d8c2697d6__aws__local
question: 'Explain: Amazon Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 488
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:19-05:00'
sources: []
---

**Amazon Design – Faang‑style ML interview**

*Leadership Principles:* **Ownership** + **Dive Deep**  
I take full ownership of the end‑to‑end ML pipeline and dive deep into every trade‑off.

---

### Situation
A product team needed a real‑time recommendation engine that could scale to 50 M active users while keeping inference latency under 30 ms.

### Task
Design an architecture that ingests streaming user events, trains models nightly, and serves predictions with high availability.

### Action
1. **Data ingestion** – *Kinesis Data Streams* → *Glue* for schema validation → *S3* raw lake (partitioned by day).  
2. **Feature store** – *Amazon SageMaker Feature Store* for low‑latency lookups; cache in *ElastiCache Redis* to hit < 5 ms.  
3. **Training** – *SageMaker Training Jobs* on spot instances (cost ↓ 70%) with hyperparameter tuning; store models in *S3* and register in *Model Registry*.  
4. **Inference** – *SageMaker Endpoint* behind a *Lambda@Edge* cache layer; auto‑scales to 10k concurrent requests, using *AWS Global Accelerator* for multi‑region failover.  
5. **Monitoring** – *CloudWatch Metrics & SageMaker Model Monitor* to detect drift (threshold 0.02 AUROC drop).  

### Result
- Latency dropped from 70 ms → **< 25 ms** average.  
- Cost per inference cut by **45%** using spot training and edge caching.  
- Accuracy improved 3.8 % relative to baseline (AUROC 0.87 vs 0.83).  

---

### What a bar‑raiser hears
* Clear ownership: “I built the end‑to‑end flow.”  
* Deep dive: specific services, partitioning logic, cache hit ratios.  
* Quantified impact: latency, cost, accuracy numbers.  
* Learning loop: drift monitoring triggers retraining schedule—“When we saw a 0.02 drop, we automatically queued a new training job.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
