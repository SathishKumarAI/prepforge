---
qid: ing_f0b368adb2__star__local
question: 'You need one embedding space for your own domain: product photos, spec
  sheets as PDFs, and text queries. Off-the-shelf CLIP is not good enough. How do
  you build it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 348
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:24-05:00'
sources: []
---

**Situation** – At my previous e‑commerce startup we were launching a new visual search feature that had to rank product images, spec‑sheet PDFs, and user text queries in the same relevance space. The public CLIP model performed poorly on our PDF content and the image style was too generic for our niche camera gear.

**Task** – Build a single embedding space that could accurately map all three modalities so that a user’s typed question or photo would retrieve the correct product and its spec sheet within 0.5 seconds per query.

**Action** – I first curated a balanced dataset: 20k product images, 15k annotated PDF excerpts, and 10k manually‑crafted text queries with relevance labels. Using PyTorch Lightning, I pre‑trained a multimodal Transformer from scratch on the CLIP objective but added a *PDF‑to‑image* branch that rasterised PDF pages into high‑resolution thumbnails before embedding. I introduced contrastive loss between image–text and PDF–text pairs, and fine‑tuned with a margin‑based ranking loss on our relevance triplets. For speed, I distilled the encoder to 6 layers and quantised weights to 8‑bit using ONNX Runtime.

**Result** – The new model reduced mean reciprocal rank from 0.32 (CLIP) to 0.68 on our internal test set and cut query latency to 450 ms on a single GPU. I learned that modality‑specific preprocessing and joint contrastive training can dramatically outperform off‑the‑shelf models when the domain is narrow and data are scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
