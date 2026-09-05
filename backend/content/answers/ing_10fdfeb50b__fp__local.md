---
qid: ing_10fdfeb50b__fp__local
question: 'Explain: 1-D Dynamic Programming (12 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 476
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:54-05:00'
sources: []
---

**Why a one‑dimensional DP array is enough for “Neetcode 150”**

The core of every 1‑D dynamic‑programming (DP) problem is the *optimal substructure* of an **interval or sequence**: to solve a larger instance you only need the best solutions of its immediate predecessors.  
Formally, let \(f[i]\) be the optimum value for the first \(i\) elements. If the recurrence has the form  

\[
f[i] = \max_{k<i}\{\,f[k] + g(k,i)\,\},
\]

then the decision at step \(i\) depends only on the **last boundary** \(k\). Once we know all \(f[0..i-1]\), computing \(f[i]\) is a single scan over those entries. This explains why a *single* array suffices; no extra state (like “current height” or “previous color”) is required beyond the index itself.

**Deep principle: subproblem independence + linear order**

The DP’s validity hinges on two facts:

1. **Independence** – The cost of extending a prefix by an element never influences earlier prefixes.
2. **Linear ordering** – Every state can be reached from exactly one preceding state (or a small set), preserving the 1‑D structure.

When these hold, the DP collapses to a “prefix sum” style recurrence, and time complexity reduces to \(O(n^2)\) or better with optimizations like sliding windows or convex hull tricks.

**Non‑obvious insight**

Many people think the array size must match the input length. In fact, you can *compress* states further by noticing that some indices never influence the optimum (e.g., when an element is dominated). By pruning such indices—effectively performing **coordinate compression on the DP indices**—you can reduce both memory and time without altering correctness.

So, for the 12 “1‑D” problems in Neetcode 150, each recurrence is a *prefix optimality* problem; a single array tracks all needed sub‑solutions, and careful pruning or monotonic structures yield linear or near‑linear performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
