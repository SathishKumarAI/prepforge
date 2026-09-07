---
qid: ing_0d46496d20__faang__local
question: 'Explain: Capacity management — ''10 Principles for Building Resilient Payment
  Systems'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 499
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:07-05:00'
sources: []
---

**Clarify**  
We’re asked how the *Capacity Management* principle fits into “10 Principles for Building Resilient Payment Systems.”  The goal is to keep transaction throughput high while avoiding overload and ensuring graceful degradation.

Key assumptions:  
1. Payments are latency‑sensitive, so we can’t afford long queues.  
2. System components (APIs, auth, fraud, settlement) have distinct resource profiles.  
3. Load varies with time of day, promotions, or attacks.

**Approach**  
1. Model each component’s CPU/memory/IO requirements per request.  
2. Define SLAs for throughput and latency.  
3. Use horizontal scaling + auto‑scaling triggers based on real‑time metrics.  
4. Incorporate circuit breakers & rate limiting to protect downstream services.

**Depth**  
- **Capacity Planning**: Compute peak load × safety margin → required instances.  
- **Autoscaling Policy**: Trigger at 70 % CPU for 5 min; scale out by 1–2 nodes; cooldown of 10 min.  
- **Load Balancing**: Round‑robin with health checks; sticky sessions only if needed.  
- **Observability**: Metrics (TPS, latency percentiles), logs, and traces; alert on SLA breaches.  
- **Failover**: Multi‑AZ deployment; DNS failover for API gateways.

Complexity: O(1) per request; scaling decisions run in near‑real time. Trade‑off between over‑provisioning (cost) and under‑provisioning (latency spikes).

**Edge Cases**  
- Sudden traffic surge (flash sale, DDoS).  
- Partial outage of a downstream service (e.g., fraud engine).  
- Misconfigured scaling thresholds leading to thrashing.

Test by simulating peak loads, introducing failures, and measuring SLA compliance.

**Optimize & Communicate**  
Highlight that capacity management is iterative: monitor → adjust models → refine autoscaling. Emphasize the feedback loop and cross‑team collaboration (infra, devops, product) to keep payment systems resilient. This concise, structured answer demonstrates clear problem framing, a systematic solution, depth in implementation details, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
