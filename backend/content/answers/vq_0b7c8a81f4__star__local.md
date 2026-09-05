---
qid: vq_0b7c8a81f4__star__local
question: What is Union, minus and Interact commands?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:26-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with reconciling two customer databases after a merger: one from the legacy CRM (≈ 1.2 M rows) and another from the new marketing platform (≈ 0.9 M rows). The quality report flagged duplicate accounts and orphaned records, so we needed a clean master list.

**Task** – Build an ETL pipeline that would merge the datasets, identify overlaps, remove duplicates, and flag records present in only one source for follow‑up.

**Action** – Using Spark SQL I wrote three set‑operation queries:  
1. **UNION** to combine both tables while preserving all unique customer IDs.  
2. **INTERSECT** to pull the exact rows that existed in both sources, which we used to validate data consistency and generate a “matched” report.  
3. **EXCEPT** (Spark’s equivalent of MINUS) to find records present in one source but missing from the other; these were routed to a manual review queue. I also added window functions to deduplicate on email and kept the most recent update timestamp.

**Result** – The pipeline produced a single master table of 1.5 M unique customers, reduced duplicate churn by 18%, and cut downstream processing time by 25%. I learned how set operations can drastically simplify data reconciliation while keeping the code readable and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
