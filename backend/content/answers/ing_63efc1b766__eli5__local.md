---
qid: ing_63efc1b766__eli5__local
question: 'Explain: 6.1 Unique URL Generation — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 279
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:14:29-05:00'
sources: []
---

Think of a library that keeps track of every book by giving each one a **unique call number**—no two books share the same code.  
In a URL‑shortening service we do the same for web addresses:  

1. **User submits a long URL** (the “book”).  
2. The system creates a short string, called a **slug**, that is guaranteed to be unique.  
3. That slug becomes part of the final short URL (`https://tiny.io/abc123`).  
4. When someone clicks the short link, the service looks up the slug in its database and redirects them to the original long URL.

To keep slugs unique we can:  

- **Generate a random alphanumeric string** (e.g., 6‑8 characters).  
- **Check the database** for collisions; if the slug already exists, generate another one.  
- Because there are many possible combinations (62^6 ≈ 56 billion), the chance of collision is tiny, so the “check” step rarely repeats.

Thus, just as a library’s call numbers prevent confusion, the unique slugs guarantee that every short URL points to exactly one original address.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
