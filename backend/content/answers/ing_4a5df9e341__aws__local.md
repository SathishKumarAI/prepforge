---
qid: ing_4a5df9e341__aws__local
question: 'Explain: Apache Spark — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 371
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:30-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession* – delivering the right insights at the right time; *Dive Deep* – understanding Spark’s execution model.

**Situation / Task**  
In my last role I built a recommendation engine that needed both near‑real‑time alerts and daily batch analytics. The challenge was to decide when to use **Spark Structured Streaming** vs **Spark Batch (RDD/DataFrame)**.

**Action**  
I mapped requirements:  
* **Stream** – low latency (<5 s) for fraud detection; used `spark.readStream` with Kinesis Data Streams, checkpointing in S3, and a *watermark* to handle late data.  
* **Batch** – nightly cohort analysis; launched a Spark job on EMR every 12 h using the same code base but `read` instead of `readStream`.  

I implemented a unified UDF library so both pipelines share logic, reducing regressions.

**Result**  
- Stream pipeline processed 2 M events/sec with <4 s latency, cutting false positives by **32%**.  
- Batch jobs finished in 45 min on an 8‑node cluster versus the legacy 3 h job, saving ~$1k/month on EMR spot instances.  

**Bar‑raiser Insight** – I demonstrated ownership (single code base), deep dive into watermarking and checkpoint strategy, quantified impact on cost & accuracy, and learned that a hybrid approach often yields the best trade‑off between latency, scalability, and operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
