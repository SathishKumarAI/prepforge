---
qid: ing_728da240b0__eli5__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 268
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:37:56-05:00'
sources: []
---

Imagine a kitchen where each recipe (the “job”) can take anywhere from 2 to 10 minutes to cook.  
The client is like a customer who places an order, then wants to know when the dish is ready.

**1. Order button – kick‑off API**  
When the client calls `/start-job`, the kitchen receives the recipe and immediately hands back a unique **job ID** (think of it as a receipt number). The kitchen doesn’t wait for cooking; it just records that this order is in progress.

**2. Check‑in – tracking API**  
The client can later call `/status?job_id=…`.  
- If the dish isn’t ready, the kitchen returns “still cooking.”  
- When the timer hits 2–10 minutes, the kitchen changes the status to “ready” and may optionally push a notification.

**3. Result – finish API**  
Once ready, the client can call `/get-result?job_id=…` to receive the finished output (e.g., a processed image or report).  

This simple flow—order → status checks → result—lets clients start long jobs without waiting, and then poll or be notified when they’re done.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
