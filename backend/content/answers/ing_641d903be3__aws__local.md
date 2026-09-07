---
qid: ing_641d903be3__aws__local
question: 'Explain: Luggage and Handbags — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 639
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:29-05:00'
sources: []
---

**Situation / Task**

When I joined the ML Ops team at a global e‑commerce platform, we had to build a recommendation engine for “Luggage & Handbags.” The data volume was 5 M daily clickstreams + 200 k product images, and latency needed to be <50 ms per request. I was tasked with architecting a data‑intensive pipeline that could scale while keeping costs under $2 k/month.

**Action**

1. **Data ingestion & cataloguing** – Ingested raw logs into Amazon S3 (partitioned by day) and used AWS Glue to crawl, create a crawler‑generated schema, and populate the Data Catalog.  
2. **Feature store** – Built a Feature Store in Amazon SageMaker Feature Store; features such as “last 30 days purchase frequency” and “image similarity score” were updated via nightly Glue jobs (10 min).  
3. **Model training & serving** – Trained a LightGBM model on SageMaker, exported the artifact to S3, then deployed it using Amazon SageMaker Neo for edge‑optimized inference on an EC2 Auto Scaling group behind an ALB.  
4. **Monitoring & cost control** – Enabled CloudWatch metrics and Alarms (CPU > 80 % → add instance). Implemented a daily Lambda that archived old logs to S3 Glacier, saving ~30 % of storage costs.

**Result**

- Latency dropped from 200 ms to **<45 ms**.  
- Recommendation CTR increased by **18 %**, translating to ~$1.2 M incremental revenue quarterly.  
- Monthly spend remained at $1.8 k, a **15 %** cost saving versus the legacy on‑prem solution.

---

### Leadership Principles Anchored

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Designed for sub‑50 ms latency to improve shopper experience; validated with A/B testing. |
| **Ownership** | Took end‑to‑end responsibility: from data ingestion to model deployment and cost monitoring. |
| **Dive Deep** | Analyzed per‑feature impact, tuned Glue jobs, and profiled SageMaker Neo performance. |

### What a Bar‑Raiser Looks For

- **Quantified Impact** – I reported exact CTR lift and revenue numbers.  
- **Depth & Technical Detail** – Specified AWS services (Glue, SageMaker Feature Store, Neo, CloudWatch) and trade‑offs between on‑prem vs serverless.  
- **Learning from Failure** – After the first deployment, latency spiked due to a mis‑configured batch size; I logged the incident, updated the CI pipeline with unit tests for inference, and documented the fix in the knowledge base.

*This experience showcases my ability to build scalable, data‑intensive ML applications that directly drive business results while staying cost‑efficient.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
