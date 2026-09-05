---
qid: ing_96260dbfed__eli5__local
question: 'Explain: How do you evaluate a code-editing model before shipping it? Design
  the offline and online eval story for tab or agent edits.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 254
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:50-05:00'
sources: []
---

Imagine your code‑editing AI is like a smart robot chef who can tweak recipes (the code) before you serve the dish (ship it).  
**Offline eval** is the kitchen’s tasting room: we feed the model many “recipe cards” (code snippets) and ask it to make edits. We then compare its output with the master recipe (ground‑truth changes) using metrics that count how often it gets the right words, keeps the structure intact, and avoids harmful shortcuts. Think of this as a blind taste test—no real customers yet, just quality checks.  

**Online eval** is the restaurant’s live service: once the chef goes on stage, we let it edit code for actual users in a sandbox. We monitor how often users accept or reject its changes, track speed and error rates, and watch for unexpected side‑effects. If a user flags a bug, that becomes a new “recipe card” for training again.  

Together, the tasting room (offline) guarantees safety and consistency, while the live service (online) ensures real‑world usefulness before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
