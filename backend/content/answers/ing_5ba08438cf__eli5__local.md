---
qid: ing_5ba08438cf__eli5__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 253
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:19-05:00'
sources: []
---

Imagine the agent is a **chef** who receives a natural‑language recipe (“Add a new login page, update the database schema, and delete unused CSS files”). The *codebase* is the kitchen: every cabinet (file) holds ingredients (lines of code). To keep the chef from smashing the kitchen, we give him three safety tools.

1. **Ingredient list** – A strict checklist of which cabinets the recipe touches, plus a “do‑not‑touch” rule for everything else.  
2. **Taste test** – After every change, run an automated unit‑test “taster” that checks the dish (the code) still works as expected. If it fails, roll back the last step.  
3. **Backup pantry** – Before any changes, copy the entire kitchen to a safe shelf. If the chef makes a mistake, you can restore the original state.

With these tools—precise scope, immediate feedback, and a rollback plan—the agent can make multi‑file edits safely without wrecking the codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
