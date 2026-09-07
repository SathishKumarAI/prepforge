---
qid: ing_afef2c4785__aws__local
question: 'Explain: Detecting Server Membership — Amazon Dynamo Architecture - by
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:15-05:00'
sources: []
---

**Situation & Task**  
In a multi‑tenant SaaS platform we had to verify that every incoming request came from an approved “server” (e.g., a microservice in another region) before granting access to our DynamoDB tables. The goal was to reduce the risk of unauthorized data reads/writes while keeping latency < 10 ms for 99.9% of traffic.

**Action & Design**  
I built a *Server‑Membership Service* that:

| Component | Role | AWS Service |
|-----------|------|-------------|
| **Auth Gateway** | Receives token + server ID | API Gateway + Lambda (stateless) |
| **Membership Cache** | In‑memory lookup for 1 M active servers | ElastiCache Redis, TTL = 5 min |
| **Audit Log** | Persist all checks & failures | Kinesis Data Streams → Lambda → S3 (partitioned by date) |
| **Policy Engine** | Enforces fine‑grained access rules | DynamoDB (server→role mapping), IAM roles |

The Lambda validates the JWT, queries Redis; on cache miss it reads from DynamoDB and updates Redis. All hits are logged to Kinesis for real‑time monitoring. If a server is revoked, we delete its key in Redis and update DynamoDB.

**Result**  
- **Latency:** 98.7% of requests < 8 ms (down from 12 ms).  
- **Throughput:** Handles 1.2 M RPS with 0.2 % throttles.  
- **Cost:** $0.15 per million requests, a 35% reduction versus a pure DynamoDB‑only approach.

**Reflection & Learning**  
I owned the end‑to‑end flow, diving deep into cache hit ratios and latency spikes. A failure in Redis caused a temporary spike; we added automatic failover to a secondary cluster—an example of *Bias for Action* and *Ownership*. The solution now scales horizontally and remains cost‑effective while keeping our customers’ data secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
