---
qid: vq_e10bf2461d__fp__local
question: What is a heap (table on a heap)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 350
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:58-05:00'
sources: []
---

In relational systems the *heap* is the most primitive persistence model: a table stored as an unordered collection of pages, each page holding a variable number of rows.  
Why must we use such a structure? The core problem is **write‑amplification** in bulk inserts or deletes. If a table were kept sorted (e.g., B‑Tree), every insertion would require locating the right leaf and possibly splitting pages—O(log N) I/Os per row. A heap sidesteps this by appending new rows to the last page, achieving amortised O(1) writes and eliminating page‑splitting overhead.

When a query scans the table it must read every page; thus the heap trades write efficiency for read cost, which is acceptable when the workload is write‑heavy or when the data are rarely queried by key. The deeper principle is *geometric locality*: the heap preserves temporal locality (recent rows live together), which can be exploited by caching and by compression schemes that assume consecutive rows share similar values.

**Non‑obvious insight:** A heap’s lack of ordering allows **deferred compaction**—rows marked for deletion remain physically present until a background process reclaims space. This lazy reclamation is crucial in high‑throughput streaming pipelines, where immediate physical removal would otherwise stall producers. The trade‑off is that scans must ignore tombstoned rows, but modern engines use bitmap or vectorized filtering to mitigate the cost, turning the heap’s simplicity into an advantage for append‑only workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
