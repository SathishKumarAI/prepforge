---
qid: ing_40a85b8df7__star__local
question: 'Explain: Now, if you look at the desktop — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:44-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a churn prediction model for a SaaS client whose retention rate had slipped from 85 % to 72 % over the past six months. The data set contained 120,000 rows and 35 features, but the team only had an old Python script that ran on a single CPU.

**Task**  
I needed to produce a model with at least 5 % improvement in F1 score while keeping inference time under 50 ms per record, so the solution could be deployed into their real‑time dashboard.

**Action**  
First I preprocessed the data with Pandas and used scikit‑learn’s `ColumnTransformer` to one‑hot encode categorical fields and impute missing values. For modeling I chose a LightGBM classifier because of its speed and built‑in handling of sparse matrices. I tuned hyperparameters via Optuna, running 200 trials on an AWS EC2 g4dn.xlarge GPU instance. To meet latency requirements, I exported the trained model to ONNX and benchmarked it with `onnxruntime`, confirming a 30 ms inference time per batch of 1,000 users.

**Result**  
The final model achieved an F1 score of 0.78—up from 0.71—and reduced churn by 3 % over the next quarter, bringing retention back to 75 %. I learned how to balance predictive performance with deployment constraints and the importance of profiling both training and inference pipelines early in the project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
