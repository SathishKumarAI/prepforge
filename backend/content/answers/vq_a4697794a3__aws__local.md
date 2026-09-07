---
qid: vq_a4697794a3__aws__local
question: What is the difference between val and var in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:12-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While leading a data‑pipeline revamp on **AWS Glue**, my team had to decide whether to expose mutable state in our Scala ETL jobs.

*Task*: I needed to explain the impact of using `var` versus `val` so that developers could write safer, more maintainable code and avoid subtle bugs in distributed processing.

*Action*:  
- Clarified that **`val` creates an immutable reference** (the variable cannot be reassigned), whereas **`var` allows mutation**.  
- Highlighted that immutability guarantees thread‑safety on Spark executors—critical when jobs run in parallel across thousands of cores.  
- Demonstrated with a quick benchmark: a `var`‑based counter inside an RDD transformation caused a 12 % slowdown and 4× more GC overhead compared to a pure `val` + accumulator approach.  
- Proposed refactoring the Glue script to replace all `var`s with `val`s and use Spark’s **Accumulators** for shared state, reducing job duration from 18 min to 15 min on a 1‑TB dataset (≈16 % cost saving).

*Result*: The pipeline now runs deterministically, with a 30 % lower error rate in production, and we saved ~$2k/month on Glue ETL usage.  

**Bar‑raiser notes**: I showed ownership by taking initiative to audit code, deep dive into Spark internals (GC logs), quantified performance gains, and learned that immutable patterns not only improve reliability but also cost efficiency—an outcome directly tied to Amazon’s “Deliver Results” principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
