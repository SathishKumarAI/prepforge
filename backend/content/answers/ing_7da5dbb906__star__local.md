---
qid: ing_7da5dbb906__star__local
question: 'Explain: Coding interview — Meta Machine Learning Engineer (MLE) Interview
  Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 330
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:07-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building a real‑time fraud detection model that needed to process ~2 M events per day with sub‑second latency. The existing pipeline was batch‑oriented and lagged by minutes, so our compliance team flagged too many false positives.

**Task**  
I had to refactor the feature extraction stage into an online stream processing system, ensuring we kept the model’s AUC above 0.93 while reducing latency to under 200 ms per event.

**Action**  
I chose Apache Flink for its low‑latency windowing and integrated it with our Kafka ingestion layer. I wrote a custom keyed process function in Java that maintained rolling statistics (mean, variance) per user in RocksDB state. To keep memory usage bounded, I implemented a TTL of 30 days on the state. For feature scaling I used an online standardizer that updated on‑the‑fly and persisted its parameters to S3 for checkpointing. I also added a metrics exporter to Prometheus so we could monitor latency per microservice in real time.

**Result**  
Latency dropped from ~2 s to 150 ms, and the fraud detection accuracy improved to 0.95 AUC on live traffic. We cut false positives by 35%, saving the company ~$1M annually. I learned that marrying stream‑processing primitives with online learning techniques can dramatically improve both speed and model quality in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
