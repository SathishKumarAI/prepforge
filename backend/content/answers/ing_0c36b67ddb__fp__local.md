---
qid: ing_0c36b67ddb__fp__local
question: 'Explain: Training Reasoning Models: RLVR and GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 773
total_tokens: 944
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:47-05:00'
sources: []
---

**Why we need RL‑based fine‑tuning for reasoning**

A language model learns a *distribution* \(p_\theta(\mathbf{y}\mid\mathbf{x})\) that maximizes likelihood on raw text.  
When the task is multi‑step deduction (e.g., proving a theorem), the optimal sequence \(\mathbf{y}^*\) is rarely observed in training data; the model instead converges to “shortcuts” that pass the surface test but fail the *causal chain*.  
We therefore treat reasoning as a **sequential decision problem**: at each step \(t\) the agent chooses an intermediate statement \(a_t\); after \(T\) steps it outputs a final answer. The goal is to maximize a reward \(R(\mathbf{a}_{1:T})\) that captures logical soundness and completeness.

---

### RLVR (Reward‑Guided Value‑Based Reasoning)

1. **Value function**: Estimate \(V_\phi(s_t)\), the expected cumulative reward from state \(s_t=\langle \mathbf{x}, a_{<t}\rangle\).  
2. **Policy**: Parameterise \(\pi_\theta(a_t|s_t)\) via the language model.  
3. **Training objective**:
   \[
   L_{\text{RLVR}} = -\mathbb{E}_{a_t\sim\pi_\theta}\!\big[\,R(\mathbf{a}) + \alpha\,V_\phi(s_{t+1}) - V_\phi(s_t)\,\big]
   \]
   The TD‑error enforces that the policy follows a *value‑improving* trajectory.  
4. **Why it works**: The value estimate propagates sparse, delayed rewards backward through the chain, turning an ill‑posed deduction into a tractable Bellman optimisation.

---

### GRPO (Generative Reward‑Optimised Policy)

1. **Generative pre‑training** gives \(\pi_\theta\).  
2. **Reward‑shaped loss**:
   \[
   L_{\text{GRPO}} = -\mathbb{E}_{a_{1:T}\sim\pi_\theta}[\,R(a_{1:T})\,]
   \]
   with a *policy gradient* update
   \[
   \nabla_\theta L_{\text{GRPO}}
      = -\mathbb{E}_{a_{1:T}}\!\Big[ R(a_{1:T})\sum_{t}\nabla_\theta\log\pi_\theta(a_t|s_t)\Big].
   \]
3. **Why it works**: By treating the entire reasoning path as a sample from the policy, we directly optimise for the final logical reward without intermediate value estimates.

---

#### Non‑obvious insight

Both RLVR and GRPO rely on *reward shaping* to expose latent structure. The subtlety is that **shaping must preserve optimal policies** (potential functions). If the shaping function \(F(s)\) satisfies
\[
R'(s,a)=R(s,a)+F(s')-F(s),
\]
then any policy optimal under \(R'\) remains optimal under \(R\). Many practitioners forget to verify this, leading to *policy drift* where the model learns to exploit artificial reward signals rather than genuine reasoning. Ensuring potential‑based shaping guarantees that the fine‑tuned model still solves the original logical problem while enjoying the optimisation benefits of RL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
