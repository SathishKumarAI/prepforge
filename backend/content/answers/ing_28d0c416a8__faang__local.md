---
qid: ing_28d0c416a8__faang__local
question: 'Explain: :star: Sliding Window algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 451
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:18:27-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* We need to enforce a per‑user request quota (e.g., 100 req/min) without storing every individual request timestamp.  
*Assumptions to confirm:*  
- Requests arrive in chronological order (or we can sort them).  
- Limits are expressed as “N requests in any continuous T‑second window.”  
- We only need a boolean decision per request, not the exact count.

---

**2️⃣ Approach**  
Maintain for each user a **queue of timestamps** that fall inside the current sliding window. When a new request arrives:  

1. Prune old entries older than `now - T`.  
2. If queue size < N → allow and enqueue timestamp.  
3. Else → reject.

This is O(1) amortized per request because each timestamp enters & leaves the queue once.

---

**3️⃣ Depth**  
- **Data structure:** `Deque<long>` (or `LinkedList`).  
- **Memory:** O(U · N) where U = active users, N = max requests.  
- **Complexity:** Amortized *O(1)* per request; worst‑case *O(N)* if we prune all entries at once.  
- **Thread safety:** Use a concurrent map (`ConcurrentHashMap`) with per‑user locks or lock‑free structures if high throughput is required.

---

**4️⃣ Edge Cases**  
- Burst of requests arriving simultaneously → queue may temporarily exceed N; reject correctly.  
- Clock skew between client and server → normalize timestamps or use monotonic clock.  
- User never seen again → stale queues must be garbage‑collected (e.g., TTL on map entries).  

---

**5️⃣ Optimize & Communicate**  
- **Optimization:** Replace deque with a circular buffer for lower GC pressure; batch prune during idle periods.  
- **Communication:** Explain the sliding window as a “moving time horizon” and how pruning keeps only relevant data, keeping memory bounded. Emphasize that this algorithm is linear in request volume and easily scales horizontally by sharding users across machines.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
