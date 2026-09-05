---
qid: ing_ecfa29a04e__eli5__local
question: 'Explain: Query a Present URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 261
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:28-05:00'
sources: []
---

Imagine you have an enormous library of books and you want to know if a particular book is *in* the library without having to look through every shelf. A Bloom filter works like a quick “yes‑or‑no” card that can tell you whether a book might be present, but it never says a book is definitely absent.

**How it does this:**  
- You keep a long bit array (all zeros at first).  
- For each book title, you run several simple hash functions that turn the title into different positions in the array and set those bits to 1.  
- When someone asks “is this URL here?” you hash the URL the same way and check the corresponding bits.

If any of those bits is 0, the URL is definitely not stored (a *false negative* never happens). If all are 1, the URL might be there; sometimes it’s a false positive.  

**Why use it?**  
It uses far less memory than storing every URL and answers queries in constant time—perfect for systems that need to filter out non‑existent URLs before doing more expensive work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
