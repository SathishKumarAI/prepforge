---
qid: ing_a2723adcc2__star__local
question: 'Explain: What Strong Interview Candidates Cover — Customer Distillation
  Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 327
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:33-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our churn rate was creeping up to 18% over the past quarter, largely because we couldn’t quickly identify which customers were at risk of leaving. The product team needed a data‑driven “customer distillation pipeline” that would sift through raw telemetry and flag high‑risk accounts in real time.

**Task:**  
I was tasked with designing and deploying an end‑to‑end pipeline: ingesting log streams, normalizing features, applying a predictive model, and surfacing actionable alerts to the retention team—all within 24 hours of data ingestion.

**Action:**  
Using Kafka for event streaming, I built a Spark Structured Streaming job that extracted key signals (login frequency, feature usage, support tickets). The features were fed into an XGBoost classifier trained on historical churn labels. To keep latency low, I serialized the model with MLflow and deployed it to AWS Lambda, triggered by a CloudWatch rule every minute. Alerts were pushed to Slack via a custom webhook, annotated with risk score and recommended actions.

**Result:**  
Within two weeks of launch, churn dropped from 18% to 12%, saving an estimated $1.2 M annually. I learned that a strong candidate not only knows the tech stack but also articulates how each component—data ingestion, feature engineering, model serving, and alerting—contributes to business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
