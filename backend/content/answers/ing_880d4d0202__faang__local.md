---
qid: ing_880d4d0202__faang__local
question: 'Explain: Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 509
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:35-05:00'
sources: []
---

## Clarify  
We’re asked how **message queues** fit into a **system‑design interview** for ML workloads.  
Key assumptions:  
1. The system ingests high‑volume data streams (e.g., sensor logs, user actions).  
2. ML models run offline or online and need decoupled, fault‑tolerant ingestion.  
3. Latency requirements vary from batch (minutes) to real‑time (seconds).

## Approach  
1. **Identify use cases**: data pipeline, feature store updates, inference request routing.  
2. **Choose a queue tech**: Kafka for high throughput & replay, RabbitMQ/SQS for low latency and simplicity.  
3. **Design topology**: producers → topic partitions → consumer groups (pre‑processing, model training, inference).  
4. **Add durability & scaling**: replication factor, partitioning strategy, auto‑scaling consumers.  
5. **Integrate with ML components**: feature extraction services write to a “features” queue; training jobs consume batches; inference services subscribe to “prediction‑requests”.

## Depth  
- **Throughput**: Kafka can handle millions of events/sec; SQS ~30k msgs/s per queue.  
- **Latency**: Kafka low‑latency (ms) when using `linger.ms=0`; SQS ~10–20 ms.  
- **Fault tolerance**: Replication & idempotent producers guarantee at‑least‑once delivery; consumer offsets ensure exactly‑once processing with proper transaction support.  
- **Scalability**: Horizontal scaling of partitions and consumer groups; auto‑scaling based on lag metrics.

## Edge Cases  
- **Backpressure**: When consumers lag, queues grow—use dead‑letter queues or throttling.  
- **Schema evolution**: Use Avro/Protobuf with schema registry to avoid deserialization errors.  
- **Out‑of‑order events**: Partition key design (e.g., user ID) preserves order where needed.

## Optimize & Communicate  
Explain trade‑offs: Kafka’s higher complexity vs. SQS’s simplicity; latency vs. throughput. Mention monitoring (lag, throughput) and cost optimization (reserved instances for Kafka brokers). Conclude with how the queue decouples ingestion from ML processing, enabling scalable, resilient pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
