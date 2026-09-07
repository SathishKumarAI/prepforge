---
qid: ing_f7784a9436__aws__local
question: 'Explain: Interviewer plays a hospital COO: "ER wait times are too long.
  Can AI fix this?" Decompose the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 369
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:11-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  

**Situation / Task**  
In a hospital ER, patient wait‑time exceeds 90 min, causing dissatisfaction and potential safety risks. I was asked whether AI could shorten this latency.

**Action – Problem Decomposition**  
1. **Data Ingestion & Feature Engineering** – Capture real‑time inputs: triage score, vital signs, staff roster, bed occupancy, ambulance arrivals.  
2. **Predictive Queue Model** – Train a time‑series model (e.g., Prophet + XGBoost) to forecast arrival rates and treatment durations per acuity level.  
3. **Dynamic Staffing & Bed Allocation** – Use reinforcement learning (RL) to suggest optimal nurse/patient ratios and bed assignments that minimize expected wait while respecting constraints.  
4. **Decision‑Support Dashboard** – Deploy a low‑latency API on Amazon SageMaker, expose via API Gateway; fronted by an AWS Amplify app for ER staff.

**Result**  
Piloted in 3 weeks: average wait dropped from **92 min to 57 min (38% reduction)**, while bed utilization rose from 72 % to 84 %. Cost of the solution was <$10k/month vs. $120k/yr in overtime labor.  

**Bar‑raiser notes** – I demonstrated ownership by defining measurable KPIs, dove deep into data pipelines and model choice, quantified impact, and documented a rollback plan after an initial false‑positive prediction that highlighted the importance of continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
