---
qid: ing_3b28c35691__fp__local
question: 'Explain: Evasion Techniques and Defenses — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 532
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:10:32-05:00'
sources: []
---

**Evasion Techniques & Defenses in AI‑driven Content Moderation**

At its core, moderation is a **binary decision problem**: classify a piece of content \(x\) as *acceptable* or *illicit*.  
Let the model output a score \(s(x)=P(y=1|x)\). The system flags content when \(s(x) > \tau\).  

---

### Why evasion works

An attacker chooses a perturbation \(\delta\) to craft a new instance \(x' = x + \delta\) such that  
\(s(x') < \tau\) while preserving the original meaning. This is precisely an **adversarial optimization** problem:

\[
\min_{\delta}\; \|\delta\|_p \quad
\text{s.t. } s(x+\delta) < \tau, \;
x+\delta \in \mathcal{C}
\]

where \(\mathcal{C}\) encodes linguistic or visual constraints (e.g., grammar, image fidelity).  
Because \(s(\cdot)\) is highly non‑convex and often locally linear, small \(\|\delta\|_p\) can flip the decision.  

---

### Defenses as robust optimization

Robustness requires solving:

\[
\max_{\theta}\; \mathbb{E}_{x,y}\Big[\,\min_{\delta\in\Delta}\ell(f_\theta(x+\delta),y)\Big]
\]

i.e., train the model to perform well **even after worst‑case perturbations**.  
This yields a *convex‑concave* saddle point: the inner minimization forces the model to learn features that are invariant under allowed \(\Delta\) (e.g., synonym substitution, style transfer).  

---

### Non‑obvious insight

Most defenses focus on **perturbation magnitude** (\(L_p\) norms).  
However, *semantic preservation* is a stricter constraint: two images with identical \(L_2\) distance can differ vastly in meaning.  
A principled defense must therefore constrain the adversary by a **distributional similarity metric** (e.g., Earth‑Mover Distance on word embeddings or perceptual image metrics). This aligns the optimization with human perception and dramatically hardens evasion, because attackers cannot “cheat” by making imperceptible but semantically drastic changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
