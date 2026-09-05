---
qid: ing_68fac3ad33__star__local
question: 'Explain: Beyond expectations — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 381
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:11-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS startup, we noticed that our onboarding emails were hitting a 12 % delivery failure rate during peak traffic months, which caused a noticeable drop in activation metrics.

**Task:**  
I was tasked with designing an automated “resend email” system that would reliably deliver these messages within two business days of the initial send, without overwhelming our mail server or violating anti‑spam policies.

**Action:**  
I built a lightweight microservice using Node.js and AWS Lambda. It listened to SNS notifications from Amazon SES about bounces and complaints. For each failed message I pushed an entry into a DynamoDB table with a retry counter and a scheduled CloudWatch Event that triggered the Lambda again after an exponential back‑off interval (starting at 1 h, doubling up to 24 h). The service also integrated with our existing user database to fetch fresh email addresses and used SES’s “SendRawEmail” API for attachments. I added throttling logic so no more than 50 resend attempts per minute were sent, keeping us within SES sending limits.

**Result:**  
Within three months the failed‑delivery rate dropped from 12 % to 2 %, and we saw a 15 % lift in first‑time user activation. The system cost under $200/month and required less than an hour of daily monitoring. I learned how to balance retry logic with compliance constraints and how small, serverless components can solve large operational problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
