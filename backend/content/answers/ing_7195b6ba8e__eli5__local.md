---
qid: ing_7195b6ba8e__eli5__local
question: 'Explain: Design the serving system for a multimodal assistant (text + image
  input, streaming text out) at hundreds of millions of users.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 204
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:20-05:00'
sources: []
---

Imagine your assistant is like a gigantic restaurant that serves thousands of tables every minute.  
The **front‑end** (the waiter) receives two kinds of orders: a text request and an image file, just as guests might ask for a dish and show a photo of what they want. The waiter passes each order to the kitchen, which is your **model cluster**—many identical cooking stations that can handle different “recipes” (text generation, vision‑to‑text translation, etc.).  

When the chef finishes, the finished dish (the generated text) is sent back through a **streaming pipeline**, like a conveyor belt delivering each word as it’s cooked so the guest sees it immediately.  

The system scales by adding more waiters and chefs behind load balancers, ensuring that even with hundreds of millions of tables, no one waits too long for their meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
