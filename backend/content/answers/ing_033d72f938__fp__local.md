---
qid: ing_033d72f938__fp__local
question: 'Explain: SLM Distillation — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 602
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:57-05:00'
sources: []
---

**SLM Distillation & Reranking – from first principles**

The *Sequence‑Level Matching* (SLM) objective trains a student model to imitate the teacher’s joint probability \(P_{\text{T}}(y|x)\).  
Because SLM is evaluated on whole sequences, its loss
\[
L_{\text{SLM}}=-\sum_{t}\log P_{\text{S}}(y_t|x,y_{<t})
\]
does not expose the teacher’s confidence distribution over *candidate* outputs.  
Hence we need a **reranking** step: generate \(K\) hypotheses \(\{y^{(k)}\}_{k=1}^K\) with the student, then select the best according to an auxiliary score.

### Why rerank?

* **Implicit exploration–exploitation trade‑off.**  
  The student may collapse to a single mode; by re‑evaluating each candidate with a *teacher‑aware* metric we recover diversity.
* **Calibration of probabilities.**  
  The teacher’s logits encode fine‑grained uncertainty; the student’s softened softmax is often overconfident.

### Core reranking strategies

| Strategy | Formula | Rationale |
|----------|---------|-----------|
| **Teacher logit sum** | \(\displaystyle s_{\text{T}}(y)=\sum_{t}\log P_{\text{T}}(y_t|x,y_{<t})\) | Directly rewards sequences that the teacher assigns high probability. |
| **KL‑weighted hybrid** | \(\displaystyle s(y)=\alpha\,s_{\text{T}}(y)+(1-\alpha)\,\sum_{t}\log P_{\text{S}}(y_t|x,y_{<t})\) | Balances fidelity to teacher and student confidence. |
| **Temperature‑scaled entropy** | \(\displaystyle s(y)= -\frac{1}{T}\sum_{t} H(P_{\text{T}}(\cdot|x,y_{<t}))\) | Penalizes low‑entropy (overconfident) teacher predictions, encouraging diversity. |

### Non‑obvious insight

Most practitioners treat the reranker as a black box, but **the reranking objective itself is an implicit regularizer** on the student’s latent space.  
By weighting candidates according to teacher logits, we force the student to preserve *relative* ordering of outputs—a stricter constraint than matching marginal probabilities. Consequently, even with a shallow student, performance can match or exceed that of the teacher on downstream tasks, because the reranker corrects systematic biases introduced during distillation.

---

In short, SLM distillation learns a compact model; reranking injects teacher‑level knowledge back into inference, ensuring both fidelity and diversity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
