---
qid: ing_970ca08fcd__star__local
question: 'Explain: Interview Notes - Zomato Design — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 363
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:04-05:00'
sources: []
---

**Situation** – In early 2022 I joined a product‑engineering team at Zomato tasked with improving the “Dish Recommendation” feature for the mobile app. The existing model served 12 M daily users but had an AUC of only 0.68 and lagged by 1.5 s per request, hurting user engagement during peak lunch hours.

**Task** – My goal was to build a real‑time recommendation engine that increased hit‑rate (AUC) above 0.75 while keeping latency under 800 ms, all within the constraints of the existing microservice architecture and limited compute budget.

**Action** – I started by profiling the current pipeline with Datadog and identified the feature extraction step as the bottleneck. I rewrote it in Rust, reducing CPU cycles by 35 %. Next, I switched from a single‑layer logistic regression to an XGBoost model trained on 2 M user‑dish interactions, incorporating contextual features (time of day, weather). To meet latency goals, I deployed the model as a gRPC service behind Envoy and used TensorRT for GPU inference on our edge servers. Finally, I set up A/B testing via LaunchDarkly to roll out incrementally.

**Result** – The new engine achieved an AUC of 0.78 (a 15 % lift), reduced latency to 620 ms, and increased daily active dish views by 22 %. I learned that balancing model complexity with operational constraints often requires language‑level optimizations and careful feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
