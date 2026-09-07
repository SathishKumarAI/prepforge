---
qid: vq_840d3c068b__aws__local
question: What does it mean to have high and low p-values?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 371
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:05-05:00'
sources: []
---

**Answer (Amazon Way)**  

During a recent data‑science sprint on customer churn prediction, I was asked to explain how p‑values guide feature selection.  
- **Situation:** Our model had 120 engineered features; we needed to prune the list without sacrificing accuracy.  
- **Task:** Use statistical tests to decide which variables were genuinely predictive of churn.  
- **Action:** I performed a two‑sample t‑test for each feature, interpreting *p‑value* as the probability that observed differences arose by chance.  
  - A **low p‑value (≤ 0.01)** indicated strong evidence against the null hypothesis—feature was statistically significant.  
  - A **high p‑value (> 0.05)** suggested insufficient evidence; I removed those features to simplify the model.  
  I then retrained using only the low‑p‑value set and deployed the new pipeline on **AWS SageMaker** with an **S3 bucket** for data, a **Lambda** function for preprocessing, and an **ECS Fargate** container for inference.  
- **Result:** Model accuracy improved from 78 % to 84 %, inference latency dropped by 30 %, and the total monthly cost fell from $1,200 to $800—an **$400/month saving** (≈ 33 %).  

*Leadership Principles:* **Customer Obsession** (better predictions → happier users) & **Dive Deep** (understanding statistical nuances). The bar‑raiser will note my ownership of data hygiene, the quantitative impact, and the lesson that rigorous hypothesis testing can drive both performance and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
