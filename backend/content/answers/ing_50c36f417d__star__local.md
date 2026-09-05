---
qid: ing_50c36f417d__star__local
question: 'Explain: Return Policy — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 381
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:50-05:00'
sources: []
---

**Situation:**  
At my previous e‑commerce startup we launched a new “30‑day return” feature that allowed customers to initiate returns via the mobile app. Within two weeks, our analytics team flagged a spike in return requests—an average of 12% higher than projected—which was driving up shipping costs and hurting margins.

**Task:**  
I was tasked with building a data‑driven system to predict which orders were likely to be returned so we could pre‑emptively flag them for extra inspection or offer targeted incentives, thereby reducing the return volume by at least 20% without compromising customer satisfaction.

**Action:**  
First, I designed an event pipeline using Kafka and Spark Streaming to ingest order metadata (SKU, price, buyer location) and real‑time behavioral signals (cart abandonment time, device type). Then I trained a gradient‑boosted decision tree model in MLlib on the past year’s return data, tuning hyperparameters with Bayesian optimization. The model scored each new order in milliseconds; scores above 0.75 triggered an “auto‑review” flag and a personalized email offering expedited shipping or a discount on the next purchase. I integrated the model into our microservice architecture via gRPC, exposing a REST endpoint for downstream services.

**Result:**  
Within three months, return requests dropped from 12% to 9%, cutting refund-related costs by $180K annually. Customer CSAT scores remained above 4.6/5 because we still offered a full‑refund guarantee but with smarter triage. I learned that coupling real‑time data pipelines with lightweight ML models can deliver immediate business value while keeping latency under 200 ms—a key requirement for high‑traffic e‑commerce platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
