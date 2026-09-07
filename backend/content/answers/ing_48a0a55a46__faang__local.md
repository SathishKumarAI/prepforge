---
qid: ing_48a0a55a46__faang__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 392
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:40-05:00'
sources: []
---

**Bitmap Indexes – System‑Design Overview**

| Step | What I’d do |
|------|-------------|
| **Clarify** | “We’re looking at a column that takes few distinct values (e.g., gender, status). We want fast equality/IN queries and low write overhead.”  Confirm: cardinality < ~1000, mostly read‑heavy workloads. |
| **Approach** | Build one bit vector per distinct value; each row is a bit position. Store the vectors in a dense or compressed format (RLE, Roaring). Use OR/AND on vectors for queries. |
| **Depth** | *Construction*: Scan table once, set bits. *Query*: Bitwise ops are O(1) per machine word → very fast. *Space*: `rows × distinct / 8` bytes; compression can cut this to <10 %. *Updates*: Setting/clearing a bit is constant time, but batch‑updates may need re‑compression. |
| **Edge Cases** | High cardinality columns (e.g., user IDs) explode space → avoid. Skewed data: one value dominates → compress that vector heavily. Writes during compression can cause contention; use background compaction or immutable vectors with copy‑on‑write. |
| **Optimize & Communicate** | 1️⃣ Use Roaring bitmaps for sparse vs dense mixes. 2️⃣ Cache hot bitmap slices in RAM, spill rest to SSD. 3️⃣ For OLAP pipelines, pre‑aggregate using bitmaps to accelerate group‑by. Explain trade‑offs: read speed ≫ write speed; great for low‑cardinality, read‑heavy tables. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
