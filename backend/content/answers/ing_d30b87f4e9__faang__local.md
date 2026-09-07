---
qid: ing_d30b87f4e9__faang__local
question: 'Explain: Sinusoidal (Original Transformer) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 492
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:07-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *sinusoidal positional encoding* used in the original Transformer and how it relates to the internals of large‑language models (LLMs). I’ll assume the audience knows basic self‑attention, but not the math behind position handling.

**Approach**  
1. Describe why Transformers lack recurrence or convolution → need explicit positions.  
2. Present the sinusoidal formula and its properties.  
3. Show how it’s injected into token embeddings.  
4. Connect to LLMs: scaling, training, positional “peeking”, and fine‑tuning.

**Depth**  
The encoding is a matrix `PE[pos, 2i] = sin(pos / 10000^{2i/d_model})`, `PE[pos, 2i+1] = cos(...)`. It gives each dimension a unique wavelength so that any relative offset can be expressed as a linear combination of two frequencies. Because sine/cosine are continuous and differentiable, the model learns to extrapolate beyond seen positions. In practice we add `PE` to token embeddings before feeding them into multi‑head self‑attention:  
```
h_0 = E(x) + PE
for l in layers:
    h_l = LayerNorm(Attention(h_{l-1}) + h_{l-1})
```
LLMs keep this fixed; during training the attention weights learn to attend across positions. For very long contexts, some models replace sinusoidal with learned or relative encodings to reduce extrapolation errors.

**Edge cases**  
*Very short sequences*: the encoding can dominate if `d_model` is small.  
*Extrapolation beyond max position*: sine/cosine repeat every 2π, so far‑out positions may collide; some LLMs add a “position mask” or use rotary embeddings to mitigate.

**Optimize & communicate**  
To improve clarity I’d sketch the waveform and show that two orthogonal sinusoids give linear separability of offsets. I’d also mention that sinusoidal encodings are parameter‑free, thus memory‑efficient—an advantage in huge LLMs. Conclude by noting that while simple, this design underpins every Transformer‑based model from GPT‑2 to PaLM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
