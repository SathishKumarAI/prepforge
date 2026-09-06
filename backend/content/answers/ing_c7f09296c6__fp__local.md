---
qid: ing_c7f09296c6__fp__local
question: 'Explain: Example — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 734
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:31-05:00'
sources: []
---

**Limit of RLVR (Regularized Linear Value‑Regression)**  

RLVR tackles the classic *value‑iteration* problem in reinforcement learning by approximating the optimal value function \(V^\*\) with a linear parametric form  
\[
\hat V_\theta(s)=\phi(s)^{\top}\theta ,
\]
where \(\phi(s)\in\mathbb R^d\) are state features.  The algorithm solves, for each iteration \(t\), the regularized least‑squares problem  

\[
\theta_{t+1}
=\arg\min_{\theta}\;
\Bigl\|\Phi^\top\theta-\bigl(r+\gamma \hat V_{\theta_t}(S')\bigr)\Bigr\|_2^2
+\lambda\|\theta\|_2^2 ,
\]
with \(\Phi\) the feature matrix of sampled transitions, \(r\) rewards, and \(\lambda>0\) a ridge term.  

The *limit* of RLVR is obtained by letting the number of iterations tend to infinity while keeping the data distribution fixed.  Algebraically, the recursion converges to the unique solution of the *regularized Bellman equation*  

\[
\theta^\star
=\bigl(\Phi^\top\Phi+\lambda I\bigr)^{-1}\,\Phi^\top\!\Bigl(r+\gamma\,\Phi\theta^\star\Bigr).
\]

This is a linear fixed‑point of the operator \(T_\lambda:\theta\mapsto(\Phi^\top\Phi+\lambda I)^{-1}\Phi^\top(r+\gamma\Phi\theta)\).  Because \(T_\lambda\) is a contraction in \(\ell_2\)-norm (the spectral radius of \(\gamma(\Phi^\top\Phi+\lambda I)^{-1}\Phi^\top\Phi\) is strictly below one), Banach’s fixed‑point theorem guarantees convergence to the unique \(\theta^\star\).  

**Non‑obvious insight.**  
The regularization does more than just stabilize inversion; it *shifts* the target value function toward a smoother manifold defined by the feature space.  In high‑dimensional or collinear settings, RLVR’s limit corresponds to projecting the true Bellman operator onto the span of \(\phi\) under an inner product weighted by \((\Phi^\top\Phi+\lambda I)\).  Thus, even if the features cannot represent \(V^\*\) exactly, RLVR converges to the *best* approximation in a geometry that balances empirical fit (the data term) and prior smoothness (the regularizer).  This geometric perspective explains why increasing \(\lambda\) can paradoxically improve generalization: it moves the limit toward a subspace with lower effective dimension, reducing variance without unduly inflating bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
