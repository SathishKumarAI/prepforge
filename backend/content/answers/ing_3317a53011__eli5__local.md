---
qid: ing_3317a53011__eli5__local
question: 'Explain: 2.3 Design Considerations — Amazon''s Dynamo | All Things Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 258
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:56-05:00'
sources: []
---

**Imagine a library that never closes and can’t afford to lose any book, even if several librarians (servers) go offline at once.**  
Dynamo is the system Amazon built to keep its catalog available no matter what happens. The key design ideas are:

1. **No single point of failure** – every librarian has a copy of all books; if one disappears, others still have them.  
2. **Eventual consistency** – when a book’s location changes (a new shelf), the library lets all librarians update at their own pace. Eventually everyone agrees on where the book is.  
3. **Quorum voting** – to decide whether a request succeeded, Dynamo asks a few librarians (the quorum). If enough agree, the operation is considered done.  
4. **Versioning and conflict resolution** – if two librarians independently update the same book, Dynamo tags each change with a timestamp and later merges them, much like reconciling two edits to a shared document.  

These choices let Amazon’s catalog stay online even when many servers fail or network partitions occur, trading strict immediacy for high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
