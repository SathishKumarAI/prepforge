---
qid: ing_717c54066a__faang__local
question: 'Explain: Queues versus streams — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 467
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:42-05:00'
sources: []
---

**Clarify**  
We’re comparing *queues* (e.g., Kafka, SQS) vs. *streams* (Kafka Streams, Flink, Spark Structured Streaming) for asynchronous ML workloads at Meta. Key assumptions: data is high‑velocity, latency‑sensitive, and we need real‑time model updates or predictions.

**Approach**  
1. Map the end‑to‑end pipeline: ingestion → transformation → feature extraction → model inference/training.  
2. Identify where each abstraction fits: queues for decoupling producers/consumers; streams for stateful, low‑latency processing.  
3. Evaluate trade‑offs in consistency, fault tolerance, and scaling.

**Depth**  
- **Queues** are durable, provide at‑least‑once delivery, and let consumers run independently—great for batch training jobs or delayed inference.  
- **Streams** maintain a continuous dataflow with built‑in state management (e.g., Kafka Streams’ KTables) and support event time processing, enabling near‑real‑time model updates.  
- For ML, streams allow *online learning* (incremental weight updates) and *low‑latency inference* by pushing features directly to a serving layer.  
- However, queues simplify backpressure handling; they can buffer bursts that streams might drop if not sized correctly.

**Edge Cases**  
- **Out‑of‑order events**: streams need watermarking; queues may lose order unless partitioned.  
- **Schema evolution**: queues with Avro/Protobuf are safer; streams must handle state migration.  
- **Exactly‑once semantics**: streams provide this via idempotent operators; queues rely on consumer ack logic.

**Optimize & Communicate**  
Start with a queue for ingestion to guarantee durability, then route critical paths into a stream for low‑latency feature enrichment and model updates. Monitor latency metrics and backpressure signals; if queues grow beyond threshold, spin up additional stream instances or increase Kafka partitions. Conclude by highlighting that the hybrid pattern—queues + streams—offers both reliability and real‑time ML capabilities, which aligns with Meta’s scale and service‑level objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
