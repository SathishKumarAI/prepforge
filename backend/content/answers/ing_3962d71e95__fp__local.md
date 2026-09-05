---
qid: ing_3962d71e95__fp__local
question: 'Explain: Agent Procedural Memory — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 547
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:16-05:00'
sources: []
---

### From the fundamental problem

An RL agent must **choose actions** so that a long‑run reward is maximised.  
The optimal behaviour is captured by a *policy* \(\pi(a\mid s)\) – a mapping from states to action probabilities.  
To learn such a policy we ask: “Given what I already know, which action yields the highest expected return?”  

### Why the formula must look like it does

1. **Bellman optimality** tells us that the value of a state equals the best immediate reward plus the discounted value of the next state:
   \[
   V^{*}(s)=\max_{a}\Bigl[r(s,a)+\gamma\,\mathbb{E}_{s'}[V^{*}(s')]\Bigr].
   \]
2. The *arg‑max* over actions gives precisely the policy that achieves this value:
   \[
   \pi^{*}(a\mid s)=
   \begin{cases}
   1 & a=\displaystyle\arg\max_{b}Q^{*}(s,b)\\[4pt]
   0 & \text{otherwise},
   \end{cases}
   \]
   where \(Q^{*}\) is the optimal action‑value function.

3. In practice we approximate \(Q^{*}\) with a parametric **procedural memory** \(Q_{\theta}(s,a)\).  
   The agent’s policy becomes a *softmax* over this table:
   \[
   \pi_{\theta}(a\mid s)=
   \frac{\exp(\beta Q_{\theta}(s,a))}{\sum_{b}\exp(\beta Q_{\theta}(s,b))},
   \]
   where \(\beta\) controls exploration.  
   This is the *Agent Procedural Memory* representation: a learned, differentiable map from states to action utilities.

### A non‑obvious insight

The softmax temperature \(\beta\) can be **adapted online** by monitoring *policy entropy*.  When entropy drops too fast (over‑confidence), we lower \(\beta\) to inject exploration; when it rises (too random), we raise \(\beta\).  This dynamic adjustment embeds the principle of *information‑theoretic regularisation* directly into procedural memory, leading to more robust learning without extra hyperparameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
