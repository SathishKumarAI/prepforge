---
qid: vq_14b6570584__star__local
question: What are the differences between Scala’s Int and Java’s java.lang.Integer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 321
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:59-05:00'
sources: []
---

**Situation**  
During a migration of our nightly ETL pipeline from Python to Scala, I discovered that the Spark job was generating far more garbage than expected and the JVM heap kept spiking during large aggregation windows.

**Task**  
I had to refactor the data transformation logic so that it used primitive types wherever possible, reducing object allocation and improving throughput without sacrificing correctness or readability.

**Action**  
I replaced all `java.lang.Integer` wrappers with Scala’s primitive `Int`. I audited the code for any autoboxing points—such as using `.map(_.toInt)` on RDD elements—and switched them to use pattern matching (`case i: Int => …`) and direct arithmetic. In places where nulls were a concern, I introduced `Option[Int]` instead of nullable `Integer`. I also updated the Spark schema definitions from `StructField("value", IntegerType, true)` to `LongType` for larger ranges, ensuring no overflow. Finally, I added unit tests comparing results before and after the change.

**Result**  
After the refactor, garbage collection pauses dropped by 35 %, overall job runtime improved from 12 min to 8 min on a 500‑GB dataset, and memory usage fell below 2 GB. The exercise reinforced how Scala’s value types eliminate unnecessary boxing, leading to tangible performance gains in data‑intensive workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
