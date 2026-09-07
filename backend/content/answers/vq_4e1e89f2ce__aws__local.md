---
qid: vq_4e1e89f2ce__aws__local
question: What is the difference between a nested UDF and recursive UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 435
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles: Ownership & Dive Deep*  

**Situation:**  
While migrating our nightly ETL pipeline from on‑prem Hadoop to Amazon EMR, I discovered that the job was consuming 4 × more CPU than expected and the run time had doubled. The team suspected a user‑defined function (UDF) issue.

**Task:**  
Determine whether the culprit was a *nested* UDF or a *recursive* UDF, then refactor to reduce cost by at least 30 %.

**Action:**  
I examined the Spark SQL catalog and logged the plan. A **nested UDF** is invoked inside another function (e.g., `COALESCE(customUdf1(col), customUdf2(col))`). It runs once per row for each invocation, leading to repeated serialization/deserialization overhead. A **recursive UDF**, on the other hand, calls itself until a base case is reached—common in parsing hierarchical data—which can cause deep call stacks and stack‑overflow errors if not tail‑recursed.

I rewrote the nested logic into a single `mapPartitions` transformation using a pure Python function (no UDF), reducing per-row overhead. For the recursive part, I implemented an iterative loop with a bounded depth parameter, eliminating recursion entirely.

**Result:**  
CPU usage dropped from 320 % to 95 %, job runtime fell from 45 min to 18 min, and AWS bill for EMR decreased by **$1,200/month** (≈ 30 % cost saving). I documented the findings in a wiki page that now serves as best practice for future data‑engineering projects.  

*What a bar‑raiser looks for:*  
- Clear ownership of performance issue  
- Deep dive into Spark execution plan  
- Quantified impact on cost & time  
- Learning: avoid nested UDFs, prefer iterative logic over recursion in distributed contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
