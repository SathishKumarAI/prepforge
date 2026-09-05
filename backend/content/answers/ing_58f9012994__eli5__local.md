---
qid: ing_58f9012994__eli5__local
question: 'Explain: Twitter Search — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 232
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:15-05:00'
sources: []
---

Think of Twitter search like a giant, super‑fast library that keeps its books (tweets) sorted by the time they were added and by what people are talking about right now.

**Indexing** – Every new tweet is copied into two “shelves.” One shelf arranges tweets chronologically so you can quickly pull the newest ones. The other shelves sort them by words or hashtags, like a subject index in a library.  
**Searching** – When someone types “#AI” the system looks on that hashtag shelf and pulls out the most recent entries. It then merges this list with the time‑sorted shelf to show the latest relevant tweets first.  
**Scaling** – The library is split into many smaller branches (shards). Each branch handles a portion of the hashtags or time range, so no single branch gets overloaded.  

So, Twitter search works by keeping two fast lookup tables—by time and by keyword—and using many small copies to stay speedy even when millions of people are searching all at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
