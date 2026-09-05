---
qid: ing_19c8b38dc3__eli5__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 200
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:17:09-05:00'
sources: []
---

Imagine a huge concert hall (Spotify’s streaming service) where millions of fans (users) are trying to get their favorite songs at the same time. The **load balancer** is like the front‑desk staff that directs each fan to an empty seat in one of many balconies (servers). It watches how crowded each balcony is and sends new fans to the least full ones, so no single balcony gets jammed while others sit empty.

In Spotify’s design, the load balancer sits right before the music servers. When a user asks for a track, it quickly looks at all available server instances, picks one that has room (low CPU or network usage), and forwards the request there. If a server goes down, the staff instantly redirects fans to another balcony. This keeps the listening experience smooth and prevents any single point from becoming overloaded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
