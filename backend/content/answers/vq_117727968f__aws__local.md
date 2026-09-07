---
qid: vq_117727968f__aws__local
question: HOW DO YOU GET THE NTH HIGHEST SALARY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 395
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
In my last role I was asked by the finance team to deliver a quarterly report that required the *nth highest salary* from a table of over **12 million** employee records. The stakeholders needed this value in real‑time for budgeting, and any delay could cost the company millions in mis‑forecasted payroll.

**Action (Dive Deep & Bias for Action)**  
I first benchmarked three SQL approaches on an RDS PostgreSQL instance:  
1. `ORDER BY salary DESC LIMIT 1 OFFSET n-1` – slow (≈ 12 s).  
2. Window function `ROW_NUMBER()` – improved to **3.8 s**.  
3. Materialized view + `SKIP LOCKED` on an Aurora Serverless cluster – brought it down to **0.9 s**.

I chose the third option because it scales horizontally, keeps latency low, and costs ~$5/month versus $30 for a provisioned instance. I automated the refresh with EventBridge on each salary update, ensuring freshness without manual intervention.

**Result (Deliver Results)**  
The new implementation reduced query time from 12 s to under **1 s**, cutting compute usage by **70%** and saving ~$6k annually. Stakeholders now receive the data instantly, improving budgeting accuracy by **15%** year‑over‑year.

**Learning & Bar‑raiser notes**  
I documented trade‑offs (materialized view staleness vs cost), shared the pattern in a team workshop, and added a retry policy for EventBridge to guard against transient failures. This showcases ownership, depth, and continuous improvement—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
