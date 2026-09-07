---
qid: ing_d3c8b85680__aws__local
question: 'Explain: Tool design & the policy engine — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 516
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:26-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build an AI‑powered “Support Agent” that could automatically triage tickets and suggest policy‑compliant actions for our global help desk. The goal was to cut first‑response time (FRT) by 40 % while keeping error rates below 2 %.

**Action**  
*Architecture*:  
- **API Gateway + Lambda Authorizer** → secure, scalable entry point.  
- **SageMaker Endpoint** (BERT fine‑tuned on historical tickets) → intent extraction and sentiment scoring.  
- **Step Functions** orchestrate a *policy engine* that queries **DynamoDB** for current compliance rules (stored as JSON with TTL). Rules are evaluated via AWS Lambda using the `jsonpath` library, allowing rapid updates without redeploys.  
- **EventBridge** pushes policy changes to all running agents, ensuring zero‑downtime rollouts.  
- **CloudWatch Metrics + X-Ray** give real‑time visibility into latency and error rates.

*Design choices*: I favored serverless for elasticity (cost ≈ $0.0000167 per 1 k req) and used DynamoDB’s conditional writes to guarantee atomic rule updates, meeting the SLA of < 200 ms response time.

**Result**  
- FRT dropped from **12 min → 3.6 min** (a 70 % reduction).  
- Policy‑related errors fell from **4.5 % → 1.8 %**.  
- Operational cost decreased by **$18k/month** due to auto‑scaling and pay‑as‑you‑go.

**Learnings**  
I practiced *Ownership*—owning the end‑to‑end pipeline—and *Dive Deep* by profiling every Lambda cold start, discovering a 15 % latency hit from the policy engine’s JSON parsing. I refactored to cache rules in ElasticCache, cutting that latency to < 30 ms.

**Leadership Principles**  
- **Customer Obsession**: Deliver faster, more accurate support.  
- **Ownership**: From data ingestion to policy updates, I took full responsibility for quality and uptime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
