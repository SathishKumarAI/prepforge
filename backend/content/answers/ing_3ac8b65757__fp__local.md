---
qid: ing_3ac8b65757__fp__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 443
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:49-05:00'
sources: []
---

**Prefill/Decode Disaggregation in Large‑Scale AI**

The *fundamental problem* is that inference on a transformer requires two distinct operations:

1. **Prefilling** – generating the hidden states for all positions of a *fixed* context (e.g., a prompt or source sentence).  
2. **Decoding** – sequentially producing tokens, each conditioned on previously decoded tokens.

Both involve attention over the same key‑value pairs but with different computational patterns.  

### Why they must be separated

- **Parallelism vs. Sequentiality**: Prefilling can exploit massive GPU parallelism because every token in the context is processed independently. Decoding, however, is inherently sequential; each step depends on the previous output, limiting parallel throughput.
- **Memory locality**: During decoding we only need to access the *last* key‑value pair of the current prefix, whereas prefilling must materialize all pairs upfront. Keeping these phases separate lets us cache or stream data efficiently.

### Deeper Principle

This division mirrors **dynamic programming vs. memoization** in algorithms: prefill is a one‑time cost that “pre‑computes” reusable substructures (the context’s key‑value map). Decoding then uses these cached structures, reducing per‑token overhead. It also aligns with the *information bottleneck*: prefilling compresses the input into a fixed representation; decoding expands it under constraints of the model.

### Non‑obvious Insight

Most practitioners treat decoding as a simple loop over the same operations used in prefill. The key insight is that **attention weights during decoding change only marginally** compared to the full context. By reusing the *prefilled* attention matrices (or their compressed forms) and updating them with a lightweight incremental scheme, we can avoid recomputing the entire softmax per step, yielding substantial speedups without sacrificing quality.

Thus, separating prefill from decode is not an arbitrary engineering choice—it’s a principled optimization that exploits the structure of transformer inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
