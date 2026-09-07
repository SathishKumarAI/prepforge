---
qid: ing_555a576882__aws__local
question: 'Q: When would you use CrewAI instead of LangGraph?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team building an AI‑powered customer support bot that needed to surface contextual knowledge from millions of internal documents while keeping latency < 200 ms for 10k concurrent users.

**Action – Choosing the right framework**  
After evaluating options, I chose **CrewAI** over LangGraph because:

| Requirement | CrewAI ✔︎ | LangGraph ❌ |
|-------------|-----------|--------------|
| Decoupled “crew” of specialized agents (search, summarizer, QA) | Yes | Not native |
| Built‑in task orchestration & retry logic | Yes | Manual |
| Seamless integration with SageMaker endpoints & Athena queries | Yes | Requires custom plumbing |
| Low‑code, rapid iteration for product teams | ✔︎ | ❌ |

I designed a **crew** of three agents: `Retriever`, `Summarizer`, and `Responder`. Each agent was an independent Lambda (or Fargate) container, triggered via Step Functions. I used **Amazon Bedrock** for LLM inference, **S3** for knowledge storage, and **Athena** for ad‑hoc queries. The orchestration handled failures with exponential back‑off, ensuring a 99.9% success rate.

**Result**  
- Reduced average response time from 350 ms to **180 ms** (30% improvement).  
- Cut operational costs by 22% compared to the LangGraph prototype (due to fewer custom glue services).  
- Enabled rapid A/B testing: we launched two new agent behaviors in < 48 h, improving customer satisfaction scores by **12 points**.

**Reflection & Learning**  
I realized early that LangGraph’s graph model was overkill for a *task‑oriented* bot; CrewAI’s “crew” abstraction matched our domain. I documented this trade‑off and added an internal playbook, ensuring future teams avoid unnecessary complexity.

> **Leadership Principles**: *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
