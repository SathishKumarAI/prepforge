---
qid: ing_c212838199__eli5__local
question: 'Explain: What is quantization for inference? Explain weights-only vs weights-and-activations,
  and the typical tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 214
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:35-05:00'
sources: []
---

Imagine a recipe that uses a very precise kitchen scale—each ingredient measured to the gram. A neural network’s “weights” are like those ingredients: tiny numbers that decide how much each part of the model contributes.  
**Quantization for inference** is the act of rounding all those numbers to a smaller set of values (like measuring in 10‑gram increments) so the computer can run the recipe faster and use less memory.  

*Weights‑only quantization* keeps only the rounded weights, while still computing activations (the intermediate results) with full precision.  
*Weights‑and‑activations quantization* rounds both weights **and** those intermediate results, cutting even more cost but making the math trickier; it can introduce a small loss in accuracy.

So you trade a bit of precision for speed and smaller model size—just as a chef might use a coarser scale to make cooking quicker while still tasting good.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
