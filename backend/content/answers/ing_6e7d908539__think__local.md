---
qid: ing_6e7d908539__think__local
question: 'Explain: Indexing New Content — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 508
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:18:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm whether “Indexing New Content” refers to *how Instagram* ingests, stores, and surfaces new posts (photos/videos).  
- Assume a global user base (~1 B active users), high write‑throughput, low read latency, and eventual consistency for feeds.  
- Decide on the data model (user → posts; post → media + metadata) and that we’re focusing on the ingestion pipeline rather than recommendation.

**2️⃣ Adopt a layered mental model**  
- **Ingestion layer**: API endpoint → validation → storage queue.  
- **Storage layer**: object store for media, key‑value store for metadata.  
- **Indexing layer**: update per‑user feed indexes and global trending index.  
- **Serving layer**: fetch feeds from the index with caching.

**3️⃣ Step‑by‑step reasoning**  
1. User uploads → API validates format, size, authenticity.  
2. Media written to a distributed object store (S3‑like).  
3. Metadata (userID, timestamp, tags) stored in a fast key‑value DB.  
4. Push a message onto a queue for each recipient’s feed update.  
5. Workers consume the queue: read metadata, compute ranking (time decay, engagement), and write to per‑user sorted set or Redis list.  
6. For global trends, increment counters per hashtag/tag in a distributed counter store.  
7. Invalidate/refresh cache entries for affected feeds.

**4️⃣ Common pitfalls to avoid**  
- *Monolithic ingestion*: leads to bottlenecks; use micro‑services & async queues.  
- *Single point of failure*: ensure object store and queue are replicated.  
- *Stale feeds*: use eventual consistency but provide “pull‑to‑refresh” for users.  
- *Ignoring media size variations*: compress or stream large videos.

**5️⃣ Sanity‑check & verbalize**  
- Verify that write latency stays under a few hundred ms even during peak traffic.  
- Confirm that read latency from the index is sub‑200 ms by benchmarking sorted set queries.  
- Explain to interviewers how each layer handles scaling (sharding, replication) and what trade‑offs were made (e.g., eventual consistency vs. real‑time freshness).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
