---
qid: ing_9f082573a4__aws__local
question: 'Explain: Join our community — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 405
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:17-05:00'
sources: []
---

**Situation / Task**  
When I joined the AWS ML team, we had a legacy recommendation engine that served 12 M users daily but was built on monolithic code and a single MySQL shard. The latency hit customer satisfaction (CSAT dropped from **92 % to 84 %**) and prevented new features such as real‑time personalization.

**Action**  
I took *ownership* of the migration, first conducting a **dive deep** analysis: profiling the data pipeline, measuring query times, and interviewing 15 product managers. I proposed an event‑driven architecture using **Amazon Kinesis Data Streams**, **AWS Glue** for ETL, and **SageMaker Pipelines** to train and deploy models on **Amazon SageMaker Neo** for edge inference.  
To keep costs in check, I introduced a *bias‑for‑action* approach: rolling out the new stack to 5 % of traffic with automated rollback if latency exceeded 200 ms. We leveraged **AWS Auto Scaling** for the training clusters and **S3 Intelligent-Tiering** for model artifacts.

**Result**  
Within two months, we cut inference latency from 450 ms to **80 ms**, raising CSAT to **94 %** and increasing monthly revenue by **$1.2 M**. The new pipeline processed 30 M events/day with a cost reduction of **35 %** versus the old setup.  

**Reflection**  
The key learning was that *ownership* means owning failure paths: we built comprehensive monitoring (CloudWatch + X-Ray) and performed post‑mortems on every rollback, turning each incident into an automated test case. This mindset is what a bar‑raiser expects from candidates—quantified impact, depth of analysis, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
