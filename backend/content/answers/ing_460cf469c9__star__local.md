---
qid: ing_460cf469c9__star__local
question: 'Explain: Dynamic suppression list — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 317
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:41-05:00'
sources: []
---

**Situation:** At my last startup we ran a transactional email service for a SaaS client with over 50,000 daily sends. Our bounce rate spiked to 12% after a sudden spike in spam complaints, threatening our sender reputation and SLA penalties.

**Task:** I had to design a dynamic suppression list that automatically filtered out addresses generating bounces or complaints while still allowing legitimate resend attempts for developers who needed to retry sending critical notifications.

**Action:** I built an event‑driven pipeline using AWS Lambda triggered by SES bounce/complaint events. The lambda parsed the event payload, updated a DynamoDB table with a suppression flag and timestamp, and published a message to an SNS topic. For developer resends, we exposed a small API endpoint that checked the suppression table; if the suppression age exceeded 30 days or the user had opted‑in via our web UI, the request was forwarded to SES again. I also added a retry backoff algorithm (exponential with jitter) and logged each decision in CloudWatch for auditability.

**Result:** The bounce rate dropped from 12% to below 2% within two weeks, and we avoided any sender reputation penalties. Developers could still resend critical emails with a 95% success rate after the suppression window. I learned how to balance strict suppression rules with business flexibility by leveraging serverless event streams and fine‑grained time‑based logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
