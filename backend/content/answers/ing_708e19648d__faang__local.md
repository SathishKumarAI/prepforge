---
qid: ing_708e19648d__faang__local
question: 'Explain: Common Failure Modes — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 578
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:13-05:00'
sources: []
---

**Common Failure Modes – Availability in AI‑Powered Systems**

| # | Clarify |
|---|---------|
| 1 | We’re evaluating why an AI service (e.g., recommendation engine) might go down or degrade, not just algorithmic bias. |
| 2 | Assumptions: high request volume, microservices architecture, stateless inference pods, autoscaling, cloud‑native observability. |

---

### Approach
1. **Identify single points of failure** – e.g., a monolithic model server, shared database, or external data feed.  
2. **Map latency & error propagation** – how a slow node inflates response times and triggers timeouts upstream.  
3. **Quantify resilience knobs** – retries, circuit breakers, graceful degradation, and fallback models.

---

### Depth
- **Model Serving Layer:** A single inference pod becomes a bottleneck; autoscaling lag can cause request spikes to hit the queue or timeout.  
- **Data Pipeline:** If training data ingestion stalls (e.g., failed S3 read), downstream services may serve stale predictions until cache expires.  
- **External Dependencies:** Third‑party APIs for feature enrichment (e.g., user profile lookup) introduce latency; a 5xx from that service can cascade into the recommendation engine if not isolated.  
- **Observability Gaps:** Without distributed tracing, pinpointing where a request stalls is hard, leading to prolonged MTTR.

**Complexity & Trade‑offs:**  
Adding redundant inference nodes improves availability (O(1) extra cost per pod) but increases operational overhead and memory usage for large models. Implementing circuit breakers adds latency (~10–20 ms) but prevents cascading failures.

---

### Edge Cases
- Sudden traffic surge during a promotion → autoscaler under‑provisioning.  
- Model drift causing repeated re‑training, blocking inference endpoints.  
- Network partition between microservices in the same availability zone.

**Tests:** Simulate 95th percentile latency spikes; inject failed external API responses; toggle autoscaler limits.

---

### Optimize & Communicate
1. **Deploy multiple inference replicas behind a load balancer** (redundancy).  
2. **Implement graceful degradation**: return cached or fallback predictions when the primary model is unavailable.  
3. **Use health‑check probes and circuit breakers** to isolate failures quickly.  
4. **Add real‑time metrics (latency, error rates) + alerts** for rapid MTTR.

Narrate the plan by framing each failure mode as a “failure scenario” and mapping mitigation steps, showing clear trade‑offs between cost, latency, and resilience—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
