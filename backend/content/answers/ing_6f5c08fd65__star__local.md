---
qid: ing_6f5c08fd65__star__local
question: 'Explain: Unit Cost per Task — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:49-05:00'
sources: []
---

**Situation** – At my previous company we were building a chatbot for customer support. Our QA team found that the average time to resolve an issue was 12 minutes, but we couldn’t tell if the cost of each resolution was due to the agent’s reasoning or manual hand‑offs.

**Task** – I had to quantify the “unit cost per task” for our agentic system so we could compare it with a rule‑based baseline and identify where automation was actually saving money.

**Action** – First, I instrumented the workflow: each user request became a *task* token that logged start/end times, number of sub‑tasks (e.g., intent classification, knowledge‑base lookup), and any human intervention. Using Python’s `timeit` and Prometheus metrics, I calculated the average CPU seconds per task and mapped it to dollars via our cloud provider’s pricing API. Then I ran a controlled experiment: 5,000 tickets split evenly between the AI agent and the legacy system, capturing both compute cost and resolution time.

**Result** – The AI agent had an average unit cost of $0.12 per ticket versus $0.35 for the legacy system— a 66 % reduction in cost while cutting resolution time from 12 to 8 minutes (33 % faster). I learned that granular task metrics uncover hidden inefficiencies, and that reporting them in business terms accelerates stakeholder buy‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
