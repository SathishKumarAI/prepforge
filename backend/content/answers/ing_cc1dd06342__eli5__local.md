---
qid: ing_cc1dd06342__eli5__local
question: How availability is measured? — Highavailability
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 193
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:31-05:00'
sources: []
---

Imagine your favorite streaming service as an AI that needs to stay online so you can watch videos anytime. **High availability** is like having a backup power generator and extra cables so the service never goes dark when something fails.

In practice, we measure it by looking at two things:

1. **Downtime** – how long the system is actually offline during a set period (e.g., one month).  
2. **Recovery time** – how quickly it comes back up after a hiccup.

If the service runs for 99.9 % of the time, that means only about 8.7 hours of downtime per year—almost as reliable as having a spare generator ready to fire up instantly. This simple “run‑time versus fail‑over” check tells us whether an AI system is truly high‑availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
