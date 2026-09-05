---
qid: ing_739294c8a7__eli5__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:39:46-05:00'
sources: []
---

**Prompt injection** is when someone tricks an AI by slipping extra instructions into the text it’s supposed to process—like giving a recipe card a hidden note that changes the dish entirely.  
To stop this, think of the AI as a **kitchen chef** who only follows the main recipe (the prompt) and ignores any side notes unless they’re part of a trusted “cookbook” list.

1. **Sanitise the input** – strip or escape any hidden commands before passing them to the chef.  
2. **Use a whitelist** – allow only safe words or phrases that the chef recognises as legitimate ingredients.  
3. **Separate context from content** – feed the user’s text into a different “serving dish” than the instructions the AI should follow, so hidden notes can’t slip through.  

By treating user input like an extra note in a recipe card and keeping it strictly separate from the core instructions, you keep the AI from being misled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
