---
qid: ing_e497581e5e__faang__local
question: 'Explain: Other Metrics — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 513
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:46-05:00'
sources: []
---

**Clarify**  
You’re asking for “other metrics” that measure *latency* in machine‑learning systems—i.e., the time it takes from receiving an input to producing a prediction or model update. I’ll assume we’re talking about inference latency in production, not training time, and that the audience cares about per‑request delays, throughput, and tail behavior.

**Approach**  
1. List common latency metrics (mean, median, percentiles).  
2. Explain why each is useful.  
3. Touch on how to capture them in real systems.  
4. Briefly discuss trade‑offs and tooling.

**Depth**  
| Metric | Definition | Use‑case |
|--------|------------|----------|
| **Mean latency** | Average time over all requests | Quick sanity check; sensitive to outliers. |
| **Median (50th %)** | 2nd quartile | Robust to a few slow calls; reflects typical user experience. |
| **P95 / P99** | 95th/99th percentile | Tail latency—critical for SLAs, ensuring rare worst‑case delays stay bounded. |
| **Jitter (variance)** | Standard deviation of latency | Indicates stability of the system under load. |
| **Latency distribution histogram** | Full view across buckets | Helps diagnose congestion points or batching effects. |
| **Throughput‑latency curve** | Latency as a function of request rate | Shows scaling limits and bottlenecks (e.g., GPU saturation). |

Capture: instrument each inference endpoint, batch requests where possible, aggregate metrics in Prometheus/StatsD, visualize with Grafana.

**Edge Cases**  
- *Cold starts* inflate mean but not percentiles.  
- *Batching* reduces per‑sample latency but increases response time for the first request.  
- *Distributed inference* (model sharding) can create asymmetric tails; monitor per‑node latencies.  

**Optimize & Communicate**  
Explain that while mean latency is easy to optimize, meeting P99 targets often requires architectural changes: use of async I/O, better caching, or model quantization. In an interview, I’d close by saying “We track all these metrics, set alerts on tail thresholds, and iterate on both code and infra until the 99th percentile meets our SLA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
