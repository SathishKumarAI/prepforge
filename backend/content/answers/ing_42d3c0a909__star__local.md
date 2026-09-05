---
qid: ing_42d3c0a909__star__local
question: Explain the bias-variance tradeoff. How do you tell which one is hurting
  your model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 311
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:19-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection project for an e‑commerce platform, our initial logistic regression model was achieving only 78 % precision and 85 % recall. The business required at least 90 % recall to reduce missed fraudulent transactions.

**Task:**  
I needed to identify whether the low performance stemmed from high bias (underfitting) or high variance (over‑fitting) and then adjust the model accordingly.

**Action:**  
First, I plotted learning curves for training vs. validation accuracy while varying training set size. The gap between the two curves stayed large even as data grew, indicating high bias. Next, I evaluated cross‑validation error across a grid of regularization strengths (C values) and observed that decreasing C improved validation performance up to a point but then caused overfitting, evidenced by a sharp rise in training accuracy without corresponding validation gains. I switched from logistic regression to an XGBoost ensemble, tuned the depth and number of trees, and used early stopping based on validation AUC to curb variance.

**Result:**  
Recall rose from 85 % to 92 %, precision improved to 81 %, and overall F1‑score increased by 7 points. The exercise taught me that learning curves reveal bias, while cross‑validation error patterns expose variance; tuning model complexity with validation feedback is key to balancing the tradeoff.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
