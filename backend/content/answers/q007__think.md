---
qid: q007
question: "How does the A* search algorithm work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the mechanism plus the optimality conditions, not just a definition. Signal that you'll anchor everything on the evaluation function.
2. **Mental model.** Everything hangs on `f(n) = g(n) + h(n)`: `g` is the *known* cost from start to `n`, `h` is the *estimated* cost from `n` to goal. A* expands the node with the smallest `f` — a best-first search balancing what's spent and what's left.
3. **Reason step by step.** Maintain a **priority queue (open set)** ordered by `f`. Pop the lowest-`f` node, generate neighbors, update their `g` and `f`, repeat until the goal is expanded. State the guarantees: **optimal and complete** when `h` is **admissible**; with a **consistent** `h` it never re-expands nodes.
4. **Traps to avoid.** Don't say A* uses only `h` (that's greedy best-first) or only `g` (that's Dijkstra). Don't call it depth-first. Remember the endpoints: if `h(n)=0`, A* *is* Dijkstra; a wildly overestimating `h` breaks optimality.
5. **Sanity-check + delivery.** Position it on the spectrum — it inherits Dijkstra's optimality via `g` and greedy's speed via `h`. If your description drops either term, it's wrong. Deliver the one-liner: "expands the node with lowest f(n) = g(n) + h(n)."
