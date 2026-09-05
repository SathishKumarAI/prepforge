---
qid: ing_aa89b01eb7__star__local
question: 'Explain: Dead Letter Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 329
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:46-05:00'
sources: []
---

**Situation** – While leading a real‑time fraud detection pipeline for a fintech client, we noticed that the Kafka topic feeding our model inference service was sporadically dropping messages during peak load. The loss rate hit 3 % of transactions, which translated to missed alerts and potential revenue loss.

**Task** – I needed to design a robust fault‑tolerance mechanism that would capture malformed or oversized messages without blocking the main stream, ensure we could replay them for reprocessing, and provide visibility into why failures occurred.

**Action** – I introduced a Dead Letter Queue (DLQ) by creating a secondary Kafka topic dedicated to bad records. Using the `KafkaProducer`’s callback, any message that failed schema validation or exceeded size limits was redirected to the DLQ with rich metadata (error code, timestamp, original key). I also implemented a scheduled Spark job that consumed from the DLQ, logged failures in Elasticsearch for real‑time monitoring, and automatically retried messages after applying corrective transformations. Finally, I added metrics to Prometheus so we could alert on DLQ growth.

**Result** – The DLQ reduced active stream latency by 12 % and cut unprocessed transaction loss from 3 % to <0.1 %. We also gained actionable insights into data quality issues, leading to a 25 % drop in downstream model prediction errors. This experience taught me that a well‑instrumented DLQ is essential for maintaining ML pipeline reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
