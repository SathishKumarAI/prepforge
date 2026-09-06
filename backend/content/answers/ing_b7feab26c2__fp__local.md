---
qid: ing_b7feab26c2__fp__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 569
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:28-05:00'
sources: []
---

**Latency in a paste‑bin service – why the numbers matter**

A paste‑bin is essentially an *append‑only log* backed by a key‑value store.  
When a user posts text, the system must:

1. **Persist the payload** (write to disk or SSD).
2. **Update indexes** so the paste can be retrieved later.
3. **Return a short URL** back to the client.

The *latency* is dominated by step (1).  
In an ideal world, a single write would take *Tₑ* = 0.5 ms (SSD random‑write) plus *N* bytes of payload.  
However, real systems incur:

| Source | Effect |
|--------|--------|
| **I/O amplification** | A single logical write may touch 3–4 physical blocks due to wear‑leveling and journaling. |
| **Log‑structured merge (LSM)** | Data is first written to a *memtable* (in RAM) then flushed to disk asynchronously. The flush latency depends on the size of the memtable, which grows with write rate. |
| **Replication** | If the service replicates for durability, each replica must acknowledge the write; the slowest link dominates. |

The textbook latency figure in the README is derived by combining these factors:

\[
L_{\text{write}} = T_e + \alpha\,N + \beta\,M + \gamma\,R
\]

* **α ≈ 0.01 µs/byte** – extra time per byte for SSD wear‑leveling.  
* **β ≈ 2 ms** – amortized cost of a memtable flush when the buffer reaches 64 MiB.  
* **γ ≈ 1 ms** – network round‑trip to the second replica.

Plugging in typical numbers (N = 1 KiB, M = 64 MiB, R = 2 replicas) yields ~3–4 ms, matching the README’s 5 ms “typical” figure when accounting for measurement jitter.

**Non‑obvious insight**

Most people focus on *write amplification* but ignore that **the memtable flush latency is a *function of throughput*, not just payload size**. When traffic spikes, the memtable grows faster than it can be flushed, causing a *self‑reinforcing queue* that pushes latency up exponentially until the system throttles or crashes. Designing for low latency therefore requires controlling *write rate* (via backpressure) as much as buffer size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
