---
qid: ing_d3c25568c3__faang__local
question: 'Explain: EventDriven vs Request-Response Communication Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 690
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:49-05:00'
sources: []
---

**Clarify**  
You’re asking for a comparison of two architectural communication patterns that are common when wiring ML services together: **Event‑Driven (publish/subscribe)** versus **Request–Response (synchronous RPC or REST)**. I’ll assume we’re talking about micro‑service‑based ML pipelines (e.g., data ingestion → feature store → model inference) and that the goal is to evaluate how each pattern influences latency, scalability, fault tolerance, and observability.

**Approach**  
1. Define each pattern at a high level.  
2. Map out typical use‑cases in an ML workflow.  
3. Contrast on key dimensions: coupling, throughput, latency, error handling, state management, monitoring.  
4. Summarize trade‑offs and when to pick one over the other.

**Depth**

| Dimension | Event‑Driven (Pub/Sub) | Request–Response |
|-----------|------------------------|------------------|
| **Coupling** | Loose; services publish events without knowing consumers. | Tight; caller must know endpoint, contract. |
| **Throughput / Scalability** | Handles high fan‑out/volume; back‑pressure via queues (Kafka, Pulsar). | Limited by synchronous network round‑trip; bottleneck at the callee. |
| **Latency** | Higher amortized latency; async handoff but can batch or stream. | Low latency for direct calls if both services are co‑located and healthy. |
| **Fault Tolerance** | Retention & replay allow retries, idempotency patterns. | Failures propagate immediately; caller must retry or fallback. |
| **State Management** | Stateless publishers; consumers maintain state (e.g., feature store). | State often shared via the callee’s session or DB; requires coordination. |
| **Observability** | Tracing across event flows can be hard; need correlation IDs, message headers. | Easier to instrument single RPC call; built‑in metrics. |

*Typical ML flow:*  
- **Event‑Driven**: Ingested data → *publish* “data‑ready” → Feature store consumes → publishes “features‑available” → Model service subscribes and starts inference. This decouples ingestion from inference, supports retries on transient storage failures, and scales to millions of events per second.  
- **Request–Response**: Client requests a prediction; model service pulls features synchronously from the feature store. Simpler for low‑volume real‑time inference but blocks the caller while waiting for feature retrieval.

**Edge Cases**  
- *Duplicate messages* in event streams → require idempotent processing.  
- *Ordering guarantees* needed when events depend on each other (use partitioning).  
- *Network partitions* can stall RPC calls; need circuit breakers.  

**Optimize & Communicate**  
For production ML pipelines, start with a hybrid approach: use Event‑Driven for heavy data ingestion and background model training, while reserving Request–Response for low‑latency inference endpoints that require immediate response. Emphasize idempotent handlers, correlation IDs, and back‑pressure controls to keep the system robust. In my narrative, I’d stress how these patterns affect observability dashboards, SLAs, and operational cost—key concerns for FAANG product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
