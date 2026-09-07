---
qid: ing_e5455179f1__aws__local
question: 'Explain: Hierarchical Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 588
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When designing a data‑platform for our global e‑commerce catalog, I had to choose between *relational*, *NoSQL* and *graph* stores. The goal was 99.9 % uptime, sub‑200 ms read latency, and cost ≤ $0.05 per query.

**Action (Dive Deep + Bias for Action)**  
I mapped the data model to **15 database archetypes**:  
1️⃣ Relational (RDS, Aurora) – ACID, joins.  
2️⃣ Column‑store (Redshift, BigQuery) – analytics.  
3️⃣ Document (DynamoDB, MongoDB) – flexible schema.  
4️⃣ Key‑value (Redis, DynamoDB) – caching.  
5️⃣ Graph (Neptune, JanusGraph) – relationships.  
6️⃣ Time‑series (Timestream, InfluxDB) – metrics.  
7️⃣ Object store (S3, MinIO) – blobs.  
8️⃣ Search (Elasticsearch, OpenSearch) – full‑text.  
9️⃣ Spatial (PostGIS, GeoMesa) – geodata.  
10️⃣ Queue (SQS, Kafka) – event streams.  
11️⃣ Ledger (Qldb) – immutable records.  
12️⃣ Multi‑model (Couchbase) – hybrid workloads.  
13️⃣ Edge cache (CloudFront, Cloudflare) – CDN.  
14️⃣ In‑memory (Memcached) – session store.  
15️⃣ Serverless DB (Aurora Serverless) – bursty traffic.

I built a decision matrix scoring *consistency*, *latency*, *scalability* and *cost*. For each feature, the chosen type matched its access pattern (e.g., product search → OpenSearch; user sessions → Redis). I automated deployment with CloudFormation + Terraform, adding **AWS Lambda** for schema migrations.

**Result (Deliver Results)**  
Post‑migration, read latency dropped from 350 ms to 140 ms (60 % improvement), query cost fell by 35 %, and we avoided a single point of failure—our uptime hit 99.999 %. The team now follows the matrix for every new feature, reducing data‑modeling time by 40 %.

**Learnings**  
If I’d skipped the matrix, we’d have over‑provisioned Aurora, inflating costs. The bar‑raiser expects *ownership* of trade‑offs, *deep dives* into each type’s strengths, and clear metrics—exactly what this solution delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
