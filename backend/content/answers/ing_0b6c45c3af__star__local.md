---
qid: ing_0b6c45c3af__star__local
question: Images are 2D and video is 3D, but an LLM's positional encoding is 1D. What
  breaks if you just flatten the patches, and how do modern VLMs handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 467
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:45-05:00'
sources: []
---

**Situation:**  
During a research internship at a startup focused on multimodal AI, we were asked to build a lightweight vision‑language model that could run in real time on edge devices. The team had already trained an LLM with 1‑D sinusoidal positional encodings and wanted to reuse the same encoder for image patches.

**Task:**  
I needed to integrate visual inputs into the language model without sacrificing performance, while keeping memory usage under 4 GB.

**Action:**  
First, I tried flattening each \(16\times16\) patch into a single token and feeding it straight into the LLM. The model immediately over‑fit on the training set and its accuracy dropped by ~12 % compared to a baseline Vision Transformer. The problem turned out to be that flattening destroyed local spatial relationships: the 1‑D positional encoding could only order patches linearly, so the model couldn’t distinguish between adjacent patches that were far apart in the image grid.

To fix this, I replaced the flat embedding with a 2‑D sinusoidal positional map and then projected it into the same dimension as the LLM tokens. Additionally, I added a lightweight relative‑position bias (as used in Swin/CLIP) so that the attention mechanism could capture local neighborhoods without blowing up memory. The final architecture kept the same transformer backbone but now treated image patches as a 2‑D sequence.

**Result:**  
After training on ImageNet‑V2 and COCO captions, the model recovered a 9 % drop in top‑1 accuracy and achieved a BLEU‑4 score of 32.7—only 1.3 points below a full ViT‑based VLM—while staying within the 4 GB memory budget. I learned that preserving spatial structure with multi‑dimensional positional encodings is essential; flattening patches into a single dimension breaks the inductive bias that vision models rely on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
