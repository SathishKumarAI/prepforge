---
qid: ing_78ad9be29c__star__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 318
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:21-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection project at my previous bank, the model’s false‑positive rate kept creeping above 12 %, hurting customer experience and inflating investigation costs.

**Task** – I needed to redesign the feature selection pipeline so that we could prune irrelevant features without sacrificing predictive power, all within a tight two‑week deadline before the quarterly audit.

**Action** – I treated the feature‑subset problem as an optimization task and applied dynamic programming. First, I built a cost matrix where each entry represented the incremental AUC gain versus computational cost for adding a particular feature to a growing subset. Then, using memoization, I stored intermediate best subsets for every feature count so that when evaluating a new candidate I could instantly retrieve the optimal previous state instead of recomputing from scratch. I implemented this in Python with NumPy and cached results in a dictionary keyed by bitmask representations of feature sets. This approach let me explore 2⁴⁰ possible combinations in under 30 seconds on our cluster.

**Result** – The optimized subset reduced the false‑positive rate to 8.7 % while increasing AUC from 0.82 to 0.86, cutting investigation costs by roughly $1.3 M annually. I also learned that a carefully crafted DP solution can turn an intractable combinatorial problem into a real‑time engineering win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
