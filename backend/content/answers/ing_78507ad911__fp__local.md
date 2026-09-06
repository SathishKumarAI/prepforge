---
qid: ing_78507ad911__fp__local
question: 'Batch norm vs layer norm: how does each work, and why do transformers use
  layer norm?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 743
total_tokens: 921
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:47-05:00'
sources: []
---

**Batch Normalization (BN)**  
*Problem:* During training the distribution of each feature drifts as earlier layers update, making gradient descent unstable.  
*Solution:* For every mini‑batch \(B=\{x^{(i)}\}_{i=1}^m\) and channel \(c\), BN estimates the mean \(\mu_c\) and variance \(\sigma_c^2\),
\[
\hat{x}^{(i)}_c = \frac{x^{(i)}_c-\mu_c}{\sqrt{\sigma_c^2+\varepsilon}},\qquad
y^{(i)}_c=\gamma_c\,\hat{x}^{(i)}_c+\beta_c .
\]
The learnable scale \(\gamma_c\) and shift \(\beta_c\) allow the network to recover any necessary distribution.  
*Why it works:* By forcing each channel to have zero mean and unit variance per batch, BN reduces *internal covariate shift*, effectively regularizing the optimisation landscape so that larger learning rates can be used. The estimation error of \(\mu_c,\sigma_c^2\) introduces noise that acts like a form of stochastic regularisation.

**Layer Normalization (LN)**  
*Problem:* In sequence models, each example may have a different length and we often train with very small or even batch‑size 1 due to memory constraints. BN would then be unreliable.  
*Solution:* LN normalises over all hidden units within a single example:
\[
\mu^{(i)}=\frac{1}{H}\sum_{h}x^{(i)}_h,\quad
\sigma^{2(i)}=\frac{1}{H}\sum_{h}(x^{(i)}_h-\mu^{(i)})^2,
\]
then applies the same affine transform as BN.  
*Why it works:* The normalisation is *batch‑size agnostic*, preserving the statistical properties of each token regardless of how many are processed in parallel. Moreover, because every hidden dimension is treated symmetrically, LN aligns with the self‑attention mechanism’s requirement that all positions share the same scaling.

**Why Transformers use LN**  
1. **Sequence length invariance:** Attention operates on tokens independently; LN’s per‑token statistics avoid coupling across a batch.  
2. **Parallel training:** Large models are trained with small effective batches; BN would introduce high variance in estimates, destabilising learning.  
3. **Residual connections:** LN’s zero‑mean property keeps residuals centered, which empirically improves gradient flow.

**Non‑obvious insight:**  
While BN reduces internal covariate shift by normalising *across* examples, it inadvertently injects *batch‑size dependent noise*. In contrast, LN removes this dependency entirely but at the cost of a stricter assumption: all hidden units should be treated identically. Transformers exploit this symmetry because self‑attention treats every token equivalently; any per‑token scaling mismatch would corrupt attention weights. Thus, LN’s mathematical independence from batch size is not just convenient—it is essential for the statistical consistency required by transformer architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
