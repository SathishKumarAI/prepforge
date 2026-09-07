---
qid: ing_a34af2e191__aws__local
question: 'Explain: Introduction to Publish-Subscribe — Using the Publish-Subscribe
  Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 401
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:24-05:00'
sources: []
---

**Situation / Task**  
I was tasked to modernize a legacy inventory‑tracking system that required real‑time updates across multiple microservices (order service, warehouse, analytics). The monolith caused tight coupling and slow rollouts.

**Action**  
I championed a **Publish–Subscribe** architecture using Amazon SNS for topic distribution and Amazon SQS for durable message queues.  
1. **Design** – Each domain event (e.g., `OrderCreated`) is published to an SNS topic. Consumer microservices subscribe via SQS, ensuring at‑least‑once delivery and decoupling.  
2. **AWS services** – SNS (topic), SQS (queue per consumer), Lambda for lightweight processing, DynamoDB Streams for state persistence.  
3. **Scalability & Availability** – SNS scales horizontally; SQS queues auto‑scale with message volume, providing 99.999% availability.  
4. **Cost trade‑offs** – Pay only for messages and requests (≈$0.50 per million). We avoided over‑provisioned EC2 instances.  

**Result**  
- Latency from order creation to inventory update dropped from ~8 s to <200 ms.  
- Throughput increased 5× without added infra cost, keeping monthly spend <$300.  
- Deployment cycles shrank by 40% because services can evolve independently.

**Leadership Principles** – *Customer Obsession* (faster fulfillment for customers) and *Ownership* (taking full responsibility for end‑to‑end reliability).  

**Bar‑raiser takeaways** – Demonstrated ownership, deep dive into AWS messaging patterns, quantified impact, and learned from a failed monolith migration to justify the new design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
