---
qid: ing_bb44a3491f__fp__local
question: 'Explain: F4: Cost overrun from accidental full-runs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 434
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:51-05:00'
sources: []
---

**Why accidental full‑runs inflate costs**

When a model is trained, the *compute budget* \(C\) is allocated as a function of epochs \(E\), batch size \(B\), and hardware cost per hour \(\alpha\):
\[
C = \alpha \times \frac{E \times N}{B} ,
\]
where \(N\) is dataset size.  
In practice, experimenters rarely know the *true* optimal stopping point \(E^*\).  A premature stop saves resources, but an *accidental full‑run* (running to the maximum epoch limit or until convergence even when early‑stopping criteria would have sufficed) multiplies cost by \(\frac{E}{E^*}\).

This phenomenon is a direct consequence of **information asymmetry**: the training process reveals only incremental performance gains, while the *utility function* for researchers—rapid iteration and hyperparameter search—drives them to over‑train.  From an optimization viewpoint, each extra epoch yields diminishing returns \(f'(E) \downarrow\), yet the marginal compute cost remains constant.  The expected surplus \(S = \sum_{e=1}^{E} f(e)\) saturates, while the total spend keeps growing linearly with \(E\).

**Non‑obvious insight:**  
The real culprit is *probabilistic drift in early‑stopping thresholds*.  Early‑stopping criteria are typically set on a single validation run; random noise can make the loss appear flat for many epochs.  When the same threshold is applied across multiple seeds or datasets, accidental full‑runs become systematic.  Mitigating this requires *adaptive* stopping that incorporates confidence intervals over the loss trajectory—essentially treating early‑stopping as a sequential hypothesis test rather than a fixed cut‑off. This shifts the balance from compute waste to statistically principled efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
