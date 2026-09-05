---
qid: ing_363fb599b9__think__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 465
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:33:56-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Ask whether we’re focusing on *server‑side* caching (e.g., Redis) or *client‑side* cache (device).  
   - Assume a high‑volume service: millions of users, real‑time push & email notifications.  
   - Decide on consistency needs: eventual vs strong for read‑through caches.

**2. Pick a mental model / framework**  
   - Use the **Read‑Through/Write‑Through cache pattern** to keep data fresh while avoiding duplicate reads.  
   - Map key entities: *User Profile*, *Notification Queue*, *Delivery Status*.

**3. Step‑by‑step reasoning toward the design**  
   1. Identify hot data: unread notification counts per user → cache in Redis with TTL (e.g., 5 min).  
   2. Use a **cache-aside** pattern for per‑user notification lists, loading from DB only on miss.  
   3. Invalidate or update cache on write events (new notification, read flag change) via pub/sub.  
   4. Handle burst traffic with rate limiting and circuit breakers to prevent cache stampedes.  
   5. For distributed consistency, use *cache versioning* or *conditional writes*.

**4. Common traps to avoid**  
   - **Cache invalidation hell**: forgetting to update all affected keys when a notification is read.  
   - **Over‑caching**: storing large payloads (full message bodies) that waste memory.  
   - **Ignoring TTL drift**: setting zero TTL can lead to stale data; always provide reasonable expiration.

**5. Sanity‑check & communicate**  
   - Verify that cache hit ratio improves read latency while writes still propagate correctly.  
   - Explain trade‑offs: stronger consistency (write‑through) vs higher throughput (read‑through).  
   - Summarize key metrics to monitor: hit rate, eviction count, stale reads, and the impact of TTL on freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
