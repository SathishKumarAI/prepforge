---
qid: q068
question: "What is the difference between Pearson and Spearman correlation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note both are association measures on a −1 to +1 scale, and the real question is *which relationship* each captures and *what data* each suits. Assume paired numeric or ordinal observations.
2. **Mental model.** Key contrast: Pearson works on the raw *values* and detects **linear** structure; Spearman replaces values with their **ranks** and detects any **monotonic** structure. "Values vs ranks, linear vs monotonic" is the whole answer in four words.
3. **Reason step by step.** Derive the consequences: because Pearson uses values, it assumes roughly normal continuous data and is sensitive to outliers. Because Spearman uses ranks, it is non-parametric, handles ordinal data, resists outliers, and catches nonlinear-but-monotonic trends.
4. **Traps to dodge.** Do not reverse them (Pearson does *not* use ranks). Do not claim they always agree — they diverge under nonlinearity or outliers. Do not read either as causation; correlation ≠ cause.
5. **Sanity-check and communicate.** Test with a mental example like y = x³: monotonic, so Spearman ≈ 1 but Pearson < 1 — confirms the distinction. Close with the decision rule: Pearson for linear normal data, Spearman for ordinal, outlier-prone, or monotonic cases.
