---
qid: ing_a40b44b5b7__aws__local
question: 'Explain: METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 502
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:23-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In the last project I built a demand‑forecasting model for a global retailer. The leadership asked me to quantify how accurate the predictions were so that we could justify scaling the solution across all 200 stores.  
> 
> **Task:** My job was to select and explain an evaluation metric that would align with business goals (avoiding stockouts vs overstock) and be easy for non‑technical stakeholders to understand.  
> 
> **Action:** I chose *Mean Absolute Percentage Error* (MAPE) because it expresses error as a percentage of actual demand, directly relating to inventory cost. I calculated MAPE = 1/N ∑|Aᵢ–Pᵢ|/Aᵢ, where Aᵢ is actual sales and Pᵢ predicted sales for each day i.  
> 
> • **Why MAPE?**  
>   – **Customer Obsession:** Stakeholders care about cost per unit sold; a 5 % error translates to $X savings.  
>   – **Dive Deep:** I compared MAPE against RMSE and MAE, showing that MAPE was more interpretable for non‑technical executives while still sensitive to outliers.  
> 
> • **Implementation:** The metric was calculated nightly in an AWS Glue job, stored in Amazon Athena for quick ad‑hoc queries, and visualized via QuickSight dashboards.  
> 
> **Result:** Using MAPE, we identified a 12 % error baseline; after tuning the model (adding lag features & regularization), we reduced it to 4.3 %, saving ~\$1.2M annually in inventory costs. The metric became part of our quarterly KPI review, and I documented the process in a shared repo for future teams.  
> 
> **Learning:** Initially I used RMSE, which misled stakeholders because large outliers dominated the score. Switching to MAPE made the metric actionable—highlighting Amazon’s principle that *ownership* means owning not just code but also the business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
