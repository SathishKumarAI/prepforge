---
qid: ing_23d003327d__faang__local
question: Walk me through train/validation/test splits. When do you use cross-validation,
  and when is it a bad idea?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 450
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:29-05:00'
sources: []
---

**Clarify**  
We’re discussing how to partition data for training an ML model: *train*, *validation*, *test*.  
Key assumptions:  
1. The dataset is representative of the target distribution.  
2. No leakage between splits (e.g., time‑ordered data).  
3. We want unbiased estimates of generalization performance.

**Approach**  
1. Split the full dataset into a large **train set** and a small **hold‑out test set** (e.g., 80/20).  
2. Within the train set, carve out a **validation set** (10–15% of total) for hyper‑parameter tuning.  
3. Use *k‑fold cross‑validation* only on the training portion when data is scarce or the model has many tunable parameters.

**Depth**  
- **Train**: learns weights; may overfit if too large.  
- **Validation**: monitors performance, informs early stopping and hyper‑parameter search.  
- **Test**: provides an unbiased estimate of real‑world error; used only once after final model selection.  

*Cross‑validation* (k‑fold or leave‑one‑out) gives a more stable estimate when the dataset is small (< 5k samples) or highly imbalanced. Complexity ≈ O(k·N) where N = training size.  
**When it’s bad**:  
- **Large datasets** – CV adds unnecessary compute; a single split suffices.  
- **Time‑series or streaming data** – must preserve order; naive CV would leak future information.

**Edge cases**  
- Highly imbalanced classes → stratified folds.  
- Small test set → risk of high variance in error estimate; consider bootstrapping.  

**Optimize & communicate**  
Explain trade‑offs: more folds → lower bias, higher variance and compute cost. Show a simple diagram of the split hierarchy. Conclude with best practice: “Use a single train/validation/test split for big data; reserve k‑fold CV for low‑sample or high‑variance scenarios.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
