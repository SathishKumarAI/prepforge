---
qid: ing_f1e320ed41__fp__local
question: You want to RL-train an agent for a multi-turn tool-use task, and the only
  reward you have is whether the final task succeeded. How do you make that work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 430
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:26-05:00'
sources: []
---

In RL we seek an agent that maximises expected return  
\(R=\sum_{t} \gamma^{t} r_t\).  
When the only observable signal is a binary “task succeeded” at episode end, every intermediate step receives \(r_t=0\) until the final time.  The reward structure is therefore *sparse* and *delayed*.  

The fundamental problem is to propagate that single outcome back through all the actions that could have caused it.  Two observations resolve this:

1. **Markov decision processes are linear in value**.  
   The expected return for a policy \(\pi\) can be expressed as \(V^\pi = (I-\gamma P_\pi)^{-1} r\).  
   Even if \(r\) is zero everywhere except the terminal state, the inverse matrix spreads that reward back along every reachable trajectory.

2. **Temporal‑difference learning with bootstrapping automatically implements this propagation**.  
   The TD update
   \[
   Q(s,a)\leftarrow Q(s,a)+\alpha[r_{t+1}+\gamma V(s')-Q(s,a)]
   \]
   uses the *estimate* \(V(s')\) as a proxy for future reward.  When the final step yields \(r_T=1\), the preceding state’s value is nudged toward 1, which in turn pushes earlier states upward, and so on.

Thus a simple trick suffices: **set every intermediate reward to zero and let TD learning (or policy‑gradient with return‑to‑go) bootstrap from the terminal signal**.  
A non‑obvious insight is that *any* function approximator that can express long‑term dependencies—e.g., an LSTM or transformer—will naturally learn to carry the sparse reward information forward, even without explicit shaping terms. This relies on the linearity of expectation and the bootstrap property, not on hand‑crafted intermediate rewards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
