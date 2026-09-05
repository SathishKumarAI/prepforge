---
qid: ing_872a3688e0__star__local
question: 'Explain: Simplicity — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:49-05:00'
sources: []
---

**Situation:**  
At my previous company, the data science team was tasked with building a churn prediction model for our SaaS product. The deadline was tight—only six weeks before the next quarterly sales push—and stakeholders demanded a solution that could be deployed by the marketing team without deep technical knowledge.

**Task:**  
I had to design an end‑to‑end pipeline that balanced predictive accuracy with operational simplicity, ensuring it could run on a single server and be interpreted by non‑technical users.

**Action:**  
I chose a LightGBM model because of its fast training time and native handling of categorical variables. I performed feature engineering in Python using pandas, but limited the number to the top ten most correlated features to avoid overfitting. For deployment, I wrapped the model in an Azure Functions endpoint with a minimal REST API that returned only a churn risk score and an explanatory SHAP summary. To keep the system maintainable, I containerized the entire stack with Docker and documented the workflow in Markdown so any engineer could rebuild it.

**Result:**  
The model achieved 82 % AUC on the hold‑out set—better than the previous rule‑based approach—and the marketing team was able to launch a targeted retention campaign within three days of deployment. The simplicity of the pipeline reduced runtime from 45 minutes to under five, and I learned that in ML careers, delivering clean, interpretable solutions often yields higher business impact than chasing marginal accuracy gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
