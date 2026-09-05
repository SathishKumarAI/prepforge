---
qid: ing_406845fdcc__eli5__local
question: 'Explain: Proxy / Reverse Proxy — System Design was HARD until I Learned
  these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 236
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:06-05:00'
sources: []
---

Think of a **proxy** as a helpful mail‑room clerk at a big office building.  
When you want to send a letter (a web request) to someone inside, you hand it to the clerk.  
The clerk looks up who the recipient is, forwards your letter to that person’s desk, and when a reply comes back he gives it to you.  

A **reverse proxy** flips the role: it sits in front of all the desks (web servers).  
You send your mail directly to the clerk; he decides which desk should handle it—maybe the one with the fastest response or the least busy—and delivers the letter there.  
When that desk replies, the clerk forwards the reply back to you.

Key terms:  
- **Proxy** – an intermediary that forwards requests on your behalf.  
- **Reverse proxy** – a proxy that sits in front of servers and routes incoming traffic to them.  

Understanding this “mail‑room” picture turns a complex networking idea into something concrete and easy to remember.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
