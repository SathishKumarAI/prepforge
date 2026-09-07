---
qid: ing_304ca4fac7__aws__local
question: Engagement metrics and wellbeing metrics disagree. How do you build a system
  that resolves that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:23-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was leading a product team that launched an AI‑driven content recommendation engine for a health app. Engagement metrics (daily active users, time on platform) spiked by **+42 %**, but wellbeing scores dropped 3 points on the WHO-5 index. The challenge: build a system to reconcile these opposing signals and prioritize user well‑being without sacrificing engagement.

**Approach (Dive Deep + Bias for Action)**  
1. **Data layer** – Ingest raw logs, survey responses, and physiological signals into an Amazon Redshift cluster; run nightly ETL with AWS Glue.  
2. **Feature store** – Use Amazon SageMaker Feature Store to maintain a unified view of user interaction and wellbeing features (e.g., content type, sentiment, sleep patterns).  
3. **Multi‑objective model** – Train a reinforcement learning policy in SageMaker that maximizes *engagement* while constraining the expected *wellbeing loss* below a threshold. The reward function incorporates a penalty term weighted by real‑time WHO-5 scores.  
4. **Real‑time scoring** – Deploy the policy as an AWS Lambda edge function behind CloudFront, ensuring < 10 ms latency for content ranking.  

**Result (Deliver Results)**  
After two weeks of A/B testing, engagement rose to **+48 %** while wellbeing scores improved by **2.5 points**, surpassing our target of zero net loss. Cost was $0.03 per inference, keeping the total daily spend under **$200**.

**Bar‑raiser takeaway**  
I owned the end‑to‑end pipeline, dived deep into feature engineering and policy tuning, quantified impact with clear KPIs, and iterated fast after a failed initial model that over‑optimized for engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
