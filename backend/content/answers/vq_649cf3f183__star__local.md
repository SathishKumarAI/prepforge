---
qid: vq_649cf3f183__star__local
question: How to you create Singleton classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 312
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:51-05:00'
sources: []
---

**Situation**  
While refactoring our nightly data ingestion pipeline for the insurance claims system, I noticed that the connection pool manager was being instantiated multiple times across services, causing a spike in connection churn and memory pressure during peak hours.

**Task**  
I needed to enforce a single instance of the JDBC connection pool across all micro‑services without compromising thread safety or introducing bottlenecks, while keeping configuration externalized for CI/CD flexibility.

**Action**  
I implemented a Scala `object` as a singleton, leveraging the JVM’s classloading guarantees. Inside the object, I used lazy initialization with a private `val` that wrapped a `HikariDataSource`. The configuration was read from an HOCON file via the Typesafe Config library, and I exposed only two public methods: `getConnection()` and `closePool()`. To avoid accidental re‑initialization in test environments, I added a guard that throws if `init` is called after construction. Unit tests with ScalaTest verified that multiple calls returned the same instance and that connection counts never exceeded the pool size.

**Result**  
After deployment, we saw a 35 % reduction in memory usage during peak loads and eliminated connection‑leak warnings in production logs. The team adopted this pattern for other shared resources (Kafka producers, Redis clients), improving overall system stability. I learned how Scala’s `object` idiom provides an elegant, thread‑safe singleton without extra boilerplate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
