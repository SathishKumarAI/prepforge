---
qid: ing_73befd55da__eli5__local
question: 'Explain: Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 298
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:40:10-05:00'
sources: []
---

Imagine you run a library that lets people borrow books. The **functional requirements** are the rules that tell the library what it must do for each borrower.

For a TinyURL‑style URL‑shortening service:

1. **Create a short link** – When someone gives the system a long web address (the “full book title”), it must generate a unique, tiny code (like a one‑page card) that points back to that original page.
2. **Redirect visitors** – If anyone clicks the tiny link, the service must instantly send them to the full URL, just as a librarian would hand over the requested book.
3. **Store and retrieve** – The system must keep a reliable record of every short code paired with its long URL so it can find the right destination when needed.
4. **Handle duplicates** – If the same long URL is shortened again, it should either give the existing short link or create a new one, avoiding confusion.
5. **Provide statistics (optional)** – The service may report how many times each short link has been used, like tracking how often a book is borrowed.

These rules define what the application *must* do so users can safely and quickly share long URLs with just a few characters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
