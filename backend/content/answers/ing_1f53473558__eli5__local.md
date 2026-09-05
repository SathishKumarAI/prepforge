---
qid: ing_1f53473558__eli5__local
question: 'Explain: Requirements — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 272
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:25:52-05:00'
sources: []
---

Think of a machine‑learning system as a **restaurant kitchen** that must serve many customers (data) quickly and reliably.

1. **Menu (Problem Definition)** – Decide what dish you’ll cook: image classification, recommendation, fraud detection?  
2. **Ingredients (Data Sources)** – Gather raw data from cameras, user logs, sensors.  
3. **Prep Station (Pre‑processing)** – Clean, normalize, and split the data just like chopping veggies.  
4. **Chef’s Bench (Model Training)** – Choose a recipe (algorithm), tune spices (hyperparameters), and cook on a GPU or TPU.  
5. **Taste Test (Evaluation)** – Measure accuracy, precision, recall—like tasting to ensure flavor meets standards.  
6. **Serving Line (Deployment)** – Put the model behind an API, load‑balance requests, and monitor latency.  
7. **Kitchen Maintenance (Monitoring & Retraining)** – Watch for drips or stale ingredients; retrain when performance drops.

A cheat sheet lists these steps in order, reminds you to consider scalability, fault tolerance, data drift, and cost, just as a chef’s recipe card keeps the kitchen running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
