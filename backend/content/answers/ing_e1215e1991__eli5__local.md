---
qid: ing_e1215e1991__eli5__local
question: 'Explain: Pull — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 230
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:10-05:00'
sources: []
---

Imagine you’re at a library that distributes new books to readers.

**Pull** is like a reader walking into the library, looking at the shelf, and grabbing any book they want. The reader decides *when* to take a book; the library just keeps the books ready.

**Pub/Sub (Publish/Subscribe)** is like a librarian who puts each new book on a “mailbox” and then sends an email notification to every subscriber. Each subscriber receives a copy of the mail‑bag’s contents automatically, without having to go look for it themselves.

In machine‑learning system design, **pull** lets your service repeatedly ask (“Give me the latest data”) while **Pub/Sub** pushes new data as soon as it arrives. Pull is simple but can be slow; Pub/Sub is faster and scales better when many components need the same updates. Both keep the “books” (data) in the library, but they differ in who decides *when* to get them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
