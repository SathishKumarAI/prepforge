---
qid: ing_1bbc3c7580__eli5__local
question: 'Explain: Design Deep Dive — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 236
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:00-05:00'
sources: []
---

Imagine a librarian who keeps a giant book of all the long, winding road signs (the full URLs) that people drive on. Every time someone asks for a shortcut, she writes a tiny, unique bookmark code—like “x9a3”—and ties it to the original sign. Later, if anyone gives her the short code, she instantly looks up the bookmark and shows them the exact long address.  

In a URL‑shortener system, we need three parts:  
1️⃣ **Generator** – creates those unique short codes (like the librarian’s bookmarks).  
2️⃣ **Storage** – remembers which code points to which full URL (a simple key/value table).  
3️⃣ **Redirect service** – receives a short link, looks it up in storage, and sends the user straight to the long site.  

The trick is keeping the codes unique, fast to look up, and small enough to fit on a business card—just as the librarian’s bookmarks must be quick to find and easy to carry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
