---
qid: ing_4bc5fadb7e__faang__local
question: 'Explain: Explain Confusion Matrix. — Machine Learning Interview Questions
  and Answers - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 668
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:35-05:00'
sources: []
---

**Clarify**  
> *“Explain the confusion matrix.”*  
We’re asked to describe what a confusion matrix is, how it’s built for classification tasks, and why it matters. I’ll assume binary classification first, then note extension to multi‑class.

---

### 1️⃣ Clarify
- **Goal:** Evaluate classifier performance beyond overall accuracy.  
- **Assumptions to confirm:**  
  - Binary or multiclass?  
  - What metrics are needed (precision, recall, F1)?  
  - Is the data balanced?

### 2️⃣ Approach
1. Define the four entries: True Positive (TP), False Positive (FP), True Negative (TN), False Negative (FN).  
2. Show how to compute accuracy, precision, recall, specificity, and F1 from these counts.  
3. Illustrate a table/diagram.  
4. Mention extension to k‑class by a k×k matrix.

### 3️⃣ Depth
| Cell | Meaning | Formula |
|------|---------|---------|
| **TP** | Predicted positive & actually positive | Count of correct “yes” predictions |
| **FP** | Predicted positive but actually negative | Incorrect “yes” |
| **TN** | Predicted negative & actually negative | Correct “no” |
| **FN** | Predicted negative but actually positive | Missed “yes” |

From the matrix:
- **Accuracy** = (TP+TN)/(TP+FP+TN+FN)  
- **Precision** = TP/(TP+FP) – “how many predicted positives are correct.”  
- **Recall / Sensitivity** = TP/(TP+FN) – “how many actual positives did we capture.”  
- **Specificity** = TN/(TN+FP) – “how well negatives were identified.”  
- **F1‑score** = 2·(Precision·Recall)/(Precision+Recall).

**Multi‑class**: each row = predicted class, each column = true class. Diagonal entries are correct predictions; off‑diagonals are misclassifications.

### 4️⃣ Edge Cases
- **Imbalanced data:** Accuracy can be misleading; rely on precision/recall or ROC curves.  
- **Zero division:** If TP+FP=0 (no positives predicted), precision is undefined—handle gracefully.  
- **Multi‑label problems:** Need a separate matrix per label or use Hamming loss.

### 5️⃣ Optimize & Communicate
- *Why it matters:* It exposes bias (e.g., high FP but low FN) that accuracy hides.  
- *Use cases:* Medical diagnosis (high recall desired), spam filtering (balance precision/recall).  
- *Communication tip:* Show the matrix visually, then walk through each metric’s intuition before presenting numbers.

> **TL;DR:** A confusion matrix is a 2×2 (or k×k) table that tabulates TP, FP, TN, FN counts. From it we derive accuracy, precision, recall, specificity, and F1—metrics that reveal how well a classifier distinguishes positives from negatives, especially in imbalanced settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
