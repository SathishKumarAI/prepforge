---
qid: ing_750283bb6f__eli5__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 241
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:26-05:00'
sources: []
---

Imagine you’re asked to build a parking garage, but the first thing people often do is jump straight into fancy math or draw a perfect layout without asking any questions. That’s like assuming:

* **Everyone drives the same size car** – in reality cars vary from compact to SUV, so a one‑size‑fits‑all lane is wasteful.
* **All parking spots will be used at the same time** – traffic peaks and valleys mean some levels can stay empty while others are jammed.
* **The entrance gate will never get stuck** – a single entry point can become a bottleneck if too many cars arrive simultaneously.

These “incorrect assumptions” give you a design that looks good on paper but collapses under real traffic.  
A better start is to ask simple, concrete questions: How many cars might arrive in an hour? What sizes do they come in? Where will the gates be placed? By grounding your plan in these facts—just as a builder checks soil and load limits before laying bricks—you avoid costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
