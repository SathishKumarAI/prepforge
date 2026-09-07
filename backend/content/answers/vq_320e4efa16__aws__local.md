---
qid: vq_320e4efa16__aws__local
question: Explain List of Activities in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 524
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
In my last role I was asked to modernize a legacy ETL pipeline that moved terabytes of sales data nightly from on‑premise SQL Server into an S3 data lake for downstream analytics. The business needed real‑time freshness and auditability.  

**Action (Dive Deep, Bias for Action)**  
I mapped the entire *ADF* workflow into discrete activities:

| Activity | Purpose | Key Parameters | AWS Equivalent |
|----------|---------|----------------|----------------|
| **Copy Data** | Extract & load | Source dataset, sink dataset, mapping, fault tolerance | `AWS Glue ETL` job or `S3 Copy` |
| **Data Flow (Mapping)** | Transform in‑stream | Joins, aggregations, derived columns | `Glue Spark Jobs` or `EMR` |
| **Lookup** | Validate reference data | Key table, join condition | `Redshift` lookup or `DynamoDB` cache |
| **Conditional Split** | Branch logic | Boolean expression | `Step Functions` state machine |
| **ForEach** | Iterate over collections | Items array | Parallel Glue jobs via Step Functions |
| **Web Activity** | Call REST APIs for enrichment | Endpoint, auth | `Lambda` or `API Gateway` |
| **Custom Activity** | Run arbitrary code | Script path, compute pool | `EC2 Spot` or `Fargate` task |

I replaced ADF with an **AWS Glue+Step Functions** architecture: each activity maps to a Glue job or Step Function state. I leveraged **Glue Data Catalog** for schema governance and **Athena** for ad‑hoc queries.  

**Result (Deliver Results)**  
The new pipeline cut processing time from 4 hrs to 30 min, increased throughput by 300 % (handling 3× the data volume), and reduced cost by 45 % using Spot instances and serverless Glue. Post‑migration, we achieved a 99.9 % SLA on daily refreshes, directly boosting the BI team's productivity.  

**Learning & Bar‑raiser Insight**  
I documented every design decision in a living architecture wiki, enabling quick onboarding for new engineers. The bar‑raiser expects ownership of failure modes—so I built automated health checks and alerts in CloudWatch, ensuring zero data loss even when downstream services hiccuped.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
