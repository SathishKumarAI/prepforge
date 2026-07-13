---
qid: q019
question: "What is a Markov Decision Process (MDP)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Hard/math question — plan to define the formal tuple, the key property, and the solution goal. Assume they want the `(S, A, P, R, γ)` notation, not just prose.
2. **Mental model.** An MDP is the **formal skeleton of RL**: a way to model sequential decision-making under uncertainty. Everything reduces to states, actions, a stochastic transition, rewards, and how much you value the future.
3. **Reason step by step.** Unpack the tuple: **S** states, **A** actions, **P(s'|s,a)** transition probabilities, **R(s,a)** reward, **γ ∈ [0,1]** discount factor weighting future rewards. State the **Markov property**: the future depends only on the *current* state, not the full history. Then the objective: find a **policy π(a|s)** maximizing expected discounted return, underpinned by the **Bellman equation** `V(s) = maxₐ[R(s,a) + γ Σ P(s'|s,a)V(s')]`.
4. **Traps to avoid.** Don't call it a classifier, clustering method, or a time-series network — distractors. Don't drop γ or the Markov property; both are load-bearing.
5. **Sanity-check + delivery.** Verify you named all five tuple elements and the Markov property. Note solutions: **value/policy iteration** when P,R are known; **model-free RL (Q-learning)** when they're not. Deliver: "the (S, A, P, R, γ) framework for sequential decisions obeying the Markov property."
