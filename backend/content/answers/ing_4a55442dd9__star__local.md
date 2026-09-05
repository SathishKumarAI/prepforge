---
qid: ing_4a55442dd9__star__local
question: 'Explain: Broadcast analytics — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 325
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:02-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS startup, we launched a new feature that sent onboarding emails to every new user. Within the first week, our engagement metrics dropped: only 12% of recipients opened the email and just 4% clicked through to the dashboard. We realized many users were missing the email due to spam filters or timing issues.

**Task:**  
I was tasked with designing a “resend” workflow that would automatically re‑send the onboarding email to any user who hadn’t opened it within 48 hours, without spamming those who had already engaged.

**Action:**  
I built an event‑driven pipeline in AWS: every outbound email triggered a CloudWatch Event, which wrote a record to DynamoDB with `opened=false`. A scheduled Lambda ran nightly, scanned for records where the timestamp was >48 hrs and `opened=false`, then queued a resend through SES. To avoid duplication, I added an idempotency key based on user ID + campaign ID. We also set up CloudWatch dashboards to monitor open rates in real time.

**Result:**  
After deploying the resend logic, open rates rose from 12% to 28%, and click‑throughs increased by 18%. The overall conversion rate for new users grew by 7%, translating into roughly $120K additional ARR per year. I learned how to balance automation with user experience and the importance of observability in email campaigns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
