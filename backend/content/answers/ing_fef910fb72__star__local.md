---
qid: ing_fef910fb72__star__local
question: 'Explain: Calculating Throughput — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 418
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:45-05:00'
sources: []
---

**Situation** – While redesigning our recommendation engine at a mid‑size e‑commerce platform, the engineering team was hitting a 30 % slowdown during peak traffic (8–10 pm). The data pipeline ran on Spark and served predictions via a REST API behind an Nginx load balancer.  

**Task** – I had to quantify whether the bottleneck was latency, throughput or bandwidth, then propose concrete changes that would keep 95 % of requests under 200 ms while handling a 4× traffic spike.

**Action** – First, I instrumented each microservice with OpenTelemetry and collected per‑request timestamps. Using those logs I plotted latency CDFs and calculated the mean interarrival time (λ) versus service rate (µ). With Little’s Law (L = λW), I estimated queue lengths and identified that the API gateway was saturating at 1 Gbps bandwidth, causing a 15 % tail latency increase. I rewrote the data ingestion stage to batch 10× larger records and switched from TCP to HTTP/2 multiplexing, which reduced per‑request overhead by ~25 %. Finally, I added a second Nginx worker pool and tuned the Spark executor memory to 8 GiB each.

**Result** – After deployment, peak throughput rose from 1.2k requests/s to 4.5k requests/s (3.75×). Latency dropped: median 90 ms, 99th percentile 180 ms, and bandwidth utilization fell from 95 % to 70 %. I learned that distinguishing between latency, throughput and bandwidth via real‑time telemetry is critical; small protocol tweaks can unlock large capacity gains when combined with proper queuing analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
