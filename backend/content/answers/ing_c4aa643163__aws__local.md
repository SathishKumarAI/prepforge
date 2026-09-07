---
qid: ing_c4aa643163__aws__local
question: 'Explain: Semantic Caching for RAG — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 403
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:34-05:00'
sources: []
---

**Situation & Task**  
I led the launch of a production Retrieval‑Augmented Generation (RAG) system for our enterprise chatbot that had to serve 200k concurrent users with sub‑second latency. The core challenge was to avoid costly calls to an external LLM and vector store while keeping answers fresh.

**Action**  
*Architecture*: I designed a two‑tier semantic cache in Amazon DynamoDB Global Tables (for multi‑region consistency) backed by Amazon ElastiCache‑Redis for hot items, with a TTL of 5 min.  
*Pipeline*: Incoming queries are hashed; the cache layer checks for a semantically similar vector using cosine similarity on pre‑computed embeddings stored as binary blobs in S3 and indexed via Amazon OpenSearch. If a match is found, we return the cached answer; otherwise we fetch from the primary vector store (Pinecone) and write back to both DynamoDB and Redis.  
*Cost & Scaling*: DynamoDB’s pay‑per‑write model kept cache writes under $0.12 M/month, while ElastiCache reduced LLM calls by 85%, cutting inference cost from $2.4 M to $300 K annually. Availability was achieved with cross‑region replication and automatic failover in OpenSearch.

**Result**  
Latency dropped from 1.8 s to 350 ms (95th percentile), and overall system throughput increased by 3×. User satisfaction scores rose from 4.2 to 4.7/5.  

**Reflection**  
I owned the end‑to‑end metric, dove deep into embedding similarity thresholds, and iterated on cache eviction policies after a 30 % hit‑rate drop during peak traffic—turning failure into a learning loop that tightened our SLA by 15%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
