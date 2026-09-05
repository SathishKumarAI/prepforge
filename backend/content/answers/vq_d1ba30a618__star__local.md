---
qid: vq_d1ba30a618__star__local
question: What is the difference between UNION and UNION ALL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:58-05:00'
sources: []
---

**Situation:**  
During a quarterly sales dashboard project at my previous company, I had to merge daily transaction logs from two different regional databases into a single reporting table for the BI team. Each region’s log contained millions of rows, and the data overlapped because some customers shopped in both regions on the same day.

**Task:**  
I needed to consolidate the logs into one clean dataset that preserved every unique sale but also avoided duplicate records that would inflate revenue figures by double‑counting cross‑region purchases.

**Action:**  
I wrote a SQL script that used `UNION ALL` to stack the two tables first, ensuring no data loss. After that, I wrapped the result in an outer query with `SELECT DISTINCT` (or alternatively a GROUP BY on transaction_id) to eliminate duplicates. In the final step, I added indexes on the key columns and partitioned the staging table by date to keep the merge performant. The choice of `UNION ALL` was intentional: it’s faster than `UNION` because it skips the implicit duplicate removal step; we handled de‑duplication ourselves where we had more control.

**Result:**  
The merged dataset completed 10 minutes faster compared to a pure `UNION` approach, and revenue calculations were accurate within ±0.01%. I learned that `UNION ALL` is preferable when you need full data fidelity and can manage duplicates downstream, whereas `UNION` is convenient for quick deduplication but may hide performance costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
