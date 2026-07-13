---
qid: q036
question: "What is the difference between L1 and L2 regularization?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State both add a weight penalty to the loss to fight overfitting; the question is the *penalty form* and its effect. Assume they want the sparsity contrast and the geometry.

2. **Mental model.** L1 = absolute-value penalty = sparsity; L2 = squared penalty = smooth shrinkage. The lambda knob scales strength in both.

3. **Reason step by step.** L1 (Lasso) adds lambda * sum|w_i|, which drives some weights *exactly* to zero, performing built-in feature selection and yielding sparse models - good when many features are irrelevant. L2 (Ridge) adds lambda * sum w_i^2, shrinking weights toward but rarely to zero, spreading the penalty smoothly, handling correlated features better, and staying differentiable everywhere. Larger lambda means more regularization, higher bias, lower variance. Mention Elastic Net combines both, and the geometry: L1's diamond has corners on the axes (sparsity), L2's circle doesn't.

4. **Traps to avoid.** Don't invert the effects (L1 zeros, L2 shrinks smoothly). Don't say both zero out weights or that they're identical.

5. **Sanity-check.** Verify the mapping: sparse/feature-selection to L1, smooth-shrinkage/correlated-features to L2. Communicate *when* to pick each, which shows applied judgment beyond the formula.
