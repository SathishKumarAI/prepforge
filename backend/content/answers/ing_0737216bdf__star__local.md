---
qid: ing_0737216bdf__star__local
question: 'Explain: Types of data architecture — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:25-05:00'
sources: []
---

**Situation:**  
During my senior year capstone we were tasked with building a recommendation engine for an e‑commerce startup that had millions of daily transactions but a fragmented data store—SQL tables for user profiles, NoSQL logs for clickstreams, and a legacy Hadoop cluster for historical sales.

**Task:**  
I needed to design a unified data architecture that could ingest, process, and serve real‑time predictions without compromising latency or scalability.

**Action:**  
First I mapped the **data sources** into three layers: *Ingestion* (Kafka streams for live events), *Processing* (Spark Structured Streaming for batch joins and enrichment), and *Storage* (Delta Lake on S3 as a lakehouse). I then defined **data models**—a star schema for analytical queries, a graph model in Neo4j for relationship traversal, and a time‑series schema in InfluxDB for monitoring. To ensure consistency I implemented an automated data quality pipeline with Great Expectations, and used dbt to version‑control transformations. Finally, I set up Airflow DAGs to orchestrate nightly refreshes and trigger retraining of the ML model.

**Result:**  
The new architecture cut query latency from 15 seconds to under 2 seconds for key dashboards, increased data freshness by 90 %, and enabled the recommendation engine to deliver predictions in real time with a 12 % lift in click‑through rate. I learned that a modular, layered approach—combining streaming, batch, and lakehouse concepts—is essential when scaling ML workloads across heterogeneous data sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
