---
qid: ing_7d7cf06b93__eli5__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 196
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:47-05:00'
sources: []
---

Imagine you’re a chef who always follows a secret family recipe book (the firm’s playbook). Instead of just telling someone what to cook, the chef hands them a copy‑edited menu that shows exactly where the original ingredients have been swapped for the family's preferred ones.  

In AI terms, we build an “editing agent” that reads a draft NDA (the recipe) and produces a Word file with redlines—highlighted changes—showing how each clause has been altered to match the firm’s standard wording (the family recipe). The agent first parses the text, then applies rule‑based or learned edits, finally outputs the same document format but with visible changes. It never just gives you a list of instructions; it hands you a ready‑to‑use, visibly modified contract that you can review and approve right away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
