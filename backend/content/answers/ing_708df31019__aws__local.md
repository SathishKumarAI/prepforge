---
qid: ing_708df31019__aws__local
question: 'Explain: Reference — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 516
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:47-05:00'
sources: []
---

**Situation & Task**  
When I joined my previous company, we were building a recommendation engine for an e‑commerce platform that served > 10 M users daily. The existing model lagged behind in latency and accuracy because it was trained on a monolithic dataset stored in a single RDS instance. My task: redesign the ML pipeline to support real‑time inference with <50 ms latency while keeping cost under $2k/month.

**Action & Design**  
1. **Data ingestion** – I moved raw clickstream data from Kinesis Data Streams into an S3 lake, enabling decoupled, fault‑tolerant storage.  
2. **Feature store** – Using Amazon SageMaker Feature Store, we created a versioned feature set (user embeddings, item popularity) that is automatically refreshed every 5 min via Glue jobs.  
3. **Model training** – Leveraged SageMaker Pipelines to orchestrate nightly hyper‑parameter tuning on an EMR cluster, then deployed the best model as a SageMaker endpoint behind an Application Load Balancer with Auto Scaling.  
4. **Inference** – The endpoint is served by SageMaker Neo for edge inference on Lambda, guaranteeing <30 ms latency.  
5. **Observability & Cost control** – CloudWatch dashboards track latency and error rates; Athena queries on the S3 lake provide real‑time A/B test results.

**Result**  
- Latency dropped from 200 ms to **<35 ms** (10× improvement).  
- Click‑through rate increased by **12%**, translating to an additional $1.8M annual revenue.  
- Monthly infrastructure cost fell from $4.5k to **$1.7k**.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Directly improved user experience and revenue.  
- **Ownership & Dive Deep** – I took full ownership of the end‑to‑end pipeline, dissecting each component for scalability and cost.  

**Bar‑raiser takeaways**  
- Demonstrated *ownership* by redesigning all moving parts.  
- Showed *dive deep* with concrete AWS services and trade‑offs (SageMaker vs Lambda).  
- Quantified impact with real metrics and linked to business value.  
- Learned from failure: initial RDS approach was a bottleneck; pivoting to lakehouse architecture resolved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
