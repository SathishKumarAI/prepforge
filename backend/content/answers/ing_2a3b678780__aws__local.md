---
qid: ing_2a3b678780__aws__local
question: 'Explain: Data Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 569
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:59-05:00'
sources: []
---

**Situation (S)**  
At my previous role we built a recommendation engine that served 4 M active users daily. The training pipeline ran nightly on an S3‑backed dataset of 30 TB. When the source region suffered a network outage, our nightly jobs stalled and the model drifted, causing a 12 % drop in click‑through rate (CTR).

**Task (T)**  
I was tasked with designing a robust data replication strategy that would keep the training set up‑to‑date, reduce downtime, and preserve cost efficiency.

**Action (A)**  
1. **Define requirements** – real‑time sync for new logs, weekly bulk sync for historical data, 99.9 % availability, < 5 min latency to retraining, <$50k/month budget.  
2. **Design** –  
   * Use **AWS DataSync** to copy incremental log files from the source EFS to a multi‑AZ **S3 bucket** in the target region.  
   * Trigger an **EventBridge** rule on S3 `ObjectCreated` events that invokes a **Lambda** to update a **DynamoDB** table (acting as a manifest).  
   * For bulk sync, schedule DataSync nightly; for real‑time updates, let the Lambda push changes into an **Amazon Kinesis Data Stream** feeding the training job.  
3. **Scalability & Availability** – DataSync handles parallel transfers across 1 Gbps links; S3 offers 99.999% durability and automatic cross‑region replication if needed. Lambda scales to thousands of concurrent invocations, keeping latency low.  
4. **Cost trade‑offs** – DataSync charges $0.15/GB transferred; with ~2 TB/day this is ~$90/month. DynamoDB and Kinesis add <$10/month. Total < $120/month vs the $500/month baseline for manual re‑ingestion.

**Result (R)**  
After deployment, we saw a 4× reduction in data lag (from 12 h to < 5 min) and restored CTR within 24 hours of outage. The model accuracy improved by 7 % over the next month. Total cost savings were $380/month, and I presented the architecture at AWS re:Invent, earning a “Best Practices” award.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured uninterrupted recommendation quality for millions of users.  
- **Ownership & Dive Deep** – Took full responsibility, dissected failure modes, and engineered a data‑centric solution that balances performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
