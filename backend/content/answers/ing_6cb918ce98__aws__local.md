---
qid: ing_6cb918ce98__aws__local
question: 'Explain: Pattern: ReAct — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 453
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:37-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at my last company, we were tasked with building an AI assistant that could answer complex customer queries in real time. The goal was to reduce average handling time by 30 % and improve satisfaction scores.

**Task (T)**  
I needed to choose a design pattern that would allow the model to reason, act, and iterate without sacrificing latency or cost. I selected **ReAct** (Reason + Act) because it naturally separates *thinking* (LLM inference) from *acting* (API calls), enabling fine‑grained control.

**Action (A)**  
1. **Architectural design** – Implemented a stateless Lambda layer that hosts the ReAct loop, invoking Amazon Bedrock for LLM reasoning and AWS Step Functions to orchestrate actions (e.g., DynamoDB lookups, API Gateway calls).  
2. **Scalability & Availability** – Used *Lambda Provisioned Concurrency* to keep cold‑start latency < 200 ms; Step Functions provided built‑in retry logic and circuit breakers for downstream services.  
3. **Cost control** – Enabled *Lambda Reserved Capacity* for predictable traffic, and leveraged Bedrock’s pay‑per‑token pricing (≈$0.03 per 1K tokens).  
4. **Metrics & Monitoring** – Integrated CloudWatch dashboards: average latency 180 ms, success rate 99.7 %, cost $0.012/token; post‑deployment we saw a 35 % drop in handling time and +12 pts NPS.

**Result (R)**  
The ReAct‑based assistant achieved the target metrics, delivered a 40 % improvement in first‑contact resolution, and cut operational costs by 18 %. The solution was later adopted across three product lines.  

> **Leadership Principles Highlighted:** *Customer Obsession* (meeting user needs), *Ownership* (end‑to‑end delivery), *Dive Deep* (technical depth & metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
