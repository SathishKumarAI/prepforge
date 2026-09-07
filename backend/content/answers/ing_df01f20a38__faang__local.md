---
qid: ing_df01f20a38__faang__local
question: Should you use an event-driven architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 442
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:42-05:00'
sources: []
---

**Clarify**  
The question asks whether adopting an **event‑driven architecture (EDA)** is appropriate for a machine‑learning (ML) pipeline. I’ll assume we’re building production‑grade ML services that ingest streaming data, trigger model inference, and store results, with the need for scalability, loose coupling, and real‑time responsiveness.

**Approach**  
1. Map core ML workflow to EDA components (producers → events, consumers → models).  
2. Evaluate benefits: decoupled services, horizontal scaling, fault isolation.  
3. Identify drawbacks: added latency, operational complexity, consistency challenges.  
4. Propose hybrid or micro‑service design that uses EDA for real‑time inference but synchronous APIs for training and batch jobs.

**Depth**  
- **Producers** (data collectors, feature stores) publish events to a broker (Kafka, Pub/Sub).  
- **Consumers** (inference services, model update workers) subscribe, enabling parallel scaling.  
- **State management** handled by external stores or event sourcing to avoid race conditions.  
- Latency can be kept < 100 ms with partitioning and low‑overhead serialization.  
- Complexity grows in ensuring idempotent processing; implement retry/back‑off strategies.

**Edge Cases**  
- *Burst traffic*: broker overload → throttling, dynamic scaling of consumers.  
- *Model drift*: events may trigger re‑training pipelines—need versioned models and safe rollback.  
- *Consistent inference*: eventual consistency could lead to stale predictions; use cache invalidation or read‑through patterns.

**Optimize & Communicate**  
Start with a minimal viable EDA for real‑time inference, keep training synchronous to simplify consistency. Measure latency, throughput, and failure rates; iterate by adding compensating actions (dead‑letter queues). When explaining to interviewers: “EDA gives us scalability and loose coupling, but we must carefully manage state and latency. A hybrid approach balances the strengths of both worlds.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
