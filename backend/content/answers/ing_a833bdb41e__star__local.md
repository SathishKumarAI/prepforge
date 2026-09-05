---
qid: ing_a833bdb41e__star__local
question: 'Explain: Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 352
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:27-05:00'
sources: []
---

**Situation** – In my last internship at a fintech startup, we were building a fraud‑detection platform that needed a live recommendation engine for merchant offers. The data pipeline was lagging behind real‑time transaction streams, causing offer latency of 3–4 seconds—unacceptable for our user experience.

**Task** – I had to design a system architecture that could ingest streaming data, run an online ML model (a gradient‑boosted tree ensemble) in near real time, and serve predictions with sub‑100 ms latency while scaling to millions of users.

**Action** – First, I mapped the end‑to‑end flow: Kafka for ingestion, a Spark Structured Streaming job that updates feature tables every minute, and a TensorFlow Serving cluster behind an NGINX load balancer. I used model distillation to shrink the GBM into a lightweight neural network so inference time dropped from 200 ms to 45 ms per request. For scaling, I deployed the serving pods on Kubernetes with HPA based on CPU usage, and added Redis caching for hot keys. I also set up Prometheus/Grafana dashboards to monitor latency, error rates, and throughput.

**Result** – The new pipeline cut prediction latency from 3.5 seconds to 80 ms, boosting conversion by 12% within the first month of deployment. It also handled a 4× traffic spike during peak sales without any downtime. I learned that in ML system design you must treat model inference as a first‑class service and balance algorithmic accuracy with operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
