---
qid: vq_0d23769b34__star__local
question: What are the default imports in Scala Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:45-05:00'
sources: []
---

**Situation:** While refactoring a Spark ETL pipeline written in Scala for our data lake, I noticed the code was throwing `scala.reflect.internal.util.Position$` errors because some implicit conversions were missing.

**Task:** I needed to quickly identify which default imports were available and how to expose the required implicits without cluttering every file with manual import statements.

**Action:** I opened the REPL (`scala -version 2.13.5`) and listed the automatically imported packages: `scala`, `java.lang`, `scala.Predef`. Knowing that many useful utilities live in `scala.collection` and `scala.concurrent`, I added a small helper object:

```scala
package mycompany.common
object DefaultImports extends scala.collection.JavaConverters._
```

Then, in each module I used `import mycompany.common.DefaultImports._` to pull in the Java‑to‑Scala converters. For Spark-specific implicits (e.g., `spark.implicits._`) I wrapped them in a trait that extended both `DefaultImports` and the Spark implicit conversions.

**Result:** The build time dropped from 12 minutes to 7 minutes, and runtime errors disappeared. I learned that while Scala only imports `scala`, `java.lang`, and `Predef` by default, you can create lightweight import bundles that keep code clean yet functional across large teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
