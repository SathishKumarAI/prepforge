---
qid: ing_b54a633664__aws__local
question: 'Explain: User Preference Service — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 433
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:18-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team on the *User Preference Service* for AlgoMaster.io, we were asked to build a notification engine that pushes personalized alerts (price drops, new releases) to millions of users in real time. The goal was to increase engagement by 15 % and reduce churn by 5 %.

**Action**  
I owned the solution architecture:  
- **Event ingestion:** Kafka → Kinesis Data Streams for high‑throughput, low latency.  
- **Preference enrichment:** Lambda + DynamoDB Global Secondary Indexes (user_id, preference_type).  
- **Message broker:** Amazon SNS topics per notification type; dead‑letter queues for failures.  
- **Delivery layer:** Pinpoint for push/email and SES for email.  
- **Observability:** CloudWatch metrics (delivery rate, latency) + X-Ray tracing.  

I applied *Dive Deep* by profiling Lambda cold starts and tuning provisioned concurrency to keep 99th‑percentile latency < 200 ms. I leveraged *Bias for Action* by spinning up a pilot in 3 regions, iterating on message payload size (down‑sized from 1.2 KB to 800 B) which cut SNS costs by ~30 %.  

**Result**  
The rollout increased daily active users by **18 %** and reduced churn by **6 %** within two months. Cost per notification fell from $0.00012 to $0.00008, saving ~$50k annually. I documented lessons (e.g., need for automated retry back‑off) and presented a post‑mortem that became the baseline for future notification services.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Deliver Results*  
> **Bar‑raiser signals:** clear ownership, data‑driven impact, depth of system understanding, continuous learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
