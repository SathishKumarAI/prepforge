---
qid: ing_2ad4554e9f__star__local
question: 'Explain: Action Approval State Machine — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:48-05:00'
sources: []
---

**Situation** – At a fintech startup, our compliance team flagged that every automated investment recommendation needed human approval before execution. The existing manual workflow stalled the pipeline by an average of 3 days per client, hurting revenue and customer satisfaction.

**Task** – Design and deploy an “Action Approval State Machine” for the Computer Use Agent (CUA) that would automatically route, audit, and approve recommendations while still meeting regulatory audit trails.

**Action** – I architected a finite‑state machine using Apache Kafka Streams to model states: *Draft*, *Pending Review*, *Approved*, *Rejected*. Each state transition was governed by business rules encoded in Drools. The CUA consumed recommendation events from Kafka, applied the FSM logic, and emitted status updates to an Elasticsearch index for real‑time dashboards. For auditability, every transition logged a signed JSON Web Token (JWT) with user ID, timestamp, and change rationale. I also built a lightweight React UI that let compliance officers review pending items; approvals triggered a callback to the CUA via gRPC, instantly moving the recommendation into production.

**Result** – The new state machine cut approval latency from 3 days to under 30 minutes for 90% of cases, increasing on‑time deployments by 45%. Compliance metrics showed zero audit violations over six months. I learned that coupling a clear FSM with event‑driven architecture can turn regulatory bottlenecks into scalable, auditable pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
