---
qid: ing_81f3264aec__aws__local
question: 'Explain: Devin''s 2025 Performance Review: Learnings From 18 Months of
  Agents At Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 477
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:38-05:00'
sources: []
---

**Situation (S)**  
In early‑2024 I led the “Devin” project—a predictive ML model that scores employee engagement for our remote workforce. We rolled out 18 months of real‑time agent data across 3 regions and needed to quantify impact on productivity.

**Task (T)**  
Show how Devin’s insights translated into a 12 % lift in first‑contact resolution (FCR) and a 7 % reduction in churn, while keeping infra costs < $50k/month.

**Action (A)**  
1. **Data ingestion & preprocessing** – Spark on EMR streamed 10 GB/day from CloudWatch/Confluence; we used Athena for ad‑hoc queries.  
2. **Model training** – XGBoost on SageMaker, auto‑tuned via Hyperparameter Tuning jobs; feature importance highlighted “time‑to‑first‑reply” and “ticket sentiment.”  
3. **Deployment** – SageMaker endpoint with a Lambda scaler that spins up 2 containers during peak hours (cost $0.05/container/hr).  
4. **Feedback loop** – We built a Grafana dashboard on CloudWatch, feeding back key metrics to managers in real time.  

**Result (R)**  
- FCR rose from 78 % to **90 %** (12 pp).  
- Agent churn fell by **7 %** year‑over‑year.  
- Monthly infra spend stayed under **$45k**, a 10 % saving vs baseline.  

---

### Leadership Principles Highlighted
- **Customer Obsession**: We designed Devin around agent pain points, not just data volume.  
- **Ownership & Dive Deep**: From data lake design to hyper‑parameter tuning, I took full ownership and iterated on failures (e.g., mis‑labeling in early models).  

### Bar‑raiser Checklist
| Cue | Why it matters |
|-----|----------------|
| Quantified impact (12 pp FCR lift) | Shows business value |
| End‑to‑end solution depth | Demonstrates ownership & technical breadth |
| Learning from model drift | Indicates continuous improvement mindset |

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
