---
qid: ing_f1285718cf__star__local
question: 'Explain: Publisher Subscriber — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 352
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:31-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a real‑time fraud detection platform. The model produced alerts every few milliseconds, but the downstream dashboards and alerting services needed to consume them without lag or data loss.

**Task** – I had to design a scalable publisher–subscriber architecture that could ingest millions of events per day, guarantee at‑least‑once delivery, and allow new analytics modules to subscribe on demand without impacting latency.

**Action** – I chose Apache Kafka as the backbone because of its partitioned log and consumer groups. I defined a topic hierarchy: `fraud.alerts.raw` for raw model output, `fraud.alerts.enriched` after enrichment with user metadata, and `fraud.alerts.sink` for downstream services. Producers wrote to the raw topic using Avro schemas stored in Confluent Schema Registry; consumers used Kafka Streams to transform data in real time. I implemented dead‑letter queues for failed deserialization and set retention policies (7 days) to balance storage cost and replayability. Load testing with k6 showed 99th‑percentile latency below 10 ms even under peak load.

**Result** – The system processed 4 million alerts per hour with zero data loss, and new teams could spin up subscribers in minutes. We cut dashboard refresh time from 30 seconds to under 2 seconds, improving analyst productivity by 35%. I learned how schema evolution and consumer lag monitoring are critical for production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
