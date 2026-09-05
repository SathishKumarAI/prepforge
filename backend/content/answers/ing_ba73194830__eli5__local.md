---
qid: ing_ba73194830__eli5__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 203
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:42-05:00'
sources: []
---

Think of a big restaurant that must stay open all day. The **active** kitchen is where chefs cook the food you order right now. A second, identical kitchen sits in the same building but stays empty—no one cooks there until something goes wrong with the first one. This backup kitchen is called *standby*.

If the active kitchen suddenly stops (a power outage or a fire), the restaurant’s manager immediately switches all orders to the standby kitchen so customers keep getting food without interruption. Once the problem is fixed, they can switch back.  

In computer systems, **Active‑Passive (Standby)** works the same way: one server handles all traffic (active) while an identical, idle copy sits ready to take over instantly if the active one fails. This keeps services running smoothly with minimal downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
