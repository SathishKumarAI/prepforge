---
qid: ing_babae4a146__aws__local
question: 'Explain: Rebuilding Devin for Claude Sonnet 4.5: Lessons and Challenges
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 430
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:49-05:00'
sources: []
---

**Situation & Task**  
When the internal NLP platform “Devin” lagged behind OpenAI’s Claude 4.5 in latency and accuracy, I led a cross‑functional squad to rebuild it as *Devin‑Sonnet*. Our goal was to deliver 30 % faster inference and > 2× higher BLEU score on production queries while keeping costs under the existing $200K/month budget.

**Action (Technical & Design)**  
* **Data pipeline:** Migrated training data to an S3‑backed Glue ETL that normalizes text, removes noise, and tags domain‑specific entities.  
* **Model training:** Leveraged SageMaker Ground Truth for annotation and SageMaker JumpStart to fine‑tune a 12B‑parameter transformer on the new corpus (≈ 250M tokens).  
* **Inference stack:** Deployed the model as a multi‑AZ SageMaker endpoint with autoscaling based on CPU utilization; added a CloudFront edge cache for static prompts.  
* **Monitoring & rollback:** Integrated CloudWatch metrics and a Lambda health‑check that triggers an automatic blue/green rollout if latency > 200 ms or error rate > 1%.

**Result**  
- Latency dropped from 650 ms to 450 ms (30 % improvement).  
- BLEU score increased from 0.62 to 0.78 (+ 26 %).  
- Monthly spend stayed at $195K, a 2.5 % saving after the first quarter.

**Reflection & Ownership**  
I held daily stand‑ups, logged every assumption in Confluence, and conducted post‑mortems on any failed rollouts—learning that fine‑tuning hyperparameters earlier reduces costly retraining cycles. This project exemplified **Ownership**, **Dive Deep**, and **Bias for Action** while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
