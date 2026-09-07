---
qid: ing_0e5267ae55__aws__local
question: When would you skip parsing entirely and retrieve over page images with
  a visual retriever like ColPali?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 374
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:10-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of an e‑commerce search that served 50 M users/day. The product team wanted to surface “look‑alike” items from user‑generated photos in real time.

**Action**  
I evaluated three approaches: (1) full OCR + NLP pipeline, (2) hybrid text+image parsing, and (3) pure visual retrieval with ColPali.  
After profiling the OCR path I found a 35 % CPU spike and a 0.8 s latency per request – unacceptable for our SLA. Using **AWS SageMaker** to host a ColPali model allowed us to batch 64 images, cutting inference time to 120 ms and cost to $0.0004 per image. I also set up an **S3 event trigger + Lambda** to preprocess thumbnails on upload, ensuring the model always received 256×256 pixels.

**Result**  
Deploying ColPali dropped search latency by 70 % (from 1.2 s to 360 ms) and increased click‑through rate for visual recommendations from 3.4 % to 6.8 % (+100 % lift). The cost per request fell by 50 %, freeing $15k/month for other features.

**Reflection**  
I owned the decision, dove deep into profiling data, and prioritized user experience over a more complex pipeline. I documented lessons on model warm‑up trade‑offs so future teams could skip parsing when visual similarity dominates.  

> **Leadership Principles:** Customer Obsession, Ownership, Dive Deep, Bias for Action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
