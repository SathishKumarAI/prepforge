---
qid: ing_0450a84ea8__star__local
question: 'Explain: Furniture — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 377
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:22-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with building a recommendation engine for an online furniture retailer that had just launched a new line of modular sofas. Their catalog grew from 5 k to 12 k items in six months, and the click‑through rate on product pages had dropped by 18 % because customers were overwhelmed.

**Task:**  
I needed to design a data‑intensive pipeline that could ingest real‑time browsing logs, enrich them with inventory and price data, train a collaborative‑filtering model every hour, and serve predictions with <200 ms latency for the front‑end.

**Action:**  
Using Kafka as the ingestion layer I streamed user events into a distributed Spark job. The job performed feature engineering (session length, time on page, furniture category) and updated an Apache Flink state store that held item embeddings in memory. For training I switched from a batch‑only approach to incremental learning with LightFM, saving checkpoints to HDFS for fault tolerance. Finally, I exposed the model through a gRPC microservice backed by Redis cache, automatically refreshing every 15 minutes.

**Result:**  
Within two weeks of deployment the click‑through rate rose 27 %, and conversion from recommendation clicks increased 14 %. The system handled 2× the peak traffic without any downtime. I learned that treating each component—ingestion, processing, training, serving—as a “furniture piece” that can be swapped or upgraded independently is key to scaling data‑intensive ML applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
