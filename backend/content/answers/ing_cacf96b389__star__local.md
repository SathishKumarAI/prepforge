---
qid: ing_cacf96b389__star__local
question: 'Explain: IP and domain monitoring — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 331
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:32-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new marketing campaign that sent 200k transactional emails per day. Within the first week, our bounce rate spiked to 8% and several clients reported their emails landing in spam.

**Task:**  
I had to build an automated IP‑and‑domain monitoring system that could detect reputation drops, trigger alerts, and automatically resend failed messages from a clean IP pool within minutes.

**Action:**  
I integrated SendGrid’s Reputation Dashboard with our own telemetry pipeline. Using AWS Lambda I parsed delivery logs in real time, calculated a rolling “spam score” per IP, and compared it against an SLA threshold (score > 75). When the score breached the limit, the Lambda function swapped the sender domain to a backup SPF record, updated DKIM keys, and invoked SES’s resend API. I also added Grafana dashboards to visualize bounce trends and set PagerDuty alerts for manual review.

**Result:**  
The automated system cut our spam‑bounce rate from 8% to 1.2%, restored deliverability within 12 minutes of detection, and reduced support tickets by 60%. I learned how tightly coupled monitoring, reputation management, and rapid failover can keep email infrastructure resilient at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
