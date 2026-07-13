---
qid: q006
question: "What is a heuristic in AI search, and what makes one admissible?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note the question has two parts — *define heuristic* and *define admissible* — and answer both. Assume the context is informed search (A*), and state that assumption.
2. **Mental model.** Think of `h(n)` as an **estimated cost-to-goal** that steers search toward promising nodes. "Admissible" = optimistic: it never lies upward about how far the goal is.
3. **Reason step by step.** Define `h(n)` as the estimated remaining cost from `n` to goal, contrasting informed vs. blind search. Then define admissibility precisely: `h(n)` **never overestimates** the true cost. State the payoff — admissibility guarantees **A\*** returns an optimal path. Level up to **consistency**: `h(n) ≤ cost(n,n') + h(n')`, which implies admissibility and means A* never re-expands a node.
4. **Traps to avoid.** Don't say admissible means "always correct" or "equal to the exact cost" — it only requires *not overestimating*. Don't confuse admissibility with consistency; consistency is strictly stronger.
5. **Sanity-check + delivery.** Test with grid pathfinding: straight-line (Euclidean) distance is admissible because the real path can only be equal or longer. If your example can ever overestimate, it's inadmissible. Deliver: "estimates cost-to-goal; admissible if it never overestimates — which is what makes A* optimal."
