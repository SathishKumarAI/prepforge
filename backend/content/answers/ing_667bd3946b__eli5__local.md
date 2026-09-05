---
qid: ing_667bd3946b__eli5__local
question: 'Explain: How It Works — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 319
total_tokens: 485
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:42-05:00'
sources: []
---

Imagine a library that keeps every book in its own shelf. A *URL shortener* is like a quick‑reference card for each book: you hand the library a long title (the full web address) and it gives you a tiny code, say “abc123”. When someone later shows that code to the librarian, the card instantly points back to the exact shelf where the book lives.

**How it works**

1. **Encode** – The system takes the long URL, runs it through a *hash function* (a one‑way calculator) and chops off the result to six or seven characters. That short string becomes the new “book code.”  
2. **Store** – It saves a tiny record: key = code, value = original URL, in a fast database (think of a micro‑index).  
3. **Redirect** – When someone clicks the short link, the service looks up the code in that index and instantly sends the user to the stored long address.

The hash ensures uniqueness; if two URLs accidentally get the same code, the system re‑hashes or adds a counter until it’s unique—just like giving each book a distinct card. The whole process is lightning‑fast because the database lookup is quick and the mapping table stays small.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
