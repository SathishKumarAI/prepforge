---
qid: ing_83905f96e3__faang__local
question: 'Q: When is durable execution overkill, and what would you use instead?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 470
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:49-05:00'
sources: []
---

**Clarify**  
*Problem:* We’re asked when “durable execution” (i.e., persisting state or side‑effects to survive crashes/restarts) becomes unnecessary, and what lighter alternatives we’d choose.  
*Assumptions:* The system is stateless or can tolerate transient failures; the workload is low latency, high throughput, and cost‑sensitive.

**Approach**  
1. Identify scenarios where durability adds no real benefit (e.g., fire‑and‑forget tasks).  
2. Propose substitutes that satisfy required guarantees with lower overhead.

**Depth**  

| When durable exec is overkill | Why it’s unnecessary | Lightweight alternative |
|------------------------------|-----------------------|-------------------------|
| **One‑off, idempotent jobs** (e.g., sending an email) | Result can be recomputed; duplicate work is harmless. | In‑memory queue + retry logic; use message brokers (Kafka/Redis Streams). |
| **Stateless microservices** | All state lives in a cache or external store; service restarts don’t lose data. | Stateless containers orchestrated by Kubernetes; rely on load balancer health checks. |
| **High‑throughput pipelines** where latency dominates | Persisting each step inflates I/O and GC pressure, hurting throughput. | Streaming frameworks (Apache Flink/Beam) with checkpointing only on failure, not every op. |
| **Transient user interactions** (e.g., UI events) | Users expect immediate feedback; persistence can lag. | Client‑side local storage + eventual sync; optimistic UI updates. |

**Edge Cases**  
- If a job is *not* idempotent, losing it may cause data loss—durability is then required.  
- Network partitions: even lightweight queues need at-least-once guarantees to avoid missing messages.

**Optimize & Communicate**  
Explain that over‑engineering durability inflates latency and cost; by aligning guarantees with business impact we can choose the right tool (e.g., in‑memory queues for fire‑and‑forget, stateless services for microservices). This trade‑off discussion demonstrates clear problem framing, technical depth, and communication—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
