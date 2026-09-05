---
qid: vq_21f3bc1bbf__star__local
question: What is Table Variable? Explain its advantages and disadvantages.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:24-05:00'
sources: []
---

**Situation:**  
During a quarterly data‑warehouse refresh at my previous company, the ETL team was struggling with slow batch jobs that spooled huge intermediate tables into SQL Server. The nightly job would lock up for hours because of contention on tempdb.

**Task:**  
I needed to redesign the staging layer so that the job could run faster and avoid tempdb thrashing while still keeping memory usage predictable.

**Action:**  
I introduced table variables (`DECLARE @tmp TABLE …`) as temporary storage in the ETL scripts. I defined narrow schemas, added primary keys where necessary, and used them only for short‑lived data sets that fit comfortably in memory. I also compared their performance against `#temp` tables by running identical queries on a sample of 1 M rows, noting CPU cycles and tempdb log writes.

**Result:**  
The job runtime dropped from 3 hours to under 45 minutes, with a 60% reduction in tempdb usage. The trade‑off was that table variables don’t support statistics or indexes beyond primary keys, so for larger data sets I reverted to `#temp` tables. This exercise taught me when to favor in‑memory table variables (small, short‑lived data) versus temp tables (large, complex queries).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
