---
qid: ing_cb9f5f8b6c__aws__local
question: 'Explain: Business leaders — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:10-05:00'
sources: []
---

**Situation (S)** – While leading a fintech startup, we needed to launch an ML‑driven fraud detection model that could scale from 5 k to 500 k transactions per day without a data‑center budget.  
**Task (T)** – Design a serverless pipeline that ingests streaming events, runs inference, and stores results in near real‑time.

**Action (A)** – I chose **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for stateless inference (triggered by stream shards), and **Amazon SageMaker Endpoint** wrapped in Lambda for model serving. The Lambda function uses a *container image* with the trained XGBoost model, keeping cold‑start latency < 200 ms. I added an **Amazon DynamoDB Global Table** for results and **AWS Step Functions** to orchestrate retries on failures.  
- **Scalability:** Kinesis scales automatically; Lambda auto‑scales by shard count (up to 10 k concurrent invocations).  
- **Availability:** All services are multi‑AZ with built‑in HA; I configured *reserved concurrency* for critical steps.  
- **Cost:** Spot pricing for Lambda and on‑demand SageMaker endpoints reduced spend by 45 % vs a reserved EC2 cluster.

**Result (R)** – The pipeline processed 550 k transactions/day in < 1 s latency, achieving 99.7 % availability, and cut infra cost from $12k/month to $6.5k/month—**a 46 % savings** while delivering real‑time fraud alerts.

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Delivered instant fraud protection for end users.  
- **Ownership & Dive Deep:** Designed the entire serverless stack, tuned cold starts, and monitored metrics in CloudWatch.  

### Bar‑raiser cues I listened for  
- Quantified impact (46 % cost reduction).  
- Depth of understanding of each AWS component and trade‑offs.  
- Learning loop: after a 2 h outage, we added *Lambda Destinations* to capture failures, improving observability and reducing mean time to recovery from 15 min to < 5 min.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
