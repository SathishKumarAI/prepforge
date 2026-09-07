---
qid: ing_44e99d27cd__aws__local
question: 'Explain: Solution — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 504
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:50-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked to rebuild the model‑training pipeline for a real‑time recommendation engine that served millions of users per day. The legacy batch system produced stale features and lagged by hours, hurting CTR by ~12 %.  

**Action**  
I introduced **Event Sourcing** as the core pattern: every user interaction (click, view, purchase) became an immutable event stored in **Amazon Kinesis Data Streams**. A **Lambda** stream processor persisted events to a **DynamoDB** table (as the source of truth) and forwarded them to **S3** for long‑term analytics. Feature vectors were recomputed on demand by a **Step Functions** orchestrated workflow that pulled events, ran them through an **AWS Glue** ETL job, and updated SageMaker training datasets in S3. The model itself was retrained nightly using **SageMaker Pipelines**, then deployed via **ECR + ECS Fargate** to ensure zero‑downtime updates.  

- **Scalability:** Kinesis shards auto‑scale; DynamoDB autoscaling keeps latency < 10 ms even at 5k TPS.  
- **Availability:** Multi‑AZ Kinesis and DynamoDB provide >99.999 % SLA.  
- **Cost:** By persisting only new events, we cut S3 storage by 35 % and avoided recomputing the entire dataset, saving ~$18K/month.  

**Result**  
CTR improved from 8.4 % to 9.6 % (14 % lift) within three months, while training latency dropped from 2 h to under 15 min.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered fresher recommendations that directly increased revenue.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, dissected every component (streaming, storage, training) to optimize cost and performance.  

Bar‑raisers look for ownership, deep technical justification, measurable impact, and a lesson learned—here, the trade‑off between real‑time freshness and batch efficiency guided our design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
