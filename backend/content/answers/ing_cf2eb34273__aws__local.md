---
qid: ing_cf2eb34273__aws__local
question: What are the benefits of pub/sub messaging?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 464
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:25-05:00'
sources: []
---

**Situation & Task (Owner/Customer Obsession)**  
When I led the migration of our real‑time analytics pipeline for a global e‑commerce platform, we needed to decouple 15 microservices that produced and consumed user activity events. The goal was to reduce latency by 40 % while keeping cost under $10k/month.

**Action (Dive Deep & Bias for Action)**  
I evaluated SNS + SQS, EventBridge, and Kinesis Data Streams. I chose **Amazon SNS** as the publisher, with **SQS FIFO queues** per consumer to guarantee order and exactly‑once delivery. For cross‑region replication, I added an SNS topic that triggers a Lambda which writes to a DynamoDB global table.  
*Scalability*: SNS can publish millions of messages per second; SQS auto‑scales to the burst rate.  
*Availability*: Both services are 99.999% SLA and region‑redundant by default.  
*Cost*: SNS ~$0.50/1M publishes, SQS $0.40/1M receives—total <$9k/month for our traffic.  
*Trade‑offs*: We forego the fine‑grained filtering of EventBridge to keep latency low.

**Result (Deliver Results)**  
Post‑migration, end‑to‑end latency dropped from 750 ms to 420 ms (44 % improvement). The system handled a 3× traffic spike during flash sales without any failures. Cost remained below the target and we gained a reusable messaging pattern for future services.

**Bar‑raiser cues**  
- Demonstrated ownership of the entire migration, not just a component.  
- Dive deep into AWS pricing models to justify cost savings.  
- Quantified impact (latency %, cost).  
- Learned from early failures when SQS visibility timeout was misconfigured and corrected it before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
