---
qid: q012
question: "What is the self-attention mechanism in transformers?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Gauge the depth wanted — I'll give the intuition, the formula, and why it beats RNNs. Assume they'll appreciate the `QKV` equation but want the *meaning* explained too.
2. **Mental model.** Each token asks "which other tokens matter to me?" It emits a **Query**, every token exposes a **Key** and a **Value**; matching queries to keys produces weights, and the answer is a weighted blend of values.
3. **Reason step by step.** Walk the formula `Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V`: `QKᵀ` scores token-to-token similarity; `√dₖ` scaling keeps gradients stable; softmax turns scores into weights summing to 1; the weighted sum of `V` yields a context-aware representation. Add **multi-head attention** — several parallel attention operations with different projections, capturing different relationship types at once.
4. **Traps to avoid.** Don't reduce it to averaging embeddings or looking only at the previous token — self-attention connects *every* pair directly. Don't forget the `√dₖ` scaling or the parallelism point.
5. **Sanity-check + delivery.** Contrast with RNNs: self-attention processes all positions **in parallel** and links distant tokens directly, which is why transformers scale. If your explanation lost the QKV roles, redo it. Deliver: "each token weighs all others via Query/Key/Value vectors."
