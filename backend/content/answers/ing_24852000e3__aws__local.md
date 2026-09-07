---
qid: ing_24852000e3__aws__local
question: 'Explain: Dynamic Discovery (Tool Search) — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:26-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to enable engineers to find the right AI‑toolchain (LLMs, embeddings, data‑prep pipelines) without hard‑coding every integration. The goal: cut onboarding time by 40 % and reduce support tickets for “how do I use X?” by 30 %.  

**Action**  
I designed a **Dynamic Discovery Service** that treats each tool as an *agent* described in a JSON schema (inputs, outputs, auth).  
1. **Registry & Catalog** – A DynamoDB table stores agent metadata; a Lambda batch syncs with GitHub repos and S3 artifacts.  
2. **Search API** – API Gateway + Cognito → a Go‑based microservice that queries Athena over the catalog, filters by tags (e.g., “LLM”, “image‑generation”), and returns ranked results using a simple cosine‑similarity on description embeddings (SageMaker endpoint).  
3. **Agent Executor** – Each tool runs in an ECS Fargate task behind a Service Mesh; the executor pulls the agent’s Docker image, injects credentials via Secrets Manager, and streams logs to CloudWatch.  

**Result**  
Within 2 months: onboarding time dropped from 8 days to 4 days (‑50 %), support tickets fell 32 %, and the catalog grew to 120 agents with a 99.9 % uptime SLA. Cost stayed < $1,200/month thanks to Fargate spot usage.

**Reflection (Bar‑raiser lens)**  
*Ownership*: I led cross‑team buy‑in and drove end‑to‑end delivery.  
*Dive Deep*: I benchmarked Lambda cold starts vs. Fargate, chose the right caching layer, and tuned Athena partitions for cost.  
*Learn from Failure*: Early prototype hit throttling on Secrets Manager; we switched to Parameter Store with automated rotation, preventing a 15 % latency spike.  

**Leadership Principles Highlighted** – *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
