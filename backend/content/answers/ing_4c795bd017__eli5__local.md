---
qid: ing_4c795bd017__eli5__local
question: 'Explain: Related patterns — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 222
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:38:10-05:00'
sources: []
---

Imagine you’re at a big office building that has many departments, each with its own desk and phone line. When someone in the building needs to call the accounting department, they don’t have to walk to every desk looking for the right number; instead, they go to the reception desk (the “service registry”) and ask, “Where is accounting?” The receptionist looks up the current phone number or address of that department and hands it back.  

In server‑side service discovery, each micro‑service registers its location—its network address and port—in a central registry when it starts up. Other services that need to talk to it query this registry instead of hard‑coding addresses. This way, if the accounting service moves to a new server or scales out, the receptionist’s record updates automatically, and all callers keep working without any changes in their code. The pattern keeps the system flexible and resilient, just like a friendly receptionist who always knows where everyone is.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
