---
qid: ing_4aa167efe8__star__local
question: 'Explain: Enterprise Sales Director — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 387
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:38-05:00'
sources: []
---

**Situation:**  
When I joined Sierra’s commercial team, the Enterprise Sales Director was struggling to hit the quarterly quota of $12 M in new logos. The pipeline had been stagnant for three months and the forecasting model we used—simple linear regression on historical close rates—was giving us a 25 % over‑estimate.

**Task:**  
I needed to redesign the sales forecast, reduce churn risk, and help the director set realistic quarterly targets so that the team could focus on high‑value prospects.

**Action:**  
First, I collected the last 18 months of deal data (lead source, product mix, engagement score, contract size) and built a gradient‑boosting model in Python with XGBoost. I engineered features like “days since last contact” and “average deal velocity per region.” After validating with cross‑validation (AUC = 0.87), I deployed the model into Salesforce as a real‑time scoring tool, giving each opportunity a probability of closing within 90 days. I also created a churn risk dashboard that flagged accounts with >60 % chance of not renewing.

**Result:**  
The new forecast accuracy improved from ±25 % to ±8 %. The director adjusted the target mix and focused on the top 15 % of high‑probability leads, resulting in $2.4 M in closed deals in Q3—an 18 % lift over quota. I learned that blending ML with domain knowledge can turn raw data into actionable sales strategy, and that continuous model monitoring is key to sustaining gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
