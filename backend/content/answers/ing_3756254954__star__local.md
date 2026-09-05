---
qid: ing_3756254954__star__local
question: 'Explain: Summarizing Post Incident Reviews with GPT-4'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 337
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:55-05:00'
sources: []
---

**Situation** – After a critical outage that knocked our live recommendation engine offline for 3 hours, the ops team had logged over 400 error events and dozens of chat transcripts in Jira. The post‑incident review meeting was scheduled for the next day, but with such volume it would have taken the engineering lead almost an hour to hand‑pick key points.

**Task** – I needed to deliver a concise, actionable summary that highlighted root causes, impacted metrics (downtime 3 h → 0.2% SLA hit), and next‑step mitigations, all within 10 minutes of the meeting.

**Action** – I built an internal tool that ingested Jira tickets, Slack logs, and CloudWatch alerts, then fed them to GPT‑4 via the OpenAI API with a custom prompt: “Extract the incident timeline, root cause, impacted metrics, and remediation plan in bullet form.” I added a fine‑tuning layer that cross‑checked dates against our internal log timestamps. The output was automatically formatted into a PowerPoint slide deck using python-pptx.

**Result** – The team reviewed the summary in 12 minutes instead of an hour, identified that a missing circuit breaker caused the cascade, and implemented it within two sprints—reducing similar outages by 95% next quarter. I learned how to blend LLMs with structured data for rapid incident post‑mortems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
