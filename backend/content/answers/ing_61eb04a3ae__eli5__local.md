---
qid: ing_61eb04a3ae__eli5__local
question: 'Explain: Circuit Breakers — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 221
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:45-05:00'
sources: []
---

Imagine a library that has millions of books (the online storage) but the librarian (Uber’s servers) can’t read every book at once because it would take forever. Instead, they keep a small set of popular books on a quick‑access shelf (the integrated cache). When a reader asks for a book, the librarian first checks the shelf; if it’s there, the book is handed out instantly—no trip to the main library needed. If it isn’t, the librarian fetches it from the big storage and also puts a copy on the shelf for next time.

A **circuit breaker** is like a safety switch that monitors how many readers are asking for books at once. If the request traffic suddenly spikes (say, 40 million reads per second), the breaker can temporarily “cut” or limit new requests to prevent the system from crashing. It then lets traffic flow again when conditions stabilize. This keeps Uber’s service fast and reliable even during huge surges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
