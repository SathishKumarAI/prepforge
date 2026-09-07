---
qid: ing_28f8a75bfb__aws__local
question: 'Explain: Roles & titles they hire — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 370
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:11-05:00'
sources: []
---

**Situation (Amazon Leadership Principles: Customer Obsession, Ownership)**  
When I joined the Alexa AI team, we needed to scale our natural‑language understanding from 2 M queries/day to 20 M without compromising latency or accuracy.

**Task & Technical Requirements**  
I defined a hiring strategy that mapped roles to business outcomes:  
- **Machine‑Learning Engineer (NLP)** – responsible for feature engineering, model training, and A/B testing.  
- **Data Scientist (Research)** – focused on algorithmic innovation and evaluation metrics (BLEU, F1).  
- **ML Ops Engineer** – built CI/CD pipelines in AWS SageMaker, ensured 99.9 % uptime of inference endpoints.  
- **Product Manager (AI‑Ops)** – translated customer feedback into backlog items and prioritized experiments.

**Action & Design Choices**  
I leveraged AWS services: SageMaker for training, Lambda + API Gateway for serverless inference, and DynamoDB for real‑time metadata. We adopted a “model‑as‑a‑service” pattern to isolate model versions and roll back quickly.

**Result (Deliver Results)**  
Within 6 months we hit 20 M queries/day with <15 ms latency and achieved a 12 % lift in intent‑recognition accuracy, directly improving user satisfaction scores by 9 %.  

**Bar‑raiser Takeaway**  
I demonstrated ownership of the end‑to‑end pipeline, dove deep into cost‑benefit trade‑offs (e.g., spot vs. on‑demand instances), and learned from a failed rollout that required an extra layer of canary testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
