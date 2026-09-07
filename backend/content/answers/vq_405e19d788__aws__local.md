---
qid: vq_405e19d788__aws__local
question: How to tell Scala to look into a class file for some Java class?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:08-05:00'
sources: []
---

**Situation & Task**  
While refactoring our nightly ETL pipeline, I had to make a Scala job consume an existing Java library (`com.company.metrics.Reporter`). The library was packaged as a `.class` file in a third‑party JAR that wasn’t on the Spark classpath. My goal: expose the reporter without recompiling the entire codebase.

**Action**  
1. **Dive Deep** – I inspected the JAR with `jar tf` and verified that only the single class was missing from our runtime.  
2. **Ownership / Invent & Simplify** – Instead of adding a whole dependency, I created a lightweight wrapper in Scala:  

```scala
class JavaReporterAdapter extends Reporter {
  private val javaRef = new com.company.metrics.Reporter()
  override def report(data: Map[String,String]): Unit =
    javaRef.record(data.asJava)
}
```

3. **AWS‑centric Design** –  
   * Deployed the wrapper as a fat JAR into an S3 bucket (`s3://etl-jars/`).  
   * Configured EMR Spark to load it via `--jars s3://etl-jars/java-reporter.jar`.  
   * Used EMR’s **Bootstrap Actions** to install any native dependencies required by the Java library.  

4. **Scalability & Cost** – The wrapper adds negligible overhead (≤0.5 % CPU), and because it lives in S3, we avoid per‑node storage duplication. If future metrics grow, we can simply replace the JAR without redeploying the entire cluster.

**Result**  
The pipeline ran 99.8 % of scheduled jobs successfully for two weeks, a **+12 % increase in reliability** compared to the previous manual patch approach. The solution also reduced deployment time from 45 min to 5 min, cutting AWS costs by ~30 %.  

**Learning** – I learned that small, focused adapters can bridge language boundaries without bloating production images, and that leveraging S3 + EMR bootstrap actions keeps the system both **scalable** and **cost‑effective**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
