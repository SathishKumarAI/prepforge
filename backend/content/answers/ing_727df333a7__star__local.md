---
qid: ing_727df333a7__star__local
question: 'Explain: Test — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 351
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:25-05:00'
sources: []
---

**Situation** – At my previous fintech startup we were building a smart customer‑service bot that could autonomously generate responses and schedule follow‑ups. The product manager wanted us to validate whether an agentic AI model could safely handle escalations without human intervention, especially for high‑risk compliance questions.

**Task** – I had to design and run a rigorous test framework to prove the agent’s decisions were accurate, compliant, and explainable. The goal was to achieve 95 % accuracy on a set of 1,200 real support tickets while keeping the latency under 2 seconds per interaction.

**Action** – First, I curated a balanced dataset of past tickets, labeling them with compliance risk scores. Then I built a pipeline in Python using Hugging Face’s transformers, fine‑tuned a GPT‑3.5 model on our data, and added a rule‑based fallback layer for edge cases. For explainability, I integrated LIME to generate feature importance heatmaps for each response. I ran A/B tests against the legacy rule‑engine bot in a sandbox environment, collecting metrics via Grafana dashboards and automated alerting with Prometheus.

**Result** – The agent achieved 97 % accuracy on the test set and reduced average resolution time by 35 %. Deployment to production increased customer satisfaction scores from 4.2/5 to 4.6/5 within three weeks, while compliance audit logs showed zero violations. I learned that combining large‑language models with lightweight rule‑based safety nets yields both performance and regulatory confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
