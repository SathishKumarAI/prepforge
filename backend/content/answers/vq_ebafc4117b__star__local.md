---
qid: vq_ebafc4117b__star__local
question: How many devices? How many events per second?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:39-05:00'
sources: []
---

**Situation:**  
At my last role, the product team wanted to launch a real‑time analytics dashboard for their IoT platform. They had 1 M active devices and were unsure how many events per second the backend would need to handle during peak usage.

**Task:**  
I needed to build a scalable ingestion pipeline that could reliably process the expected load while keeping latency under 200 ms, and produce accurate capacity estimates for the infrastructure team.

**Action:**  
First, I collected historical data from the last year’s telemetry logs—about 3 TB of event data. Using Spark, I calculated the mean and peak daily event rates per device and applied a safety factor of 1.5× to account for growth and flash traffic. This gave me an estimate of ~4 M events/second during peak hours. I then simulated this load in a test cluster with Kafka, Flink, and Cassandra, measuring throughput and latency. The simulation revealed a bottleneck at the Kafka broker layer; adding 3 more brokers and tuning partition counts resolved it. I documented the full architecture and cost model for the ops team.

**Result:**  
The production pipeline now supports 5 M events/second with <180 ms end‑to‑end latency, handling a 25% growth in devices without re‑architecting. The ops team used my capacity plan to right‑size their cluster, saving $80K annually on cloud spend. I learned that combining historical telemetry analysis with realistic load testing is key to building resilient IoT data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
