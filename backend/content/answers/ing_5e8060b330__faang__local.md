---
qid: ing_5e8060b330__faang__local
question: 'Explain: Durability Settings Matter — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 421
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:29-05:00'
sources: []
---

**Durability Settings Matter – ACID Transactions in ML System Design**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* We need to guarantee that once an ML model update (or inference cache) is committed it survives crashes and remains consistent. Ask: “Is durability required for all writes or only critical checkpoints?” Assume a distributed training pipeline with parameter shards and a serving layer. |
| **Approach** | 1️⃣ Identify the *critical* state: model weights, metadata, evaluation metrics.<br>2️⃣ Choose a storage that supports ACID (e.g., PostgreSQL, CockroachDB) or a distributed log (Kafka + RocksDB). <br>3️⃣ Implement transactions around checkpoint writes; use write‑ahead logs for durability. |
| **Depth** | *Technical:* In a parameter server, each shard writes to its own WAL; on commit, flush to disk and acknowledge. Using MVCC ensures isolation: concurrent training jobs don’t see partial updates. *Complexity:* O(1) per write but with log‑flush cost ≈ latency + disk I/O. Trade‑off: stronger durability → higher latency; weaker → risk of stale models. |
| **Edge Cases** | • Node failure during commit → WAL replay restores state.<br>• Network partition causing split‑brain → use consensus (Raft) to elect leader and serialize commits.<br>• Large tensors exceeding log size → chunking + compression before WAL. |
| **Optimize & Communicate** | *Improvements:* Use tiered storage—fast SSD for hot checkpoints, cold tape for long‑term archives. Add a background compactor that merges WAL segments. Narrate: “We keep durability where it matters (model weights), trade off latency by batching small updates, and guarantee recoverability via consensus.” |

*Result:* A system that satisfies ACID guarantees for ML workloads, ensuring model integrity while balancing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
