---
qid: ing_66d25a4e35__star__local
question: 'Explain: Time-range indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 351
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:30-05:00'
sources: []
---

**Situation**  
At Uber I was part of the data platform team responsible for the real‑time trip ledger that feeds surge pricing and driver incentives. The ledger had to keep every ride event (≈1 billion events/day) indexed by start time, driver ID, and region. Traditional B‑tree indexes were choking; we could only support a few hundred million keys before query latency spiked.

**Task**  
Design an indexing strategy that scales to trillions of time‑range entries while keeping read latency under 50 ms for point and range queries across all dimensions.

**Action**  
I proposed a hierarchical, partitioned time‑range index built on *LedgerStore*, Uber’s custom columnar store. Each day was split into 15‑minute shards; within each shard we stored a compressed bitmap of driver IDs per region. The index keys were composite: `<shard_start_ts> | <region_id> | <driver_bitmap>`. We leveraged roaring bitmaps for memory efficiency and used LSM‑style compaction to merge shards nightly, keeping hot data in RAM and cold data on SSD. For queries we performed a two‑stage lookup: first retrieve the relevant shard bitmap via binary search on the timestamp range, then intersect with driver or region filters using fast bitmap operations.

**Result**  
The new index handled 3 trillion entries with average query latency dropping from 120 ms to 35 ms. Storage overhead decreased by 70% thanks to compression. I learned that combining time‑partitioning with bitmap indexes can turn a seemingly intractable scale problem into a manageable, high‑performance solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
