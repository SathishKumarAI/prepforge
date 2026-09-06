---
qid: ing_8978f28b80__fp__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 449
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:36-05:00'
sources: []
---

**From the ground up**

A machine‑learning system is an *information‑processing engine*.  
Before fine‑tuning we must quantify how well it transforms input data into useful output—its **generalization error**.  
The most principled way to do that is to split a held‑out dataset \(D_{\text{val}}\) into disjoint subsets (e.g., via cross‑validation).  
For each fold, compute the loss function \(\mathcal{L}\) (cross‑entropy for classification, MSE for regression), and aggregate:

\[
E_{\text{pre}}=\frac{1}{K}\sum_{k=1}^{K} \frac{1}{|D_k|}\sum_{(x,y)\in D_k}\mathcal{L}(f_\theta(x),y)
\]

This estimate is unbiased for the true generalization error under i.i.d. assumptions and reflects how much *information* the model has captured from the training data.

**After fine‑tuning**, we repeat exactly the same evaluation pipeline on a fresh validation set \(D'_{\text{val}}\) (different from any used during adaptation).  
The difference

\[
\Delta E = E_{\text{pre}} - E_{\text{post}}
\]

is the *effective learning* gained. If \(\Delta E>0\), fine‑tuning has reduced uncertainty; if not, it may have overfitted or misaligned with the target distribution.

**Non‑obvious insight:**  
Because the loss landscape is non‑convex, two models can share identical \(E_{\text{pre}}\) yet diverge drastically in *inference speed* and *parameter efficiency*. Thus, alongside error metrics, monitor *effective dimensionality* (e.g., via Fisher information or Hessian spectrum). A model that reduces error while keeping the curvature shallow is likely to generalize better than one that merely squeezes a local minimum. This geometric lens often reveals why some fine‑tuned models perform worse on out‑of‑distribution data despite lower validation loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
