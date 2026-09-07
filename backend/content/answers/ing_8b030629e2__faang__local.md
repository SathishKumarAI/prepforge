---
qid: ing_8b030629e2__faang__local
question: 'Explain: Using different kinds of rate limiters in concert'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 676
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:20-05:00'
sources: []
---

**Clarify**  
We’re asked how *multiple* rate‑limiting strategies (token bucket, leaky bucket, fixed window, sliding log, etc.) can be combined to protect a machine‑learning service—e.g., an inference endpoint or a training job scheduler.  
Assumptions I’d confirm:  

- The system serves many clients with heterogeneous SLAs.  
- Traffic bursts are common (model updates, batch jobs).  
- Latency and throughput are both critical.  
- We can instrument per‑client counters in Redis/Redis‑Streams or use a dedicated rate‑limit service.

---

**Approach**  
1. **Global guard** – a *fixed window* limiter to cap overall QPS for the cluster (hardware, GPU slots).  
2. **Per‑user bucket** – a *token‑bucket* per client, allowing short bursts but enforcing an average rate over time.  
3. **API‑level sliding window** – a *sliding log* or *rolling counter* to provide fine‑grained per‑endpoint enforcement (e.g., heavy models vs lightweight ones).  
4. **Dynamic adjustment** – feed the global limiter’s state into the per‑user buckets so that if overall capacity shrinks, each bucket scales down proportionally.  

---

**Depth**  
- **Fixed window**: `current_window = now / WINDOW_SIZE`. Store a counter in Redis; reset at window boundary. O(1) time, but suffers from bursty spikes.  
- **Token bucket**: `tokens = min(capacity, tokens + (now - last_ts)*rate)`. Allows bursts up to capacity. Requires atomic increment (Redis Lua).  
- **Sliding log**: Keep a timestamped list of request times per key; prune older entries beyond WINDOW_SIZE. Complexity O(k) where k is burst size—acceptable for small capacities.  

Combining them: on each request, first check the global fixed window. If passed, decrement the user’s token bucket atomically. If tokens remain, allow. Finally, log the timestamp in the sliding log for per‑endpoint enforcement.

---

**Edge Cases**  
- Clock skew between services → use NTP or logical clocks.  
- Redis failure → fallback to local counters with eventual consistency.  
- Sudden capacity drop (GPU fail) → global limiter throttles before user buckets misbehave.  

Tests: simulate bursty traffic, concurrent clients, and node restarts; verify that per‑user limits never exceed configured caps even under high load.

---

**Optimize & Communicate**  
- **Caching**: keep the most active user buckets in memory for 10 s to reduce Redis roundtrips.  
- **Backpressure**: expose a “rate‑limit‑exceeded” HTTP 429 with retry‑after header.  
- **Observability**: emit per‑bucket metrics (tokens left, window usage) to Prometheus; alert on sustained high throttling.  

By layering these limiters—global for hardware, token buckets for user bursts, sliding logs for fine‑grained API protection—we achieve a robust, low‑latency control plane that scales with traffic while honoring SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
