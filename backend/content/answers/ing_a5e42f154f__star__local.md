---
qid: ing_a5e42f154f__star__local
question: 'Explain: Uber System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 310
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:45-05:00'
sources: []
---

**Situation:**  
At my last role I was asked to lead a pilot that would use real‑time ride‑matching data to predict surge pricing windows for a city of 4 M users. The existing system ran batch jobs every hour, but customers complained about stale price alerts.

**Task:**  
I needed to build a low‑latency ML pipeline that could ingest trip requests, learn demand patterns, and output dynamic price multipliers within seconds of an event spike—while integrating with Uber’s existing microservice architecture.

**Action:**  
I chose Apache Kafka for streaming the request logs, Spark Structured Streaming for feature aggregation (distance, time of day, weather), and a LightGBM model deployed via TensorFlow Serving behind an Envoy proxy. To keep inference under 50 ms I compressed the model to 32‑bit floats and used GPU acceleration on a single node. For evaluation I set up A/B tests against the legacy rule‑based system, measuring lift in revenue per surge event.

**Result:**  
The new pipeline reduced prediction latency from 45 min to <30 s, increased surge‑triggered revenue by 18% during peak hours, and cut CPU usage by 25% thanks to model pruning. I learned that marrying streaming data ingestion with lightweight gradient boosting can deliver production‑grade ML at scale without overhauling the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
