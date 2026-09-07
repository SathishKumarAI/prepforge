---
qid: ing_1dc3b767e2__faang__local
question: 'Explain: Operational Posture in May 2026 — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:54:29-05:00'
sources: []
---

**Operational Posture (May 2026) – Serving Infrastructure**

| **Clarify** | *Goal*: Keep a global AI‑serving stack running with <1 % latency SLA while scaling to 10× traffic.  
*Assumptions*: • Traffic is bursty, geo‑distributed; • Models are 2–5 GB, inference ~10 ms; • Budget permits autoscaling but not over‑provisioning. |
| **Approach** | 1️⃣ *Observability* – distributed tracing (OpenTelemetry), metrics (Prometheus) + alerting.  
2️⃣ *Autoscale* – K8s HPA + custom metric (GPU utilization, queue depth).  
3️⃣ *Load‑balancing* – global L7 LB with latency‑based routing; per‑region edge caches.  
4️⃣ *Resilience* – canary releases, circuit breakers, graceful degradation.  |
| **Depth** | • **Latency**: target <15 ms end‑to‑end → use RDMA + NVLink for GPU clusters, SSD‑backed inference cache.  
• **Throughput**: 1M req/s → sharded model replicas per region; each node serves 5k rps.  
• **Cost**: spot instances for non‑critical regions; reserved capacity for peak zones.  
Complexity: O(log N) routing, linear autoscaling. |
| **Edge Cases** | • Sudden traffic spike (e.g., viral prompt) → fallback to cached “safe” responses.  
• GPU failure → instant failover to CPU path with 2× latency but no downtime.  
• Model drift detection → auto‑rollback if AUC drops <0.5%. |
| **Optimize & Communicate** | • Reduce cold‑start by pre‑warming 10% of replicas during low traffic.  
• Use serverless GPU functions for micro‑tasks to cut idle GPU cost.  
Narrative: “We’ll keep the system observable, autoscale intelligently, and design for graceful degradation—ensuring that every request either hits a warm GPU or falls back to CPU without violating our SLA.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
