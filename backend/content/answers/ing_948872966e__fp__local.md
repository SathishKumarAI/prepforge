---
qid: ing_948872966e__fp__local
question: 'Explain: API-level Context Caching (Prompt Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 463
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:03-05:00'
sources: []
---

**Why a model should cache the “context” of a prompt**

When a language model processes an input sequence \((x_1,\dots ,x_n)\), each token is fed through a transformer stack that repeatedly recomputes hidden states for *every* position. The cost is proportional to \(n\cdot L\) (sequence length × layers). In many practical workloads the same prompt—say a system instruction or a user’s question—is reused across many downstream requests, while only the final “continuation” token changes.  

From an **information‑theoretic** viewpoint, the prefix \((x_1,\dots ,x_k)\) is a *deterministic* part of the input; it contributes no new entropy once computed. The model’s output distribution for any suffix depends only on this fixed prefix via the attention masks and cached key/value tensors. Thus, recomputing those activations offers zero marginal benefit.

**Derivation**

1. **Transformer forward pass**: \(h^l_i = \text{MultiHead}(h^{l-1}_{\le i})\).  
2. For a fixed prefix, all \(h^l_k\) for \(k\le k_{\text{prefix}}\) are identical across runs.  
3. Subsequent layers’ queries to these positions need only the *cached* key/value pairs; the rest of the computation (softmax over the cached keys, weighted sum) can be reused.

Hence *prompt caching* stores the intermediate tensors for the prefix and reuses them when generating new suffixes, reducing FLOPs from \(O(nL)\) to \(O((n-k)L + k_{\text{cache}}L)\).

**Non‑obvious insight**

Caching is not merely a speed trick; it also **regularizes** the model. By forcing reuse of exact hidden states, it reduces variance in gradient estimates during fine‑tuning on repetitive prompts, leading to more stable convergence—an effect often overlooked by practitioners who view caching solely as an inference optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
