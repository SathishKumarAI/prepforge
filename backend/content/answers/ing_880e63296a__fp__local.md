---
qid: ing_880e63296a__fp__local
question: 'Explain: Results: Dexterous Manipulation with Touch and In‑Hand Vision'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 423
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:05-05:00'
sources: []
---

**Dexterous manipulation with touch + in‑hand vision**

The core problem is *state estimation* for a robotic hand that must reconfigure an object while only having access to proprioception and the visual field inside its own palm. The hand’s configuration \(q\) evolves under control signals \(u\); the environment (object pose, shape) is hidden but influences contact forces and optical flow. To decide the next motor command we need a belief over the latent state \(\mathbf{x}\) that couples kinematics, tactile pressure maps, and in‑hand images.

From first principles this becomes a Bayesian filtering problem:
\[
p(\mathbf{x}_{t+1}\mid \mathbf{z}_{0:t}) 
= \int p(\mathbf{x}_{t+1}\mid \mathbf{x}_t,u_t)\,p(\mathbf{x}_t\mid \mathbf{z}_{0:t-1})\,d\mathbf{x}_t,
\]
with observation likelihoods built from *contact‑image* features. The key insight is that touch provides **high‑frequency contact Jacobians**—local gradients of force w.r.t. joint angles—that are essentially the derivatives of the visual loss with respect to hand pose. When fused, these derivatives act as a *gradient field* guiding the policy toward configurations where small perturbations do not change the observed tactile pattern, i.e., stable grasp manifolds.

The deeper principle is **information geometry**: touch and vision jointly define a Riemannian metric on the hand‑object configuration space. The policy learns to follow geodesics that minimize uncertainty (the Fisher information) while respecting actuation limits. Non‑obvious insight: by treating tactile signals as *implicit depth cues*, the system can infer object geometry without external cameras, enabling manipulation in cluttered or occluded environments where conventional vision fails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
