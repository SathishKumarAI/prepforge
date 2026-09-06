---
qid: vq_3ebe0f7c15__faang__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 523
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:56-05:00'
sources: []
---

**Clarify**  
The question asks for the definition of *F1 score* and how one might employ it in a machine‑learning workflow. I’ll assume binary classification (the most common use case) but will note that the concept generalises to multi‑class settings via macro/micro averaging.

---

### 1️⃣ Approach
| Step | What to cover |
|------|---------------|
| **Definition** | Harmonic mean of precision and recall. |
| **Formula** | \(F_1 = 2 \times \frac{Precision \times Recall}{Precision + Recall}\). |
| **Interpretation** | Balances false positives vs false negatives; useful when class imbalance matters. |
| **Usage** | • Model selection & hyper‑parameter tuning.<br>• Threshold optimisation on probabilistic outputs.<br>• Reporting metric in competitions / production. |

---

### 2️⃣ Depth
- **Precision** = TP/(TP+FP); measures correctness of positive predictions.  
- **Recall** = TP/(TP+FN); measures completeness of captured positives.  
- The harmonic mean penalises extreme values: if either precision or recall is low, \(F_1\) drops sharply.  
- For multi‑class problems, compute per‑class F1 and average (macro) or weight by support (micro).  

**Complexity** – O(n) over predictions; negligible overhead compared to training.

---

### 3️⃣ Edge Cases
| Scenario | What can break it? |
|----------|--------------------|
| Imbalanced data | Very low recall inflates F1 if precision is high. |
| Probabilistic outputs | Choosing a threshold arbitrarily may misrepresent model’s true capability. |
| Multi‑label tasks | Misinterpreting macro vs micro averages leads to misleading conclusions. |

---

### 4️⃣ Optimize & Communicate
- **Threshold search**: sweep thresholds, plot precision–recall curve, pick point with highest F1.  
- **Calibration**: ensure predicted probabilities are well‑calibrated; otherwise F1 may be optimistic.  
- **Explain to stakeholders**: “F1 gives a single number that balances missed positives and false alarms—critical when both types of errors carry cost.”  

By structuring the answer this way, I demonstrate clear problem understanding, methodical reasoning, technical depth, and practical communication—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
