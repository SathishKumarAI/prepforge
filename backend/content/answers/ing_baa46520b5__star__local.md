---
qid: ing_baa46520b5__star__local
question: 'Explain: Background Processing — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 344
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:11-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a real‑time fraud detection model for an online marketplace that handled ~12 k transactions per minute. The inference latency had to stay under 150 ms, but the training pipeline could only run once every hour due to compute constraints.

**Task** – I needed to decouple the heavy batch retraining from the live scoring service so we could update the model nightly without impacting transaction throughput, while ensuring that new predictions were available as soon as possible after each retrain.

**Action** – I introduced a RabbitMQ‑based message queue between the data ingestion layer and the training worker pool. Each minute’s stream of labeled events was batched into 5‑minute windows, serialized to JSON, and pushed onto a “training‑jobs” queue. A fleet of 4 GPU workers subscribed to this queue; when a batch arrived they pulled raw features from S3, ran feature engineering in Spark, trained a LightGBM model, and published the new artifact to an S3 bucket with versioning. The scoring microservice monitored the bucket via SNS notifications, fetched the latest model into memory, and served predictions within 120 ms.

**Result** – We achieved a 98.7% detection recall while keeping inference latency under 140 ms. Model updates were applied within 12 minutes of each hour’s data window, cutting false positives by 15%. I learned that careful queue sizing and back‑pressure handling are critical for maintaining SLA compliance in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
