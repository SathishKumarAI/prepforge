---
qid: ing_6bf19c7983__star__local
question: 'Explain: Now, in this class we define all — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:09-05:00'
sources: []
---

**Situation**  
In my final capstone project I was tasked with predicting customer churn for a telecom client who had over 120,000 monthly records. Their current churn rate was 18%, and they needed a tool to identify high‑risk customers before the billing cycle.

**Task**  
Build a production‑ready model that could be deployed in their Python stack, achieve at least 80% precision on the positive class, and run within 30 seconds per batch.

**Action**  
I started by cleaning the raw CSV with Pandas, handling missing values via median imputation and encoding categorical fields using target‑encoded embeddings. I split the data (70/15/15) and trained a LightGBM classifier, tuning hyperparameters with Optuna for 10 k trials to maximize AUC while keeping inference fast. To satisfy latency constraints, I exported the model as ONNX and wrapped it in FastAPI; Dockerized the service so it could be pulled into their Kubernetes cluster. I also wrote unit tests with PyTest to ensure data drift detection.

**Result**  
The final model achieved 83% precision and 0.89 AUC on the hold‑out set, reducing predicted churn by 12% over a three‑month pilot. Deployment cut churn‑prediction latency from minutes to <30 s per batch, saving the client an estimated $250k annually in retention costs. I learned how to balance model accuracy with real‑world deployment constraints and the importance of end‑to‑end CI/CD for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
