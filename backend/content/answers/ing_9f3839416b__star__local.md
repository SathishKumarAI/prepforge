---
qid: ing_9f3839416b__star__local
question: 'Explain: Faster time to inbox — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 370
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:42-05:00'
sources: []
---

**Situation**  
In my last role at a SaaS startup, our onboarding email sequence was stuck in the “sent” state for up to 30 seconds because every resend hit the SMTP server directly and waited for an ack before moving on. This lag caused a noticeable delay in new users seeing their welcome emails, and we were hitting the daily send quota quickly.

**Task**  
I needed to cut the time from trigger to inbox delivery by at least 50% while keeping the retry logic robust so that failed sends didn’t get lost.

**Action**  
I refactored the resend flow into a lightweight RabbitMQ queue. Each email payload is pushed to a “resend” queue, and a pool of worker processes pulls messages, hits our SMTP relay asynchronously via an HTTP/2 connection pool (using `aiohttp`), and immediately returns a success token. I added exponential back‑off with jitter for retries, capped at three attempts, and logged each attempt in Redis for real‑time monitoring. The workers also update a Prometheus metric so we can alert on increasing failure rates.

**Result**  
The average time from trigger to inbox went from 30 seconds down to under 5 seconds—a 83% reduction. Bounce rate fell by 12%, and our daily quota usage dropped because retries were now handled outside the main request path. I learned that decoupling delivery logic with a message queue not only boosts performance but also gives you granular observability over email health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
