---
qid: vq_97fd9e3342__star__local
question: What is the difference between Stored Procedure and UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:45-05:00'
sources: []
---

**Situation** – While leading a data migration for our e‑commerce platform, the legacy system’s nightly ETL was running too slowly; we needed to rewrite key logic in Snowflake without breaking existing pipelines.  

**Task** – I had to decide whether to encapsulate reusable calculations as Stored Procedures or User‑Defined Functions (UDFs) so that downstream transformations could call them with minimal overhead and clear semantics.  

**Action** – First, I compared the two options:  
- **Stored Procedure** – procedural SQL/JavaScript code that can control flow, handle exceptions, and return multiple result sets. It’s ideal for orchestrating complex ETL steps or calling other procedures.  
- **UDF** – a single expression that returns a scalar value (or table) and can be invoked inline in SELECT statements. UDFs are deterministic, easier to cache, and have lower call overhead when used repeatedly across many rows.  

I created a deterministic UDF for the common price‑adjustment formula, enabling vectorized execution inside large queries. For orchestrating the nightly job (extract, transform, load), I wrote a Stored Procedure that wrapped the UDF calls, logged progress, and handled rollback on failure.  

**Result** – The new pipeline cut nightly runtime from 45 min to 12 min, a 73% improvement, while keeping code maintainable. I learned that UDFs excel for row‑level logic, whereas Stored Procedures are better for procedural orchestration and error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
