---
qid: ing_bba2a6d0fe__star__local
question: 'Explain: Google System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 365
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:41-05:00'
sources: []
---

**Situation:**  
In my last internship at a fintech startup, we were tasked with building a real‑time fraud detection pipeline that could ingest millions of transactions per day while keeping latency under 50 ms. The existing batch model was too slow for the new mobile payment app we were launching.

**Task:**  
I had to design an end‑to‑end system that leveraged Google Cloud’s architecture best practices—scalable ingestion, online learning, and low‑latency inference—while ensuring compliance with data privacy regulations.

**Action:**  
First, I set up a Pub/Sub stream for transaction events and used Dataflow to window them into 5‑second micro‑batches. For feature engineering, I employed Vertex AI Feature Store to cache user embeddings and transaction context, reducing recomputation. The model itself was a Gradient Boosted Trees ensemble deployed on Vertex AI Predictions with a custom prediction routine that performed early‑exit logic for obvious non‑fraud cases. To keep latency low, I used Cloud Memorystore (Redis) as a side‑car cache for the most frequently accessed user risk scores and added a fallback rule engine in case the ML inference timed out. Monitoring was handled by Cloud Monitoring dashboards that tracked per‑second latency and false‑positive rates.

**Result:**  
The new pipeline processed 4 M transactions/day with an average latency of 32 ms, cutting our fraud detection time from 2 s to real‑time. False positives dropped by 18%, freeing up investigators for more complex cases. I learned how to balance model accuracy with operational constraints and the importance of integrating ML services seamlessly into a Google Cloud ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
