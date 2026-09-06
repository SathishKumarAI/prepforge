---
qid: vq_152fbfa61e__faang__local
question: Q16- How is a decision tree pruned?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 489
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:01-05:00'
sources: []
---

**Q16 – How is a decision tree pruned?**

---

### 1️⃣ Clarify  
We’re pruning the *post‑hoc* growth of a decision tree to avoid overfitting.  
Assumptions:  
- The tree was built using standard criteria (Gini, entropy).  
- We have a validation or cross‑validation set for tuning.  

### 2️⃣ Approach  
1. **Grow fully** until every leaf is pure or reaches a minimum size.  
2. **Estimate error** of each subtree on held‑out data.  
3. **Prune bottom‑up**: replace a node’s subtree with a leaf if it reduces validation error (or keeps it within an ε‑margin).  

### 3️⃣ Depth – Core Mechanics  
- **Pre‑pruning** stops growth early using depth limits or minimum samples per split.  
- **Post‑pruning** (cost‑complexity pruning) computes for each node the *α* value:
  \[
  \alpha = \frac{R_{\text{subtree}} - R_{\text{leaf}}}{|T_{\text{subtree}}| - 1}
  \]
  where \(R\) is misclassification cost and \(|T|\) number of terminal nodes.  
- Sweep α from small to large, selecting the subtree with lowest cross‑validated error (often via a “one‑standard‑error” rule).  

**Complexity:**  
- Building: O(n log n).  
- Pruning sweep: O(m log m) where m = number of nodes.  

### 4️⃣ Edge Cases  
- Extremely small validation set → use k‑fold CV.  
- Unbalanced classes → adjust misclassification cost.  
- No improvement after pruning → keep the full tree (overfitting unlikely).  

### 5️⃣ Optimize & Communicate  
Explain that post‑pruning balances bias–variance tradeoff and is more robust than pre‑pruning. Highlight that modern libraries expose a `max_depth`, `min_samples_split`, and a `ccp_alpha` parameter (cost‑complexity pruning) to control this process automatically. Conclude with a quick demo of how to plot the pruning path and choose α via cross‑validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
