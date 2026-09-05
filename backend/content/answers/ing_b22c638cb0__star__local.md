---
qid: ing_b22c638cb0__star__local
question: When do you fine-tune a VLM instead of prompting it, and what exactly do
  you unfreeze?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 325
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:11-05:00'
sources: []
---

**Situation** – In late 2024 I was building an internal FAQ chatbot for a fintech client that needed to interpret screenshots of bank statements and respond in plain English. The base ViLT model performed well on generic image‑captioning, but our dataset included domain‑specific symbols (e.g., “ACH”, “SWIFT”) and subtle layout cues like footers and watermarks that the pretrained weights ignored.

**Task** – I had to make the VLM reliably extract those nuances without blowing up inference latency or model size. The goal was a 95 % accuracy on a held‑out test set while keeping deployment under 1 GB.

**Action** – Instead of pure prompting, I fine‑tuned only the cross‑modal transformer layers that fuse image and text embeddings, freezing the early convolutional backbone to preserve general vision features. I added a small domain‑specific token vocabulary for banking terms and used mixed‑precision training on a 8‑GPU cluster. To avoid overfitting, I applied layer‑wise learning rate decay and scheduled warmup steps.

**Result** – The fine‑tuned model achieved 97 % accuracy on the test set, up from 82 % with prompting alone, while inference time increased by just 12 %. I learned that freezing lower layers keeps a VLM’s generalization intact, and that selectively unfreezing fusion heads yields high domain performance without massive parameter overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
