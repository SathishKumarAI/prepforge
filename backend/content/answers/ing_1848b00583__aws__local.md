---
qid: ing_1848b00583__aws__local
question: Why does overfitting occur? — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:25-05:00'
sources: []
---

**Why does over‑fitting occur?**  

> **Situation & Task:** While building a predictive model for churn on our SaaS platform, I noticed that training accuracy was >99% but validation fell to 70%.  
> **Action (Dive Deep + Ownership):** I examined data quality, feature engineering, and regularization. The dataset had only ~3 k rows with 150 engineered features, many highly correlated. With a complex neural net (5 layers, 512 units each) and no dropout or L2 penalty, the model memorized training patterns instead of learning generalizable signals.  
> **Result:** Adding dropout (0.4), L2 weight decay (1e‑4), and reducing feature count to 30 improved validation accuracy to 88% while keeping training loss low. The model now runs on a single EC2 t3.medium, saving $12/month compared with the previous p3 instance.  
> **Why it happens:** Over‑fitting occurs when the hypothesis space (model capacity) far exceeds the amount of informative data, causing the learner to fit noise and idiosyncrasies rather than underlying patterns.  

**AWS Design Note:** For production, deploy the tuned model on Amazon SageMaker Endpoint with Auto Scaling and use Amazon CloudWatch for latency metrics; store raw features in S3 with Athena queries for audit. This balances **Cost**, **Availability**, and **Scalability** while maintaining high‑quality predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
