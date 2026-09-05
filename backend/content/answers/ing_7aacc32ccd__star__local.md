---
qid: ing_7aacc32ccd__star__local
question: 'Explain: don''t necessarily we were not going to — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 369
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:25-05:00'
sources: []
---

**Situation** – While working on a real‑time ad tech platform, our click‑through rate data was growing 200 % year‑over‑year. Our legacy relational store started throttling; we were hitting the 1 GB per table limit and queries took 300 ms—unacceptable for a live bidding system.

**Task** – I needed to design a storage layer that could ingest millions of events per second, support instant reads for ad selection, and scale elastically without manual sharding or costly hardware upgrades.

**Action** – I led the migration to DynamoDB. First, we modeled each event as a single partition key (ad‑unit ID) with sort keys by timestamp, enabling efficient range queries. We enabled on‑demand capacity to absorb traffic spikes, and then moved to provisioned mode with auto‑scaling based on 80 % utilization thresholds. To avoid hot partitions, we added a random hash prefix to the partition key (e.g., “region#adunit”) and used DynamoDB’s Global Secondary Indexes for high‑cardinality metrics like country and device type. We also integrated AWS Lambda triggers to perform real‑time aggregation into a separate “metrics” table, keeping write throughput low on the primary store.

**Result** – The new architecture handled 5 M writes per second with sub‑50 ms read latency, reducing our ad response time from 300 ms to 18 ms. Cost dropped by 35 % after auto‑scaling removed over‑provisioned capacity. I learned that careful key design and leveraging DynamoDB’s built‑in scaling features can turn a bottleneck into a high‑performance, cost‑efficient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
