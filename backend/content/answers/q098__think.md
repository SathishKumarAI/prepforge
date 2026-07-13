---
qid: q098
question: "What is marketing attribution and what are the main attribution models?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the goal: assigning credit for a conversion across the multiple touchpoints in a user's journey. Ask over what lookback window and whether it's single-channel or multi-touch. State the assumption.
2. **Mental model.** Attribution is a *credit-allocation rule* over an ordered sequence of marketing touches. Every model is just a different weighting of those touches.
3. **Reason step by step.** Walk the main models: **last-touch** (all credit to the final touch — simple, but ignores discovery); **first-touch** (all credit to the first — rewards awareness, ignores closing); **linear** (equal credit to every touch); **time-decay** (more credit to touches nearer the conversion); **position-based / U-shaped** (heavy first and last, some to the middle); and **data-driven/algorithmic** (weights learned from data, e.g., Shapley-value or Markov-chain removal effect). Note the trade-off: simple rules are transparent but biased; data-driven models are fairer but need volume and are harder to explain.
4. **Traps to avoid.** Defaulting to last-touch and starving upper-funnel channels; ignoring cross-device gaps; treating correlation as causal credit; overlooking that no model beats a proper incrementality test.
5. **Sanity-check and deliver.** Ask whether the model would keep funding a channel that only ever assists — if not, it may be undercrediting it. Communicate by naming the models on a first-vs-last-vs-distributed spectrum, then recommend data-driven or incrementality testing as the rigorous end.
