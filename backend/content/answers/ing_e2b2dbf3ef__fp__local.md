---
qid: ing_e2b2dbf3ef__fp__local
question: 'Explain: ML Fundamentals & Theory Questions (2025-2026)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 444
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:01:46-05:00'
sources: []
---

**Why “ML fundamentals” are really *statistical decision theory***  
At its core a learning algorithm chooses a function \(f\) from a hypothesis class \(\mathcal H\) so that the expected loss
\[
R(f)=\mathbb E_{(X,Y)\sim P}\!\bigl[\ell(f(X),Y)\bigr]
\]
is minimal.  The data we see are only a finite sample \(S=\{(x_i,y_i)\}_{i=1}^n\).  
Thus we replace the unknown expectation with an empirical counterpart
\[
\hat R_S(f)=\frac1n\sum_{i}\ell(f(x_i),y_i).
\]
The *bias–variance trade‑off* emerges because any \(f\) that fits \(S\) too closely (low bias, high variance) will generalise poorly; the opposite gives a stable but possibly under‑fit model.  This tension is quantified by the **PAC‑Bayes** bound:
\[
R(f)\le \hat R_S(f)+\sqrt{\frac{KL(\rho||P)}{2n}}+\sqrt{\frac{\log(1/\delta)}{2n}},
\]
where \(KL\) captures model complexity.  

**Non‑obvious insight:**  
Most practitioners tune hyperparameters by cross‑validation, implicitly assuming the training–test split is representative.  Yet the bound shows that *the true cost of overfitting is not just a variance term but an information penalty*—a KL divergence between prior belief and posterior hypothesis distribution.  In practice this means that regularisation (L1/L2, dropout) can be viewed as imposing a prior; its strength should be set to control the *information gain* from data rather than merely penalising weights.  

Thus ML is fundamentally about balancing empirical fit against the information‑theoretic cost of deviating from our prior knowledge—an insight that underlies modern Bayesian deep learning, active learning, and curriculum design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
