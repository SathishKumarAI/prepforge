---
qid: ing_5c8988f453__aws__local
question: 'Explain: Document Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 615
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a migration from an on‑prem MySQL stack to the cloud for a SaaS product that stores user content, logs, and analytics in one place. The goal was to reduce operational overhead while keeping latency < 10 ms for 99th percentile reads.

**Action** – *Dive Deep & Ownership*  
I catalogued **15 database archetypes** (relational, key‑value, document, graph, time‑series, columnar, in‑memory, search, full‑text, spatial, multi‑model, NoSQL, NewSQL, hybrid, serverless, and managed). For each, I mapped core use cases and AWS services that match them:

| Archetype | Typical Use | AWS Service(s) |
|-----------|-------------|----------------|
| Document | JSON/structured documents (user profiles, orders) | **Amazon DocumentDB** or **DynamoDB (JSON)** |
| Key‑Value | Session stores, caching | **ElastiCache**, **DynamoDB** |
| Relational | ACID transactions | **RDS/Aurora PostgreSQL** |
| Graph | Social graphs, recommendation engines | **Neptune** |
| Time‑Series | Metrics, IoT | **TimeStream**, **InfluxDB on EC2** |
| Columnar | BI analytics | **Redshift** |
| In‑memory | Real‑time dashboards | **Redis** |
| Search | Full‑text search | **OpenSearch Service** |
| Spatial | Geofencing | **PostGIS on RDS** |
| Hybrid | Multi‑model workloads | **MongoDB Atlas on AWS**, **Amazon QLDB** |

I chose **DocumentDB** for user content (schema‑flexible, 99.9 % availability) and **DynamoDB** for session data (sub‑5 ms read, auto‑scaling). I added **AWS Backup** and **Aurora Serverless v2** for the analytics tier to keep costs < $200k/yr.

**Result** – *Deliver Results*  
Post‑migration, read latency dropped from 23 ms to 7 ms (3× faster), operational hours fell by 70%, and we avoided a single point of failure. Quarterly cost decreased by 35% while scaling to 1M active users.

**Learning** – *Bias for Action & Invent & Simplify*  
The exercise taught me that “document” is not one technology; it’s an abstraction that can be realized with multiple services. Choosing the right fit early prevents costly rewrites and aligns architecture with business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
