---
qid: ing_c70fcb8e46__aws__local
question: 'Explain: What they emphasise — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:40-05:00'
sources: []
---

**What Sarvam AI Emphasises**

*Leadership Principles:* **Customer Obsession** – we build models that solve real user problems; **Ownership** – end‑to‑end delivery from data ingestion to inference.

**Situation & Task**  
Our client needed a recommendation engine for an e‑commerce platform with 5 M daily users and 10 TB of clickstream logs. They wanted latency <50 ms, >99.9% availability, and cost ≤$2k/month.

**Action**  
1. **Data pipeline** – Kinesis Data Streams → Lambda (pre‑processing) → S3 (raw & curated).  
2. **Model training** – SageMaker Ground Truth for labeling, followed by SageMaker Training with distributed MXNet on spot instances (p3.8xlarge), cutting GPU time from 48 h to 12 h.  
3. **Inference** – SageMaker Real‑Time Endpoint with autoscaling; we added a caching layer in ElastiCache Redis to hit 80% of requests locally, reducing endpoint calls by 60%.  
4. **Monitoring** – CloudWatch Alarms + Evidently for A/B testing new model versions.

**Result**  
- Latency dropped from 120 ms to 35 ms (42% improvement).  
- Revenue uplift: 15% increase in average order value within 3 months.  
- Monthly cost: $1,800 vs projected $3,200.  

**Bar‑raiser Takeaway**  
I owned the entire ML lifecycle, dove deep into profiling to find the cache hit ratio, quantified business impact, and learned that early caching can save both latency and compute costs—an insight we applied to subsequent projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
