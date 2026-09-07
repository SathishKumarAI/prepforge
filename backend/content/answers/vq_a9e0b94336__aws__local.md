---
qid: vq_a9e0b94336__aws__local
question: WHAT ARE SQL TRIGGERS, AND WHEN SHOULD THEY BE USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 457
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:01-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  
> **Scenario (S):** While revamping a legacy order‑processing system at my previous company, we discovered data drift: inventory counts were frequently out of sync with sales records.  
> **Task (T):** I was tasked to design an automated consistency layer that would enforce integrity without locking the main transaction flow.  
> **Action (A):**  
> 1. Adopted *SQL triggers* on `orders` and `inventory` tables—small, deterministic blocks executed after `INSERT/UPDATE`.  
> 2. Inside each trigger, I used a lightweight `MERGE` statement to adjust the related table atomically.  
> 3. Wrapped the logic in a **Lambda** function triggered by DynamoDB Streams (for eventual‑consistency checks), providing audit logs and rollback capabilities.  
> 4. Deployed the solution on RDS Aurora MySQL, leveraging its *Read Replica* for read‑heavy reporting, thus keeping latency <10 ms for user queries.  
> **Result (R):** Post‑deployment, inventory drift dropped from ~3% to <0.01%, cutting manual reconciliation effort by 90%. The trigger overhead was <2 ms per transaction, and cost increased only 1.5 % due to the additional Lambda invocations.  

**When to use triggers:**  
- **Enforce cross‑table constraints** that cannot be expressed declaratively (e.g., cascading inventory updates).  
- **Maintain audit trails** or trigger downstream processes automatically.  
- **Keep business logic in the database** when you need atomicity and low latency, but avoid over‑using them for complex transformations—use services like Lambda or Step Functions instead.  

*Bar‑raiser cue:* Look for ownership of data quality, deep dive into performance trade‑offs (trigger latency vs. consistency), quantifiable impact, and lessons learned from initial trigger failures (e.g., handling deadlocks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
