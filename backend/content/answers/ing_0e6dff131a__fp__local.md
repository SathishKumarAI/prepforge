---
qid: ing_0e6dff131a__fp__local
question: 'Explain: Prompt caching — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 419
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:36:33-05:00'
sources: []
---

**Prompt Caching as a Form of Agentic Engineering**

At its core, a language model (LM) is an amortized function approximator: it maps a token sequence *x* to a distribution over next tokens \(p_\theta(y|x)\). When we run the same prompt repeatedly—say, “Translate this sentence” for many inputs—the LM must recompute gradients of its internal attention matrices for each instance. Prompt caching removes that redundancy by **storing the hidden‑state representation** of the prompt once and reusing it across all downstream queries.

Why is this optimal?  
1. **Computational geometry:** The transformer’s self‑attention operates on *keys* derived from the prompt tokens. These keys are invariant to the subsequent “input” tokens, so their dot products with any query can be precomputed.  
2. **Information bottleneck:** By caching the prompt’s representation we effectively compress the high‑dimensional prompt into a fixed‑size vector that preserves all mutual information needed for downstream tasks.  
3. **Agentic engineering principle:** The LM becomes an *agent* that delegates the heavy lifting of prompt interpretation to a reusable “knowledge base” (the cache), allowing it to focus its capacity on reasoning over the variable part.

**Non‑obvious insight:** Caching does more than speed up inference; it changes the **learning dynamics**. Because the cached representation is fixed during training, gradients flow only through the downstream layers, encouraging the model to learn *modular* behavior—prompt handling and task execution become disentangled modules. This modularity can be leveraged for continual learning: updating a new prompt simply adds a new cache entry without retraining the entire network.

In short, prompt caching is an elegant application of geometry and information theory that turns a static prompt into a reusable agentic component, yielding both efficiency gains and richer architectural structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
