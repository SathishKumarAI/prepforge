---
qid: ing_190fbf77cd__eli5__local
question: 'Explain: 5.2 Database Schema — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 290
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:48-05:00'
sources: []
---

Imagine a library that turns long book titles into tiny, easy‑to‑remember codes so people can find them quickly. In a URL shortener the “books” are web addresses and the “codes” are the shortened links you see on social media.

**Key parts of the database:**

- **URL table (the shelf):** stores each original long URL, its generated code (e.g., `abc123`), when it was created, how many times it’s been visited, and who owns it.  
- **User table (library card holders):** keeps user accounts so you can see which links belong to whom and enforce limits or billing.  
- **Redirect log (checkout record):** logs each time someone clicks a short link—time, IP address, device—to help track usage patterns.

When someone creates a short URL, the system writes a new row in the URL table, generates a unique code, and returns that code to the user. When a visitor enters the short link, the system looks up the code, fetches the long URL from the URL table, records the click in the log, and redirects them.

This simple schema keeps data organized, scales with millions of links, and lets you audit usage just like a librarian tracking book checkouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
