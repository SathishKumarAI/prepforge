---
qid: ing_b7b745f0dc__star__local
question: 'Explain: Unacceptable Risk: Prohibited AI Practices'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 303
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:45-05:00'
sources: []
---

**Situation** – At my previous company we were launching a customer‑facing recommendation engine for an e‑commerce platform. The product team wanted to push the model as soon as possible because competitors were rolling out similar features.

**Task** – I was asked to review the AI pipeline and ensure compliance with our internal “Unacceptable Risk” policy, specifically avoiding any prohibited practices such as unverified data bias, lack of explainability, or unsafe reinforcement learning loops that could influence user behavior in harmful ways.

**Action** – First, I mapped out all data sources and performed a bias audit on the training set, revealing that certain demographic groups were under‑represented. I implemented a re‑weighting scheme and added an interpretability layer using SHAP values to provide end‑user explanations. Next, I replaced the original reinforcement‑learning reward function with a constrained optimization that capped any single recommendation’s influence score, preventing runaway promotion loops. Finally, I documented every change in our AI governance portal and ran a risk assessment review with legal and ethics teams.

**Result** – The updated model met compliance within two weeks, reducing potential bias scores by 45% and eliminating the risk of unintended user manipulation. We launched on schedule, received positive audit feedback, and learned that early, transparent checks save both time and trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
