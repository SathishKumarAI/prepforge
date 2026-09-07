---
qid: ing_7cb27b0a14__aws__local
question: 'Explain: So, we don''t get much sleep sometimes — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 404
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:58-05:00'
sources: []
---

**Situation / Task**  
During the “Seattle Conference on Scalability” I led a cross‑functional team that had to predict peak traffic for a new **YouTube Shorts** feature. The goal was to scale our recommendation engine without exceeding a 5 % budget hit and keeping latency under 120 ms.

**Action (Technical)**  
I scoped the problem: we needed real‑time demand forecasting per region. I chose an ensemble of **Amazon SageMaker Pipelines** + **Amazon Forecast** for time‑series prediction, feeding in historical view counts, device type, and weather data. The model was deployed to a **Lambda@Edge** endpoint that cached predictions at CloudFront edge locations, reducing query latency by 70 %. I added a **Step Functions** workflow to retrain nightly, using **S3** for raw logs and **ECS Fargate** for compute‑intensive feature engineering.  

I tuned hyperparameters with **Optuna**, achieving a **MAPE of 4.2%**—well below the 5 % target—and cut cost by **$18K/month** versus the previous rule‑based scheduler.

**Result (Data)**  
Peak traffic was handled 3× higher without any SLA breach, and user engagement on Shorts rose by **12% YoY** while our compute spend stayed within budget.  

**Leadership Principles**  
*Customer Obsession* – we built a system that kept users watching longer.  
*Ownership & Dive Deep* – I owned the end‑to‑end pipeline and iterated on data quality until the MAPE hit 4.2%.  

**Bar‑raiser takeaway**  
I documented failure modes (cold start latency, model drift) and instituted a weekly post‑mortem, ensuring continuous learning for the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
