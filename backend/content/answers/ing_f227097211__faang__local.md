---
qid: ing_f227097211__faang__local
question: 'Explain: Consumer — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 590
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:44-05:00'
sources: []
---

**Clarify**  
We’re asked to describe a *consumer* in a message‑queue‑based system: how it pulls, processes, and acknowledges messages, and what guarantees we need (at‑least‑once, exactly‑once, ordering). I’d confirm whether the queue is durable, if messages can be processed in parallel, and what latency/throughput targets exist.

**Approach**  
1. **Pull model**: consumer polls a broker (e.g., Kafka, RabbitMQ) for new messages.  
2. **Processing pipeline**: deserialize → business logic → side‑effects → commit offset/acknowledgment.  
3. **Reliability layers**: retries, dead‑letter queues, idempotency.  
4. **Scalability**: partitioning/sharding, consumer groups, horizontal scaling.

**Depth**  
- *Pull vs Push*: Pull gives back‑pressure control; push can be used with short‑lived workers.  
- *Acknowledgment*: In Kafka, a consumer commits an offset after successful processing. If it crashes before commit, the message is re‑read → **at‑least‑once** semantics.  
- *Exactly‑once* needs idempotent processing or transactional writes (Kafka 0.11+ provides transactions).  
- *Ordering*: Within a partition Kafka preserves order; across partitions you lose global ordering unless you enforce it at the application layer.  
- *Retries*: Implement exponential backoff with jitter, and after N attempts route to a dead‑letter topic.  
- *Throughput*: Use batch fetches (e.g., `fetch.min.bytes`, `fetch.max.wait.ms`) and pre‑allocate buffers.  
- *Back‑pressure*: If downstream is slow, pause fetching (`consumer.pause()`) or use bounded queues.

**Edge Cases**  
- Consumer lag spikes → monitor with JMX/Prometheus; trigger auto‑scaling.  
- Duplicate messages if the consumer crashes after processing but before ack → idempotency keys.  
- Message size > broker limit → split or reject with alert.  
- Schema evolution → use Avro/Protobuf with schema registry.

**Optimize & Communicate**  
To improve, consider *exactly‑once* semantics by wrapping downstream writes in the same transaction as the offset commit. Use *consumer group rebalancing* heuristics to minimize data movement. I’d narrate: “We first pull a batch of messages, process them idempotently, then atomically commit offsets and write results. If anything fails, we retry or dead‑letter.” This shows clear reasoning, trade‑offs (throughput vs latency), and readiness for scale—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
