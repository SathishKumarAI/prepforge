---
qid: ing_1b936ed97f__eli5__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 309
total_tokens: 471
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:49-05:00'
sources: []
---

Think of a **RAG system** (Retrieve‑Augment‑Generate) like a chef who makes a dish from fresh ingredients, a recipe book, and a cooking style.

1. **Retrieval‑only** – The chef just grabs the right ingredients from the fridge.  
   *Use when* you only need factual answers that can be found in a single source (e.g., pulling a phone number or a definition).

2. **Retrieval‑augmented generation** – The chef still fetches ingredients but also reads a recipe book and then cooks a meal.  
   *Use when* the answer needs context or synthesis from several documents—like writing a short report that pulls facts from multiple studies.

3. **Hybrid retrieval‑generation with feedback loops** – After cooking, the chef tastes the dish, asks for adjustments, and refines it.  
   *Use when* you want iterative improvement: the system can ask follow‑up questions or re‑search to make the answer clearer or more accurate (e.g., troubleshooting a complex issue).

In all cases, “retrieval” means fetching relevant text from a database; “augmentation” is adding that text to the model’s input; and “generation” is the model producing new language. This stepwise approach lets you pick the right balance of speed, accuracy, and depth for your task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
