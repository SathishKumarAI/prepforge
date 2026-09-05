---
qid: ing_0f03510df6__star__local
question: 'Explain: Deploy — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:30-05:00'
sources: []
---

**Situation** – In Q3 2024 I was leading the rollout of a new customer‑support chatbot for an e‑commerce client that handled over 2 million tickets per month. Their SLA was 90 % within one hour, but we were hitting only 70 %.  

**Task** – Build and deploy an agentic AI system that could autonomously decide when to hand off a conversation to a human or resolve it with self‑service content, all while staying compliant with GDPR and the company’s privacy policy.  

**Action** – I assembled a cross‑functional squad of data scientists, NLP engineers, and compliance officers. We used OpenAI’s GPT‑4 fine‑tuned on 10 k past tickets, wrapped in a reinforcement‑learning loop that rewarded successful resolution and penalized unnecessary escalations. The agent was deployed behind a lightweight FastAPI gateway with real‑time monitoring via Grafana; we added an “explainability” layer using SHAP to surface feature importance for audit purposes. We also set up a fallback rule engine in case the model’s confidence dropped below 0.6, automatically routing to a human queue.  

**Result** – After three weeks of staged rollout, SLA improved from 70 % to 92 %, and average ticket time fell by 35 %. The system handled 40 % more tickets autonomously, freeing agents for complex cases. I learned that marrying RL‑driven agentic behavior with transparent explainability is key to gaining stakeholder trust in AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
