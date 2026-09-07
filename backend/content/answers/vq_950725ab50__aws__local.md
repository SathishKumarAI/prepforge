---
qid: vq_950725ab50__aws__local
question: Which Scala library is used for functional programming?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 479
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:14-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led a data‑engineering team that migrated our ETL pipeline from Python to Scala on EMR. The question is: *“Which Scala library is used for functional programming?”*  

- **Situation:** We needed a robust FP foundation to replace ad‑hoc map/reduce logic, improve testability, and reduce runtime errors in a production Spark job handling 10 TB/day.  
- **Task:** Pick a library that integrates cleanly with Spark, supports lazy evaluation, and gives us compile‑time safety for data transformations.  
- **Action:** I evaluated *Cats* vs *Scalaz*. Cats is lighter (≈30 KB) and has excellent typeclass support for `Either`, `Option`, and `Validated`. It also offers a “newtype” pattern to avoid accidental mixing of domain values, which we used to encode user IDs vs order IDs.  
  I refactored the pipeline into composable functions (`parse → validate → enrich → write`) using Cats’ `IO` monad for side‑effects and `ValidatedNel` for batch validation errors. The code now compiles with no runtime cast exceptions, and we added unit tests covering 95 % of the logic.  
- **Result:** Execution time dropped by **18 %** (from 12 min to 9.8 min) on the same cluster size, and we eliminated 90 % of data‑quality incidents reported in production.  

**Leadership Principles Highlighted**

| Principle | Why it matters |
|-----------|----------------|
| *Customer Obsession* | Cleaner code reduces failures that impact downstream analytics users. |
| *Ownership* | I took full responsibility for the library choice, refactor, and performance gains. |

**Bar‑raiser cues I’d listen for**

- **Depth (Dive Deep):** Understanding of Cats’ typeclasses vs raw Scala collections.  
- **Quantified Impact:** Concrete 18 % speedup & 90 % defect reduction.  
- **Learning from Failure:** Initial attempts with Scalaz caused version conflicts; switching to Cats solved compatibility issues and improved maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
