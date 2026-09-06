---
qid: ing_a2ad3a00ab__fp__local
question: 'Explain: Explain distillation for LLMs - black-box vs logit distillation
  - and the licensing caveats.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 692
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:42-05:00'
sources: []
---

**Distillation for LLMs – why it works and what you can legally claim**

When a large language model (LLM) is the *oracle* that answers prompts, we want a cheaper copy.  
The fundamental problem is to approximate a **high‑dimensional conditional distribution** \(P_{\text{teacher}}(y|x)\) with a smaller network \(P_{\text{student}}\).  The optimal approximation in Kullback–Leibler (KL) sense is the one that minimises
\[
\mathbb{E}_{x}\!\left[\,D_{\mathrm{KL}}\!\big(P_{\text{teacher}}(\cdot|x)\;\Vert\;P_{\text{student}}(\cdot|x)\big)\right].
\]
Because KL is asymmetric, the teacher’s soft distribution serves as a *soft target* that encodes richer information than hard labels: probabilities reflect relative confidence and capture inter‑class structure (e.g., “dog” vs. “cat”).  Thus distillation can be viewed as **probability smoothing** that preserves higher‑order dependencies in the data manifold, a direct consequence of the *information bottleneck* principle.

### Black‑box vs. logit distillation

| Approach | Access required | Target | Caveat |
|----------|-----------------|--------|--------|
| **Black‑box** | Only predictions \(P_{\text{teacher}}(y|x)\) (probabilities or logits) | Soft labels or raw logits | Must keep the teacher’s output format; cannot expose internal weights. |
| **Logit distillation** | Full access to logits \(\mathbf{z}_{\text{teacher}}\) | Logits themselves | Requires the teacher’s architecture or a compatible interface; still respects model‑agnosticism if only logits are used. |

Both methods aim to match the *output distribution*, but logit distillation often yields better fidelity because it preserves temperature‑scaled logits, which encode richer gradients for training.

### Licensing caveats

* **Copyright**: The teacher’s weights are typically copyrighted; copying them directly is disallowed.  
* **Derivative works**: Producing a model that mimics the teacher’s *function* can be considered a derivative work under some jurisdictions, even if only logits are used.  
* **Open‑source licenses**: If the teacher is released under permissive terms (e.g., MIT), you may reuse its outputs; but GPL‑style licenses impose copyleft obligations on any derived model that incorporates the teacher’s code or data.  

**Non‑obvious insight:** Even when only logits are used, *the temperature hyperparameter can be tuned to trade off between fidelity and privacy*. A higher temperature flattens the distribution, reducing the risk of leaking proprietary information embedded in the teacher’s fine‑grained outputs—an often overlooked compliance lever.

In short, distillation is a principled KL minimisation that turns a high‑capacity probability model into a leaner one; black‑box and logit variants differ only in access level, but both must navigate copyright and derivative‑work boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
