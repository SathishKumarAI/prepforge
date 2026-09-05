---
qid: ing_733d03edf0__star__local
question: Estimation - How to decide number of partitions in Kafka?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:07-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time recommendation pipeline that ingested clickstream data from mobile apps into Kafka before feeding it to a Spark streaming model. The incoming traffic spiked during product launches and our downstream jobs were lagging behind, causing stale recommendations.

**Task** – I had to determine the optimal number of partitions for the “clicks” topic so that ingestion kept up with peak load while keeping consumer group overhead manageable.

**Action** – First, I collected broker metrics (producer latency, Consumer Group lag) over a two‑week window and plotted them against current partition counts. Using the Kafka Partitioning Calculator I estimated throughput per partition (~1 MB/s). Then I ran a small cluster test: I increased partitions from 8 to 32 in increments of 8, measuring consumer parallelism, GC pauses, and inter‑broker replication latency. I also considered the downstream Spark executor count; we had 12 executors, so keeping partitions ≤2×executors made sense for load balancing. Finally, I settled on 24 partitions: it gave us ~25 % lower producer latency during peaks, kept consumer lag under 5 seconds, and left room for future scaling.

**Result** – After deploying the new partitioning scheme, our end‑to‑end pipeline latency dropped from 12 s to 4.3 s on average, with peak throughput increasing by 35%. I learned that balancing Kafka’s internal parallelism against downstream consumer resources is key; empirical testing beats purely theoretical formulas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
