---
qid: ing_3a2e7dd2cd__eli5__local
question: 'Explain: REST vs GraphQL — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 284
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:18-05:00'
sources: []
---

Imagine you’re a librarian who must answer visitors’ questions about the books on your shelves.  
**REST** is like giving each book its own card that says “this is the address of this book.” The visitor asks for a specific address, and you hand over exactly one book or a whole shelf, depending on what they requested. If they need more than one type of information (author, title, genre), they have to make several separate requests, each to a different card.

**GraphQL** is like giving the librarian a single “shopping list” that says “I want the author and the title of every book whose genre is mystery.” The librarian reads the list once, pulls all those pieces together, and returns them in one package.  

The hard part of system design was learning how to choose the right tool for the visitor’s needs: REST works best when you can neatly divide data into separate “rooms,” while GraphQL shines when visitors want a mix of information that would otherwise require many trips. Once you understand these 30 concepts, you’ll know when to ask for one address at a time or a full shopping list, and your system will be both faster and easier to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
