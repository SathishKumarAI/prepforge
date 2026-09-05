---
qid: ing_c580a8c853__eli5__local
question: 'Explain: Informational responses — HTTP response status codes - HTTP |
  MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 255
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:00-05:00'
sources: []
---

**Informational responses – the “please wait” signals**

When a browser talks to a web server, it sends an *HTTP request* and waits for a reply called an *HTTP response*. The first three digits of the reply tell the browser what happened. Codes in the 1xx range are **informational**: they’re like a polite waiter telling you “Hold on, we’ve received your order; work is starting.” They don’t give the final dish (the data) yet, but they confirm that the request has been understood and processing has begun.

The most common ones:

- **100 Continue** – “Your request is fine; keep sending the rest of it.”
- **101 Switching Protocols** – “We’re changing the way we talk to you (e.g., switching from HTTP/1.1 to WebSocket).”

These codes are short‑lived, usually invisible to users, and simply let the browser know that the server is alive and busy. Think of them as friendly heads‑up messages that keep communication smooth while the heavy lifting happens behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
