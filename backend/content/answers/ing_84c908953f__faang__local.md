---
qid: ing_84c908953f__faang__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 490
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:29-05:00'
sources: []
---

**Why Compaction Matters in a Distributed KV Store**

| Step | What to Say |
|------|-------------|
| **Clarify** | “We’re looking at why SSTable compaction is needed and what strategies exist (e.g., size‑tiered, leveled, tiered) in ScyllaDB.”  Confirm that the interviewers want a systems‑level explanation, not just code. |
| **Approach** | 1. Explain immutable writes → SSTables.<br>2. Show read amplification due to multiple SSTables.<br>3. Discuss how compaction merges them back into fewer files, reducing I/O and reclaiming space. |
| **Depth** | *Immutable writes*: each batch is written to a new SSTable (sorted key/value).<br>*Read path*: must merge up to k SSTables; cost ≈ O(k log n).<br>*Space amplification*: deleted keys remain until compaction runs.<br>Compaction strategies:<br>• **Size‑tiered**: merge SSTables of similar size → simple, high write throughput but higher read amplification.<br>• **Leveled (L0‑L∞)**: each level has bounded size; merges are predictable, lower read cost at the expense of more CPU during compaction.<br>• **Tiered**: similar to size‑tiered but with a “hot” tier that gets compacted less frequently. |
| **Edge Cases** | • Heavy deletes → “tombstones” accumulate and slow reads; strategy must compact them early.<br>• Write hotspots → L0 grows quickly, leading to frequent compactions and GC pauses.<br>• Disk failures during compaction: atomic rename ensures consistency. |
| **Optimize & Communicate** | 1. Highlight ScyllaDB’s *auto‑tuning*: it adjusts compaction thresholds based on write load.<br>2. Mention “Compaction Overlap”: when two SSTables cover the same key range, read amplification spikes; mitigated by LSM tuning.<br>3. Conclude: Compaction is the engine that keeps reads fast, storage efficient, and durability intact—critical for a high‑throughput system like ScyllaDB. |

*Word count ≈ 210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
