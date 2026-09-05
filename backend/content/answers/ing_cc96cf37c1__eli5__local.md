---
qid: ing_cc96cf37c1__eli5__local
question: 'Explain: Incident 2: Cascading Failure in Multi-Agent System (2025)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 186
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:18-05:00'
sources: []
---

**Cascading failure in a multi‑agent system**

Imagine a neighborhood where every house has a smart thermostat that talks to its neighbors to keep the whole area comfortable. One day, one thermostat malfunctions and starts sending wrong temperature data—too hot. The other thermostats receive this faulty signal and react by turning their own heating on, thinking the neighborhood is cold. Soon, all the heaters fire up, making the entire block scorchingly hot. Because each thermostat relies on its neighbors’ messages, the single glitch spreads like a wave of heat until every house is affected.

In this analogy:

- **Multi‑agent system** = many independent devices (thermostats) that communicate.
- **Cascading failure** = one agent’s error causes others to fail in turn, creating a chain reaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
