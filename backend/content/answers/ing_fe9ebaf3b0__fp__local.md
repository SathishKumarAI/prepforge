---
qid: ing_fe9ebaf3b0__fp__local
question: 'Explain: See More Than Once – KSAC for Semantic Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 466
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:14-05:00'
sources: []
---

**KSAC (Kernel‑Space Attention with “See‑More‑Than‑Once”)**  
Semantic segmentation must assign a class to every pixel while respecting spatial context. Traditional CNNs aggregate information only along the feed‑forward path; once a feature is produced, it can be lost if the network never revisits that region. KSAC formalises *re‑attention* as an optimisation over a kernel space:  

1. **Problem** – minimise the expected loss  
   \[
   \mathcal{L}=\mathbb{E}_{x}\Bigl[\sum_{p\in x}\ell(f_{\theta}(p),y_p)\Bigr]
   \]  
   where \(f_{\theta}\) is a convolutional feature extractor and \(y_p\) the ground‑truth label.  

2. **Re‑attention kernel** – introduce a learnable attention map \(A(p,q)\) that re‑weights features from neighbouring pixel \(q\) for pixel \(p\).  
   \[
   f_{\theta}^{*}(p)=\sum_{q} A(p,q)\,f_{\theta}(q)
   \]  

3. **Constraint** – enforce *symmetry* and *normalisation*: \(\sum_q A(p,q)=1,\;A(p,q)=A(q,p)\).  
   This guarantees that the attention behaves like a Markov transition matrix, preserving total information while allowing multiple passes over the same region.

4. **Optimization insight** – the update rule becomes a gradient descent on the entropy of \(A\), ensuring that pixels repeatedly *see* each other until uncertainty drops below a threshold—hence “See More Than Once.”  

5. **Non‑obvious payoff** – because \(A\) is learned jointly with feature weights, KSAC implicitly learns *where* and *how many times* to revisit a pixel, yielding sharper boundaries without extra inference cost.

Thus KSAC turns the intuition of human revisiting ambiguous regions into a principled, trainable kernel that improves semantic segmentation accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
