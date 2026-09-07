---
qid: ing_320091f6ee__aws__local
question: 'Explain: Step 2: Define Core Data & APIs — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 448
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:07-05:00'
sources: []
---

**Situation / Task**  
I was interviewing for a Senior ML Engineer role at AWS. The interviewer asked me to walk through *Step 2: Define Core Data & APIs* of a system‑design interview—essentially how I’d prepare the data layer and expose it so downstream services can consume it.

**Action (Dive Deep + Ownership)**  
1. **Identify data sources** – I listed raw logs, sensor streams, third‑party APIs, and historical datasets in S3.  
2. **Schema & lineage** – Using AWS Glue to catalog tables, I defined a star schema: `facts` (events) and `dimensions` (user, device).  
3. **ETL pipeline** – A Serverless Spark job on EMR Serverless pulls from Kinesis Data Streams, transforms with PySpark, writes to Redshift Spectrum for fast analytics.  
4. **API layer** – I chose Amazon API Gateway + Lambda (Python) to expose read‑only endpoints (`/events?userId=…`) and used AppSync for GraphQL queries.  
5. **Security & governance** – IAM roles, VPC endpoints, and Lake Formation permissions ensure least privilege.  

I drafted a cost model: $0.05 per 1 GB processed in EMR Serverless vs. $0.25 per GB in Glue ETL; API Gateway costs ~$4/month for 10M calls. The design scales to 50k concurrent streams, offers <200 ms latency, and keeps the data lake immutable.

**Result (Deliver Results)**  
I presented this plan in under 30 minutes, received a “gold” rating from the bar‑raiser, and later got hired on a team building an ML pipeline that now handles 1 TB/day with <10% cost variance.  

*Leadership Principles:* **Ownership** – I drove the entire data strategy; **Dive Deep** – I quantified performance and costs; **Deliver Results** – I delivered a production‑ready design that was later adopted across AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
