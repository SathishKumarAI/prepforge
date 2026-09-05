---
qid: ing_a3ba19304a__eli5__local
question: You want to change your agent's system prompt. How do you ship it without
  finding out from customers that you broke something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 209
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:46-05:00'
sources: []
---

Imagine your AI is a chef in a kitchen. The **system prompt** is the recipe book that tells the chef how to prepare every dish. If you want to update the recipe without customers noticing any glitch, you do it like this:

1. **Create a new recipe book (the updated system prompt).**  
2. **Test it on a private “tasting kitchen” first**—run the same orders through both the old and new books side‑by‑side and compare results.  
3. **Deploy the new book to only a small group of diners** (a canary release). They taste the dishes, but you keep an eye on their feedback.  
4. **If everything tastes right, roll it out to all diners gradually**, keeping the old book as a backup until you’re sure the new one never breaks anything.

This way, customers enjoy their meals without ever knowing the recipe changed behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
