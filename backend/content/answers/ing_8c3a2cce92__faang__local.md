---
qid: ing_8c3a2cce92__faang__local
question: 'Q: When would you use a Disk-based index (like DiskANN) over a RAM-based
  index (HNSW)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 525
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:12-05:00'
sources: []
---

**Clarify**  
You’re asking when a *disk‑resident* ANN index such as **DiskANN** is preferable to an in‑memory graph index like **HNSW**. I’ll assume: (1) the dataset can’t fit in RAM, (2) query latency requirements are moderate, and (3) you have a cost‑per‑GB storage budget.

---

**Approach**  
Compare the two along four axes: *memory footprint*, *query speed*, *update flexibility*, and *deployment constraints*. Decide based on which axis dominates your use case.

---

**Depth**

| Axis | HNSW (RAM) | DiskANN (Disk) |
|------|------------|----------------|
| **Memory** | O(N·d) + graph edges (~10× data). Requires full dataset in RAM. | Stores vectors on SSD; keeps only a small index shard (≤ few GB). |
| **Latency** | ~1–5 ms for 1‑M vectors on GPU/CPU. | 10–50 ms on NVMe, but still sub‑100 ms on HDD if tuned. |
| **Updates** | Dynamic insert/delete with amortized O(log N) time. | Mostly static; rebuild needed for bulk updates. |
| **Scalability** | Limited by RAM; adding > RAM size forces sharding or external memory solutions. | Scales to billions of vectors without extra RAM. |

If your *budget* is the limiting factor (e.g., you can’t afford 64 GB of RAM), DiskANN wins. If you need **sub‑10 ms latency** and frequent updates, HNSW is better.

---

**Edge Cases**

- **Extreme latency tolerance** (≥ 100 ms): both work; choose disk for cost.
- **Very large updates**: HNSW handles them online; DiskANN would require a full rebuild every few hours.
- **GPU‑accelerated inference**: HNSW can run on GPU; DiskANN is CPU‑bound unless you add hybrid caching.

---

**Optimize & Communicate**

Explain to stakeholders: “We’ll pick DiskANN when the dataset size exceeds our RAM budget and latency can be slightly higher. If we need real‑time responses or frequent writes, HNSW is the right choice.” Highlight trade‑offs in a quick table (like above) and confirm assumptions about storage cost, query volume, and update frequency before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
