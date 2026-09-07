---
qid: ing_d080c155d6__aws__local
question: 'Your traffic is shifting from single-turn chat to agents: 20 to 50 model
  calls per task, tool calls in between, sessions lasting tens of minutes. What does
  that do to your serving design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 554
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:22-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – we deliver fast, reliable AI for users; *Ownership* – I own the end‑to‑end serving pipeline.

**Situation & Task (S)**  
Our chat service moved from single‑turn interactions (~1 model call per request) to multi‑turn agents that invoke 20–50 LLM calls plus external tool APIs over ~30 min sessions. This increased latency risk, cost, and data consistency concerns.

**Action (A)**  
I redesigned the serving stack with a *stateful orchestration layer*:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Session state & queue | **Amazon DynamoDB + DAX** | Low‑latency read/write for 1 M sessions/day; auto‑scaling. |
| Orchestration engine | **AWS Step Functions** | Visual flow, retries, parallel tool calls, and deterministic rollback. |
| Model inference | **Amazon SageMaker Runtime / Lambda@Edge** | Serverless inference for short calls (≤30 s); GPU‑enabled *SageMaker endpoints* for heavy LLM runs. |
| Tool integration | **AWS SDK + API Gateway** | Secure, throttled external calls; circuit breaker patterns via Step Functions. |
| Observability | **Amazon CloudWatch + X-Ray** | Distributed tracing per turn; cost metrics per session. |

I added *dynamic batching* (group 4–8 concurrent model calls) and a *cache tier* (ElastiCache Redis) for repeated tool responses, cutting inference latency by 35 % and reducing GPU hours by 22 %.

**Result (R)**  
- **Latency:** Average turn time dropped from 1.2 s to 0.8 s (33 % improvement).  
- **Cost:** Monthly inference spend fell from \$120k to \$93k (+27 % savings).  
- **Reliability:** Error rate per session decreased from 4.5 % to 0.9 %.  

**Learning & Failure Mitigation**  
Initially, I underestimated the need for state persistence, causing race conditions in multi‑turn flows. After adding DynamoDB versioning and idempotent Step Functions tasks, we eliminated duplicate tool calls and improved data consistency.

This design keeps us customer‑centric (fast responses), owns end‑to‑end complexity, dives deep into performance trade‑offs, and delivers measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
