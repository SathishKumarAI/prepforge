---
qid: ing_356def7c28__fp__local
question: 'Explain: Amazon Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 369
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:07-05:00'
sources: []
---

**Why DP appears on Amazon (and other FAANG) questions**

The core problem is *optimization under constraints*: we must choose a sequence of decisions (e.g., selecting items, scheduling tasks, or navigating a grid) that maximizes or minimizes a cumulative cost.  
A brute‑force search explores all \(2^n\) possibilities—impossible for interview‑scale inputs.  
Dynamic programming (DP) turns the combinatorial explosion into linear or polynomial time by exploiting **optimal substructure**: any optimal solution to the whole problem contains an optimal solution to its subproblems.  

1. **Define a state** that captures everything needed to make future decisions—often a position and a resource counter (e.g., `dp[i][k]` = best value using first *i* items with capacity *k*).  
2. **Derive the recurrence** by considering the last decision: if we include item *i*, we add its value and reduce the remaining capacity; otherwise we inherit the previous optimum.  
3. **Memoize or tabulate** to avoid recomputation—this is the “dynamic” part.

The non‑obvious insight: *the state must encode all relevant history but nothing superfluous*. If you forget a dependency (e.g., order matters), your recurrence becomes invalid, and DP collapses into an exponential search. Amazon’s recent questions routinely test whether candidates can identify that minimal state and craft the correct recurrence—an elegant application of the principle “solve once, reuse many times.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
