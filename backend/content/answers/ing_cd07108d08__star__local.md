---
qid: ing_cd07108d08__star__local
question: 'What are users saying? — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 358
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:46-05:00'
sources: []
---

**Situation**  
In a fintech startup, our data science team was building a real‑time fraud detection model that needed user feedback from the front‑end to retrain every night. The existing architecture had dozens of microservices pushing JSON events into separate Kafka topics; downstream we were polling each topic individually, which caused 4–5 min lag and a 12 % increase in message loss during traffic spikes.

**Task**  
I was tasked with creating a unified ingestion layer that could collect all user‑feedback messages, guarantee at‑least‑once delivery, and feed them into the nightly retraining pipeline without increasing operational complexity.

**Action**  
I introduced a single RabbitMQ broker configured with three durable queues: `clicks`, `ratings`, and `flags`. Each microservice publishes to its respective queue via a lightweight client library (pika in Python). To avoid duplicate processing, I enabled publisher confirms and used message IDs as de‑duplication keys. A dedicated consumer worker pulls from all three queues using the `basic.consume` API with prefetch=10, aggregates the data into a single Parquet file, and writes it to S3 for the nightly job. I also set up a dead‑letter exchange for any messages that failed validation.

**Result**  
The new pipeline cut ingestion latency from 4 minutes to under 30 seconds, reduced message loss to <0.1 %, and freed the data science team to focus on model tuning instead of infrastructure headaches. I learned how lightweight brokers like RabbitMQ can outperform heavier streaming systems when the volume is moderate but reliability and simplicity are paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
