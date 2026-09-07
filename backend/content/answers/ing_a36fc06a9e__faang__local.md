---
qid: ing_a36fc06a9e__faang__local
question: 'Explain: Machine Learning Interview Questions and Answers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 536
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise “cheat‑sheet” of common ML interview questions, expecting you to demonstrate breadth (supervised vs unsupervised, evaluation metrics, model selection) and depth (algorithms, math, trade‑offs). Confirm whether they want coding examples or purely conceptual answers; assume the latter.

**Approach**  
1. Group questions by theme: fundamentals, algorithms, evaluation, deployment.  
2. For each, give a short answer + one‑sentence rationale.  
3. Highlight key formulas or intuition to show depth without overloading.  

**Depth (sample list)**  
| Theme | Question | Core Answer |
|-------|----------|-------------|
| **Fundamentals** | What is the bias–variance trade‑off? | Bias = error from erroneous assumptions; variance = sensitivity to training data. Reduce one usually increases the other—select model complexity accordingly. |
| **Algorithms** | Explain k‑NN vs. SVM. | k‑NN: lazy, instance‑based; simple but expensive at inference. SVM: learns a separating hyperplane maximizing margin; kernel trick allows non‑linear boundaries. |
| **Evaluation** | How do you choose between MAE and RMSE? | MAE is robust to outliers; RMSE penalizes large errors more heavily—use RMSE when large deviations are costly. |
| **Feature Engineering** | What’s dimensionality reduction? | Techniques like PCA or t‑SNE compress data while preserving variance or neighborhood structure, mitigating the “curse of dimensionality.” |
| **Deployment** | How to monitor a model in production? | Track metrics (accuracy drift, latency), log predictions, set alerts; retrain when performance degrades. |

**Edge Cases**  
- Imbalanced classes → use precision/recall, AUC‑ROC, or resampling.  
- Time series → ensure no leakage by splitting chronologically.  
- High cardinality categorical features → target encoding vs hashing.

**Optimize & Communicate**  
Explain that the list is not exhaustive; each answer can branch into deeper sub‑questions (e.g., kernel choice, regularization). Conclude with a quick sanity check: “If I were building an ML system today, I’d start with a baseline linear model, evaluate bias/variance, then iterate with more complex models while monitoring drift.” This showcases structured reasoning, clear communication, and depth—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
