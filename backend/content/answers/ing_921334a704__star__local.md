---
qid: ing_921334a704__star__local
question: 'Explain: Amazon System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 357
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:10-05:00'
sources: []
---

**Situation:**  
At Amazon, I was part of the recommendation team tasked with launching a new “Personalized Deals” feature on the mobile app. The existing model was batch‑trained nightly and served static suggestions; latency exceeded 1 s, and we needed sub‑100 ms responses for real‑time personalization.

**Task:**  
Redesign the inference pipeline to deliver real‑time recommendations with <50 ms latency while keeping CPU usage under 30 % on our edge devices, and maintain a 5 % lift in click‑through rate (CTR).

**Action:**  
I architected an end‑to‑end system using Amazon SageMaker for training, then exported the model to ONNX and deployed it via AWS Lambda with container images. For feature retrieval I switched from DynamoDB queries to Redis cache with a time‑to‑live of 5 min, reducing round‑trip latency. I implemented a “lazy loading” strategy: only the top 10 product embeddings were cached per user session, and a lightweight inference script in Rust handled vector similarity search locally. I added A/B testing harnesses in CloudWatch to monitor CTR drift in real time.

**Result:**  
Latency dropped from 1 s to 35 ms on average, CPU usage stayed below 25 %. The new system increased CTR by 6.8 % over the baseline and reduced server costs by ~12 k USD/month. I learned how micro‑optimizations in feature caching and language choice can dramatically impact real‑time ML workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
