---
qid: vq_0ae28dd640__star__local
question: What are the different ways to handle row duplication in a PySpark DataFrame?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:25-05:00'
sources: []
---

**Situation:**  
During a quarterly reporting sprint at my previous company, we ingested raw sales logs from multiple regional data lakes into a central Spark cluster. The downstream analytics team was complaining that the daily KPI dashboards were showing inflated totals—our ingestion pipeline had been introducing duplicate rows.

**Task:**  
I needed to identify all sources of duplication, clean the dataset efficiently within our existing 4‑hour ETL window, and document a repeatable process so future runs stayed clean.

**Action:**  
First, I used `df.explain()` to confirm that duplicates were coming from overlapping partitions. Then I applied three strategies in sequence:  
1. **Deduplication by key** – `df.dropDuplicates(['order_id', 'customer_id'])` for exact matches.  
2. **Approximate dedupe with Bloom filters** – built a `BloomFilter` on the composite key to catch near‑duplicates that differed only by timestamp noise, reducing memory usage.  
3. **Window function** – `row_number()` over a partition of the key ordered by `timestamp` and kept only the first row to preserve the earliest record when timestamps varied. I persisted intermediate results in Parquet with compression to speed up re‑runs.

**Result:**  
The cleaned dataset reduced duplicate rows by 87%, bringing dashboard totals within ±0.5% of ground truth. The new pipeline cut processing time from 4h45m to 3h30m, and the team adopted the Bloom filter step as a standard guardrail in subsequent projects. I learned that combining exact dedupe with probabilistic structures often yields the best trade‑off between accuracy and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
