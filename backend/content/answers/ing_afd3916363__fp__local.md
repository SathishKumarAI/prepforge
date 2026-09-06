---
qid: ing_afd3916363__fp__local
question: How much data do you need to fine-tune a model? Quality vs. quantity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 481
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:26-05:00'
sources: []
---

### How much data is *enough* for fine‑tuning?

Fine‑tuning is a **distribution‑adaptation** problem: we start with a model \(f_{\theta}\) trained on a large source corpus \(\mathcal{D}_S\), and we wish to adapt its parameters \(\Delta\theta\) so that it performs well on a target distribution \(\mathcal{D}_T\).  
From statistical learning theory, the expected risk after fine‑tuning satisfies  

\[
R_T(f_{\theta+\Delta\theta}) \le R_S(f_{\theta}) + 
O\!\left(\sqrt{\frac{\text{VC}(\mathcal{H})}{N_T}}\right) ,
\]

where \(N_T = |\mathcal{D}_T|\) and \(\text{VC}(\mathcal{H})\) is the capacity of the fine‑tuned hypothesis class.  
Thus **sample complexity** grows inversely with the square root of the target data size: halving error requires roughly four times more samples.

However, *quality* modulates this bound. If \(\mathcal{D}_T\) contains noisy or biased labels, the empirical risk minimiser will converge to a sub‑optimal point regardless of \(N_T\). In practice, we treat **effective data size** as  

\[
N_{\text{eff}} = N_T \times (1-\epsilon),
\]

with \(\epsilon\) the label noise rate. Therefore, *high‑quality* labeled examples can replace many low‑quality ones.

#### Non‑obvious insight  
Fine‑tuning is **not merely a data‑scaling problem**; it is an *alignment* problem. When the target domain lies in a low‑dimensional manifold that the source already captures, even a handful of well‑chosen examples (e.g., those with high mutual information relative to the task) can steer the model effectively. This explains why active‑learning strategies often outperform passive data collection despite using far fewer labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
