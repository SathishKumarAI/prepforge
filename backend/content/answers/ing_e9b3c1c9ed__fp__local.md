---
qid: ing_e9b3c1c9ed__fp__local
question: 'Explain: Disk vs. VRAM Caching — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 345
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:48-05:00'
sources: []
---

**Why a language model needs two distinct caches**

A transformer generates tokens by applying the same attention matrix to *all* past key‑value pairs (KV) it has seen. The fundamental cost is that each KV pair must be read from memory every step. If we store those pairs on disk, we would pay an I/O latency of tens of milliseconds per token—unacceptable for real‑time inference. Hence we cache the *active* KV in VRAM so that attention can be computed in a few hundred nanoseconds.

The second cache, called **context caching**, deals with the fact that many requests share long prefixes (e.g., “Once upon a time …”). The model’s weights are static; only the context changes. By keeping the *activations* of these shared prefixes on disk and re‑loading them when needed, we avoid recomputing them from scratch. This is analogous to memoization in dynamic programming: once a subproblem (the prefix) is solved, its solution can be reused.

**Non‑obvious insight**

Most people think caching merely reduces memory traffic. In reality, *context caching* also changes the optimisation landscape: it turns a sequential dependence into an **offline precomputation problem**. By precomputing and storing only the *necessary* activations (those that will actually be reused), we can trade off disk space for compute in a way that is optimal under a fixed latency budget—exactly what modern large‑scale inference engines aim to achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
