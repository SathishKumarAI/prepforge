---
qid: ing_9141f0f8b9__fp__local
question: 'Explain: Just-in-Time Loading — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 503
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:04-05:00'
sources: []
---

### Why *Just‑in‑Time Loading* (JIT) is the natural solution

When a large language model (LLM) answers a query it **must** decide which parts of its knowledge base to bring into active memory. If we load everything at once, we waste compute and hit token limits; if we load nothing, the answer may be incomplete.  
Formally, let \(S\) be the set of all *semantic snippets* in the system and \(q\) a user query. The goal is to select a subset \(R \subseteq S\) that maximises relevance while keeping \(|R|\leq L\) (the token budget). This is an instance of **knapsack‑style submodular optimisation**: each snippet has a value \(v_i(q)\) (estimated by similarity or retrieval score) and a cost \(c_i\) (its length in tokens). The optimal subset maximises \(\sum_{i\in R} v_i(q)-\lambda \sum_{i\in R} c_i\).

**JIT loading implements this optimisation online.**  
1. *Cold‑start*: the model receives only a coarse sketch of \(q\) and a small cache of high‑value snippets (e.g., frequently used facts).  
2. *Progressive expansion*: as the answer unfolds, the model queries an external index for snippets whose marginal value justifies their cost, fetching them on demand.  
3. *Budget control*: after each fetch, the remaining token budget is recomputed; if exhausted, the process stops and the model degrades gracefully.

### Non‑obvious insight

Because JIT loading treats retrieval as a **dynamic decision process**, it naturally aligns with *reinforcement learning* over the token budget: the “reward” of fetching a snippet is not just its immediate usefulness but also how it changes future inference paths. This perspective explains why systems that treat retrieval as a static pre‑step often underperform— they miss the opportunity to adaptively reallocate tokens based on evolving context, leading to suboptimal coverage or wasted bandwidth.

In short, JIT loading turns context engineering into an online knapsack problem, enabling LLMs to respect token limits while still delivering rich, relevant answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
