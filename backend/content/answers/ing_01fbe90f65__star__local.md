---
qid: ing_01fbe90f65__star__local
question: 'Explain: No Chunking Strategy — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 311
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:18-05:00'
sources: []
---

**Situation** – At a fintech startup, we were building an NLP pipeline to extract key data from customer emails for fraud detection. The incoming documents were unstructured PDFs and scanned images, totaling ~10 GB of text per month.

**Task** – My goal was to ingest the entire corpus into our transformer‑based classifier without losing context or overwhelming GPU memory, aiming for <24 h processing time and >85 % classification accuracy.

**Action** – I decided against chunking, hoping a single pass would preserve full document semantics. We fed raw 50 k‑token PDFs straight to the model, which caused OOM errors on our 16 GB GPUs. Training stalled after two epochs; inference latency ballooned to ~12 s per email. To debug, I profiled memory usage and saw that the attention matrix grew quadratically with token count. I then introduced a sliding‑window chunking strategy (1 k tokens with 200‑token overlap) and fine‑tuned positional embeddings to preserve order across chunks.

**Result** – Processing time dropped from ~12 h to under 3 h, GPU usage fell below 70 %, and accuracy improved to 92 %. I learned that ignoring chunking is a classic anti‑pattern: it breaks scalability and can silently degrade model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
