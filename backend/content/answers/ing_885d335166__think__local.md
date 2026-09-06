---
qid: ing_885d335166__think__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 485
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:03:20-05:00'
sources: []
---

**1. Clarify the question & state assumptions**  
   - Identify that *L1* = \( \sum |w_i| \) and *L2* = \( \sum w_i^2 \).  
   - Assume we’re minimizing a convex loss + regularizer, e.g., linear regression or logistic regression.  
   - Note that “sparse weights” means many coefficients exactly zero.

**2. Choose the mental framework**  
   - Think geometrically: level sets of the regularizers intersect with the contours of the loss function.  
   - Or analytically: look at sub‑gradients and KKT conditions for optimality.

**3. Step‑by‑step reasoning**  
   - Draw L1 unit ball (a diamond) vs. L2 ball (circle).  
   - The loss’s gradient points toward the optimum; it will hit the corner of the L1 ball first, forcing some coordinates to zero.  
   - In analytic terms: sub‑gradient of |w| is ±1 except at 0 where any value in [−1, 1] works—this allows a solution with w=0 while still satisfying optimality.  
   - For L2, the gradient ∂(w²)/∂w = 2w never vanishes unless w=0; but the circular contour forces a smooth trade‑off, rarely hitting exact zeros.

**4. Common traps to avoid**  
   - Don’t conflate “small” with “exactly zero”; L2 shrinks weights but doesn’t set them to zero.  
   - Avoid thinking only about magnitude: the shape of the penalty matters.  
   - Remember that sparsity is a *property* of the solution, not just the regularizer.

**5. Sanity‑check & verbalize**  
   - Verify by solving a toy 2D example; you’ll see L1’s optimum sits on an axis (zero coordinate).  
   - Explain: “Because the L1 penalty has sharp corners, the optimization naturally aligns with axes, yielding many zero weights.”  
   - Summarize that L2’s smoothness distributes shrinkage across all coefficients, preserving non‑zero values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
