---
qid: ing_e66e4bd8d0__star__local
question: 'Explain: How a Request Flows Through the System — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 321
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:50-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we launched a new real‑time payment gateway that needed to handle 10 k requests per second during peak trading hours. The existing single‑instance API was crashing under load and latency spiked to over 300 ms.

**Task:**  
I had to design an elastic, fault‑tolerant request routing layer that could distribute traffic evenly across backend services while ensuring minimal latency and graceful degradation if a node failed.

**Action:**  
I chose a Layer‑4 TCP load balancer built on HAProxy. First, I set up a DNS round‑robin with health checks to expose multiple IPs. Inside the data center, I deployed HAProxy behind an NGINX edge that performed SSL termination and basic rate limiting. For traffic distribution I used least‑conn algorithm coupled with sticky sessions via cookies for stateful microservices. To monitor performance I integrated Prometheus metrics (request latency, error rates) into Grafana dashboards. When a backend node went down, HAProxy automatically stopped routing to it after 5 health‑check failures and restarted traffic once the node recovered.

**Result:**  
Post‑deployment, our peak throughput increased to 25 k req/s with average latency dropping from 280 ms to 45 ms, and the error rate fell below 0.01%. I learned that choosing the right balancing algorithm and embedding observability are critical for high‑availability systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
