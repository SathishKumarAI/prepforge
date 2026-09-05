---
qid: ing_d0d6491f46__star__local
question: 'Explain: RabbitMQ — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 401
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:01-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were building an event‑driven architecture for real‑time fraud detection and transaction processing. We had dozens of microservices—payment ingestion, risk scoring, notification, audit logging—and each service needed its own queue to isolate traffic, but our ops team was only comfortable managing one RabbitMQ broker per environment.

**Task:**  
I had to design a single‑broker setup that could handle all queues reliably, keep latency below 30 ms for fraud alerts, and still allow independent scaling of consumers without affecting the rest of the system.

**Action:**  
I created a sharded topology: each logical queue was split into 10 partitions (e.g., `fraud-alert-0…9`), all bound to one broker. I used RabbitMQ’s “topic” exchanges with routing keys that included the partition suffix, and implemented a lightweight round‑robin dispatcher in the producer service to distribute messages evenly across partitions. I set per‑queue resource limits (memory, disk) and enabled “prefetch” of 100 on consumers to avoid burst traffic. For monitoring, I leveraged Prometheus exporters and Grafana dashboards that visualised queue depth, consumer lag, and broker throughput. Finally, I scripted automatic rebalancing when a partition’s backlog exceeded 5 000 messages.

**Result:**  
The single‑broker architecture handled 1.2 M events per minute with an average end‑to‑end latency of 18 ms for fraud alerts. We cut ops overhead by 70 % and avoided the complexity of multi‑broker failover. I learned that careful partitioning, routing, and resource isolation can make one broker a scalable backbone for many services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
