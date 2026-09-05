---
qid: ing_593384b8e0__star__local
question: 'Explain: Application-to-Application (A2A) — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 335
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:17-05:00'
sources: []
---

**Situation**  
I was leading a migration of our legacy order‑processing system to a microservices architecture on AWS. The new services—order intake, inventory, billing, and shipping—needed to communicate in near real‑time without tight coupling.

**Task**  
Design an inter‑service messaging pattern that would decouple the services, support at least 10 k messages per second, and guarantee at least once delivery while keeping operational overhead low.

**Action**  
I chose Application‑to‑Application (A2A) via Amazon SNS. Each service published domain events to a topic specific to its business area. I used the “fan‑out” pattern: one SNS topic per event type with multiple SQS queues as subscribers, each queue pointing to a Lambda that invoked the consumer microservice. This gave me built‑in retries and dead‑letter handling. To keep latency low, I enabled raw message delivery and set the maximum receive count on the DLQs to 5, after which a CloudWatch alarm would trigger an alert. I also used SNS message filtering to avoid sending irrelevant events to services that didn’t need them.

**Result**  
Message throughput exceeded 15 k msgs/s with sub‑200 ms end‑to‑end latency. The system handled traffic spikes during promotions without any service downtime, and the cost stayed under $0.02 per million messages. I learned that combining SNS fan‑out with SQS filtering gives a robust, scalable A2A pattern that balances reliability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
