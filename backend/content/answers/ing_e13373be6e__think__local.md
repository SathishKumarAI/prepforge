---
qid: ing_e13373be6e__think__local
question: 'Explain: Database Schema Design — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 512
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:51:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Ask whether comments are threaded, how many users, expected traffic (e.g., millions of writes per day).  
   * Assume a single‑page application where comments appear in real time and can be replied to or upvoted.  

**2️⃣ Adopt a layered mental model**  
   * **Entities & relationships** → Users ↔ Comments ↔ Posts/Articles.  
   * **Data flow** → Write path (API ➜ DB), read path (DB ➜ cache ➜ client).  
   * **Performance constraints** → Low latency for reads, high write throughput, eventual consistency.

**3️⃣ Step‑by‑step reasoning**  
   1. Define core tables: `users`, `posts`, `comments`.  
   2. Add surrogate keys (`id`) and timestamps (`created_at`).  
   3. For threading, add `parent_id` (nullable) or a separate `threads` table if deep nesting is needed.  
   4. Normalize common data but denormalize for hot reads: e.g., store `comment_count` in `posts`.  
   5. Indexes: primary keys, `post_id`, `created_at`, and composite indexes for queries like “latest comments for a post.”  
   6. Consider sharding on `post_id` or `user_id` to scale writes.  
   7. Use a read‑replica cache (Redis) for the most recent N comments per post.

**4️⃣ Avoid common pitfalls**  
   * Don’t over‑normalize; nested selects kill performance.  
   * Ignore pagination: retrieving all comments will explode latency.  
   * Forget to handle orphaned replies when a parent is deleted.  
   * Neglect rate limiting or spam filtering in the schema design.

**5️⃣ Sanity check & communicate**  
   * Verify that each query path (fetch latest N, post a reply) can be served within SLA using indexes and caching.  
   * Explain trade‑offs: e.g., storing `depth` vs. computing on the fly, or using materialized paths for fast traversal.  
   * Summarize the diagram of tables, keys, and primary queries to make the design tangible to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
