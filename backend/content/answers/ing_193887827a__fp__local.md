---
qid: ing_193887827a__fp__local
question: 'Explain: Redirection messages — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 349
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:50-05:00'
sources: []
---

**Redirection messages – the “4xx/5xx” part of HTTP status codes**

At its core, HTTP is a *request–response* protocol that maps a client’s desire (e.g., “GET /page”) to a server’s action (deliver data or instruct otherwise). The protocol must be **self‑describing**: the client has no way to guess what the server intends without an explicit signal. That signal is the status code.

A redirection (3xx) tells the client that *the resource it asked for lives elsewhere*. This arises from two deep principles:

1. **Statelessness + Idempotence**  
   Each request must be independent; a server can’t “remember” where you previously went. By embedding the new location in the response, the server keeps the state purely within the message.

2. **Optimal routing (network economics)**  
   Moving the client to the correct host or path avoids wasted round‑trips. The 3xx codes formalise a *cost–benefit* trade‑off: “redirect now” vs. “serve stale content”.

The most subtle insight is that **redirection is not just about URLs** – it’s a *policy mechanism*. For example, `307 Temporary Redirect` preserves the original HTTP method (POST stays POST), which matters for form submissions and caching. Thus redirection codes encode both *where* to go and *how* to behave, ensuring protocol correctness while optimising network traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
