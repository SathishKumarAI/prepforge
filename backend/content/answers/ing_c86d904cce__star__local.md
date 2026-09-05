---
qid: ing_c86d904cce__star__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 342
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:23-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a real‑time payments API that had to handle thousands of transactions per second. Our existing monolith was a single point of failure and our SLA demanded 99.99% uptime during peak trading hours.

**Task:**  
I needed to design a load balancing layer that would distribute traffic across multiple stateless service instances, automatically detect failures, and maintain session consistency without sacrificing latency or throughput.

**Action:**  
I chose a Layer‑4 TCP load balancer (NGINX Plus) with health‑check probes every 2 seconds. To keep sessions sticky only when necessary, I used cookie‑based affinity with a short TTL to avoid long‑term binding. For failover, I configured active‑passive HAProxy clusters behind Route 53 weighted routing and enabled DNS failover for the external IPs. I also set up CloudWatch metrics (latency, error rate) and auto‑scaling policies that triggered on sustained 5xx spikes. Finally, I added a circuit breaker pattern in the application to quickly return 503 during downstream outages.

**Result:**  
After deployment, we saw a drop from 99.92% to 99.998% uptime over three months, with average request latency staying under 15 ms even at peak load. The system handled sudden traffic surges without manual intervention, and I documented the architecture for future teams, reinforcing our high‑availability culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
