---
qid: ing_40ded38716__star__local
question: Batch vs Stream Processing - What's the Difference?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 289
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:14-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were launching a fraud‑detection service for real‑time payment streams. The legacy system processed batches every hour, but our new requirement was to flag suspicious transactions within seconds.

**Task:**  
I had to design an architecture that could ingest and analyze the data stream in near‑real time while still retaining the ability to run batch analytics for reporting and model retraining.

**Action:**  
We built a dual pipeline: a Kafka cluster ingested events and fed them into a Flink job for stateful streaming analytics (windowed joins, rolling fraud scores). Parallelly, we stored the same events in HDFS and ran nightly Spark jobs to recompute aggregate metrics and update our supervised learning models. I chose Flink for its low‑latency event processing and exactly‑once semantics, while Spark handled heavier batch computations and model training.

**Result:**  
The streaming pipeline reduced fraud detection latency from 60 minutes to under 2 seconds, cutting chargebacks by 35%. Batch jobs continued to deliver monthly insights with a 99.9% accuracy in retraining models. I learned that the key difference lies in latency, state management, and consistency guarantees—batch is great for heavy computation and batch analytics; stream excels at real‑time responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
