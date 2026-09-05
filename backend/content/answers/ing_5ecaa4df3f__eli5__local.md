---
qid: ing_5ecaa4df3f__eli5__local
question: 'Explain: Design permission-aware retrieval for enterprise search. Users
  must never see results they can''t access in the source system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 172
total_tokens: 342
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:40-05:00'
sources: []
---

Think of an office filing cabinet that’s locked by different keys.  
When someone asks for a file, you first check which key they hold (their permissions).  
Only then do you open the drawers and hand them the files that match both their request *and* the keys they own.

In enterprise search this is exactly what “permission‑aware retrieval” does.  
The system first learns each user’s access rights from the source database or directory.  
When a query comes in, it builds two filters: one for the words you typed and another that matches only the records the user is allowed to see.  
Both filters run together so the search engine returns only documents the user can legally open—just like handing out only the drawers whose locks fit their key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
