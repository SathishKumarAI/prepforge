---
qid: ing_93a20f642b__eli5__local
question: 'Explain: How Webhooks Work — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 225
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:36-05:00'
sources: []
---

Think of a webhook like a “smart doorbell.”  
When someone rings the bell (an event, e.g., a new order on your shop), the doorbell doesn’t just make noise—it sends a quick note to your house‑keeper’s phone: *“Someone is at the front door!”* That phone (your server) receives the message instantly and can decide what to do next—maybe unlock the door, play music, or log the visit.

In webhooks, a “source” system watches for an event. When it happens, it sends a small HTTP request (the note) to a pre‑registered URL you give it. Your server at that URL receives the data, processes it, and can reply with a status code so the source knows you got it.  
No polling is needed; the source pushes updates only when they occur, saving bandwidth and making real‑time integrations smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
