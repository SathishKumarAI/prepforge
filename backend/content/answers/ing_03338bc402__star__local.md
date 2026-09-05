---
qid: ing_03338bc402__star__local
question: 'Explain: Ryan Drapeau — How we built it: Stripe Radar | Stripe Dot Dev
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 351
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:37-05:00'
sources: []
---

**Situation** – When I joined Stripe’s fraud‑detection team, the existing rule engine could only flag obvious patterns; we were losing about 12% of legitimate payments in a high‑traffic marketplace during peak seasons. The leadership asked us to build a machine‑learning model that could learn complex user behavior and reduce false positives by at least 30%.  

**Task** – I was tasked with designing, training, and deploying a real‑time fraud detector that would ingest millions of transaction events per day, output risk scores in milliseconds, and integrate cleanly into the existing Radar rule pipeline.  

**Action** – I started by gathering a 90‑day labeled dataset (≈4 M transactions) and engineered features such as device fingerprint entropy, velocity across geographies, and temporal clustering of failed attempts. Using TensorFlow, I built a gradient‑boosted tree model (XGBoost) tuned with Bayesian optimization to balance precision/recall. To meet latency constraints, I distilled the model into a lightweight inference engine in Rust, deploying it via gRPC behind our edge services. I also set up an online A/B test framework that fed back real‑time performance metrics and automated retraining every 48 h.  

**Result** – The new Radar module cut false positives by 35% (down from 12% to 7%) while maintaining a 99.5% true‑positive rate, saving Stripe roughly $2 M in lost revenue annually. I learned that marrying rigorous feature engineering with low‑latency deployment is key for production ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
