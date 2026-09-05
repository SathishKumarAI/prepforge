---
qid: ing_e259390866__star__local
question: 'Explain: A Free Trial That Lets You Build Big! — What is TPS, what is QPS,
  and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 317
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:01:31-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a new ML inference API that served customer models in real time. After the beta, we noticed a sudden spike in traffic during peak hours—our latency started creeping up.

**Task:**  
I had to design a monitoring dashboard that would give us clear insight into request throughput so we could scale resources without over‑provisioning.

**Action:**  
I introduced two key metrics: Transactions Per Second (TPS) and Queries Per Second (QPS). TPS counted every incoming HTTP request, regardless of payload size—essential for understanding raw traffic load. QPS measured the number of distinct inference queries per second, which was more meaningful because a single request could contain multiple model calls. I set up Prometheus to scrape both counters, used Grafana to visualize them with alerting thresholds (e.g., TPS > 10k or QPS > 8k triggers autoscaling). The dashboard also compared the two metrics side‑by‑side so we could spot when a few heavy queries were inflating TPS but not affecting QPS.

**Result:**  
After implementing the dashboards, we reduced average latency from 250 ms to 120 ms during peak hours and cut unnecessary GPU usage by 35%. I learned that while TPS gives you an overall traffic picture, QPS tells you how many actual inference operations are happening—critical for resource‑efficient scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
