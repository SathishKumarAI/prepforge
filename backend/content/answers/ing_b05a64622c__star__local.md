---
qid: ing_b05a64622c__star__local
question: 'Explain: Modular webhooks — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:36-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a SaaS platform that sent transactional emails to customers via a third‑party provider. A sudden spike in traffic during a product launch caused our webhook endpoint to time out on about 12% of the events, and the email service flagged them as “failed” even though the message had already been queued.

**Task:**  
I was tasked with designing a resilient system that could automatically detect failed webhook deliveries and trigger a resend of the corresponding email without duplicating content or breaking user experience.

**Action:**  
I implemented a modular webhook architecture in Node.js using Express and AWS Lambda. First, I wrapped every incoming event in a lightweight wrapper that stored payloads in DynamoDB with a “status” flag. On timeout, the lambda function queued a retry job into SQS. A separate worker consumed these jobs, checked if the email was already sent by querying our mail‑tracking table, and then invoked the resend endpoint of the provider only when necessary. I also added exponential backoff and circuit‑breaker logic to avoid hammering the provider during outages.

**Result:**  
After deployment, failure rates dropped from 12% to <0.5%, while overall email deliverability improved to 99.9%. The retry mechanism saved us ~$3k/month in wasted provider credits and reduced support tickets by 70%. I learned that building a modular, stateful webhook pipeline is far more reliable than relying on the provider’s built‑in retry logic alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
