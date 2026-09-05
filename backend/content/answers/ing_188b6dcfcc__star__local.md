---
qid: ing_188b6dcfcc__star__local
question: 'Explain: Aug. 26, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 374
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:57-05:00'
sources: []
---

**Situation**  
During the first quarter of 2026, my team at a fintech startup was struggling with churn prediction for our premium subscription service. Our existing rule‑based model had a 68 % accuracy, and we were losing roughly $2M in potential revenue each month because we couldn’t target high‑risk customers early enough.

**Task**  
I was tasked to build a machine‑learning pipeline that would improve churn prediction by at least 10 percentage points while keeping the inference latency below 50 ms for real‑time email triggers.

**Action**  
First, I gathered all behavioral logs from the last two years and used Apache Spark to clean and engineer features like session frequency, feature usage depth, and payment irregularities. Next, I trained a gradient‑boosted tree model (XGBoost) on a 70/30 train/test split, tuning hyperparameters with Optuna to balance AUC and latency. For deployment, I converted the model to ONNX and wrapped it in a FastAPI service behind an NGINX reverse proxy, ensuring that each inference took ~35 ms. Finally, I set up a CI/CD pipeline with GitHub Actions that automatically retrained the model every month on new data.

**Result**  
The new model achieved a 79 % accuracy (AUC 0.84) and reduced churn by 12 %, translating to an estimated $2.4M in incremental revenue per year. I also learned how to balance predictive performance with real‑time constraints, and the importance of automating retraining cycles to keep models fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
