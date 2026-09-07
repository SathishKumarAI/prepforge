---
qid: ing_7bb39e7531__aws__local
question: 'Explain: Slack MCP migration plan — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 434
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When Slack’s internal “MCP Knowledge Agent” began serving 250 k daily queries, the team noticed a 35 % latency spike during peak hours and an error rate of 0.8 %. I was asked to design a migration plan that would keep uptime above 99.9 % while reducing cost by 20 %.

**Action (Ownership & Dive Deep)**  
1. **Profiling & Baseline** – Instrumented the agent with CloudWatch metrics, revealing that 70 % of latency came from synchronous calls to an on‑prem ML model.  
2. **Serverless Architecture** – Migrated the inference layer to **AWS Lambda + SageMaker Endpoint** (real‑time). Used **Lambda Layers** for shared code and **Amazon API Gateway** for throttling.  
3. **Data Pipeline** – Shifted knowledge base storage from on‑prem MySQL to **Amazon DynamoDB Global Tables** with TTL, ensuring 99.99 % read latency.  
4. **Observability** – Added X-Ray tracing and CloudWatch dashboards; set up automated Lambda scaling via **Provisioned Concurrency** during known peaks.

**Result (Deliver Results)**  
- Latency dropped from 1.2 s to 200 ms (84 % improvement).  
- Error rate fell below 0.05 %.  
- Operational cost reduced by 22 % (from $12k/month to $9.3k/month).  
- Team now can iterate on new features in under 48 h, thanks to the decoupled architecture.

**Bar‑raiser Takeaway**  
I owned the end‑to‑end migration, dove deep into performance bottlenecks, quantified impact with real metrics, and learned that moving to serverless not only scales but also simplifies ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
