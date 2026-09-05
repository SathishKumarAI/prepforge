---
qid: ing_0468d518aa__eli5__local
question: 'Explain: Capacity Planning — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 266
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:24-05:00'
sources: []
---

Think of a live‑comment system like a busy café that must keep customers (comments) moving through the line without getting stuck.  
**Capacity Planning** is figuring out how many baristas, tables, and cash registers you need so every order arrives, is served, and leaves in time.

1. **Traffic estimate** – How many orders per minute? For a stream, look at peak view‑rate (e.g., 10 k viewers × 2 comments each = 20 k msgs/min).  
2. **Processing speed** – One barista can handle ~50 orders/sec; you need enough to keep up with the peak rate.  
3. **Storage buffer** – Like a waiting room, keep a short queue (e.g., 1 s) so that if traffic spikes, messages don’t drop.  
4. **Redundancy** – Duplicate “baristas” on different servers so if one fails, service continues.

So capacity planning is: estimate the busiest moment, match it to how fast your system can process and store messages, and add extra “staff” for safety. This keeps comments flowing smoothly in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
