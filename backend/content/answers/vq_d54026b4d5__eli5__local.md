---
qid: vq_d54026b4d5__eli5__local
question: Who do various access methods compare ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 206
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:38-05:00'
sources: []
---

Think of a library that holds books (data).  
**Sequential scan** is like walking down every shelf, turning each book over until you find the one you need—slow but sure.  
**Index search** is like looking at the library’s catalog first; it tells you exactly which shelf and spot hold your book, so you jump straight there—fast if the catalog exists.  
**Hashing** works like a locker system: each book gets a number (a hash) that points to a specific locker; you open that locker directly, but if many books get the same number you have to look inside that locker’s “overflow” area.  

So, we compare these methods by how quickly they bring us the right data and how much extra space or effort they require, just as a reader chooses between scanning shelves, consulting a catalog, or opening a locker.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
