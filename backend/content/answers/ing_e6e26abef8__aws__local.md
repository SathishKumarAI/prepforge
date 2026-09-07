---
qid: ing_e6e26abef8__aws__local
question: 'Explain: MCP Discovery Protocol — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 637
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:25-05:00'
sources: []
---

**Situation – Task**  
At my previous role I led a cross‑functional squad tasked with automating the rollout of security‑policy agents to every on‑prem and cloud VM in our 12‑region fleet (≈ 45 000 instances). The business needed a *zero‑touch* discovery protocol that could identify any machine, pull its metadata, and push an agent without manual inventory.

**Action – Design & Execution**  
I championed the **MCP Discovery Protocol**—a lightweight, idempotent HTTP/2 handshake built on TLS 1.3. Each target ran a minimal “probe” service (Docker container) that exposed `/mcp/discover`. Our orchestrator was an AWS‑native stack:

| Layer | Service | Rationale |
|-------|---------|-----------|
| **Discovery** | Amazon ECS + Fargate | Serverless scaling, no EC2 overhead |
| **Metadata Store** | DynamoDB (global table) | Low‑latency writes/reads, multi‑region replication |
| **Agent Push** | AWS CodeDeploy + SSM Run Command | Zero‑downtime deployment, audit logs |
| **Monitoring** | CloudWatch & X-Ray | Trace latency, failure rates |

The probe returned a signed JSON Web Token with instance ID, OS family, and current compliance score. The orchestrator verified the token, queried DynamoDB for pending policy bundles, and invoked CodeDeploy to ship the agent via SSM. All traffic was encrypted; we added an audit trail in CloudTrail.

**Result – Data‑driven Impact**  
- **Deployment speed:** 95 % of machines received the agent within 30 min versus the prior 4‑hour manual process (40 % faster).  
- **Reliability:** Success rate > 99.8%; failures were auto‑retryable via SSM’s retry logic.  
- **Cost:** Reduced on‑prem management overhead by $180K annually, and cut ECS compute costs to <$5K/month from the previous $12K.

**Reflection – Bar‑raiser Insights**  
*Ownership*: I owned end‑to‑end latency and cost; we iterated on token size after a 2 % SLA dip.  
*Dive Deep*: The 30‑second bottleneck traced back to DynamoDB read capacity; adding a GSI solved it.  
*Learned from Failure*: A mis‑configured IAM role caused a 15 min outage; I added guardrails and automated checks.

**Leadership Principle Anchors**  
- **Customer Obsession:** Delivered instant, reliable agent deployment that reduced security gaps.  
- **Ownership & Dive Deep:** Took full responsibility for protocol design, performance tuning, and post‑mortem analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
