---
qid: ing_6a522f99bb__faang__local
question: 'Explain: Machine Learning Interview Questions and Answers - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 553
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:18-05:00'
sources: []
---

## Clarify  
*What’s the goal?* We’re asked to **explain key ML interview questions** (e.g., bias‑variance, gradient descent, regularization) and give concise answers that a hiring manager can verify.  
*Assumptions:*  
- Interviewers expect both conceptual understanding and quick code snippets.  
- Time per question ≈ 2–3 min.  

## Approach  
1. **List core topics** (supervised vs unsupervised, evaluation metrics, overfitting).  
2. **For each topic, pick 2–3 canonical questions**.  
3. **Answer with:**
   - One‑sentence definition.  
   - Key equations or pseudocode.  
   - Practical intuition (e.g., “bias + variance = error”).  

## Depth  
| Question | Answer |
|----------|--------|
| *What is bias–variance tradeoff?* | Bias measures error from erroneous assumptions; variance measures sensitivity to training data. Optimal model minimizes total error = bias² + variance + noise. |
| *Explain gradient descent.* | Iteratively update parameters: `θ ← θ − α∇J(θ)`. Learning rate `α` controls step size; momentum or Adam can accelerate convergence. |
| *Why use L2 regularization?* | Adds penalty `λ‖θ‖²₂` to loss, shrinking weights, reducing variance and preventing overfitting. Equivalent to Bayesian prior ∼ N(0,1/λ). |
| *Difference between k‑means and hierarchical clustering.* | K‑means: fixed cluster count, iterative centroid update (O(nkd)). Hierarchical: builds dendrogram; agglomerative O(n²) but no need to predefine `k`. |

## Edge Cases  
- **Gradient descent** can diverge if α is too large or cost surface non‑convex. Test with synthetic quadratic loss.  
- **Regularization** may underfit when λ is huge; validate via cross‑validation.  
- **Clustering**: k‑means fails on elongated clusters; test with Gaussian mixtures.

## Optimize & Communicate  
- Use visual analogies (e.g., “bias = fish in a bowl, variance = waves”) to keep explanations memorable.  
- Highlight trade‑offs early (“We choose L2 over L1 when we want smooth shrinkage”).  
- End each answer with a quick sanity check question the interviewer might ask, showing preparedness for follow‑ups.

**Word count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
