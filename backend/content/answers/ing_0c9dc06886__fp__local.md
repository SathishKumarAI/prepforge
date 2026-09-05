---
qid: ing_0c9dc06886__fp__local
question: What is Kafka? — The Ultimate Kafka 101 You Cannot Miss
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 313
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:32:36-05:00'
sources: []
---

**Kafka, in the ML ecosystem, is a distributed log‑oriented messaging system that solves the “unified ingestion & replay” problem.**

At its core, every ML pipeline needs *time‑ordered data* that can be read once by many consumers (feature stores, model training jobs, real‑time inference). Traditional queues lose order or guarantee only at most‑once delivery; databases add latency and scaling pain. Kafka treats the stream as an immutable append‑only log—each record gets a monotonically increasing offset. Consumers track their own offsets, so they can reprocess from any point without interference.

Why must it be *distributed*? Because ML workloads span terabytes per day. Partitioning a topic across brokers distributes write throughput linearly while maintaining order within each partition. The “broker” abstraction hides the underlying storage: Kafka uses memory‑mapped files for fast sequential reads, and compacts or deletes old segments based on retention policies.

A non‑obvious insight is that **Kafka’s log is essentially an *online compression* buffer**. By keeping data in a contiguous file, it exploits CPU cache locality and reduces disk seeks—a subtle but huge win for high‑frequency feature ingestion.

In short, Kafka gives ML teams a fault‑tolerant, horizontally scalable “streaming database” that satisfies the twin demands of real‑time delivery and historical replay—exactly what modern data science needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
