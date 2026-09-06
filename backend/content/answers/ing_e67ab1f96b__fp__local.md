---
qid: ing_e67ab1f96b__fp__local
question: 'Explain: 3.2 New Knowledge, Not Just Scale — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 680
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:02-05:00'
sources: []
---

**Why “new knowledge” matters in on‑policy distillation**

When a large language model (LLM) is *distilled* to a smaller student, the usual goal is **compression**: preserve predictive power while cutting parameters.  
But the *fundamental problem* is that the student must learn a *function* that is only an approximation of the teacher’s probability distribution \(p_T(y|x)\). If we simply match logits (cross‑entropy), we force the student to mimic the teacher’s **surface**—the same answer for each input—without learning how the teacher *reasoned*. The teacher’s internal geometry, encoded in hidden states and attention patterns, is lost.

From an optimization perspective, training a student on the teacher’s outputs yields a local minimum of the Kullback‑Leibler divergence \(D_{\text{KL}}(p_T\|p_S)\). However, this objective ignores the *information* that the teacher has already distilled into its hidden representations. If we view learning as **probability flow** through a network, the student’s parameters must reproduce not only the endpoint distribution but also the *gradient field* of the teacher. This is why on‑policy distillation—where the student interacts with its own policy and receives gradients from the teacher’s action probabilities—can generate new knowledge: it forces the student to discover internal pathways that map states to actions, rather than merely memorizing outputs.

**Non‑obvious insight:**  
On‑policy distillation can be seen as a *variational inference* problem over trajectories. By letting the student sample its own actions and then reweighting those samples with the teacher’s likelihood ratios, we effectively perform importance sampling in trajectory space. The student learns to assign higher probability to trajectories that the teacher deems valuable, thereby internalizing *decision‑making strategies* that are not present in the teacher’s static output distribution.

**Recipe for effective distillation**

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | **Define a trajectory reward** \(r(x,a)=\log p_T(a|x)\). | Aligns student updates with teacher confidence. |
| 2 | **Sample actions from the student policy** \(\pi_S(a|x)\). | Ensures on‑policy exploration; avoids covariate shift. |
| 3 | **Compute importance weights** \(w=\frac{p_T(a|x)}{\pi_S(a|x)}\). | Reweights trajectories to match teacher distribution. |
| 4 | **Gradient update with weighted policy gradient** \(\nabla_\theta J = \mathbb{E}[ w\, \nabla_\theta \log \pi_S(a|x)]\). | Drives the student toward the teacher’s action manifold while preserving its own exploration. |
| 5 | **Regularize hidden representations** (e.g., L2‑matching of intermediate activations). | Transfers structural knowledge, not just output logits. |

By treating distillation as a trajectory‑level variational problem, we move beyond mere scaling and enable the student to *discover* novel internal strategies that generalize better than a naive compression would allow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
