---
qid: vq_4de43eda7c__eli5__local
question: WHAT ARE THE DIFFERENT ISOLATION LEVELS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 281
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:11:08-05:00'
sources: []
---

Think of a library where people read books (transactions).  
The *isolation level* is the rule that tells how much a reader can see other readers’ changes while they’re still working.

1. **Read Uncommitted** – like borrowing a book, flipping pages, and reading half‑finished notes from another person. You might see their unfinished edits (“dirty reads”).  
2. **Read Committed** – you only read pages that have been fully checked in by the other reader. No dirty data, but two readers can still change the same page at the same time, so one may miss an update (“non‑repeatable reads”).  
3. **Repeatable Read** – you lock the book while reading; no one else can change it until you’re done. You’ll see the same content every time you look, but if a new copy is added later, you won’t see it (phantom rows).  
4. **Serializable** – this is the strictest: each reader’s work is isolated as if they were alone in the library. No overlapping edits or new books appear mid‑reading; everything stays perfectly consistent.

So isolation levels control how “confident” a transaction can be about what it sees while others are still working.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
