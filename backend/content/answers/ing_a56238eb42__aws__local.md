---
qid: ing_a56238eb42__aws__local
question: 'Explain: Cost Analysis — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 469
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:01-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
In my last role I was tasked to cut the quarterly compliance‑automation spend of a global financial client from **$1.2 M** to under **$700k** while maintaining audit readiness.

**Action (Dive Deep + Bias for Action)**  
I built an end‑to‑end cost‑analysis pipeline on AWS:

| Step | Service | Rationale |
|------|---------|-----------|
| 1️⃣ Ingest raw logs & policy data | **Amazon S3** (glacier for cold) | Durable, cheap storage |
| 2️⃣ Parse and enrich with compliance rules | **AWS Glue ETL** + **Lambda** | Serverless, auto‑scales |
| 3️⃣ Compute cost per rule / resource | **Amazon Athena** queries + **QuickSight** dashboards | Ad‑hoc analytics without moving data |
| 4️⃣ Automate remediation suggestions | **SageMaker** inference on a lightweight model trained on past remediation actions | Predicts which rules drive the most spend |
| 5️⃣ Schedule weekly reports via **SNS/SQS** | Keeps stakeholders informed | No manual effort |

I added a **cost‑explorer API** that flags anomalies > 30% above baseline, triggering an automated ticket in Jira. The result:  
- **Spend cut by 42 %** (from $1.2M to $700k).  
- **Compliance hit rate improved from 88 % to 97 %** because the model surfaced high‑impact rules early.  
- **Operational hours saved:** 300 hrs/month, freeing analysts for value‑added tasks.

**Result & Learning (Deliver Results / Learn & Be Curious)**  
I documented the architecture and presented a playbook that other regions adopted, scaling the solution to 5 markets with no additional cost. The biggest lesson: *continuous data‑driven monitoring beats ad‑hoc manual reviews.* This aligns directly with Amazon’s obsession for customer value through ownership of outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
