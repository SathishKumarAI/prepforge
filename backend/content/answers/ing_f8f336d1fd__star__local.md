---
qid: ing_f8f336d1fd__star__local
question: 'Explain: However if an applicant has a criminal — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:22-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an anomaly‑detection model for fraud on credit‑card transactions. The dataset included over 2 million labeled events, but the “fraud” class made up only 0.5% of the data and was heavily imbalanced.

**Task**  
I had to design a pipeline that could surface true fraudulent activity with at least 95% recall while keeping false positives below 1%, all within a production latency budget of 200 ms per transaction.

**Action**  
I started by applying SMOTE to oversample the minority class, then engineered time‑based features (hourly trend, rolling averages) and user‑behavior embeddings using an autoencoder. For modeling I chose XGBoost with early stopping on a validation set that mirrored production latency. To satisfy the latency constraint, I distilled the boosted tree ensemble into a shallow neural net via knowledge distillation, then deployed it as a TensorFlow Lite model in our microservice. Continuous evaluation was automated: every night we ran a 10‑minute test against fresh data and logged precision‑recall curves.

**Result**  
The final system achieved 97% recall and 0.8% false positive rate, reducing manual review workload by 35%. Deployment latency dropped from 1.2 s to 180 ms, meeting the SLA. I learned that balancing statistical performance with engineering constraints often requires hybrid models and thoughtful distillation, not just “pick the best algorithm.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
