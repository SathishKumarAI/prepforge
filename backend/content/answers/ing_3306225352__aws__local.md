---
qid: ing_3306225352__aws__local
question: 'Explain: Tools vs. Subagents: Building Effective AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 447
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:43-05:00'
sources: []
---

**Situation (S)** – At a fintech startup we needed an AI‑powered customer support bot that could route queries and suggest solutions in real time. The original plan was to build a monolithic “super‑agent” with dozens of sub‑modules, but the team hit roadblocks: high latency, brittle code, and 3× the projected cost.

**Task (T)** – Reduce engineering effort while maintaining SLA < 200 ms for 95 % of interactions, cut infra spend by 40 %, and keep the system extensible for future use cases.

**Action (A)** –  
1. **Tool‑first mindset**: Instead of a single subagent, we defined *tools*—small, stateless services that expose a REST/GraphQL interface. Each tool handled one business capability (e.g., account lookup, policy recommendation).  
2. **Framework**: Deployed an AWS Lambda layer containing the core orchestration logic and a lightweight “conversation manager” built on Amazon Lex for intent detection.  
3. **Orchestration**: Used Step Functions to coordinate calls to tools; each step ran in parallel where possible, cutting overall latency by 60 %.  
4. **Observability**: Instrumented with CloudWatch metrics and X-Ray traces; set up alerts for >10 % variance in response time.

**Result (R)** – Deployment achieved a 95 % success rate at <180 ms latency, down from the original 250 ms target. Infrastructure cost dropped 42 %, and we added two new tools within 4 weeks without code churn.  

**Leadership Principles** – *Customer Obsession* (fast, reliable service), *Ownership* (end‑to‑end delivery), *Dive Deep* (metric‑driven tuning).  

A bar‑raiser will look for ownership of the end‑state, a clear data trail showing impact, and evidence that we learned from the over‑engineering pitfall by simplifying the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
