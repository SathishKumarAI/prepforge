---
qid: ing_d955354a1a__star__local
question: 'Explain: “Moving Computation is Cheaper than Moving Data”'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 303
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:19-05:00'
sources: []
---

**Situation**  
At my last company we built a recommendation engine that processed terabytes of user logs daily. The data lake was stored in on‑prem Hadoop clusters while our ML models lived in a cloud GPU farm, so every training run required shipping petabytes of log files to the cloud.

**Task**  
I had to reduce the end‑to‑end cost and latency of model training without sacrificing accuracy, keeping compliance with data residency rules.

**Action**  
I introduced an edge‑processing layer: lightweight Spark jobs were deployed on the same on‑prem cluster to pre‑aggregate logs into feature vectors. These vectors were far smaller (≈10×) than raw logs. I then built a serverless function in AWS Lambda that pulled only the aggregated data, ran the inference locally, and returned predictions back to the user interface. For training, I migrated the model code to an on‑prem GPU pool using Docker containers, so the heavy compute stayed where the data resided.

**Result**  
Training time dropped from 48 hrs to 6 hrs, and monthly data transfer costs fell by 70 %. We achieved a 15 % lift in recommendation precision while staying compliant. The experience taught me that moving computation to where data lives can drastically cut costs and improve responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
