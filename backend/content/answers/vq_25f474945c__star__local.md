---
qid: vq_25f474945c__star__local
question: What is the companion object in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 322
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:07-05:00'
sources: []
---

**Situation**  
In my last role I was refactoring a legacy data pipeline that processed daily transaction logs for a fintech client. The original codebase had a heavy reliance on mutable Scala classes and duplicated parsing logic across several modules, leading to compile‑time errors and slow build times.

**Task**  
I needed to centralise the JSON schema validation and provide a clean, immutable API for downstream jobs while keeping backward compatibility with existing callers.

**Action**  
I created a `Transaction` case class and added a companion object. Inside the object I defined an implicit `Format[Transaction]` using Play‑JSON, a factory method `apply(json: JsValue)` that throws a detailed exception on schema mismatch, and a helper `fromCsv(line: String): Transaction`. The companion also held a private cache of compiled regexes for performance. By moving all the parsing logic into the companion object, I leveraged Scala’s singleton nature to avoid repeated initialization across tasks and used implicit resolution to let other parts of the pipeline automatically pick up the JSON formatter.

**Result**  
Build times dropped by ~25 % because the parser was now compiled once per JVM instead of per job. Runtime errors from malformed data fell by 40 % thanks to stricter validation, and downstream services could simply call `Transaction(json)` without caring about implementation details. The exercise reinforced my belief that companion objects are powerful for encapsulating domain logic while keeping the public API concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
