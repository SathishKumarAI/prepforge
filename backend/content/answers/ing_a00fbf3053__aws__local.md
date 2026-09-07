---
qid: ing_a00fbf3053__aws__local
question: Why Not General Databases? — Vector Databases
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 393
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:44-05:00'
sources: []
---

**Why not use a general RDBMS for AI embeddings?**

**Situation:** I led the migration of our recommendation engine from an on‑prem MySQL cluster to a managed vector service in 2024. The system served 12 M users, each with ~500 embedding vectors (300‑dim each).  

**Task:** Reduce query latency from 350 ms to <30 ms while keeping cost below $1 M/yr and ensuring 99.9% availability.

**Action:**  
- **Dive Deep:** Benchmarked MySQL’s `GIST` indexes, PostgreSQL’s `pgvector`, and AWS Managed Services (Amazon QLDB + DynamoDB). Learned that relational engines incur O(n) scan for nearest‑neighbor queries because embeddings are stored as large blobs.  
- **Invent & Simplify:** Adopted Amazon OpenSearch Service with the *k-NN* plugin, which stores vectors in an IVF index and performs sub‑linear ANN search (≈log n). Added a Lambda layer to handle on‑the‑fly re‑embedding for stale data.  
- **Bias for Action:** Provisioned 4 nodes, auto‑scaling based on query rate, and enabled cross‑region read replicas for disaster recovery.

**Result:** Query latency dropped from 350 ms → 25 ms (≈93% improvement). Cost fell to $850k/yr (15% under budget). Traffic spikes of +200% were handled without manual intervention.  

**Bar‑raiser focus:** Ownership—I owned the end‑to‑end migration; depth—understood ANN index internals; quantified impact—latency & cost metrics; learning—from failed MySQL trials that highlighted scalability limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
