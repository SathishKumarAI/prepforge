---
qid: ing_404b52df9f__star__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:53-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer at a messaging startup, our live chat API was experiencing a spike in support tickets complaining that Markdown formatting (like *italic* or **bold**) was being stripped from incoming text messages sent by external partners.

**Task** – I needed to build an automated validator that would detect any Markdown syntax in user‑supplied content before it hit our database, flag problematic messages, and optionally strip or escape the markup so downstream services could render them safely.

**Action** – I wrote a lightweight Go middleware using the `regexp` package with a precompiled pattern (`\*{1,2}[^*\n]+\*{1,2}`) to catch a broad set of Markdown tokens. The handler scanned each incoming message body, logged matches to Sentry for monitoring, and replaced them with escaped equivalents (`\\*`). I also added unit tests against the `goldmark` parser to ensure edge cases (nested lists, code fences) were handled correctly. Finally, I exposed an optional query param (`?sanitize=true`) so partners could opt‑in to auto‑escaping.

**Result** – Within two weeks of deployment, Markdown‑related support tickets dropped by 85 %. The new middleware processed ~250k messages per day with <1 ms latency overhead. I learned the importance of lightweight regex checks combined with a full parser fallback for edge cases, and how simple API flags can give clients control over data sanitization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
