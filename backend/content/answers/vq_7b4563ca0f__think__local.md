---
qid: vq_7b4563ca0f__think__local
question: What is the definition of accuracy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 395
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:54:13-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “accuracy” refers to a statistical performance metric in classification tasks, not a generic quality term.  
   - Assume a binary or multiclass setting where predictions are compared against ground‑truth labels.

**2. Adopt the confusion‑matrix framework**  
   - Recall the standard 2×2 (or multi‑class) table: true positives (TP), false positives (FP), true negatives (TN), and false negatives (FN).  
   - Recognize that accuracy is derived directly from these counts.

**3. Step‑by‑step reasoning**  
   1. Count all correct predictions: \( \text{Correct} = TP + TN\).  
   2. Count total predictions: \( \text{Total} = TP + FP + TN + FN\).  
   3. Divide to obtain the proportion of correct predictions:  
      \[
      \text{Accuracy} = \frac{TP + TN}{TP + FP + TN + FN}.
      \]
   - Emphasize that this yields a value between 0 and 1 (or 0%–100%).

**4. Avoid common pitfalls**  
   - Don’t conflate accuracy with precision or recall; those involve different combinations of TP, FP, FN.  
   - Beware of imbalanced datasets where high accuracy can be misleading—accuracy alone may mask poor minority‑class performance.

**5. Sanity checks & verbalization**  
   - Verify that the formula yields 1 when all predictions are correct and 0 when none are.  
   - Explain to a peer: “Accuracy is simply the fraction of predictions that match the true labels; it’s the most intuitive but not always the most informative metric.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
