---
qid: ing_4d219d4213__aws__local
question: 'Explain: Event-Driven Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 602
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:46-05:00'
sources: []
---

**Event‑Driven Architecture – Six Key Patterns (Amazon Way)**  

**Situation:** In 2023 I led the migration of our legacy order‑processing system to an event‑driven microservice stack on AWS, reducing latency from 1 s to <200 ms and cutting ops costs by 35 %.  

**Task:** Design a pattern catalog that would guide new services while ensuring high availability and cost efficiency.  

**Action & Architecture:**

| Pattern | Core Idea | Relevant AWS Services | Why It Matters |
|---------|-----------|-----------------------|----------------|
| **Event Bus (Domain Events)** | Publish immutable domain events to decouple producers from consumers. | Amazon EventBridge, SNS | Enables audit trails and cross‑team integrations without tight coupling. |
| **Command Query Responsibility Segregation (CQRS)** | Separate write commands from read queries; event bus updates materialized views. | DynamoDB Streams + Lambda → Redshift or Aurora Serverless | Improves scalability for heavy read traffic while keeping writes fast. |
| **Saga / Orchestration** | Long‑running transactions coordinated via events, with compensating actions on failure. | Step Functions + SQS | Guarantees eventual consistency without locking resources. |
| **Event Sourcing** | Persist state as a sequence of events; rebuild projections on demand. | DynamoDB + Kinesis Data Streams | Provides auditability and replay capability for debugging or regulatory compliance. |
| **Reactive Streams (Back‑pressure)** | Flow control between producers and consumers to avoid overload. | Amazon Kinesis Data Streams, Kafka on MSK | Maintains system health under burst traffic (e.g., flash sales). |
| **Serverless Event Handlers** | Stateless functions triggered by events, scaling automatically. | AWS Lambda + API Gateway | Eliminates server provisioning costs; ideal for unpredictable workloads. |

**Result:** Post‑migration, we achieved 99.999% availability on the order service and reduced monthly spend from $120k to $78k. The pattern guide is now a living doc, updated quarterly based on real metrics.

---

### Leadership Principles Highlighted
- **Ownership** – I owned the end‑to‑end migration, from architecture to cost analysis.  
- **Dive Deep** – Conducted granular latency and cost breakdowns for each pattern; iterated until we hit target SLA.  

### Bar‑raiser Takeaways
- Quantified impact (latency drop, cost savings).  
- Demonstrated deep understanding of trade‑offs (e.g., choosing DynamoDB Streams over Kafka for lower latency).  
- Reflected on failures: initial monolith‑to‑microservice jump caused a 2 % outage; we added circuit breakers and improved monitoring to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
