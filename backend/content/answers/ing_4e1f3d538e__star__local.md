---
qid: ing_4e1f3d538e__star__local
question: 'Explain: Summary — How to Choose the Number of Topics/Partitions in a Kafka
  Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 348
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy data pipeline to Confluent Cloud for real‑time analytics. The source system pushed around 1 TB of log events per day, and we needed low latency for downstream dashboards.

**Task** – Determine the optimal number of Kafka topics and partitions so that ingestion stayed within SLA (≤ 200 ms) while keeping cluster cost under budget.

**Action** – I first profiled message rates: peak was 15k msgs/s with an average key size of 50 bytes. Using Confluent’s “partition‑per‑key” rule, I calculated that 3 partitions per logical stream would give us enough parallelism without exceeding broker limits (each broker had ~10 GB RAM). I set up a small test cluster and ran throughput benchmarks with `kafka-producer-perf-test` and `consumer-group-offset-monitor`. After adjusting to 4 partitions, latency dropped from 350 ms to 140 ms. I also enabled the topic’s compression (`lz4`) and tuned the broker’s `num.io.threads` to match our CPU profile.

**Result** – The final configuration used 12 topics with 4 partitions each, achieving < 120 ms average latency at peak load and keeping monthly cloud spend down by ~18 %. I learned that partition sizing is a balance of key distribution, broker resources, and compression settings, and that small iterative benchmarks are essential to hit SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
