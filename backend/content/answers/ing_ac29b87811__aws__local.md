---
qid: ing_ac29b87811__aws__local
question: 'Explain: Scalable — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 546
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:33-05:00'
sources: []
---

**Situation (S)**  
I was leading the data‑pipeline team for a fintech app that had to ingest ~10 M events per day from user devices and feed them into real‑time fraud models. The existing RabbitMQ cluster hit 95 % CPU at peak, causing >200 ms latency spikes.

**Task (T)**  
Design a scalable, highly available messaging layer that could handle 20× the current load with <50 ms end‑to‑end latency while keeping operational cost under $10k/month.

**Action (A)**  
I chose **Amazon MSK (Kafka)** because it gives us managed Kafka with built‑in broker scaling and IAM integration.  
- **Partitioning strategy:** 200 partitions across 5 brokers, each broker on an **r6i.large** instance, giving ~1 TB storage per broker.  
- **Auto‑scaling:** Enabled *Broker Count Auto Scaling* (AWS AppConfig) to add/remove brokers based on CPU >70 % or <30 %.  
- **Replication factor 3** for durability and fault tolerance.  
- Integrated with **Kinesis Data Firehose** to stream to Redshift for batch analytics, using **Kafka Connect** source connector.  
- Employed **Confluent Schema Registry** (via MSK) to enforce Avro schemas and avoid data drift.

**Result (R)**  
After deployment:  
- Throughput rose from 10 M to 250 M events/day (25×).  
- Latency dropped to 35 ms average, with 99th percentile <80 ms.  
- Cost stayed at $9.4k/month—$1.6k below budget.  
- Incident rate fell by 90 % due to automated scaling.

**Leadership Principles Highlighted**  
*Customer Obsession* – reduced latency directly improved user trust. *Ownership* – I drove the end‑to‑end solution, from design to ops. *Dive Deep* – tuned partition count and broker size based on real metrics. *Bias for Action* – moved quickly to MSK instead of building Kafka from scratch.

**Bar‑raiser takeaways**  
- Quantified impact (latency, throughput, cost).  
- Demonstrated ownership across architecture, ops, and monitoring.  
- Showed deep technical decisions with clear trade‑offs (partition count vs. broker size).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
