---
qid: ing_ebddaadfaf__aws__local
question: 'Explain: And let''s say it was actually using — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 564
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:50-05:00'
sources: []
---

**Situation (S)**  
While leading the data‑science team at a ride‑hailing startup, we needed a real‑time surge‑pricing model that could ingest live traffic data from Google Maps APIs and adjust fares within seconds for millions of users.

**Task (T)**  
Design an end‑to‑end ML pipeline that is highly available, scales to 50k requests/second, and costs <$5 M/yr while keeping latency <200 ms.

**Action (A)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest traffic & routing data | **Amazon Kinesis Data Streams** + **Lambda** | Decouples producers from consumers; auto‑scales with traffic. |
| Feature store | **DynamoDB Global Tables** | Low‑latency read/write, multi‑region replication for failover. |
| Model training | **SageMaker Endpoint** (Batch Transform) on spot instances + **EFS** | Cost‑efficient batch jobs; EFS shares feature data across training nodes. |
| Real‑time inference | **SageMaker Hosting Services** behind **Application Load Balancer** | 99.99 % SLA, auto‑scales with target CPU utilization; ALB supports path‑based routing for versioning. |
| Monitoring & retraining | **CloudWatch + SageMaker Model Monitor** + **Step Functions** | Detect drift, trigger retrain every 12 h automatically. |

*Scalability*: Kinesis shards (≥50) handle peak traffic; Lambda concurrency auto‑scales to match.  
*Availability*: Multi‑AZ deployment of ALB + SageMaker endpoints; DynamoDB Global Tables ensure no single point of failure.  
*Cost*: Spot instances for training reduce cost by 70%; serverless components keep fixed costs low.

**Result (R)**  

- Latency dropped from 1 s to **<200 ms**, enabling real‑time fare adjustments.  
- Surge‑pricing accuracy improved by **12%** (validated via A/B testing).  
- Operational cost stayed under **$4.8 M/yr**, 5% below budget.  

**Learning & Ownership**  
I owned the entire pipeline, from data ingestion to deployment, and instituted a “fail‑fast” retraining loop that caught concept drift early—reducing forecast errors by 3×. The bar‑raiser’s key signals were my ownership of cross‑team coordination, deep dive into DynamoDB consistency trade‑offs, and quantified impact on revenue (+$1.2 M/month).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
