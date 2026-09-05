---
qid: ing_ebddaadfaf__star__local
question: 'Explain: And let''s say it was actually using — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 394
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:31-05:00'
sources: []
---

**Situation:**  
When I joined a product team at a mid‑size fintech, we were tasked with building a real‑time fraud detection engine that would ingest billions of transaction logs per day. The existing rule‑based system was lagging—false positives spiked by 35% during peak hours and latency exceeded our SLA.

**Task:**  
I had to design an end‑to‑end machine learning pipeline that could process the data stream, train models on fresh patterns, and serve predictions with sub‑200 ms latency while keeping infrastructure costs under a $50K monthly cap.

**Action:**  
First, I set up an Apache Kafka cluster for ingestion and used Spark Structured Streaming to aggregate events into 5‑second windows. For feature engineering, I leveraged Delta Lake tables that stored historical behavior vectors; this allowed us to compute rolling statistics in real time. I then trained a LightGBM model on a GPU‑enabled EMR cluster, tuning hyperparameters via Optuna to maximize AUC while keeping the model size below 20 MB. The inference service was containerized with Docker and deployed on Kubernetes, using Istio for traffic shaping so that new models could be rolled out without downtime. I also implemented an online learning loop: every hour we retrained the model on the latest 24‑hour window and updated the model registry automatically.

**Result:**  
Within three months, false positives dropped from 35% to 12%, while latency stayed under 180 ms for 99.5% of requests. The system handled 1.2 billion events daily with an average cost of $38K/month. I learned that combining streaming analytics with lightweight gradient boosting and careful model packaging can deliver production‑grade ML at scale without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
