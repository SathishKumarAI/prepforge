---
qid: ing_8ba65dd36e__star__local
question: 'Explain: Simulating Real Workloads with valkey-benchmark'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:14-05:00'
sources: []
---

**Situation** – While leading a migration of our real‑time recommendation engine from Redis 4 to the new Valkey 7 release, the devops team noticed that the in‑house load generator was producing unrealistic latency spikes. Our production traffic averaged 50 k ops/sec with a 95th percentile latency of ~12 ms, but the benchmark tool we used sent bursts of 1 M keys per second, skewing our performance data.

**Task** – I needed to create a realistic workload that mirrored our live traffic patterns so that Valkey’s throughput and latency could be measured accurately before rollout. The goal was to keep the same key distribution, read/write mix (70/30), and time‑of‑day variations while staying within our testing budget of 4 CPU cores.

**Action** – I leveraged *valkey-benchmark* with a custom Lua script that replayed a captured traffic trace from production. First, I exported a 1‑hour sample of client commands into a CSV. Then I wrote a `benchmark.lua` that reads each line, respects the original inter‑arrival time, and issues the corresponding command via the Valkey CLI. I configured the benchmark to run on two threads, used `--pipeline=64` for pipelining, and added a `--random-key-space 1000000` flag to mimic our sharded keyspace. Finally, I scripted an automated run that logged latency histograms and CPU usage into InfluxDB.

**Result** – The new benchmark produced a 95th percentile latency of 13 ms at 48 k ops/sec, matching production within 2%. Valkey handled the load with only 30% CPU utilization, allowing us to safely deploy. I learned that tailoring the benchmark to real traffic patterns is crucial for credible performance validation and that Lua scripting can bridge the gap between synthetic tools and live workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
