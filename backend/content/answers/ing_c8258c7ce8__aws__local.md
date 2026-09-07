---
qid: ing_c8258c7ce8__aws__local
question: 'Explain: Requirements Gathering — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 432
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:43-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked to build a **notification service** for a SaaS platform that sends millions of real‑time alerts (email, SMS, push) to users worldwide. The key requirements were: 1️⃣ ultra‑low latency (<200 ms), 2️⃣ 99.999% availability, 3️⃣ cost efficiency, and 4️⃣ ability to scale during marketing campaigns.

**Approach & Action (A)**  
*Customer Obsession + Ownership* – I started by interviewing 30+ users to surface pain points: delayed alerts, spam complaints, and inconsistent delivery rates.  
I designed a **publish‑subscribe microservice** on **Amazon SNS** for topic routing, backed by **AWS Lambda** for transformation and throttling logic, and **SQS FIFO queues** for guaranteed order.  
For high throughput I used **Kinesis Data Streams** to buffer bursts (up to 10 k messages/sec) and a **step‑function workflow** that routes to the appropriate channel.  
To keep costs low, I leveraged **AWS Savings Plans** on Lambda and SQS long‑polling, and used **Amazon CloudWatch metrics + Alarms** for self‑healing retries.

**Result (R)**  
After launch:  
- **Latency dropped from 1.2 s to 150 ms** (average).  
- **Delivery success rate rose from 93% to 99.6%**.  
- **Operational cost reduced by 35%** year‑over‑year.  
During a 10× traffic spike, the system stayed within SLA with zero downtime.

**Reflection (D)**  
I learned that *Dive Deep* into user pain points and *Bias for Action* to iterate quickly are critical. The bar‑raiser will note my ownership of end‑to‑end design, quantitative impact, and ability to pivot after measuring failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
