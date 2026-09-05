---
qid: ing_bbdb44e7c5__star__local
question: 'Explain: Cost estimate — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 349
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:03-05:00'
sources: []
---

**Situation** – In my previous role at a SaaS startup, we were rolling out an AI‑powered customer support agent to reduce ticket volume. The CTO asked me to estimate the total cost of deploying and maintaining the system for our 1 M monthly active users.

**Task** – I had to deliver a realistic budget covering cloud compute, data labeling, model training, monitoring, and ongoing ops, while keeping the total spend below $250k per year.

**Action** – I first mapped out the workflow: ingesting live chat logs, running them through a fine‑tuned BERT model on GCP’s Vertex AI, and routing escalations to humans. Using Terraform I provisioned autoscaling GPU instances (A100) for inference, estimated at 0.5 h per 10k tickets. For training, I leveraged Google Cloud Storage with a 30% compression pipeline, then used TPUs for 12 hrs of fine‑tuning. I also budgeted $50k for data‑labeling contractors and set up Prometheus/Grafana dashboards to flag drift, costing an extra $20k annually for monitoring services.

**Result** – My estimate was $235k per year, under the target. The rollout cut support agent hours by 40% and improved first‑contact resolution from 68% to 82%. I learned that early cost modeling with IaC tools saves both money and time when scaling AI solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
