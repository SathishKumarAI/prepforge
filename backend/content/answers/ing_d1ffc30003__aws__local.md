---
qid: ing_d1ffc30003__aws__local
question: 'Explain: Various Message Brokers — Kafkavsrabbitmqvssqsvssns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:36-05:00'
sources: []
---

**Situation / Task**  
While architecting a real‑time analytics platform for a global e‑commerce client, I had to decide between Kafka, RabbitMQ, SQS and SNS for ingesting clickstream data at ~3 M events/sec.  

**Action**  
I mapped each broker against our **Customer Obsession** (latency < 100 ms) and **Ownership** (full control over scaling).  
- **Kafka**: high throughput, partitioned topics, exactly‑once semantics; ideal for large data streams.  
- **RabbitMQ**: low latency, flexible routing, but limited horizontal scale on EC2.  
- **SQS FIFO/Standard**: managed service, auto‑scaling, but 300 msg/sec per queue (FIFO) and ~30 k msg/s (Standard).  
- **SNS**: pub/sub for fan‑out, no persistence.

I proposed a hybrid: **Kafka on Amazon MSK** for raw ingestion, backed by **SQS Standard** for downstream microservices that need decoupling. This achieved 3 M events/sec with <200 µs latency and cost $0.10 per million messages (MSK) vs $0.40 (self‑hosted).  

**Result**  
The platform processed 90% more traffic than the previous RabbitMQ‑only design, reduced operational overhead by 70%, and cut total data‑transport costs by 35%.  

**Bar‑raiser insight** – I demonstrated ownership by proposing a cost‑effective hybrid, dived deep into broker limits, quantified impact with real metrics, and learned that mixing managed services with open‑source tooling often yields the best trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
