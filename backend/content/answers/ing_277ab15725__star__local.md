---
qid: ing_277ab15725__star__local
question: How do I get started? — Practical Deep Learning for Coders - Practical Deep
  Learning
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 333
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:33-05:00'
sources: []
---

**Situation:** Last year my startup was stuck in a loop of manual customer support tickets—over 12k per month—and we had no way to predict peak times or automate responses.

**Task:** I needed to build an AI‑powered chatbot that could triage and answer the most common queries, reducing ticket volume by at least 30% within three months while keeping response latency below two seconds.

**Action:** I started with a quick “how‑to” of practical deep learning: read *Practical Deep Learning for Coders*, then set up a Jupyter environment on AWS SageMaker. I collected the last six months of ticket transcripts, cleaned them with spaCy, and labeled intents using a semi‑automatic annotation script. For modeling, I fine‑tuned a DistilBERT base on our intent data (≈15k examples) using Hugging Face’s Trainer API, then deployed it via FastAPI behind an autoscaling ECS service. To monitor quality, I built a dashboard in Grafana that logged confidence scores and user satisfaction.

**Result:** Within 10 weeks the bot handled 4,500 tickets/month—35% drop in manual volume—and achieved a 92% accuracy on intent classification. The latency stayed under 1.5 s, meeting our SLA. I learned how to iterate quickly from data prep to deployment, and that starting with a proven course structure accelerates real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
