---
qid: ing_481352b7e0__eli5__local
question: 'Explain: Image Tokenization (Vision Transformers)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 210
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:11-05:00'
sources: []
---

Imagine you have a giant mosaic made of tiny colored tiles—each tile is one pixel in an image. A Vision Transformer treats this mosaic like a sentence, but instead of letters, it reads *groups* of tiles called **patches**. Think of each patch as a small picture‑book page: you look at the whole page, not just one word on it. The transformer first cuts the mosaic into equal‑sized patches (for example, 16×16 pixels). Each patch is flattened into a single long list of numbers and then fed through a tiny neural “encoder” that turns it into a fixed‑length **vector**—just like turning a page into a summary sentence. These vectors become the tokens that the transformer processes in order, just as it would read words in a text. This simple grouping lets the model understand local patterns before stitching them together for global understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
