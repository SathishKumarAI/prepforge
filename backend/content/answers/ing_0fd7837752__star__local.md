---
qid: ing_0fd7837752__star__local
question: 'Explain: LSM-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:07-05:00'
sources: []
---

**Situation** – While leading a data‑pipeline revamp for our e‑commerce recommendation engine, we hit a wall: the nightly batch that updated user click embeddings was hitting disk I/O limits and lagging behind real‑time traffic by 12 minutes.

**Task** – I needed to redesign the persistence layer so it could ingest high‑write bursts from streaming events while still supporting fast range queries for model training, all within our existing storage budget.

**Action** – I compared a traditional B‑Tree index with an LSM‑Tree design. With B‑Trees we’d get O(log n) inserts but each write triggered a random disk seek, ballooning latency under load. Instead, I implemented an LSM‑Tree: small in‑memory memtables flushed to immutable sorted runs on disk, merged lazily during read or background compaction. We used RocksDB’s tiered storage and tuned the merge threshold to keep SST files at ~10 GB each. The write path became sequential, boosting throughput from 1 kW/s to 35 kW/s. Query latency for range scans dropped from 200 ms to under 50 ms because the sorted runs allowed efficient block reads.

**Result** – The new store processed real‑time click streams with <2 s lag, and nightly embedding updates completed in 5 minutes— a 70% reduction in total turnaround. I learned that choosing between B‑Tree and LSM‑Tree hinges on write intensity vs read pattern; LSM excels when writes dominate, while B‑Trees are preferable for low‑write, high‑read workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
