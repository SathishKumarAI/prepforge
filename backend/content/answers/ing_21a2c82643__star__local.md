---
qid: ing_21a2c82643__star__local
question: Design the human-handoff path for a customer-service agent. When should
  it escalate, and what does a good handoff look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 302
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:53-05:00'
sources: []
---

**Situation:** In my last role at an e‑commerce startup, we launched a chatbot that handled 70% of customer inquiries but our SLA for complex issues was slipping from 95% to 82% during peak traffic.

**Task:** I had to design a human‑handoff workflow that kept the bot’s efficiency while ensuring critical tickets were escalated promptly and customers felt seamless support.

**Action:** First, I mapped intent confidence scores against historical resolution times. I set a threshold of <0.6 confidence or any request containing “refund” or “billing” to trigger auto‑escalation after two bot attempts. For handoff, the bot passed context via a JSON payload (chat history, user ID, and ticket priority) into our ticketing system using Zapier + Zendesk API. I added a “handoff preview” UI where the agent sees the last 5 bot turns, enabling them to pick up without re‑asking questions. We also logged handoff latency and introduced a KPI dashboard in Grafana that highlighted any bottlenecks.

**Result:** SLA improved from 82% to 96% within two weeks; average handoff time dropped from 4.2 min to 1.8 min. I learned that combining confidence metrics with domain keywords, coupled with a transparent context transfer, turns an opaque bot into a reliable partner for agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
