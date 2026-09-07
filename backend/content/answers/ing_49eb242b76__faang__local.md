---
qid: ing_49eb242b76__faang__local
question: 'Explain: Backend Pool — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 457
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:30-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a backend pool and load‑balancer design that can serve a high‑traffic ML inference service (e.g., image classification). Key assumptions:  
* Request rate ~10 kreq/s, latency <50 ms.  
* Models are static binaries loaded into memory; no on‑the‑fly training.  
* Need horizontal scaling and graceful failover.  

**Approach**  
1. **Front‑end LB** (Layer 4) – round‑robin with health checks, sticky sessions optional for stateful caching.  
2. **Backend pool** – stateless inference containers behind a Kubernetes cluster; each pod exposes a gRPC endpoint.  
3. **Service discovery & health** – use Consul/K8s API to track live pods; LB queries this registry every 5 s.  
4. **Metrics & auto‑scaling** – Prometheus + Grafana feed HPA rules (CPU/latency).  

**Depth**  
* **LB algorithm**: weighted round‑robin, weights derived from pod CPU usage to balance load.  
* **Health checks**: 200 ms timeout, 3 consecutive failures to mark unhealthy.  
* **Routing**: Keep‑alive connections; TLS termination at LB for security.  
* **Complexity**: O(1) per request for hash‑based routing; scaling is linear with pods.

**Edge Cases**  
* Sudden traffic spike → autoscaler may lag → add a “warm‑up” queue.  
* Pod crash during inference → LB must retry after health check passes.  
* Model version upgrade → blue/green deployment: new pool receives 0% weight until ready, then shift gradually.

**Optimize & Communicate**  
Explain trade‑offs:  
* **Latency vs. availability** – extra health checks add a few ms but prevent serving stale pods.  
* **Resource utilization** – weighted LB improves GPU usage over pure round‑robin.  
Conclude by summarizing the end‑to‑end flow and emphasizing observability for production readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
