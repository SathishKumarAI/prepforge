---
qid: ing_6b358fca2e__eli5__local
question: How does adapter merging work, and how do multi-LoRA serving and hot-swapping
  work in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 260
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:47-05:00'
sources: []
---

Think of a big language model as a huge library where every book is a “parameter” that tells the AI how to answer questions.  
**Adapter merging** is like adding a small, specialized reference guide next to the main books. Each guide (an adapter) covers one topic—say cooking or legal jargon—and contains only a few extra pages. When the model needs to talk about cooking, it consults both the big library and the cooking guide; the two sets of information are blended together, so the model stays general but can also be very good at that niche.

**Multi‑LoRA serving** works like having several tiny “mini‑libraries” (LoRAs) that live on separate shelves. In production you can hand the user’s request to any shelf; each LoRA adds a quick tweak to the base library, speeding up inference because only a few extra pages are read.

**Hot‑swapping** is simply moving one of those mini‑libraries in or out while the system keeps running—like swapping a new guide into the reference desk without closing the library. The model continues to serve requests, now with updated knowledge from the freshly swapped LoRA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
