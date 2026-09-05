---
qid: ing_f5be528510__star__local
question: 'Explain: Rate limiting — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 420
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:44-05:00'
sources: []
---

**Situation** – In my last role as a database engineer at a fintech startup, our ScyllaDB cluster was ingesting 2 M rows per minute for real‑time fraud scoring. By the end of Q4 the read latency spiked from <5 ms to ~30 ms during peak hours, and the node disk usage hit 90 % due to uncontrolled SSTable compaction.

**Task** – I had to design a rate‑limiting strategy for SSTable compaction that would keep disk utilization under 80 %, maintain sub‑10 ms read latency, and not interfere with our write throughput of 1.5 M rows/minute.

**Action** – First, I enabled Scylla’s “Compaction Priority” knobs via the `scylladb.yaml` file, setting a lower priority for aggressive compactions during off‑peak hours. Then I scripted a JMX‑based monitor that tracked `compactionRate` and `diskUsage`. Using this data, I implemented a dynamic throttle: when `diskUsage > 75 %`, Scylla automatically reduced the number of concurrent compaction threads by half; once usage fell below 70 %, it restored them. I also switched from size‑tiered to leveled compaction for hot tables, which spreads read amplification more evenly.

**Result** – After deployment, disk usage stabilized at ~68 % during peak periods, and average read latency dropped to 7–8 ms even under the full load. Write throughput remained unchanged. I learned that fine‑tuning compaction priorities combined with real‑time metrics can turn a cluster from a bottleneck into a resilient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
