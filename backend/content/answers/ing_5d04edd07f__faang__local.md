---
qid: ing_5d04edd07f__faang__local
question: 'Explain: ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 456
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:05-05:00'
sources: []
---

**Clarify**  
*Problem*: Explain how ACID guarantees work in the context of ML system design—e.g., for training pipelines, model registry, or inference services.  
*Assumptions*: We’re dealing with distributed data stores (NoSQL/SQL), stateless micro‑services, and need strong consistency for model artifacts.

**Approach**  
1. List ACID properties.  
2. Map each to ML use‑cases: training logs, parameter checkpoints, serving metadata.  
3. Discuss trade‑offs between strict ACID vs eventual consistency in high‑throughput pipelines.

**Depth**  

| Property | Meaning | ML Scenario |
|----------|---------|-------------|
| **Atomicity** | All-or-nothing operations | A checkpoint write must either store all weights and optimizer state or none, preventing corrupt models. |
| **Consistency** | Database remains valid per defined rules | Version tags obey semantic‑versioning constraints; no two concurrent checkpoints share the same version ID. |
| **Isolation** | Concurrent ops don’t interfere | Parallel hyper‑parameter sweeps write to separate branches; transactions serialize writes to shared registry. |
| **Durability** | Once committed, data survives failures | After a model is registered, it’s persisted on replicated storage (S3 + RDS) and backed up via snapshots. |

*Implementation*: Use two‑phase commit across services or rely on a distributed transaction manager (e.g., Google Spanner). For high throughput, employ optimistic concurrency with version vectors; fall back to ACID only for critical writes.

**Edge Cases**  
- Network partitions causing split‑brain: resolve via quorum reads/writes.  
- Long training jobs: ensure checkpoint transactions don’t block inference services—use asynchronous commits.  
- Schema evolution of model metadata: enforce migrations under transaction boundaries.

**Optimize & Communicate**  
Highlight that strict ACID is essential for *model integrity* but can throttle throughput; recommend hybrid designs (eventual consistency + “write‑once” semantics). Explain to interviewers how this balances reliability with scalability, a core FAANG concern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
