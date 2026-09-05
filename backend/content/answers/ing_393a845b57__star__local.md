---
qid: ing_393a845b57__star__local
question: You're building a production agent that calls tools (function calling).
  What makes the loop reliable enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 380
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:06-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time customer support bot that could call external APIs (weather, flight status, ticketing) via function calling in GPT‑4o. The pilot phase had 2,000 daily users and the SLA required 99.5 % success for any tool invocation.

**Task** – Build a robust request–response loop so that every function call either completes correctly or fails gracefully within 3 seconds, with clear audit logs and minimal impact on user experience.

**Action** – I wrapped the OpenAI endpoint in a retry‑with‑exponential backoff layer (max 3 tries) and added a deterministic schema validator (Pydantic) to ensure returned data matched the tool’s signature. For each call I logged request ID, latency, status, and payload size to an Elastic stack for real‑time monitoring. I also introduced circuit‑breaker logic: after 5 consecutive failures on a particular function, the bot falls back to a canned response and alerts ops via PagerDuty. Unit tests covered all edge cases (null fields, timeouts) and we ran integration tests against live APIs in staging.

**Result** – In production we hit 99.7 % tool‑call success over a month, reduced user‑reported errors by 40 %, and cut average latency from 1.8 s to 1.2 s after tuning the retry window. I learned that combining schema validation, observability, and graceful degradation is key to shipping reliable AI function‑calling loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
