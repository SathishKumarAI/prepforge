---
qid: ing_17ae18036d__eli5__local
question: We set temperature to 0, so outputs should be deterministic. Why do users
  still get different answers to the same prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 222
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:17-05:00'
sources: []
---

Think of the model as a chef who follows a recipe (the prompt).  
When you set *temperature* to 0, it’s like telling the chef “use exactly the same ingredients and cook in the same order every time.” That makes the dish taste almost identical each batch.

But the chef still has some wiggle room:  
- **Tokenization** is how the recipe is broken into tiny words; a slightly different split can change the next step.  
- The model keeps an internal *state* from earlier parts of the conversation; even a small shift in that state can lead to a different choice later.  
- Finally, the model draws from a huge pool of possible completions; with temperature 0 it picks the highest‑probability one, but if two options tie (or are nearly tied), the engine may flip between them.

So, even at zero temperature, tiny variations in token handling or internal state can make the same prompt produce slightly different answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
