---
qid: ing_b7b3081167__fp__local
question: 'Explain: The Quality Hierarchy — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 462
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:41-05:00'
sources: []
---

**The Quality Hierarchy for Fine‑Tuning: a principled view**

Fine‑tuning is the process of adapting a pre‑trained model (PTM) to a downstream task **without retraining from scratch**. The *quality hierarchy* orders fine‑tuning strategies by how much they alter the PTM’s internal representations, balancing bias preservation against task‑specific flexibility.

1. **Zero‑shot / Prompting**  
   *Problem:* No data for the target task.  
   *Solution:* Keep the PTM unchanged; feed a prompt that reinterprets the input space.  
   *Why it works:* The model’s knowledge is encoded in its weights; prompting only rewrites the query, preserving the high‑level inductive biases.

2. **Adapter‑Based Fine‑Tuning**  
   *Problem:* Need task adaptation but want to keep the PTM largely intact (e.g., for multi‑task or resource‑constrained settings).  
   *Solution:* Insert small bottleneck layers (“adapters”) after each transformer block and train only them.  
   *Why it works:* Adapters act as low‑dimensional perturbations that modulate existing feature maps, preserving the PTM’s core geometry while allowing task‑specific adjustments.

3. **Full Fine‑Tuning**  
   *Problem:* The target domain diverges significantly from pre‑training data.  
   *Solution:* Update all weights (often with a smaller learning rate).  
   *Why it works:* When the PTM’s inductive biases are too distant, we must remodel its internal geometry entirely; full fine‑tuning gives maximum expressiveness at the cost of overfitting risk.

**Non‑obvious insight:**  
Adapters implicitly perform a *controlled manifold projection*: they force task updates to lie in a low‑dimensional subspace orthogonal to the PTM’s most informative directions. This preserves generalization while still achieving high performance—an elegant marriage of geometry and optimization that full fine‑tuning discards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
