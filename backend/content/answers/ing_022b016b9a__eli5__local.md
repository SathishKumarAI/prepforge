---
qid: ing_022b016b9a__eli5__local
question: How do you prevent prompt injection? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 225
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:33-05:00'
sources: []
---

Think of an AI that answers questions like a helpful kitchen assistant who follows recipes you give it.  
Prompt injection is when someone slips in extra “secret ingredients” (extra instructions) inside the recipe, hoping the assistant will cook something it shouldn’t—like adding poison instead of sugar.  

To keep the assistant safe we use three simple safety locks:

1. **Ingredient filter** – before a recipe reaches the assistant, we scan it for forbidden words or hidden commands and block them.  
2. **Recipe sandbox** – the assistant runs inside a confined kitchen where it can only mix the ingredients you let it see; it can’t reach outside to add its own surprises.  
3. **Trusted source list** – we only allow recipes that come from verified cookbooks (known, trustworthy users) and ignore wild guesses.

By combining these filters, sandboxing, and trusted sources, we keep the AI from following malicious hidden instructions while still letting it answer your real questions safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
