---
qid: ing_787dcae720__fp__local
question: 'Explain: Golden-set construction and rotation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 501
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:57-05:00'
sources: []
---

**Golden‑set construction & rotation: the “gold standard” for CI/CD in ML**

When a new model version is built, you must know that it *really* behaves as expected before shipping.  
The **golden set** is a curated collection of inputs whose correct outputs are known with absolute certainty (e.g., hand‑verified labels or synthetic data). It serves two fundamental purposes:

1. **Error detection** – Any deviation from the golden answers signals a regression, bias shift, or data drift.  
2. **Fair comparison** – Because every candidate model is evaluated on the *same* set, performance metrics are comparable across time and branches.

The construction starts from first principles:  
- **Coverage**: The set must span all decision boundaries that the production pipeline will encounter (edge cases, class imbalances, feature outliers).  
- **Minimality**: Too large a golden set inflates test times; too small misses subtle regressions. Thus, we formulate an *optimization problem*—maximize coverage subject to a time budget. This is equivalent to selecting a maximal‑coverage subset under a cardinality constraint (a classic NP‑hard problem solved by greedy heuristics).  

**Rotation** addresses concept drift: the golden set must evolve with the data distribution. Every *k* releases, we:

1. **Sample new edge cases** from recent production logs that were misclassified or produced low confidence.  
2. **Retire stale entries** whose underlying patterns have vanished (e.g., a deprecated feature).  

This rotation is guided by a *probabilistic relevance score*: \( r_i = \Pr(\text{future occurrence}|\text{current evidence}) \), ensuring that the set remains predictive of future errors.

*Non‑obvious insight:*  
A golden set that only contains “clean” cases (high confidence, easy predictions) will never detect *model brittleness*. By deliberately including *ambiguous* or *borderline* examples—those where human annotators disagree—we expose models to the very uncertainty they must handle in production. Thus, rotation is not just a refresh; it’s an intentional “stress test” that keeps the CI/CD pipeline attuned to real‑world ambiguity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
