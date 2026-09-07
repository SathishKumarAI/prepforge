---
qid: ing_122de0620e__aws__local
question: Should you use a data stream? — Data streams | Elastic Docs
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 511
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:31-05:00'
sources: []
---

**Situation (S)**  
At my previous firm we built a real‑time fraud detection system for credit‑card transactions. The data lake ingested ~10 M events/day, but the model needed sub‑second predictions to block suspicious cards.

**Task (T)**  
Decide whether to process data through an ingest‑to‑model stream or batch‑based pipelines and design a scalable architecture that meets latency and cost targets.

**Action (A)**  
I championed a **Kinesis Data Streams + SageMaker Edge Inference** solution:

1. **Ingest**: Kinesis shards → 10 M events/day, ~5 MB/s.  
2. **Pre‑processing**: Lambda functions enrich with account metadata; results go to S3 for training data and directly to an Amazon SageMaker real‑time endpoint.  
3. **Model**: Trained nightly on Athena‑queried historical data, deployed as a SageMaker **Endpoint** behind an Application Load Balancer (ALB) with auto‑scaling.  
4. **Observability**: CloudWatch metrics + X-Ray tracing for latency; automated retraining triggered by drift alerts.

*Why stream?*  
- **Latency**: 90 % of predictions <50 ms vs. 5–10 s batch.  
- **Cost**: Kinesis + Lambda cost $0.015 per GB processed, ~30 % lower than equivalent EMR batch jobs.  
- **Scalability & Availability**: Multi‑AZ shards, auto‑scaling endpoints; SLA 99.9 %.  

**Result (R)**  
Reduced fraud loss by 18 % in Q2 and cut prediction latency from 7 s to 45 ms, boosting customer trust scores by 12 points. The architecture handled a 4× traffic spike during a promotion without degradation.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Immediate blocking of fraud protects users.  
- **Ownership & Dive Deep** – I led the full design, from ingestion to deployment, and iterated on latency bottlenecks.  

*Bar‑raiser takeaway:* Demonstrates ownership, deep technical reasoning, quantified impact, and a learning loop (drift monitoring → retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
