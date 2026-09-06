---
qid: ing_d9641295a8__fp__local
question: 'Explain: Extended Thinking & Budget Tokens — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 416
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:17-05:00'
sources: []
---

**Extended Thinking & Budget Tokens – a principled view of context engineering**

The core challenge for any language model is *finite capacity*: each prompt can contain at most \(T\) tokens. Yet real‑world reasoning often requires far more input than \(T\). **Extended thinking** addresses this by decomposing the task into sub‑problems, solving them sequentially, and feeding only the distilled “reasoning trace” back into the model. Formally, if a problem of size \(S\) needs \(\lceil S/T\rceil\) passes, we treat each pass as an inference step that consumes a *budget* of tokens.

The **budget‑token** concept formalises this allocation. Let \(b_i\) be the number of tokens allowed for sub‑step \(i\). The optimisation problem is:

\[
\max_{\{b_i\}}\;\sum_{i} \text{Utility}(b_i)\quad
\text{s.t.}\;\sum_i b_i = B,\; 0<b_i\le T.
\]

Utility is a concave function reflecting diminishing returns: the first few tokens in a sub‑step carry high information density, later ones add marginal value. Solving this yields an *exponential* decay of token allocation—most of \(B\) goes to the first few steps where context compression matters most.

**Non‑obvious insight:** The optimal budget distribution mirrors the *information bottleneck* principle: early passes act as a filter, compressing raw data into essential features. By allocating more tokens initially, we give the model enough “breathing room” to capture high‑level structure; later passes then refine details with fewer tokens. Thus extended thinking is not just a trick for long prompts—it’s an instance of principled information compression guided by convex optimisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
