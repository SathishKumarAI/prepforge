---
qid: ing_df56f30bf2__star__local
question: 'Explain: Wrong Tool Selection — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 284
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:25-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an automated credit‑scoring model that had to comply with new EU AI regulations. The team chose a popular open‑source transformer library for feature extraction because it promised fast prototyping and low cost.

**Task:**  
I needed to ensure the model met strict fairness, explainability, and audit requirements while staying on schedule for the regulatory filing deadline in three months.

**Action:**  
First, I performed a quick bias audit on the library’s pre‑trained embeddings; results showed a 12 % disparate impact against a protected group. I then switched to a vetted, governance‑enabled framework that provided built‑in interpretability hooks and an audit trail. To keep the timeline, I set up automated unit tests for data drift and integrated a lightweight explainability layer (SHAP) into our CI pipeline. I also coordinated with legal to document the tool selection rationale and risk mitigation steps.

**Result:**  
The new stack reduced bias metrics to 3 % and delivered full audit logs, earning regulatory approval ahead of schedule. We avoided a costly redesign later and learned that choosing tools solely on speed can jeopardize compliance—prioritizing governance features is essential for safe AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
