---
qid: ing_5c059a7107__faang__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 435
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:16-05:00'
sources: []
---

**Clarify**  
We’re given 10 M unlabeled instances and a labeling budget of $20 K (≈ 2 k labels per \$1). We need to maximize downstream model performance under this constraint.  
*Assumptions to confirm:*  
- Label cost is uniform across data points.  
- Labels are binary or multi‑class?  
- The task is supervised learning (classification/regression).  
- We can iteratively sample and label.

**Approach**  
1. **Bootstrap a weak model** with a small random seed set (~200–500 labels).  
2. **Active learning loop**:  
   - Train the model, compute uncertainty (entropy or margin) on the unlabeled pool.  
   - Select top‑K uncertain examples per iteration until budget exhausted.  
3. **Diversity enforcement**: cluster the selected batch and pick representative points to avoid redundancy.  
4. **Human verification & sanity checks** on a small subset of high‑confidence predictions to catch systemic errors.

**Depth**  
- *Complexity*: Each loop trains in \(O(N)\), but we sample only from the pool, so overall cost is dominated by labeling (\$20 K).  
- *Trade‑offs*: Random sampling yields higher coverage but lower efficiency; pure uncertainty may over‑focus on noisy regions. Combining both (e.g., uncertainty + diversity) balances exploration/exploitation.

**Edge Cases**  
- If the data distribution shifts, active learning may waste labels on outliers—test by holding out a validation split and monitoring performance drop.  
- Label noise: if annotators disagree, incorporate consensus or probabilistic labeling to mitigate bias.

**Optimize & Communicate**  
After labeling, retrain the final model and evaluate on a held‑out test set; report precision/recall improvements per \$1 spent. Highlight that this pipeline can be automated, reducing human effort while maximizing ROI—exactly what FAANG teams look for in scalable ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
