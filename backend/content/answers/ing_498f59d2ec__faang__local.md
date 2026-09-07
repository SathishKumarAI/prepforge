---
qid: ing_498f59d2ec__faang__local
question: 'Explain: Common Patterns — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 402
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a high‑level overview of *publish/subscribe* patterns in ML system design. I’d confirm whether they want the architectural view (data flow, scaling) or implementation details (e.g., Kafka vs. Pub/Sub), and whether latency constraints matter.

**Approach**  
1. Define core components: publisher, broker, subscriber.  
2. Map to ML use‑cases: feature ingestion, model inference callbacks, training data pipelines.  
3. Highlight scalability patterns: partitioning, sharding, replayability.  
4. Discuss fault tolerance and ordering guarantees.

**Depth**  
- **Broker choices**: Kafka (high throughput, strong ordering), Google Pub/Sub (fully managed, global).  
- **Topic partitioning** ensures parallelism; key‑based routing preserves order for a given entity.  
- **Message schema evolution** via Avro/Protobuf and schema registry.  
- **Exactly‑once delivery**: idempotent consumers + transactional writes.  
- **Back‑pressure handling**: consumer lag metrics, auto‑scaling of subscriber instances.

**Edge Cases**  
- *Burst traffic*: use buffer or surge protection.  
- *Schema mismatch*: fallback to “dead letter” queue.  
- *Subscriber failure*: retry with exponential backoff; circuit breaker.  
- *Data skew*: uneven partition load → re‑partition or add more partitions.

**Optimize & Communicate**  
I’d suggest a layered architecture: feature ingestion → Kafka topic → stream processor (Kafka Streams/Flink) → model inference microservice, all behind an API gateway. This decouples producers from consumers, allows independent scaling, and supports replay for retraining. I’ll finish by summarizing trade‑offs—Kafka gives fine control but operational overhead; Pub/Sub offers simplicity at the cost of custom tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
