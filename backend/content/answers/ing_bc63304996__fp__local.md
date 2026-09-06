---
qid: ing_bc63304996__fp__local
question: 'Explain: PEFT vs. Full-Parameter — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 521
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:27-05:00'
sources: []
---

**Why we fine‑tune at all?**  
A pre‑trained transformer learns a *prior* over language: a probability distribution \(P_\theta(x)\) that captures millions of patterns. To adapt it to a downstream task \(T\), we seek parameters \(\theta^\*\) minimizing a loss
\[
L_T(\theta)=\mathbb{E}_{(x,y)\sim T}\!\big[-\log P_\theta(y|x)\big].
\]
Two extremes exist:

1. **Full‑parameter fine‑tuning (FPFT)** – update every \(\theta_i\).  
   *Pros*: maximal flexibility; can capture task‑specific idiosyncrasies.  
   *Cons*: computationally heavy, overfits on small data, and requires storing a full copy of the model.

2. **Parameter‑Efficient Fine‑Tuning (PEFT)** – freeze most \(\theta\) and learn only a tiny “adapter” subnetwork or low‑rank update \(U V^\top\).  
   *Pros*: drastic memory savings, faster training, mitigates catastrophic forgetting.  
   *Cons*: may miss subtle global shifts.

**Why PEFT works**  
From an optimization lens, the loss surface is highly non‑convex but has many flat directions because most weights already lie near a good local minimum (the pre‑trained prior). Updating only a low‑rank subspace exploits the fact that task‑specific adjustments often live in a *low‑dimensional manifold* of the full parameter space. The Jacobian \(J=\partial P_\theta/\partial\theta\) is rank‑deficient for downstream tasks, so a small number of directions suffices to approximate \(\nabla L_T\).

**Non‑obvious insight**  
PEFT’s success hinges on *parameter sharing across layers*: the same adapter can be replicated at multiple depths. This multiplicity effectively creates a hierarchical low‑rank update that scales linearly with depth but only adds a few hundred parameters per layer—far fewer than full‑fine‑tuning yet richer than a single global vector.

In short, PEFT trades off expressivity for efficiency by exploiting the geometry of the pre‑trained model’s loss surface: most directions are already “good enough,” and only a narrow subspace needs adjustment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
