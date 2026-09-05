---
qid: ing_b0b7a9b713__eli5__local
question: 'Explain: Availability — CAP Theorem: One of the Most Misunderstood Terms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 252
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:13-05:00'
sources: []
---

Imagine a public library that can be asked for a book online.  
The **CAP Theorem** says it must choose two of three guarantees:

* **Consistency** – every reader sees the same copy of the book at once.  
* **Availability** – whenever someone asks, the system will give an answer (maybe “the book is here” or “sorry, we’re out of stock”).  
* **Partition tolerance** – it can keep working even if part of its network goes down.

Think of the library’s catalog as a giant spreadsheet. When the internet splits into two halves (a *partition*), the library can’t let both halves hand out contradictory information. It has to decide: either it stops answering requests on one side (*consistency*) or it keeps answering but may give outdated answers (*availability*). Most people misunderstand **Availability** as “always working,” but in CAP it means “the system will always reply, even if that reply might be stale.” The trade‑off is clear: pick two of the three; you’ll never get all three simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
