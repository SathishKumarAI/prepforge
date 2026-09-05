---
qid: ing_0fd5466e6a__star__local
question: 'Explain: Related patterns — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:01-05:00'
sources: []
---

**Situation**  
While leading a fraud‑detection project for an online payments platform, our team noticed that model drift was occurring faster than we could detect it—every week the AUC dropped by ~0.02. The production data stream was noisy and there were no audit logs to see how feature values changed over time.

**Task**  
I needed to create a reliable, replayable history of all input events so we could rebuild feature pipelines on demand, run model validation against past states, and debug why the drift happened.

**Action**  
We implemented an event‑sourcing layer using Kafka for immutable streams and stored each raw transaction as a JSON event in a compact schema registry. In our ML pipeline, every preprocessing step (e.g., tokenization, embedding lookup) was turned into a deterministic transformation that could be replayed from the event stream. We added a lightweight “event snapshot” service that materialized derived features every 15 min, indexed by timestamp and user ID, allowing us to reconstruct any feature vector in milliseconds. This also enabled us to run an A/B test on a new fraud model against historical events without re‑processing raw data.

**Result**  
Model retraining time dropped from 3 days to 6 hours, and we reduced the undetected drift window from one week to 48 hours. The event‑source approach also cut our debugging time by 70 % because we could replay exactly the state that caused a false positive. I learned that treating data as immutable events not only improves auditability but can dramatically accelerate ML ops cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
