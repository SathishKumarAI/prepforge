---
qid: ing_9d0e133a8d__eli5__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 221
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:22-05:00'
sources: []
---

Think of the JSON as a recipe card and the LLM as a chef who sometimes writes in shorthand or forgets ingredients.  
**Make it reliable** by putting a “recipe checker” in front of the kitchen:

1. **Define the format (schema)** – list every ingredient, unit, and step the chef must include.  
2. **Ask the chef to follow the checklist** – the LLM is prompted to produce JSON that matches the schema exactly.  
3. **Validate automatically** – after the chef writes the card, a computer reads it and flags any missing or mis‑typed ingredient before the dish goes out.  
4. **Give feedback** – if the checker finds an error, the chef gets a clear note (“missing `price` field”) and can correct it quickly.

By treating JSON like a strict recipe and using a validator as a sous‑chef, you keep every output consistent and trustworthy, even when the LLM is creative or sloppy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
