---
qid: ing_f767f7aa92__star__local
question: 'Explain: What data crosses the boundaries. — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 320
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:31-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a churn prediction model for a telecom client. The dataset included monthly usage logs, billing information, and a customer satisfaction score that had been calculated at the end of each quarter.

**Task:**  
I needed to train a robust model while ensuring no leakage from future data into the training set so the predictions would generalize to new customers.

**Action:**  
During feature engineering I discovered that the quarterly satisfaction score was computed using the entire quarter’s usage, including days after the churn date. To prevent this “cross‑boundary” leak, I rewrote the pipeline: for each customer I sliced the data up to their churn or last active day, then recalculated a rolling satisfaction metric based only on past periods. I also added a time‑based cross‑validation scheme that respected month boundaries and used LightGBM with early stopping.

**Result:**  
The adjusted model dropped its AUC from 0.82 (leaked version) to 0.77, but more importantly it produced stable predictions in production, improving retention campaigns by 12% over three months. I learned the critical importance of respecting temporal boundaries and rigorously testing for leakage before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
