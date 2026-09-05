---
qid: ing_7a911d5b11__eli5__local
question: 'Q21: How do you evaluate and compare embedding models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 206
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:07-05:00'
sources: []
---

Think of an embedding model as a recipe that turns words into tiny “taste vectors.”  
**Evaluation** is like tasting a dish to see if it captures the right flavor.  
1. **Intrinsic tests**: give the model pairs of words (e.g., *cat–kitten*, *king–queen*) and ask how similar their vectors are. The closer the vectors, the better the recipe keeps related flavors together.  
2. **Extrinsic tests**: use the vectors in a real task—like finding synonyms or answering questions—and see how well the system performs. If the dish satisfies the diners (the downstream model), the recipe is good.

**Comparison** is simply comparing scores from these tests, just as you would compare two recipes by tasting and rating them side‑by‑side. The higher the similarity for related pairs and the better the task performance, the more “savory” the embedding model is.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
