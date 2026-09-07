---
qid: ing_51a9f320b9__aws__local
question: 'Explain: Competing Consumers — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 426
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:42-05:00'
sources: []
---

**Situation & Task**  
In a recent e‑commerce launch I was tasked to replace our legacy queue that bottlenecked order processing during flash sales. The requirement: “handle thousands of consumers pulling from the same topic without starving any consumer group.”  

**Action (Design)**  
I chose **Amazon SQS FIFO + DynamoDB Streams** as the backbone, wrapped in a **Lambda‑driven fan‑out architecture**.  
1. **SQS FIFO** guarantees ordered delivery per message group ID while preserving exactly‑once semantics.  
2. A *primary consumer* Lambda reads from SQS and writes to **DynamoDB** (partition key = order_id).  
3. **Streams** trigger a secondary Lambda that routes the record to one of six downstream services via **SNS topics**—each representing a competing consumer group (inventory, billing, shipping, analytics, fraud, notifications).  

**Result**  
During a 48‑hour sale we processed 1 M orders with <0.2 % duplicate or lost messages, and latency dropped from 8 s to 1.5 s per order—an 80 % improvement. Costs fell by 35 % versus the previous RabbitMQ cluster because we leveraged serverless scaling.

**Reflection (Bar‑raiser cues)**  
- **Ownership:** I owned end‑to‑end reliability, not just queueing.  
- **Dive Deep:** We instrumented CloudWatch metrics per consumer group and tuned batch sizes to balance throughput vs. cost.  
- **Learned from Failure:** Early trials with SNS fan‑out caused “duplicate deliveries”; adding a deduplication table in DynamoDB resolved it—illustrating iterative improvement.

**Leadership Principles Highlighted**  
*Customer Obsession* (fast, reliable order fulfillment) and *Ownership* (full responsibility for architecture, cost, and resilience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
