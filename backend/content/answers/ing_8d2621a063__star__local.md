---
qid: ing_8d2621a063__star__local
question: 'Explain: ‘acks=all’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:59-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer at a fintech startup, we were migrating our real‑time fraud detection pipeline to Apache Kafka. Our data producers sent millions of transaction events per hour and the downstream analytics service required strict durability guarantees; any loss could mean missed fraudulent activity.

**Task** – I needed to design a producer configuration that balanced latency with reliability, ensuring no event was lost even under peak load. The team debated whether to set `acks=1` for speed or `acks=all` for safety.

**Action** – I benchmarked both settings on our staging cluster. With `acks=1`, throughput hit 120 k records/s but we observed occasional message duplication during broker restarts. Switching to `acks=all` dropped throughput to ~90 k records/s, yet the producer waited for all in‑sync replicas before acknowledging each batch. I also tuned `retries=5` and increased `linger.ms` to 5 ms to mitigate latency spikes. After deploying to production, we logged round‑trip times and confirmed zero message loss over a 72‑hour test window.

**Result** – The new configuration cut false negatives in fraud detection by 98%, improved data integrity, and our SLA for event durability was met without violating the acceptable latency threshold of <50 ms. I learned that Kafka’s `acks=all` is essential when business logic cannot tolerate any loss, even if it slightly reduces raw throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
