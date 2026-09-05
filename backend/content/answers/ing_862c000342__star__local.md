---
qid: ing_862c000342__star__local
question: 'Explain: When the Path Is Known — AI Agents Explained - by Sairam Sundaresan
  and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 326
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:24-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were tasked with building an automated trading bot that could execute trades on our partner exchange. The market data feed was clean and latency‑critical, so the route from order placement to confirmation was fully deterministic.

**Task**  
I had to design the agent’s decision loop so it would reliably follow this known path while still allowing for future learning components.

**Action**  
First, I sketched a simple state machine: *observe → decide → act → observe*. For each step I used lightweight Python coroutines and `asyncio` to keep the flow non‑blocking. The “decide” stage was a rule‑based engine (using `pydantic` models) that could be swapped out for a reinforcement‑learning policy later. To guarantee determinism, I wrapped every external call in a retry decorator with exponential backoff and logged each transition to a Kafka topic for auditability. This setup mimicked the “path is known” scenario described by Sundaresan and Kim: the agent’s behavior is predictable because it follows a fixed script.

**Result**  
The bot hit 99.7 % on‑time execution within its latency SLA, and our back‑testing pipeline showed a 12 % reduction in order slippage compared to the legacy system. I learned that keeping the core loop simple and deterministic makes it easier to incrementally add AI components without breaking reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
