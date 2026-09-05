---
qid: ing_2d8c2697d6__star__local
question: 'Explain: Amazon Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 378
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:30-05:00'
sources: []
---

**Situation** – In my last role at a mid‑size e‑commerce startup, we were launching a recommendation engine to compete with Amazon’s “Customers who bought this also bought” feature. The existing product catalog had 1.2 M SKUs and the traffic spike during Black Friday was projected at 4× normal load.

**Task** – I needed to design an end‑to‑end ML pipeline that could train on billions of user–item interactions, produce real‑time personalized recommendations with <100 ms latency, and scale to 10 M concurrent requests without exceeding our $1.5 M budget for cloud resources.

**Action** – First, I chose a distributed feature store (Feast) to centralize embeddings and user context. For training, I built a Spark job on EMR that performed negative sampling and generated pairwise ranking data, then used LightGBM with GPU acceleration on SageMaker to train 50 GB models nightly. To meet latency constraints, I distilled the model into a lightweight XGBoost ranker and deployed it via Lambda@Edge at edge locations, caching top‑10 results per user session in DynamoDB. I also set up automated A/B testing using CloudWatch metrics and closed‑loop retraining every 12 hours.

**Result** – The new system handled the Black Friday traffic surge with a 99.8 % success rate, reduced recommendation latency from 350 ms to 75 ms, and increased conversion by 18 %. It also cut infrastructure costs by 22 % compared to our previous monolithic approach. I learned that balancing model fidelity with deployment constraints is key in high‑scale production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
