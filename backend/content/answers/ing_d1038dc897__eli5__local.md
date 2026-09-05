---
qid: ing_d1038dc897__eli5__local
question: 'Explain: F5: Block-rate too high; developers learn to ignore'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 221
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:33-05:00'
sources: []
---

Think of an online store that uses a “security guard” called **F5** to keep bad bots from buying up all the limited‑edition sneakers. The guard looks at how many requests (people trying to buy) come in per second. If it sees more than, say, 50 requests in a short burst, it thinks someone is flooding the site and starts blocking them.

Developers notice that sometimes legitimate shoppers are also caught because the guard’s rule is too strict—too high of a “block‑rate.” Instead of tightening the rule or adding an extra test (like a simple puzzle), they just tell the guard to ignore those false alarms. This keeps sales flowing but leaves the site vulnerable: the guard no longer stops real bot attacks, and the store can be flooded with fake orders.

In short, the “block‑rate too high” warning means the safety system is overreacting; developers often choose convenience over security by simply turning it off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
