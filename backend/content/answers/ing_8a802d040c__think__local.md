---
qid: ing_8a802d040c__think__local
question: 'Explain: Write Globally and Read Locally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 533
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:12:16-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Ask whether we need a real‑time chat, persistence, scalability, or just an architectural sketch.  
   * Assume millions of users, high write/read latency tolerance, and eventual consistency is acceptable.

**2. Adopt a layered system‑design framework**  
   * **Requirements → Functional / Non‑functional**  
   * **High‑level architecture → Front‑end, API gateway, service layer, data store, cache, CDN, monitoring**  
   * **Data model & partitioning strategy**  
   * **Scalability & fault tolerance patterns (CQRS, sharding, replication)**

**3. Step‑by‑step reasoning**  
   1. Define the core entities: User, Post, Comment, Thread.  
   2. Decide on write‑heavy vs read‑heavy paths; use a write API that appends to a log and a read API that serves from a denormalized view.  
   3. Pick storage: write logs in Kafka → stream processor → update an append‑only S3/NoSQL table; serve reads from DynamoDB + Redis cache.  
   4. Handle ordering: use per‑post sharding keys, event timestamps.  
   5. Ensure real‑time delivery via WebSocket / Server‑Sent Events backed by a message broker (e.g., Kafka + Kafka Streams).  
   6. Discuss scaling: auto‑scaling API servers, partitioned consumers, cache invalidation.  
   7. Add security/authentication (JWT), rate limiting, and monitoring.

**4. Avoid common traps**  
   * Don’t lump “write” and “read” into one monolithic database; it hurts latency.  
   * Forget eventual consistency: readers may see stale data if cache isn’t refreshed.  
   * Ignore message ordering when sharding across partitions.  
   * Over‑optimise for a single use case (e.g., only real‑time) and miss batch analytics needs.

**5. Sanity‑check & verbalize**  
   * Walk through a sample comment: “User A posts → Kafka log → stream updates DynamoDB → Redis cache invalidated → WebSocket pushes to followers.”  
   * Verify each step meets latency targets (< 200 ms for UI).  
   * Explain trade‑offs (write amplification vs read speed) and why the chosen pattern satisfies global writes with local reads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
