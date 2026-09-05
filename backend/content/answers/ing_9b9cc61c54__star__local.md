---
qid: ing_9b9cc61c54__star__local
question: 'Explain: Reliability and Resiliency — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 334
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:22-05:00'
sources: []
---

**Situation**  
During my senior capstone, we were building a real‑time fraud detection service for an online marketplace. The initial prototype processed 2 k transactions per second but had a 12 % latency spike during peak hours, causing the business to lose revenue and eroding trust in our model.

**Task**  
I was tasked with redesigning the system so that it maintained sub‑200 ms latency for 99.9 % of requests while ensuring zero data loss if any node failed or a sudden traffic surge hit the cluster.

**Action**  
First, I introduced a message queue (Kafka) to decouple ingestion from processing and added partition replication for fault tolerance. Then I refactored the inference layer into stateless micro‑services behind an Nginx load balancer with health checks that routed traffic away from unhealthy nodes. For resilience, I implemented retry logic with exponential back‑off and a dead‑letter queue to capture transient failures. Finally, I set up Prometheus/Grafana dashboards for real‑time latency and error metrics, and used chaos engineering (Gremlin) to simulate node outages during load tests.

**Result**  
Latency dropped from 12 % spikes to less than 0.5 % under 4 k TPS, with a 99.97 % success rate. The system survived simulated failures without data loss, and the team now uses this architecture as a template for all new ML services. I learned that reliability starts with proper decoupling, monitoring, and intentional failure testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
