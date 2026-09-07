---
qid: ing_7f1027ac11__faang__local
question: 'Explain: Frontend Listener — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 435
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:40:30-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to design a *frontend listener* that routes user traffic to backend services via a load balancer in an ML‑inference platform. Confirm:  
- Target latency (<10 ms) and throughput (≥ 10k RPS).  
- Fault tolerance & zero‑downtime updates.  
- Metrics needed for auto‑scaling.  

**2️⃣ Approach**  
1. **Ingress Layer** – API gateway exposing ML endpoints.  
2. **Load Balancer** – round‑robin / least‑conns with health checks.  
3. **Backend Pool** – stateless inference workers behind a container orchestrator (K8s).  
4. **Observability** – Prometheus/ELK for latency, error rates; use sidecar probes for health.  

**3️⃣ Depth**  
- *Health Checks*: HTTP `/health` + model‑specific warm‑up endpoint.  
- *Session Persistence*: not needed if workers are stateless; otherwise sticky cookies.  
- *Scaling*: Horizontal Pod Autoscaler on CPU/latency thresholds.  
- *Zero‑downtime*: canary releases via weighted routing, traffic shifting controlled by a feature flag service.  
Complexity: O(1) per request at the LB; autoscaling decisions are O(log n).  

**4️⃣ Edge Cases**  
- Sudden spike → trigger burst mode scaling.  
- Model drift → health check fails, LB removes node until retraining completes.  
- Network partitions → fallback to a read‑only cache or degraded inference path.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs:  
- *Latency vs. Resilience*: Keep minimal hops; use local caching of model weights on workers.  
- *Cost vs. Availability*: More replicas = higher cost but lower SLA risk.  
Narrate: “We start with a lightweight listener, add health checks for robustness, and let autoscaling keep costs in check while meeting latency SLAs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
