---
qid: ing_48c8d44164__fp__local
question: 'Explain: Summary — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 384
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:07-05:00'
sources: []
---

**Why an index is indispensable for machine‑learning systems**

In any production ML pipeline we repeatedly query a large feature store or model repository. The *fundamental problem* is that naïve scans grow linearly with data size \(N\), while inference latency must stay in the sub‑millisecond regime. An index turns this linear scan into an \(O(\log N)\) lookup, analogous to how a database B‑tree reduces record retrieval from \(O(N)\) to \(O(\log N)\).

**How it works**

An index is essentially a lightweight *probabilistic sketch* of the data: a mapping from a key (e.g., user ID, feature vector hash) to a compact metadata block (offset, size, optional Bloom filter). During query time we consult the index first; if the key exists we fetch only the relevant partition, otherwise we can immediately return “miss” and avoid a full table scan. The design trade‑offs—tree depth vs fan‑out, memory footprint vs false‑positive rate—are governed by classic *information‑theoretic* bounds on entropy: the index must encode enough information to locate data with minimal redundancy.

**Non‑obvious insight**

Most practitioners treat indexing as a database concern. In ML workloads, however, *feature locality* is often highly non‑uniform (e.g., cold starts vs hot users). A static index fails here; instead, adaptive *self‑tuning* indices that monitor access patterns and reshuffle keys in real time can achieve orders‑of‑magnitude speedups without manual re‑balancing. This dynamic re‑organisation is a direct application of online learning principles to system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
