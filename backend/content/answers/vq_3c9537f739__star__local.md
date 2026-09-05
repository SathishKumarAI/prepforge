---
qid: vq_3c9537f739__star__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 325
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:43-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce firm, our product catalog search started returning results slower than the SLA allowed—average latency rose from 120 ms to 1.2 s during peak traffic.

**Task:**  
I was tasked with reducing query time for the `SELECT * FROM products WHERE category_id = ? AND price < ?` call so that it stayed under 200 ms while still supporting high read concurrency.

**Action:**  
First, I ran `EXPLAIN ANALYZE` to confirm a full table scan. Then I created a composite B‑tree index on `(category_id, price)`, adding the column order to match the WHERE clause. To avoid write overhead, I switched the table’s storage engine to InnoDB and set `innodb_flush_log_at_trx_commit=2`. I also added a covering index by including `product_name` as an included column so the query could be satisfied entirely from the index. After deployment, I monitored `performance_schema.events_statements_summary_by_digest` to confirm reduced CPU usage.

**Result:**  
Query latency dropped from 1.2 s to 80 ms—an 87% improvement—and the system handled a 3× spike in traffic without new hardware. I learned that careful index design (column order, covering indexes, and write‑side trade‑offs) can dramatically boost read performance while keeping maintenance costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
