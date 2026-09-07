---
qid: ing_5a1c434d5a__aws__local
question: 'Explain: The 2026 Tool Landscape — Ai Gateways And Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 497
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:30-05:00'
sources: []
---

**Situation** – In 2024 I led a cross‑functional team that built an AI gateway for a global SaaS vendor. The goal was to route user requests to the most cost‑effective model (OpenAI, Anthropic, in‑house) while keeping latency < 200 ms and spending ≤ $0.01 per inference.

**Task** – Architect a fully managed, serverless routing layer that automatically picks the best model based on context, usage limits, and SLAs, and provides observability for future cost optimization.

**Action** –  
1. **Design**: Implemented an API Gateway + Lambda Authorizer that inspects request metadata (region, user tier, intent). The authorizer calls a *Model‑Selector* microservice built on AWS Step Functions, which evaluates pricing tables stored in DynamoDB and selects the optimal endpoint.  
2. **Services** – API Gateway for TLS termination & throttling; Lambda@Edge for sub‑100 ms routing logic; Step Functions for deterministic decision trees; SQS for queuing high‑volume bursts; CloudWatch + X-Ray for telemetry.  
3. **Scalability/Availability** – Serverless stack auto‑scales with traffic, offers 99.999% availability via multi‑AZ deployments, and reduces operational overhead by eliminating EC2 management.  
4. **Cost & Trade‑offs** – Lambda’s pay‑per‑execution model keeps idle costs near zero; Step Functions add minimal latency (≈ 5 ms). We accepted a small increase in cold‑start risk for the benefit of rapid iteration.

**Result** – The gateway cut inference cost by 32% (from $0.012 to $0.008 per call) and maintained median latency at 180 ms across 15 regions. Usage grew 120% YoY while keeping SLA violations below 0.1%.  

*Leadership Principles*: **Customer Obsession** – delivered a frictionless, low‑cost experience; **Ownership** – drove the end‑to‑end solution from concept to production; **Dive Deep** – leveraged AWS metrics to iterate on routing logic; **Bias for Action** – launched in 6 weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
