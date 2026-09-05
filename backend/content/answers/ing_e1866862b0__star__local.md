---
qid: ing_e1866862b0__star__local
question: 'Explain: In actual fact, our--our real document is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 384
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:53-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I was tasked with building a fraud‑detection model for a fintech startup that had just migrated its legacy batch processing system to a real‑time streaming pipeline on AWS Kinesis.

**Task:**  
I needed to design, train, and deploy a supervised learning solution that could flag suspicious transactions within two seconds while keeping the false‑positive rate below 1.5 % so as not to annoy users.

**Action:**  
First I collected 12 months of labeled transaction data (≈2 M records) and performed feature engineering in Python using Pandas and scikit‑learn, creating engineered variables like “time‑since‑last‑transaction” and “merchant‑category variance.” I split the data with stratified K‑fold cross‑validation to preserve class imbalance. After experimenting with Random Forest, Gradient Boosting (XGBoost), and a shallow neural network, I selected XGBoost because it offered the best ROC‑AUC (0.982) and fast inference (<1 ms). I tuned hyperparameters via Bayesian optimization (Optuna) on an EC2 instance, reducing overfitting by adding L1 regularization. For deployment I wrapped the model in a Docker container, deployed it to AWS Lambda with API Gateway, and used Kinesis Data Analytics for real‑time score aggregation.

**Result:**  
The live system achieved a 0.97 % false‑positive rate and flagged 98.5 % of fraudulent transactions within two seconds, improving customer trust by 12 % as measured by post‑deployment NPS surveys. I learned that balancing model accuracy with latency constraints often requires iterative profiling and that productionizing ML demands close collaboration between data scientists, DevOps, and product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
