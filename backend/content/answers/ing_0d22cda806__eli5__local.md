---
qid: ing_0d22cda806__eli5__local
question: 'Explain: How Facebook keeps its large-scale infrastructure hardware up
  and running - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 246
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:23-05:00'
sources: []
---

Imagine Facebook’s data centers as a giant, ever‑moving city of tiny “power plants” (the servers) that must stay lit for millions of people every second. To keep the lights on, Meta treats each server like a house with its own thermostat and smoke detector.

Every hour, a hidden “maintenance crew” (software monitors) checks temperature, power use, network traffic, and error logs. If a room gets too hot or a pipe leaks electricity, the crew instantly shuts that house off, moves the load to an empty neighbor, and swaps in a spare unit—much like swapping out a burnt‑out lightbulb before it causes a fire.

Because there are thousands of houses, Meta runs this check continuously on all of them at once. The system learns from past failures, predicts which rooms will overheat next, and pre‑emptively cools or replaces parts before problems arise. In short, Facebook keeps its infrastructure humming by constantly “watching,” “shutting down,” and “replacing” hardware in real time—just as a city’s power grid would maintain constant electricity for all its residents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
