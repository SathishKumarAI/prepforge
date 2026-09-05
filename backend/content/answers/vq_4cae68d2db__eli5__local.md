---
qid: vq_4cae68d2db__eli5__local
question: What is the purpose of PARTITION BY in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 187
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:55-05:00'
sources: []
---

**What does “PARTITION BY” do?**

Think of a huge library that contains books from all over the world.  
If you want to read every book written in French, you first group the shelves into “French” and “English,” then count or sort only inside the French group.  

In SQL, **`PARTITION BY`** does exactly that for data rows: it tells the database to treat each value (or combination of values) as its own mini‑table.  
When you use window functions—like `ROW_NUMBER()`, `SUM()` over a moving window—the function runs separately inside each partition, never mixing information from other partitions.

So, `PARTITION BY` is the clause that says “group these rows together and apply the calculation only within each group.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
