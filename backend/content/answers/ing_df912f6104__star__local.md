---
qid: ing_df912f6104__star__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 352
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:55-05:00'
sources: []
---

**Situation:**  
At my previous role I was leading a real‑time fraud detection pipeline for an e‑commerce platform that processed ~15k transactions per minute. The ML model produced a “high risk” flag, which had to be stored in our PostgreSQL analytics DB so downstream teams could audit and act on it.

**Task:**  
I needed to guarantee that once the model flagged a transaction as high risk, the record would never disappear or become inconsistent even if a power outage or crash happened right after insertion. This was critical because auditors required an immutable log for compliance.

**Action:**  
I implemented a two‑phase commit across our application and PostgreSQL. First, I wrapped each write in a `BEGIN; INSERT …; COMMIT;` block with the `SERIALIZABLE` isolation level to avoid phantom reads. Second, I enabled WAL archiving and set `synchronous_commit = on` so that every transaction waited for the log to be flushed to disk before acknowledging success. I also added a retry loop that re‑attempted the commit if a crash occurred mid‑write, ensuring idempotency.

**Result:**  
After deployment, our audit logs showed 100 % durability: no high‑risk flags ever disappeared in post‑mortems of two simulated power failures. The pipeline’s latency increased by only 3 ms per record, well within the SLA. I learned that true ACID compliance is a combination of proper transaction isolation, WAL settings, and graceful retry logic—essential for any ML feature flag that feeds into regulated systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
