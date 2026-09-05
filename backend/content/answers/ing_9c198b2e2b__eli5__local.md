---
qid: ing_9c198b2e2b__eli5__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 224
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:47-05:00'
sources: []
---

Imagine a huge library that holds every book ever written, but the books are stored in a far‑away vault (the online storage). Every day, millions of people walk into the library and ask for specific passages. If each reader had to travel all the way to the vault for every request, the trip would take ages.

Uber solves this by keeping a small “reading room” right next to the entrance—a cache. When someone asks for a passage, the system first checks this reading room. Most of the time (over 40 million requests per second) the answer is already there, so it can be given instantly. Only when the requested passage isn’t in the room does the system fetch it from the vault and then store a copy in the reading room for future use.

In short, Uber’s integrated cache acts like a well‑stocked front desk that serves most requests locally, while still having access to the full library behind it whenever something new is needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
