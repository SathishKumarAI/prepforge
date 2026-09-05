---
qid: ing_127110d725__star__local
question: 'Explain: Conclusion — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:32-05:00'
sources: []
---

**Situation:**  
When I joined the fintech startup, our monolith was turning into a collection of micro‑services for risk analysis and fraud detection. Each service spun up on Kubernetes, but we had no reliable way to locate them, so inter‑service calls were hardcoded with IPs that changed every deployment.

**Task:**  
I needed to design a dynamic Service Discovery layer that would let any new or scaled service find others without manual configuration, while keeping latency low and handling high churn during rolling updates.

**Action:**  
I chose Consul because of its lightweight agent model and health‑check integration. I deployed a sidecar pattern so each pod registered itself with Consul on startup and deregistered on shutdown. For load balancing, I used Consul’s built‑in service mesh to route requests through Envoy proxies that read the latest service catalog in real time. I also added DNS‑based queries for legacy components and implemented TTL checks to remove stale entries quickly. Finally, I wrote a Go client library that cached service addresses locally and refreshed via long‑polling to reduce Consul queries.

**Result:**  
After rollout, inter‑service latency dropped by 12 % due to better routing, deployment times shrank from 15 min to under 3 min because services no longer needed manual IP updates, and the failure rate during rollouts fell below 0.5 %. I learned that a robust Service Discovery system hinges on health checks, caching, and minimal external dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
