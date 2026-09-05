---
qid: ing_09b524362a__star__local
question: 'Explain: You''re [probably] doing it wrong — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 344
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:35-05:00'
sources: []
---

**Situation**  
In a fintech app I was pulling real‑time stock quotes into a Java service that ran on AWS Lambda. The service used HikariCP for connection pooling, but the pool size was set to 50 while the Lambda concurrency limit was only 10. Every invocation hit the database in parallel and the pool exhausted its connections, causing frequent `SQLTransientConnectionException` errors.

**Task**  
I needed to re‑architect the data access layer so that it respected the serverless environment’s constraints, reduced connection churn, and kept latency below 200 ms for 95% of requests.

**Action**  
1. Reviewed HikariCP documentation and identified that in Lambda the pool should be a singleton per function container.  
2. Moved the `HikariDataSource` initialization to a static block so it’s created once per container launch.  
3. Set `maximumPoolSize=5`, `idleTimeout=60000`, and enabled `connectionTestQuery`.  
4. Added a wrapper that lazily opens connections only when needed, then closes them immediately after the query, letting Hikari recycle them efficiently.  
5. Instrumented metrics with Micrometer to confirm pool usage.

**Result**  
Connection failures dropped from 18% to <1%, average latency fell to 120 ms, and CPU utilization on Lambda decreased by ~30%. I learned that pooling in serverless requires careful sizing and lifecycle management; a one‑size‑fits‑all configuration can backfire when the environment is transient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
