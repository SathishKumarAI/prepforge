---
qid: vq_7a51b72d35__think__local
question: java.lang.IncompatibleClassChangeError when running non-CDH Hadoop with
  Sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 577
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:53:19-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - The error is `java.lang.IncompatibleClassChangeError` during a Sqoop job that targets a non‑CDH Hadoop distribution (e.g., Apache Hadoop 3.x).  
   - Assume the user has a recent Hadoop cluster, uses Sqoop 2.1+ or 1.x, and may have mixed classpaths (CDH‑specific libs vs vanilla ones).  
   - The stack trace points to classes like `org.apache.hadoop.mapred.JobConf` vs `org.apache.hadoop.mapreduce.Job`.

**2️⃣ Mental model / framework**  
   - **Classloader hygiene**: Hadoop’s APIs changed between MR v1 (`mapred`) and MR v2 (`mapreduce`). Mixing them leads to incompatible changes.  
   - **Dependency versioning**: CDH bundles specific Hadoop versions; non‑CDH distributions ship newer or older ones.  
   - **Sqoop’s own shading**: Sqoop pulls in its own Hadoop libs if the classpath isn’t clean.

**3️⃣ Step‑by‑step reasoning**  
   1. Inspect the stack trace for the offending class and method.  
   2. Verify the Hadoop version on the cluster (`hadoop version`).  
   3. Check Sqoop’s lib directory: look for `hadoop-client.jar`, `mapreduce-client-core.jar`, etc., that might be from a different release.  
   4. Ensure only one set of Hadoop jars is in the classpath (preferably the cluster’s).  
   5. If using Maven, enforce dependency exclusions (`<exclusion>` for conflicting Hadoop artifacts).  
   6. Rebuild Sqoop with `-Dsqoop.hdfs.version` pointing to the correct Hadoop API level.

**4️⃣ Common traps & wrong turns**  
   - *Assuming* that removing CDH jars is enough; you may still have transitive dependencies from other libs (e.g., Hive, Pig).  
   - *Re‑compiling* Sqoop without setting `-Djava.ext.dirs` can bring in JRE extensions that clash.  
   - *Over‑excluding* all Hadoop jars will break Sqoop’s internal logic; you need the right subset.

**5️⃣ Sanity‑check & communicate**  
   - Run a minimal MapReduce job with the same classpath to confirm the issue is isolated to Sqoop.  
   - Explain that the error stems from API mismatches, not runtime bugs, and that aligning all Hadoop libs resolves it.  
   - Suggest using tools like `mvn dependency:tree` or `jdeps` to audit the final jar contents before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
