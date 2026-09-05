---
qid: ing_50336128a8__eli5__local
question: 'Explain: Fan-out-on-write (Push Model) for Normal Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 210
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:44:16-05:00'
sources: []
---

Imagine a news bulletin board in your office lobby. Whenever the manager posts a new announcement, it instantly appears on every employee’s desk screen—no one has to ask for updates. That’s *fan‑out‑on‑write*, or the **push model**.

In this system, the “writer” (the server) pushes each change directly to all “normal users” (clients). The server keeps a list of who is subscribed and, as soon as it receives new data, it sends that same information to every subscriber. Normal users never poll the server; they just receive updates in real time.

The advantage? Users get fresh data immediately, like instant news on their desks. The drawback? If many users are connected, each write can send a lot of messages, which may strain the server or network—just as filling dozens of screens at once can clog an office hallway.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
