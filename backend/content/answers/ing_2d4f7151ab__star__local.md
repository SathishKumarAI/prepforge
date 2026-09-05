---
qid: ing_2d4f7151ab__star__local
question: 'Explain: Problem Exploration (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 378
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:44-05:00'
sources: []
---

**Situation:**  
During a recent senior data‑engineering interview at a fintech startup, the interviewer presented a new fraud‑detection product that needed to process millions of transactions per day with sub‑second latency. The current model was only 78 % accurate and was built on a legacy batch pipeline.

**Task:**  
I had five minutes to outline how I would explore this problem—defining data sources, key metrics, feasibility constraints, and initial design directions—before moving into detailed system architecture.

**Action:**  
First, I mapped the end‑to‑end flow: ingest → feature extraction → model inference → alerting. I identified critical KPIs (precision > 95%, latency < 200 ms, throughput ≥ 2 M tx/s). Next, I listed data touchpoints: real‑time Kafka streams, a cold storage lake, and an in‑memory cache for hot features. I questioned assumptions about label availability, feature drift, and model explainability, noting trade‑offs between latency and accuracy (e.g., batch‑scoring vs online inference). Finally, I sketched three candidate architectures: (1) microservice with TensorFlow Serving, (2) serverless Lambda chain for stateless scoring, and (3) a hybrid edge–cloud pipeline using Redis for caching.

**Result:**  
The interviewer appreciated the structured exploration; I was asked to flesh out architecture (2). My approach led to a prototype that achieved 96 % precision within 150 ms latency in a staging environment. The exercise reinforced my habit of starting with metrics and data flow before jumping into code, ensuring design decisions align with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
