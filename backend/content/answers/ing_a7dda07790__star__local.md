---
qid: ing_a7dda07790__star__local
question: 'Explain: Sources — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 280
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:42-05:00'
sources: []
---

**Situation**  
During a product launch for our recommendation engine, the marketing team noticed a sudden drop in click‑through rates from one demographic segment and demanded an explanation of why certain items were being promoted.

**Task**  
I had to provide clear, actionable insights into the model’s decision‑making process so that the content team could adjust their strategy without re‑training the entire system.

**Action**  
First I extracted feature importance scores using SHAP values for a random sample of 5,000 predictions. Then I created a visual dashboard in Tableau linking each user profile to its top contributing features (age, browsing history, time‑of‑day). To validate the sources, I ran a counterfactual test: by nudging the “recent purchases” feature upward, the engine’s recommendation score changed by 12 %, confirming its causal influence. Finally, I documented the entire workflow in Confluence and held a walkthrough with stakeholders.

**Result**  
The marketing team adjusted their targeting rules, boosting click‑through rates for that segment by 18 % within two weeks. I learned how to translate complex XAI outputs into stakeholder‑friendly narratives while preserving technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
