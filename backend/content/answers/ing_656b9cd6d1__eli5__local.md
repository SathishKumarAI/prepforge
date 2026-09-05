---
qid: ing_656b9cd6d1__eli5__local
question: 'Explain: Setting Up a Reverse Proxy with Nginx — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 270
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:50-05:00'
sources: []
---

Think of the internet as a busy mailroom.  
A **proxy** is like a personal assistant who goes to the post office for you: you give it your address, it fetches the letter and hands it back. It hides your real address from the sender but still delivers mail directly to you.

A **reverse proxy** flips that role. Imagine the post office itself hires an agent (Nginx) to receive all letters first. The agent looks at each envelope, decides which of several workers inside (your web servers) should read it, and forwards it there. The sender never sees who actually reads the mail; they just see the post office.

**Example:**  
- *Proxy:* You browse a site from your phone; the proxy fetches the page for you so the site sees the proxy’s IP.  
- *Reverse Proxy:* A website (example.com) has two servers, one for static images and another for dynamic content. Nginx receives every request, then forwards it to the right server based on the URL, keeping your internal setup hidden from visitors.

In short: a proxy hides your identity; a reverse proxy hides your infrastructure while still serving many clients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
