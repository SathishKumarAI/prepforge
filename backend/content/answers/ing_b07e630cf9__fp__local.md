---
qid: ing_b07e630cf9__fp__local
question: 'Explain: Title: Flamingo: a Visual Language Model for Few-Shot Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 334
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:38-05:00'
sources: []
---

**Flamingo: Visual‑Language few‑shot learning**

The core problem is *joint vision–language reasoning*: given an image and a natural‑language query, produce a correct answer, even when only a handful of annotated examples are available. Traditional pipelines either fine‑tune separate CNNs and language models or train massive multimodal networks on millions of paired images and captions—both expensive and brittle.

Flamingo solves this by **parameter‑efficient prompting**: it freezes a large pretrained vision transformer (ViT) and a text transformer (GPT‑style), then injects *cross‑modal adapters* that learn to align visual tokens with textual ones. These adapters are tiny compared to the backbone, so only a few thousand gradient steps on a handful of examples suffice. The key insight is that **the pretraining objective already encodes a rich joint embedding space**; what remains is to teach the adapters how to *select* and *weight* relevant visual features for a given linguistic query.

Mathematically, Flamingo optimizes a cross‑entropy loss over the language model’s softmax output while regularizing adapter weights with an L2 penalty. The non‑obvious benefit: because the adapters operate on *token‑level attention maps*, they can exploit *compositionality*—the same visual pattern can be referenced differently in text (e.g., “red cube” vs. “cube with a red surface”). This compositional flexibility is why Flamingo generalizes well to unseen prompts and domains without catastrophic forgetting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
