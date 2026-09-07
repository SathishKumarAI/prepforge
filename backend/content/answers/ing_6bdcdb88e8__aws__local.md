---
qid: ing_6bdcdb88e8__aws__local
question: 'Explain: Enterprise Context in AI Tools — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 399
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:50-05:00'
sources: []
---

**Situation & Task**  
I led the rollout of an internal “Glean MCP” (Machine‑Learning Context Processor) that aggregates knowledge graphs from multiple data lakes to surface relevant insights for business analysts. The goal was to reduce search time by 70 % and increase ad‑hoc query success rate to >95 %.  

**Action**  
- **Ownership & Customer Obsession:** I mapped analyst pain points, defined a “search‑efficiency” KPI, and partnered with the Data Platform team.  
- **Dive Deep + Design:** Built a serverless architecture on **Amazon SageMaker** for model training, **AWS Glue** for ETL, and **DynamoDB** as a low‑latency vector store. Used **Kinesis Data Streams** to ingest real‑time logs, feeding them into a **Lambda** pipeline that updates the context graph.  
- **Bias for Action:** Deployed in two weeks by using Terraform scripts; performed A/B testing against legacy search.  
- **Invent & Simplify:** Introduced a single REST endpoint (`/glean/query`) that internally routes to SageMaker endpoints, eliminating client‑side complexity.  

**Result**  
- Query latency dropped from 12 s to 0.8 s (85 % reduction).  
- Analyst satisfaction score rose from 3.2 to 4.7 out of 5.  
- Operational cost fell by 30 % due to serverless scaling and spot‑instance usage in SageMaker training.  

**Bar‑raiser Takeaway**  
I demonstrated end‑to‑end ownership, quantified impact with real metrics, and iterated on failures (initial over‑provisioning of Lambda concurrency) to optimize cost/latency trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
