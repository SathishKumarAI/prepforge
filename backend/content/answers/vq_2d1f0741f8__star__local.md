---
qid: vq_2d1f0741f8__star__local
question: What is function currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 346
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:28-05:00'
sources: []
---

**Situation** – At my previous company we were refactoring the data ingestion pipeline that ran nightly on Spark. The original code had a large, monolithic transformation function that accepted dozens of parameters (file path, schema, compression type, logging level, etc.). Every time we needed to change one parameter we had to touch dozens of call sites, which made unit testing brittle and introduced bugs.

**Task** – I was tasked with making the ingestion logic more modular so that each step could be reused in different contexts (batch vs streaming) while keeping the code readable and testable.

**Action** – I rewrote the core transformation as a curried function:  
```scala
def transform(file: String)(schema: StructType)(compression: String)(logLevel: LogLevel): DataFrame = { … }
```
This allowed me to pre‑apply common arguments (e.g., the schema) and pass the resulting partially applied function around. In practice I created a `PipelineBuilder` that chained these curried functions, enabling us to compose pipelines declaratively. I also added unit tests for each stage separately, which reduced test time by 30 %.

**Result** – The new architecture cut the number of call sites from ~200 to under 20 and eliminated accidental parameter mix‑ups. Production failures dropped by 25 % over the next quarter, and the team could now add a new ingestion source in just a few hours instead of days. I learned that currying is not just an academic trick; it can make large data pipelines far more maintainable and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
