---
qid: ing_c013b8604f__faang__local
question: 'Explain: When to Use Message Queues — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 442
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:39-05:00'
sources: []
---

**When to Use Message Queues in ML Systems**

| Step | What I Say |
|------|------------|
| **Clarify** | “We’re deciding whether a message queue (MQ) is the right tool for our ML pipeline that ingests data → preprocesses → trains → serves models. Key assumptions: high throughput, need decoupling, variable latency tolerance, and eventual consistency.” |
| **Approach** | 1. Identify *producer* and *consumer* boundaries.<br>2. Map out required QoS (at‑least‑once vs exactly‑once).<br>3. Evaluate alternatives (polling, in‑process queues, streaming platforms). |
| **Depth** | • Use an MQ when <br> • Producers and consumers are loosely coupled or scale independently.<br> • You need buffering for bursty traffic (e.g., sensor data spikes).<br> • Latency can be bounded but not deterministic; you accept eventual processing.<br>• Popular choices: Kafka (high throughput, log‑based retention), RabbitMQ (AMQP, routing flexibility), SQS (managed, pay‑per‑message). <br>Complexity: O(1) enqueue/dequeue, linear growth in storage. Trade‑offs: message duplication vs exactly‑once guarantees; need idempotent consumers. |
| **Edge Cases** | • Real‑time inference requiring sub‑ms latency → MQ may add unacceptable delay.<br>• Strict ordering needed across multiple streams → choose a partitioned broker or use sequence numbers.<br>• Failure of consumer: messages must be retried without loss, so enable DLQs. |
| **Optimize & Communicate** | • Batch messages to reduce overhead.<br>• Use compression and selective retention policies.<br>• In interview: “I’d start with Kafka for its log semantics, add a DLQ for failures, and expose metrics (lag, throughput) to guide autoscaling.” This shows I weigh trade‑offs, justify design choices, and can iterate based on production data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
