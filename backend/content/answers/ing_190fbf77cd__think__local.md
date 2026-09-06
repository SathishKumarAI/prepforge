---
qid: ing_190fbf77cd__think__local
question: 'Explain: 5.2 Database Schema — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 476
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:23:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- Confirm whether they want a *high‑level* ER diagram or a detailed SQL schema (tables, keys, indexes).  
- Assume typical constraints: each user can create many short URLs; URLs expire after some time; we need to track clicks and maybe custom aliases.  
- Note that the interview might focus on scalability (partitioning, caching) rather than just CRUD.

**2️⃣ Pick a mental model**

Use the *Entity‑Relationship + Normalization* framework:

1. Identify core entities: `User`, `ShortURL`, `Click`.  
2. Define attributes and primary keys.  
3. Establish relationships (one‑to‑many, many‑to‑many).  
4. Apply 3NF to avoid redundancy.

**3️⃣ Step‑by‑step reasoning**

- **Step A:** Draw entities → `User(id, email, pwd_hash)`.  
- **Step B:** `ShortURL(id PK, user_id FK, long_url, short_code, created_at, expires_at, is_custom)`.  
- **Step C:** `Click(id PK, url_id FK, timestamp, ip_address, user_agent)`.  
- Add indexes on `short_code` (unique), `user_id`, and `url_id`.  
- Think about partitioning: shard by hash of `short_code`; store clicks in a separate log table or stream.  
- Consider caching popular URLs in Redis for O(1) lookup.

**4️⃣ Common traps to avoid**

- Forgetting the uniqueness constraint on custom aliases.  
- Over‑normalizing (e.g., storing click counts in `ShortURL` and also in `Click`).  
- Ignoring rate limits or abuse detection fields.  
- Not accounting for URL expiration logic in queries.

**5️⃣ Sanity‑check & verbalize**

- Verify that every foreign key is properly indexed.  
- Check that the schema supports required ops: create, resolve, delete, stats.  
- Explain trade‑offs: e.g., storing click counts vs. aggregating from logs.  
- Wrap up by summarizing how this design scales (horizontal sharding, caching, eventual consistency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
