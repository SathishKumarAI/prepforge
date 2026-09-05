---
qid: ing_9dab36e314__star__local
question: 'What is Event Driven Architecture? — Event-Driven Architecture (EDA): A
  Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 328
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:37-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our daily batch jobs were choking the database during peak trading hours; latency spiked from 120 ms to over 2 seconds, and we risked missing the 30‑second settlement window.

**Task:**  
I was tasked with redesigning the data pipeline so that trades could be processed in real time without blocking the core database, while still ensuring eventual consistency for reporting dashboards.

**Action:**  
I introduced an event‑driven architecture using Apache Kafka as the message broker. Each trade service published a “trade‑created” event to a dedicated topic; downstream microservices (risk engine, compliance checker, ledger updater) subscribed asynchronously. I leveraged schema registry to enforce Avro schemas and used Kafka Streams for lightweight transformations. To guarantee fault tolerance, I set up consumer groups with at-least-once semantics and integrated an offset management strategy in PostgreSQL. For monitoring, I added Prometheus exporters on each microservice and visualized lag metrics in Grafana.

**Result:**  
Processing latency dropped from 2 seconds to under 200 ms, meeting our settlement deadline. The system handled a 4× increase in trade volume during a market spike with no outages. I learned that decoupling services via events not only improves scalability but also simplifies rollback and testing strategies for distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
