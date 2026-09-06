---
qid: ing_8302ae98fa__fp__local
question: 'Explain: Cache Crash — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 481
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:42-05:00'
sources: []
---

**Cache Crash – Why a “Fast” layer can become a bottleneck**

In machine‑learning pipelines the *cache* is an implicit form of **locality exploitation**: we keep recently accessed tensors or model checkpoints in fast memory (RAM, SSD, GPU DRAM) to avoid expensive disk I/O.  
The fundamental problem it solves is the *latency asymmetry* between compute and storage. If a cache’s hit‑rate drops below a threshold, every miss forces an I/O round‑trip that dwarfs the cost of the kernel itself. The system then spends most time waiting for data rather than computing.

A crash occurs when the **assumption** that *“most accesses are to a small set of items”* fails. This can happen because:

| Cause | Mechanism |
|-------|-----------|
| **Work‑load drift** | Model weights change dramatically during fine‑tuning, invalidating cached checkpoints. |
| **Data shuffling** | Randomized mini‑batches repeatedly touch new data shards, exhausting the cache. |
| **Non‑deterministic I/O** | Concurrent training jobs interleave and evict each other’s entries (cache contention). |

From an optimization standpoint, a cache behaves like a *greedy* approximation of the optimal memory schedule. It only knows recent usage, not future needs. Thus, when the *access pattern’s entropy increases*, the greedy policy becomes suboptimal and can even cause **catastrophic thrashing**—the very definition of a crash.

### Non‑obvious insight
A cache that is *too large* relative to the working set can paradoxically hurt performance. Excess capacity encourages **over‑commitment**: the system keeps many rarely used items, reducing eviction of truly hot data and inflating memory pressure on the next tier (e.g., DRAM). This is a classic “big cache syndrome” that only appears when profiling at scale.

In short, cache crashes arise when the *predictive* assumption of locality fails; the remedy is to adapt cache size or policy to the actual entropy of access patterns rather than relying on static heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
