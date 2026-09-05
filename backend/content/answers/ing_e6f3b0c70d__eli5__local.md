---
qid: ing_e6f3b0c70d__eli5__local
question: 'Explain: Scaling Different Components — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:59-05:00'
sources: []
---

Think of a machine‑learning system as a busy kitchen that prepares many dishes at once.  
**Scalability** is the ability to keep up when orders (data) grow. It comes in three parts:

1. **Data scaling** – like adding more ovens, so you can bake more bread at the same time.  
2. **Model scaling** – adding more chefs or training machines, so complex recipes (deep models) can be cooked faster.  
3. **Serving scaling** – opening extra counters, letting many customers get their plates without waiting.

If only one part grows while the others stay small, the kitchen bottlenecks—customers wait, ovens overheat, or chefs idle. A good design balances all three: more storage for data, more compute power for training, and more servers to serve predictions. That way, as orders explode, every component keeps pace without breaking down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
