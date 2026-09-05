---
qid: ing_c1321c138e__star__local
question: 'Explain: Internal APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:27-05:00'
sources: []
---

**Situation** – At my last company we were building a recommendation engine that served personalized content to millions of users each day. The model training pipeline lived in a separate data‑science microservice, while the serving layer was a high‑throughput Go service handling real‑time requests.

**Task** – I had to expose the trained model’s inference logic as an internal API so that other services (e.g., the web front end and analytics dashboard) could request predictions without duplicating code or re‑training models on each call. The API needed to be fast, versioned, and secure, with minimal latency overhead.

**Action** – I designed a lightweight RESTful interface using gRPC for binary payloads, wrapped the TensorFlow SavedModel in a container, and deployed it behind an internal load balancer. To keep the API stable, I introduced semantic versioning tags (v1, v2) and built automated health checks that pinged the model’s predict endpoint every 30 seconds. I also added rate‑limiting per service to prevent any single consumer from saturating the cluster. Finally, I wrote integration tests in Python that exercised the API with mock requests and logged response times for regression monitoring.

**Result** – The new internal API cut inference latency by 40 ms (from 90 ms to 50 ms) and allowed the front‑end team to roll out a personalized feature three weeks faster. We also reduced duplicated model code by 70 %, and the versioning strategy prevented accidental breaking changes during deployments. This experience taught me that a well‑designed internal API is as critical to system reliability as the ML model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
