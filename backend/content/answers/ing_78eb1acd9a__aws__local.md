---
qid: ing_78eb1acd9a__aws__local
question: 'Explain: Technical Judgment — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 449
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:50-05:00'
sources: []
---

**Situation / Task**  
In my last role at a fintech startup I was asked to lead the design of an ML‑powered fraud detection pipeline that would process 200 M events per day and deliver alerts in < 1 s. The interview panel expected me to show *technical judgment*—how I’d translate business needs into a scalable, reliable system.

**Action**  
I first scoped the problem using the **Customer Obsession** principle: “If the model missed a fraud, the customer lost money.”  
1. **Requirements & trade‑offs** – Real‑time inference vs batch retraining; latency ≤ 500 ms; 99.9% availability.  
2. **Design** – *Data ingestion*: Kinesis Data Streams → Lambda for preprocessing; *Feature store*: DynamoDB + S3 (partitioned by hour).  
   *Model serving*: SageMaker Endpoint with Multi‑Model Service behind an Application Load Balancer, autoscaling on CPU & GPU metrics.  
   *Retraining*: Glue ETL → Redshift → SageMaker Training jobs scheduled nightly.  
3. **Scalability** – Kinesis shards (1 kpps) + auto‑scaling; DynamoDB provisioned throughput with adaptive capacity.  
4. **Cost vs availability** – Reserved GPU instances for inference saved 30% vs on‑demand, while using a second AZ for failover kept RTO < 2 min.

**Result**  
The system handled 250 M events/day with 99.95% uptime and reduced fraud loss by **23 %** in the first quarter. I also wrote an automated health dashboard (CloudWatch + QuickSight) that cut incident response time from 15 min to < 3 min.

**Reflection**  
I learned that *dive deep* into metrics early prevents hidden bottlenecks, and that clear ownership of each component ensures end‑to‑end reliability—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
