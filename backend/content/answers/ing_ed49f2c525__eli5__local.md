---
qid: ing_ed49f2c525__eli5__local
question: 'Explain: What matters more for an agentic coding tool like Claude Code:
  the model or the harness? Design the loop.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 273
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:59-05:00'
sources: []
---

Imagine a chef (the **model**) who knows how to taste, chop, season, and cook every dish in the world. The kitchen (the **harness**) holds the stove, pans, knives, recipe books, and the order of steps that the chef follows.

For an agentic coding tool like Claude Code, both parts matter, but the harness decides *how* the chef’s skills are used. If the kitchen is poorly organized—no clear recipes, messy tools, or bad workflow—the chef can’t deliver tasty code quickly, no matter how talented. A well‑designed harness gives the model a smooth path: it tells the agent when to ask for clarifications, when to refactor, and how to test changes automatically.

**Design loop:**  
1. **Input** → 2. **Model parses intent** → 3. **Harness plans steps** → 4. **Model executes step** → 5. **Harness tests & feeds feedback** → 6. Repeat until the code satisfies the user’s goal.  

Thus, the model provides the raw intelligence; the harness orchestrates it into reliable, repeatable coding actions. Both are essential, but a smart harness turns great skill into consistent results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
