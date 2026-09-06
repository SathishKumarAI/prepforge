---
qid: ing_61d20442f5__think__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 660
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:29:26-05:00'
sources: []
---

### 1️⃣ Clarify the goal & constraints  
- **What is asked?** Outline a database schema for a URL‑shortening service (e.g., TinyURL).  
- **Assumptions:**  
  - Unlimited traffic; need high read/write throughput.  
  - Short code length ≈ 6–8 chars, unique per user or globally.  
  - Users may create many URLs; support custom aliases.  
  - Need fast look‑ups (code → long URL) and efficient writes.

### 2️⃣ Pick a mental model / framework  
Use the **“CRUD + Scale”** lens:  
- **Create:** Insert short code ↔ original URL.  
- **Read:** Resolve code to URL quickly.  
- **Update/​Delete:** Optional, but think about revoking links.  
- **Scale:** Sharding, caching, replication.

### 3️⃣ Reason step‑by‑step  

1. **Core table design** – primary key = `short_code`. Columns: `original_url`, `user_id` (nullable), `created_at`, `expires_at`, `clicks`.  
2. **Uniqueness** – enforce unique constraint on `short_code`; for custom aliases, also ensure user‑level uniqueness.  
3. **Indexing** – primary key covers reads; add secondary index on `original_url` if needed for deduplication or analytics.  
4. **Sharding strategy** – hash the code to distribute rows across nodes; keep hot keys (popular URLs) in cache.  
5. **Caching layer** – Redis/Memcached for the most‑accessed codes; TTL set to reduce DB load.  
6. **Write path** – generate code, check collision (simple retry or UUID), insert into DB, populate cache.  
7. **Read path** – lookup cache first → DB fallback → return 404 if missing.  
8. **Analytics** – increment `clicks` asynchronously (e.g., Kafka + worker) to avoid write latency.

### 4️⃣ Common traps & how to avoid them  

- **Collision over‑simplification:** Random codes can collide; always verify before insert or use a deterministic hash with collision handling.  
- **Single point of failure:** Don’t rely solely on one DB instance; use replication and failover.  
- **Cache invalidation:** When updating/deleting URLs, remember to evict the cache entry.  
- **Over‑engineering indexes:** Too many secondary indexes slow writes; keep only what’s necessary.

### 5️⃣ Sanity‑check & verbalize  

- **Does it support high read/write?** Yes – cache + sharding.  
- **Is uniqueness guaranteed?** Primary key + unique constraints.  
- **Can we scale horizontally?** Sharded tables, stateless services.  
- **What about analytics?** Async pipeline keeps core fast.

Explain this flow aloud: start with the table schema, then move to scalability layers (cache, sharding), finish with operational concerns (collision handling, failover). This structure shows clear reasoning and covers all interview angles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
