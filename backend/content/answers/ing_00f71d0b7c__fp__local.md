---
qid: ing_00f71d0b7c__fp__local
question: 'Explain: External data sources — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 351
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:25-05:00'
sources: []
---

**External Data Sources in Meta’s Asynchronous Computing**

At its core, any machine‑learning pipeline must *decouple* the ingestion of data from the computation that consumes it. In a large‑scale system, the data stream (user interactions, sensor logs, third‑party APIs) is orders of magnitude larger than the compute cluster can process in real time. The fundamental problem is: **how to guarantee that downstream models always see fresh, consistent data without blocking on I/O?**

Meta solves this by treating external sources as *asynchronous message queues* backed by a distributed log (e.g., Kafka). Each source publishes events with monotonically increasing offsets; worker services subscribe and maintain local checkpoints. The deeper principle is **causal consistency via offset tracking**: once an event’s offset is recorded, all downstream jobs can assume it has been processed exactly once. This satisfies the *eventual‑consistency* guarantees needed for large‑scale ML while keeping latency bounded.

A non‑obvious insight is that *buffering at the source rather than the consumer* yields better scalability. By letting external systems push data into a write‑optimized log, Meta avoids per‑request read bottlenecks; workers simply poll their partition offsets. This inversion of control turns I/O‑bound workloads into CPU‑bound ones, dramatically reducing tail latency and improving resource utilization.

In short, asynchronous external sources provide **scalable, causally consistent ingestion** that underpins reliable ML training and inference at Meta’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
