---
qid: ing_7518a61166__star__local
question: 'Explain: Week 3 - Agents, evals, production — Study Plan'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 348
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:54-05:00'
sources: []
---

**Situation** – In my last internship I was tasked with building a prototype chatbot for the customer support team. The project timeline was tight: we had only four weeks to deliver a working system that could be evaluated and moved into production if it met quality thresholds.

**Task** – My goal for Week 3 was to transition from a proof‑of‑concept to a robust, evaluable agent. I needed to define evaluation metrics, set up automated tests, and prepare the model for deployment on our Kubernetes cluster with minimal latency.

**Action** – First, I chose OpenAI’s GPT‑4 as the base model and wrapped it in a FastAPI service, adding request throttling via Redis. For evaluation, I built a small test harness that sent 200 real‑world tickets through the agent and scored responses on relevance, sentiment consistency, and response time (target < 500 ms). I used pytest for unit tests and integrated them into GitHub Actions so every commit triggered an automated run. To ready the model for production, I containerized it with Docker, added a sidecar Prometheus exporter for metrics, and configured horizontal pod autoscaling based on CPU usage.

**Result** – The agent achieved 92 % relevance and 87 % sentiment match, with average latency of 420 ms. Deployment scripts were ready by the end of the week, allowing the team to roll out a canary release in two days. I learned how to balance evaluation rigor with rapid iteration, and that clear metrics drive both confidence and trust from stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
