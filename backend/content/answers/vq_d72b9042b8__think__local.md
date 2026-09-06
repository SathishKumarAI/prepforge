---
qid: vq_d72b9042b8__think__local
question: What is the ROC Curve, and how do you make one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 467
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:27:55-05:00'
sources: []
---

**1. Clarify & set assumptions**  
   - Assume the reader knows basic classification metrics (accuracy, precision).  
   - Define *ROC* as “Receiver Operating Characteristic” and *curve* as a plot of TPR vs FPR across thresholds.  
   - Decide whether to discuss binary only or mention multi‑class extension briefly.

**2. Choose a mental model**  
   - Think of the ROC curve as visualizing a decision rule that varies a threshold on predicted probabilities.  
   - Map each threshold → (TPR, FPR).  
   - The curve traces these points; its area (AUC) measures overall discriminative ability.

**3. Step‑by‑step reasoning**  
   1. **Collect predictions**: obtain probability scores from the model for each instance.  
   2. **Sort by score**: descending order gives all possible thresholds.  
   3. **Iterate thresholds**: for each unique score (or a grid), compute confusion matrix → TPR = TP/(TP+FN) and FPR = FP/(FP+TN).  
   4. **Plot points**: x‑axis = FPR, y‑axis = TPR; connect to form the ROC curve.  
   5. **Optional**: calculate AUC via trapezoidal rule or built‑in functions.

**4. Common traps**  
   - Mixing up *TPR* with *precision*.  
   - Forgetting to include the (0,0) and (1,1) corners.  
   - Using class labels instead of probability scores → only two points appear.  
   - Ignoring imbalance: ROC can be misleading if prevalence is extreme; consider PR curves.

**5. Sanity‑check & communicate**  
   - Verify that the curve starts at (0,0) and ends at (1,1).  
   - Ensure TPR never decreases as threshold lowers.  
   - When explaining, show a simple binary example with numbers so the reader can trace one point manually before plotting.  
   - Emphasize that a higher AUC means better separability; a diagonal line represents random guessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
