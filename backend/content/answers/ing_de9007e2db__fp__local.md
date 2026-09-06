---
qid: ing_de9007e2db__fp__local
question: 'Explain: Indirect Prompt Injection (IPI) Defense in Depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 490
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:07-05:00'
sources: []
---

**Indirect Prompt Injection (IPI) — Defense‑in‑Depth**

At its core, an LLM is a *probabilistic mapping*  
\(f: \text{prompt}\rightarrow\text{output}\).  
An attacker injects a hidden “payload” \(p^*\) into the prompt so that
\(f(\text{clean}+p^*)\) yields malicious content.  IPI treats the prompt as a *noisy channel* whose clean signal is corrupted by an adversarial perturbation.

1. **Layered Filtering**  
   - **Pre‑tokenization sanitiser:** removes control characters and known injection tokens.  
   - **Semantic encoder‑decoder guard:** encodes the user’s intent into a vector \(z\) using a *teacher* network that is robust to small input changes (e.g., adversarial training).  
   - **Reconstruction verifier:** decodes \(z\) back to text and checks for divergence from the original intent via a cosine‑similarity threshold.

2. **Why it must work**  
   The encoder learns an *invariant manifold* of legitimate prompts.  Any perturbation that changes the output without changing the latent representation is penalised during training, forcing \(z\) to be *stable* under small edits—exactly what IPI exploits.  

3. **Deeper principle**  
   This is a form of *robust optimisation*: we minimise the worst‑case loss over all perturbations within a bounded norm ball.  By constraining the model’s sensitivity, we effectively shrink the adversary’s feasible attack space.

4. **Non‑obvious insight**  
   The reconstruction verifier can be *tightened* by using *contrastive self‑supervision*: train the encoder to distinguish between clean and synthetically injected prompts.  This turns a passive filter into an active detector that learns the *boundary shape* of malicious perturbations, yielding far fewer false positives than thresholding alone.

In short, IPI layers stability, semantic fidelity, and adversarial awareness—each layer reduces the probability that a hidden payload will survive all checks before reaching the LLM’s core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
