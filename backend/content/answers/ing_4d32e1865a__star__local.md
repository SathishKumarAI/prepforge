---
qid: ing_4d32e1865a__star__local
question: 'Explain: When Computer-Use Beats API Calls — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 297
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:48-05:00'
sources: []
---

**Situation:** In late 2023 I was leading a feature for our fintech app that needed real‑time fraud detection across multiple banking partners. The data feeds were inconsistent, with some banks only offering legacy SOAP endpoints and others providing no API at all.

**Task:** My goal was to deliver a unified fraud engine that processed transactions within 200 ms while keeping engineering effort minimal and avoiding vendor lock‑in.

**Action:** I built a lightweight “computer‑use agent” that ran on each bank’s internal gateway. Instead of polling APIs, the agent monitored outbound transaction logs using file‑system watchers (inotify on Linux). When a new log entry appeared, it parsed the record, enriched it with local risk rules, and pushed the result to our Kafka queue via a minimal HTTP client. This bypassed slow or missing APIs, leveraged existing infrastructure, and allowed us to add new banks by simply installing the agent script.

**Result:** The fraud engine’s latency dropped from 1.2 s (API‑driven) to 180 ms, and we reduced support tickets by 35 % because the agents handled intermittent API outages automatically. I learned that sometimes the best integration is a simple file‑watcher + local logic rather than chasing every external API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
