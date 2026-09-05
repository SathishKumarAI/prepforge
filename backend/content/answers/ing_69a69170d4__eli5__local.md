---
qid: ing_69a69170d4__eli5__local
question: 'Explain: engineer over at google in the united — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 205
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:13-05:00'
sources: []
---

Imagine a giant library where every book is tagged with two things: its exact shelf (latitude‑longitude) and the time it was added. **Geo‑hashing** is like turning each shelf’s coordinates into a short code—think of it as a unique locker number that groups nearby books together. When DoorDash needs to find all restaurants close to you, it simply looks up the lockers that match your geo‑code instead of scanning every book.

Now picture a live conversation in that library: one librarian (the server) keeps shouting updates (“New delivery here!”), while many readers (app clients) listen with their own ears. That’s **WebSockets**—a constant, two‑way phone line that lets the server push real‑time location changes to every app instantly, without each client repeatedly asking for updates.

Together, geo‑hashing gives quick, local search and WebSockets keeps everyone in sync as orders move around.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
