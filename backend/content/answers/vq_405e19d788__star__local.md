---
qid: vq_405e19d788__star__local
question: How to tell Scala to look into a class file for some Java class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 403
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:13-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were refactoring our batch processing pipeline from Java to Scala to take advantage of Spark’s DSL. One critical component was an old Java class (`com.bank.util.RateCalculator`) that calculated risk scores, and it lived in a third‑party JAR that hadn’t been updated for years.

**Task:**  
I needed to make the Scala code call `RateCalculator` without rewriting it, ensuring the class was loaded correctly at runtime and that Spark could serialize its output.

**Action:**  
1. Added the legacy JAR to the `build.sbt` dependencies with `libraryDependencies += "com.bank" % "risk-utils" % "2.4.1"`.  
2. In Scala, used `Class.forName("com.bank.util.RateCalculator")` inside a lazy val to trigger class loading at startup.  
3. Wrapped the Java instance in a companion object:  

```scala
object RateCalc {
  private val clazz = Class.forName("com.bank.util.RateCalculator")
  private val ctor = clazz.getConstructor()
  def apply(): AnyRef = ctor.newInstance()
}
```

4. Created a Spark UDF that calls `RateCalc.apply()` and casts the result to a case class, enabling Catalyst optimization.

**Result:**  
The Scala job now runs in under 8 minutes per batch (down from 12 min with Java), and we avoid code duplication. I learned how Scala’s reflection can bridge legacy Java libs while keeping type safety at runtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
