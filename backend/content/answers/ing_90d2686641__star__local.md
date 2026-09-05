---
qid: ing_90d2686641__star__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 332
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:25-05:00'
sources: []
---

**Situation** – At my previous role as a backend engineer at a messaging startup, we were rolling out a new feature that let users embed lightweight formatting (bold, italics) in their text messages. During beta testing, our QA team noticed that some messages containing Markdown syntax were being stored incorrectly, causing rendering bugs on the client app.

**Task** – I was tasked with building a robust validation pipeline to detect and sanitize Markdown before persisting any message payloads, ensuring no broken formatting made it to production while keeping user experience intact.

**Action** – First, I mapped out all allowed Markdown patterns (e.g., `*text*`, `_text_`, `**bold**`) using regular expressions in Go. Then I implemented a middleware that intercepted incoming POST requests, ran the regex against the message body, and either stripped or escaped disallowed sequences. To avoid false positives, I added unit tests covering edge cases like nested emphasis and URLs containing asterisks. Finally, I integrated this middleware into our API gateway and set up Prometheus alerts for any validation failures.

**Result** – After deployment, we saw a 98% reduction in formatting errors reported by the client app, cutting support tickets related to Markdown issues by 70%. The solution also improved message load times by 15% due to lighter payloads. I learned that early, automated sanitization combined with comprehensive testing is key when adding user‑generated content features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
