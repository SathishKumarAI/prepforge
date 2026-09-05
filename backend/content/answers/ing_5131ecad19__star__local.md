---
qid: ing_5131ecad19__star__local
question: 'Explain: Current openings at Glean — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:48-05:00'
sources: []
---

**Situation:**  
Last quarter I was part of a cross‑functional team at a startup that wanted to surface the most relevant job postings from our partner platform, Glean. The site had 12 million active users and we were seeing only a 3% click‑through rate on job recommendations—well below industry benchmarks.

**Task:**  
My goal was to design an end‑to‑end recommendation engine that could lift CTR by at least 30%, while keeping inference latency under 200 ms so the experience stayed snappy for mobile users.

**Action:**  
I first built a data pipeline in Apache Airflow to collect user interaction logs, job metadata, and external skill benchmarks. Using Spark I engineered features like tenure‑weighted skill overlap and contextual embeddings from BERT fine‑tuned on our own résumé corpus. For the model I chose LightGBM because of its speed and native handling of categorical fields; I tuned it with Bayesian optimization in Optuna. To meet latency, I distilled the tree ensemble into a small neural network (5 layers, 256 units) and deployed it via TensorFlow Serving behind a CDN edge cache. I also set up A/B tests to roll out new feature sets incrementally.

**Result:**  
After two months of production rollout, CTR jumped from 3% to 4.8%, a 60% lift, and revenue per user increased by 12%. The model latency stayed at ~150 ms on average. I learned that combining strong feature engineering with lightweight serving architectures can deliver measurable business impact without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
