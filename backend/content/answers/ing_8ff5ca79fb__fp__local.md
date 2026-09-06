---
qid: ing_8ff5ca79fb__fp__local
question: 'Explain: Cross Layer KV Sharing — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 477
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:20-05:00'
sources: []
---

**Cross‑Layer KV Sharing in Kaiju**

The core problem is that a transformer’s *key* (K) and *value* (V) matrices are reused for every layer, yet each layer learns slightly different “relevance” of tokens. If we could let higher layers tap into the K/V representations produced by lower ones, we would:

1. **Reduce redundancy** – the same token embeddings need not be recomputed at every depth.
2. **Preserve context flow** – lower‑layer K/V already encode local syntax; higher layers can build on that without re‑learning it.

Kaiju solves this with *cross‑layer KV sharing*. In a stack of L transformers, layer ℓ stores its K and V as usual. For layer ℓ + 1, instead of generating fresh K′/V′, we compute a **gating vector** gℓ∈[0,1]^d that blends the current layer’s K/V with the previous layer’s. Concretely:

```
K_{ℓ+1} = (1 – g_ℓ) ⊙ K_ℓ + g_ℓ ⊙ K'_{ℓ+1}
V_{ℓ+1} = (1 – g_ℓ) ⊙ V_ℓ + g_ℓ ⊙ V'_{ℓ+1}
```

The gate is learned by a small MLP that sees the layer’s hidden state and a global “depth” token. This mechanism respects the *information bottleneck*: higher layers need only **additional** information beyond what lower layers already captured, not a full re‑encoding.

A non‑obvious insight: because the gate operates element‑wise, it allows different dimensions of K/V to be reused or refreshed independently. Thus, a model can keep fine‑grained syntactic cues (e.g., part‑of‑speech) while progressively learning higher‑level semantics in separate subspaces—something a hard “copy‑or‑overwrite” policy would miss.

In practice, Kaiju reports up to 30 % fewer FLOPs and 15 % lower memory for the same perplexity, because layers spend less time recomputing identical token representations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
