---
qid: ing_7e1a9002ad__star__local
question: 'Explain: How do you choose a vector database? pgvector vs dedicated vector
  stores vs search engines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 408
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:49-05:00'
sources: []
---

**Situation** – In the summer of 2023 I led a feature‑release for our product recommendation engine at a mid‑size SaaS startup. We had to store 2 million user embeddings (512‑dim vectors) and support real‑time nearest‑neighbor queries with <50 ms latency while keeping infrastructure costs under $200/month.

**Task** – Pick the right vector storage solution that balanced performance, cost, and operational simplicity, and integrate it into our existing PostgreSQL stack without breaking CI/CD pipelines.

**Action** – I scoped three options: pgvector in Postgres, Milvus (dedicated vector store), and Elasticsearch with its dense vector plugin. First, I benchmarked each against 10 k random queries on a staging cluster. pgvector offered the lowest operational overhead—no extra service to maintain—but suffered ~120 ms latency for k‑NN due to sequential scans. Milvus delivered 25 ms but required a Docker swarm and custom sync scripts to keep vectors in sync with our user table. Elasticsearch hit 45 ms, was easy to deploy via Helm, and already handled our full‑text search needs. I negotiated a shared cluster with our DevOps team to run ES, added a nightly job that pulled new embeddings from Postgres using pgvector’s extension, and set up an async queue to update the index in real time.

**Result** – The chosen setup cut query latency by 70 % (from 120 ms to 35 ms), kept monthly spend at $180, and reduced engineering hours on ops maintenance by 40 %. I learned that choosing a vector DB is less about raw speed and more about aligning with existing infrastructure, team expertise, and cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
