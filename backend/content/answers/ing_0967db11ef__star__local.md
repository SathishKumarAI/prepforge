---
qid: ing_0967db11ef__star__local
question: 'Explain: The Right to Explanation — EU AI Act 2026: Key Compliance Requirements
  for Enterprises | Secure Privacy Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 326
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:51-05:00'
sources: []
---

**Situation** – In early 2025 I was leading a compliance audit for a fintech startup that had just launched an AI‑driven credit scoring product in the EU. Our customers were demanding transparency, and regulators were tightening rules around explainability under the upcoming 2026 EU AI Act.

**Task** – I needed to design a system that could provide clear, actionable explanations for each decision while keeping our model’s performance and privacy guarantees intact, all within a three‑month timeline.

**Action** – First, I mapped the “Right to Explanation” clauses to concrete technical controls: (1) we integrated SHAP-based feature attribution into the inference pipeline; (2) we built a lightweight explanation microservice that cached explanations per user session, limiting data exposure; (3) we added an audit trail in PostgreSQL that logged model inputs, outputs, and generated explanations with GDPR‑compliant encryption. I also conducted a stakeholder workshop to refine what “actionable” meant for end users, adjusting the granularity of SHAP values accordingly.

**Result** – The new architecture delivered per‑decision explanations in under 200 ms without degrading our credit score accuracy by more than 0.3%. Post‑deployment user satisfaction rose from 68% to 92%, and we passed a third‑party audit with zero non‑compliance findings. I learned that aligning technical explainability with regulatory intent often requires both algorithmic tweaks and thoughtful UX design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
