---
qid: ing_06fe082896__star__local
question: 'Explain: 🏗️ AI System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 354
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:04-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time fraud detection engine for a payments platform that handled ~3 M transactions per day. The existing rule‑based model had an 8% false‑positive rate, causing significant customer friction.

**Task:**  
I was tasked with designing a scalable AI system that could reduce false positives by at least 30% while keeping latency under 200 ms for each transaction and supporting 24/7 live training updates.

**Action:**  
First, I scoped the data pipeline: we ingested raw logs from Kafka, enriched them in Spark Streaming (batch‑size 5 s) with customer metadata, and stored feature vectors in a low‑latency Delta Lake. For modeling, I chose an ensemble of LightGBM and a shallow neural net trained on both tabular features and transaction embeddings; the two models were wrapped in a custom inference service using FastAPI deployed behind Kubernetes autoscaling. To meet latency goals, I employed model quantization (int8) and batch‑inference caching with Redis. For continuous learning, we set up an online learning loop that pulled top‑confident predictions from production into a nightly retraining job, monitoring drift via SHAP value distributions.

**Result:**  
Within three months, the false‑positive rate dropped to 5%, a 37% improvement, while maintaining <180 ms inference latency. The system processed 3.2 M transactions daily with zero downtime during deployments. I learned that marrying real‑time streaming pipelines with lightweight model serving and automated drift monitoring is key to sustaining high‑performance AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
