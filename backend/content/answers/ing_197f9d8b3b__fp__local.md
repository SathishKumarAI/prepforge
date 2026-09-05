---
qid: ing_197f9d8b3b__fp__local
question: 'Explain: Sliding Windows vs. Summarization — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 577
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:30-05:00'
sources: []
---

**Short‑term context in large language models**

A model’s *short‑term* memory is the sequence of tokens it can attend to at any step—usually capped by a fixed length \(L\).  
When we process longer text, two principled strategies arise:

| Strategy | Core idea | Why it works |
|----------|-----------|--------------|
| **Sliding window** | Keep the last \(L\) tokens; discard older ones. | The attention mechanism is *local*: each token only sees its neighbors. By always presenting a contiguous block of recent text, we preserve syntactic and semantic coherence that the model has learned during training on local contexts. |
| **Summarization (compression)** | Replace earlier chunks with a compact representation \(s\) that encodes their essential content. | From an information‑theoretic viewpoint, we trade *granularity* for *coverage*. A well‑constructed summary retains high mutual information with the discarded tokens while fitting into the fixed window, allowing the model to reason about distant dependencies without violating its architectural limits. |

**Deriving the choice**

Let \(T\) be a long document and \(C(t)\) the content of token \(t\).  
We want to maximize the expected log‑likelihood

\[
\mathbb{E}\big[\log P(C(t+1)|\, \text{context})\big]
\]

subject to \(|\text{context}|\le L\).

* Sliding window enforces \(\text{context}=C(t-L+1:t)\).  
  It guarantees that the probability distribution is conditioned on exactly the tokens the model was trained with, preserving *local* statistical dependencies.

* Summarization replaces a prefix \(P_{t}\) by a vector \(s_t\) such that  

\[
I(s_t; P_t)\approx I(C(t); P_t)
\]

where \(I(\cdot;\cdot)\) is mutual information.  
  Here we approximate the *global* context with a compressed code, allowing the model to capture long‑range patterns while respecting the capacity constraint.

**Non‑obvious insight**

The optimal strategy is not “sliding + summarize” but *adaptive*: when recent tokens are highly predictable (low entropy), we can afford a larger summary of older text; when they are noisy, we keep more raw tokens. Thus the window size itself should be a function of local uncertainty, turning the memory problem into an online rate‑distortion tradeoff rather than a fixed buffer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
