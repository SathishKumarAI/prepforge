---
qid: ing_e3c1de89e3__eli5__local
question: 'Explain: Abstract — Amazon''s Dynamo | All Things Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 289
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:07-05:00'
sources: []
---

Imagine a giant library that anyone can add books to, anytime, from anywhere in the world.  
In a traditional library, you’d have one master catalog—if it crashes, everyone loses track of where every book is. Dynamo solves this by giving each librarian (a server) its own copy of the catalog and letting them work independently. When someone adds or updates a book, that librarian writes the change to its local catalog **and** sends a message to all the other librarians.  

Each librarian keeps a “clock” called a *vector clock*—think of it as a list of timestamps showing when each librarian last updated each book. If two librarians receive conflicting updates (like two people adding different covers to the same book at the same time), they compare their clocks: if one’s timestamp is newer, that version wins; if they’re equal, both versions are kept and later reconciled.

Because every librarian can answer a question on its own and because changes spread gradually, the library stays online even when parts fail. This is Dynamo: a highly available, eventually‑consistent key–value store where many copies of data live in parallel, each updating its own copy while sharing updates with others through simple “write‑to‑all” messages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
