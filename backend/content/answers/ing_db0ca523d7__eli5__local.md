---
qid: ing_db0ca523d7__eli5__local
question: 'Explain: Retrieve Everything — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 269
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:21:02-05:00'
sources: []
---

Imagine you’re at a huge library that’s open 24/7, but the librarian insists that whenever someone asks for *any* book, they should hand over every single book in the building. You’ll get an enormous pile on your desk—half of it will be useless junk, and most of it will already be sitting on shelves somewhere else. That’s what “Retrieve Everything” anti‑pattern looks like in software: a system that pulls all data from a database or service even when only one small piece is needed.

The harm?  
* **Slow performance** – sending thousands of records over the network takes time.  
* **High memory use** – loading everything into RAM can crash servers.  
* **Hard maintenance** – future changes to the data model ripple through all callers, even those that never used the changed fields.

A better approach is a *selective request*: ask for only the columns or records you actually need, like picking just the book you want instead of grabbing the whole shelf. This keeps the system fast, lean, and easier to evolve—just as it’s easier to read one book than sift through an entire library each time you’re curious about a single title.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
