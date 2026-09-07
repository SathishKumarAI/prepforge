---
qid: ing_190fbf77cd__faang__local
question: 'Explain: 5.2 Database Schema — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 418
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:14-05:00'
sources: []
---

**Clarify**  
You’re asked to design the **database schema for a URL‑shortening service** (e.g., bit.ly). Assume:  
1. High write/read throughput.  
2. Global uniqueness of short codes.  
3. Optional features – custom aliases, expiration, click stats, analytics.  

**Approach**  
*Entity‑Relationship*:  
- **User** (id, email, pwd_hash) – optional if multi‑tenant.  
- **UrlMapping** (short_id PK, long_url, user_id FK, created_at, expires_at).  
- **ClickEvent** (event_id PK, short_id FK, timestamp, ip, referrer, device).  

*Sharding*: Partition **UrlMapping** by hash of `short_id` or range on `created_at`.  
*Indexing*: B‑tree on `short_id`; GIN/GIN for full‑text search if needed.  

**Depth**  
- `short_id`: 6–8 chars, base62. Generate via counter + encode or use a distributed ID service (e.g., Snowflake).  
- Enforce uniqueness with DB constraint and retry on collision.  
- Store analytics in an append‑only table (`ClickEvent`) to avoid write contention; aggregate later.  
- Use read replicas for stats queries; writes go to primary.  

**Edge Cases**  
- Collision when two users pick same custom alias → reject or rename.  
- Expired URLs: soft delete by `expires_at` + background job to archive.  
- High traffic bursts → use a queue (Kafka) to batch click inserts.  

**Optimize & Communicate**  
Explain trade‑offs: single table vs microservices; ACID for user data vs eventual consistency for analytics. Highlight how sharding and replicas give scalability, while indexes keep lookup fast. Conclude with monitoring metrics (latency, QPS, error rate) to validate the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
