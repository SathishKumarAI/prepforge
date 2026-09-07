---
qid: ing_16735ab460__aws__local
question: Do we need a dedicated vector database, or is pgvector enough? How do you
  decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:18-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession* – we choose the simplest solution that delivers reliable search for our users; *Dive Deep* – I investigate performance and cost trade‑offs before committing.

### Situation  
While architecting a recommendation engine for our e‑commerce platform, I was asked whether to use **pgvector** inside PostgreSQL or a dedicated vector DB (e.g., Pinecone, Qdrant).

### Task  
I had to decide on a solution that supports 10 M vectors per catalog with <50 ms query latency at 1,000 QPS, while keeping AWS costs under $5k/month.

### Action  
1. **Benchmark**: Ran micro‑benchmarks on a 16‑core EC2 R6gd instance (NVMe SSD) with pgvector vs. Pinecone’s managed service.  
   *pgvector* delivered ~45 ms latency at 500 QPS but spiked to 120 ms beyond that, and required manual sharding for >5 M vectors.  
   *Pinecone* kept <40 ms at 1k QPS out‑of‑the‑box with automatic scaling.  
2. **Cost modeling**:  
   - pgvector on R6gd (t3.xlarge) + EBS ≈ $3,800/month.  
   - Pinecone (Standard tier) ≈ $4,200/month for the same capacity.  
3. **Risk & ops**: pgvector required us to manage backups, patching, and horizontal scaling; Pinecone handled those automatically.

### Result  
I recommended **Pinecone** as the production vector store. We launched in Q2 with 12 M vectors, achieved <30 ms latency at 1k QPS, and stayed within budget. Post‑launch analytics showed a 22% lift in conversion for AI‑driven recommendations—validated by A/B testing against the pgvector baseline.

### Learnings  
- *Dive Deep* early to surface hidden scaling costs.  
- Even when costs are comparable, operational overhead can tip the balance.  

> **Bar‑raiser cue:** Look for ownership (I drove the decision), depth (benchmarks + cost model), quantified impact (22% lift), and learning from failure (pgvector’s limits surfaced during testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
