---
qid: ing_79ba9f9c71__aws__local
question: 'Explain: AI-Enabled Round Problems (~9 in rotation)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 388
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:14-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a team that built an “AI‑Enabled Round Problem” system for a learning platform—nine distinct problem types rotated weekly to keep students engaged. The goal was to reduce manual grading time by 80 % and increase student pass rates by 12 %.

**Action**  
*Ownership & Bias for Action*: I scoped the solution in two phases.  
1️⃣ **Model layer** – Trained a multi‑label classification model on 200k labeled examples using SageMaker, adding data augmentation to cover edge cases.  
2️⃣ **Inference pipeline** – Deployed the model as a REST endpoint via SageMaker Hosting; wrapped it in an API Gateway + Lambda function that pulls problem metadata from DynamoDB and writes results back to RDS.  
*Dive Deep*: I added a “confidence score” filter: problems below 0.75 trigger human review, saving us ~25 % of effort.  
*Deliver Results*: Within three months we saw grading time drop from 30 min per batch to 4 min (84 % reduction) and student pass rates climb by 13 %.  

**Result**  
The system handled >10k concurrent requests with <200 ms latency, cost‑effective at ~$1.2K/month versus $12K in manual labor. I documented lessons—overfitting risk, need for continuous monitoring—and set up CloudWatch dashboards to catch drift early.

**Bar‑raiser check** – Demonstrated ownership of the full stack, deep technical design (SageMaker + Lambda + DynamoDB), quantified impact, and a learning loop that reduced future failure risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
