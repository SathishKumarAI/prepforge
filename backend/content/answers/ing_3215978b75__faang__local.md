---
qid: ing_3215978b75__faang__local
question: Your provider gives you 2M tokens/minute. How do you rate-limit your own
  users so you don't blow through it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 504
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:49-05:00'
sources: []
---

**Clarify**  
You’re limited to **2 M tokens/minute (≈33k tokens/sec)** from the provider.  
Goal: expose users to a smooth experience while guaranteeing we never exceed that quota.  
Assumptions I’d confirm:

1. Token usage is per request; no hidden background calls.  
2. All user requests are independent (no cross‑user throttling).  
3. The system can store per‑user counters and timestamps in memory or Redis.

---

**Approach**  
Implement a *bucket‑based rate limiter* per user, backed by an atomic counter that resets every minute.  
1. On each request, atomically increment the user’s token count.  
2. If `count + req_tokens > bucket_capacity`, reject/queue.  
3. Reset counters at minute boundaries (cron or a time‑wheel).  

This gives O(1) checks and keeps per‑user state small.

---

**Depth**  
- **Bucket capacity** = 2 M tokens *per minute* globally; we split it proportionally: `capacity_user = max(1, floor(global_cap / total_active_users))`.  
- Use a distributed counter (Redis INCR) to avoid race conditions.  
- If a user exceeds their bucket, respond with **429 Too Many Requests** and include a `Retry‑After` header.

Complexity: O(1) per request; memory ≈ number_of_users * size_of_counter (~8 bytes each).  

Trade‑off: Fixed buckets can starve bursty users; we could switch to leaky‑bucket or token‑bucket if needed.

---

**Edge Cases**  
- Sudden spike of new users → bucket sizes shrink, causing many rejections. Test with simulated load.  
- Clock drift between services → use a single authoritative time source.  
- Users who send large requests > bucket size → reject immediately to protect quota.

---

**Optimize & Communicate**  
After initial rollout, monitor **quota utilization vs. user satisfaction**. If overall usage < 70 % of capacity, redistribute tokens per user or allow larger buckets.  
Explain to interviewers: “I start with a simple, correct solution, then iteratively tune based on metrics.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
