---
qid: ing_96ead7f080__faang__local
question: What do you mean by “Event-Driven”? — What do you mean by \u201cEvent-Driven\u201d?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 477
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:36:09-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for a definition of *event‑driven* in the context of machine‑learning systems. I’ll confirm they want an architectural perspective (not just reactive programming) and that “events” refer to data or state changes that trigger model inference or training.

**Approach**  
Explain the concept, give concrete ML examples, then discuss benefits, trade‑offs, and typical patterns (e.g., streaming pipelines, microservices). End with a quick note on monitoring & observability.

**Depth**  
> *Event‑driven* means that the flow of data through an ML pipeline is governed by discrete events—messages, signals, or state changes—rather than a fixed schedule. When an event occurs (e.g., a new user interaction, sensor reading, or a file upload), it triggers downstream components: feature extraction, model inference, retraining, or alerting.  
> In practice, this is implemented with message queues (Kafka, SQS), serverless functions (Lambda, Cloud Run), and stream processors (Flink, Spark Structured Streaming). For instance, every click in an e‑commerce site can publish a “click” event that feeds a real‑time recommendation model; anomalies detected by a monitoring service can emit “alert” events to trigger retraining.  
> Advantages: low latency, scalability, decoupled components, and natural fit for time‑series or IoT data. Trade‑offs include increased operational complexity (event schema evolution, idempotency) and the need for robust back‑pressure handling.

**Edge Cases**  
* Duplicate events → deduplication logic.  
* Late arrivals → windowing & state cleanup.  
* Event loss → durable queues with retries.  
* Schema drift → versioned schemas in Confluent Schema Registry.

**Optimize & Communicate**  
I’d suggest starting with a simple Kafka‑Lambda pattern, then adding replayability and monitoring (Kafka Connect + Prometheus). I would explain that event‑driven ML pipelines enable near‑real‑time inference while keeping the system resilient to bursty workloads—an essential quality for any FAANG‑scale product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
