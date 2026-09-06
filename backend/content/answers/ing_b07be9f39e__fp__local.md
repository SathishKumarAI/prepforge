---
qid: ing_b07be9f39e__fp__local
question: 'Explain: Learned Absolute — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 381
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:38-05:00'
sources: []
---

**Learned Absolute (LA) – a subtle but crucial component of modern transformer‑based language models**

At its core, LA solves the *position‑bias* problem: token embeddings alone are agnostic to where they appear in a sequence. Without a positional cue, the model cannot distinguish “the dog barks” from “barks the dog”. The simplest solution is to add fixed sinusoidal vectors (as in Vaswani et al.), but this forces the network to learn a mapping between raw positions and their influence on downstream layers.

LA replaces that hand‑crafted signal with *learned* position embeddings that are **absolute**—each token gets its own dedicated vector independent of context. The derivation follows from treating the transformer as a function \(f(x_1,\dots,x_n)\) where each \(x_i\) is an embedding plus a positional bias. By allowing the bias to be optimized jointly with all other parameters, we let the model discover the *optimal* geometry for positioning: a manifold that balances local coherence (adjacent tokens) and global structure (long‑range dependencies).

**Non‑obvious insight:**  
Because LA vectors are independent of token identity, they can *compress* positional information into a low‑dimensional subspace that aligns with the model’s internal attention patterns. In practice this yields a “soft” notion of distance: tokens far apart in the sequence may still have similar LA vectors if the model learns that their interaction is semantically equivalent (e.g., repeated clauses). Thus, LA acts as an implicit *attention‑aware* positional regularizer, reducing the burden on self‑attention to infer position from content alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
