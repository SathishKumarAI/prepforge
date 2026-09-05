---
qid: ing_32b1fdf068__eli5__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 263
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:12-05:00'
sources: []
---

Think of a RAG query like ordering a custom pizza at a busy pizzeria.

**Latency** is how fast the pizza arrives.  
1. **Retrieve** – the kitchen looks up the ingredients (searching a database).  
2. **Generate** – the chef mixes and cooks them into a finished dish (the language model writes the answer).

The **cost budget** is the money you’re willing to spend on that pizza.

When you want to keep both quick delivery and low cost, you usually start by optimizing the *retrieval* step:

1. **Fast index** – use a well‑structured search engine so the kitchen finds ingredients instantly.  
2. **Small but relevant set** – ask for just enough pieces (top‑k documents) so the chef doesn’t waste time and money on fluff.

Once retrieval is snappy, you can turn to the generation step: choose a cheaper, smaller language model or limit its length.  

So, first make the “search” quick and lean; then fine‑tune how much “cooking” the model does. This keeps both latency low and costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
