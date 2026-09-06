---
qid: ing_5f4dec1220__fp__local
question: 'Explain: Common Mistakes — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 476
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:27:32-05:00'
sources: []
---

**Why ACID can mislead ML systems**

When you design a machine‑learning pipeline that writes model checkpoints, logs, or feature stores to a database, the *fundamental* goal is **low‑latency data ingestion with high reliability**.  
ACID guarantees—Atomicity, Consistency, Isolation, Durability—were invented for OLTP workloads where *every* update must be reflected instantly and in strict order. In ML pipelines, however:

| ACID property | ML use‑case | Common mistake |
|---------------|-------------|----------------|
| **Atomicity** | A model is trained on a batch; only after training succeeds should the checkpoint be committed. | Developers wrap the whole pipeline in a single transaction and lock all tables for minutes, causing backpressure. |
| **Consistency** | Feature values must satisfy referential integrity (e.g., user_id exists). | Enforcing strict foreign keys forces redundant pre‑validation steps that duplicate feature extraction logic. |
| **Isolation** | Two concurrent training jobs should not see each other’s intermediate states. | Using *serializable* isolation leads to excessive row locks and deadlocks, especially when many jobs write to the same table. |
| **Durability** | A checkpoint must survive a crash. | Relying on WAL logs alone ignores that checkpoints are often stored in object stores (S3) where eventual consistency applies; insisting on durability slows down writes. |

### Non‑obvious insight  
The *real* bottleneck is not the transaction itself but **the time spent holding locks while waiting for external services** (e.g., feature store, model registry). A lightweight “transaction” that only protects a short critical section—just the write of the final checkpoint or log entry—often yields far better throughput. In practice, many ML systems adopt *optimistic concurrency* (e.g., version numbers) and tolerate occasional retries instead of full ACID isolation.

**Bottom line:** Treat transactions as *scopes for consistency*, not universal guards. Design them to be short, targeted, and aligned with the stochastic, high‑throughput nature of machine‑learning workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
