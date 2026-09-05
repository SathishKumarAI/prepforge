---
qid: ing_13d10a0015__eli5__local
question: 'Explain: Components in Series — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 215
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:42-05:00'
sources: []
---

Imagine building a road that cars must drive straight through to reach their destination. Each stretch of the road is one “component” (a server, a database, a network switch). If any stretch breaks or closes, no car can finish the trip—just like a fault in one component stops the whole system.

**Availability** measures how often each stretch stays open. In series design, the overall availability equals the product of all individual availabilities. So if three stretches are 99 % available, the whole road is only about 97 % (0.99 × 0.99 × 0.99). Even a single weak link drags down the entire journey.

To keep traffic flowing, designers either improve each stretch’s reliability or add “parallel” roads that let cars bypass a broken section. In short, series components share risk: one failure stops everything, so overall availability depends on every part staying operational.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
