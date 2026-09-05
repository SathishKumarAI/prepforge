---
qid: ing_3593402c1f__fp__local
question: Long context windows keep getting cheaper. Why not drop retrieval and stuff
  the whole repo into context for every request?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 436
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:22-05:00'
sources: []
---

**Why the “all‑in‑context” idea stalls**

At its core, an LLM must *condition* on useful information while keeping the conditioning tractable.  
If we feed every token of a repository (millions of lines) into the prompt, two things happen:

1. **Capacity saturation** – the model’s self‑attention network can only attend to a fixed number of tokens with reasonable computational cost.  Adding more tokens forces the attention weights to be spread thinly, diluting the signal and inflating perplexity.  
2. **Inference blowup** – decoding time grows linearly in the context length; even if token costs fall, the wall‑clock latency becomes prohibitive for real‑time use.

Retrieval solves this by *sparsifying* the conditioning: a lightweight index (often via embeddings) selects a handful of highly relevant snippets. The model then attends only to these few tokens, preserving capacity and keeping decoding fast. Moreover, retrieval decouples knowledge from the model parameters; updates or expansions of the repository can be made without retraining the network.

**Non‑obvious insight**  
Retrieval acts as an *implicit regularizer*. By forcing the model to focus on a small, highly relevant subset of data, it reduces overfitting to noise that would otherwise dominate when the entire corpus is presented. Thus, cheaper context windows do not automatically translate into better performance; they merely shift the optimization problem from “how many tokens can we process?” to “which tokens should we process?”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
