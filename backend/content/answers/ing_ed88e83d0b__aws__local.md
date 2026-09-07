---
qid: ing_ed88e83d0b__aws__local
question: 'Explain: Schema — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 525
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:30-05:00'
sources: []
---

**Scenario:**  
I led a migration of our recommendation engine from an on‑prem SQL cluster to a cloud‑native architecture in 2024. The goal was to support 1 M concurrent users while cutting cost by 30 % and improving query latency.

| **Step** | **Action** | **Result (data)** |
|----------|------------|-------------------|
| **Assess data model** | Compared relational tables (users, interactions) with a denormalized NoSQL design. | Identified that user‑interaction pairs were 4× more frequent than joins needed for analytics. |
| **Choose services** | Adopted **Amazon DynamoDB** for low‑latency writes, **Amazon Redshift Spectrum** + **S3** for analytical queries, and **AWS Glue** for ETL. | Achieved <5 ms write latency; query performance improved from 12 s to 0.8 s (15×). |
| **Schema design** | Implemented a *wide‑column* DynamoDB table (`UserID#Timestamp` → `Interaction`) with GSIs for top‑N recommendations. | Reduced storage cost by 25 % and eliminated expensive joins. |
| **Scalability & availability** | Enabled auto‑scaling, multi‑AZ deployment, and read replicas in Redshift. | Maintained 99.999% uptime during peak traffic spikes. |
| **Cost & trade‑offs** | Accepted eventual consistency for writes (acceptable for recommendations) to avoid costly synchronous transactions. | Total cloud spend dropped from $120K/month to $84K/month (+30 % savings). |

**Leadership Principles Reflected**

- **Customer Obsession** – Delivered faster, cheaper recommendations that improved user engagement by 18 %.  
- **Ownership / Dive Deep** – I personally wrote the migration scripts, tuned DynamoDB provisioned throughput, and debugged cross‑service latency spikes.  
- **Bias for Action** – Deployed pilot in 3 weeks instead of waiting for a full audit.  

*Bar‑raiser cues:* deep understanding of schema trade‑offs, concrete metric impact, ownership of failure points (e.g., handling eventual consistency), and learning loop—post‑migration, I instituted a monitoring dashboard to auto‑alert on write latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
