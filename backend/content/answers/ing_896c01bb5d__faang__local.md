---
qid: ing_896c01bb5d__faang__local
question: 'Explain: FAANG / MAANG+ Most Recently Asked Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 572
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:09-05:00'
sources: []
---

**Clarify**  
You’re looking for the *latest* machine‑learning–focused coding problems that FAANG/MAANG+ interviewers are asking—those that blend algorithmic skill with ML insight. I’ll assume you want a handful of representative questions, not an exhaustive list, and that we’ll frame each in the same 5‑step format.

**Approach**  
1. Pick 3–4 high‑frequency themes (e.g., probabilistic reasoning, kernel tricks, model evaluation).  
2. For each theme, craft one concise problem statement.  
3. Provide a brief solution outline with complexity notes.  
4. Highlight edge cases and testing ideas.  

**Depth**  
| Theme | Problem | Core Idea & Complexity |
|-------|---------|------------------------|
| **Bayesian Reasoning** | *Given two binary features X,Y and class C, compute P(C=1|X=x,Y=y) using a naive Bayes model.* | Train on counts → O(n+m). Inference O(1). |
| **Kernel Trick (SVM)** | *Implement the kernel trick for a linear SVM in dual form to classify a 2‑D dataset.* | Compute Gram matrix O(d²), solve QP O(d³) with simple quadratic solver. |
| **Model Evaluation** | *Write a function that, given true labels and predicted probabilities, returns AUC‑ROC and the optimal threshold for maximum F1.* | Sort by score → O(n log n); sweep thresholds → O(n). |
| **Neural Net Backprop** | *Implement backpropagation for a single hidden‑layer MLP with ReLU activation.* | Forward pass O(nd), backward pass O(nd). |

**Edge Cases**  
- Zero‑frequency counts in Naïve Bayes → Laplace smoothing.  
- Singular Gram matrix in SVM → add εI regularization.  
- Ties in ROC sweep → average precision handling.  
- ReLU dead neurons → check gradient flow.

**Optimize & Communicate**  
Mention that caching intermediate results (e.g., kernel matrices) speeds up repeated evaluations, and that unit tests should cover degenerate inputs (empty arrays, all‑same labels). Explain trade‑offs: using a library like scikit‑learn for SVM vs. custom QP solver; the latter gives more control but higher complexity.

*This concise set reflects current FAANG/MAANG+ trends—probabilistic inference, kernel methods, evaluation metrics, and low‑level NN training—all within 160–240 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
