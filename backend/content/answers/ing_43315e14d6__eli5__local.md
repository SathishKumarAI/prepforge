---
qid: ing_43315e14d6__eli5__local
question: 'Explain: The decision framework: prompt → RAG → fine-tune'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 280
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:04-05:00'
sources: []
---

Think of building a recipe‑book with the help of a smart chef.

1. **Prompt** – This is like asking the chef a specific question: “What’s a good dish for a rainy day?”  
   The prompt tells the model what you want to know or create.

2. **RAG (Retrieval‑Augmented Generation)** – Imagine the chef has a pantry full of ingredients (external documents). When you ask, the chef first checks the pantry for relevant items—spices, sauces, techniques—and brings them out. Then the chef mixes those ingredients with their own cooking knowledge to whip up an answer that’s fresh and tailored to your question.

3. **Fine‑tune** – After tasting the dish, you decide it needs a little more salt or a different spice blend. Fine‑tuning is like giving the chef extra practice on a specific style—training them further with a small set of recipes so they get better at that particular flavor. The model learns from these new examples and performs even closer to your exact taste.

So, you ask (prompt), the chef fetches relevant pantry items (RAG), cooks up a draft answer, then you refine the chef’s skills on that style (fine‑tune).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
