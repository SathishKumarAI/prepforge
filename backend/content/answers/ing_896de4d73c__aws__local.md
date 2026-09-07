---
qid: ing_896de4d73c__aws__local
question: 'Explain: What Tools Are — Tools vs. Subagents: Building Effective AI Agents
  Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 433
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:55-05:00'
sources: []
---

**Situation & Task**  
When launching a customer‑support chatbot for our e‑commerce platform, the team debated whether to build a monolithic “tool” that handled every intent or to orchestrate lightweight **sub‑agents** (micro‑services) each dedicated to a specific domain. The goal was to reduce engineering overhead while keeping latency under 200 ms and cost per interaction below $0.002.

**Approach & Action**  
I championed the *Sub‑Agent* architecture, leveraging Amazon Lex for intent detection, AWS Lambda for stateless logic, and Step Functions to orchestrate sub‑agents. Each sub‑agent was a container in ECS Fargate running a domain‑specific model (e.g., returns, payments). I added an **Observability Layer** with CloudWatch metrics (`subagent_latency`, `error_rate`) and X-Ray tracing for deep dives.

Key decisions:
- *Ownership*: Handled end‑to‑end SLAs via Service Level Objectives in Step Functions.
- *Dive Deep*: Instrumented each Lambda to log token usage; discovered a 15 % performance hit on the payments sub‑agent, prompting model pruning.
- *Bias for Action*: Deployed new sub‑agents incrementally using blue/green deployments in ECS.

**Result**  
Within three weeks:
- **Latency dropped** from 350 ms (monolithic tool) to 140 ms (sub‑agent stack).  
- **Cost per interaction fell** by 22 % due to efficient Fargate scaling.  
- **Customer satisfaction scores** increased by 18 points on the CSAT survey.

The bar‑raiser highlighted that my solution showcased *ownership* of performance, a *deep dive* into metric anomalies, and clear *quantified impact*. I also documented the failure point (over‑engineered monolith) and learned to balance feature breadth with modular simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
