---
qid: ing_23b6f4a34c__faang__local
question: How would it work? — Ratelimiterapi
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 454
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design of an API that rate‑limits requests per user or key.  
Assumptions:  
* Rate limits are configurable (e.g., 100 req/min).  
* Requests may be bursty; we need to support sliding windows or token buckets.  
* The system must scale horizontally, tolerate node failures, and provide low latency.

**Approach**  
1. **Client‑side token bucket** – each request checks a local counter; if it exceeds the bucket, reject.  
2. **Server‑side enforcement** – store counters in an in‑memory distributed cache (Redis or Memcached) with atomic `INCR` and TTL.  
3. **Burst handling** – use a leaky‑bucket algorithm to smooth traffic.  
4. **API contract** – expose `/rate-limit/status`, `/rate-limit/config`.  
5. **Observability** – emit metrics (`requests_total`, `rejections`) to Prometheus.

**Depth**  
* Redis key: `<user-id>:<window>`; value = count.  
* Atomic increment with `SETNX` + `EXPIRE` ensures consistency.  
* Complexity: O(1) per request, memory ≈ number of active users × size of counter.  
* Trade‑off: Single point of failure → use Redis cluster with replication.

**Edge Cases**  
* Clock skew between nodes – use Redis server time.  
* High cardinality users – implement a fallback in‑memory cache for very low traffic keys.  
* Sudden traffic spikes – backpressure by returning HTTP 429 and `Retry-After`.

**Optimize & Communicate**  
I’d first prototype with Redis, benchmark latency under 10k QPS, then consider sharding counters per region to reduce hot spots. I’ll explain my choices, quantify expected throughput (≈5 µs per request), and outline how observability will surface anomalies early. This shows clear problem framing, a scalable plan, and thoughtful trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
