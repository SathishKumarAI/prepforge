---
qid: ing_2a8b70c975__faang__local
question: 'Explain: 4.2 Load Balancing and Health Checks — Single Point of Failure
  (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 522
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:14-05:00'
sources: []
---

**Clarify**  
We’re asked how to avoid a *single point of failure* (SPOF) when using load balancers and health checks in an AI‑driven service (e.g., inference API). Assume we have multiple model servers behind a load balancer, auto‑scaling enabled, and we want high availability for both the LB itself and the health‑check endpoints.

**Approach**  
1. Deploy *redundant* load balancers in active‑passive or active‑active mode.  
2. Use DNS round‑robin or a global LB (e.g., AWS Global Accelerator) to route traffic across regions.  
3. Instrument every backend with health checks that report not only status but also latency, error rate, and resource usage.  
4. Tie the health‑check logic into an orchestrator (K8s liveness/readiness probes + custom metrics).  
5. Implement circuit breakers and graceful degradation on the LB side.

**Depth**  
- **Redundant LBs:** Two or more front‑ends with failover; use sticky sessions only if necessary, otherwise rely on stateless design.  
- **Health‑check strategy:** Poll every 10 s, timeout <1 s, threshold of 3 failures to mark unhealthy. Use *probe* containers that simulate inference requests to catch model drift or resource exhaustion.  
- **Circuit breaker:** If a backend returns >5xx for consecutive checks, temporarily drop traffic and back‑off exponentially.  
- **Scaling policy:** Scale out when CPU/Memory >70% or latency >200 ms; scale in after 10 min of stability.

**Edge Cases**  
- *LB failure*: DNS TTL too long → stale IPs. Use low TTL (≤30 s).  
- *Health‑check false positives*: Over‑aggressive thresholds may evict healthy nodes. Tune thresholds per model workload.  
- *Network partition*: LB and backend in same AZ fail together; use multi‑AZ deployment.

**Optimize & Communicate**  
Explain that redundancy turns the LB into a *cluster* rather than a single node, while health checks act as continuous observability. Stress trade‑offs: more LBs increase cost but reduce latency variance; aggressive thresholds improve safety but may underutilize capacity. Conclude by highlighting that this architecture eliminates SPOF for both traffic routing and service health monitoring, ensuring high availability of AI inference services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
