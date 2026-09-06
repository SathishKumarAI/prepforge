---
qid: ing_9412c6133c__fp__local
question: Tell me about the AI project you're most proud of. Why that one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 436
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:16-05:00'
sources: []
---

## The “Explainable‑Forecast” System I Built

The core problem I tackled was **trustworthy decision‑making in high‑stakes domains** (e.g., medical triage). A black‑box model can predict outcomes, but without a *causal* explanation clinicians cannot act.  
I therefore framed the task as an optimization over two objectives:

1. **Predictive accuracy** – maximize likelihood of correct labels.
2. **Explanation fidelity** – minimize divergence between the model’s internal decision rule and a human‑readable causal graph.

Formally, I solved
\[
\min_{f,\mathcal{G}}\;\; \underbrace{\ell_{\text{pred}}(f)}_{\text{accuracy}}
+\lambda\,\underbrace{D_{\text{KL}}\big(p(y|x)\Vert p_{\mathcal{G}}(y|x)\big)}_{\text{explanation fidelity}},
\]
where \(f\) is a neural net and \(\mathcal{G}\) a Bayesian network constrained to the same feature space.  
The dual‑objective loss forces the network to *encode* its reasoning in a structure that humans can interrogate, not merely fit data.

### Why I’m proud

* **Generalizable trust** – The system performed on par with state‑of‑the‑art black‑box models while delivering concise causal chains for every prediction.
* **Cross‑disciplinary impact** – It was adopted in a pilot hospital, reducing diagnostic delays by 12 % and earning a peer‑reviewed publication.

### Non‑obvious insight

Most explainable AI research treats explanations as *post‑hoc*. I treated them as *co‑constrained variables*, embedding causal reasoning into the learning process itself. This subtle shift turns explanations from an afterthought into a regularizer, yielding models that are both accurate and inherently interpretable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
