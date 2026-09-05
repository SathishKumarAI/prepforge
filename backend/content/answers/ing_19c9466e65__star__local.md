---
qid: ing_19c9466e65__star__local
question: How Is Fine-Tuning Done? — Fine-Tuning Explained for Noobs (How Pretrained
  Models Learn New Skills)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 330
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:09-05:00'
sources: []
---

**Situation** – In early 2024 I was tasked with adding a domain‑specific dialogue capability to our customer support chatbot, which was originally built on a general‑purpose GPT‑3.5 base model. The existing model answered generic questions well but struggled with industry jargon and compliance language.

**Task** – My goal was to fine‑tune the pretrained model so it could accurately respond to 200+ unique product queries while maintaining overall fluency, all within a two‑week sprint and under a $3,000 GPU budget.

**Action** – I first curated a balanced dataset of 5,000 labeled Q&A pairs from internal knowledge bases, then used Hugging Face’s `Trainer` API with a LoRA (Low‑Rank Adaptation) adapter to reduce trainable parameters to ~1.2M. Training ran on an A100 for 12 hrs at 4 GB per GPU, using mixed precision and gradient checkpointing to stay within memory limits. I monitored loss curves, performed early stopping when perplexity plateaued, and did a quick sanity‑check with a validation set of 500 unseen questions.

**Result** – Post‑deployment, the fine‑tuned model cut customer wait times by 35% and increased first‑contact resolution from 68% to 82%. I learned that selective parameter freezing (LoRA) can dramatically lower compute costs without sacrificing performance, and that a small, high‑quality dataset often beats large noisy corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
