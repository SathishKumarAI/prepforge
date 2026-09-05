---
qid: vq_35a2f8b828__star__local
question: Do we need exactly-once processing guarantees?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:55-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built a real‑time fraud detection pipeline that ingested transaction streams from multiple payment gateways. The downstream alert system had to trigger an investigation within two seconds of a suspicious activity. A few weeks into production, we noticed duplicate alerts for the same transaction whenever the Kafka broker hiccuped and the consumer restarted.

**Task:**  
I was tasked with eliminating those duplicates while keeping latency under our 2‑second SLA and ensuring that no legitimate events were lost—essentially providing exactly‑once semantics across ingestion, transformation, and alerting.

**Action:**  
First, I switched from Kafka’s default auto‑commit to manual offset commits after each batch. Then I introduced a lightweight idempotent deduplication table in ClickHouse keyed by transaction ID and source timestamp. Each consumer checked the table before writing; if the key existed, it skipped processing. To guarantee durability across restarts, I stored the offset together with the processed event in a single ACID‑transaction in Postgres, using a “SELECT … FOR UPDATE” lock to serialize concurrent consumers. Finally, I added a retry back‑off mechanism that re‑reads only missing offsets, preventing duplicate work.

**Result:**  
Duplicate alerts dropped from 12% of all fraud events to <0.01%, and the end‑to‑end latency stayed at 1.8 s on average. The team learned that exact‑once is achievable with careful offset handling plus lightweight deduplication, without sacrificing throughput or adding heavy orchestration layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
