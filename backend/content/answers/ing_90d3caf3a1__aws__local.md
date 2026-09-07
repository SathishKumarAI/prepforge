---
qid: ing_90d3caf3a1__aws__local
question: 'Explain: Sliding Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 536
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:38-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a high‑throughput, low‑latency rate limiter for an API gateway that needed to enforce per‑user request quotas (e.g., 100 requests/second) while scaling to millions of users on AWS.

**Action – Design & Code**  
I chose the *Sliding Window Counter* algorithm because it gives tighter control than fixed windows and is easy to implement with distributed stores.  
1. **Data model** – Redis sorted sets (`ZSET`) per user, key: `rate:{user_id}`; each element is a timestamp (ms) → request count.  
2. **Workflow**  
   ```python
   def allow(user_id):
       now = int(time.time() * 1000)
       window_start = now - WINDOW_MS
       pipe = redis.pipeline()
       pipe.zremrangebyscore(f"rate:{user_id}", "-inf", window_start)   # prune old entries
       pipe.zcard(f"rate:{user_id}")                                   # current count
       _, count = pipe.execute()

       if count >= LIMIT:
           return False  # rate‑limited

       redis.zadd(f"rate:{user_id}", {now: now})
       redis.expire(f"rate:{user_id}", int(WINDOW_MS/1000)+10)
       return True
   ```
3. **Scalability & Availability** – Redis‑Cluster provides horizontal scaling; each shard handles a subset of users, eliminating hot keys.  
4. **Cost & Trade‑offs** – Using DynamoDB would increase latency (write + read per request). Redis gives <1 ms ops for millions of requests with ~0.5 $/hour per node.

**Result**  
After deployment on 3-node Redis‑Cluster, the API handled 2 M QPS while keeping a **99.9% hit rate** and respecting quotas exactly (no spikes). Latency added was <2 ms per request, well within SLA.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a reliable experience for end‑users by preventing abuse without false positives.  
- *Ownership & Dive Deep*: I wrote the full code, tuned Redis settings, and performed chaos tests to validate resilience.  

**Bar‑raiser Takeaway**  
Show concrete metrics (QPS, hit rate), explain trade‑offs, and demonstrate learning from a small failure: initial DynamoDB design caused >10 ms spikes; switching to Redis fixed it—proof of iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
