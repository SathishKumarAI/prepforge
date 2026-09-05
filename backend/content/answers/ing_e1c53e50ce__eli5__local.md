---
qid: ing_e1c53e50ce__eli5__local
question: 'Explain: AI threats in the wild: The current state of prompt injections
  on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 209
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:16-05:00'
sources: []
---

Think of a smart assistant like a very attentive librarian who follows exactly what you ask her to do. A *prompt injection* is when someone slips extra, hidden instructions into the question—like writing a note in the back of a library card that tells the librarian to give away the secret recipe instead of just answering your normal query.

On the web this happens all the time: attackers embed these sneaky notes inside chat boxes, comments, or even search queries. The assistant reads the whole message, sees the hidden instruction, and unwittingly follows it—maybe revealing private data, giving out passwords, or making the AI act in ways we didn’t intend.

Right now, many sites let users type freely, so the “librarian” can be tricked by these notes. That’s why developers are tightening filters and teaching AIs to spot and ignore such hidden commands before they cause trouble.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
