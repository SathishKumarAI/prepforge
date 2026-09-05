---
qid: ing_cfe568b64b__eli5__local
question: Should we choose Consistency or Availability for our service?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 217
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:42-05:00'
sources: []
---

Think of your service as a library that gives out books (data).  
**Consistency** is like a librarian who always checks the master catalog before handing a book, so every patron gets exactly what the record says. If the catalog server goes down, the librarian must wait or refuse to hand out any book—no one can borrow until the catalog is back.

**Availability** is like a friendly clerk who will give anyone a copy of a book right away, even if she isn’t sure it’s the most up‑to‑date edition. The library stays open all the time, but sometimes patrons may receive an older or slightly wrong version.

So pick **consistency** when you can’t tolerate mistakes (e.g., financial transactions). Pick **availability** when you need instant access and can handle occasional out‑of‑date data (e.g., a news feed). The choice is about what your users value more: perfect accuracy or uninterrupted service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
