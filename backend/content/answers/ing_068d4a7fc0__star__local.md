---
qid: ing_068d4a7fc0__star__local
question: 'Explain: Round 3: AI system design (45-60 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 352
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:03-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection engine for a payment gateway that processes ~1M transactions per day. The existing rule‑based system had a false positive rate of 12% and missed 18% of fraudulent charges, hurting revenue and customer trust.

**Task** – My goal was to design an end‑to‑end AI pipeline that reduced the false positive rate below 5%, increased fraud capture by at least 20%, and kept latency under 300 ms per transaction for live scoring.

**Action** – I started with data exploration in Snowflake, then engineered features such as time‑of‑day patterns, device fingerprinting, and sequence embeddings using a transformer encoder. For modeling I built an XGBoost ensemble trained on balanced subsets, tuned via Optuna, and wrapped it in a TensorFlow Lite microservice for inference. To meet latency constraints I deployed the model behind a FastAPI gateway with GPU‑accelerated containers in Kubernetes, using Istio’s traffic shaping to prioritize fraud requests. Continuous evaluation was set up with A/B testing against the legacy system, feeding results back into an MLOps pipeline that retrained monthly.

**Result** – After rollout, false positives dropped to 3.7%, fraud capture rose by 23%, and average inference time stayed at 210 ms. The project also cut infrastructure costs by 15% thanks to efficient container scaling. I learned the importance of balancing model complexity with operational constraints and how close collaboration between data science and dev‑ops teams accelerates trustworthy AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
