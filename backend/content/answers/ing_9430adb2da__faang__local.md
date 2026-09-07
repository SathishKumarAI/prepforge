---
qid: ing_9430adb2da__faang__local
question: 'Explain: Main Terms - SQL vs DynamoDB vs Document-DB vs Search-Index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 618
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:57-05:00'
sources: []
---

**Clarify**  
The question asks for a concise comparison of four data‑store paradigms that frequently appear in ML pipelines: **SQL**, **DynamoDB**, **Document‑DB (e.g., MongoDB)**, and **Search‑Index (Elasticsearch/Opensearch)**. I’ll assume the audience is familiar with relational concepts but not the subtle trade‑offs for ML workloads.

**Approach**  
1. Define each store’s core model.  
2. Map typical ML use cases to each model.  
3. Highlight key strengths and limitations in terms of schema flexibility, query patterns, scalability, and latency.  
4. Summarize when one is preferable over another.

**Depth**  

| Store | Core Model | Typical ML Use‑Case | Strengths | Weaknesses |
|-------|------------|---------------------|-----------|------------|
| **SQL (e.g., PostgreSQL)** | Relational, ACID, structured schema | Feature tables, model registry, small‑to‑medium tabular data | Strong consistency, mature tooling, powerful joins & aggregations | Rigid schema, vertical scaling limits, higher write latency at massive scale |
| **DynamoDB** | Key–value + optional secondary indexes (NoSQL) | High‑throughput feature ingestion, real‑time prediction caching | Linear scalability, single‑digit ms latency, managed service | Limited query expressiveness, eventual consistency by default, costly for complex joins |
| **Document‑DB (MongoDB)** | JSON‑like documents with flexible schema | Storing pre‑processed data blobs, user profiles, training artifacts | Schema evolution, rich aggregation pipeline, easy sharding | Write amplification on large updates, weaker transactional guarantees |
| **Search‑Index (Elasticsearch)** | Inverted index + vector search | Full‑text feature lookup, semantic similarity queries for retrieval‑augmented ML | Near‑real‑time indexing, powerful text & kNN search, auto‑scaling | Not a primary key store, eventual consistency, higher memory footprint |

**Edge Cases**  
- SQL struggles when features grow beyond a few million rows; DynamoDB hits hot‑key bottlenecks if access patterns are skewed.  
- Document‑DB can become expensive with large binary blobs (model binaries).  
- Search indexes require careful mapping for numerical feature vectors; otherwise, performance degrades.

**Optimize & Communicate**  
When choosing, weigh *schema rigidity vs. scalability* and *query complexity vs. latency*. For a pure tabular registry, SQL wins. For high‑velocity feature streams, DynamoDB is apt. When dealing with semi‑structured or evolving data (e.g., JSON logs), Document‑DB shines. If the ML pipeline needs fast semantic search or full‑text retrieval, a Search‑Index is indispensable. Communicate this trade‑off matrix to stakeholders to align infrastructure with ML objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
