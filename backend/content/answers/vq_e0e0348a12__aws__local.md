---
qid: vq_e0e0348a12__aws__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 377
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:24-05:00'
sources: []
---

**Situation & Task**  
I was hired as a Senior Data Engineer for a fintech startup that needed to migrate its legacy on‑prem database to **Amazon RDS (PostgreSQL)** while ensuring data integrity and zero downtime. The core requirement was to redesign the schema so that every table had clear primary and foreign keys, enabling robust referential integrity.

**Action**  
- *Ownership & Dive Deep*: I conducted a full audit of 32 tables, mapping existing business rules to database constraints.  
- *Technical Design*: For each entity I defined a **primary key (PK)** as a single‑column surrogate (`id BIGSERIAL PRIMARY KEY`) and created **foreign keys (FK)** with `ON DELETE CASCADE` where logical.  
- Leveraged **AWS Schema Conversion Tool** for automated conversion, then manually reviewed generated constraints in **RDS PostgreSQL**.  
- Implemented **Amazon CloudWatch Alarms** to detect FK violations and scheduled nightly **db‑tune** jobs via **AWS Lambda**.

**Result**  
- Reduced data inconsistency incidents from 12/month to 0/quarter (a 100 % drop).  
- Cut migration time by 40 % versus manual scripting.  
- Cost savings: avoided the need for an on‑prem replication layer, saving ~$2k/month in licensing.

**Reflection**  
I learned that *Customer Obsession* means protecting downstream analytics from dirty data, and *Bias for Action* drove me to prototype quickly with AWS services before full rollout. This experience reinforced my habit of validating schema changes through automated tests and monitoring—critical when scaling to millions of rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
