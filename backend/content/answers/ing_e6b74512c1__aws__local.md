---
qid: ing_e6b74512c1__aws__local
question: 'Explain: GraphRAG (Structured context) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 445
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:51-05:00'
sources: []
---

**Answer – GraphRAG & RAG fundamentals**

*Leadership Principles:* **Ownership** & **Dive Deep**  
*Behavioral (STAR):*  

- **Situation:** At my previous firm we needed to give legal counsel instant answers from a 10 M‑record case‑law graph.  
- **Task:** Build a Retrieval‑Augmented Generation (RAG) system that could ingest the knowledge graph, retrieve relevant sub‑graphs, and generate concise explanations.  
- **Action:** I owned the end‑to‑end pipeline:  
  1️⃣ **Graph storage** – Amazon Neptune for ACID guarantees and native property graph queries.  
  2️⃣ **Vectorization** – OpenAI embeddings stored in DynamoDB with a GSI on cosine similarity; periodically refreshed via AWS Glue jobs (every 12 h).  
  3️⃣ **Retrieval** – Gremlin traversals fetch the top‑k sub‑graph, which is converted to JSON and passed to Amazon Bedrock’s GPT‑4o for generation.  
  4️⃣ **Serving** – API Gateway + Lambda@Edge for low‑latency (≤ 200 ms) response, with CloudWatch metrics on retrieval latency & answer quality.  
- **Result:** Achieved a 92 % accuracy against expert annotations and cut manual research time by **85 %**, saving $1.2 M annually.  

*Technical notes:* Neptune scales horizontally via read replicas; DynamoDB’s provisioned throughput costs < $0.05 per query at our load, while Bedrock usage is billed by token count (~$0.02/1k tokens). Trade‑off: using S3 for raw graph snapshots reduces cost but increases retrieval latency; we chose Neptune to keep response time under SLA.

*Bar‑raiser cues:* Clear ownership of all components, deep dive into query optimization (Gremlin vs Cypher), quantified impact on business KPIs, and post‑launch A/B testing that informed iterative refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
