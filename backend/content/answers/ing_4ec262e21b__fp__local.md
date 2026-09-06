---
qid: ing_4ec262e21b__fp__local
question: What is prompt (prefix) caching, and why is it one of the biggest cost levers
  available?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 523
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:52:51-05:00'
sources: []
---

**Prompt (prefix) caching – a first‑principles view**

A transformer language model processes an input sequence token by token, computing hidden states \(h_t\) from the previous state and the new token via self‑attention:
\[ h_t = \text{Attention}(h_{<t}, x_t). \]
Each step requires all pairwise dot products of the \(t-1\) past queries with the current key, an \(\mathcal O(t^2)\) cost.  
When a user submits several prompts that share a common prefix—say “Once upon a time,” followed by different endings—the first few tokens are identical in every run. A *prefix cache* stores the intermediate activations \(h_{1},\dots,h_k\) for those shared tokens. Subsequent prompts can then **reuse** these cached activations instead of recomputing them, reducing both the quadratic self‑attention and the linear feed‑forward work.

Why this is a major cost lever:

| Cost | Without cache | With cache |
|------|---------------|------------|
| FLOPs per token | \(\mathcal O(n^2)\) | \(\mathcal O((n-k)^2)+\text{cache look‑up}\) |
| Latency per request | High for long prefixes | Near zero for cached part |
| Energy | Linear in total tokens processed | Sublinear when many requests share a prefix |

Because commercial deployments often serve hundreds of thousands of similar prompts per day, the savings multiply.  

**Non‑obvious insight:**  
Caching is not just “save time”; it turns inference into a *dynamic programming* problem over prefixes. The cache can be viewed as a memoization table that exploits the Markov property of transformer states: once \(h_k\) is known, any future computation depends only on it and new tokens. This perspective explains why careful engineering (e.g., storing key/value pairs in a contiguous tensor) yields both CPU‑bound and GPU‑bound speedups—something many overlook when they treat caching as a simple “skip‑the‑first‑few‑tokens” trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
