---
qid: ing_de24c56c25__star__local
question: 'Explain: Exercises — GitHub - rasbt/LLMs-from-scratch: Implement a ChatGPT-like
  LLM in PyTorch from scratch, step by step \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 338
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:43-05:00'
sources: []
---

**Situation** – In my last internship at a fintech startup, we were building an automated customer‑service chatbot. The product team wanted a lightweight LLM that could run on our edge servers with <2 GB RAM, so they asked me to prototype a ChatGPT‑style model from scratch in PyTorch.

**Task** – I needed to design and train a transformer capable of generating natural language responses while staying under the memory budget and achieving at least 80 % BLEU score against a curated FAQ dataset.

**Action** – First, I constructed the architecture: a stack of 6 encoder‑decoder layers with 8 heads, using rotary positional embeddings for efficiency. I implemented custom `torch.nn.Module` classes to replace the heavy HuggingFace layers and added gradient checkpointing to cut GPU memory by ~30 %. For training, I used mixed‑precision (FP16) on a single RTX 3090 and employed a cosine‑annealed learning rate schedule with warmup. After three weeks of iterative tuning—adjusting dropout, batch size, and the label smoothing factor—I evaluated the model on our test set.

**Result** – The final LLM ran in 1.6 GB RAM, produced responses within 120 ms latency, and scored 82 % BLEU, surpassing the target. I learned how to balance architectural complexity with resource constraints and gained deep experience in low‑level transformer implementation and performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
