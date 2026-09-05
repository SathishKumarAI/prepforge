---
qid: ing_1beaacd303__star__local
question: 'Explain: Untied vs. Tied Embeddings — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:18-05:00'
sources: []
---

**Situation** – At my last role, we were building a multilingual translation model for an e‑commerce platform that needed to support 12 languages with a single Transformer encoder‑decoder. Our initial experiments used tied token embeddings (the same matrix for input and output) because it saved memory and seemed standard.

**Task** – I had to evaluate whether untied embeddings would improve BLEU scores without blowing up the parameter count, and then decide on an architecture that balanced quality and inference speed for our edge devices.

**Action** – First, I re‑implemented the decoder’s embedding layer so that the output projection used a separate matrix. I added a small “projection head” (a 256‑dim linear + GELU) to map from the hidden state to the vocabulary space, which kept the total parameters under 5 % increase. Then I ran ablation studies on the WMT14 English‑German set, comparing tied vs untied on validation loss and BLEU. I also benchmarked GPU memory usage and latency on our production inference pipeline.

**Result** – Untied embeddings raised average BLEU from 28.4 to 29.7 (+1.3) while keeping inference latency within 12 ms per sentence on the same hardware. The extra 0.5 M parameters were acceptable given the quality gain, and I documented that untied embeddings help when the encoder and decoder have different vocabularies or when we need separate fine‑tuning for output tokens. This change was rolled out to production, improving user satisfaction scores by 4 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
