---
qid: ing_54f6ee207a__star__local
question: 'Explain: Job Completion: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 314
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:59-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were migrating our risk‑scoring pipeline from a legacy batch job that ran overnight to a real‑time fraud detection service. The old system produced daily scores for every transaction, but by the time they hit the dashboard users could no longer act on them.

**Task**  
I had to decide whether to keep the batch architecture or refactor to streaming so that new transactions were scored within seconds while still meeting our SLA of 99% accuracy and 100 GB/day throughput.

**Action**  
I mapped out the data flow: batch used Spark jobs scheduled via Airflow, aggregating logs into Parquet files and writing results back to a relational DB. For streaming I chose Apache Flink on Kubernetes, implementing event‑time windows and watermarking to handle late arrivals. I also added a Kafka topic as the ingestion layer, ensuring exactly‑once semantics with idempotent sinks. To maintain consistency, I built a lightweight replay mechanism that could reprocess any window if model updates required.

**Result**  
The switch cut processing latency from 8 hours to <2 seconds per transaction, boosting user engagement by 35% and reducing false positives by 12%. I learned that while batch is great for large, non‑time‑critical jobs, streaming demands careful handling of state, fault tolerance, and backpressure—skills now standard in my toolbox.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
