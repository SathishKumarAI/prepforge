---
qid: ing_389080f7cc__star__local
question: 'Explain: DoorDash Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 309
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:36-05:00'
sources: []
---

**Situation:**  
In a recent mock interview for a ML Engineer role at DoorDash, I was asked to design an algorithm that ranks delivery drivers in real time based on predicted arrival times and customer satisfaction scores.

**Task:**  
I needed to create a system that could ingest live GPS data, forecast ETA with low latency (<50 ms per request), and adjust driver priority scores so that high‑rating couriers are matched first without biasing the pool.

**Action:**  
First, I built a streaming pipeline using Kafka for ingestion and Spark Structured Streaming for preprocessing. For ETA prediction I trained a LightGBM model on historical trip logs (speed, traffic, weather) and then distilled it into a small XGBoost tree that runs in under 10 ms per inference. To balance fairness, I added a second stage: a reinforcement‑learning policy network (PPO) that learns to weight drivers’ ratings against their current queue length, updating every minute with new rewards derived from on‑time deliveries and CSAT scores. The policy outputs a dynamic priority score used by the matching engine.

**Result:**  
Simulations on 10 k daily trips showed a 12% reduction in average delivery time and a 4% increase in overall CSAT compared to the baseline heuristic. I learned that combining fast, interpretable models for prediction with RL for fairness can meet strict latency requirements while improving business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
