---
qid: ing_00397eaf19__faang__local
question: 'Explain: Popular Messaging Systems — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 579
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:57-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *popular messaging systems* that act as **message queues** in distributed ML pipelines (e.g., Kafka, RabbitMQ, Pulsar). I’ll assume the focus is on their core concepts, typical use‑cases, and trade‑offs rather than implementation details.  

**Approach**  
1. List top candidates and what problems they solve.  
2. For each, highlight: architecture, durability, ordering guarantees, throughput, latency, and scaling patterns.  
3. Compare them on the dimensions that matter to ML workloads (batch ingestion vs real‑time inference).  

**Depth**  

| System | Architecture | Durability / Ordering | Throughput/Latency | Scaling | Typical ML use |
|--------|--------------|-----------------------|--------------------|---------|---------------|
| **Apache Kafka** | Log‑based partitioned topics; consumer groups | Strong per‑partition ordering, configurable retention | 10k–100k msgs/s per broker, <10 ms latency | Horizontal scaling via partitions; auto‑rebalancing | Feature ingestion, model training pipelines, event‑driven inference |
| **RabbitMQ** | Broker + queues with AMQP protocol | FIFO per queue, optional DLQs | ~1k msg/s (single node), sub‑ms latency | Clustering + sharding (consumers) | Short‑lived tasks, microservice coordination |
| **Apache Pulsar** | Topic → partitions → segments on BookKeeper | Per‑partition ordering, strong consistency | Similar to Kafka but with lower latency for small msgs | Dedicated brokers & bookies; multi‑tenant | Real‑time analytics, streaming ML feature stores |
| **AWS SQS / SNS** | Managed queues/topics in the cloud | FIFO queues (dedup), at‑least‑once delivery | 30k msg/s per queue, 20–50 ms latency | Auto‑scaling by AWS | Serverless training triggers, inference request buffering |

**Edge Cases**  
- High write spikes: Kafka may need more partitions; Pulsar scales with bookies.  
- Exactly‑once semantics: only FIFO SQS or Kafka’s idempotent producers guarantee it.  
- Message size limits (e.g., SQS 256 KB) affect payload design.

**Optimize & Communicate**  
When recommending a system, I’d first profile the ML workload (batch vs streaming, latency tolerance). For low‑latency inference pipelines, Pulsar or Kafka with low‑partition lag is ideal. For serverless or bursty tasks, managed SQS/SNS reduces ops overhead. I’d narrate this by mapping each requirement to a system’s strength, showing clear trade‑offs and concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
