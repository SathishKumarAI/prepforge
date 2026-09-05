---
qid: ing_070b1695fb__star__local
question: 'Explain: Retirement Fund — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 392
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:11-05:00'
sources: []
---

**Situation:**  
At my previous firm we were launching a new “Retirement Fund” product aimed at millennials. The data science team had only two weeks before the go‑live to build a model that could predict which users would likely enroll and how much they’d contribute, so the marketing budget could be allocated efficiently.

**Task:**  
I was tasked with creating an enrollment probability score and a contribution size estimator using the limited user cohort (≈15 k profiles) while ensuring the model stayed under 50 ms inference latency for real‑time personalization on the web app.

**Action:**  
First, I performed feature engineering in Python: engineered tenure, income brackets, past engagement flags, and used one‑hot encoding for device type. To handle class imbalance (only ~12% enroll), I applied SMOTE followed by a LightGBM pipeline that natively supports categorical features and offers GPU acceleration. I tuned hyperparameters via Bayesian optimization with Optuna, constrained to keep the model size <10 MB. For latency, I exported the trained model to ONNX and deployed it in FastAPI, achieving 30 ms per inference on our edge servers. Finally, I built a dashboard in Tableau that visualized enrollment probability heatmaps for each demographic slice.

**Result:**  
The model achieved an AUC‑ROC of 0.87 and correctly identified 95% of high‑value prospects. Post‑launch, marketing spend was reallocated by 18%, boosting new enrollments by 22% in the first quarter and increasing projected fund inflows from $3.2 M to $3.9 M. I learned that balancing predictive performance with operational constraints (latency, model size) is critical for production ML, and that close collaboration with product and ops teams accelerates deployment success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
