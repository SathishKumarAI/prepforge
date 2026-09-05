---
qid: ing_57df99ff0b__star__local
question: 'Explain: finetuning — GitHub - karpathy/nanoGPT: The simplest, fastest
  repository for training/finetuning medium-sized GPTs. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 395
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:27-05:00'
sources: []
---

**Situation**  
At my last job we had a proprietary chatbot that was great at answering FAQs but struggled with domain‑specific jargon from the legal department. The product manager asked me to improve its accuracy on legal queries without training a brand new model from scratch.

**Task**  
I needed to take an existing medium‑sized GPT (the 1.3 B parameter NanoGPT base) and fine‑tune it on a curated corpus of legal documents, ensuring the final model stayed under 2 GB so it could run in our on‑prem servers with a single GPU.

**Action**  
I cloned the `karpathy/nanoGPT` repo, configured the `config.json` to use the `1.3B` checkpoint and set `max_seq_length` to 1024 for longer legal passages. I prepared a 200 k‑token dataset from our internal PDFs, tokenized it with the same GPT‑2 tokenizer used by NanoGPT, and split it into training/validation sets (90/10). Using the repo’s `train.py`, I ran a single‑GPU fine‑tuning job on an NVIDIA RTX 3090 for 12 k steps, monitoring loss every epoch. To prevent catastrophic forgetting of general language skills, I added a small learning‑rate warm‑up and used gradient clipping.

**Result**  
After fine‑tuning, the model’s F1 score on our legal test set jumped from 0.62 to 0.81—a 30 % relative improvement—while inference latency stayed below 150 ms per query. I learned that a lightweight repo like NanoGPT lets you rapidly adapt large language models with minimal compute, and that careful dataset curation plus learning‑rate scheduling is key to balancing domain expertise with generality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
