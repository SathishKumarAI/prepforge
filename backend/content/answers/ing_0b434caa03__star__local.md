---
qid: ing_0b434caa03__star__local
question: 'Explain: Project onsite — Cursor Software Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 348
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:30-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the recommendation engine for a SaaS e‑commerce platform that served over 1 million monthly users. The existing model, built in TensorFlow 2.x, had an NDCG@10 of 0.32 and lagged behind competitors.

**Task** – My goal was to lift NDCG@10 to at least 0.45 while keeping inference latency under 50 ms per request, so we could deploy the model on our edge GPU servers without impacting user experience.

**Action** – I started by profiling the data pipeline with Apache Beam and identified duplicate feature extraction as a bottleneck. I redesigned the preprocessing step using PyArrow for columnar storage, cutting runtime by 40%. Next, I switched from a vanilla MLP to a LightGBM ranker wrapped in ONNX Runtime, which reduced inference time by 70% and allowed us to use GPU acceleration. To avoid overfitting on sparse user data, I implemented CatBoost’s categorical handling and added L2 regularization tuned via Optuna. Finally, I set up A/B testing with a rolling rollout strategy in Kubernetes.

**Result** – The new model achieved an NDCG@10 of 0.48, a 50% lift over the baseline, while inference latency stayed at 45 ms. User engagement metrics improved by 12%, and we saved $200k annually on compute costs. I learned that balancing model complexity with deployment constraints often requires rethinking both data engineering and algorithm choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
