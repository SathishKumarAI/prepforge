---
qid: ing_18c672101e__eli5__local
question: Explain speculative decoding. Why is the output provably faithful to the
  target model, and when does it actually help?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 235
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:12-05:00'
sources: []
---

**Speculative decoding** is like a sous‑chef who first tries out a dish before the head chef (the real language model) gives the final recipe.  
*Model*: the big AI that knows how to write text.  
*Decoding*: deciding which words come next.

In speculative decoding, the small “speculation” model quickly predicts several possible next words. The main model then only checks a few of those guesses—much faster than letting the full chef decide every single step. Because the speculator’s suggestions are still produced by a trained model, the final answer stays faithful to what the big model would have written; we’re just shortcutting the repeated work.

It helps when the big model is slow or expensive (large GPU) and you need many tokens quickly—like cooking a long meal. If the speculator is too weak, it may waste time re‑checking wrong guesses, so the trick works best when the small model’s predictions are already pretty good.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
