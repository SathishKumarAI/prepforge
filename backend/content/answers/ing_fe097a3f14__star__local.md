---
qid: ing_fe097a3f14__star__local
question: 'Explain: quick start — GitHub - karpathy/nanoGPT: The simplest, fastest
  repository for training/finetuning medium-sized GPTs. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 349
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:52-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with prototyping a conversational AI for an internal knowledge‑base chatbot. The team had no ML infrastructure, and we needed a fast way to train a medium‑sized GPT that could understand our domain language.

**Task:**  
Deploy a lightweight GPT model in under two weeks, fine‑tune it on 200 k company documents, and expose a simple inference API for the product team—all while staying within a $2K GPU budget.

**Action:**  
I chose nanoGPT because its “quick start” GitHub repo is minimal: just a single `train.py`, a lightweight tokenizer, and built‑in support for CUDA. I cloned the repo, patched the config to use mixed precision (`fp16`), and set up a custom dataset loader that streamed our docs into the tokeniser on the fly—avoiding memory bloat. Using PyTorch Lightning’s checkpoint callbacks, I logged loss every 500 steps, enabling early stopping when perplexity hit < 12. I also wrapped the inference script in FastAPI so the product team could call `/predict` with a text prompt.

**Result:**  
The fine‑tuned model achieved a perplexity of 10.3 on our validation set and answered 85% of user queries correctly within 300 ms latency, all trained on a single RTX 3090 for just 12 hours—well under budget. I learned that starting with a minimal repo like nanoGPT saves setup time, but careful data streaming and precision tuning are key to staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
