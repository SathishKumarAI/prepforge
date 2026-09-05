---
qid: ing_64008e5793__eli5__local
question: 'Explain: Active-active — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 207
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:14:36-05:00'
sources: []
---

Imagine a city that needs to keep its traffic lights working all the time, even if one power plant goes down. Instead of putting just one backup plant (active‑standby), the city installs two plants that both supply electricity at once—**active‑active**. If one fails, the other keeps the lights on without any delay or interruption.

In computing, an active‑active system works the same way: two or more servers or data centers run in parallel, each handling requests and updating the database simultaneously. They share the load, so performance stays high, and if one crashes, the others instantly take over without users noticing anything wrong. The trick is to keep all copies of data synchronized, just like keeping both power plants in perfect sync so the city never gets a flicker. This setup gives reliability *and* speed—exactly what large‑scale systems need for smooth operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
