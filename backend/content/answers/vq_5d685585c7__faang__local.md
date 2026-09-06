---
qid: vq_5d685585c7__faang__local
question: How to compile and run a Scala program?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 446
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:11-05:00'
sources: []
---

**Clarify**  
You want to build and execute a stand‑alone Scala application (e.g., on a local JVM or a cluster). I’ll assume you’re using sbt, the de‑facto Scala build tool, and that the code compiles against the standard library only.

**Approach**  
1. Install JDK 8+ and sbt.  
2. Create an `sbt` project (`project/Build.scala` optional).  
3. Add source under `src/main/scala`.  
4. In `build.sbt`, set `name`, `version`, `scalaVersion`.  
5. Compile: `sbt compile`.  
6. Run the main class: `sbt run`.  
7. For a JAR, use `sbt assembly` (via sbt‑assembly plugin) to produce an uber‑JAR, then `java -jar target/scala-2.xx/<app>.jar`.

**Depth**  
`sbt compile` downloads dependencies lazily and compiles all sources; it caches class files in `.target`. The `run` task resolves the main class from the manifest or via `mainClass := Some("mypkg.Main")`. Assembly bundles all transitive deps into one JAR, simplifying deployment on Spark/YARN. Complexity: compilation is O(n) in source lines; packaging is linear in artifact size.

**Edge Cases**  
- Conflicting Scala versions between libs → use `scalaVersion` pinning or shading.  
- Native code (JNI) → ensure library path set.  
- Multiple main classes → specify explicitly.  
- Running on a cluster → add Hadoop jars, set classpath accordingly.

**Optimize & Communicate**  
Explain that sbt’s incremental compiler speeds up iterative changes; use `sbt test` before `run`. For CI/CD, automate with `sbt clean compile test assembly`. Highlight the trade‑off: using `java -jar` is fast at runtime but hides dependency management; sbt keeps reproducibility. This narrative demonstrates structured reasoning and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
