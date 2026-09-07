---
qid: ing_2725bfa1d3__aws__local
question: 'Explain: Q82: DeepSeek V3.2 and V4 publish $0.28/$0.42 per 1M tokens with
  a 98% cache-hit discount and 50% off-peak pricing. Refactor a production LLM architecture
  to fully exploit these.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 505
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:22-05:00'
sources: []
---

**Situation & Task**  
I was responsible for the cost‑driven deployment of our on‑prem LLM pipeline that had become a major expense: $0.45 per 1 M tokens at peak, with only ~60 % cache hit. The new DeepSeek V3.2/V4 pricing ($0.28/$0.42 + 98 % cache discount + 50 % off‑peak) promised a 70 % cost reduction, but required a full architectural overhaul.

**Action (Design & Execution)**  
- **Cache Layer**: Added a Redis cluster (sharded, persistence enabled) in front of the inference service. Every request first checks the cache; hit ratio rose from 60 % to >98 % within two weeks by storing prompt‑response pairs keyed on SHA‑256 hashes.  
- **Batching & Off‑Peak Scheduling**: Implemented a token‑bucket scheduler that aggregates up to 10 k tokens per batch and pushes them during the 02:00–06:00 window (off‑peak). AWS Batch with Spot Instances handled this, cutting compute cost by 40 %.  
- **Model Sharding & Auto‑Scaling**: Deployed DeepSeek V4 on an ECS Fargate cluster with CPU/Memory auto‑scaling tied to cache miss rate. Each container hosts a sharded model instance; scaling triggered when hit ratio fell below 95 %, keeping latency <150 ms.  
- **Monitoring & Alerting**: Grafana dashboards track cache hits, batch sizes, and spot instance utilization. Alerts trigger manual rollback if latency >200 ms.

**Result**  
Within one month the monthly spend dropped from $120k to $36k (70 % savings). Cache hit ratio stabilized at 98.3 %, and inference latency improved by 15 %. The refactor also reduced our carbon footprint by 30 %.

**Learning & Ownership**  
I took ownership of both cost and performance, diving deep into token‑level metrics to uncover the cache bottleneck. By iterating quickly (CI/CD pipelines) and learning from failed batch spikes, we built a resilient, low‑cost LLM service that aligns with Amazon’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
