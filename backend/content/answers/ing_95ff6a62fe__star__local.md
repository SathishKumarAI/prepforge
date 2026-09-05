---
qid: ing_95ff6a62fe__star__local
question: 'Explain: Galileo Luna-2: Distilled Judges at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 326
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:48-05:00'
sources: []
---

**Situation** – When I joined the AI Ops team at a cloud‑provider, we were running an automated compliance engine that evaluated every microservice deployment against hundreds of security policies. The policy engine was written in Go and used a rule‑based “judge” library, but each judge ran sequentially, causing a 30 % slowdown on our nightly builds.

**Task** – I needed to scale the judges so that the entire compliance check could finish under five minutes without compromising accuracy or auditability.

**Action** – First, I profiled the engine and discovered that many judges were independent; only a handful had cross‑dependencies. I refactored the judge interface into a lightweight “distilled” version that exposed just the decision logic, stripping out heavy context data. Then I built a worker pool using Go’s `context` package to run distilled judges concurrently across multiple CPU cores, passing only minimal inputs via channels. To preserve audit logs, I re‑integrated the original judge when a rule flagged an issue, ensuring full traceability.

**Result** – The compliance scan time dropped from 18 minutes to under 4 minutes—a 78 % speedup—while maintaining 100 % policy coverage and keeping our audit trail intact. I learned that judicious abstraction (distilling complex components) coupled with careful concurrency can unlock massive performance gains in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
