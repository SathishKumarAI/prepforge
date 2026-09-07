---
qid: ing_7e1a9002ad__aws__local
question: 'Explain: How do you choose a vector database? pgvector vs dedicated vector
  stores vs search engines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 459
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:24-05:00'
sources: []
---

**Situation (S)**  
While revamping our recommendation engine for a media‑streaming app, I had to decide on a vector store that could ingest 10 M user embeddings and serve top‑k queries with <50 ms latency at scale.

**Task (T)**  
Choose between *pgvector* in RDS PostgreSQL, dedicated vector stores (Pinecone, Weaviate), or search engines (OpenSearch).

**Action (A)**  
1. **Dive Deep into Requirements** – Measured write throughput (≈5 k ops/s), read latency (<50 ms), and cost per GB of indexed vectors.  
2. **Prototype & Benchmark** – Ran 10 M vectors on each platform, using *t‑SNE* for dimensionality; recorded query latency and CPU usage.  
3. **AWS Integration** – Leveraged RDS Proxy + Aurora Serverless (pgvector) for tight IAM control, and Amazon OpenSearch Service for auto‑scaling nodes.  
4. **Ownership & Cost Modeling** – Calculated total cost of ownership: pgvector ~$0.12/GB/month vs Pinecone $0.15/GB; included network egress to VPC endpoints.

**Result (R)**  
Selected **Amazon OpenSearch with a custom `dense_vector` field**:
- 99th percentile query latency <30 ms.
- Cost‑effective: $3k/month versus $4.5k for Pinecone.
- Seamless CI/CD via CloudFormation; automated scaling reduced manual ops by 70%.

*Learned:* Always benchmark end‑to‑end, not just raw speed. A single vendor lock can inflate costs and slow iteration.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results** – Fast, reliable recommendations directly improve user retention (↑12% NPS).  
- **Ownership & Dive Deep** – Own the full stack from data ingestion to query execution; dive into performance metrics to make data‑driven choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
