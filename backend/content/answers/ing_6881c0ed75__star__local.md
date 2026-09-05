---
qid: ing_6881c0ed75__star__local
question: 'Explain: Iterator Pattern — LLD-OOPs-Design-Patterns/DesignPatterns at
  main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 324
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:13-05:00'
sources: []
---

**Situation** – While building a recommendation engine for an e‑commerce platform, my team had to process millions of user interaction logs stored in a distributed NoSQL database. The existing data pipeline loaded entire collections into memory, causing OOM errors and slow training cycles.

**Task** – I needed a lightweight mechanism to stream log records sequentially through the feature extraction module without loading everything at once, while keeping the code modular so future back‑ends (Kafka, S3) could plug in seamlessly.

**Action** – I designed an `Iterator` abstraction: a base `LogIterator` interface with `hasNext()` and `next()`. Implementations like `MongoLogIterator`, `S3LogIterator`, and `KafkaLogIterator` encapsulate the specific cursor logic. The feature extractor consumes only the iterator, decoupled from storage details. I added lazy buffering and a configurable batch size to balance latency and throughput. During unit tests, we mocked iterators to simulate network delays and verified that the pipeline remained stable.

**Result** – Streaming reduced peak memory usage by 85% and cut data ingestion time from 12 minutes to 3 minutes on a 10‑million record dataset. The pattern also made adding new sources a one‑liner, improving maintainability. I learned that clean iterator boundaries turn monolithic ETL jobs into composable micro‑services, a lesson I now apply whenever scaling AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
