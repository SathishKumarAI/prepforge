---
qid: ing_319e78b822__eli5__local
question: 'Explain: Power of 9s — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 272
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:26-05:00'
sources: []
---

**High‑Availability: “The Power of 9s”**

Imagine a busy airport runway that never shuts down for maintenance. If one plane has to wait, the whole schedule crashes. Instead, airports use *redundant runways* and backup systems so that if one fails, another takes over instantly. That’s high availability – a system designed to stay up and keep working even when parts break.

The “Power of 9s” is a rule of thumb: if each component works 99 % of the time (one **9**), two in series give you 98 % uptime; three give 97 %, etc. But if you build *redundancy*—two identical components running in parallel—each still at 99 %, the combined system runs 99.99 % of the time (four **9s**). So by duplicating key parts, you turn a single “good enough” component into one that is almost never down. That’s how cloud services keep websites alive 24/7, even when hardware hiccups occur.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
