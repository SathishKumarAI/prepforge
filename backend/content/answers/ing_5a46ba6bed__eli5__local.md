---
qid: ing_5a46ba6bed__eli5__local
question: 'Q: When would you choose local or on-device inference over a cloud API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 266
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:28-05:00'
sources: []
---

Imagine your phone as a smart kitchen.  
*Cloud API* is like sending a recipe to a distant chef who returns the finished dish. You get high‑quality results, but you must wait for the chef’s reply and need an internet connection.  
*Local or on‑device inference* is like cooking the dish yourself in your own kitchen. It works even when the network is gone, it keeps sensitive ingredients (your data) private, and it can be faster because there’s no travel time.

So you choose local inference when:
- **Speed matters** – you need instant answers (e.g., real‑time voice translation).  
- **Privacy matters** – your data shouldn’t leave the device (health apps, personal photos).  
- **Connectivity is unreliable** – you’re in a remote area or want to avoid latency.  

You lean on a cloud API when:
- The model is too big for the phone’s memory.  
- You need constant updates that are easier managed centrally.  
- Your network is stable and you can tolerate the slight delay.

In short, pick local inference for privacy, speed, and offline use; pick cloud APIs for heavyweight models and easy maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
