---
qid: ing_833d1afab1__fp__local
question: 'Explain: Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 389
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:18-05:00'
sources: []
---

### Dynamic Programming in the “FAANG‑style” interview

**The core problem it solves**  
When an algorithm must evaluate many overlapping sub‑problems—e.g., counting ways to climb stairs, finding the longest increasing subsequence, or computing edit distance—the naive recursive solution recomputes identical states repeatedly. DP turns this into a *one‑pass* computation by storing every intermediate result in a table and reusing it.

**Why it must work that way**  
The principle of **optimal substructure** guarantees that an optimal solution can be built from optimal solutions to its sub‑problems. Coupled with the **overlap property**, DP’s memoization (top‑down) or tabulation (bottom‑up) ensures each state is solved once, giving polynomial time instead of exponential.

**Deeper connection**  
DP is a discrete analogue of *dynamic programming in continuous optimization*: both break a problem into stages and propagate optimal values forward. In probabilistic terms, DP is essentially a dynamic Bayesian network where the joint probability factorises along a chain; we compute marginals efficiently by message passing (the table entries).

**Non‑obvious insight**  
Many interviewers expect you to *identify* the recurrence relation first—often hidden in the problem’s constraints. A powerful trick: think of the answer as a function of “how far” you are from the goal (e.g., number of steps left). This reframing immediately reveals the state space and transition, turning an apparently complex question into a textbook DP exercise.

> *Tip*: Always ask if the problem satisfies optimal substructure before diving into brute‑force recursion; it’s the litmus test for DP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
