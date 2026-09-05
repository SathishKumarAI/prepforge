---
qid: ing_9d2e4c5458__eli5__local
question: 'Explain: Practical coding: write a service that proxies streaming TTS to
  a browser and cancels cleanly when the user navigates away.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 211
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:38-05:00'
sources: []
---

Think of the TTS proxy like a **live radio station** you’re tuning into while driving.  
The user’s browser is the car’s dashboard, and the TTS engine (the “radio”) streams spoken text over the internet.

1. **Set up the stream** – Your service opens a connection to the TTS API and pipes that audio straight to the browser, just as a radio tuner grabs the broadcast signal.
2. **Keep it alive while listening** – As long as the user stays on the page, the stream runs smoothly, delivering words in real time.
3. **Detect when they change stations** – If the user navigates away (like switching to another app), the browser tells your service to stop. Your code then closes the TTS connection cleanly—no leftover data or memory leaks.

In short, it’s a radio that starts playing when you’re listening and stops automatically when you leave the station.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
