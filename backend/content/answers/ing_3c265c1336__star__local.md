---
qid: ing_3c265c1336__star__local
question: 'Explain: F6: Cost runaway from a buggy task — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:41-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading the rollout of our new autonomous compute‑allocation agent for the cloud‑based AI inference service. Early tests showed latency was fine, but the billing logs kept spiking: a single nightly job was using twice the budget we’d forecasted.

**Task** – My goal was to pinpoint why the agent was overspending and re‑engineer it so that cost stayed within 5 % of the projected $12K/month budget while maintaining inference throughput.

**Action** – I first instrumented the agent’s decision engine with OpenTelemetry, capturing every resource request. The trace data revealed a logic bug: when a GPU was idle for >30 s, the agent mistakenly re‑queued the same job to a cheaper but slower CPU pool, then immediately pulled it back to GPU once the queue cleared—creating a costly ping‑pong loop. I rewrote that branch in Rust, added idempotent task IDs, and introduced a 10‑minute cooldown flag. I also set up Prometheus alerts for cost thresholds.

**Result** – After deployment, nightly spend dropped from $24K to $12.3K, keeping us within budget. Latency increased only 2 %, and the new telemetry gave us real‑time cost visibility. I learned that even small decision‑tree bugs can cause exponential cost blowups, so rigorous tracing and cooldown logic are essential in autonomous compute agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
