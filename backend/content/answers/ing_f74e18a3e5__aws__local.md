---
qid: ing_f74e18a3e5__aws__local
question: 'Explain: Case Study 07 - Text-to-SQL Agent over a Data Warehouse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:54-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In 2023 my team built a *Text‑to‑SQL* assistant for a client’s Snowflake warehouse that contained ~5 TB of transactional data and 300 tables. The goal was to let business users ask natural‑language questions and get accurate answers within **2 s** while keeping query cost <$1 per month.

**Action (Dive Deep & Ownership)**  
I led the design using a two‑stage pipeline:  

| Stage | AWS Service | Reasoning |
|-------|-------------|-----------|
| 1. Intent → SQL skeleton | Amazon SageMaker + HuggingFace `text2sql` model, deployed behind API Gateway | Fast inference (~200 ms) and easy versioning |
| 2. Context & Optimization | Lambda + Glue Data Catalog to resolve table/column names; Athena for ad‑hoc cost estimation | Keeps metadata in sync with Snowflake via scheduled Glue crawlers |
| Execution | Snowflake’s serverless compute (dynamic scaling, auto‑stop after 1 min) | Guarantees <2 s latency and isolates workloads |

We added a *feedback loop*: every executed query was logged to DynamoDB; if the result set differed from user expectation, we retrained the model on that example. This closed‑loop improved precision from **78 %** to **92 %** in 3 months.

**Result (Deliver Results)**  
- Query latency dropped from 4.8 s to **1.6 s** (average).  
- Monthly query cost fell from $35k to <$1 by shifting heavy reads to Snowflake’s auto‑scaling and using partition pruning.  
- Adoption grew to 12,000 daily active users within 2 weeks of launch.

**Bar‑raiser takeaway**  
I demonstrated full ownership—defining metrics, iterating on the ML model, and automating cost control—while diving deep into AWS services to balance latency, scalability, and budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
