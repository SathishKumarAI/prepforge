---
qid: ing_13edd3327d__fp__local
question: 'What is Brooklin? — Open sourcing Brooklin: Near real-time data streaming
  at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 412
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:40-05:00'
sources: []
---

**Brooklin – a principled design for large‑scale, low‑latency data replication**

At its core, Brooklin solves the *reliable, near‑real‑time transfer of events between heterogeneous storage systems* (e.g., MySQL binlogs → Kafka). The fundamental problem is that each source emits a continuous stream of records, and consumers must see them in order while tolerating network partitions and backpressure.  

Brooklin’s architecture follows three optimization principles:

1. **Pull‑based source discovery** – rather than pushing every change to Kafka, a *source connector* pulls changes in batches, yielding bounded memory usage and smooth handling of slow sources.
2. **Idempotent, partitioned commits** – each record is stored with a unique offset per source topic; committing offsets atomically guarantees at‑least‑once semantics without replaying duplicates, which is essential for downstream analytics pipelines.
3. **Backpressure‑aware buffering** – an internal ring buffer of configurable size absorbs bursts; if consumers lag, the buffer triggers back‑pressure signals to the connector, preventing out‑of‑memory failures.

These choices stem from *information‑theoretic* constraints: a system that never buffers more than \(B\) bytes can only sustain a throughput bounded by \(\frac{B}{t_{\text{latency}}}\). Brooklin’s design pushes this bound by making the buffer size adaptive to observed latency, thus maximizing effective bandwidth.

**Non‑obvious insight:**  
Because Brooklin decouples *source discovery* from *event ingestion*, it can run multiple connectors in parallel on a single JVM without contention. This “pull‑first” model is the key that lets Brooklin scale to hundreds of sources while keeping per‑connector memory footprints constant—something Kafka Connect struggles with when sources emit at very high rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
