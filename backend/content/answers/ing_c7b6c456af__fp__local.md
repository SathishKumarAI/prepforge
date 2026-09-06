---
qid: ing_c7b6c456af__fp__local
question: Compare encoder-only, decoder-only, and encoder-decoder architectures. What
  is each used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 496
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:05:49-05:00'
sources: []
---

**Why the three “flavors” of transformer matter**

At its core a transformer learns a mapping \(f: \mathcal{X}\to\mathcal{Y}\) from tokens to tokens.  
The *architecture* dictates how that mapping is parameterised, what information flows where, and therefore which learning objective is most natural.

| Architecture | Flow of information | Typical loss | Common use‑case |
|--------------|---------------------|--------------|-----------------|
| **Encoder‑only** | Self‑attention on the input; no output head except a pooling or classification layer. | Cross‑entropy over a fixed label set (classification). | Document classification, sentence similarity, feature extraction for downstream models. |
| **Decoder‑only** | Autoregressive self‑attention: each position attends to all *previous* positions only. | Masked language‑model loss; next‑token prediction. | Text generation, summarisation, code completion – anything that benefits from a single stream of conditioned outputs. |
| **Encoder–decoder** | Encoder processes the source; decoder attends to encoder states while autoregressively generating the target. | Sequence‑to‑sequence cross‑entropy (teacher forcing). | Machine translation, question answering, image captioning where input and output have different modalities or structures. |

### Why each works

- **Encoders** collapse variable‑length sequences into a global representation; they’re optimal when the task is *recognition* rather than *generation*.  
- **Decoders** enforce causality: the next token can only depend on what has already been generated, mirroring the statistical process of language.  
- **Encoder–decoder** couples two directed graphs: one for “what to understand”, one for “how to express”. The attention bridge lets the model learn a *mapping* between heterogeneous spaces (e.g., French → English).

### Non‑obvious insight

The choice is not merely about data format; it reflects an **information bottleneck**. Encoders compress, decoders expand. In encoder–decoder models the bottleneck sits in the hidden states that must be rich enough to support *both* comprehension and expression. This dual pressure explains why these models are more data‑hungry but also more versatile than their single‑stream counterparts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
