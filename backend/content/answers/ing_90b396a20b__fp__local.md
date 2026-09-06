---
qid: ing_90b396a20b__fp__local
question: 'Explain: Language Support Overview — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 392
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:00-05:00'
sources: []
---

**Why the Sarvam API lists “Language Support” per model**

At its core, a language‑model is a probability distribution \(P(w_1,\dots ,w_T)\) over token sequences.  
Training on a corpus fixes a *vocabulary* \(\mathcal V\); every word \(w\in\mathcal V\) becomes an index in the embedding matrix and the softmax layer.  
If a model is exposed only to English during training, its embedding space and output logits are calibrated for that language’s token statistics.  Adding support for another language requires either (1) *multi‑tokenization*—embedding the new tokens into the same space—or (2) *parameter sharing* across languages so that cross‑lingual patterns can be exploited.

The Sarvam API therefore exposes a **Language Support** field to let users know which tokenizers and embeddings are loaded.  It is not just cosmetic: the model’s loss surface, gradient flow, and inference speed all depend on the tokenizer’s size and vocabulary overlap.  When you ask for “fr‑FR”, the API swaps in a French sub‑word table; if the model was never trained with French data, its predictions will be noisy—exactly what the docs warn against.

**Non‑obvious insight**  
The *language tag* is not a mere flag—it determines which **attention masks** and **position encodings** are applied.  In multilingual setups, positional embeddings can be shared across languages to preserve syntactic structure, but the token‑type embeddings must differ; otherwise the model cannot distinguish between language contexts, leading to catastrophic interference. This subtle distinction is why Sarvam lists supported languages per model rather than a blanket “any‑language” promise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
