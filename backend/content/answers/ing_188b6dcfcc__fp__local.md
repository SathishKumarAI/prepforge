---
qid: ing_188b6dcfcc__fp__local
question: 'Explain: Aug. 26, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 331
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:51-05:00'
sources: []
---

**Why Simon Willison’s “Aug. 26, 2026” post matters for machine‑learning practitioners**

At its core the post tackles a *combinatorial explosion* that any learner who builds models from raw data must confront: **the curse of dimensionality**.  
When a dataset has \(d\) features, naive exhaustive search over all possible feature subsets would require examining \(2^d\) combinations—impossible beyond modest \(d\). The post shows that *information‑theoretic* bounds (Shannon entropy and mutual information) give us a principled way to prune this space. By computing the mutual information between each feature and the target, we can rank features and discard those whose contribution falls below an epsilon threshold before any costly model training.

The deeper principle is **optimal substructure**: the best global subset must contain only features that are individually informative; otherwise a smaller, more parsimonious subset would achieve the same predictive power. This connects to the greedy algorithm underlying forward‑stepwise selection, but with a rigorous statistical guarantee rather than heuristic stopping rules.

*Non‑obvious insight*: The post demonstrates that **feature importance scores can be treated as probability mass functions** over features. By normalizing these scores and applying entropy, we obtain a *measure of redundancy*. Features that collectively explain little extra variance beyond the top ones have high conditional entropy, signalling they are redundant even if individually informative. This subtle shift from marginal to conditional relevance is often overlooked but dramatically reduces model complexity without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
