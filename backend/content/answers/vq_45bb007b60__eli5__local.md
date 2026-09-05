---
qid: vq_45bb007b60__eli5__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 262
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:39-05:00'
sources: []
---

**Locking** is a way of making sure that when several people (or programs) try to use the same thing at once, they don’t step on each other’s toes.

Think of it like a library with one copy of a popular book. If two students want to read it simultaneously, the librarian puts a “locked” sign on the shelf: only the student who gets the key can open the book. While that student is reading, the book stays locked; anyone else must wait until the first student finishes and unlocks it.  

In computer terms, a *lock* is a tiny flag that says “this resource (memory, file, data structure) is in use.” When a process wants to modify or read that resource, it first checks the lock. If the lock is free, it takes it; if not, it waits until the lock is released. This prevents data corruption and keeps everything orderly—just like the librarian’s lock keeps the book safe from being torn apart by multiple readers at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
