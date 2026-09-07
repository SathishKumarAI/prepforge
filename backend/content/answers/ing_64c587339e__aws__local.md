---
qid: ing_64c587339e__aws__local
question: 'Explain: Common Use-Cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 594
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:44-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML platform at a fintech startup, I was asked to design a unified data layer that could support **15 different database engines** (SQL, NoSQL, time‑series, graph, columnar, etc.) for downstream ML pipelines. My goal: enable rapid experimentation while keeping costs < $200K/yr and latency ≤ 50 ms for real‑time scoring.

**Approach**  
I mapped each engine to a *canonical use‑case*:

| Engine | Use‑Case | Why it fits |
|--------|----------|-------------|
| PostgreSQL / MySQL | Structured transactional data | ACID, strong joins |
| Amazon Aurora | High‑throughput OLTP + analytics | Serverless scaling |
| DynamoDB | Key‑value lookups for user profiles | Low latency, auto‑scaling |
| Redis | Feature caching & session store | In‑memory speed |
| Amazon S3 (Parquet) | Raw event ingestion | Cost‑effective, columnar compression |
| Redshift / Snowflake | Batch analytics & feature engineering | Massively parallel processing |
| ClickHouse | Real‑time analytical queries | Column‑store + vectorized engine |
| Prometheus | Time‑series monitoring | Built‑in retention policies |
| InfluxDB | IoT sensor streams | High write throughput |
| Neo4j / Amazon Neptune | Graph relationships (fraud detection) | Traversal queries |
| Elasticsearch | Text search & anomaly alerts | Full‑text indexing |
| MongoDB | Semi‑structured logs | Flexible schema |
| Cassandra | Wide‑column, linear scalability | Decentralized writes |
| Oracle Exadata | Legacy compliance workloads | Mature tooling |
| Google BigQuery (via federated query) | Ad‑hoc BI across clouds | Serverless capacity |

I deployed each on **AWS managed services** where possible (RDS, DynamoDB, Aurora Serverless, Redshift Spectrum). For the 15th, I used **Amazon Managed Streaming for Apache Kafka (MSK)** to buffer real‑time event streams before routing to the appropriate store.

**Result**  
Within 6 months:

- Feature engineering time dropped from 3 days to 8 hours per model.  
- Monthly cost stayed at $180K, 10% below forecast.  
- Real‑time scoring latency averaged 35 ms (≤ 50 ms SLA).  

**Learning**  
The key was *dive deep* into each engine’s consistency and scaling guarantees before mapping them to business needs—an ownership mindset that prevented costly over‑provisioning and ensured the ML pipeline stayed both agile and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
