---
qid: ing_af4c809ae8__aws__local
question: 'Explain: Sang Michael Xie — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 393
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:01-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build an automated content‑ranking engine for our university’s learning platform (CS 324). The goal was to improve student engagement by recommending the most relevant lecture videos, with a target of +15 % click‑through and +10 % completion rates.

**Action**  
- **Ownership & Bias for Action:** I scoped the MVP, drafted the data pipeline, and owned the architecture design.  
- **Dive Deep & Deliver Results:** Collected 2 M interaction logs (clicks, watch time) from AWS S3, processed them with Glue, and stored features in DynamoDB. Trained a LightGBM model on SageMaker, using early‑stopping to prevent overfitting. Deployed the model as a Lambda‑backed API behind an Application Load Balancer for 99.9 % availability.  
- **Invent & Simplify:** Replaced our legacy Java microservice with a serverless stack (Lambda + DynamoDB), cutting operational overhead by 70 %. Implemented A/B testing via CloudWatch metrics to iterate quickly.

**Result**  
Within three weeks of launch, click‑through rose from 23 % to **39 %**, and completion rates increased from 57 % to **68 %**—exceeding the original targets by 4–7 pp. The serverless design reduced monthly costs from $1,200 to **$350** (≈70 % savings).  

**Bar‑raiser takeaways**  
- Demonstrated end‑to‑end ownership and rapid delivery.  
- Deeply analyzed data to inform model choice and infrastructure trade‑offs.  
- Quantified impact with clear metrics and cost‑benefit analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
