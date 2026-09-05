---
qid: ing_a5d6855452__eli5__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 247
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:00:49-05:00'
sources: []
---

Imagine you’re a librarian who must give each new book a unique shelf label that’s only two letters long, like “AB” or “CD.” When you run out of fresh labels, the next book gets a label that already exists—this is a *collision*. To keep all books accessible, you need a strategy to resolve those collisions.

In a URL shortener, each long link is turned into a tiny code (the shelf label). If two different links generate the same code, the system must decide what to do. Three common strategies are:

1. **Linear probing** – try “AB”, then “AC”, “AD”… until an unused code appears.  
2. **Hash chaining** – keep a list of all URLs that share a code and let the user pick.  
3. **Rehashing** – generate a new random code entirely when a collision occurs.

Each method trades off speed, memory, and complexity, just like choosing how to re‑label books in our library. The goal is always: every book (URL) stays reachable without confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
