---
qid: ing_e0214e61e7__eli5__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 247
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:31-05:00'
sources: []
---

Imagine you’re planning a road trip with friends and want to know how long it will take. You don’t have GPS, so you make a quick “back‑of‑the envelope” estimate: count the miles, guess an average speed, and add a few minutes for stops. In machine learning, that same rough calculation is called **traffic back‑of‑the envelope** when designing a system that handles many requests (traffic).

First, define the terms you can’t skip:

* **Traffic** – how many data queries or model predictions come in per second.
* **Back‑of‑the envelope** – a quick, hand‑wave calculation to gauge feasibility.

You start by estimating how many predictions your model needs each minute. Then you figure out how fast one GPU can run the model (say 1,000 predictions/second). Divide traffic by speed to see how many GPUs you’d need. Add a safety margin for spikes and latency. That simple division gives you an initial blueprint—just like estimating miles with average speed—before diving into detailed engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
