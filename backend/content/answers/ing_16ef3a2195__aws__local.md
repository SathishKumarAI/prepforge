---
qid: ing_16ef3a2195__aws__local
question: 'Explain: Asynchronous Request-Reply — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 646
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:27-05:00'
sources: []
---

**Behavioral (STAR)**  
During my last role at a fintech startup I led the migration of our fraud‑detection pipeline to an event‑driven architecture. **Situation:** Our batch jobs ran every 12 h, causing >30 min latency for high‑value transactions. **Task:** Reduce response time below 2 s while keeping cost <10 % of legacy servers. **Action:** I designed an *asynchronous request–reply* pattern using Amazon SQS + Lambda + DynamoDB Streams. Clients send a message to a FIFO queue; a Lambda worker processes the ML model and writes results to DynamoDB, triggering a stream that pushes a “reply” back to another queue the client polls. **Result:** End‑to‑end latency dropped from 30 min to <2 s, throughput increased by 4×, and infrastructure cost fell 12 %. I documented the process in our Ops playbook, enabling the team to iterate on new models with zero downtime.

---

**Technical / System Design**

| Pattern | Core AWS Services | Scalability & Availability | Cost & Trade‑offs |
|---------|------------------|----------------------------|-------------------|
| **Asynchronous Request–Reply** | SQS (FIFO), Lambda, DynamoDB, SNS/Step Functions | Auto‑scales with message volume; FIFO guarantees order and at‑least‑once delivery. | Pay per request; minimal overhead vs. dedicated servers. |
| **Publish/Subscribe** | SNS topics + SQS subscriptions | Decouples producers from consumers; each subscriber scales independently. | Extra cost for multiple queues, but reduces single point of failure. |
| **Competing Consumers** | SQS standard queue + Lambda shards | Parallel processing via message visibility timeout; high throughput. | Requires idempotent handlers to avoid duplicate work. |
| **Request/Response with Correlation ID** | API Gateway + SQS + Lambda | Uses correlation IDs in message attributes; supports retries & dead‑letter queues. | Slight latency overhead for polling but improves traceability. |
| **Fan‑Out to Batch Workers** | EventBridge → Step Functions → Batch | Orchestrates large batch jobs while maintaining event ordering. | Higher complexity, but enables fine‑grained scaling of compute resources. |
| **Event Sourcing (CQRS)** | DynamoDB Streams + Lambda | Persists every state change; read models can be rebuilt on demand. | Requires careful schema design to avoid write amplification. |

**Why this matters for Amazon:**  
*Customer Obsession* – delivering instant fraud alerts keeps customers safe.  
*Ownership & Dive Deep* – I owned the migration, dissected latency bottlenecks, and tuned each component.  

**Bar‑raiser cues:** clear ownership, data‑driven impact (latency + cost), deep dive into message attributes/visibility timeouts, and a lesson learned: “always idempotent handlers to guard against duplicate processing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
