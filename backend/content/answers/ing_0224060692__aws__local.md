---
qid: ing_0224060692__aws__local
question: 'Explain: Roles & titles they hire — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 440
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:00-05:00'
sources: []
---

**Situation (S)** – When I joined a fast‑growth fintech as Head of Machine Learning, we needed to scale the team from 4 to 25 engineers in 12 months while keeping delivery velocity high and avoiding “hire‑and‑fire” churn.

**Task (T)** – Define the role taxonomy for AI talent (data scientist, ML engineer, research scientist, infra engineer) and create a hiring framework that aligns titles with impact metrics.

**Action (A)**  
1. **Map Roles to Outcomes** – I mapped each title to a *delivery KPI*: model‑latency reduction (ML Engineer), data‑quality score (Data Scientist), research‑to‑product ratio (Research Scientist), and infra‑cost per inference (Infra Engineer).  
2. **Design the Pipeline** – Built an internal talent‑sourcing portal on AWS Amplify + DynamoDB, integrated with ATS via API Gateway. Candidate scoring was automated using a Lambda that parsed CVs against our KPI matrix.  
3. **Bias for Action & Ownership** – Ran a 4‑week pilot: 12 candidates, 6 hires. The pipeline cut interview time from 20 hrs to 7 hrs per candidate and reduced cost by 35 %.  
4. **Dive Deep on Feedback** – Post‑hire reviews showed a 22 % increase in model deployment frequency and a 15 % drop in infra costs.

**Result (R)** – Within one year, the AI team grew to 25 people with a 40 % higher model‑deployment rate and 30 % lower inference cost.  

> **Leadership Principles:** *Customer Obsession* (driving product‑impact metrics), *Ownership* (owning end‑to‑end hiring process).  
> **Bar‑raiser focus:** depth of role‑impact mapping, data‑driven KPI design, rapid iteration & learning from pilot failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
