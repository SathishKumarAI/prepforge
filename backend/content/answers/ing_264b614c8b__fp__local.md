---
qid: ing_264b614c8b__fp__local
question: 'Explain: Classification/Extraction: ROC, PR, class distributions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 524
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:26:28-05:00'
sources: []
---

**Why ROC and PR curves matter**

When a classifier outputs a score \(s(x)\), we choose a threshold \(\tau\) to decide “positive”.  
The fundamental trade‑off is between *true positives* (TP) and *false positives* (FP).  
If we vary \(\tau\) from \(-\infty\) to \(+\infty\) we trace the **Receiver Operating Characteristic (ROC)**:  

\[
{\rm TPR}(\tau)=\frac{TP}{P},\qquad
{\rm FPR}(\tau)=\frac{FP}{N}
\]

where \(P,N\) are the actual positive/negative counts.  
The ROC is a geometric curve in \([0,1]^2\); its area (AUC‑ROC) equals the probability that a randomly chosen positive receives a higher score than a random negative. This follows from the definition of expectation and the *pairwise comparison* principle:  

\[
{\rm AUC} = P\bigl(s(x^+)>s(x^-)\bigr)
\]

Thus ROC directly measures ranking quality, independent of class priors.

**Precision‑Recall (PR)** focuses on the positive class only.  
Let \(p(\tau)=P\) be the *precision*:

\[
{\rm Precision}(\tau)=\frac{TP}{TP+FP}
\]

and recall is TPR above. PR curves are especially informative when positives are rare because FPR can stay near zero while precision still drops sharply—an effect that ROC masks.

**Class distributions**

The distribution of scores for each class, \(f_+(s)\) and \(f_-(s)\), determines both ROC and PR.  
If the two densities overlap minimally, a threshold exists with high TPR and low FPR; conversely, heavy overlap forces a trade‑off.  

**Non‑obvious insight**

The *area under the PR curve* is not invariant to class imbalance: it equals \(\frac{P}{P+N}\) times AUC‑ROC only when \(f_+\) and \(f_-\) are independent of priors. In practice, an algorithm that appears excellent on ROC can have a deceptively low PR area simply because the positive prior is tiny—a subtlety many overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
