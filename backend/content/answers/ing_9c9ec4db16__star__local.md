---
qid: ing_9c9ec4db16__star__local
question: When would you fine-tune a model instead of using prompting or RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 322
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:14-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a prototype for an internal customer‑support chatbot at a fintech firm. The product required accurate compliance‑related answers in multiple languages and had to adapt quickly to new regulatory changes. Our baseline GPT‑4 model gave decent fluency, but the precision on legal terminology dropped below 70 % when we added Spanish prompts.

**Task** – I needed a solution that could deliver >90 % factual accuracy for domain‑specific queries while still supporting multilingual input and rapid updates from new regulations.

**Action** – I gathered a curated dataset of 12,000 regulatory FAQ pairs (English, Spanish, French) and built a fine‑tuning pipeline using Hugging Face’s Trainer with LoRA adapters to keep the base weights frozen. We used early stopping on validation loss and performed a human‑in‑the‑loop review for each epoch. I also set up an automated nightly script that pulls new regulatory bulletins, adds them to the training set, and triggers incremental fine‑tuning.

**Result** – Accuracy jumped from 70 % to 93 % across all languages; response latency stayed under 800 ms. The model’s confidence scores helped us flag uncertain answers for human review. I learned that when domain specificity and compliance are critical, a small, focused fine‑tune can outperform prompting or RAG by eliminating hallucinations and reducing the need for external retrieval at runtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
