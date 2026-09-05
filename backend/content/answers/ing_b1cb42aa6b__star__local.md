---
qid: ing_b1cb42aa6b__star__local
question: 'Explain: Choosing the Right Approach — Batch vs Stream Processing - What''s
  the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:17-05:00'
sources: []
---

**Situation:**  
At my last role we were building a real‑time fraud detection system for a payment gateway. Our data pipeline was ingesting millions of transaction logs per day, and the compliance team required that any suspicious activity be flagged within seconds.

**Task:**  
I had to decide whether to process the data in large batch jobs or use continuous stream processing, while ensuring model accuracy didn’t suffer and latency stayed below 2 seconds.

**Action:**  
First I profiled the ingestion rate (≈200k events/s) and compared the memory footprint of both approaches. For batch, we’d have to store a full day’s worth of data before retraining the model, leading to stale predictions. I therefore implemented a Kafka‑based stream pipeline with Apache Flink, applying incremental gradient updates on an online logistic regression model. We added a sliding window (5 min) for feature aggregation and used stateful functions to keep per‑user counters. To maintain quality, we scheduled nightly batch retraining on Spark to refresh the model weights from the full dataset.

**Result:**  
The stream pipeline reduced detection latency from 30 seconds to <1.8 seconds, increasing flagged fraud capture by 27% over the prior month. The hybrid batch‑stream strategy kept accuracy high (AUC 0.93) while meeting real‑time compliance constraints. I learned that choosing the right processing model hinges on data velocity, latency requirements, and how often the model needs to be refreshed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
