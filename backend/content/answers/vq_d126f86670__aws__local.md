---
qid: vq_d126f86670__aws__local
question: What is the difference between var and value?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 464
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:36-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While refactoring a nightly ETL pipeline in Glue that shipped to Redshift, I noticed the job was intermittently throwing “var not defined” errors during dynamic schema inference.  
> **Task:** Determine whether my variables were being treated as *values* or *variables* (i.e., mutable references) and fix the logic so the pipeline would run reliably at 4 × throughput with zero failures.  
> **Action:** In PySpark I distinguished between `var`‑style mutable containers (`list`, `dict`) and immutable literals (`int`, `str`). I replaced all in‑place list mutations with new lists (e.g., `new_list = old_list + [x]`) and used `freeze()` on configuration objects. Then, I moved the schema discovery into a separate Glue crawler that writes to DynamoDB for versioned schemas, ensuring deterministic reads.  
> **Result:** The job now succeeds 99.9 % of runs, reducing failure‑to‑success time from ~15 min to <2 min and cutting AWS cost by 18 % (less retry overhead).  

**Leadership Principles Anchored**

- **Ownership & Deliver Results:** Took full responsibility for pipeline reliability and quantified the impact on uptime and cost.  
- **Dive Deep:** Diagnosed subtle mutability bugs that were hidden behind dynamic schema inference.

**Bar‑raiser cues I heard**

1. Clear ownership of problem space.  
2. Depth in understanding Python’s immutability vs. mutability semantics.  
3. Quantified business impact (99.9 % success, 18 % cost reduction).  
4. Learning loop: after the fix, set up automated tests to catch similar issues before they hit production.

**AWS services used**

- **Glue** for ETL orchestration and schema crawling.  
- **DynamoDB** for schema versioning (high‑throughput, low latency).  
- **CloudWatch & XRay** for observability of failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
