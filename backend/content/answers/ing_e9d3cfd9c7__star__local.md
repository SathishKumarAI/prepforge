---
qid: ing_e9d3cfd9c7__star__local
question: 'Explain: What a Good Answer Looks Like — What are System Design Interviews?
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 274
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:58-05:00'
sources: []
---

**Situation** – In my third year of the data science program, my team was tasked with building a real‑time fraud detection pipeline for a fintech startup that processed ~3 k transactions per second. The existing batch model lagged by 10 minutes and missed 15% of fraudulent cards.

**Task** – I had to design an end‑to‑end system that ingested streaming data, scored each transaction in under 50 ms, and alerted the risk team with a false positive rate below 2%.

**Action** – I chose Apache Kafka for ingestion, Spark Structured Streaming for feature extraction, and a pre‑trained XGBoost model served via TensorFlow Serving behind an Nginx load balancer. To meet latency, I sharded the model across two GPU nodes and used model quantization to reduce inference time. For monitoring, I added Prometheus alerts on queue depth and latency jitter.

**Result** – The pipeline processed 3 k TPS with an average latency of 38 ms and reduced fraud loss by 35% within the first month. I learned that balancing throughput, latency, and maintainability requires careful trade‑offs in data flow, model serving, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
