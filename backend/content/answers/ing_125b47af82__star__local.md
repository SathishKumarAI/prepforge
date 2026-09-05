---
qid: ing_125b47af82__star__local
question: 'Explain: Technical Decision Making — Behavioral For Ai Roles'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:17-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud‑detection model was slipping: the false‑positive rate had jumped from 2% to 8%, costing us roughly $1.5 M in customer churn over two months.

**Task** – I needed to redesign the pipeline so that we could drop the false positives back below 3% while keeping the detection latency under 200 ms, all within a four‑week sprint and without pulling resources from other teams.

**Action** – First, I ran an impact analysis on our feature set using SHAP values to identify which features were contributing most to misclassifications. I then pruned the top 30% of low‑impact features, replaced the linear logistic regression with a LightGBM model that offered lower inference latency, and introduced a two‑stage ensemble: a fast gradient‑boosted tree for initial filtering followed by a lightweight neural net for edge cases. To keep latency in check, I deployed both models on an ONNX runtime optimized for our GPU cluster, and set up A/B testing with a 1% traffic split to monitor drift.

**Result** – After rollout, the false‑positive rate fell to 2.4%, saving us approximately $1.3 M over the next quarter. Inference latency stayed at 180 ms, meeting our SLA. I learned that blending explainability metrics with model choice and runtime optimization can deliver both accuracy and performance in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
