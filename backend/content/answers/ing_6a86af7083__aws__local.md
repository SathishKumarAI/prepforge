---
qid: ing_6a86af7083__aws__local
question: 'Explain: // Agent Output (4 s) — SQL vs Pandas vs AI Agents: Which Solves
  Analytics Problems Best?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 403
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:21-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we had a data‑science squad that spent ~6 hrs/day on ad‑hoc SQL queries, Pandas notebooks and manual feature engineering for a recommendation engine. The churn prediction model lagged behind the target KPI (30 % reduction in churn) because of slow iteration cycles.

**Action**  
I championed an **AI‑agent‑driven analytics pipeline** that combined:
1. **Amazon Athena + Glue** – serverless SQL on S3, eliminating the need to spin up clusters for each query.
2. **AWS SageMaker Processing** – automated Pandas jobs that run in parallel, automatically scaling with data volume.
3. **Amazon QLDB & Amazon Bedrock (LLM agents)** – lightweight conversational agents that translate natural‑language questions into Athena queries or SageMaker scripts on demand.

I set up a feedback loop: every agent output was logged to CloudWatch and evaluated against a KPI dashboard. The new system cut the average query turnaround from 6 hrs to **45 min** (a 90 % reduction) and increased model accuracy by **12 pp** within two sprints.

**Result**  
We achieved the churn‑reduction target in 3 months instead of 6, saving ~$250k in compute costs and freeing up data scientists for higher‑value work. The success was recognized at our quarterly All‑Hands as a *“Customer Obsession* (delivering faster insights) and *Ownership* (owning end‑to‑end pipeline)*.

**Bar‑raiser take‑away**  
Listen for: ownership of the entire analytics lifecycle, deep dive into performance metrics, quantified impact on business KPIs, and lessons learned from initial pilot failures that led to a more robust, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
