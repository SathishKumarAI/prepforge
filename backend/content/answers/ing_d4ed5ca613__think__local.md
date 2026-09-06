---
qid: ing_d4ed5ca613__think__local
question: 'Explain: Distillation for reasoning — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 481
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:59:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify what “distillation for reasoning” means in this context (knowledge transfer from a complex policy to a simpler one).  
   * Assume we’re dealing with reinforcement learning agents trained on real‑time decision tasks, and that “On‑Policy Distillation” refers to training the student while it interacts with the environment under its own policy.  

**2️⃣ Adopt a mental framework**  
   * **Teacher–Student paradigm**: teacher policy (πₜ) is fixed; student policy (πₛ) learns from it.  
   * **On‑policy vs off‑policy**: on‑policy means the data distribution matches πₛ, not πₜ.  
   * **Distillation loss**: KL divergence between action distributions or value predictions.  

**3️⃣ Step‑by‑step reasoning**  
   1. Run the teacher to generate trajectories.  
   2. Let the student act in the same environment; collect its own states and actions.  
   3. For each state, compute the KL loss between πₜ(a|s) and πₛ(a|s).  
   4. Backpropagate this loss (plus any auxiliary RL reward) to update πₛ.  
   5. Repeat until convergence; student now mimics teacher while exploring its own distribution.  

**4️⃣ Common pitfalls to avoid**  
   * Mixing on‑policy data with off‑policy loss terms—conflicts in gradients.  
   * Ignoring the shift in state visitation: student may drift to states unseen by the teacher, causing high KL errors.  
   * Over‑regularizing with too small a learning rate; the student will never catch up.  

**5️⃣ Sanity checks & verbalization**  
   * Verify that the student’s policy entropy stays comparable to the teacher’s; if it collapses, check KL weighting.  
   * Explain aloud: “We’re letting the learner experience its own world while still penalizing deviation from the expert at every step.” This confirms that on‑policy data drives exploration, yet knowledge is distilled through the KL objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
