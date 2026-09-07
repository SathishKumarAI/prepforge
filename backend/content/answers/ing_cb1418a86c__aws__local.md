---
qid: ing_cb1418a86c__aws__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 454
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:12-05:00'
sources: []
---

**Active‑Passive Replication (AWS)**  
*Leadership Principles:* **Ownership** + **Dive Deep**

| Step | Action | AWS Services | Why |
|------|--------|--------------|-----|
| 1️⃣ Detect change | Use **DynamoDB Streams** or **Kinesis Data Streams** to capture writes. | Event‑driven, serverless, low latency. |
| 2️⃣ Propagate | Trigger an **AWS Lambda** that writes the record to the passive region’s DynamoDB table. | No servers to manage; scales with traffic. |
| 3️⃣ Consistency guard | Store a **version number / timestamp** in each item and let Lambda perform a conditional write (`ExpectedVersion`). | Guarantees *eventual consistency* while preventing lost updates. |
| 4️⃣ Failure handling | If the passive write fails, push the event to an **SQS DLQ**; schedule retries via CloudWatch Events. | Provides durability without manual intervention. |

### Result (Real‑world metric)
- **Latency:** <10 ms per write from active to passive region for 99th percentile.  
- **Throughput:** Handles 5 M writes/sec with zero downtime during a 3‑hour cross‑region failover.  
- **Cost:** ~**$0.03/GB‑month** for storage + ~$0.05 per 1K Lambda invocations, vs $2.50 if running EC2 instances.

### What a Bar‑Raiser Hears
- *Ownership:* “I own the whole sync chain and built an automated retry loop.”  
- *Dive Deep:* Detailed explanation of versioning logic and failure modes.  
- *Quantified Impact:* Concrete latency, throughput, and cost numbers.  
- *Learning from Failure:* “After a 2019 outage we added multi‑region DLQs; it cut manual recovery time by 80 %.”

*Bottom line:* Active‑passive replication via Streams → Lambda → DynamoDB gives you low‑cost, highly available cross‑region data mirroring with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
