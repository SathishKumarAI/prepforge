---
qid: ing_c388dc5a01__star__local
question: 'Explain: Functional Requirements (What Are We Building?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 285
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:04-05:00'
sources: []
---

**Situation** – In my last role, our product team wanted a recommendation engine for an e‑commerce platform that could surface personalized product bundles within two seconds of a user’s search query.

**Task** – I was responsible for defining the functional requirements: what data we needed, how the model would be exposed as an API, and the acceptance criteria (precision@10 > 0.42, latency < 2 s).

**Action** – First, I mapped out the end‑to‑end flow: ingest user clickstream logs, preprocess features in Spark, train a LightGBM model, then serialize to ONNX for low‑latency inference. I wrote use‑case stories for “user sees relevant bundle” and “admin can trigger retraining”. I set up an A/B testing harness in Kubernetes with Prometheus monitoring to capture latency and hit rates. I also defined rollback triggers if precision dipped below 0.40.

**Result** – The engine achieved a precision@10 of 0.46 and maintained average inference time at 1.7 s, boosting conversion by 12% over the baseline. I learned that clear functional specs turn abstract ML goals into measurable, deployable features, keeping both engineers and stakeholders aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
