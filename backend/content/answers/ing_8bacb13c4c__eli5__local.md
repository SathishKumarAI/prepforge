---
qid: ing_8bacb13c4c__eli5__local
question: You can't hotfix a mobile binary. How do you test and release a non-deterministic
  AI feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 212
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:02-05:00'
sources: []
---

Think of your app as a recipe book that people send out to their friends (the phones).  
When the recipe changes, you can’t go back and rewrite every printed copy; you must give them a new one or let them add a fresh note.  

For an AI feature that behaves differently each time—like a chef who chooses a random spice—the trick is to treat it as a separate “add‑on” that friends install only if they want it.  
You first test the add‑on on your own kitchen (local devices), then ship it in a small, optional update that runs inside the main recipe book but can be turned off or removed by the user.  

If something goes wrong, you simply push another tiny update that disables the add‑on, leaving the rest of the book untouched.  
This way you never need to re‑print the whole book; you just hand out a new ingredient list when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
