---
qid: vq_aaf446b84c__star__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:09-05:00'
sources: []
---

**Situation:**  
At my previous company we were hitting a 10‑second latency on the “Orders” report during peak hours. The query pulled all orders for the last month and joined to customers; our DBA team suspected the index strategy was the culprit.

**Task:**  
I needed to analyze the execution plan, determine whether an index scan or seek was being used, and redesign the indexes so that the planner could use a seek instead of scanning the whole table.

**Action:**  
Using SQL Server Management Studio I opened the actual execution plan. The query engine was performing an *Index Scan* on the clustered index for “Orders” because the WHERE clause used a range filter on OrderDate, and no covering index existed. I added a non‑clustered index on (OrderDate, CustomerID) to satisfy both the predicate and the join column. I also rewrote the query to use `INNER JOIN` with an indexed view that pre‑aggregated order counts per customer. The plan now shows an *Index Seek* followed by a small bookmark lookup.

**Result:**  
The report time dropped from 10 s to 1.2 s—a 88% reduction—while CPU usage fell by ~30%. I learned that the key difference between a scan (reading every row in an index) and a seek (jumping directly to matching rows using B‑tree pointers) hinges on selective predicates and proper covering indexes; small changes can yield huge performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
