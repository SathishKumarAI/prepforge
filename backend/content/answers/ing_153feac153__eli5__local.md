---
qid: ing_153feac153__eli5__local
question: 'Explain: Key-based replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 251
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:58-05:00'
sources: []
---

Imagine a librarian who keeps copies of every book in several branches so that no matter where a reader goes, the same story is available. **Key‑based replication** works the same way for data: each piece of information (a “key”) has a corresponding value, and that key/value pair is copied to other servers or databases.

There are two main flavors:

* **Synchronous replication** – every copy is written at the same time. If one branch fails to receive the book, the whole transaction is cancelled, keeping all branches perfectly in sync.
* **Asynchronous replication** – copies are sent later. A branch can continue reading while the backup catches up, trading a little delay for higher availability.

Use cases: a bank’s online portal uses synchronous replication so that every account balance is identical everywhere; an e‑commerce site may use asynchronous replication to keep product catalogs fast and still eventually consistent across global data centers. In both cases, the “key” (e.g., user ID or product SKU) guarantees the right copy goes where it should.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
