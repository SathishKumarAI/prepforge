---
qid: q020
question: "How does Q-learning work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the update rule, *why* it's off-policy, and the convergence caveat. Signal you'll anchor on the Q-value definition then the TD update.
2. **Mental model.** `Q(s,a)` is the **expected discounted return** of taking action `a` in state `s` and acting optimally afterward. Learning = iteratively nudging table entries toward a better estimate using observed transitions.
3. **Reason step by step.** State that it's **model-free** (no known transition/reward model) and **off-policy**. Give the **temporal-difference** update: `Q(s,a) ← Q(s,a) + α[r + γ·maxₐ' Q(s',a') − Q(s,a)]`, naming `α` (learning rate), `γ` (discount), `r` (observed reward). The bracket is the TD error. The `max` over next actions is what makes it **off-policy** — it learns the greedy optimal policy while *behaving* with an exploratory one (e.g., ε-greedy).
4. **Traps to avoid.** Don't say it needs the full transition model (that's the whole point of *model-free*) or that it's supervised classification. Don't forget exploration is still required.
5. **Sanity-check + delivery.** Note the guarantee: with sufficient exploration and a decaying `α`, tabular Q-learning **provably converges** to optimal Q-values; for large/continuous states, swap the table for a net (**DQN** with experience replay and target networks). Deliver: "it learns Q(s,a) via TD updates using r + γ·max Q(s',a')."
