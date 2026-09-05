---
qid: ing_f0240addfb__star__local
question: 'Explain: Self-Consistency (Majority Voting) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:33-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud‑detection model was lagging: the false‑positive rate had climbed to 12% after a new payment gateway rollout, hurting customer experience and inflating investigation costs.

**Task** – I needed to reduce false positives by at least 30% while keeping latency under 200 ms per transaction, so the system could still operate in real time on our microservices architecture.

**Action** – I introduced a self‑consistency ensemble: three independently trained gradient‑boosted trees (XGBoost), a lightweight neural net, and a logistic regression baseline. Each model produced a binary flag; we applied majority voting—if two or more models flagged fraud, the transaction was routed to manual review. To preserve speed, I serialized each model with ONNX and deployed them in parallel containers behind an Nginx proxy that aggregated predictions in under 40 ms. I also added a feedback loop: misclassified cases were logged and used to fine‑tune the weakest models every week.

**Result** – The ensemble cut the false‑positive rate from 12% to 7%, a 41% improvement, while overall detection accuracy rose to 94%. Latency stayed at ~75 ms. I learned that simple voting can dramatically boost robustness when models capture complementary signal patterns, and that operationalizing ensembles requires careful serialization and monitoring pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
