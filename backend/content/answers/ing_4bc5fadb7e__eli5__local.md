---
qid: ing_4bc5fadb7e__eli5__local
question: 'Explain: Explain Confusion Matrix. — Machine Learning Interview Questions
  and Answers - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 269
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:37:03-05:00'
sources: []
---

Imagine a school’s attendance sheet where every student is marked “Present” or “Absent.” The teacher wants to see how well the sheet reflects reality.  
A **confusion matrix** does exactly that for a computer that classifies things (e.g., spam vs. not‑spam). It’s a 2×2 table:

|               | Predicted Spam | Predicted Not‑Spam |
|---------------|----------------|--------------------|
| **Actual Spam**      | True Positive (TP) | False Negative (FN) |
| **Actual Not‑Spam**  | False Positive (FP) | True Negative (TN) |

- **True Positive (TP)**: correctly called spam.  
- **False Negative (FN)**: missed spam, labeled not‑spam.  
- **False Positive (FP)**: wrongly flagged non‑spam as spam.  
- **True Negative (TN)**: correctly identified non‑spam.

By looking at the four numbers you can compute accuracy, precision, recall, etc., just like checking how many times the attendance sheet was right or wrong. It turns a black‑and‑white decision into a clear picture of strengths and mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
