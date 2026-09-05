---
qid: ing_985447924b__star__local
question: 'Explain: Battle-tested infrastructure — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:14-05:00'
sources: []
---

**Situation**  
At a SaaS startup I was responsible for the onboarding flow that sent welcome emails to every new user. In early beta we saw a 12 % bounce rate and several complaints about delayed or missing emails, hurting our activation metric.

**Task**  
Build a battle‑tested infrastructure that guaranteed delivery and allowed developers to trigger “resend” from the admin console without manual intervention, while keeping costs under $200/month.

**Action**  
I designed a decoupled pipeline: new user records pushed into an Amazon SQS queue; a Lambda worker pulled messages, invoked AWS SES with a dedicated sending pool, and logged success or bounce to DynamoDB. For resends I exposed a small API endpoint that re‑queued the original message after updating its status. The worker idempotently retried failed sends up to three times, using exponential back‑off and CloudWatch alarms for failures. We added an SNS topic that sent alerts to Slack when a user bounced more than twice.

**Result**  
Within two weeks we cut the bounce rate from 12 % to <1 %. Activation rose by 18 %, and the new resend feature reduced support tickets about missing emails by 75 %. The architecture cost us $140/month, staying well below budget. I learned how decoupling with SQS/Lambda gives resilience and auditability for critical email flows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
