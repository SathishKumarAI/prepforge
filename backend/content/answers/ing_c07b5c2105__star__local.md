---
qid: ing_c07b5c2105__star__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:20-05:00'
sources: []
---

**Situation**  
While leading a production‑grade recommendation engine at an e‑commerce startup, our weekly KPI showed a drop in conversion rate from 12% to 9%. Customer complaints highlighted that page loads were sluggish after we integrated a new deep‑learning ranking model.

**Task**  
I had to pinpoint which latency metrics mattered most—model inference time, data pipeline latency, and end‑to‑end request latency—to diagnose the slowdown and restore performance within two weeks.

**Action**  
First, I set up a lightweight Prometheus exporter on each inference node to capture per‑sample inference latency (median, 95th percentile). Next, I instrumented our feature store with Datadog APM to measure data fetch times. Finally, I added a synthetic “heartbeat” request that passed through the entire stack, logging total HTTP round‑trip time in New Relic. By correlating these three numbers, I discovered that while median inference stayed under 10 ms, the 95th percentile spiked to 70 ms due to occasional GPU contention, and data fetch latency was averaging 30 ms during peak traffic.

**Result**  
After off‑loading hot features to Redis and tuning the batch size for GPU inference, we reduced the 95th‑percentile latency from 70 ms to 25 ms and cut overall page load time by 35%, bringing conversion back to 11.8%. I learned that monitoring median alone can hide tail latencies; a trio of model, data, and request metrics is essential for reliable ML production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
