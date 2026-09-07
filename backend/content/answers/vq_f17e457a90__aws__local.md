---
qid: vq_f17e457a90__aws__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 400
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build tools that make data pipelines reliable for downstream consumers; *Dive Deep* – we analyze the subtle semantics behind language constructs.

**SITUATION / TASK**  
I was tasked to refactor a legacy ETL service written in Scala where error handling was scattered across `try/catch` blocks, causing silent failures and hard‑to‑debug logs.  

**ACTION**  
I introduced `Either[ErrorType, Result]` as the return type for all transformation functions. `Either` is a sealed trait with two cases: `Left(error)` represents failure, `Right(value)` success. This forced callers to explicitly pattern match on the outcome instead of swallowing exceptions. I also wrapped the entire pipeline in a monad transformer stack (`EitherT[Future, ErrorType, Result]`) and stored metrics in CloudWatch (error rate, latency).  

**RESULT**  
Post‑refactor, the error‑handling coverage jumped from 58 % to **100 %**, reducing downstream job failures by **73 %**. The pipeline’s mean time to recovery fell from 12 hrs to **30 min** because errors surface immediately.  
**BAR‑RAISER NOTES:**  
- *Ownership:* I owned the end‑to‑end refactor and drove adoption across teams.  
- *Dive Deep:* I benchmarked pattern‑matching overhead (≤0.5 ms per record).  
- *Quantified Impact:* 73 % fewer failures, 30 min MTTR.  
- *Learning from Failure:* Early iterations overused `Left` for recoverable errors; we later refined the error taxonomy to distinguish transient vs. permanent failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
