---
qid: ing_9107f9370b__star__local
question: 'Explain: Context — Pattern: Messaging'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 351
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:55-05:00'
sources: []
---

**Situation**  
In a fintech startup I was tasked with building a real‑time fraud detection engine for credit card transactions. The data pipeline had to ingest millions of events per day and deliver alerts within two seconds.

**Task**  
Design a scalable messaging pattern that would decouple the ingestion, feature extraction, model inference, and alerting layers while guaranteeing at‑least‑once delivery and low latency.

**Action**  
I chose a publish/subscribe architecture with Kafka as the backbone. Producers pushed raw events to a “raw‑transactions” topic; a stream processor (Kafka Streams) performed windowed aggregations and enriched records into a “features” topic. A separate microservice, written in Go, subscribed to “features”, ran the XGBoost model on Docker containers orchestrated by Kubernetes, and published prediction scores to an “alerts” topic. Consumers of alerts were split into “monitoring” (for dashboards) and “blocking‑queue” (to trigger immediate card locks). I implemented idempotent processing with Kafka’s transactional API and used schema registry for backward compatibility.

**Result**  
Latency dropped from 7 s to under 1.8 s, meeting the SLA. The system processed 3 M transactions/day with a false‑positive rate of 0.9 % (down from 2.5 %). I learned that choosing the right messaging pattern and enforcing idempotence are critical for high‑throughput ML pipelines, and that observable metrics on each hop enable rapid troubleshooting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
