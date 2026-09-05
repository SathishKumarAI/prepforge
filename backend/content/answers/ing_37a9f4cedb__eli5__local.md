---
qid: ing_37a9f4cedb__eli5__local
question: 'Explain: WordPiece — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 231
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:00-05:00'
sources: []
---

Imagine your favorite sentence is a giant block of chocolate that you want to share at a party.  
**Tokenization** is cutting that chocolate into bite‑sized pieces so everyone can eat it easily.  
With **WordPiece**, the chef first chops the chocolate into common, recognizable chunks—like “un”, “break”, “able”. If a word isn’t in the menu (for example “unbreakable”), the chef splits it into the biggest known pieces: “un‑break‑able”.  

**Tokens** are those bite‑sized chunks; **subwords** are tokens that belong to a larger word.  
The **vocabulary** is the list of all allowed chocolate pieces the chef knows.  
When the chef sees an unfamiliar word, he keeps breaking it until every piece matches something in the menu.  

So WordPiece lets a language model read any word by piecing together known subwords, just as you can share any chocolate phrase by using familiar bite‑sized chunks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
