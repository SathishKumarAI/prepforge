---
qid: ing_de0511dabf__fp__local
question: 'Explain: Conclusion — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 692
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:50-05:00'
sources: []
---

**Why the RL‑VR objective has a finite limit**

At its core an RL agent is solving a *constrained Markov decision process* (MDP).  
The unconstrained Bellman equation
\[
V(s)=\max_a \bigl[r(s,a)+\gamma\,\mathbb E_{s'} V(s')\bigr]
\]
is a fixed‑point of the dynamic‑programming operator.  Adding *variational regularization* (the “VR” part) amounts to penalising deviation from a prior policy \(q(a|s)\):
\[
V_{\lambda}(s)=\max_a \Bigl[r(s,a)+\gamma\,\mathbb E_{s'} V_{\lambda}(s')-\lambda\,D_{\mathrm{KL}}\!\bigl(\pi(\cdot|s)\,\Vert\,q(\cdot|s)\bigr)\Bigr].
\]
Here \(\lambda>0\) trades off reward versus closeness to \(q\).  

Because the KL term is *bounded below* by zero and convex in \(\pi\), the operator remains a contraction (the same \(\gamma<1\) guarantees it).  Therefore, by Banach’s fixed‑point theorem, there exists a unique value function \(V_{\lambda}\) for each \(\lambda\).  

Now consider \(\lambda\to\infty\).  
The penalty dominates any finite reward; the optimal policy collapses to the prior:
\[
\pi^*_{\lambda}(a|s)=q(a|s)\quad\text{for all }s,a.
\]
Consequently,
\[
V_{\lambda}(s)\;\xrightarrow{\lambda\to\infty}\;
\mathbb E_{a\sim q(\cdot|s)}[\,r(s,a)+\gamma\,\mathbb E_{s'} V_{\lambda}(s')\,],
\]
which is just the value of following \(q\) everywhere.  
Conversely, as \(\lambda\downarrow0\), the KL term vanishes and we recover the standard optimal policy.

**Non‑obvious insight**

The *rate* at which \(V_{\lambda}\) approaches the prior‑policy value is governed not by the reward magnitude but by the *geometry of the action space*.  In high‑dimensional actions, even a modest \(\lambda\) can force the agent to stay close to \(q\), because the KL penalty scales with the log‑ratio of densities over a vast support.  Thus, in practice, one must calibrate \(\lambda\) relative to action‑space dimensionality rather than just reward scale—a nuance that is often overlooked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
