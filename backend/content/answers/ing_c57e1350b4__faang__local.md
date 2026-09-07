---
qid: ing_c57e1350b4__faang__local
question: 'Explain: API Reliability — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 676
total_tokens: 912
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:09-05:00'
sources: []
---

**Clarify**

You’re asking about *API reliability* in the context of a machine‑learning system.  
- **What is an API?** A set of endpoints (usually HTTP/REST or gRPC) that expose functionality to clients.  
- **Why does it matter for ML?** Clients (mobile, web, other services) invoke prediction, training, model management, etc. If the API is flaky, downstream products fail.  

Assumptions I’d confirm:  
1. The system exposes a public inference endpoint (`/predict`).  
2. Traffic is bursty; latency < 200 ms is required.  
3. Clients tolerate eventual consistency but not >5 % error rate.

---

**Approach**

1. **Define reliability metrics** (latency, availability, error‑rate).  
2. **Identify failure modes**: network partitions, server overload, model rollback failures, data drift.  
3. **Design mitigations**: circuit breakers, retries with back‑off, request queueing, load balancing, graceful degradation.  
4. **Implement observability**: metrics (Prometheus), tracing (OpenTelemetry), alerts.  

---

**Depth**

*Architecture:*  
- **Front‑end gateway** (e.g., Envoy) routes to a pool of inference workers behind a Kubernetes service.  
- Each worker runs the ML model in a lightweight container; hot‑swap models via sidecar or feature flag.  
- **Circuit breaker** opens if >10 % requests error for 30 s, routing traffic to fallback (e.g., cached predictions).  

*Load handling:*  
- **Rate limiting + token bucket** per client ID to protect the pool.  
- **Horizontal scaling**: autoscale based on CPU/latency metrics; use *KEDA* or custom controller.  

*Failure recovery:*  
- **Retry policy** with exponential back‑off and jitter (max 3 retries).  
- **Fallback service** returns a “stale” prediction from an older model version if the primary is down.  

*Complexity:*  
- Time: O(1) per request (gateway + worker).  
- Space: linear in number of workers; cache size tuned to memory limits.

---

**Edge Cases**

| Case | Impact | Test |
|------|--------|------|
| Sudden traffic spike (DDoS) | Latency ↑, 5xx errors | Simulate 10× normal load |
| Model file corruption | All predictions fail | Rollback to previous model |
| Network partition between gateway & workers | Requests time‑out | Partition simulation in test env |

---

**Optimize & Communicate**

- **Performance:** Use async inference (e.g., Triton Inference Server) and batch requests to amortize GPU costs.  
- **Observability:** Dashboards showing request latency percentiles, error rates, circuit breaker status; alerts on SLA breach.  

Narrate: “By treating the API as a first‑class service with its own health checks and failover paths, we can keep the ML model reachable even under partial outages, meeting our 99.9 % availability target while ensuring that latency stays below 200 ms.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
