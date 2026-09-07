---
qid: ing_06849550de__aws__local
question: 'Explain: the way over way you could have — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 441
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:38-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined a fintech startup, the product team wanted to move from a monolithic batch‑processing pipeline to something that could deliver real‑time fraud alerts. They asked me to “explain the many meanings of event‑driven architecture” and propose an AWS‑native solution.

**Action (A)**  
I broke the concept into three layers that Martin Fowler describes:

1. **Event sourcing** – store every state change as an immutable event in Amazon Kinesis Data Streams.  
2. **Command & Query Responsibility Segregation (CQRS)** – use Kinesis for commands, feed a DynamoDB global table via Lambda for queries.  
3. **Reactive composition** – orchestrate downstream micro‑services with Step Functions triggered by SNS notifications.

I chose **Amazon EventBridge** to expose events across accounts, **AWS IoT Core** for edge device telemetry, and **SQS FIFO** where ordering was critical (e.g., transaction logs). I benchmarked Lambda cold starts and capped the payload size to keep latency < 200 ms. Cost modeling showed a 30 % reduction versus our legacy EC2 batch job.

**Result (R)**  
The new pipeline processed ~1M events/day with a 99.9 % SLA, cutting fraud‑alert response time from 15 min to under 5 s. Revenue protection increased by **$2 M** in the first quarter.  

**Leadership Principles Reflected**  
- **Customer Obsession** – real‑time alerts directly protect user assets.  
- **Ownership & Dive Deep** – I dissected Fowler’s abstractions, mapped them to AWS services, and validated trade‑offs with metrics.  

Bar‑raisers will note my end‑to‑end ownership, data‑driven impact, and how a failed first attempt (over‑loading SQS) taught me to shard streams for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
