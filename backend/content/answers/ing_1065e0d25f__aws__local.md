---
qid: ing_1065e0d25f__aws__local
question: 'Explain: Vector Search Use Cases — MongoDB: The World\u2019s Leading Modern
  Data Platform | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 424
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:20-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a recommendation engine that served ~1 M users daily. The team was stuck with keyword‑based similarity; latency hit 250 ms and click‑through dropped to 4%. I owned the migration to vector search in MongoDB Atlas.

**Action**  
I scoped requirements: 200 K high‑dimensional embeddings (384 D), real‑time queries (<50 ms), 99.9% availability, and cost ≤ $5k/month. I chose **MongoDB Atlas Vector Search** with the **Atlas Search** plugin, backed by a **Pinecone‑style HNSW index**.  
- Built an ETL pipeline on **AWS Glue** to ingest embeddings into Atlas.  
- Deployed a **Lambda** layer for on‑the‑fly inference using **Amazon SageMaker Endpoint** (p3.2xlarge) to generate vectors.  
- Configured **Global Clusters** for multi‑region read latency (<20 ms).  
- Used **AWS CloudWatch + Atlas metrics** for SLA monitoring; set up auto‑scaling via **Atlas Autoscale**.

**Result**  
Post‑migration, query latency dropped from 250 ms to 12 ms (≈ 95% reduction). Click‑through rate jumped from 4% to 9.2% (+ 2.2pp), translating to an estimated $1.8M annual revenue lift. Cost remained under budget at $4.3k/month.  

**Reflection**  
I learned that *Ownership* means iterating on both data and infrastructure; *Dive Deep* revealed that indexing strategy was the bottleneck, not just the vector model. I documented a playbook for future teams—an artifact that now guides 5 other services across AWS and MongoDB Atlas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
