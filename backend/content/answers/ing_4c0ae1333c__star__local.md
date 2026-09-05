---
qid: ing_4c0ae1333c__star__local
question: 'What is xAI''s onsite? — Get a Job at xAI: Interview Process and Top Questions
  - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 320
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:21-05:00'
sources: []
---

**Situation:** During my senior design project, our team was tasked with building an explainable AI model for medical diagnosis. The client demanded not only high accuracy but also transparent decision paths that could be reviewed by clinicians before deployment.

**Task:** I had to develop an onsite explanation module that would generate human‑readable rationales for each prediction, integrate it into the production pipeline, and demonstrate its reliability in real‑time inference scenarios.

**Action:** I chose SHAP values as our core technique because they offer local fidelity and are model‑agnostic. First, I implemented a batch pre‑processing step that computed SHAP contributions for every feature on the GPU using the KernelExplainer. Then, to make it truly onsite, I wrapped the explainer in a lightweight Flask service, deploying it behind a FastAPI gateway with async workers so inference latency stayed under 200 ms. I also created an interactive dashboard (Plotly Dash) that visualized SHAP heatmaps for each patient record, allowing clinicians to toggle feature importance and see counterfactual explanations.

**Result:** The final system achieved 92% diagnostic accuracy while providing instant explanations. In a user study with 30 doctors, explanation turnaround time dropped from 5 minutes (manual review) to 20 seconds, and satisfaction scores rose by 35%. I learned that marrying explainability tools like SHAP with efficient deployment pipelines is key for real‑world AI adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
