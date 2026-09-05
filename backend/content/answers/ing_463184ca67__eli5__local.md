---
qid: ing_463184ca67__eli5__local
question: How do you evaluate the generation side of RAG - faithfulness, relevance,
  and citation quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 224
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:27:44-05:00'
sources: []
---

Imagine a cooking show where a chef (the generator) creates a dish from ingredients that were already prepared by another station (retrieval). To judge the meal you look at three things:

1. **Faithfulness** – Does the dish only use the ingredients the chef was given? If the chef adds something that wasn’t in the pantry, it’s unfaithful.  
2. **Relevance** – Are the added flavors fitting for the requested cuisine? A spicy sauce on a sweet dessert is irrelevant.  
3. **Citation quality** – Does the chef point back to where each ingredient came from (e.g., a label or recipe card)? Good citations show the source and let you check it yourself.

In RAG, we test faithfulness by comparing the generated text with the retrieved passages; relevance by measuring overlap of key ideas; and citation quality by checking that every claim can be traced to a specific snippet. This keeps the “dish” honest, useful, and trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
