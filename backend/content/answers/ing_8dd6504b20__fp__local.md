---
qid: ing_8dd6504b20__fp__local
question: 'Explain: Verify on Both Write and Read — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 378
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:32-05:00'
sources: []
---

**Why verify on both write and read?**

In a distributed ML pipeline the data that drives training—feature vectors, labels, model checkpoints—is stored in commodity storage (object stores, block devices). The *fundamental problem* is *unreliable links*: disks can flip bits, network packets may be dropped or reordered, and nodes can crash mid‑write. If we only checksum on read, a corrupted write will go unnoticed until the data is used; downstream models will silently learn from garbage, yielding catastrophic accuracy loss.

From an **information‑theoretic** viewpoint, each byte carries 8 bits of information plus error‑detecting redundancy (checksum). Writing that redundancy *at the moment of persistence* guarantees that any corruption introduced during the write path (e.g., a transient bus fault) is already flagged. It also turns the storage system into an **atomic checkpoint**: either the data and its checksum are stored together, or nothing is committed—preventing half‑written records that could otherwise be read as valid.

On the **read side**, recomputing the checksum lets us detect *late* corruption (e.g., bit rot in SSDs) and also provides a cheap way to verify integrity without touching the payload again. The non‑obvious insight: by checking on both sides we obtain **end‑to‑end fault tolerance** with only O(1) overhead, whereas single‑side checks leave the system vulnerable to silent data corruption that propagates through the entire ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
