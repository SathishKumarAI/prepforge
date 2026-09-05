---
qid: ing_46edb19c4e__star__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 326
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:38-05:00'
sources: []
---

**Situation** – In a client‑facing SaaS platform, we discovered that our input validation only flagged SQL injections when the payload contained a classic `SELECT` or `DROP` keyword. A penetration tester showed us that by chaining benign-looking requests—first inserting a harmless row, then using an update to set a hidden field, and finally executing a payload via a scheduled job—the entire attack could bypass our single‑payload filter.

**Task** – My goal was to design a defense that would detect multi‑step injection chains without breaking legitimate workflows or adding prohibitive latency.

**Action** – I implemented a request‑level correlation engine using the OpenTelemetry stack. Each HTTP request was tagged with a unique trace ID and stored in Redis for 30 seconds. When a suspicious token appeared in any request, the system scanned the entire trace window for preceding “setup” queries that altered data structures. We also added a lightweight heuristic module in our ORM layer to flag SQL fragments that modify schema or schedule tasks before executing a payload. The solution was built on Python with async Redis pipelines and integrated into our existing FastAPI middleware.

**Result** – After deployment, the number of successful injection attempts dropped from 4 per month to zero over six months, while false positives stayed below 1%. I learned that attackers exploit temporal gaps; by treating each session as a stateful transaction, we can close those gaps and protect against sophisticated multi‑step attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
