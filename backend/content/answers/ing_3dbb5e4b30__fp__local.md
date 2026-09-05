---
qid: ing_3dbb5e4b30__fp__local
question: What is an attention sink, why does it exist, and what breaks if you evict
  it from the KV cache?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 440
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:33-05:00'
sources: []
---

**Attention sinks** arise in transformer‑based language models when a few high‑probability tokens dominate the query–key similarity matrix during decoding.  
*Why they exist:* In autoregressive generation, each new token \(x_t\) attends to all previous positions \(\{x_{<t}\}\). If some past token (or small set of tokens) has an unusually large dot‑product with every query—often because it is a highly frequent, syntactically or semantically central word—the attention weights collapse onto that position. Mathematically, for queries \(Q\), keys \(K\), the softmax over \(\frac{Q K^\top}{\sqrt d}\) yields a vector heavily concentrated on one index; this is an *attention sink*. It reflects the model’s belief that “everything depends on this token,” which can be useful (e.g., a subject pronoun) but also harmful if it suppresses diversity.

*What breaks when evicting from KV cache:* The key‑value cache stores past activations so that subsequent layers need not recompute them. If the sink’s key/value pair is removed, later layers receive incomplete context: the softmax no longer has a dominant entry, causing the attention distribution to spread over many low‑confidence keys. This alters the downstream hidden states and can shift the model into a different local optimum, often degrading perplexity or producing incoherent continuations.

*Non‑obvious insight:* An attention sink is not merely a “bad” artifact; it embodies the model’s *latent information bottleneck*. By forcing most queries to route through a single key, the transformer compresses the entire history into a concise representation. Removing that key breaks the bottleneck and forces the network to re‑allocate capacity, which may expose hidden dependencies but also destabilizes learned compression schemes. Thus, attention sinks are both a symptom of efficient information flow and a fragile point in cache‑based inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
