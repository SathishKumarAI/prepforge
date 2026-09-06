---
qid: ing_90eca9a866__fp__local
question: 'Explain: Write-optimized temporary index table (called buffer index)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 392
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:20-05:00'
sources: []
---

**Why a write‑optimised temporary index?**  
When a bulk load or a large update is performed, the database must track which rows are added, deleted or moved so that the main indexes can be rebuilt efficiently afterward. The naïve approach—updating every primary key in each secondary index as soon as the row arrives—creates an astronomical amount of random I/O and locks contention.  

**Fundamental principle: write‑locality vs read‑globality**  
A buffer index is a *write‑local* structure that records only the changes (insert, delete, or move) for the rows affected by the bulk operation. It stores them in contiguous pages sorted by the key value, exploiting sequential I/O and avoiding random seeks. The main indexes are untouched during the load, so they remain usable for concurrent reads.

**How it works**  
1. **Collect operations**: Each row modification appends a lightweight record (key + action) to the buffer.  
2. **Sort & merge**: At commit time, the buffer is sorted by key and merged with the existing index pages in one pass, producing an updated index that reflects all changes.  
3. **Rollback support**: If the transaction aborts, the buffer can be discarded without touching the main indexes.

**Non‑obvious insight**  
The buffer’s *sequential* nature turns a seemingly expensive “bulk update” into a single linear scan of the index pages—an O(n) operation instead of O(n log n). Because the buffer contains only deltas, it can be compressed aggressively (e.g., run‑length encoding on duplicate keys), reducing both I/O and memory footprint. This delta‑compression trick is often overlooked but yields a 3–5× speedup in high‑throughput ingestion workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
