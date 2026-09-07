---
qid: ing_7d49c1a91a__aws__local
question: 'Explain: Design the data platform for a company-wide AI assistant.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:39-05:00'
sources: []
---

**Situation & Task**  
When our product team rolled out a company‑wide AI assistant, I was asked to build the underlying data platform that would feed millions of queries per day while keeping latency under 200 ms and staying within a $1M annual budget.

**Action**  
I architected a **serverless, event‑driven pipeline** using **Amazon Kinesis Data Streams** for ingestion, **AWS Glue** for schema cataloging, and **Amazon Athena + S3** for cost‑effective analytics. The assistant’s context model lived in **DynamoDB Global Tables** (multi‑region) to guarantee <10 ms read latency. For real‑time inference I deployed **SageMaker Endpoint** behind an **Application Load Balancer**, auto‑scaling on CPU utilization with a target of 70 %.  

To keep costs low, I enabled **Spot Instances** for the SageMaker training jobs and used **AWS Savings Plans** for EC2. Availability was ensured via **Multi‑AZ deployments** and **Cross‑Region Replication** in DynamoDB. Security followed the principle of least privilege with fine‑grained IAM roles.

**Result**  
Within 3 months, the platform handled 4 million daily requests with a 99.9 % SLA, reducing query latency from 350 ms to 180 ms—a 48 % improvement—and cut operational spend by 30 % versus our legacy on‑prem stack.  

**Bar‑raiser notes**  
*Ownership*: I championed the end‑to‑end data flow and took responsibility for cost & performance.  
*Dive Deep*: I quantified latency, throughput, and cost trade‑offs and iterated based on telemetry.  
*Learning from failure*: After an early outage due to hot‑partitioning in DynamoDB, I introduced adaptive sharding—now a best practice in the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
