---
qid: vq_8abcca7064__fp__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 369
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:02-05:00'
sources: []
---

**Broadcast variable – a first‑principles view**

In a distributed engine (e.g., Spark), the *fundamental problem* is that each task runs on a worker node with its own memory, yet often all tasks need the same read‑only data (a lookup table, model coefficients). Naïvely shipping this data to every executor would cause a **network‑to‑disk** shuffle and duplicate storage – an \(O(nk)\) cost where *n* is task count and *k* the dataset size.

A broadcast variable solves this by turning the “copy‑everywhere” operation into a **single write, many reads** pattern:

1. The driver serialises the data once and sends it to each executor.
2. Each executor stores it in an immutable, cached block (in memory or off‑heap).
3. Tasks simply read from that local cache; no shuffle is needed.

This mirrors the principle of **data locality optimisation**: keep data where computation occurs. It also exploits *read‑only* semantics—no write‑back traffic, so network bandwidth is used only once.

A non‑obvious insight: broadcast variables are lazily materialised and can be **compressed** or even **partitioned** across executors if the payload is huge. Thus, they provide a lightweight, probabilistic “broadcast” that balances memory usage against network cost—exactly the trade‑off optimisation seeks in large‑scale data processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
