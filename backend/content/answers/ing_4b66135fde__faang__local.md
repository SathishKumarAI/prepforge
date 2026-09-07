---
qid: ing_4b66135fde__faang__local
question: 'Explain: Rolling Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 423
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *rolling‑window* algorithm used for rate limiting (e.g., “no more than N requests in the last T seconds”). Assume we have a single user or IP, high traffic, and low latency is required. We’ll confirm that we need to support both exact window and leaky‑bucket semantics.

**Approach**  
1. **Data structure**: a time‑ordered queue (or deque) of timestamps.  
2. **On each request**:  
   - Prune entries older than `now – T`.  
   - If the queue size < N → allow and push `now`; else reject.  
3. **Complexity**: O(1) amortized per request; memory = O(N).

Alternative: a *sliding‑log* with a hash of counts per sub‑bucket for higher throughput.

**Depth**  
- Use a monotonic queue to keep timestamps sorted; popping old ones is O(k) where k is the number of expired entries, which averages constant.  
- To avoid per‑request memory churn, preallocate a fixed‑size array and use two indices (circular buffer).  
- For distributed systems, store the queue in Redis with `LPUSH`/`LTRIM` or use an approximate algorithm like *Token Bucket*.

**Edge Cases**  
- Clock skew: normalize timestamps to a single epoch.  
- Burst at window edge: pruning must be strict (`≤ now‑T`).  
- Under‑provisioned memory: guard against N exceeding capacity.

**Optimize & Communicate**  
Explain trade‑offs: exact sliding windows give precise limits but are heavier; token buckets are lighter but allow short bursts. Mention that in production we’d monitor queue size and back‑off when approaching limits, and expose metrics (current count, average latency). This shows you understand both algorithmic detail and operational concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
