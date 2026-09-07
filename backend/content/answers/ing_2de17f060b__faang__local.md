---
qid: ing_2de17f060b__faang__local
question: 'Explain: Tree Search (MCTS) — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 444
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:09-05:00'
sources: []
---

**Tree Search (MCTS) – Planning & Decomposition**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | “We’re building a Monte‑Carlo Tree Search that plans over a game tree, breaking the overall decision into a sequence of sub‑rollouts. Assumptions: deterministic or stochastic environment? Depth limit? Reward signal?” |
| **Approach** | 1️⃣ Build a search tree with nodes = states. <br>2️⃣ Iterate *selection* (UCT), *expansion*, *simulation* (random policy), *backpropagation*. <br>3️⃣ Decompose the problem: treat each node as an independent planning sub‑problem, reusing the same MCTS core. |
| **Depth** | Each iteration chooses a path via UCT: \(UCB = \frac{w_i}{n_i} + c\sqrt{\frac{\ln N}{n_i}}\). Expansion adds one child; simulation runs to terminal or depth limit using a rollout policy (random or learned). Backpropagation updates visit counts and value estimates. Complexity ≈ O(iterations × roll‑out‑length). Trade‑off: deeper rollouts give better estimates but cost more time. |
| **Edge Cases** | *Zero‑visit nodes* → division by zero; handle with large exploration bonus.<br>*Deterministic loops* → infinite recursion; detect and prune cycles.<br>*Sparse rewards* → need variance reduction (e.g., progressive widening). |
| **Optimize & Communicate** | • Parallelize simulations across cores. <br>• Use *progressive widening* to limit children in high‑branching nodes. <br>• Cache value estimates for repeated states (transposition table). When explaining, I’ll walk through a toy game example, show how MCTS builds the tree step‑by‑step, and quantify runtime vs. search depth. This demonstrates structured reasoning, clear communication, and deep technical grasp—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
