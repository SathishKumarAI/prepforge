---
qid: q012
question: "What is the self-attention mechanism in transformers?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the Query-Key-Value mechanics and the intuition of why attention replaced recurrence, at a level I can whiteboard.

**Approach** — Give the intuition (tokens attend to relevant tokens), then the QKV math, then multi-head and complexity.

**Depth** — Self-attention lets every token in a sequence look at every other token and weight how much each one matters when building its own representation—capturing context and long-range dependencies. Each token's embedding is projected into three vectors: **Query, Key, Value**. For a given token, we score its Query against all Keys (dot product), scale by √d_k, apply softmax to get attention weights, then take the weighted sum of Values. Formally: Attention(Q,K,V) = softmax(QKᵀ/√d_k)·V. **Multi-head attention** runs this in parallel across several subspaces so the model captures different relationship types (syntax, coreference), then concatenates. Complexity is O(n²) in sequence length n, since every token attends to every other.

**Edge cases** — The O(n²) cost limits context length—hence flash-attention and sparse/linear variants. Self-attention is permutation-invariant, so positional encodings are required. Decoder generation uses causal masking to prevent attending to future tokens.

**Optimize & communicate** — I'd contrast with RNNs: attention is parallelizable and handles long dependencies without vanishing gradients. Narrating "Query asks, Keys advertise, Values deliver, softmax decides who to listen to" gives the interviewer a crisp, correct mental model.
