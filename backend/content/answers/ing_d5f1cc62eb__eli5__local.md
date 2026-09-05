---
qid: ing_d5f1cc62eb__eli5__local
question: 'Q: Why use Continued Pretraining instead of just putting domain data in
  the SFT set?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 232
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:30-05:00'
sources: []
---

Think of a language model as a chef who has learned to cook a huge variety of dishes (the base training).  
**Continued pre‑training** is like letting that chef practice with a new set of ingredients—spices, regional staples, or local cooking techniques—before the chef starts learning how to make a specific recipe. The chef gets used to the flavor profile and texture of those ingredients while still exploring many possible dishes.  

When you **add domain data only to the SFT (supervised fine‑tuning) set**, you jump straight into teaching the chef one particular dish, but the chef may not yet understand how the new ingredients behave in general. The result can be a recipe that uses the right words but feels off or inconsistent with the rest of the menu.

So continued pre‑training gives the model a chance to “taste” and internalize the domain’s language patterns first; then SFT fine‑tunes it for the exact task, producing smoother, more reliable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
