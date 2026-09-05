---
qid: ing_fd2c348896__star__local
question: 'Explain: more branches will be pruned and the — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 327
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:02-05:00'
sources: []
---

**Situation**  
At my previous startup we were building a recommendation engine for an e‑commerce platform. The production model was a gradient‑boosted tree that kept growing deeper during training, which caused inference latency to spike from 15 ms to over 120 ms per request.

**Task**  
I needed to reduce the model’s size and latency without sacrificing more than 1% of its top‑k recommendation accuracy so we could deploy it on our edge servers.

**Action**  
First, I profiled the tree and identified that roughly 70% of the leaves were rarely visited (branch usage <0.5%). Using XGBoost’s `prune` API, I set a minimum leaf weight threshold based on the validation loss curve. Then I applied post‑hoc pruning: any node whose split gain was below the 95th percentile of gains across all trees got collapsed into its parent. Finally, I retrained with a lower max depth and introduced early stopping to prevent overfitting.

**Result**  
The pruned model dropped from 48 GB to 9 GB, cutting inference time to 18 ms (an 85% speed‑up). Accuracy on the test set fell by only 0.7%, keeping top‑k precision above 92%. I learned that aggressive pruning guided by actual usage statistics can dramatically improve latency while preserving predictive power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
