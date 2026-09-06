---
qid: ing_7da2bf124e__think__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 541
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:19:25-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - Confirm what “writes” means (creating new short URLs).  
   - Ask whether reads (redirects) or analytics are in scope.  
   - Decide on constraints: traffic volume, persistence, latency, uniqueness, collision handling, TTL, and eventual consistency.  

**2. Pick a mental model / framework**  
   - Use the classic *system‑design* structure: *requirements → high‑level architecture → data layer → algorithmic details → scaling & failure handling → trade‑offs*.  
   - Apply the *CAP theorem* to decide on consistency vs availability for lookups.  

**3. Step‑by‑step reasoning**  
   1. **Functional requirements**: create, read, delete, update, stats.  
   2. **Non‑functional**: <10 ms latency, 99.9% uptime, millions of URLs per day.  
   3. **Component sketch**: API gateway → load balancer → stateless web service → ID generator → cache (Redis) → key‑value store (Cassandra/Bigtable).  
   4. **ID generation strategy**: base‑62 encode a monotonically increasing counter or use ULIDs; discuss sharding by prefix.  
   5. **Data model**: primary key = short code, value = original URL + metadata.  
   6. **Caching & hot‑spotting**: keep most frequently accessed URLs in Redis with LRU eviction.  
   7. **Scaling**: horizontal scaling of services; partitioning of storage by hash ring.  
   8. **Failure handling**: retries, circuit breakers, graceful degradation (return error page).  

**4. Common traps to avoid**  
   - Assuming a single counter will be a bottleneck → use sharded counters or atomic ops in DB.  
   - Forgetting about collision probability when generating codes.  
   - Ignoring security (e.g., open redirect attacks).  
   - Over‑optimizing read path at the expense of write durability.

**5. Sanity‑check & verbalize**  
   - Run through edge cases: very high traffic, a burst of writes, a node failure.  
   - Summarize trade‑offs: choosing eventual consistency for speed vs strict consistency for correctness.  
   - Communicate clearly to the interviewer: “Here’s my plan; let me know if you want more detail on any part.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
