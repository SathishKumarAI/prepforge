---
qid: ing_5cce4da8d9__star__local
question: 'Explain: Probabilistic Data Structures — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:29-05:00'
sources: []
---

**Situation** – In a recent project I was tasked with building an ad‑serve platform that had to track click counts for millions of keywords in real time, while keeping latency below 10 ms and memory usage under 2 GB per node.

**Task** – My goal was to design a distributed counter system that could aggregate counts across shards, tolerate network partitions, and still deliver accurate analytics within ±1 % error margin.

**Action** – I chose a HyperLogLog‑based sketch for each keyword: it compresses counters into 16 KB per key while giving cardinality estimates with <0.8 % error. Each node maintained a local HLL table; updates were streamed via Kafka to a small set of aggregator nodes that merged sketches using the union operation (bitwise max). To handle out‑of‑order events, I added a timestamped Bloom filter per partition so we could discard duplicates without storing full logs. For fault tolerance, we replicated each aggregator’s state with Raft; if a node failed, another replica would take over within 50 ms.

**Result** – The system processed 5 million click events per second across 10 shards while keeping memory usage at 1.6 GB per node. Accuracy stayed within 0.7 % of ground truth measured against a reference count. I learned that probabilistic sketches can dramatically reduce storage and network traffic, but they require careful error budgeting and replication strategies to remain reliable in distributed settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
