---
qid: ing_3afe24e86c__star__local
question: 'Explain: Sample Apps — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 361
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:40-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with prototyping a recommendation engine for a retail startup that had just migrated its user data to Apache Cassandra after scaling from a single-node MySQL cluster.

**Task:**  
I needed to build a lightweight sample app that could ingest real‑time clickstream events, store them in Cassandra, and feed a downstream ML model that generated personalized product suggestions within seconds.

**Action:**  
First, I designed a wide‑column schema with a time‑partitioned table (`user_events_by_day`) using a composite key `(user_id, event_timestamp)` to enable efficient range scans. I wrote an ingest pipeline in Python with `cassandra-driver` and `pandas`, batching writes at 5 k rows/sec while monitoring latency with Prometheus. For feature extraction, I used Spark Structured Streaming reading from Cassandra via the DataStax connector, aggregating counts per user over sliding windows. The resulting features were pushed to a TensorFlow model hosted on Kubernetes; predictions were cached in Redis for sub‑50 ms latency. Throughout, I performed load testing with `cassandra-stress` and tuned compaction strategy (Leveled) to keep read amplification low.

**Result:**  
The prototype handled 12 k concurrent users, maintaining write latency under 30 ms and prediction latency at ~45 ms. Accuracy of the recommendation model improved by 18% compared to the legacy system. I learned how Cassandra’s schema design directly impacts ML feature pipelines, and that careful compaction + batching can keep a real‑time analytics stack responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
