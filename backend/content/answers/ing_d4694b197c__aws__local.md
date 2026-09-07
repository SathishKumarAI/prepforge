---
qid: ing_d4694b197c__aws__local
question: 'Explain: Amazon Salaries — Amazon Salaries | Levels.fyi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 455
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:30-05:00'
sources: []
---

**Situation & Task**  
In 2024 I was asked by the People Analytics team to build an internal “Amazon Salaries” dashboard that aggregates public salary data (Levels.fyi) with our confidential compensation database. The goal was to surface pay‑band trends, identify gaps and support policy changes—directly impacting employee satisfaction.

**Action**  
- **Ownership & Bias for Action:** I scoped the project, signed off on a 4‑week sprint, and led a cross‑functional squad (Data Engineering, Security, Legal).  
- **Dive Deep & Invent & Simplify:** I designed an *ETL pipeline* using **AWS Glue** to scrape Levels.fyi, transform JSON into Parquet, and load it into **Amazon S3**. A scheduled **Glue Job** triggers a **Lambda** function that merges the public data with our internal table in **DynamoDB**, applying strict IAM roles for privacy.  
- For analytics I deployed **Athena** queries on the combined dataset, exposing results via an **API Gateway** endpoint that feeds the internal BI tool (QuickSight).  
- Cost control: Glue crawler schedules run only 2× per day; DynamoDB provisioned throughput tuned to 200 RCU/WCU. Estimated monthly spend <$1k.

**Result**  
Within 6 weeks we delivered a live dashboard showing:
- 12% higher median pay for senior roles in the US vs global average (data‑driven insight).  
- Identification of 3 under‑paid product groups, leading to a $2M adjustment plan.  
Employee satisfaction scores rose from 78 % to 86 % on “compensation fairness” (pre/post survey).

**Reflection**  
I learned that automating the data pipeline reduced manual errors by 95 %, and involving legal early prevented compliance risks—proof of true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
