---
qid: ing_90a2816488__star__local
question: 'What is xAI? — Get a Job at xAI: Interview Process and Top Questions -
  Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 329
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:02-05:00'
sources: []
---

**Situation** – In my last role I was part of a fintech team tasked with launching a credit‑score model under regulatory scrutiny. The board demanded not only high predictive accuracy but also clear explanations for every decision, otherwise we’d face compliance fines and loss of trust.

**Task** – My goal was to embed an explainable AI (xAI) layer that could surface feature importance, counterfactuals, and a user‑friendly narrative for each credit score output, all while keeping latency below 200 ms.

**Action** – I chose SHAP values as the backbone because they offer local fidelity. Using Python’s `shap` library, I computed tree‑explainer values on our Gradient Boosting model. Then I built a microservice in FastAPI that aggregated SHAP contributions into a concise JSON payload: top three positive and negative drivers, a “what‑if” counterfactual suggestion, and a confidence band. To keep latency low, I pre‑computed the background dataset for SHAP once per day and cached results with Redis. I also added a dashboard in Grafana to monitor explanation coverage and response times.

**Result** – The xAI module reduced audit time by 70 %, earned us a compliance certification, and improved customer approval rates by 3 % because applicants could see actionable reasons for denial. I learned that blending rigorous explainability with real‑time performance requires careful choice of tools and thoughtful caching strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
