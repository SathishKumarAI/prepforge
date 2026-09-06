---
qid: ing_93cd5189fa__fp__local
question: 'Explain: Week 5 - Dynamic programming ​ — Best practice questions by the
  author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 458
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:20-05:00'
sources: []
---

**Why Dynamic Programming (DP) is the “secret sauce” for Week 5**

The core problem that DP solves is *overlap of subproblems* in combinatorial optimisation: a global optimum can be built from optimal solutions to smaller instances, but those instances recur many times.  
Formally, if \(OPT(n)\) denotes the best answer for size \(n\), and there exists a recurrence

\[
OPT(n)=f\bigl(OPT(n-1),OPT(n-2),\dots\bigr),
\]

then memoisation guarantees that each distinct sub‑state is computed once. The *principle of optimality* (Bellman) underpins this: any prefix of an optimal solution must itself be optimal.  

**Geometric intuition:**  
Imagine a DAG where vertices are states and directed edges encode feasible transitions. DP traverses the graph in topological order, propagating best values along edges—exactly dynamic programming on graphs. The “best practice” questions from Blind 75 (e.g., *House Robber*, *Longest Increasing Subsequence*, *Edit Distance*) all map to such DAGs with linear or quadratic structure.

**Non‑obvious insight:**  
Many candidates treat DP as a black box, filling tables blindly. A deeper principle is *state abstraction*: choose the minimal set of variables that capture future decisions. For instance, in *House Robber* you only need two states (“rob this” vs “skip this”), not the whole history. Identifying this minimal state often turns an \(O(2^n)\) exponential into \(O(n)\) linear time.

**Best‑practice takeaway:**  
1. **Identify overlapping subproblems** → write a recurrence.  
2. **Choose the smallest state representation** that preserves optimality.  
3. **Traverse in order of dependency** (topological or iterative).  

Mastering this workflow turns every blind‑75 DP question into a routine, revealing why DP is indispensable for efficient algorithm design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
