---
qid: ing_4c279dd432__star__local
question: 'Explain: Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 336
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:36-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched a real‑time payment gateway that handled ~2 k transactions per second. Within the first month, customers reported intermittent failures during peak hours, and our SLA promised 99.9% uptime.

**Task:**  
I was tasked with redesigning the architecture to meet the 99.9% availability target while keeping latency under 50 ms and preserving cost efficiency.

**Action:**  
First, I performed a failure‑mode analysis: single points in the auth service, database master node, and external routing were identified. I introduced active‑active microservices behind a Kubernetes cluster with rolling updates, and added a read‑replica pool for the SQL database to absorb traffic spikes. For network resilience, I deployed an edge‑caching CDN that cached common responses and automatically redirected traffic if a region failed. I also implemented health‑check probes and circuit breakers (Hystrix) so that downstream services could fail fast without cascading. Finally, I set up Grafana dashboards with Prometheus alerts to detect anomalies before they hit users.

**Result:**  
After the rollout, our uptime jumped from 97.2% to 99.98%, exceeding the SLA by 0.08%. Latency stayed at ~45 ms on average, and we reduced infrastructure cost by 12% through efficient scaling. I learned that true availability isn’t just adding replicas—it’s about designing for graceful degradation, automated failover, and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
