---
qid: vq_97fd9e3342__aws__local
question: What is the difference between Stored Procedure and UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 532
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:49-05:00'
sources: []
---

**Situation – Problem:**  
At my previous company we migrated a legacy reporting system from on‑prem SQL Server to Amazon RDS PostgreSQL. The engineering team asked whether to replace the many stored procedures (SPs) with user‑defined functions (UDFs) for performance and maintainability.

**Task – Decision:**  
I had to decide which approach best aligned with *Customer Obsession* (fast, reliable reports for business users) and *Ownership* (maintainable codebase).

**Action – Technical Dive:**  
1. **SP vs UDF semantics** – SPs execute a sequence of statements, can return result sets or modify state; UDFs are pure functions that return a single value or set‑of‑rows and cannot have side effects.  
2. **Execution model in PostgreSQL** – SPs run as separate transactions (can commit/rollback), while UDFs run inline inside the caller’s transaction, giving them higher throughput but no isolation.  
3. **Performance test** – I rewrote three heavy SPs as set‑returning UDFs and benchmarked on a 4 CPU RDS instance:  
   *SP*: 1.2 s per query; *UDF*: 0.7 s → **42 % speed‑up**.  
4. **Cost & scalability** – UDFs reduced CPU time by ~30 %, cutting monthly RDS cost from $3,200 to $2,300 (≈$900 savings).  

**Result – Impact:**  
Implemented UDFs for 70 % of the reporting workload; report latency dropped from 1.5 s to 0.8 s, improving analyst productivity by **15 %**. The migration was completed within two sprints, with zero downtime and full regression coverage.

---

### Bar‑raiser check  
*Ownership:* I owned the entire evaluation, from requirement gathering to deployment.  
*Dive Deep:* Ran micro‑benchmarks, examined transaction isolation differences, and quantified CPU & cost savings.  
*Quantified Impact:* 42 % performance boost, $900/month saved, 15 % productivity lift.  
*Learning from Failure:* Early attempts with UDFs caused a deadlock due to implicit locking; we added explicit `LOCK TABLE` statements before the function call, turning a potential failure into an opportunity to improve error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
