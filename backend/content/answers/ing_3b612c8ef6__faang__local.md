---
qid: ing_3b612c8ef6__faang__local
question: 'Explain: Query timeout — Circuitbreaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 482
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:24-05:00'
sources: []
---

**Clarify**  
A *query timeout* occurs when a database or search engine returns no result within an allotted time, often due to long-running scans or resource contention. A *circuit breaker* is a fault‑tolerance pattern that trips when service calls exceed thresholds (latency, error rate), preventing further requests until the system recovers.

**Assumptions**  
- The query runs against a distributed datastore (e.g., Elasticsearch).  
- Timeouts are configured per request or globally.  
- Circuit breaker state is shared across micro‑services via a central store or in‑process cache.

---

**Approach**  

1. **Detect**: Measure latency and error counts per window.  
2. **Thresholds**: Define `maxLatency` (e.g., 200 ms) and `errorRate` (e.g., 5%).  
3. **Trip**: If either threshold is exceeded, open the circuit for a cooldown period (`cooldown = 30 s`).  
4. **Fallback**: Return cached results or a default response to avoid cascading failures.  
5. **Reset**: After cooldown, allow limited “half‑open” requests; if they succeed, close the circuit.

---

**Depth**  

- Complexity: O(1) per request for state checks; O(n) to aggregate metrics over sliding windows.  
- Trade‑offs: Tight thresholds reduce latency but increase false positives; loose thresholds risk overload.  
- Implementation: Use a token bucket or leaky bucket algorithm for rate limiting, coupled with exponential backoff on retries.

---

**Edge Cases**  

- Sudden spike in traffic → circuit opens too often (false positives).  
- Stale cache data after reset → stale results served.  
- Distributed environment → clock skew can misalign cooldown timers.

---

**Optimize & Communicate**  

- Expose metrics (`latency_histogram`, `error_rate`) to Prometheus; set alerts for threshold breaches.  
- Use a circuit‑breaker library (e.g., Resilience4j) to avoid reinventing logic.  
- Document the rationale: “We balance user experience with system stability by preventing resource exhaustion when queries consistently time out.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
