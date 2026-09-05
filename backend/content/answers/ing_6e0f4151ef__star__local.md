---
qid: ing_6e0f4151ef__star__local
question: 'Explain: Real-world Systems — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:20-05:00'
sources: []
---

**Situation**  
At a startup building an on‑demand food delivery platform similar to Zomato/Swiggy, we noticed our order‑prediction model was lagging during peak hours—delivery times drifted by up to 25 % and customer ratings dipped.

**Task**  
I had to redesign the real‑world recommendation engine so it could handle high traffic spikes, reduce latency below 150 ms, and improve predicted ETA accuracy by at least 15 %.

**Action**  
First, I switched from a single monolithic TensorFlow model to a microservice architecture using PyTorch Lightning. I built a feature pipeline in Spark that ingested live order data (restaurant wait times, traffic heatmaps, rider GPS) and used a LightGBM gradient‑boosted tree as the core predictor. To handle scale, I deployed the model on Kubernetes with autoscaling based on CPU usage and integrated a Redis cache for the most frequent request patterns. For training, I set up an online learning loop: every 30 minutes we retrained on the latest 10 k orders using Ray Tune to optimize hyperparameters in parallel.

**Result**  
Latency dropped from 300 ms to 110 ms, and ETA predictions improved by 18 %, cutting cancellations by 12 %. The system now supports 50k concurrent users during peak times. I learned the value of blending ensemble models with real‑time data pipelines and the importance of continuous retraining for dynamic domains like food delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
