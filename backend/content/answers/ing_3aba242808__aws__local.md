---
qid: ing_3aba242808__aws__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 420
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:13-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked with improving the credit‑risk model that used dozens of correlated predictors (income, debt ratio, transaction history). The existing Lasso model suffered from over‑fitting and failed to share information across related customer segments (e.g., retail vs. small business). I needed a solution that would reduce variance while retaining interpretability.

**Action & Technical Design**  
I introduced **Multi‑Task Lasso** (`sklearn.linear_model.MultiTaskLasso`) so each segment became a “task” sharing a common sparsity pattern. In AWS, the data pipeline lived on **Amazon S3** (raw logs) → **AWS Glue** for ETL → **Amazon SageMaker Processing Jobs** to train the model with 100 000 rows per task in under 10 min. The trained `MultiTaskLasso` was serialized into a **SageMaker Endpoint** behind an **Application Load Balancer**, ensuring 99.9% availability and sub‑200 ms latency.

Key trade‑offs:  
- *Scalability*: Parallel SageMaker instances handled more segments without code changes.  
- *Cost*: Spot instances cut training spend by 35 %.  
- *Availability*: Multi‑AZ deployment protected against AZ failures.

**Result**  
The new model reduced the mean absolute error from **$1,200 to $870** on hold‑out data (a 27 % improvement), translating to a projected $4.5 M annual savings in bad‑debt provisioning. I documented the pipeline and shared lessons—particularly the importance of aligning feature engineering with business objectives—so that downstream teams could iterate quickly.

---

*Leadership Principles*: **Ownership** – I took end‑to‑end responsibility; **Dive Deep** – I dissected sparsity patterns, hyperparameters, and AWS cost metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
