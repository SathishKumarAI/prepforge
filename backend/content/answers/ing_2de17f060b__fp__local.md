---
qid: ing_2de17f060b__fp__local
question: 'Explain: Tree Search (MCTS) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 413
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:29-05:00'
sources: []
---

**Tree‑search via Monte Carlo Tree Search (MCTS)**  
The *problem* is to pick a sequence of actions that maximises an expected reward in a stochastic environment where the full state space explodes combinatorially. A naïve exhaustive search would require \(O(b^d)\) nodes (\(b\)=branching, \(d\)=depth), impossible for real‑time play or robotics.

**Why MCTS works**  
1. **Simulation as sampling** – Each leaf is expanded by running a *rollout* (a simple policy) to the horizon, yielding an empirical return. This is an unbiased estimator of the true value if rollouts are long enough.  
2. **Upper‑confidence bounds (UCB)** – When choosing which child to explore next, UCB balances *exploitation* (\(\bar{X}_i\)) and *exploration* (\(\sqrt{\frac{2\ln N}{n_i}}\)). This is derived from concentration inequalities for bounded random variables; it guarantees that with enough samples every action’s value converges at a logarithmic rate.  
3. **Incremental tree growth** – The search never needs the whole tree: only visited nodes are stored, and deeper nodes are added as needed. This matches the *divide‑and‑conquer* principle: we decompose a long horizon into many short, cheap simulations.

**Non‑obvious insight**  
MCTS is not just “pick the best child”; it *optimises the sampling distribution itself*. The UCB term implicitly solves an online allocation problem: where to invest simulation effort so that the overall expected error of the final decision shrinks fastest. Thus MCTS simultaneously learns a policy (the tree) and an efficient exploration strategy, which is why it excels in domains like Go or robotics even with limited computational budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
