---
qid: ing_ec6867ace2__eli5__local
question: 'Explain: Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 227
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:49-05:00'
sources: []
---

Think of the internet as a huge library where people (clients) come to read books (websites).  
A **proxy server** is like a friendly librarian who sits at the front desk: when you ask for a book, she looks it up in your name, brings it back, and can hide your address from the publisher. She forwards your request to wherever the book lives and then returns the page to you.

A **reverse proxy** flips that role. Imagine now a popular author’s office where many readers rush in at once. The office manager (the reverse proxy) receives every reader’s request first, decides which of the author’s assistants (backend servers) should answer based on the book title or load level, and then passes the reply back to you. You never see the assistants; you only talk to the manager.

So:  
- Proxy = client‑side middleman that hides your identity.  
- Reverse proxy = server‑side middleman that hides multiple backend servers from the client.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
