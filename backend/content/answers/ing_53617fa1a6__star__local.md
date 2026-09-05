---
qid: ing_53617fa1a6__star__local
question: 'Explain: Developing AI Responsibly and Transparently'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 288
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:58-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection project at my fintech client, the model’s accuracy hit 92 % but flagged many legitimate transactions, causing customer churn and regulatory scrutiny.

**Task:** I had to redesign the AI pipeline so it was both responsible—minimizing bias—and transparent enough for auditors and users to understand its decisions.

**Action:** First, I introduced a data‑audit step using Fairlearn to quantify disparate impact across demographics. Then I swapped the black‑box XGBoost for an interpretable SHAP‑based ensemble that still matched performance. I built a lightweight microservice exposing feature importance scores via an API, and added a dashboard in Power BI where analysts could drill into individual predictions. Finally, I drafted documentation following the NIST AI RMF guidelines and ran internal “model‑for‑audit” sessions with compliance.

**Result:** The updated model maintained 91.8 % accuracy while reducing false positives by 35 %, cutting customer churn from 4.2 % to 1.7 %. Auditors approved the system in the first round, and we rolled out the transparency dashboard company‑wide. I learned that responsible AI isn’t just about bias metrics—it’s also about clear communication and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
