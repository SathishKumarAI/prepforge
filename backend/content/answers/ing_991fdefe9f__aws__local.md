---
qid: ing_991fdefe9f__aws__local
question: 'Explain: Example Cost Calculations — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 407
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:49-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign an internal AI‑model‑cost dashboard that fed into the quarterly budget forecast. The existing spreadsheet was ad‑hoc, slow (≈10 min per run) and had a 15 % error rate because of manual data pulls.

**Action**  
*Customer Obsession & Ownership* – I mapped every cost driver: EC2 spot vs. on‑demand, S3 storage, SageMaker training/hosting, EFS, and Lambda batch jobs.  
*Dive Deep* – Using CloudWatch metrics and AWS Cost Explorer APIs I built a real‑time data pipeline in **AWS Glue** that pulls spend per service and per model tag every 5 min. The results are stored in an encrypted **Redshift Spectrum** table for ad‑hoc analytics, while a **Step Functions** orchestration triggers a **Lambda** to push daily summaries into the **Athena** query layer.  
*Bias for Action & Deliver Results* – I replaced the spreadsheet with a **QuickSight** dashboard that now updates in <30 s, cuts error rate to 0.5 %, and gives the finance team instant visibility on projected vs. actual spend. The new architecture reduced compute costs by 22 % (spot + auto‑scaling) and cut manual effort from 8 hrs/week to 1 hr.

**Result**  
The quarterly forecast accuracy improved by **+12 pp**, freeing $120K in unplanned budget, while the dashboard’s low latency enabled on‑the‑fly cost alerts that saved an additional $45K annually. I documented all design choices and shared a post‑mortem with the team, highlighting how iterative testing of spot vs. on‑demand trade‑offs informed our final model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
