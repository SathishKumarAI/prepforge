---
qid: ing_e36603e56a__star__local
question: 'Explain: Figma — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:23-05:00'
sources: []
---

**Situation** – While working on the design‑tool platform Figma’s plugin marketplace, I noticed that new users were only discovering about 12 % of relevant plugins in their first week. The growth team wanted to increase discovery and keep engagement high.

**Task** – Build a real‑time recommendation system that predicts which plugins a user will install based on their recent design activity, past installs, and the community’s popularity trends, with a target lift of 20 % in click‑through rate (CTR) within three months.

**Action** – I gathered 30 M event logs from Figma’s data lake and pre‑processed them with Spark to create user‑plugin interaction matrices. Using PyTorch, I trained a hybrid matrix‑factorization model that combined collaborative filtering with a gradient‑boosted tree on engineered features (e.g., project type, color palette similarity). I deployed the model as a microservice in Kubernetes, streaming predictions via Kafka every 5 minutes. To reduce latency, I cached top‑10 recommendations per user using Redis. I also set up A/B testing infrastructure to measure CTR and iterated on feature weights.

**Result** – After three months, the recommendation engine increased plugin CTR by 27 % (from 12 % to 15.7 %) and boosted overall installs by 18 %. The system handled a peak of 1.2 M requests per minute with <50 ms latency. I learned that blending collaborative signals with contextual design features can dramatically improve discovery in creative tools, and that real‑time deployment pipelines are critical for user‑centric ML products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
