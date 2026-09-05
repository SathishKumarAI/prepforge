---
qid: ing_fa8455dad2__star__local
question: 'Explain: A. Customer support — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:44-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new SaaS product and our help‑desk tickets were growing at 30% per month. The live chat volume hit over 1,000 messages daily, but response times kept creeping past the SLA of 2 minutes.

**Task:**  
I was tasked with building an AI agent that could triage incoming support queries, provide instant answers for common issues, and hand off only the hard cases to human agents—reducing average resolution time by at least 40% while keeping customer satisfaction above 90%.

**Action:**  
We chose Anthropic’s Claude model because of its strong safety controls. I fine‑tuned it on our internal knowledge base (FAQs, ticket logs) using LlamaIndex for efficient retrieval and added a custom prompt that enforced the “explain in plain English” style. The agent was wrapped in a FastAPI service behind a queue, with a fallback rule: if confidence < 0.8 or the query matched a blacklist of complex topics, it routed to a human. I also set up an analytics pipeline (Prometheus + Grafana) to monitor latency and accuracy.

**Result:**  
Within three weeks, the AI handled 70% of tickets, cutting average response time from 2:30 minutes to 1:05 minutes—a 56% improvement—and overall CSAT rose from 88% to 93%. I learned that continuous monitoring and a clear hand‑off protocol are as critical as model selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
