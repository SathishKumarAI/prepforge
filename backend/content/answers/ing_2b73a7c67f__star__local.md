---
qid: ing_2b73a7c67f__star__local
question: 'Explain: What they emphasise — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 390
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:42-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a predictive churn model for our SaaS platform. The executive team wanted a clear, visual “figure” that showed how the model’s predictions related to customer usage patterns—essentially an interpretability dashboard (Figure A.I.) that could be shared with non‑technical stakeholders.

**Task:**  
I had to build that Figure A.I.: a live chart that mapped key behavioral features (logins, feature usage, support tickets) to predicted churn risk, and provide actionable insights so the marketing team could target at‑risk users before they left.

**Action:**  
I chose SHAP values for interpretability because they offer local explanations and can be aggregated into global plots. Using Python’s `shap` library I computed SHAP contributions for each feature across the last 30 days of data, then visualized them with Altair as an interactive stacked bar chart. To keep it real‑time, I wrapped the pipeline in Airflow DAGs that refreshed every 6 hours and exposed the chart via a Flask API to our internal BI tool. I also added drill‑through links to individual user profiles so the marketing team could immediately act.

**Result:**  
The dashboard (Figure A.I.) was adopted company‑wide; churn dropped from 12% to 8% in the first quarter after launch, saving us ~$2 M annually. I learned that combining SHAP with interactive visualizations turns complex AI into actionable business insight—exactly what executives want when they ask for “figure A.I.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
