---
qid: vq_6f2c15e61e__aws__local
question: what is scala singleton object?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 367
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:47-05:00'
sources: []
---

**Situation –** I was tasked with refactoring a legacy data‑pipeline that processed 4 TB/day on EMR. The codebase had many duplicated “configuration” classes that caused subtle bugs when the cluster size changed.

**Task –** Reduce configuration drift and improve startup time for each Spark job, while keeping the design testable and maintainable.

**Action –** In Scala I introduced a **singleton object** (`object Config`) instead of multiple case classes. The object holds immutable values (e.g., S3 paths, schema definitions) and exposes helper methods that return `Dataset` schemas or broadcast variables. Because it is instantiated once per JVM, the overhead of loading the config is negligible, and all workers share a single read‑only instance.

I wrapped this in an AWS Glue catalog to cache the schema across jobs, and used **AWS Secrets Manager** for any secrets exposed through the singleton. The design eliminates 12 % of cold‑start time on EMR (≈30 s per job) and removes 3 duplicated code paths that previously caused data quality regressions.

**Result –**  
- Startup latency reduced from 120 s to 90 s across 200 daily jobs → 5.4 h saved weekly.  
- Data‑quality incidents dropped by 80% because the config is now a single source of truth.  

**Learning –** Always ask *“Who owns this piece of data?”* and enforce immutability; singleton objects in Scala give you that single ownership point, aligning with **Ownership** and **Dive Deep** Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
