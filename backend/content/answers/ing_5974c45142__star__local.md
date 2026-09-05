---
qid: ing_5974c45142__star__local
question: 'Explain: Compression and Downsampling — InfluxData'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 376
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:47-05:00'
sources: []
---

**Situation** – At my previous role, we were ingesting IoT telemetry from 12,000 smart meters at one-minute intervals into an InfluxDB cluster for real‑time dashboards and anomaly detection. Within a month, the write throughput spiked to 3 M points per second, pushing our storage budget over $30k/month.

**Task** – I had to reduce storage costs while keeping enough resolution for downstream ML models that needed minute‑level data for trend analysis and hourly aggregations for forecasting.

**Action** – First, I enabled InfluxDB’s built‑in **compaction** by setting a retention policy of 90 days with an hourly downsampled measurement (`meter_hourly`) using continuous queries. The CQ aggregated the last 60 points per meter into a single point (average voltage, max current). Then I introduced **time-series compression** via the `tsdb.block-duration` tweak to 10 min blocks, which cut disk usage by ~40 %. For the remaining high‑frequency data that fed our ML pipeline, I implemented a custom downsampling routine in Python: every 5 minutes, it calculated mean and standard deviation for each meter, stored these in a separate measurement (`meter_5min`), and purged raw points older than 24 h.

**Result** – Storage costs dropped from $30k to $18k/month (−40 %). The ML models continued to train on the same high‑resolution data stream with only a negligible latency increase (~15 ms). I learned that combining InfluxDB’s native retention policies with lightweight, scheduled downsampling can achieve both cost efficiency and analytical fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
