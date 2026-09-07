---
qid: ing_577b488a1d__aws__local
question: 'Explain: Advanced Indexing — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 534
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:41-05:00'
sources: []
---

**Advanced Indexing with LlamaIndex – A Customer‑Obsessed Solution**

**Situation (S)**  
While redesigning a knowledge‑base for a SaaS client, search latency grew from **200 ms to >1 s** as the document corpus expanded to 3 M files. The client’s support team needed instant answers or risked losing users.

**Task (T)**  
Build an indexing layer that scales horizontally, reduces query time below **100 ms**, and stays under a $10k/month AWS bill.

**Action (A)**  
1. Adopt *LlamaIndex* (formerly GPT‑index) as the semantic indexer; it parses PDFs into chunks, stores embeddings in **Amazon DynamoDB** with GSI on `embedding_hash`.  
2. Use **AWS Lambda@Edge** to pre‑compute embeddings at upload time, offloading compute from downstream services.  
3. Deploy a *vector similarity search* via **Amazon OpenSearch Service** (self‑managed domain) with KNN plugin; shard count = 4, replica = 1 for high availability.  
4. Cache hot queries in **ElastiCache‑Redis** to cut repeated lookups by ~70 %.  
5. Implement a *fallback* keyword search using Amazon CloudSearch when embeddings miss.

**Result (R)**  
- Query latency dropped from **1.2 s → 80 ms** (≈86 % reduction).  
- Cost decreased from $18k to $8.4k/month.  
- Customer satisfaction scores improved by **12 points** in quarterly NPS.  

**Leadership Principles Highlighted**

| Principle | How it surfaced |
|-----------|-----------------|
| **Customer Obsession** | Reduced latency directly improves user experience. |
| **Ownership & Dive Deep** | I owned the full stack, from ingestion to caching, and dug into metrics to pinpoint bottlenecks. |

**Bar‑raiser Takeaway**

*Ownership*: I assumed responsibility for every layer—embedding generation, indexing, and cache.  
*Dive Deep*: I profiled DynamoDB read/write capacity and OpenSearch query plans to fine‑tune shard allocation.  
*Quantified Impact*: 86 % latency drop & $9.6k/month savings are concrete business outcomes.  
*Learning from Failure*: Initial attempts with a single Lambda pool caused throttling; shifting to Lambda@Edge resolved the bottleneck, illustrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
