---
qid: ing_895daabfd0__eli5__local
question: 'Explain: So here''s a more formal statement about — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 230
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:21-05:00'
sources: []
---

Imagine Google Wave as a giant, collaborative kitchen where many chefs (users) can add, edit, and rearrange dishes (pieces of content) at the same time.  
**Server** – the head chef who keeps an exact recipe book for every dish. Every change you make is sent to the server as a tiny “instruction” (a *delta*). The server records each instruction in order and then broadcasts it back so everyone’s kitchen has the same updated menu.  

**Client** – your own stove that shows the current menu, lets you add or move items, and sends those moves to the head chef. If two chefs try to change the same dish at once, the server merges the changes by keeping a history of all edits and letting each client resolve conflicts in their own kitchen.

So “under the hood” means: every user’s browser talks to a central server that stores a linear log of edits (the recipe book) and pushes updates so all kitchens stay synchronized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
