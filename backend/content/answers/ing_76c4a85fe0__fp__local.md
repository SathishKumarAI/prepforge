---
qid: ing_76c4a85fe0__fp__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 433
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:16:53-05:00'
sources: []
---

### From the Ground Up

The core problem is **parameter sharing**: a single neural backbone can encode language; each downstream feature merely needs a *different interpretation* of that encoding.  
1. **Separation of concerns** – the base model learns *what* a sentence means, while a lightweight “adapter” decides *how* to use it for a task.  
2. **Optimization principle** – we keep most weights fixed (the shared encoder) and only fine‑tune a tiny fraction, reducing overfitting and storage.  
3. **Probabilistic view** – each adapter learns a conditional distribution \(P(y|h)\) over the hidden representation \(h\), allowing us to sample or adjust temperature for tone, rewrite style, etc., without altering the core language model.

### Practical Scheme

- **Task‑specific heads**: a small linear layer + softmax (or a prompt vector) per feature.  
- **Adapter modules**: 2–3 dense layers inserted after each transformer block; only these are trained per task.  
- **Dynamic routing**: a learned gating network selects which adapters to activate based on the input, enabling *on‑the‑fly* multi‑task inference without duplication.

### Non‑obvious Insight

Because adapters are shallow, they can be *conditioned on continuous control signals* (e.g., desired formality level). By interpolating between adapter weights, you obtain a continuum of tones without extra models—essentially turning the model into a **continuous multitask engine**. This leverages the same geometry that underlies linear interpolation in word‑embedding space, but applied to task‑specific parameter subspaces.

In short: keep one heavy backbone; attach tiny, trainable adapters or heads per feature; optionally route them adaptively. This satisfies storage limits while preserving performance across all tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
