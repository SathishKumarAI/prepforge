---
qid: vq_8aa14595b2__aws__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 424
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:12-05:00'
sources: []
---

**Situation / Task**  
While refactoring a data‑pipeline that ingested millions of JSON records into DynamoDB, I discovered the codebase was littered with `Either[Error, Result]` values that were not handled consistently. The risk was silent failures leaking downstream, which would break the *Customer Obsession* principle by delivering corrupted data to analysts.

**Action**  
I introduced a strict **Either/Left/Right** contract:

| Concept | Meaning |
|---------|---------|
| `Either[L,R]` | Sum type representing either an error (`L`) or success (`R`). |
| `Left(e)` | Encapsulates the failure payload; by convention, it’s the *error* side. |
| `Right(r)` | Encapsulates successful computation; the *value* side. |

I refactored each transformation step to return `Either[ProcessingError, Record]`, and used pattern matching (`case Left(err) => …; case Right(rec) => …`) to surface errors immediately. I also wrapped the entire pipeline in a Lambda that logs `Left` events to CloudWatch and triggers an SNS alert.

**Result**  
Post‑refactor, failure detection time dropped from *minutes* (manual log scans) to *seconds*, reducing data quality incidents by **87 %** over two months. The Lambda cost was < $0.01/month, and the design scales linearly with the number of records because each `Either` is evaluated lazily.

**Reflection**  
This experience taught me that **Dive Deep** into type‑level guarantees can eliminate silent bugs, while **Ownership** means insisting on a clean contract even when others prefer quick fixes. I’ll keep iterating by adding a validation layer that converts `Left`s to structured CloudWatch metrics for proactive monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
