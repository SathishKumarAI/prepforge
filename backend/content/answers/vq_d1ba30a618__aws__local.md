---
qid: vq_d1ba30a618__aws__local
question: What is the difference between UNION and UNION ALL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 347
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:51-05:00'
sources: []
---

**Customer Obsession | Ownership**

> **Situation:** While leading a data‑engineering sprint for our recommendation engine, we needed to merge user‑activity logs from two nightly ETL jobs that ran on different partitions.  
> **Task:** I had to decide whether to use `UNION` or `UNION ALL`.  
> **Action:** I evaluated the semantics: `UNION` removes duplicates (requiring a distinct sort), whereas `UNION ALL` keeps every row and is O(n) in time. I benchmarked both on our 10 GB log tables using Amazon Athena. `UNION` took ~45 s and consumed 1.2 TB of data scanned, while `UNION ALL` finished in 12 s and scanned only 0.3 TB.  
> **Result:** Switching to `UNION ALL` cut query runtime by **73%** and reduced S3 read costs from $4.80 to $1.20 per day. The downstream recommendation model now runs with a lower latency, improving user satisfaction scores by 8 points.

**Dive Deep | Deliver Results**

I documented the trade‑off: `UNION ALL` is preferable when duplicate elimination is unnecessary (as in our case where each log entry is unique across partitions). If duplicates could corrupt analytics, we’d add a de‑duplication step or use `DISTINCT`. This decision exemplifies ownership—making data‑driven choices that directly impact product performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
