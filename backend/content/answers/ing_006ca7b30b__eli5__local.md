---
qid: ing_006ca7b30b__eli5__local
question: 'Explain: 2.2 Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 219
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:48-05:00'
sources: []
---

Imagine a library that must decide how to serve its patrons.  
* **Consistency** – every visitor sees the same catalog; if one book is checked out, all see it as unavailable.  
* **Availability** – patrons can always ask for a book and get an answer right away, even if the system isn’t fully up‑to‑date.  
* **Partition tolerance** – the library keeps working even if a section of its network goes down.

The CAP theorem says that when a network split (partition) happens, you can only choose two of the three guarantees at once. If you want *availability*, the system will answer every request immediately, but it may give slightly out‑of‑date information or refuse to update until the partition heals. This trade‑off is like a librarian who always gives an answer, even if that answer might be wrong for a moment, rather than staying silent while waiting for the network to reconnect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
