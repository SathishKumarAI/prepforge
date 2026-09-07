---
qid: ing_423bbb61d8__aws__local
question: 'Explain: Interview Follow-Up Questions — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 444
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:55-05:00'
sources: []
---

**Recommendation Engine – Interview Follow‑Up**

**Situation & Task**  
At my previous role I led a product team tasked with launching an AI‑driven recommendation engine for a media streaming platform that had 4 M monthly active users (MAU). The goal was to increase average watch time by 15% and reduce churn.

**Action – Design**  
I scoped the solution around **Amazon Personalize** for real‑time recommendations, backed by **S3** (raw logs) → **Glue** ETL → **Redshift Spectrum** for analytics. For offline training I used **EMR Spark** clusters on spot instances to keep costs under $200 k/quarter. We added a **Lambda** layer to inject contextual metadata (device type, time of day) into the Personalize batch job. The architecture was fully serverless except for EMR, giving us 99.9% availability and auto‑scaling.

I also built an A/B test harness in **CloudWatch Events + Step Functions**, routing 10 % of traffic to a “new algorithm” pipeline that used a lightweight collaborative filtering model on **DynamoDB**. Metrics were logged to **Kinesis Data Firehose** and visualized in QuickSight.

**Result**  
Within three months, watch time per user rose by **18%** (exceeding the 15% target) and churn dropped from 8% to 6%. The A/B experiment cost only $12 k, saving $30 k compared to a full rollout.  

**Leadership Principles**  
- *Customer Obsession*: Built feedback loops with real user data.  
- *Ownership & Bias for Action*: Took end‑to‑end responsibility and launched the pilot in 6 weeks.

**Bar‑raiser Takeaway**  
I demonstrated deep dive into AWS services, quantified impact, and learned that incremental A/B testing can surface hidden trade‑offs before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
