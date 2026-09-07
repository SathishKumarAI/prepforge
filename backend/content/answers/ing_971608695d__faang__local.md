---
qid: ing_971608695d__faang__local
question: 'Explain: Least response time method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:36:33-05:00'
sources: []
---

**Least Response Time (LRT) Method – Load Balancing**

---

### Clarify  
*Problem:* How does the Least‑Response‑Time algorithm distribute incoming requests across a pool of servers?  
*Assumptions to confirm:*  
1. All servers are homogeneous or at least comparable in capacity.  
2. Each server exposes a measurable “response time” metric (e.g., average latency).  
3. Network overhead for querying this metric is negligible compared to request processing.

---

### Approach  
1. **Collect** per‑server response times periodically.  
2. **Select** the server with the smallest value.  
3. **Route** the new request to that server and repeat for each incoming call.

---

### Depth  
- **Metric Acquisition:** Use a lightweight health‑check endpoint or an in‑memory cache updated by each server’s own statistics.  
- **Decision Logic:** A simple min‑heap or priority queue keeps servers sorted by their latest response time, giving O(log n) insertion and removal.  
- **Handling Stale Data:** Implement TTLs; if a metric is older than X ms, treat it as unknown and fall back to round‑robin until fresh data arrives.  
- **Complexity:** Time O(1) per request after heap maintenance; space O(n).  

---

### Edge Cases  
- **Server failure** → remove from heap immediately.  
- **Burst traffic** → metrics lag behind actual load; mitigate with exponential smoothing.  
- **Heterogeneous hardware** → response time alone may mislead; augment with capacity weighting.

---

### Optimize & Communicate  
- **Adaptive sampling:** Increase query frequency during high variance periods.  
- **Hybrid strategy:** Combine LRT with least‑connections to balance latency and queue length.  
- **Explain to interviewers:** Emphasize the trade‑off between responsiveness (low latency) and fairness, and how the algorithm dynamically adapts to real‑time performance signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
