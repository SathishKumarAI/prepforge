---
qid: ing_3a6dc8b9fa__eli5__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 251
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:53-05:00'
sources: []
---

Imagine a library where people ask for books.  
Latency is the time from when a patron asks for a book to when they get it back—just like how long an online service takes to answer a user’s request.

In the Twitter‑style design of *system-design-primer*, the authors break this latency into clear parts:

1. **Network round‑trip** – the “walk” a data packet makes from your computer, through routers, to the server and back.
2. **Server processing time** – how long the server’s CPU spends looking up data in memory or disk.
3. **Database query time** – the wait while the database searches for the requested rows.

They give example numbers (e.g., 20 ms network + 30 ms server + 50 ms DB) to show where a system can be tuned, just as a librarian might speed up book retrieval by moving frequently‑borrowed titles closer to the entrance. This concrete view helps you see exactly which part of the chain is slowing things down and how improving it will shave milliseconds off your user’s wait.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
