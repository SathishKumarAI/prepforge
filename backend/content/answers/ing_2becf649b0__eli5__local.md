---
qid: ing_2becf649b0__eli5__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 217
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:01-05:00'
sources: []
---

Think of sending mail in two ways.  
**TCP (used by old‑style HTTP/1.1 & 2)** is like a post office that checks every envelope, waits for the next one to arrive before it can start the next, and if a letter gets lost it will resend it. It’s reliable but can get slow when you have lots of small letters because each must be confirmed before the next goes out.

**UDP (used by QUIC/HTTP/3)** is like a courier who hands over all your parcels at once, doesn’t wait for each to arrive back, and lets you decide which ones are most important. It’s faster but you have to build in your own safety: the courier keeps a list of what was sent and can ask for missing pieces later.

So QUIC is a new “mail system” that uses UDP’s speed but adds its own guarantees (like a safety net) so web pages load quicker without losing data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
