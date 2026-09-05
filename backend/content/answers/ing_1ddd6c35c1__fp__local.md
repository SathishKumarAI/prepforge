---
qid: ing_1ddd6c35c1__fp__local
question: 'Explain: Memory injection and backdoor attacks — MemoryGraft: Persistent
  Compromise of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 430
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:01-05:00'
sources: []
---

**Memory injection & backdoor attacks in LLMs – the *MemoryGraft* paradigm**

An LLM is a parametric function \(f_\theta\) that maps a prompt \(x\) to an answer \(y\).  
Its *experience* is stored implicitly in \(\theta\); every token it has ever seen contributes to gradients that shape future outputs.  

A **memory‑injection attack** seeds the model with *poisoned experience*: during fine‑tuning or continual learning, a malicious user injects a small set of crafted examples \((x_p,y_p)\).  
Because training updates are convex combinations of gradients, even a few poisoned samples can steer the posterior over \(\theta\) toward a sub‑space that satisfies an attacker‑defined predicate \(P(\theta)\) (e.g., “output *X* when queried with *Y*”).  

The **backdoor** is the *conditional trigger*: a rare pattern in the prompt that, once recognized by the model’s attention mechanism, activates the poisoned latent sub‑space.  
Mathematically, we enforce
\[
P(\theta)\;\wedge\; \exists\,t:\;x_t = \text{trigger}\implies f_\theta(x_t)=y_{\text{backdoor}}.
\]
Because the trigger can be a low‑probability n‑gram or even an adversarial perturbation, it evades detection during inference and persists across downstream fine‑tuning—hence “persistent compromise.”

*Non‑obvious insight:*  
The backdoor’s persistence hinges on **gradient alignment** rather than explicit parameter tampering. A poisoned example subtly reorients the *normal vectors* of decision boundaries so that, once a trigger is seen, all subsequent gradients reinforce the malicious direction. Consequently, even after millions of benign updates, the model retains a latent “memory” of the attack—an effect invisible to standard weight‑based anomaly detectors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
