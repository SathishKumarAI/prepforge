---
qid: ing_5e4ec246d7__eli5__local
question: The model is streaming a multi-file edit while the user keeps typing in
  one of those files. How do you apply the edits without corrupting the buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 244
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:57-05:00'
sources: []
---

Imagine your text editor as a kitchen counter where you’re cooking a big stew (the whole file set). The AI is like a sous‑chef who can add new ingredients (edits) while you keep stirring one pot (typing in one file). To avoid spilling the stew, the system keeps two separate bowls:  

1. **Draft bowl** – holds all the changes the AI wants to make but hasn’t yet committed.  
2. **Live bowl** – contains what’s actually on your screen and what you’re typing.

When the AI finishes a change, it moves that ingredient from the draft bowl into the live bowl *only after* it checks that no one has been stirring (typing) in that same spot. If someone is still working there, the system waits or merges the new ingredient with the current one, just like a sous‑chef would blend a new spice into a simmering sauce without over‑flipping it.

This two‑bowl strategy keeps your buffer clean: you can type freely while the AI streams edits, and only safe, conflict‑free changes are applied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
