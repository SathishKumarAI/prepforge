---
qid: ing_e066f53453__eli5__local
question: 'Explain: Tries: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 231
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:00-05:00'
sources: []
---

Think of a **trie** like a giant family tree for words, where every branch is a single letter instead of a whole name.  
Imagine you want to find all friends whose names start with “J‑a”. In the trie you start at the root (the empty node), follow the “j” branch, then the “a” branch, and stop—every word that lives under this point begins with “ja”.  

Each node keeps two simple things:  
1. **Children** – a list of next letters (like cousins).  
2. **End‑of‑word flag** – a tiny marker saying “this exact path spells a complete word.”  

Because the same prefixes share branches, common beginnings are stored once, saving space and letting you check existence or list completions in time proportional to the word’s length, not how many words you have overall. This is why tries are great for autocomplete, spell‑check, and any task that needs fast prefix lookups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
