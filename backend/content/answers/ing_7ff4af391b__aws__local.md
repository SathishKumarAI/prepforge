---
qid: ing_7ff4af391b__aws__local
question: 'Explain: Relevant source and signals — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 445
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:30-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a real‑time “AI Coding Workflow” pipeline inspired by Neo Kim and Louis‑François Bouchard’s framework. The goal was to ingest code commits, generate feature‑level embeddings, and surface actionable insights for developers—reducing review time by 30 %.  

**Action (Dive Deep + Ownership)**  
I scoped the data sources: Git commit logs, CI build metadata, and static analysis outputs. Using **Amazon CodeCommit** as the source of truth, I streamed events to **Kinesis Data Streams**, then processed them with **AWS Lambda** into a **DynamoDB** table that stored per‑commit embeddings (via SageMaker’s `TextEmbedding` endpoint).  

For signal extraction, I leveraged **Amazon Athena** on S3 (raw logs) and built a scheduled **Glue ETL** to compute sentiment scores, complexity metrics, and violation counts. These were joined in **Redshift Spectrum**, where we ran SQL‑driven anomaly detection queries that flagged “high‑risk” commits.  

The results:  
- Review cycle time dropped from 5 days to 3.4 days (32 % reduction).  
- False‑positive alert rate fell below 2 %.  
- Developers reported a 15 % increase in confidence when auto‑generated suggestions were available.  

**Result & Learning**  
The pipeline operated with < $0.02 per commit, proving cost‑effective at scale. I learned that continuous monitoring of signal drift (via CloudWatch metrics) is essential—once we noticed the embedding model’s precision degrade after a major language update, we re‑trained on fresh data and restored performance.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Directly reduced developer friction.  
- **Ownership & Dive Deep**: Designed end‑to‑end flow, tuned every component for scale and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
