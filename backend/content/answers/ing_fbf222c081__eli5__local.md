---
qid: ing_fbf222c081__eli5__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 240
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:51-05:00'
sources: []
---

Think of a real‑time voice assistant as a live radio DJ who has to read your spoken question, think of an answer, and speak it back before you start talking again. The **latency budget** is the total amount of time the DJ is allowed to spend on all those steps so that the conversation feels natural.

Imagine you have 300 milliseconds (0.3 seconds) from the moment your voice hits the microphone until the assistant’s reply comes out the speakers. That whole window must include:

* **Speech‑to‑text** – turning sound into words.
* **Processing** – understanding the question and deciding on an answer.
* **Text‑to‑speech** – converting that answer back to sound.

Each part must finish quickly enough that none of them pushes the total past 300 ms. If any step takes too long, you’ll hear a pause, which feels like a lag in the conversation. The latency budget is simply the rule that keeps every piece snappy so the interaction stays smooth and real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
