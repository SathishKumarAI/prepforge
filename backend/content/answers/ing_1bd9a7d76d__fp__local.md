---
qid: ing_1bd9a7d76d__fp__local
question: 'Explain: Prefill and Decode Phases — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 587
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:05:12-05:00'
sources: []
---

### Prefill‑and‑Decode: The Two‑Stage Inference Engine of Modern Transformers  

When a language model receives an input prompt, it must **transform that sequence into the next token** while respecting its learned distribution over all tokens. This process can be split into two mathematically distinct phases:

| Phase | What it does | Why it’s necessary |
|-------|--------------|--------------------|
| **Prefill** | Processes *all* input tokens in parallel, producing hidden states for each position (via self‑attention). | The Transformer’s attention mechanism is strictly quadratic in sequence length; by computing the full context once, we avoid repeated work for every subsequent token. |
| **Decode** | Generates tokens one at a time, reusing the cached key/value pairs from prefill and extending them with new queries. | Each new token depends on all previous ones; incremental decoding keeps the cost linear in the number of generated tokens while preserving exact attention over the growing sequence. |

#### Derivation from First Principles

1. **Objective**: Maximize \(p(x_{t+1}\mid x_1,\dots,x_t)\) for each time step \(t\).  
2. The Transformer’s self‑attention layer evaluates \(\mathbf{QK}^\top/\sqrt{d_k}\) for *every* pair of positions. For a prompt of length \(L\), this is an \(O(L^2)\) operation.  
3. If we were to recompute this from scratch after each generated token, the cost would balloon to \(O((L+T)^2)\) for \(T\) outputs—impractical.  
4. **Prefill** computes \(\mathbf{QK}^\top\) once for the prompt: an \(O(L^2)\) operation that yields all hidden states.  
5. **Decode** then only needs to evaluate attention for the new query token against the *cached* keys/values of length \(L+t-1\), an \(O(L+t)\) cost per step, i.e., linear in sequence length.

#### Non‑Obvious Insight

The cache’s **key/value pairs are not merely speed‑ups; they encode a form of memory** that preserves the *exact* context seen during prefill. Because keys/values are fixed once computed, decoding is *deterministic* and fully reproducible—an essential property for applications like reproducible research or secure inference where any deviation could imply leakage or bias. Thus, prefill‑and‑decode isn’t just a computational trick; it guarantees that the model’s probabilistic semantics remain intact while enabling practical latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
