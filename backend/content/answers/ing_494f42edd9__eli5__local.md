---
qid: ing_494f42edd9__eli5__local
question: 'Explain: Context — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 233
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:15-05:00'
sources: []
---

Imagine a busy train station (the user’s device). Each platform has its own timetable, but the passengers need only one ticket office to buy tickets for any destination.  
In software, the **API Gateway** is that ticket office: it receives every request from the front‑end and decides which service should handle it. The **Backend for Frontends (BFF)** is a small station building next to each platform that knows exactly what information the passengers on that platform need—no extra trains, no detours.

So when your app asks “show me my feed,” the API Gateway forwards the request to the BFF dedicated to mobile clients. That BFF pulls together data from several micro‑services (posts, likes, comments), reshapes it into one tidy payload, and sends it back—just like a station clerk handing you a single ticket that covers all your stops. This keeps each front‑end simple while letting the back‑ends stay modular and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
