---
qid: ing_d4ed5ca613__fp__local
question: 'Explain: Distillation for reasoning — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 619
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:06-05:00'
sources: []
---

**On‑policy distillation for reasoning**

Suppose a *teacher* policy \(\pi_T\) has been trained to solve a sequential decision problem (e.g., a game or dialogue). The teacher’s value function \(V^\pi_T(s)\) encodes *how good* each state is, while its action distribution \(\pi_T(a|s)\) reflects the *reasoning process* that led there. We wish to transfer this reasoning to a simpler *student* policy \(\pi_S\) without re‑learning from scratch.

The key idea: during rollouts with the teacher, we collect state–action pairs \((s,a)\). Instead of merely mimicking actions (behavior cloning), we **condition** on the *teacher’s expected future return*. For each visited state \(s\), we compute a target distribution over actions proportional to
\[
p_T(a|s) \propto \pi_T(a|s)\exp(\beta\, Q^\pi_T(s,a)),
\]
where \(Q^\pi_T(s,a)=r(s,a)+\gamma V^\pi_T(s')\) and \(\beta>0\). This is a *Boltzmann* reweighting that biases the target toward actions yielding higher value, thereby preserving reasoning.

The student minimizes the KL divergence
\[
L(\theta_S)=\mathbb{E}_{s}\Bigl[ D_{\text{KL}}\bigl(p_T(\cdot|s)\,\Vert\, \pi_S(\cdot|s;\theta_S)\bigr) \Bigr].
\]
Because the samples \(s\) come from **the teacher’s own policy**, we are on‑policy: the student learns to emulate decisions that are *actually* executed in relevant states, not arbitrary demonstrations. This guarantees that the learned distribution remains well‑conditioned with respect to the environment dynamics.

**Why it works:**  
The KL objective is a convex surrogate for matching the *expected return* of the teacher. By weighting actions by their value, we implicitly perform a form of *policy gradient* without explicit reward signals; the student’s gradients point toward higher‑value behaviors. The on‑policy sampling ensures that the state distribution matches what the student will encounter when deployed.

**Non‑obvious insight:**  
The temperature \(\beta\) acts not only as an exploration–exploitation knob but also as a *regularizer* for value‑based distillation. A large \(\beta\) sharpens the target, forcing the student to learn precise reasoning; a small \(\beta\) smooths it, encouraging robustness to state‑space variations. Thus, tuning \(\beta\) trades off fidelity to the teacher’s reasoning against generalization—an insight often overlooked when treating distillation purely as imitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
