---
qid: ing_76dacbd67c__fp__local
question: 'Explain: Facebook System Design | Instagram System Design | System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 445
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:09-05:00'
sources: []
---

### Why the “Facebook / Instagram” question is a **core** of any systems‑design interview

The goal is to probe how you think about *scale, consistency, and fault tolerance* in a real‑world social‑network setting.  
A well‑structured answer must start from the *user problem*: “a user wants to post an image, see it in friends’ feeds, comment, like, and receive push notifications instantly.”  

1. **Data model & partitioning** – We need a schema that supports fast reads for *feed* (many users per item) and writes for *post*, *comment*, *like*. A common choice is a *wide‑column store* (Cassandra/BigTable) with a **user→post** table for feed generation, and an **item→activity** table for reverse indexing.  
2. **Feed algorithm & latency** – Two approaches exist: *pull* (compute on request using “fan‑out‑on‑read”) or *push* (“fan‑out‑on‑write”). Facebook’s early design used pull to keep storage cheap; Instagram shifted to push to reduce read latency, trading write amplification for faster feed delivery.  
3. **Consistency & availability** – The CAP theorem forces a choice: eventual consistency for likes/comments (high availability) versus strong consistency for account updates. Use *read‑your‑writes* guarantees via session tokens or causal ordering.  
4. **Caching & CDN** – Images are served from an object store (S3/Blob), cached at edge nodes; feed data is cached in a distributed memcached layer to reduce database load.  

#### Non‑obvious insight
Most candidates overlook **the role of *write amplification* as a design lever**: pushing more writes during “post” time (fan‑out) lets you serve reads with zero latency, but the system must tolerate the burst and ensure idempotent replication across shards. Balancing this trade‑off is what distinguishes a robust architecture from a toy one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
