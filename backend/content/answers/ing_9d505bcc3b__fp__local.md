---
qid: ing_9d505bcc3b__fp__local
question: 'Explain: You ship a policy to 300 robots. It works in the lab and degrades
  in the field. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 534
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:48-05:00'
sources: []
---

When you *ship* a policy to 300 robots, you implicitly assume that the training distribution matches the deployment environment. In the lab, all robots share identical sensors, perfectly calibrated actuators, and static lighting; in the field they encounter sensor drift, actuator wear, varying illumination, and unmodeled dynamics. The policy’s loss function was minimized over a narrow manifold of states, so its gradients learned to exploit those exact conditions.

**Why it degrades**

1. **Distribution shift**: The joint distribution \(p_{\text{lab}}(x,a)\) differs from \(p_{\text{field}}(x,a)\). A policy \(\pi_\theta\) that minimizes expected loss under \(p_{\text{lab}}\) may produce high‑variance actions when \(x\) comes from the field.
2. **Covariate shift in perception**: Small sensor noise can push latent representations across decision boundaries, a phenomenon amplified by deep networks’ non‑linearities.
3. **Overfitting to idiosyncrasies**: Regularization was insufficient; the network memorized lab artefacts (e.g., static background textures).

**Debugging strategy**

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | *Quantify shift*: compute KL divergence or MMD between lab and field sensor data. | Detects unseen modes. |
| 2 | *Domain‑randomize* training: add realistic noise, lighting variations, actuator perturbations. | Forces policy to learn invariant features. |
| 3 | *Collect a small in‑field dataset*: use online learning or fine‑tuning with a few thousand samples per robot. | Bridges the gap without full retraining. |
| 4 | *Adversarial validation*: train a discriminator to distinguish lab vs field embeddings; penalize policy if discriminator succeeds. | Encourages domain‑agnostic latent space. |
| 5 | *Monitor confidence*: use entropy or dropout ensembles to flag uncertain actions for human override. | Prevents catastrophic failures. |

**Non‑obvious insight**

The key is not just “add noise” but **align the geometry of feature manifolds**. If the lab manifold lies tangent to a subspace that collapses under field perturbations, small input shifts cause large output jumps. By enforcing *manifold alignment* (e.g., via contrastive loss) you preserve curvature and guarantee smoother extrapolation—something most people miss when they only randomize inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
