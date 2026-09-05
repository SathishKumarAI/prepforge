---
qid: vq_7ce355edca__eli5__local
question: Which of the following is not an advantage of a client/server model ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 220
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:29-05:00'
sources: []
---

In a client‑server design the “client” (think of it as a customer) asks for something, and the “server” (the shopkeeper) supplies it.  
The usual perks are:

* **Central control** – one place to update or secure the data.  
* **Resource sharing** – expensive things like databases or printers live on the server so many clients can use them without each buying its own copy.  
* **Simpler clients** – because most of the heavy lifting happens on the server, a client can be small and fast.

A real downside that is *not* an advantage is that **performance can suffer if the single server becomes overloaded**. If too many customers ask at once, the shopkeeper can’t keep up; each request takes longer or fails. This bottleneck is a disadvantage of putting everything in one place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
