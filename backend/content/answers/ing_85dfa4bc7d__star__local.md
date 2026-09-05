---
qid: ing_85dfa4bc7d__star__local
question: 'Explain: Backtracking (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 326
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:48-05:00'
sources: []
---

**Situation:** In my senior capstone, I was tasked with building a recommendation engine that could generate all possible product bundles for a seasonal sale while respecting constraints on budget and inventory. The dataset had over 200 items, and the combinatorial explosion made brute‑force infeasible.

**Task:** I needed to produce every valid bundle up to five items, ensuring each combination stayed under the $500 price cap and used available stock. The goal was to provide a complete set for A/B testing on marketing teams, aiming for at least 5,000 unique bundles within a two‑hour runtime.

**Action:** I implemented a backtracking algorithm inspired by the Neetcode “9 Problems” series. Starting with an empty bundle, I recursively added items one by one, pruning branches that exceeded the price limit or depleted inventory. To avoid duplicate permutations, I sorted items and skipped equal neighbors during recursion. I used Python’s `itertools` for initial candidate generation but switched to a custom stack‑based DFS to keep memory usage under 200 MB. Profiling revealed the prune condition cut search space by ~85%, so the algorithm completed in 95 minutes.

**Result:** The engine produced 5,312 unique bundles, meeting the target. Marketing used these for dynamic bundle offers, boosting click‑through rates by 12% during the campaign. I learned that careful pruning and state management are essential when scaling backtracking to real‑world data sizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
