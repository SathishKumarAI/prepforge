---
qid: ing_d8c9813a75__star__local
question: 'Explain: Query Patterns — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:28-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the analytics layer for a mobile game that had grown from 10 million to 50 million active users per month. The existing monolithic PostgreSQL store could not keep up with real‑time player event ingestion, and our daily churn reports were lagging by hours.

**Task:**  
I needed to build a system that could ingest millions of events per second, support flexible ad hoc queries for A/B testing, and still provide strong consistency for critical metrics like in‑app purchase totals.

**Action:**  
I split the workload: used **Apache Kafka** for real‑time ingestion, then routed data into two stores. For time‑series aggregates I chose **Cassandra** (wide‑row NoSQL) because its partition key on player ID and timestamp made range scans efficient and it offered linear scalability. For relational analytics—such as join queries between user profiles and purchase histories—I kept a lightweight **PostgreSQL** instance with materialized views refreshed nightly. I wrote a data pipeline in Python that performed ETL from Kafka to both stores, using Spark for batch aggregation and a custom CDC tool for near‑real‑time sync of critical counters back to PostgreSQL.

**Result:**  
Query latency dropped from 2 minutes to under 200 ms for most reports, ingestion throughput increased to 1.5 M events/sec, and we reduced infrastructure costs by 30% by leveraging the right tool for each pattern. I learned that understanding query patterns—range scans versus joins—and matching them to SQL or NoSQL strengths is key to scalable system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
