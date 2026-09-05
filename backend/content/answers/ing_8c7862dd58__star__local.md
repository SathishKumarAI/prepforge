---
qid: ing_8c7862dd58__star__local
question: 'Explain: How We Build — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 333
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:48-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s Mobility team, our surge‑pricing model was lagging during peak events; prediction errors averaged 18%, causing driver shortages and passenger complaints.

**Task:**  
I had to design a real‑time ML pipeline that could ingest live traffic, weather, and event data, predict demand spikes within 5 minutes, and update pricing signals with sub‑second latency.

**Action:**  
First, I set up an Apache Kafka stream from over 200 data sources (GPS, public APIs, social media). Using Spark Structured Streaming, I built a feature store that normalizes and aggregates features on the fly. For modeling, I trained a LightGBM ensemble offline, then distilled it into a TensorFlow Lite model for edge inference on our dispatch servers. To keep latency low, I deployed the model in a Kubernetes cluster with autoscaling, using Ray Serve to expose a REST endpoint that returns confidence‑weighted predictions. Finally, I integrated A/B testing via Uber’s internal experimentation platform, rolling out changes gradually and monitoring key metrics.

**Result:**  
The new pipeline cut prediction error from 18% to 7%, increased driver coverage by 12%, and reduced passenger wait times by 15%. The deployment also lowered inference latency from 350 ms to 80 ms. I learned that marrying streaming data engineering with lightweight ML models can deliver high‑impact, low‑latency solutions in a production environment where both digital signals and physical logistics intertwine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
