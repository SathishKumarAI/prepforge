---
qid: ing_2068b27d4c__aws__local
question: 'Explain: Features — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 507
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:34-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that served 1 million daily users. The data lake was built on **Apache Cassandra**, but we struggled to surface relevant features fast enough for the ML pipeline.

**Action – Design & Implementation**  
I re‑engineered the feature store as a *denormalised, time‑partitioned* table in Cassandra, leveraging its tunable consistency (QUORUM) and wide‑row design. Each user row stored the last 30 days of interaction vectors (clicks, cart additions, search terms). To keep read latency <10 ms I:

1. **Batch ingestion** – used Apache Kafka + Kinesis Data Streams to stream events into a Spark job that materialised feature updates in Cassandra.
2. **Secondary index on user_id + event_type** – allowed O(1) lookups for the ML model without full table scans.
3. **TTL (time‑to‑live)** of 90 days kept storage costs down (~$4k/month).
4. Deployed a **Lambda layer** that pulled the latest features into an S3 bucket, where SageMaker consumed them.

I also introduced a **metrics dashboard** in CloudWatch: read latency, consistency hit rates, and feature freshness. When the system was under 200 % load during flash sales, the SLA for feature retrieval remained <12 ms, keeping model inference latency below 50 ms.

**Result**  
The new feature store cut model training time from 2 hours to 15 minutes and boosted recommendation click‑through rate by **18 %**, translating to an additional $1.2 M in quarterly revenue. The architecture is now horizontally scalable (adding nodes) with no single point of failure, and costs are predictable thanks to the TTL policy.

**Leadership Principles Highlighted**  
- *Ownership* – I took end‑to‑end responsibility for the feature pipeline.  
- *Dive Deep* – profiled Cassandra read/write paths, tuned consistency levels, and measured impact at the metric level.  

**Bar‑raiser takeaways**  
- Demonstrated clear ownership and deep technical understanding.  
- Quantified business impact with real revenue numbers.  
- Showed learning loop: after flash sale spikes we adjusted TTL and added a caching layer to further reduce latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
