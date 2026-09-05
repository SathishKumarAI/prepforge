---
qid: vq_152fbfa61e__star__local
question: Q16- How is a decision tree pruned?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:08-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I built an XGBoost model for a credit‑card fraud dataset. The raw trees were over‑fitting: training accuracy hit 99 % but the test set only 82 %.  

**Task:**  
I had to prune the trees so that the model generalized better without sacrificing too much predictive power, all within the project’s two‑week deadline.

**Action:**  
First I inspected the depth and leaf statistics using XGBoost’s `get_dump()`; many branches were deeper than 12 levels with fewer than 5 samples each. I enabled early stopping by setting `early_stopping_rounds=10` on a held‑out validation set, which stopped boosting after only 120 rounds instead of the default 1000. Next, I turned on **tree‑method ‘hist’** for faster histogram binning and applied **max_depth=6** and **min_child_weight=5** to constrain growth. Finally, I used post‑pruning by extracting each tree’s structure with `xgb.plot_tree()` and manually removed leaf nodes whose Gini impurity improvement was below 0.001, recalculating the model after each prune.

**Result:**  
The pruned ensemble achieved a test AUC of 0.91 (up from 0.88) while reducing total tree depth by ~40 % and cutting inference time per prediction from 12 ms to 7 ms. I learned that combining early stopping, hyperparameter limits, and manual leaf pruning can dramatically improve both performance and efficiency in real‑world ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
