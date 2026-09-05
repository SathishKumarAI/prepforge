---
qid: ing_a3c682cbce__eli5__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 279
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:52-05:00'
sources: []
---

Think of an AI language model as a large library that knows many books but isn’t tuned for your exact taste.  
*Prompt engineering* is like giving the librarian a clever note so they pull just the right chapters.  
*RAG (Retrieval‑Augmented Generation)* is like handing the librarian a reference guide that points to fresh, external documents while they answer.  

You **fine‑tune** when you need the model itself to behave consistently in a narrow domain—like training a personal chef who learns your favorite recipes instead of asking a general cook for suggestions each time. Fine‑tuning rewrites part of the model’s “knowledge” so it remembers your style automatically.

*Full fine‑tuning* is like retraining the entire chef; it gives maximum control but costs time and data.  
*LoRA (Low‑Rank Adaptation)* is a lighter tweak, adding a few new “spices” to the existing recipe—fast and less resource‑heavy, suitable when you have limited examples.

So, choose fine‑tuning when you need reliable, domain‑specific answers without extra prompts or searches; pick LoRA for quick, low‑cost adjustments, full fine‑tuning when precision is paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
