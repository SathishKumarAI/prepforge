---
qid: ing_64edd0dce5__eli5__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 206
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:57-05:00'
sources: []
---

Imagine your database is a big library where every book (row) contains secret information.  
**Read‑only enforcement** is like putting a lock on the entire library’s front door: no one can open it and change any books, only read them. It stops accidental or malicious edits by anyone who has access to the library.  

**Row‑level security** is like giving each librarian a special key that opens only specific shelves. Even if a librarian can walk into the library, they can see (read) only the books on the shelves their key allows; they cannot peek at others’ shelves.  

Using both together—first locking the door, then giving tailored keys—is “defence in depth.” Even if one layer is bypassed (someone breaks the front lock), the second layer still protects the data. This layered approach keeps your information safe from both careless and determined intruders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
