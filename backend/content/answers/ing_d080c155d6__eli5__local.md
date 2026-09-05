---
qid: ing_d080c155d6__eli5__local
question: 'Your traffic is shifting from single-turn chat to agents: 20 to 50 model
  calls per task, tool calls in between, sessions lasting tens of minutes. What does
  that do to your serving design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 222
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:42-05:00'
sources: []
---

Think of a conversation as a long road trip instead of a quick taxi ride.  
In a single‑turn chat the model is like a car that makes one quick stop: you load it, give it a question, get an answer, and shut it down.  

With agents, the “trip” now has many stops (20–50 model calls) plus detours to other services (“tool calls”). Each stop needs fresh GPS data, a new map segment, and sometimes a different driver. That means your server must keep several cars running at once, share maps efficiently, and hand off passengers smoothly between drivers without losing their seatbelt (the user’s context).  

So you need a fleet manager that can spin up multiple model instances quickly, cache shared data, and route traffic so each stop gets the right driver. The result is more robust, but also heavier on compute, memory, and network bandwidth—just like a full‑size bus convoy instead of a solo ride.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
